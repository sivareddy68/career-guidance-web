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
  certificate_guidance: string;
  interview_topics: string;
  internship_guidance: string;
};

const OLLAMA_URL =
  process.env.OLLAMA_URL ||
  "http://127.0.0.1:11434/api/generate";

const OLLAMA_MODEL =
  process.env.OLLAMA_MODEL ||
  "qwen2.5:3b";

/*
 * Current Cloudflare Workers AI model.
 *
 * IMPORTANT:
 * @cf/meta/llama-3.1-8b-instruct was deprecated.
 */
const CLOUDFLARE_MODEL =
  process.env.CLOUDFLARE_MODEL ||
  "@cf/meta/llama-3.2-3b-instruct";

const CLOUDFLARE_ACCOUNT_ID =
  process.env.CLOUDFLARE_ACCOUNT_ID || "";

const CLOUDFLARE_API_TOKEN =
  process.env.CLOUDFLARE_API_TOKEN || "";

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

function cleanJsonText(text: string) {
  let cleaned = String(text || "").trim();

  cleaned = cleaned
    .replace(/^```json\s*/i, "")
    .replace(/^```\s*/i, "")
    .replace(/\s*```$/i, "")
    .trim();

  const firstBrace =
    cleaned.indexOf("{");

  const lastBrace =
    cleaned.lastIndexOf("}");

  if (
    firstBrace !== -1 &&
    lastBrace !== -1 &&
    lastBrace > firstBrace
  ) {
    cleaned = cleaned.slice(
      firstBrace,
      lastBrace + 1
    );
  }

  return cleaned;
}

function safeArray(value: unknown): string[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .map((item) =>
      String(item ?? "").trim()
    )
    .filter(Boolean);
}

function safeNumber(
  value: unknown,
  fallback = 0
) {
  const number = Number(value);

  if (!Number.isFinite(number)) {
    return fallback;
  }

  return Math.max(
    0,
    Math.min(
      100,
      Math.round(number)
    )
  );
}

function safeString(value: unknown) {
  return String(value ?? "").trim();
}

/*
 * ---------------------------------------------------------
 * OLLAMA
 * ---------------------------------------------------------
 */

async function askOllama(
  prompt: string
): Promise<string> {
  const controller =
    new AbortController();

  const timeout = setTimeout(
    () => controller.abort(),
    120000
  );

  try {
    const response =
      await fetch(
        OLLAMA_URL,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            model: OLLAMA_MODEL,
            prompt,
            stream: false,
            keep_alive: "10m",

            options: {
              temperature: 0.2,
              num_predict: 4000,
              num_ctx: 8192,
            },
          }),

          signal:
            controller.signal,

          cache: "no-store",
        }
      );

    if (!response.ok) {
      const details =
        await response.text();

      throw new Error(
        `Ollama error ${response.status}: ${details}`
      );
    }

    const data =
      await response.json();

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

  const controller =
    new AbortController();

  const timeout = setTimeout(
    () => controller.abort(),
    120000
  );

  try {
    const response =
      await fetch(
        endpoint,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",

            Authorization:
              `Bearer ${CLOUDFLARE_API_TOKEN}`,
          },

          body: JSON.stringify({
            prompt,

            max_tokens: 4000,

            temperature: 0.2,

            /*
             * Ask Cloudflare for JSON directly.
             * This makes the portfolio review much
             * more reliable than asking for plain text.
             */
            response_format: {
              type: "json_object",
            },
          }),

          signal:
            controller.signal,

          cache: "no-store",
        }
      );

    const rawText =
      await response.text();

    if (!response.ok) {
      throw new Error(
        `Cloudflare AI error ${response.status}: ${rawText}`
      );
    }

    let data: any;

    try {
      data = JSON.parse(rawText);
    } catch {
      console.error(
        "Cloudflare returned non-JSON HTTP response:",
        rawText
      );

      throw new Error(
        "Cloudflare AI returned an invalid HTTP response."
      );
    }

    /*
     * Standard Workers AI response:
     *
     * {
     *   success: true,
     *   result: {
     *     response: "..."
     *   }
     * }
     */

    let reply = "";

    if (
      typeof data?.result?.response ===
      "string"
    ) {
      reply =
        data.result.response.trim();
    }

    /*
     * Additional compatibility handling.
     */
    if (
      !reply &&
      typeof data?.result === "string"
    ) {
      reply =
        data.result.trim();
    }

    if (
      !reply &&
      typeof data?.response === "string"
    ) {
      reply =
        data.response.trim();
    }

    if (!reply) {
      console.error(
        "Unexpected Cloudflare AI response:",
        data
      );

      throw new Error(
        "Cloudflare AI returned an unreadable response."
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
 *
 * Localhost:
 *   Ollama + Qwen
 *
 * Production:
 *   Cloudflare Workers AI
 * ---------------------------------------------------------
 */

async function askAI(
  prompt: string
) {
  if (
    process.env.NODE_ENV ===
    "production"
  ) {
    const response =
      await askCloudflare(prompt);

    return {
      response,
      provider: "cloudflare",
      model:
        CLOUDFLARE_MODEL,
    };
  }

  try {
    const response =
      await askOllama(prompt);

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
      const response =
        await askCloudflare(prompt);

      return {
        response,
        provider: "cloudflare",
        model:
          CLOUDFLARE_MODEL,
      };
    }

    throw ollamaError;
  }
}

/*
 * ---------------------------------------------------------
 * POST
 * ---------------------------------------------------------
 */

export async function POST(
  request: NextRequest
) {
  try {
    const body =
      await request.json();

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
          error:
            "Portfolio data is required.",
        },
        {
          status: 400,
        }
      );
    }

    /*
     * -------------------------------------------------------
     * SUPABASE
     * -------------------------------------------------------
     */

    const supabase =
      getSupabaseAdmin();

    /*
     * -------------------------------------------------------
     * AUTHENTICATION
     * -------------------------------------------------------
     */

    const authHeader =
      request.headers.get(
        "authorization"
      );

    if (
      !authHeader?.startsWith(
        "Bearer "
      )
    ) {
      return NextResponse.json(
        {
          error:
            "Authentication required.",
        },
        {
          status: 401,
        }
      );
    }

    const accessToken =
      authHeader
        .replace("Bearer ", "")
        .trim();

    const {
      data: { user },
      error: authError,
    } =
      await supabase.auth.getUser(
        accessToken
      );

    if (
      authError ||
      !user
    ) {
      return NextResponse.json(
        {
          error:
            "Invalid or expired session.",
        },
        {
          status: 401,
        }
      );
    }

    /*
     * -------------------------------------------------------
     * CLEAN PORTFOLIO
     * -------------------------------------------------------
     */

    const safePortfolio: Portfolio = {
      name: safeString(
        portfolio.name
      ),

      education: safeString(
        portfolio.education
      ),

      career_goal: safeString(
        portfolio.career_goal
      ),

      about: safeString(
        portfolio.about
      ),

      skills: safeString(
        portfolio.skills
      ),

      projects:
        Array.isArray(
          portfolio.projects
        )
          ? portfolio.projects.map(
              (project) => ({
                title: safeString(
                  project?.title
                ),

                description:
                  safeString(
                    project?.description
                  ),

                technologies:
                  safeString(
                    project?.technologies
                  ),

                link: safeString(
                  project?.link
                ),
              })
            )
          : [],
    };

    /*
     * -------------------------------------------------------
     * CLEAN COURSE PROGRESS
     * -------------------------------------------------------
     */

    const safeCourses:
      CourseProgress[] =
      Array.isArray(courses)
        ? courses.map(
            (course) => ({
              skill: safeString(
                course?.skill
              ),

              completed_lessons:
                course?.completed_lessons ??
                0,

              current_week:
                Number(
                  course?.current_week ??
                    0
                ),

              current_lesson:
                Number(
                  course?.current_lesson ??
                    0
                ),
            })
          )
        : [];

    /*
     * -------------------------------------------------------
     * SELECTED CAREER
     * -------------------------------------------------------
     */

    const requestedCareer =
      safeString(
        selectedCareer
      );

    const fallbackCareer =
      safeString(
        safePortfolio.career_goal
      );

    const targetCareer =
      requestedCareer ||
      fallbackCareer;

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
     * -------------------------------------------------------
     * FIND CAREER
     * -------------------------------------------------------
     */

    let career:
      | Career
      | null = null;

    const {
      data: exactCareer,
      error: exactCareerError,
    } = await supabase
      .from("careers")
      .select(
        `
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
          certificate_guidance,
          interview_topics,
          internship_guidance
        `
      )
      .ilike(
        "title",
        targetCareer
      )
      .limit(1)
      .maybeSingle();

    if (exactCareerError) {
      console.error(
        "Exact career lookup error:",
        exactCareerError
      );
    }

    if (exactCareer) {
      career =
        exactCareer as Career;
    }

    /*
     * Broader career search.
     */

    if (!career) {
      const {
        data: careerList,
        error:
          careerSearchError,
      } = await supabase
        .from("careers")
        .select(
          `
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
            certificate_guidance,
            interview_topics,
            internship_guidance
          `
        )
        .ilike(
          "title",
          `%${targetCareer}%`
        )
        .limit(1);

      if (careerSearchError) {
        console.error(
          "Career search error:",
          careerSearchError
        );
      }

      if (
        careerList &&
        careerList.length > 0
      ) {
        career =
          careerList[0] as Career;
      }
    }

    /*
     * -------------------------------------------------------
     * CAREER DATA
     * -------------------------------------------------------
     */

    const careerDataForAI =
      career
        ? {
            id: career.id,
            title: career.title,
            category:
              career.category,
            description:
              career.description,
            daily_work:
              career.daily_work,
            beginner_skills:
              career.beginner_skills,
            advanced_skills:
              career.advanced_skills,
            learning_path:
              career.learning_path,
            project_ideas:
              career.project_ideas,
            suitable_study_types:
              career.suitable_study_types,
            suitable_branches:
              career.suitable_branches,
            certificate_guidance:
              career.certificate_guidance,
            interview_topics:
              career.interview_topics,
            internship_guidance:
              career.internship_guidance,
          }
        : null;

    /*
     * -------------------------------------------------------
     * SYSTEM PROMPT
     * -------------------------------------------------------
     */

    const systemPrompt = `
You are an expert career mentor, portfolio reviewer,
project reviewer, learning-path advisor, and technical
hiring advisor.

The application has explicitly selected ONE career.

The SELECTED CAREER is the only career that should be used
for career alignment.

Do NOT use the student's old saved career goal to override
the selected career.

If the portfolio contains an older career_goal such as
"Web Developer" while the selected career is "Data Analyst",
analyze the student against Data Analyst.

The CAREER DATABASE INFORMATION is the source of truth.

Use:

- beginner_skills
- advanced_skills
- learning_path
- project_ideas
- daily_work
- interview_topics
- internship_guidance
- certificate_guidance
- suitable study types
- suitable branches

to evaluate readiness.

IMPORTANT:

- Do not invent skills.
- Do not invent projects.
- Do not invent technical experience.
- Do not assume unlisted technologies.
- Clearly distinguish demonstrated skills from missing skills.
- If information is missing, say evidence is missing.
- Be honest but encouraging.
- Give practical next steps.

CAREER ALIGNMENT:

Compare the portfolio specifically against the SELECTED CAREER.

Identify:

1. Strong matches
2. Partial matches
3. Missing beginner skills
4. Missing advanced skills
5. Missing project experience
6. Learning-path gaps
7. Evidence gaps
8. What the student should learn next

SKILL ANALYSIS:

The student's listed skills are claimed skills.

The selected career's skills are requirements.

If a required skill is demonstrated through skills,
projects, or course progress, consider it a match.

If it is not demonstrated, it may be a gap.

Do not mark everything as missing automatically.

COURSE PROGRESS:

Use course progress as supporting evidence.

Completing lessons does not automatically mean professional
mastery.

PROJECT ANALYSIS:

Review every supplied project.

Evaluate:

- problem clarity
- solution clarity
- technology
- contribution
- evidence
- career relevance
- improvement opportunities

Do not fabricate project information.

LEARNING RECOMMENDATIONS:

Use the selected career's learning path and skills.

ACTION PLAN:

Create practical priorities:

- High
- Medium
- Low

Return ONLY valid JSON.

Do not return markdown.
Do not return code fences.
`;

    /*
     * -------------------------------------------------------
     * USER PROMPT
     * -------------------------------------------------------
     */

    const userPrompt = `
SELECTED CAREER:

${JSON.stringify(
  careerDataForAI,
  null,
  2
)}

IMPORTANT:

The selected career is:

"${targetCareer}"

This career must be used for ALL career alignment,
missing skills, learning recommendations,
project relevance, and action planning.

STUDENT PORTFOLIO:

${JSON.stringify(
  safePortfolio,
  null,
  2
)}

COURSE / LEARNING PROGRESS:

${JSON.stringify(
  safeCourses,
  null,
  2
)}

Return exactly this JSON structure:

{
  "summary": "Short overall assessment",

  "score": 0,

  "strengths": [
    "strength"
  ],

  "suggestions": [
    "specific improvement"
  ],

  "skillMatches": [
    "skill that matches the selected career"
  ],

  "missingSkills": [
    "skill the student should learn"
  ],

  "careerAlignment": {
    "fitSummary": "Explain fit specifically for the selected career",
    "matchedAreas": [
      "matched area"
    ],
    "gaps": [
      "career-specific gap"
    ]
  },

  "learningProgress": {
    "summary": "Learning progress summary",
    "usefulLearning": [
      "useful learning"
    ],
    "nextLearningFocus": [
      "next learning focus"
    ]
  },

  "projectResults": [
    {
      "title": "Project title",
      "score": 0,
      "strengths": [
        "strength"
      ],
      "suggestions": [
        "improvement"
      ],
      "careerRelevance": "Relevance to selected career",
      "problemClarity": "Problem clarity",
      "solutionClarity": "Solution clarity",
      "technologyAssessment": "Technology assessment",
      "contributionEvidence": "Contribution evidence",
      "evidenceQuality": "Evidence quality"
    }
  ],

  "actionPlan": [
    {
      "priority": "High",
      "task": "Concrete action",
      "reason": "Why it matters"
    }
  ]
}

RULES:

- projectResults must contain one item for every student project.
- Scores must be between 0 and 100.
- Do not invent projects.
- Do not invent skills.
- Missing skills must relate to the selected career.
- nextLearningFocus must relate to the selected career.
- actionPlan must relate to the selected career.
- Never mix different careers.
`;

    /*
     * -------------------------------------------------------
     * CALL AI
     * -------------------------------------------------------
     */

    const aiResult =
      await askAI(
        systemPrompt +
          "\n\n" +
          userPrompt
      );

    const content =
      aiResult.response;

    if (!content) {
      return NextResponse.json(
        {
          error:
            "AI did not return a review.",
        },
        {
          status: 502,
        }
      );
    }

    /*
     * -------------------------------------------------------
     * PARSE AI JSON
     * -------------------------------------------------------
     */

    let result: any;

    try {
      const cleaned =
        cleanJsonText(
          content
        );

      result =
        JSON.parse(cleaned);
    } catch (parseError) {
      console.error(
        "AI JSON parse error:",
        parseError
      );

      console.error(
        "Raw AI response:",
        content
      );

      return NextResponse.json(
        {
          error:
            "AI returned an invalid review format.",
          provider:
            aiResult.provider,
          model:
            aiResult.model,
        },
        {
          status: 502,
        }
      );
    }

    /*
     * -------------------------------------------------------
     * PROJECT RESULTS
     * -------------------------------------------------------
     */

    const aiProjects =
      Array.isArray(
        result?.projectResults
      )
        ? result.projectResults
        : [];

    const projectResults =
      safePortfolio.projects.map(
        (project, index) => {
          const aiProject =
            aiProjects[index] ||
            aiProjects.find(
              (item: any) =>
                safeString(
                  item?.title
                ).toLowerCase() ===
                project.title
                  .toLowerCase()
            ) ||
            {};

          return {
            title:
              safeString(
                aiProject.title
              ) ||
              project.title ||
              `Project ${
                index + 1
              }`,

            score: safeNumber(
              aiProject.score,
              0
            ),

            strengths:
              safeArray(
                aiProject.strengths
              ),

            suggestions:
              safeArray(
                aiProject.suggestions
              ),

            careerRelevance:
              safeString(
                aiProject.careerRelevance
              ),

            problemClarity:
              safeString(
                aiProject.problemClarity
              ),

            solutionClarity:
              safeString(
                aiProject.solutionClarity
              ),

            technologyAssessment:
              safeString(
                aiProject.technologyAssessment
              ),

            contributionEvidence:
              safeString(
                aiProject.contributionEvidence
              ),

            evidenceQuality:
              safeString(
                aiProject.evidenceQuality
              ),
          };
        }
      );

    /*
     * -------------------------------------------------------
     * CAREER ALIGNMENT
     * -------------------------------------------------------
     */

    const careerAlignment = {
      fitSummary:
        safeString(
          result?.careerAlignment
            ?.fitSummary
        ),

      matchedAreas:
        safeArray(
          result?.careerAlignment
            ?.matchedAreas
        ),

      gaps:
        safeArray(
          result?.careerAlignment
            ?.gaps
        ),
    };

    /*
     * -------------------------------------------------------
     * LEARNING PROGRESS
     * -------------------------------------------------------
     */

    const learningProgress = {
      summary:
        safeString(
          result?.learningProgress
            ?.summary
        ),

      usefulLearning:
        safeArray(
          result?.learningProgress
            ?.usefulLearning
        ),

      nextLearningFocus:
        safeArray(
          result?.learningProgress
            ?.nextLearningFocus
        ),
    };

    /*
     * -------------------------------------------------------
     * ACTION PLAN
     * -------------------------------------------------------
     */

    const actionPlan =
      Array.isArray(
        result?.actionPlan
      )
        ? result.actionPlan
            .map(
              (item: any) => ({
                priority:
                  safeString(
                    item?.priority
                  ) ||
                  "Medium",

                task:
                  safeString(
                    item?.task
                  ),

                reason:
                  safeString(
                    item?.reason
                  ),
              })
            )
            .filter(
              (item: any) =>
                item.task
            )
        : [];

    /*
     * -------------------------------------------------------
     * FINAL RESULT
     * -------------------------------------------------------
     */

    const finalResult = {
      score: safeNumber(
        result?.score,
        0
      ),

      summary:
        safeString(
          result?.summary
        ),

      strengths:
        safeArray(
          result?.strengths
        ),

      suggestions:
        safeArray(
          result?.suggestions
        ),

      skillMatches:
        safeArray(
          result?.skillMatches
        ),

      missingSkills:
        safeArray(
          result?.missingSkills
        ),

      projectResults,

      careerAlignment,

      learningProgress,

      actionPlan,

      career: career
        ? {
            id: career.id,
            title: career.title,
            category:
              career.category,
          }
        : {
            id: null,
            title: targetCareer,
            category: "",
          },

      source: "ai",

      model:
        aiResult.model,

      provider:
        aiResult.provider,
    };

    return NextResponse.json(
      finalResult
    );
  } catch (error) {
    console.error(
      "Portfolio review error:",
      error
    );

    const message =
      error instanceof Error
        ? error.message
        : "";

    const isTimeout =
      error instanceof Error &&
      error.name ===
        "AbortError";

    return NextResponse.json(
      {
        error: isTimeout
          ? "AI portfolio review timed out. Please try again."
          : "Unable to generate portfolio review.",

        details:
          process.env.NODE_ENV ===
          "development"
            ? message
            : undefined,
      },
      {
        status: isTimeout
          ? 504
          : 500,
      }
    );
  }
}