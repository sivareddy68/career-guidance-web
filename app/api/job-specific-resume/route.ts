import { NextResponse } from "next/server";

const OLLAMA_URL =
  process.env.OLLAMA_URL ||
  "http://127.0.0.1:11434/api/generate";

const OLLAMA_MODEL =
  process.env.OLLAMA_MODEL || "qwen2.5:3b";

// --------------------------------------------------
// CLEAN TEXT
// --------------------------------------------------

function cleanString(value: unknown): string {
  if (typeof value !== "string") return "";

  const cleaned = value.replace(/\s+/g, " ").trim();

  const forbidden = [
    "not specified",
    "not provided",
    "unknown",
    "n/a",
    "na",
    "none specified",
    "graduate software engineer",
  ];

  if (
    forbidden.some(
      (item) =>
        cleaned.toLowerCase() === item ||
        cleaned.toLowerCase().startsWith(item + " ")
    )
  ) {
    return "";
  }

  return cleaned;
}

// --------------------------------------------------
// CLEAN ARRAYS
// --------------------------------------------------

function cleanStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) return [];

  const result: string[] = [];

  for (const item of value) {
    const cleaned = cleanString(item);

    if (
      cleaned &&
      !result.some(
        (existing) =>
          existing.toLowerCase() === cleaned.toLowerCase()
      )
    ) {
      result.push(cleaned);
    }
  }

  return result;
}

// --------------------------------------------------
// FIND VALUES RECURSIVELY
// --------------------------------------------------

function findValuesByKey(
  object: any,
  possibleKeys: string[]
): string[] {
  const results: string[] = [];

  const normalizedKeys = possibleKeys.map((key) =>
    key.toLowerCase().replace(/[^a-z0-9]/g, "")
  );

  function walk(value: any) {
    if (!value || typeof value !== "object") return;

    if (Array.isArray(value)) {
      value.forEach(walk);
      return;
    }

    for (const [key, childValue] of Object.entries(value)) {
      const normalizedKey = key
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "");

      if (normalizedKeys.includes(normalizedKey)) {
        if (typeof childValue === "string") {
          const cleaned = cleanString(childValue);
          if (cleaned) results.push(cleaned);
        } else if (Array.isArray(childValue)) {
          childValue.forEach((item) => {
            if (typeof item === "string") {
              const cleaned = cleanString(item);
              if (cleaned) results.push(cleaned);
            }
          });
        }
      }

      if (childValue && typeof childValue === "object") {
        walk(childValue);
      }
    }
  }

  walk(object);

  return [...new Map(
    results.map((item) => [item.toLowerCase(), item])
  ).values()];
}

// --------------------------------------------------
// FIND FIRST VALUE
// --------------------------------------------------

function findFirstValue(
  object: any,
  possibleKeys: string[]
): string {
  return findValuesByKey(object, possibleKeys)[0] || "";
}

// --------------------------------------------------
// MERGE UNIQUE VALUES
// --------------------------------------------------

function mergeUnique(...arrays: string[][]): string[] {
  const result: string[] = [];

  for (const array of arrays) {
    for (const value of array) {
      const cleaned = cleanString(value);

      if (
        cleaned &&
        !result.some(
          (item) =>
            item.toLowerCase() === cleaned.toLowerCase()
        )
      ) {
        result.push(cleaned);
      }
    }
  }

  return result;
}

// --------------------------------------------------
// ASK OLLAMA
// --------------------------------------------------

