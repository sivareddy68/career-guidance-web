
import { NextResponse } from "next/server";

const OLLAMA_URL =
  process.env.OLLAMA_URL ||
  "http://127.0.0.1:11434/api/generate";

const OLLAMA_MODEL =
  process.env.OLLAMA_MODEL || "qwen2.5:3b";

const CLOUDFLARE_ACCOUNT_ID =
  process.env.CLOUDFLARE_ACCOUNT_ID || "";

const CLOUDFLARE_API_TOKEN =
  process.env.CLOUDFLARE_API_TOKEN || "";

const CLOUDFLARE_MODEL =
  process.env.CLOUDFLARE_MODEL ||
  "@cf/meta/llama-3.1-8b-instruct";

// --------------------------------------------------
// JSON PARSER
// --------------------------------------------------

function parseAIJson(raw: string) {
  if (!raw || !raw.trim()) {
    throw new Error("AI returned an empty response.");
  }

  const text = raw.trim();

  // First try the complete response directly.
  try {
    return JSON.parse(text);
  } catch {
    // Continue with extraction below.
  }

  // Remove common Markdown code fences.
  const cleaned = text
    .replace(/^```json\s*/i, "")
    .replace(/^```\s*/i, "")
    .replace(/\s*```$/i, "")
    .trim();

  try {
    return JSON.parse(cleaned);
  } catch {
    // Continue with balanced JSON extraction.
  }

  // Find the first complete JSON object.
  // This avoids the old first-{ / last-} problem when
  // the AI returns extra JSON or text after the object.
  let start = -1;
  let depth = 0;
  let inString = false;
  let escaped = false;

  for (let i = 0; i < cleaned.length; i++) {
    const char = cleaned[i];

    if (start === -1) {
      if (char === "{") {
        start = i;
        depth = 1;
      }

      continue;
    }

    if (escaped) {
      escaped = false;
      continue;
    }

    if (char === "\\") {
      escaped = true;
      continue;
    }

    if (char === '"') {
      inString = !inString;
      continue;
    }

    if (inString) {
      continue;
    }

    if (char === "{") {
      depth++;
    } else if (char === "}") {
      depth--;

      if (depth === 0) {
        const candidate = cleaned.substring(start, i + 1);

        try {
          return JSON.parse(candidate);
        } catch {
          // Keep searching for another possible JSON object.
          start = -1;
          depth = 0;
        }
      }
    }
  }

  throw new Error(
    "AI returned invalid JSON. Please try generating the resume again."
  );
}

// --------------------------------------------------
// LOCAL OLLAMA AI
// --------------------------------------------------

async function askOllama(prompt: string, numPredict = 1600) {
  const controller = new AbortController();

  const timeout = setTimeout(() => {
    controller.abort();
  }, 90000);

  try {
    const response = await fetch(OLLAMA_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: OLLAMA_MODEL,
        prompt,
        stream: false,
        format: "json",
        options: {
          temperature: 0.2,
          num_predict: numPredict,
          num_ctx: 4096,
        },
      }),
      signal: controller.signal,
      cache: "no-store",
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Ollama error: ${errorText}`);
    }

    const data = await response.json();
    const raw = data?.response?.trim();

    return parseAIJson(raw);
  } finally {
    clearTimeout(timeout);
  }
}

// --------------------------------------------------
// CLOUD HOSTED AI - CLOUDFLARE WORKERS AI
// --------------------------------------------------

