
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

function getSupabaseAdmin() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
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
  let cleaned = text.trim();

  if (cleaned.startsWith("```")) {
    cleaned = cleaned
      .replace(/^```json\s*/i, "")
      .replace(/^```\s*/i, "")
      .replace(/\s*```$/i, "")
      .trim();
  }

  const firstBrace = cleaned.indexOf("{");
  const lastBrace = cleaned.lastIndexOf("}");

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

export async function POST(
  request: NextRequest
) {
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
          error:
            "Portfolio data is required.",
        },
        {
          status: 400,
        }
      );
    }

    const groqApiKey =
      process.env.GROQ_API_KEY;

    const groqModel =
      process.env.GROQ_MODEL ||
      "openai/gpt-oss-20b";

    if (!groqApiKey) {
      return NextResponse.json(
        {
          error:
            "GROQ_API_KEY is missing.",
        },
        {
          status: 500,
        }
      );
    }

    const supabase =
      getSupabaseAdmin();

    /*
     * ---------------------------------------------------------
     * AUTHENTICATION
     * ---------------------------------------------------------
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
     * ---------------------------------------------------------
     * CLEAN PORTFOLIO
     * ---------------------------------------------------------
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
     * ---------------------------------------------------------
     * CLEAN COURSE PROGRESS
     * ---------------------------------------------------------
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
     * ---------------------------------------------------------
     * IMPORTANT:
     *
     * SELECTED CAREER IS THE SOURCE OF TRUTH.
     *
     * If Roadmap says Data Analyst,
     * AI MUST analyze Data Analyst.
     *
     * We do NOT blindly use the portfolio's
     * saved career_goal anymore.
     * ---------------------------------------------------------
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
     * ---------------------------------------------------------
     * FIND THE SELECTED CAREER
     * ---------------------------------------------------------
     */

    let career: Career | null =
      null;

    /*
     * First try exact title match.
     */

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
     * If exact match fails,
     * try broader matching.
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
     * ---------------------------------------------------------
     * CAREER DATA FOR AI
     * ---------------------------------------------------------
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
     * ---------------------------------------------------------
     * SYSTEM PROMPT
     * ---------------------------------------------------------
     */

    const systemPrompt = `
You are an expert career mentor, portfolio reviewer,
project reviewer, learning-path advisor, and technical
hiring advisor.

The application has explicitly selected ONE career for
this review.

The SELECTED CAREER is the only career that should be used
for career alignment.

Do NOT use the student's old/saved career goal to override
the selected career.

The portfolio may contain an older career_goal such as
"Web Developer", while the selected career may be
"Data Analyst".

If that happens:

- Analyze the student against Data Analyst.
- Do NOT analyze against Web Developer.
- Do NOT recommend Web Developer-specific missing skills
  merely because the portfolio says Web Developer.
- Career requirements must come from the selected career
  supplied by the application.

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

to evaluate the student's readiness.

IMPORTANT:

- Do not invent skills the student already knows.
- Do not assume a career requirement is already mastered.
- Clearly distinguish demonstrated skills from missing skills.
- Do not assume technologies that are not listed.
- Do not fabricate projects.
- Do not fabricate technical experience.
- If information is missing, say evidence is missing.
- Be honest but encouraging.
- Give practical next steps.

CAREER ALIGNMENT:

Compare the student's portfolio specifically against the
SELECTED CAREER.

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

The student's listed skills are evidence of claimed skills.

The selected career's skills are requirements.

If the student clearly demonstrates a required skill,
consider it a match.

If the skill is not demonstrated through skills,
projects, or course progress, it can be a gap.

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

The project does not have to exactly match a career project
idea to be useful.

LEARNING RECOMMENDATIONS:

Use the SELECTED CAREER's learning path and skills.

Recommendations must be specific.

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
     * ---------------------------------------------------------
     * USER PROMPT
     * ---------------------------------------------------------
     */

    const userPrompt = `
SELECTED CAREER:

${JSON.stringify(
  careerDataForAI,
  null,
  2
)}

IMPORTANT:

The selected career for this review is:

"${targetCareer}"

This career must be used for ALL career alignment,
missing skills, learning recommendations, project relevance,
and action planning.

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

Return exactly this structure:

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
    "skill that matches the SELECTED CAREER"
  ],

  "missingSkills": [
    "skill the student should learn for the SELECTED CAREER"
  ],

  "careerAlignment": {
    "fitSummary": "Explain fit specifically for the SELECTED CAREER",
    "matchedAreas": [
      "matched area"
    ],
    "gaps": [
      "gap specifically related to the SELECTED CAREER"
    ]
  },

  "learningProgress": {
    "summary": "Learning progress summary",
    "usefulLearning": [
      "useful learning"
    ],
    "nextLearningFocus": [
      "next learning focus specifically for the SELECTED CAREER"
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
      "careerRelevance": "Relevance to SELECTED CAREER",
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
- Missing skills must relate to the SELECTED CAREER.
- nextLearningFocus must relate to the SELECTED CAREER.
- actionPlan must relate to the SELECTED CAREER.
- If the selected career is Data Analyst, recommendations should
  be Data Analyst related.
- If the selected career is Web Developer, recommendations should
  be Web Developer related.
- Never mix the two careers.
`;

    /*
     * ---------------------------------------------------------
     * GROQ REQUEST
     * ---------------------------------------------------------
     */

    const groqResponse =
      await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",

            Authorization: `Bearer ${groqApiKey}`,
          },

          body: JSON.stringify({
            model: groqModel,

            temperature: 0.2,

            max_tokens: 4000,

            messages: [
              {
                role: "system",
                content:
                  systemPrompt,
              },

              {
                role: "user",
                content:
                  userPrompt,
              },
            ],
          }),
        }
      );

    /*
     * ---------------------------------------------------------
     * GROQ ERROR
     * ---------------------------------------------------------
     */

    if (!groqResponse.ok) {
      const errorText =
        await groqResponse.text();

      console.error(
        "Groq API error:",
        groqResponse.status,
        errorText
      );

      return NextResponse.json(
        {
          error:
            "AI review service is temporarily unavailable.",

          details:
            process.env.NODE_ENV ===
            "development"
              ? errorText
              : undefined,
        },
        {
          status: 502,
        }
      );
    }

    const groqData =
      await groqResponse.json();

    const content =
      groqData?.choices?.[0]
        ?.message?.content;

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
     * ---------------------------------------------------------
     * PARSE JSON
     * ---------------------------------------------------------
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

      return NextResponse.json(
        {
          error:
            "AI returned an invalid review format.",
        },
        {
          status: 502,
        }
      );
    }

    /*
     * ---------------------------------------------------------
     * PROJECT RESULTS
     * ---------------------------------------------------------
     */

    const aiProjects =
      Array.isArray(
        result.projectResults
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
                project.title.toLowerCase()
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
     * ---------------------------------------------------------
     * CAREER ALIGNMENT
     * ---------------------------------------------------------
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
     * ---------------------------------------------------------
     * LEARNING PROGRESS
     * ---------------------------------------------------------
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
     * ---------------------------------------------------------
     * ACTION PLAN
     * ---------------------------------------------------------
     */

    const actionPlan =
      Array.isArray(
        result.actionPlan
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
     * ---------------------------------------------------------
     * FINAL RESULT
     * ---------------------------------------------------------
     *
     * Notice:
     * career is the ACTUAL SELECTED CAREER.
     * ---------------------------------------------------------
     */

    const finalResult = {
      score: safeNumber(
        result.score,
        0
      ),

      summary:
        safeString(
          result.summary
        ),

      strengths:
        safeArray(
          result.strengths
        ),

      suggestions:
        safeArray(
          result.suggestions
        ),

      skillMatches:
        safeArray(
          result.skillMatches
        ),

      missingSkills:
        safeArray(
          result.missingSkills
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

      model: groqModel,
    };

    return NextResponse.json(
      finalResult
    );
  } catch (error) {
    console.error(
      "Portfolio review error:",
      error
    );

    return NextResponse.json(
      {
        error:
          "Unable to generate portfolio review.",
      },
      {
        status: 500,
      }
    );
  }
}