async function askOllama(prompt: string) {
  const controller = new AbortController();

  const timeout = setTimeout(() => {
    controller.abort();
  }, 180000);

  try {
    let response: Response;

    try {
      response = await fetch(OLLAMA_URL, {
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
            num_predict: 1800,
            num_ctx: 4096,
          },
        }),
        signal: controller.signal,
        cache: "no-store",
      });
    } catch (error: any) {
      if (error?.name === "AbortError") throw error;

      throw new Error(
        "Cannot connect to Ollama. Make sure Ollama is running."
      );
    }

    if (!response.ok) {
      const errorText = await response.text();

      throw new Error(
        `Ollama request failed (${response.status}): ${errorText.slice(0, 500)}`
      );
    }

    const data = await response.json();

    if (data?.error) {
      throw new Error(`Ollama error: ${data.error}`);
    }

    const raw =
      typeof data?.response === "string"
        ? data.response.trim()
        : "";

    if (!raw) {
      throw new Error("Ollama returned an empty response.");
    }

    try {
      return JSON.parse(raw);
    } catch {
      const start = raw.indexOf("{");
      const end = raw.lastIndexOf("}");

      if (start === -1 || end <= start) {
        throw new Error("AI returned invalid JSON. Please try again.");
      }

      try {
        return JSON.parse(raw.substring(start, end + 1));
      } catch {
        throw new Error(
          "AI response could not be converted into valid JSON."
        );
      }
    }
  } finally {
    clearTimeout(timeout);
  }
}

// --------------------------------------------------
// EXTRACT EDUCATION
// --------------------------------------------------

function extractEducation(profile: any) {
  const source =
    profile?.education ||
    profile?.educations ||
    profile?.academic_details ||
    profile?.academicDetails;

  const items = Array.isArray(source)
    ? source
    : source && typeof source === "object"
      ? [source]
      : [];

  return items
    .map((item: any) => ({
      qualification: findFirstValue(item, [
        "qualification",
        "degree",
        "course",
        "program",
      ]),
      institution: findFirstValue(item, [
        "institution",
        "college",
        "university",
        "college_name",
      ]),
      branch: findFirstValue(item, [
        "branch",
        "specialization",
        "department",
        "stream",
        "course_name",
      ]),
      percentage_or_cgpa: findFirstValue(item, [
        "percentage",
        "cgpa",
        "gpa",
        "marks",
        "score",
      ]),
      graduation_year: findFirstValue(item, [
        "graduation_year",
        "graduationYear",
        "passing_year",
        "passingYear",
        "expected_graduation",
      ]),
    }))
    .filter(
      (item: any) =>
        item.qualification ||
        item.institution ||
        item.branch ||
        item.percentage_or_cgpa ||
        item.graduation_year
    );
}

// --------------------------------------------------
// EXTRACT PROJECTS
// --------------------------------------------------

function extractProjects(portfolio: any) {
  const sources = [
    portfolio?.projects,
    portfolio?.project,
    portfolio?.student_projects,
    portfolio?.studentProjects,
  ];

  let source: any[] = [];

  for (const candidate of sources) {
    if (Array.isArray(candidate)) {
      source = candidate;
      break;
    }
  }

  if (source.length === 0 && Array.isArray(portfolio)) {
    source = portfolio;
  }

  return source
    .filter(
      (item: any) =>
        item &&
        typeof item === "object" &&
        !Array.isArray(item)
    )
    .map((item: any) => ({
      title: findFirstValue(item, [
        "title",
        "name",
        "project_name",
        "projectName",
      ]),
      description: findFirstValue(item, [
        "description",
        "details",
        "project_description",
        "about",
      ]),
      technologies: mergeUnique(
        findValuesByKey(item, [
          "technology",
          "technologies",
          "tech_stack",
          "techStack",
          "skills",
        ])
      ),
      link: findFirstValue(item, [
        "link",
        "url",
        "project_link",
        "github",
        "github_link",
      ]),
    }))
    .filter(
      (project) =>
        project.title ||
        project.description ||
        project.technologies.length > 0
    );
}

// --------------------------------------------------
// EXTRACT SKILLS
// --------------------------------------------------

function extractSkills(profile: any, portfolio: any, supplied: any) {
  return mergeUnique(
    findValuesByKey(profile, [
      "skills",
      "skill",
      "technical_skills",
      "programming_skills",
    ]),
    findValuesByKey(portfolio, [
      "skills",
      "skill",
      "technologies",
      "technology",
      "tech_stack",
    ]),
    cleanStringArray(supplied)
  );
}

// --------------------------------------------------
// EXTRACT INTERESTS
// --------------------------------------------------