async function askCloudflare(prompt: string, numPredict = 1600) {
  if (!CLOUDFLARE_ACCOUNT_ID || !CLOUDFLARE_API_TOKEN) {
    throw new Error(
      "Cloudflare AI is not configured. Add CLOUDFLARE_ACCOUNT_ID and CLOUDFLARE_API_TOKEN to your environment variables."
    );
  }

  const controller = new AbortController();

  const timeout = setTimeout(() => {
    controller.abort();
  }, 90000);

  try {
    const endpoint =
      `https://api.cloudflare.com/client/v4/accounts/` +
      `${CLOUDFLARE_ACCOUNT_ID}/ai/run/${CLOUDFLARE_MODEL}`;

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${CLOUDFLARE_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt:
          prompt +
          "\n\nIMPORTANT: Return only valid JSON. Do not include Markdown or explanations.",
        max_tokens: numPredict,
        temperature: 0.2,
      }),
      signal: controller.signal,
      cache: "no-store",
    });

    const data = await response.json();

    if (!response.ok || data?.success === false) {
      const message =
        data?.errors?.map((item: any) => item.message).join(", ") ||
        "Cloudflare AI request failed.";

      throw new Error(`Cloudflare AI error: ${message}`);
    }

    const raw =
      data?.result?.response ||
      data?.result?.output ||
      "";

    if (typeof raw !== "string" || !raw.trim()) {
      throw new Error("Cloudflare AI returned an empty response.");
    }

    return parseAIJson(raw.trim());
  } finally {
    clearTimeout(timeout);
  }
}

// --------------------------------------------------
// AI PROVIDER SELECTION
// --------------------------------------------------

async function askAI(prompt: string, numPredict = 1600) {
  // On Vercel, use hosted AI. Vercel cannot access
  // Ollama running on your personal computer.
  if (process.env.NODE_ENV === "production") {
    return askCloudflare(prompt, numPredict);
  }

  // Locally, try Ollama first.
  try {
    return await askOllama(prompt, numPredict);
  } catch (ollamaError) {
    console.warn(
      "Local Ollama unavailable. Trying Cloudflare AI.",
      ollamaError
    );

    // If Cloudflare credentials are configured locally,
    // use Cloudflare as a backup.
    if (CLOUDFLARE_ACCOUNT_ID && CLOUDFLARE_API_TOKEN) {
      return askCloudflare(prompt, numPredict);
    }

    throw ollamaError;
  }
}

// --------------------------------------------------
// HELPERS
// --------------------------------------------------

