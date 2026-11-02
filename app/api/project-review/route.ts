
import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";



type PortfolioProject = {
  title: string;
  description: string;
  technologies: string;
  link: string;
};

type CourseProgress = {
  skill: string;
  completed_lessons: number | string;
  current_week: number;
  current_lesson: number;
};

type Portfolio = {
  name: string;
  education: string;
  career_goal: string;
  about: string;
  skills: string;
  projects: PortfolioProject[];
};

type Career = {
  id: number;
  title: string;
  category: string;
  description: string;
  daily_work: string;
  beginner_skills: string;
  advanced_skills: string;
  learning_path: string;
  project_ideas: string;
  suitable_study_types: string;
  suitable_branches: string;
  certification_guidance: string;
  interview_topics: string;
  internship_guidance: string;
};

type AIResult = {
  response: string;
  provider: string;
  model: string;
};

const OLLAMA_URL =
  process.env.OLLAMA_URL ||
  "http://127.0.0.1:11434/api/generate";

const OLLAMA_MODEL =
  process.env.OLLAMA_MODEL ||
  "qwen2.5:3b";

const CLOUDFLARE_MODEL =
  process.env.CLOUDFLARE_MODEL ||
  "@cf/meta/llama-3.2-3b-instruct";

const CLOUDFLARE_ACCOUNT_ID =
  process.env.CLOUDFLARE_ACCOUNT_ID || "";

const CLOUDFLARE_API_TOKEN =
  process.env.CLOUDFLARE_API_TOKEN || "";

/*
 * ---------------------------------------------------------
 * SUPABASE
 * ---------------------------------------------------------
 */

function getSupabaseAdmin() {
  const supabaseUrl =
    process.env.NEXT_PUBLIC_SUPABASE_URL;

  const supabaseKey =
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    throw new Error(
      "Supabase environment variables are missing."
    );
  }

  return createClient(
    supabaseUrl,
    supabaseKey
  );
}

/*
 * ---------------------------------------------------------
 * GENERAL HELPERS
 * ---------------------------------------------------------
 */

function safeString(value: unknown): string {
  return String(value ?? "").trim();
}

function safeArray(value: unknown): string[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .map((item) => safeString(item))
    .filter(Boolean);
}

function safeNumber(
  value: unknown,
  fallback = 0
): number {
  const number = Number(value);

  if (!Number.isFinite(number)) {
    return fallback;
  }

  return Math.max(
    0,
    Math.min(100, Math.round(number))
  );
}

/*
 * Extract one complete JSON object from AI output.
 *
 * This handles:
 * - JSON surrounded by explanatory text.
 * - Markdown code fences.
 * - Braces inside quoted strings.
 */

function extractJson(text: string): string {
  const cleaned = String(text || "")
    .replace(/```json/gi, "")
    .replace(/```/g, "")
    .trim();

  const start = cleaned.indexOf("{");

  if (start === -1) {
    throw new Error(
      "AI response does not contain a JSON object."
    );
  }

  let depth = 0;
  let inString = false;
  let escaped = false;

  for (let i = start; i < cleaned.length; i++) {
    const char = cleaned[i];

    if (inString) {
      if (escaped) {
        escaped = false;
      } else if (char === "\\") {
        escaped = true;
      } else if (char === '"') {
        inString = false;
      }

      continue;
    }

    if (char === '"') {
      inString = true;
    } else if (char === "{") {
      depth++;
    } else if (char === "}") {
      depth--;

      if (depth === 0) {
        return cleaned.slice(start, i + 1);
      }
    }
  }

  throw new Error(
    "AI returned incomplete JSON."
  );
}

function parseAIJson(text: string): any {
  const jsonText = extractJson(text);
  const result = JSON.parse(jsonText);

  if (
    !result ||
    typeof result !== "object" ||
    Array.isArray(result)
  ) {
    throw new Error(
      "AI response must be a JSON object."
    );
  }

  if (
    typeof result.summary !== "string" ||
    !Array.isArray(result.strengths) ||
    !Array.isArray(result.suggestions) ||
    !Array.isArray(result.skillMatches) ||
    !Array.isArray(result.missingSkills)
  ) {
    throw new Error(
      "AI JSON is missing required review fields."
    );
  }

  return result;
}

/*
 * ---------------------------------------------------------
 * OLLAMA
 * ---------------------------------------------------------
 */