function extractInterests(profile: any, portfolio: any) {
  return mergeUnique(
    findValuesByKey(profile, [
      "interests",
      "interest",
      "hobbies",
      "hobby",
    ]),
    findValuesByKey(portfolio, [
      "interests",
      "interest",
      "hobbies",
      "hobby",
    ])
  );
}

// --------------------------------------------------
// POST
// --------------------------------------------------

export async function POST(req: Request) {
  try {
    let body: any;

    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { success: false, error: "Invalid JSON request." },
        { status: 400 }
      );
    }

    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return NextResponse.json(
        { success: false, error: "Invalid request data." },
        { status: 400 }
      );
    }

    const {
      profile = {},
      portfolio = {},
      skills = [],
      jobDescription = "",
      academicDetails = {},
    } = body;

    if (
      typeof jobDescription !== "string" ||
      !jobDescription.trim()
    ) {
      return NextResponse.json(
        { success: false, error: "Job description is required." },
        { status: 400 }
      );
    }

    if (jobDescription.length > 20000) {
      return NextResponse.json(
        {
          success: false,
          error: "Job description cannot exceed 20,000 characters.",
        },
        { status: 400 }
      );
    }

    const safeProfile =
      profile &&
      typeof profile === "object" &&
      !Array.isArray(profile)
        ? profile
        : {};

    const safePortfolio =
      portfolio &&
      typeof portfolio === "object" &&
      !Array.isArray(portfolio)
        ? portfolio
        : {};

    const safeAcademic =
      academicDetails &&
      typeof academicDetails === "object" &&
      !Array.isArray(academicDetails)
        ? academicDetails
        : {};

    // ----------------------------------------------
    // USER-ENTERED ACADEMIC DETAILS ARE AUTHORITATIVE
    // ----------------------------------------------

    const academic = {
      qualification:
        cleanString(safeAcademic.qualification) ||
        findFirstValue(safeProfile, ["qualification", "degree", "course"]),

      institution:
        cleanString(safeAcademic.institution) ||
        findFirstValue(safeProfile, [
          "institution",
          "college",
          "university",
          "college_name",
        ]),

      branch:
        cleanString(safeAcademic.branch) ||
        findFirstValue(safeProfile, [
          "branch",
          "department",
          "specialization",
          "stream",
        ]),

      percentage_or_cgpa:
        cleanString(safeAcademic.percentage_or_cgpa) ||
        findFirstValue(safeProfile, [
          "percentage",
          "cgpa",
          "gpa",
          "marks",
        ]),

      graduation_year:
        cleanString(safeAcademic.graduation_year) ||
        findFirstValue(safeProfile, [
          "graduation_year",
          "passing_year",
          "passout_year",
        ]),
    };

    const education = [
      academic,
      ...extractEducation(safeProfile).filter(
        (item: any) =>
          item.qualification !== academic.qualification ||
          item.institution !== academic.institution ||
          item.branch !== academic.branch
      ),
    ].filter(
      (item) =>
        item.qualification ||
        item.institution ||
        item.branch ||
        item.percentage_or_cgpa ||
        item.graduation_year
    );

    const name = findFirstValue(safeProfile, [
      "name",
      "full_name",
      "fullName",
      "student_name",
    ]);

    const email = findFirstValue(safeProfile, [
      "email",
      "email_address",
    ]);

    const phone = findFirstValue(safeProfile, [
      "phone",
      "phone_number",
      "mobile",
    ]);

    const location = findFirstValue(safeProfile, [
      "location",
      "city",
      "address",
    ]);

    const linkedin = findFirstValue(safeProfile, [
      "linkedin",
      "linkedin_url",
    ]);

    const github = findFirstValue(safeProfile, [
      "github",
      "github_url",
    ]);

    const projects = extractProjects(safePortfolio);

    const finalSkills = extractSkills(
      safeProfile,
      safePortfolio,
      skills
    );

    const interests = extractInterests(
      safeProfile,
      safePortfolio
    );

    // ----------------------------------------------
    // AI INPUT
    // ----------------------------------------------

    const studentData = {
      name,
      qualification: academic.qualification,
      branch: academic.branch,
      institution: academic.institution,
      graduation_year: academic.graduation_year,
      skills: finalSkills,
      projects,
      interests,
    };

    const prompt = `
You are helping write the prose sections of a student's resume.

STUDENT INFORMATION:
${JSON.stringify(studentData, null, 2)}

JOB DESCRIPTION:
${jobDescription}

Return valid JSON with exactly these fields:
{
  "professional_summary": "",
  "career_objective": "",
  "career_goal": "",
  "career_status": "",
  "career_development_focus": []
}

STRICT FACTUAL RULES:

1. The student's degree, branch, college and graduation year are supplied by the student.
2. Copy the degree and branch exactly as provided.
3. NEVER guess or change the student's branch.
4. NEVER change ECE to CSE, CSE to ECE, or one department to another.
5. If the branch is Electronics and Communication Engineering, do not call the student a Computer Science graduate.
6. Do not infer a degree or branch from programming skills.
7. Do not invent academic information.
8. Do not invent experience, internships, certifications, achievements or companies.
9. Do not claim missing job skills as existing skills.
10. Use only the student's actual skills and projects.
11. Keep the professional summary concise and factual.
12. Write a suitable career objective for a student/fresher.
13. Career goal should relate to the job description and actual skills.
14. Career development focus should contain up to 3 short points.
15. Do not write "Not specified" or "Not provided".
16. Do not add a job title as a separate field.
17. Return JSON only. No Markdown.

If academic information is missing, do not guess it.
`;

    const aiResult = await askOllama(prompt);

    const professionalSummary = cleanString(
      aiResult?.professional_summary
    );

    const careerObjective = cleanString(
      aiResult?.career_objective
    );

    const careerGoal = cleanString(
      aiResult?.career_goal
    );

    const careerStatus = cleanString(
      aiResult?.career_status
    );

    const careerDevelopmentFocus = cleanStringArray(
      aiResult?.career_development_focus
    ).slice(0, 3);

    // ----------------------------------------------
    // ENFORCE THE STUDENT'S ACTUAL BRANCH
    // ----------------------------------------------

    const academicIdentity = [
      academic.qualification,
      academic.branch,
    ]
      .filter(Boolean)
      .join(" in ");

    let finalSummary = professionalSummary;

    if (academicIdentity) {
      const branchText = academic.branch.toLowerCase();

      const summaryMentionsWrongBranch =
        branchText.includes("electronics") &&
        /\b(computer science|cse)\b/i.test(finalSummary);

      if (summaryMentionsWrongBranch) {
        finalSummary = "";
      }

      const identitySentence = academicIdentity
        ? `${academicIdentity} student`
        : "";

      if (identitySentence) {
        finalSummary = finalSummary
          ? `${identitySentence} with ${finalSummary.charAt(0).toLowerCase()}${finalSummary.slice(1)}`
          : `${identitySentence} with skills in ${finalSkills.join(", ")}.`;
      }
    }

    const cleanedResume = {
      name,
      email,
      phone,
      location,
      linkedin,
      github,
      professional_summary: finalSummary,
      career_objective: careerObjective,
      education,
      projects,
      skills: finalSkills,
      career_profile: {
        career_goal: careerGoal,
        career_status: careerStatus,
        career_development_focus: careerDevelopmentFocus,
      },
      interests,
    };

    return NextResponse.json(
      {
        success: true,
        message: "Job-specific resume generated successfully.",
        resume: cleanedResume,
        model: OLLAMA_MODEL,
      },
      {
        status: 200,
        headers: {
          "Cache-Control": "no-store",
        },
      }
    );
  } catch (error: any) {
    console.error("Job-specific resume API error:", error);

    const errorMessage =
      error?.name === "AbortError"
        ? "Resume generation timed out. Please try again."
        : error?.message ||
          "Unable to generate the job-specific resume.";

    return NextResponse.json(
      { success: false, error: errorMessage },
      {
        status: 500,
        headers: {
          "Cache-Control": "no-store",
        },
      }
    );
  }
}