function normalize(value: unknown): string {
  return String(value ?? "")
    .toLowerCase()
    .replace(/[^a-z0-9.+#]/g, "");
}

function extractNumber(value: unknown): number | null {
  if (value === undefined || value === null || value === "") {
    return null;
  }

  const match = String(value).match(/-?\d+(\.\d+)?/);

  return match ? Number(match[0]) : null;
}

function getProfileSkills(
  profile: Record<string, any>,
  portfolio: Record<string, any>,
  suppliedSkills: unknown[]
): string[] {
  const values = [
    ...(Array.isArray(profile.skills)
      ? profile.skills
      : typeof profile.skills === "string"
      ? profile.skills.split(",")
      : []),

    ...(Array.isArray(portfolio.skills)
      ? portfolio.skills
      : typeof portfolio.skills === "string"
      ? portfolio.skills.split(",")
      : []),

    ...suppliedSkills,
  ];

  return Array.from(
    new Set(
      values
        .filter((item) => typeof item === "string")
        .map((item) => item.trim())
        .filter(Boolean)
    )
  );
}

// --------------------------------------------------
// EXISTING AI RESUME GENERATION
// --------------------------------------------------

async function generateResume(body: any) {
  const {
    profile,
    portfolio,
    projects,
    skills,
  } = body;

  const safeData = {
    profile: profile || {},
    portfolio: portfolio || {},
    projects: Array.isArray(projects) ? projects : [],
    skills: Array.isArray(skills) ? skills : [],
  };

  if (
    Object.keys(safeData.profile).length === 0 &&
    Object.keys(safeData.portfolio).length === 0 &&
    safeData.projects.length === 0 &&
    safeData.skills.length === 0
  ) {
    return NextResponse.json(
      {
        success: false,
        error:
          "No resume information found. Please add your profile, skills, or projects first.",
      },
      { status: 400 }
    );
  }

  const prompt = `
You are an experienced professional resume writer and ATS resume specialist.

Transform the supplied student information into a professional fresher resume.

PROFESSIONAL SUMMARY:
- Write 3-4 meaningful sentences.
- Use actual education, branch, skills and projects.
- Avoid generic statements.

SKILLS:
- Include genuine supplied skills.
- Remove duplicates.
- Correct capitalization.
- Never invent technologies.

PROJECTS:
- Rewrite every supplied project.
- Preserve its title.
- Explain its purpose and technologies using supplied information.
- Do not invent results, users, achievements or responsibilities.
- Preserve project links exactly.

CAREER OBJECTIVE:
- Write 2-3 concise sentences.
- Keep it appropriate for a student or fresher.

STRICT ACCURACY:
- Never invent employment, internships, certifications or qualifications.
- Never invent skills or project outcomes.
- Do not change names, dates, email addresses or links.
- Do not guess missing information.
- Return JSON only.
- No Markdown or explanations.

STUDENT INFORMATION:
${JSON.stringify(safeData, null, 2)}

Return exactly this JSON structure:

{
  "professional_summary": "Professional summary",
  "skills": ["Skill 1", "Skill 2"],
  "projects": [
    {
      "title": "Project title",
      "description": "Professional description",
      "technologies": ["Technology 1"],
      "link": ""
    }
  ],
  "career_objective": "Career objective"
}
`;

  const resume = await askAI(prompt, 1200);

  if (
    !resume ||
    typeof resume.professional_summary !== "string" ||
    !Array.isArray(resume.skills) ||
    !Array.isArray(resume.projects) ||
    typeof resume.career_objective !== "string"
  ) {
    throw new Error("AI returned an incomplete resume structure.");
  }

  const cleanedResume = {
    professional_summary: resume.professional_summary.trim(),

    skills: resume.skills
      .filter((skill: unknown) => typeof skill === "string")
      .map((skill: string) => skill.trim())
      .filter(Boolean),

    projects: resume.projects
      .filter(
        (project: any) =>
          project && typeof project === "object"
      )
      .map((project: any) => ({
        title:
          typeof project.title === "string"
            ? project.title.trim()
            : "Student Project",

        description:
          typeof project.description === "string"
            ? project.description.trim()
            : "",

        technologies: Array.isArray(project.technologies)
          ? project.technologies.filter(
              (technology: unknown) =>
                typeof technology === "string"
            )
          : [],

        link:
          typeof project.link === "string"
            ? project.link
            : "",
      })),

    career_objective: resume.career_objective.trim(),
  };

  return NextResponse.json({
    success: true,
    resume: cleanedResume,
    model:
      process.env.NODE_ENV === "production"
        ? CLOUDFLARE_MODEL
        : OLLAMA_MODEL,
  });
}

// --------------------------------------------------
// JOB REQUIREMENT EXTRACTION
// --------------------------------------------------

async function checkJobEligibility(body: any) {
  const {
    jobDescription,
    profile = {},
    portfolio = {},
    skills = [],
    answers = {},
  } = body;

  if (
    typeof jobDescription !== "string" ||
    !jobDescription.trim()
  ) {
    return NextResponse.json(
      {
        success: false,
        error: "Please paste a company job description.",
      },
      { status: 400 }
    );
  }

  if (jobDescription.length > 20000) {
    return NextResponse.json(
      {
        success: false,
        error:
          "Job description is too long. Please keep it under 20,000 characters.",
      },
      { status: 400 }
    );
  }

  const prompt = `
You are a careful job eligibility requirement extraction system.

Read the company job description and extract ONLY requirements explicitly stated in it.

Do not invent requirements.
Do not assume a preferred skill is mandatory.
Do not treat optional experience as compulsory.
Do not confuse percentage with CGPA.
Do not confuse "before 2027" with "2027 or before".
Do not infer a graduation year when it is not stated.

JOB DESCRIPTION:
${jobDescription}

Return ONLY valid JSON in this exact structure:

{
  "job_title": "",
  "minimum_btech_percentage": null,
  "minimum_btech_cgpa": null,
  "graduation_year_before": null,
  "graduation_year_on_or_before": null,
  "eligible_branches": [],
  "minimum_experience_years": null,
  "experience_mandatory": false,
  "mandatory_skills": [],
  "preferred_skills": [],
  "no_active_backlogs_required": false,
  "other_mandatory_requirements": [],
  "notes": []
}

Rules:
- Percentage must be a number, such as 75.
- CGPA must be a number only when CGPA is explicitly required.
- Graduation year fields must be four-digit years.
- Use graduation_year_before for strictly earlier years.
- Use graduation_year_on_or_before for inclusive cutoffs.
- Use minimum_experience_years only for an explicitly stated minimum.
- experience_mandatory is true only when experience is compulsory.
- Put compulsory technical skills in mandatory_skills.
- Put preferred or good-to-have skills in preferred_skills.
- Put compulsory backlog conditions in no_active_backlogs_required.
- Put other important compulsory conditions in other_mandatory_requirements.
- Put ambiguous or unclear wording in notes.
- Use empty arrays and null for requirements not mentioned.
`;

  const requirements = await askAI(prompt, 1200);

  if (!requirements || typeof requirements !== "object") {
    throw new Error("Unable to understand the job requirements.");
  }

  const safeProfile =
    profile && typeof profile === "object" ? profile : {};

  const safePortfolio =
    portfolio && typeof portfolio === "object" ? portfolio : {};

  const safeAnswers =
    answers && typeof answers === "object" ? answers : {};

  const studentSkills = getProfileSkills(
    safeProfile,
    safePortfolio,
    Array.isArray(skills) ? skills : []
  );

  const studentBranch =
    safeProfile.branch ||
    safeProfile.department ||
    safeAnswers.branch ||
    "";

  const studentGraduationYear = extractNumber(
    safeProfile.graduation_year ??
    safeProfile.passout_year ??
    safeAnswers.graduationYear
  );

  const studentPercentage = extractNumber(
    safeProfile.btech_percentage ??
    safeProfile.percentage ??
    safeProfile.aggregate_percentage ??
    safeProfile.btech_aggregate ??
    safeAnswers.percentage
  );

  const studentCgpa = extractNumber(
    safeProfile.cgpa ??
    safeProfile.btech_cgpa ??
    safeAnswers.cgpa
  );

  const studentExperience = extractNumber(
    safeAnswers.experienceYears ??
    safeProfile.experience_years
  );

  const isFresher =
    safeAnswers.isFresher === true ||
    safeAnswers.isFresher === "yes";

  const activeBacklogs = extractNumber(
    safeAnswers.activeBacklogs ??
    safeProfile.active_backlogs
  );

  const checks: any[] = [];
  const questions: any[] = [];

  function addCheck(
    requirement: string,
    status: "satisfied" | "not_satisfied" | "needs_information",
    studentValue: string,
    explanation: string
  ) {
    checks.push({
      requirement,
      status,
      student_value: studentValue,
      explanation,
    });
  }

  // Percentage check
  const minimumPercentage = extractNumber(
    requirements.minimum_btech_percentage
  );

  if (minimumPercentage !== null) {
    if (studentPercentage === null) {
      questions.push({
        key: "percentage",
        question: `What is your B.Tech aggregate percentage? The company requires at least ${minimumPercentage}%.`,
        type: "number",
      });

      addCheck(
        `Minimum ${minimumPercentage}% B.Tech`,
        "needs_information",
        "Not available",
        "Your B.Tech percentage is missing from your profile."
      );
    } else {
      const passed = studentPercentage >= minimumPercentage;

      addCheck(
        `Minimum ${minimumPercentage}% B.Tech`,
        passed ? "satisfied" : "not_satisfied",
        `${studentPercentage}%`,
        passed
          ? "Your percentage meets the company's requirement."
          : "Your percentage is below the company's minimum."
      );
    }
  }

  // CGPA check
  const minimumCgpa = extractNumber(
    requirements.minimum_btech_cgpa
  );

  if (minimumCgpa !== null) {
    if (studentCgpa === null) {
      questions.push({
        key: "cgpa",
        question: `What is your B.Tech CGPA? The company requires at least ${minimumCgpa}.`,
        type: "number",
      });

      addCheck(
        `Minimum ${minimumCgpa} CGPA`,
        "needs_information",
        "Not available",
        "Your CGPA is missing from your profile."
      );
    } else {
      const passed = studentCgpa >= minimumCgpa;

      addCheck(
        `Minimum ${minimumCgpa} CGPA`,
        passed ? "satisfied" : "not_satisfied",
        String(studentCgpa),
        passed
          ? "Your CGPA meets the company's requirement."
          : "Your CGPA is below the company's minimum."
      );
    }
  }

  // Graduation year check
  const yearBefore = extractNumber(
    requirements.graduation_year_before
  );

  const yearOnOrBefore = extractNumber(
    requirements.graduation_year_on_or_before
  );

  if (yearBefore !== null || yearOnOrBefore !== null) {
    if (studentGraduationYear === null) {
      questions.push({
        key: "graduationYear",
        question: "What is your expected B.Tech graduation year?",
        type: "number",
      });

      addCheck(
        "Graduation year requirement",
        "needs_information",
        "Not available",
        "Your graduation year is missing."
      );
    } else {
      let passed = true;
      let explanation = "";

      if (yearBefore !== null) {
        passed = studentGraduationYear < yearBefore;
        explanation = `The company requires graduation before ${yearBefore}.`;
      } else if (yearOnOrBefore !== null) {
        passed = studentGraduationYear <= yearOnOrBefore;
        explanation = `The company accepts graduation in ${yearOnOrBefore} or earlier.`;
      }

      addCheck(
        "Graduation year requirement",
        passed ? "satisfied" : "not_satisfied",
        String(studentGraduationYear),
        passed
          ? "Your graduation year meets the requirement."
          : explanation
      );
    }
  }

  // Branch check
  const eligibleBranches = Array.isArray(
    requirements.eligible_branches
  )
    ? requirements.eligible_branches
    : [];

  if (eligibleBranches.length > 0) {
    if (!studentBranch) {
      questions.push({
        key: "branch",
        question: "What is your B.Tech branch?",
        type: "text",
      });

      addCheck(
        "Eligible engineering branch",
        "needs_information",
        "Not available",
        "Your branch is missing."
      );
    } else {
      const normalizedBranch = normalize(studentBranch);

      const passed = eligibleBranches.some(
        (branch: string) => {
          const normalizedRequired = normalize(branch);

          return (
            normalizedBranch.includes(normalizedRequired) ||
            normalizedRequired.includes(normalizedBranch)
          );
        }
      );

      addCheck(
        "Eligible engineering branch",
        passed ? "satisfied" : "not_satisfied",
        studentBranch,
        passed
          ? "Your branch matches an eligible branch."
          : `The company lists these eligible branches: ${eligibleBranches.join(", ")}.`
      );
    }
  }

  // Experience check
  const minimumExperience = extractNumber(
    requirements.minimum_experience_years
  );

  if (
    requirements.experience_mandatory === true ||
    minimumExperience !== null
  ) {
    if (studentExperience !== null) {
      const passed =
        minimumExperience === null ||
        studentExperience >= minimumExperience;

      addCheck(
        "Work experience",
        passed ? "satisfied" : "not_satisfied",
        `${studentExperience} years`,
        passed
          ? "Your experience meets the stated requirement."
          : `The company requires at least ${minimumExperience} years of experience.`
      );
    } else if (isFresher) {
      addCheck(
        "Work experience",
        "not_satisfied",
        "Fresher",
        "The company requires previous work experience."
      );
    } else {
      questions.push({
        key: "experience",
        question:
          minimumExperience !== null
            ? `The company requires ${minimumExperience} years of experience. Are you a fresher or do you have work experience?`
            : "Are you a fresher or do you have previous work experience?",
        type: "experience",
      });

      addCheck(
        "Work experience",
        "needs_information",
        "Not confirmed",
        "Your experience information is required."
      );
    }
  }

  // Mandatory skills
  const mandatorySkills = Array.isArray(
    requirements.mandatory_skills
  )
    ? requirements.mandatory_skills
    : [];

  const missingSkills = mandatorySkills.filter(
    (required: string) =>
      !studentSkills.some(
        (studentSkill) =>
          normalize(studentSkill) === normalize(required)
      )
  );

  if (mandatorySkills.length > 0) {
    addCheck(
      "Mandatory technical skills",
      missingSkills.length === 0
        ? "satisfied"
        : "not_satisfied",
      studentSkills.join(", ") || "No skills listed",
      missingSkills.length === 0
        ? "All mandatory skills are present in your profile."
        : `Missing skills: ${missingSkills.join(", ")}.`
    );
  }

  // Backlog check
  if (requirements.no_active_backlogs_required === true) {
    if (activeBacklogs === null) {
      questions.push({
        key: "activeBacklogs",
        question: "How many active backlogs do you currently have?",
        type: "number",
      });

      addCheck(
        "No active backlogs",
        "needs_information",
        "Not available",
        "Backlog information is required."
      );
    } else {
      const passed = activeBacklogs === 0;

      addCheck(
        "No active backlogs",
        passed ? "satisfied" : "not_satisfied",
        String(activeBacklogs),
        passed
          ? "You have confirmed that you have no active backlogs."
          : "The company requires no active backlogs."
      );
    }
  }

  // Other compulsory requirements
  const otherRequirements = Array.isArray(
    requirements.other_mandatory_requirements
  )
    ? requirements.other_mandatory_requirements
    : [];

  otherRequirements.forEach(
    (requirement: string, index: number) => {
      const key = `other_${index}`;

      if (safeAnswers[key] === undefined) {
        questions.push({
          key,
          question: `Can you meet this company requirement: ${requirement}?`,
          type: "yesno",
        });

        addCheck(
          requirement,
          "needs_information",
          "Not confirmed",
          "Please confirm this requirement."
        );
      } else {
        const passed =
          safeAnswers[key] === true ||
          safeAnswers[key] === "yes";

        addCheck(
          requirement,
          passed ? "satisfied" : "not_satisfied",
          passed ? "Confirmed" : "Not confirmed",
          passed
            ? "You confirmed that you meet this requirement."
            : "You indicated that you do not meet this requirement."
        );
      }
    }
  );

  const hasFailed = checks.some(
    (item) => item.status === "not_satisfied"
  );

  const hasMissing = questions.length > 0;

  const status = hasFailed
    ? "not_eligible"
    : hasMissing
    ? "needs_more_information"
    : "eligible";

  return NextResponse.json({
    success: true,
    job_title:
      typeof requirements.job_title === "string"
        ? requirements.job_title
        : "Job Opportunity",
    status,
    requirements,
    checks,
    questions,
    missing_skills: missingSkills,
    preferred_skills: Array.isArray(
      requirements.preferred_skills
    )
      ? requirements.preferred_skills
      : [],
    notes: Array.isArray(requirements.notes)
      ? requirements.notes
      : [],
    model:
      process.env.NODE_ENV === "production"
        ? CLOUDFLARE_MODEL
        : OLLAMA_MODEL,
  });
}

// --------------------------------------------------
// MAIN API HANDLER
// --------------------------------------------------

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (body.action === "check-eligibility") {
      return await checkJobEligibility(body);
    }

    return await generateResume(body);
  } catch (error: any) {
    console.error("Resume API error:", error);

    return NextResponse.json(
      {
        success: false,
        error:
          error?.name === "AbortError"
            ? "AI request timed out. Please try again."
            : error?.message ||
              "The request could not be completed.",
      },
      { status: 500 }
    );
  }
}