async function askOllama(
  prompt: string
): Promise<string> {
  const controller = new AbortController();

  const timeout = setTimeout(
    () => controller.abort(),
    240000
  );

  try {
    const response = await fetch(
      OLLAMA_URL,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          model: OLLAMA_MODEL,
          prompt,
          stream: false,
          keep_alive: "10m",

          options: {
            temperature: 0.1,
            num_predict: 4000,
            num_ctx: 8192,
          },
        }),

        signal: controller.signal,
        cache: "no-store",
      }
    );

    if (!response.ok) {
      const details = await response.text();

      throw new Error(
        `Ollama error ${response.status}: ${details}`
      );
    }

    const data = await response.json();

    const reply =
      typeof data?.response === "string"
        ? data.response.trim()
        : "";

    if (!reply) {
      throw new Error(
        "Ollama returned an empty response."
      );
    }

    return reply;
  } finally {
    clearTimeout(timeout);
  }
}

/*
 * ---------------------------------------------------------
 * CLOUDFLARE WORKERS AI
 * ---------------------------------------------------------
 */

async function askCloudflare(
  prompt: string
): Promise<string> {
  if (
    !CLOUDFLARE_ACCOUNT_ID ||
    !CLOUDFLARE_API_TOKEN
  ) {
    throw new Error(
      "Cloudflare AI environment variables are missing."
    );
  }

  const endpoint =
    `https://api.cloudflare.com/client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/ai/run/${CLOUDFLARE_MODEL}`;

  const controller = new AbortController();

  const timeout = setTimeout(
    () => controller.abort(),
    120000
  );

  try {
    const response = await fetch(
      endpoint,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",

          Authorization:
            `Bearer ${CLOUDFLARE_API_TOKEN}`,
        },

        /*
         * Do not use response_format here.
         * The selected model does not list JSON Mode support.
         */

        body: JSON.stringify({
          prompt,
          max_tokens: 4000,
          temperature: 0.1,
        }),

        signal: controller.signal,
        cache: "no-store",
      }
    );

    const rawText = await response.text();

    if (!response.ok) {
      throw new Error(
        `Cloudflare AI error ${response.status}: ${rawText}`
      );
    }

    let data: any;

    try {
      data = JSON.parse(rawText);
    } catch {
      throw new Error(
        "Cloudflare returned an invalid HTTP response."
      );
    }

    let reply = "";

    if (
      typeof data?.result?.response === "string"
    ) {
      reply = data.result.response.trim();
    }

    if (
      !reply &&
      typeof data?.result === "string"
    ) {
      reply = data.result.trim();
    }

    if (
      !reply &&
      typeof data?.response === "string"
    ) {
      reply = data.response.trim();
    }

    if (!reply) {
      console.error(
        "Unexpected Cloudflare response:",
        data
      );

      throw new Error(
        "Cloudflare AI returned an empty or unreadable response."
      );
    }

    return reply;
  } finally {
    clearTimeout(timeout);
  }
}

/*
 * ---------------------------------------------------------
 * AI PROVIDER
 * ---------------------------------------------------------
 */

async function askAI(
  prompt: string
): Promise<AIResult> {
  if (process.env.NODE_ENV === "production") {
    const response = await askCloudflare(prompt);

    return {
      response,
      provider: "cloudflare",
      model: CLOUDFLARE_MODEL,
    };
  }

  try {
    const response = await askOllama(prompt);

    return {
      response,
      provider: "ollama",
      model: OLLAMA_MODEL,
    };
  } catch (ollamaError) {
    console.error(
      "Local Ollama review failed:",
      ollamaError
    );

    if (
      CLOUDFLARE_ACCOUNT_ID &&
      CLOUDFLARE_API_TOKEN
    ) {
      console.log(
        "Trying Cloudflare AI as local fallback..."
      );

      const response = await askCloudflare(prompt);

      return {
        response,
        provider: "cloudflare",
        model: CLOUDFLARE_MODEL,
      };
    }

    throw ollamaError;
  }
}

/*
 * ---------------------------------------------------------
 * BUILD AI PROMPT
 * ---------------------------------------------------------
 */

