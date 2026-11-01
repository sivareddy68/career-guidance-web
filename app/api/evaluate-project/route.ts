
import { NextRequest, NextResponse } from "next/server";

const OLLAMA_URL = "http://127.0.0.1:11434/api/generate";
const OLLAMA_MODEL = process.env.OLLAMA_MODEL || "qwen3:3b";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      projectTitle,
      projectDescription,
      technologies,
      learningSummary,
      completedTasks,
      totalTasks,
    } = body;

    if (!projectTitle) {
      return NextResponse.json(
        { error: "Project title is required." },
        { status: 400 }
      );
    }

    const prompt = `
You are an AI project evaluator for a student career guidance platform.

Evaluate the student's project fairly and constructively.

PROJECT TITLE:
${projectTitle}

PROJECT DESCRIPTION:
${projectDescription || "Not provided"}

TECHNOLOGIES USED:
${technologies || "Not provided"}

LEARNING SUMMARY:
${learningSummary || "Not provided"}

COMPLETED TASKS:
${completedTasks || "No completed tasks provided"}

TOTAL PROJECT TASKS:
${totalTasks || 8}

Evaluate:
1. Project understanding
2. Technical implementation
3. Technologies used
4. Task completion
5. Learning demonstrated
6. Project documentation
7. Overall quality

Give a score from 0 to 100.

Return ONLY valid JSON in exactly this structure:

{
  "score": 0,
  "feedback": "Short overall feedback",
  "strengths": [
    "strength 1",
    "strength 2",
    "strength 3"
  ],
  "improvements": [
    "improvement 1",
    "improvement 2",
    "improvement 3"
  ],
  "skills": [
    "skill 1",
    "skill 2",
    "skill 3"
  ],
  "recommendation": "What the student should do next"
}

Do not use markdown.
Do not include anything outside the JSON.
`;

    const ollamaResponse = await fetch(OLLAMA_URL, {
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
        },
      }),
    });

    if (!ollamaResponse.ok) {
      const errorText = await ollamaResponse.text();

      return NextResponse.json(
        {
          error: "Ollama evaluation failed.",
          details: errorText,
        },
        { status: 500 }
      );
    }

    const ollamaData = await ollamaResponse.json();

    let evaluation;

    try {
      evaluation =
        typeof ollamaData.response === "string"
          ? JSON.parse(ollamaData.response)
          : ollamaData.response;
    } catch {
      return NextResponse.json(
        {
          error: "AI returned an invalid evaluation format.",
          rawResponse: ollamaData.response,
        },
        { status: 500 }
      );
    }

    const score = Math.max(
      0,
      Math.min(100, Number(evaluation.score) || 0)
    );

    return NextResponse.json({
      success: true,
      evaluation: {
        score,
        feedback: evaluation.feedback || "",
        strengths: Array.isArray(evaluation.strengths)
          ? evaluation.strengths
          : [],
        improvements: Array.isArray(evaluation.improvements)
          ? evaluation.improvements
          : [],
        skills: Array.isArray(evaluation.skills)
          ? evaluation.skills
          : [],
        recommendation: evaluation.recommendation || "",
      },
    });
  } catch (error) {
    console.error("AI evaluation error:", error);

    return NextResponse.json(
      {
        error: "Unable to evaluate project.",
        details:
          error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