function buildPrompt(
  portfolio: Portfolio,
  courses: CourseProgress[],
  careerData: any,
  targetCareer: string,
  retry = false
): string {
  const retryInstruction = retry
    ? `
IMPORTANT RETRY:
Your previous response was invalid.
Do not repeat the instructions.
Do not return bullet points or explanations.
Return the complete JSON object immediately.
Start your response with { and end with }.
`
    : "";

  return `
You are an expert student portfolio and career reviewer.

Analyze the student's portfolio for the selected career only.

SELECTED CAREER:
${targetCareer}

CAREER DATABASE INFORMATION:
${JSON.stringify(careerData)}

STUDENT PORTFOLIO:
${JSON.stringify(portfolio)}

STUDENT COURSE PROGRESS:
${JSON.stringify(courses)}

REVIEW RULES:

1. Evaluate the portfolio against the selected career only.
2. Do not use an older saved career goal to override the selected career.
3. Do not invent skills, projects, technologies, or experience.
4. Compare student skills with career requirements.
5. Use course progress as supporting evidence, not proof of mastery.
6. Review every project supplied by the student.
7. Give honest and practical suggestions.
8. Identify missing beginner and advanced skills.
9. Recommend learning priorities related to the selected career.
10. Scores must be integers between 0 and 100.
11. If no projects are supplied, return an empty projectResults array.
12. Use short, clear sentences.
13. Do not repeat these instructions in your response.

${retryInstruction}

OUTPUT REQUIREMENTS:

Return ONE valid JSON object.
No markdown.
No code fences.
No introductory text.
No bullet points outside JSON.
Use double quotes for all JSON keys and string values.
Do not include trailing commas.
Do not put comments inside JSON.

The JSON must have exactly this structure:

{
  "summary": "Overall portfolio assessment",
  "score": 70,
  "strengths": ["Strength"],
  "suggestions": ["Specific improvement"],
  "skillMatches": ["Matching skill"],
  "missingSkills": ["Missing career skill"],
  "careerAlignment": {
    "fitSummary": "Career fit explanation",
    "matchedAreas": ["Matched area"],
    "gaps": ["Career gap"]
  },
  "learningProgress": {
    "summary": "Learning progress assessment",
    "usefulLearning": ["Useful learning"],
    "nextLearningFocus": ["Next skill to learn"]
  },
  "projectResults": [
    {
      "title": "Actual student project title",
      "score": 70,
      "strengths": ["Project strength"],
      "suggestions": ["Project improvement"],
      "careerRelevance": "Career relevance",
      "problemClarity": "Problem assessment",
      "solutionClarity": "Solution assessment",
      "technologyAssessment": "Technology assessment",
      "contributionEvidence": "Contribution assessment",
      "evidenceQuality": "Evidence assessment"
    }
  ],
  "actionPlan": [
    {
      "priority": "High",
      "task": "Concrete action",
      "reason": "Why this action matters"
    }
  ]
}

FINAL CHECK BEFORE RESPONDING:

- projectResults must have one entry for every supplied student project.
- Do not create projects that do not exist.
- All required fields must be present.
- Return valid JSON only.
`;
}

/*
 * ---------------------------------------------------------
 * NORMALIZE AI RESPONSE
 * ---------------------------------------------------------
 */

function normalizeReview(
  result: any,
  portfolio: Portfolio,
  career: Career | null,
  targetCareer: string,
  aiResult: AIResult
) {
  const aiProjects = Array.isArray(
    result?.projectResults
  )
    ? result.projectResults
    : [];

  const projectResults =
    portfolio.projects.map(
      (project, index) => {
        const aiProject =
          aiProjects.find(
            (item: any) =>
              safeString(item?.title).toLowerCase() ===
              project.title.toLowerCase()
          ) ||
          aiProjects[index] ||
          {};

        return {
          title:
            safeString(aiProject.title) ||
            project.title ||
            `Project ${index + 1}`,

          score: safeNumber(
            aiProject.score,
            0
          ),

          strengths: safeArray(
            aiProject.strengths
          ),

          suggestions: safeArray(
            aiProject.suggestions
          ),

          careerRelevance: safeString(
            aiProject.careerRelevance
          ),

          problemClarity: safeString(
            aiProject.problemClarity
          ),

          solutionClarity: safeString(
            aiProject.solutionClarity
          ),

          technologyAssessment: safeString(
            aiProject.technologyAssessment
          ),

          contributionEvidence: safeString(
            aiProject.contributionEvidence
          ),

          evidenceQuality: safeString(
            aiProject.evidenceQuality
          ),
        };
      }
    );

  const careerAlignment = {
    fitSummary: safeString(
      result?.careerAlignment?.fitSummary
    ),

    matchedAreas: safeArray(
      result?.careerAlignment?.matchedAreas
    ),

    gaps: safeArray(
      result?.careerAlignment?.gaps
    ),
  };

  const learningProgress = {
    summary: safeString(
      result?.learningProgress?.summary
    ),

    usefulLearning: safeArray(
      result?.learningProgress?.usefulLearning
    ),

    nextLearningFocus: safeArray(
      result?.learningProgress?.nextLearningFocus
    ),
  };

  const actionPlan = Array.isArray(
    result?.actionPlan
  )
    ? result.actionPlan
        .map((item: any) => ({
          priority:
            safeString(item?.priority) ||
            "Medium",

          task: safeString(item?.task),

          reason: safeString(item?.reason),
        }))
        .filter((item: any) => item.task)
    : [];

  return {
    score: safeNumber(result?.score, 0),

    summary: safeString(result?.summary),

    strengths: safeArray(result?.strengths),

    suggestions: safeArray(result?.suggestions),

    skillMatches: safeArray(result?.skillMatches),

    missingSkills: safeArray(result?.missingSkills),

    projectResults,

    careerAlignment,

    learningProgress,

    actionPlan,

    career: career
      ? {
          id: career.id,
          title: career.title,
          category: career.category,
        }
      : {
          id: null,
          title: targetCareer,
          category: "",
        },

    source: "ai",

    model: aiResult.model,

    provider: aiResult.provider,
  };
}

/*
 * ---------------------------------------------------------
 * POST API
 * ---------------------------------------------------------
 */

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      portfolio,
      courses = [],
      selectedCareer = "",
    }: {
      portfolio: Portfolio;
      courses: CourseProgress[];
      selectedCareer?: string;
    } = body;

    if (!portfolio) {
      return NextResponse.json(
        {
          error: "Portfolio data is required.",
        },
        {
          status: 400,
        }
      );
    }

    /*
     * SUPABASE
     */

    const supabase = getSupabaseAdmin();

    /*
     * AUTHENTICATION
     */

    const authHeader =
      request.headers.get("authorization");

    if (!authHeader?.startsWith("Bearer ")) {
      return NextResponse.json(
        {
          error: "Authentication required.",
        },
        {
          status: 401,
        }
      );
    }

    const accessToken = authHeader
      .replace("Bearer ", "")
      .trim();

    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser(accessToken);

    if (authError || !user) {
      return NextResponse.json(
        {
          error: "Invalid or expired session.",
        },
        {
          status: 401,
        }
      );
    }

    /*
     * CLEAN PORTFOLIO
     */

    const safePortfolio: Portfolio = {
      name: safeString(portfolio.name),

      education: safeString(portfolio.education),

      career_goal: safeString(portfolio.career_goal),

      about: safeString(portfolio.about),

      skills: safeString(portfolio.skills),

      projects: Array.isArray(portfolio.projects)
        ? portfolio.projects.map((project) => ({
            title: safeString(project?.title),

            description: safeString(
              project?.description
            ),

            technologies: safeString(
              project?.technologies
            ),

            link: safeString(project?.link),
          }))
        : [],
    };

    /*
     * CLEAN COURSE PROGRESS
     */

    const safeCourses: CourseProgress[] =
      Array.isArray(courses)
        ? courses.map((course) => ({
            skill: safeString(course?.skill),

            completed_lessons:
              course?.completed_lessons ?? 0,

            current_week: Number(
              course?.current_week ?? 0
            ),

            current_lesson: Number(
              course?.current_lesson ?? 0
            ),
          }))
        : [];

    /*
     * SELECTED CAREER
     */

    const requestedCareer = safeString(
      selectedCareer
    );

    const fallbackCareer = safeString(
      safePortfolio.career_goal
    );

    const targetCareer =
      requestedCareer || fallbackCareer;

    if (!targetCareer) {
      return NextResponse.json(
        {
          error:
            "No career was selected for the AI review.",
        },
        {
          status: 400,
        }
      );
    }

    console.log(
      "AI Portfolio Review target career:",
      targetCareer
    );

    /*
     * CAREER LOOKUP
     *
     * Correct database column:
     * certification_guidance
     */

    const careerSelect = `
      id,
      title,
      category,
      description,
      daily_work,
      beginner_skills,
      advanced_skills,
      learning_path,
      project_ideas,
      suitable_study_types,
      suitable_branches,
      certification_guidance,
      interview_topics,
      internship_guidance
    `;

    let career: Career | null = null;

    const {
      data: exactCareer,
      error: exactCareerError,
    } = await supabase
      .from("careers")
      .select(careerSelect)
      .ilike("title", targetCareer)
      .limit(1)
      .maybeSingle();

    if (exactCareerError) {
      console.error(
        "Exact career lookup error:",
        exactCareerError
      );
    }

    if (exactCareer) {
      career = exactCareer as Career;
    }

    /*
     * BROADER CAREER SEARCH
     */

    if (!career) {
      const {
        data: careerList,
        error: careerSearchError,
      } = await supabase
        .from("careers")
        .select(careerSelect)
        .ilike("title", `%${targetCareer}%`)
        .limit(1);

      if (careerSearchError) {
        console.error(
          "Career search error:",
          careerSearchError
        );
      }

      if (careerList && careerList.length > 0) {
        career = careerList[0] as Career;
      }
    }

    /*
     * CAREER INFORMATION
     */

    const careerDataForAI = career
      ? {
          id: career.id,
          title: career.title,
          category: career.category,
          description: career.description,
          daily_work: career.daily_work,
          beginner_skills: career.beginner_skills,
          advanced_skills: career.advanced_skills,
          learning_path: career.learning_path,
          project_ideas: career.project_ideas,
          suitable_study_types:
            career.suitable_study_types,
          suitable_branches:
            career.suitable_branches,
          certification_guidance:
            career.certification_guidance,
          interview_topics:
            career.interview_topics,
          internship_guidance:
            career.internship_guidance,
        }
      : null;

    /*
     * AI REVIEW + ONE JSON RETRY
     */

    let aiResult: AIResult | null = null;
    let parsedResult: any = null;
    let lastParseError: unknown = null;

    for (let attempt = 0; attempt < 2; attempt++) {
      console.log(
        `Starting AI portfolio review. Attempt ${attempt + 1}/2`,
        {
          career: targetCareer,
          environment: process.env.NODE_ENV,
        }
      );

      const prompt = buildPrompt(
        safePortfolio,
        safeCourses,
        careerDataForAI,
        targetCareer,
        attempt === 1
      );

      aiResult = await askAI(prompt);

      try {
        parsedResult = parseAIJson(
          aiResult.response
        );

        console.log(
          "AI JSON validation successful.",
          {
            provider: aiResult.provider,
            model: aiResult.model,
          }
        );

        break;
      } catch (parseError) {
        lastParseError = parseError;

        console.error(
          `AI JSON validation failed on attempt ${attempt + 1}:`,
          parseError
        );

        if (attempt === 0) {
          console.log(
            "Retrying AI with stricter JSON instructions..."
          );
        }
      }
    }

    if (!parsedResult || !aiResult) {
      console.error(
        "AI failed to produce valid JSON after retry.",
        lastParseError
      );

      console.error(
        "Last raw AI response:",
        aiResult?.response?.slice(0, 3000)
      );

      return NextResponse.json(
        {
          error:
            "AI could not generate a valid portfolio review after two attempts.",

          details:
            process.env.NODE_ENV === "development"
              ? lastParseError instanceof Error
                ? lastParseError.message
                : String(lastParseError)
              : undefined,
        },
        {
          status: 502,
        }
      );
    }

    /*
     * NORMALIZE RESULT
     */

    const finalResult = normalizeReview(
      parsedResult,
      safePortfolio,
      career,
      targetCareer,
      aiResult
    );

    console.log(
      "AI portfolio review completed successfully.",
      {
        provider: aiResult.provider,
        model: aiResult.model,
      }
    );

    return NextResponse.json(finalResult);
  } catch (error) {
    console.error(
      "Portfolio review error:",
      error
    );

    const message =
      error instanceof Error
        ? error.message
        : "Unknown server error.";

    const isTimeout =
      error instanceof Error &&
      error.name === "AbortError";

    return NextResponse.json(
      {
        error: isTimeout
          ? "AI portfolio review timed out. Please try again."
          : "Unable to generate portfolio review.",

        details:
          process.env.NODE_ENV === "development"
            ? message
            : undefined,
      },
      {
        status: isTimeout ? 504 : 500,
      }
    );
  }
}
