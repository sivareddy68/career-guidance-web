
"use client";

import { Suspense, useCallback, useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

type Submission = {
  id: string;
  user_id: string;
  project_key: string;
  project_title: string;
  description: string | null;
  technologies: string | null;
  github_url: string | null;
  demo_url: string | null;
  learning_summary: string | null;
  evidence_urls: string[] | null;
  status: string | null;
  score: number | null;
  feedback: string | null;
  evaluation_score: number | null;
  evaluation_feedback: string | null;
  evaluated_at: string | null;
  skills_demonstrated: string[] | null;
  evaluation_status: string | null;
};

type ProjectProgress = {
  id: string;
  user_id: string;
  project_key: string;
  project_title: string | null;
  completed_tasks: boolean[] | null;
};

const TOTAL_PROJECT_TASKS = 8;

function normalizeTitle(title: string) {
  return title
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function cleanText(value: string | null | undefined) {
  return (value || "").trim();
}

function parseTechnologies(value: string | null): string[] {
  if (!value) return [];

  return Array.from(
    new Set(
      value
        .split(/[,;\n]+/)
        .map((item) => item.trim())
        .filter(Boolean)
    )
  );
}

function countCompletedTasks(tasks: boolean[] | null | undefined) {
  return (tasks || []).filter(Boolean).length;
}

function calculateTaskScore(tasks: boolean[] | null | undefined) {
  const completed = Math.min(
    countCompletedTasks(tasks),
    TOTAL_PROJECT_TASKS
  );

  return Math.round((completed / TOTAL_PROJECT_TASKS) * 40);
}

function createFeedback(
  totalScore: number,
  completedCount: number,
  hasDescription: boolean,
  hasTechnologies: boolean,
  hasLearningSummary: boolean,
  evidenceCount: number
) {
  const feedback: string[] = [];

  if (completedCount >= TOTAL_PROJECT_TASKS) {
    feedback.push("Excellent task completion. You completed all project tasks.");
  } else if (completedCount >= 6) {
    feedback.push("Good progress. Most project tasks have been completed.");
  } else if (completedCount >= 4) {
    feedback.push("You have made a good start, but some project tasks remain.");
  } else {
    feedback.push("Complete more project tasks to strengthen your submission.");
  }

  feedback.push(
    hasDescription
      ? "Your project description has been provided."
      : "Add a more detailed project description explaining the problem, approach, and result."
  );

  feedback.push(
    hasTechnologies
      ? "Your technologies and tools are documented."
      : "Add the technologies and tools used."
  );

  feedback.push(
    hasLearningSummary
      ? "Your learning summary describes what you learned."
      : "Add a learning summary describing your skills and challenges."
  );

  feedback.push(
    evidenceCount > 0
      ? `${evidenceCount} evidence screenshot${evidenceCount === 1 ? "" : "s"} provided.`
      : "Consider adding screenshots or other project evidence."
  );

  if (totalScore >= 90) {
    feedback.push("Overall, your submission meets many of the project checklist requirements.");
  } else if (totalScore >= 75) {
    feedback.push("Your submission is progressing well. Review the breakdown to find areas to improve.");
  } else if (totalScore >= 50) {
    feedback.push("Continue improving the project and completing the remaining requirements.");
  } else {
    feedback.push("Work through the project tasks and strengthen your submission.");
  }

  return feedback.join(" ");
}

function getScoreLabel(score: number) {
  if (score >= 90) return "Excellent";
  if (score >= 75) return "Very Good";
  if (score >= 60) return "Good";
  if (score >= 50) return "Needs Improvement";
  return "Keep Working";
}

function getScoreMessage(score: number) {
  if (score >= 90) {
    return "Your submission meets most of the evaluation checklist requirements.";
  }

  if (score >= 75) {
    return "Your submission is progressing well. Review the breakdown for possible improvements.";
  }

  if (score >= 60) {
    return "Your project is progressing, but some requirements need attention.";
  }

  if (score >= 50) {
    return "Keep working on the project and complete more of its requirements.";
  }

  return "Continue completing tasks and improving your project submission.";
}

function ProjectEvaluationContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const projectName = searchParams.get("project")?.trim() || "";

  const [submission, setSubmission] = useState<Submission | null>(null);
  const [progress, setProgress] = useState<ProjectProgress | null>(null);

  const [loading, setLoading] = useState(true);
  const [evaluating, setEvaluating] = useState(false);

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const [score, setScore] = useState<number | null>(null);
  const [feedback, setFeedback] = useState("");
  const [skills, setSkills] = useState<string[]>([]);

  const loadEvaluationData = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      if (!projectName) {
        setSubmission(null);
        setProgress(null);
        setError("No project was selected. Open a project and submit it first.");
        return;
      }

      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError) throw authError;

      if (!user) {
        router.replace("/login");
        return;
      }

      const projectKey = normalizeTitle(projectName);

      if (!projectKey) {
        setError("The project title is invalid.");
        return;
      }

      const { data: submissionData, error: submissionError } =
        await supabase
          .from("project_submissions")
          .select("*")
          .eq("user_id", user.id)
          .eq("project_key", projectKey)
          .maybeSingle();

      if (submissionError) throw submissionError;

      if (!submissionData) {
        setSubmission(null);
        setProgress(null);
        setError(
          "No saved submission was found for this project. Please submit the project first."
        );
        return;
      }

      const savedSubmission = submissionData as Submission;

      const { data: progressData, error: progressError } =
        await supabase
          .from("project_progress")
          .select("*")
          .eq("user_id", user.id)
          .eq("project_key", projectKey)
          .maybeSingle();

      if (progressError) throw progressError;

      const savedProgress = progressData as ProjectProgress | null;

      setSubmission(savedSubmission);
      setProgress(savedProgress);

      const savedScore =
        savedSubmission.evaluation_score ??
        savedSubmission.score ??
        null;

      const savedFeedback =
        savedSubmission.evaluation_feedback ||
        savedSubmission.feedback ||
        "";

      setScore(savedScore);
      setFeedback(savedFeedback);
      setSkills(savedSubmission.skills_demonstrated || []);
    } catch (err: unknown) {
      console.error("Evaluation loading error:", err);

      setError(
        err instanceof Error
          ? err.message
          : "Unable to load the project evaluation."
      );
    } finally {
      setLoading(false);
    }
  }, [projectName, router]);

  useEffect(() => {
    void loadEvaluationData();
  }, [loadEvaluationData]);

  async function evaluateProject() {
    if (evaluating) return;

    setEvaluating(true);
    setError("");
    setMessage("");

    try {
      if (!projectName) {
        setError("No project was selected.");
        return;
      }

      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError) throw authError;

      if (!user) {
        router.replace("/login");
        return;
      }

      const projectKey = normalizeTitle(projectName);

      const { data: submissionData, error: submissionError } =
        await supabase
          .from("project_submissions")
          .select("*")
          .eq("user_id", user.id)
          .eq("project_key", projectKey)
          .maybeSingle();

      if (submissionError) throw submissionError;

      if (!submissionData) {
        setError("Please save your project submission before evaluating it.");
        return;
      }

      const currentSubmission = submissionData as Submission;

      const { data: progressData, error: progressError } =
        await supabase
          .from("project_progress")
          .select("*")
          .eq("user_id", user.id)
          .eq("project_key", projectKey)
          .maybeSingle();

      if (progressError) throw progressError;

      const currentProgress = progressData as ProjectProgress | null;
      const completedTasks = currentProgress?.completed_tasks || [];
      const completedCount = countCompletedTasks(completedTasks);

      const hasDescription =
        cleanText(currentSubmission.description).length >= 30;

      const detectedSkills = parseTechnologies(
        currentSubmission.technologies
      );

      const hasTechnologies = detectedSkills.length > 0;

      const hasLearningSummary =
        cleanText(currentSubmission.learning_summary).length >= 30;

      const evidenceCount = Array.isArray(currentSubmission.evidence_urls)
        ? currentSubmission.evidence_urls.length
        : 0;

      const taskScore = calculateTaskScore(completedTasks);
      const descriptionScore = hasDescription ? 20 : 0;
      const technologiesScore = hasTechnologies ? 15 : 0;
      const learningScore = hasLearningSummary ? 15 : 0;
      const evidenceScore = evidenceCount > 0 ? 10 : 0;

      const totalScore = Math.min(
        100,
        taskScore +
          descriptionScore +
          technologiesScore +
          learningScore +
          evidenceScore
      );

      const evaluationFeedback = createFeedback(
        totalScore,
        completedCount,
        hasDescription,
        hasTechnologies,
        hasLearningSummary,
        evidenceCount
      );

      const now = new Date().toISOString();

      const { error: updateError } = await supabase
        .from("project_submissions")
        .update({
          evaluation_score: totalScore,
          evaluation_feedback: evaluationFeedback,
          evaluated_at: now,
          skills_demonstrated: detectedSkills,
          evaluation_status: "evaluated",
          status: "evaluated",
          score: totalScore,
          feedback: evaluationFeedback,
          updated_at: now,
        })
        .eq("id", currentSubmission.id)
        .eq("user_id", user.id);

      if (updateError) throw updateError;

      setSubmission({
        ...currentSubmission,
        evaluation_score: totalScore,
        evaluation_feedback: evaluationFeedback,
        evaluated_at: now,
        skills_demonstrated: detectedSkills,
        evaluation_status: "evaluated",
        status: "evaluated",
        score: totalScore,
        feedback: evaluationFeedback,
      });

      setProgress(currentProgress);
      setScore(totalScore);
      setFeedback(evaluationFeedback);
      setSkills(detectedSkills);
      setMessage("Project evaluated successfully.");
    } catch (err: unknown) {
      console.error("Project evaluation error:", err);

      setError(
        err instanceof Error
          ? err.message
          : "Unable to evaluate the project."
      );
    } finally {
      setEvaluating(false);
    }
  }

  function goBackToSubmission() {
    if (!projectName) {
      router.push("/projects");
      return;
    }

    router.push(
      `/project-submission?project=${encodeURIComponent(projectName)}`
    );
  }

  function goToProjects() {
    router.push("/projects");
  }

  const completedTasks = countCompletedTasks(
    progress?.completed_tasks
  );

  const progressPercent = Math.min(
    100,
    Math.round((completedTasks / TOTAL_PROJECT_TASKS) * 100)
  );

  const taskScore = calculateTaskScore(progress?.completed_tasks);

  const descriptionScore =
    cleanText(submission?.description).length >= 30 ? 20 : 0;

  const technologiesScore =
    parseTechnologies(submission?.technologies ?? null).length > 0
      ? 15
      : 0;

  const learningScore =
    cleanText(submission?.learning_summary).length >= 30 ? 15 : 0;

  const evidenceScore =
    Array.isArray(submission?.evidence_urls) &&
    submission.evidence_urls.length > 0
      ? 10
      : 0;

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
        <div className="text-center">
          <div className="mb-4 text-5xl">📊</div>
          <h2 className="text-xl font-bold text-slate-800">
            Loading project evaluation...
          </h2>
          <p className="mt-2 text-slate-500">
            Checking your saved submission and task progress.
          </p>
        </div>
      </main>
    );
  }

  if (error && !submission) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
        <div className="w-full max-w-lg rounded-2xl border border-red-200 bg-white p-8 text-center">
          <div className="mb-4 text-4xl">⚠️</div>

          <h2 className="text-xl font-bold text-slate-900">
            Project Evaluation
          </h2>

          <p className="mt-3 break-words text-sm text-red-600">
            {error}
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={goBackToSubmission}
              className="flex-1 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Submit Project
            </button>

            <button
              type="button"
              onClick={goToProjects}
              className="flex-1 rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 hover:bg-slate-50"
            >
              Back to Projects
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
          <button
            type="button"
            onClick={goToProjects}
            className="text-sm font-medium text-slate-600 hover:text-blue-600"
          >
            ← Projects
          </button>

          <button
            type="button"
            onClick={goBackToSubmission}
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            Edit Submission
          </button>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 py-10">
        <section className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white md:p-10">
          <p className="text-sm font-semibold text-blue-100">
            PROJECT EVALUATION
          </p>

          <h1 className="mt-2 break-words text-3xl font-bold md:text-4xl">
            {submission?.project_title || projectName}
          </h1>

          <p className="mt-4 max-w-3xl leading-7 text-blue-100">
            Review your task progress, receive a rule-based score, and see
            which parts of your submission you can improve.
          </p>
        </section>

        {message && (
          <div
            role="status"
            className="mt-6 rounded-xl border border-green-200 bg-green-50 px-5 py-4 font-medium text-green-700"
          >
            {message}
          </div>
        )}

        {error && (
          <div
            role="alert"
            className="mt-6 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-red-700"
          >
            {error}
          </div>
        )}

        <section className="mt-8 grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-sm text-slate-500">Project Tasks</p>

            <div className="mt-2 flex items-end gap-2">
              <span className="text-4xl font-bold text-slate-900">
                {completedTasks}
              </span>
              <span className="mb-1 text-slate-500">
                / {TOTAL_PROJECT_TASKS}
              </span>
            </div>

            <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-blue-600 transition-all"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            <p className="mt-2 text-xs text-slate-500">
              {progressPercent}% completed
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-sm text-slate-500">Evaluation Score</p>

            <div className="mt-2 flex items-end gap-2">
              <span className="text-4xl font-bold text-blue-600">
                {score ?? "--"}
              </span>
              <span className="mb-1 text-slate-500">/ 100</span>
            </div>

            {score !== null && (
              <p className="mt-2 text-sm font-semibold text-slate-700">
                {getScoreLabel(score)}
              </p>
            )}
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-sm text-slate-500">Evaluation Status</p>

            <div className="mt-3">
              {score !== null ? (
                <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                  Evaluated
                </span>
              ) : (
                <span className="inline-flex rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
                  Pending
                </span>
              )}
            </div>

            {submission?.evaluated_at && (
              <p className="mt-3 text-xs text-slate-500">
                Evaluated{" "}
                {new Date(submission.evaluated_at).toLocaleString()}
              </p>
            )}
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-7">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold text-blue-600">
                NEXT STEP
              </p>

              <h2 className="mt-1 text-2xl font-bold text-slate-900">
                Evaluate Your Project
              </h2>

              <p className="mt-2 text-slate-500">
                Your score uses task completion and the information in your
                submission. It is an automated checklist, not a review of the
                actual code or screenshots.
              </p>
            </div>

            <button
              type="button"
              onClick={() => void evaluateProject()}
              disabled={evaluating}
              className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {evaluating
                ? "Evaluating..."
                : score !== null
                  ? "Re-evaluate Project"
                  : "Evaluate Project"}
            </button>
          </div>
        </section>

        {score !== null && (
          <>
            <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-7">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-blue-600">
                    RESULT
                  </p>
                  <h2 className="mt-1 text-3xl font-bold text-slate-900">
                    {score}/100
                  </h2>
                  <p className="mt-2 font-semibold text-slate-700">
                    {getScoreLabel(score)}
                  </p>
                </div>

                <div className="text-5xl">
                  {score >= 90
                    ? "🏆"
                    : score >= 75
                      ? "🎉"
                      : score >= 50
                        ? "👍"
                        : "📚"}
                </div>
              </div>

              <p className="mt-4 leading-7 text-slate-600">
                {getScoreMessage(score)}
              </p>

              <div className="mt-6 h-4 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-blue-600 transition-all"
                  style={{ width: `${score}%` }}
                />
              </div>
            </section>

            <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-7">
              <h2 className="text-2xl font-bold text-slate-900">
                Evaluation Breakdown
              </h2>

              <p className="mt-2 text-slate-500">
                The maximum score is 100 points.
              </p>

              <div className="mt-6 space-y-4">
                <ScoreRow
                  title="Project Tasks"
                  description="Completion of project tasks"
                  points={`${taskScore}/40`}
                  percentage={(taskScore / 40) * 100}
                />

                <ScoreRow
                  title="Project Description"
                  description="A description of at least 30 characters"
                  points={`${descriptionScore}/20`}
                  percentage={(descriptionScore / 20) * 100}
                />

                <ScoreRow
                  title="Technologies Used"
                  description="Documented technologies or tools"
                  points={`${technologiesScore}/15`}
                  percentage={(technologiesScore / 15) * 100}
                />

                <ScoreRow
                  title="Learning Summary"
                  description="A learning summary of at least 30 characters"
                  points={`${learningScore}/15`}
                  percentage={(learningScore / 15) * 100}
                />

                <ScoreRow
                  title="Project Evidence"
                  description="At least one uploaded screenshot"
                  points={`${evidenceScore}/10`}
                  percentage={(evidenceScore / 10) * 100}
                />
              </div>
            </section>

            <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-7">
              <h2 className="text-2xl font-bold text-slate-900">
                Feedback
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                {feedback || "No evaluation feedback is available yet."}
              </p>
            </section>

            <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-7">
              <h2 className="text-2xl font-bold text-slate-900">
                Skills Demonstrated
              </h2>

              {skills.length > 0 ? (
                <div className="mt-5 flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <span
                      key={`${skill}-${index}`}
                      className="rounded-xl border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="mt-3 text-slate-500">
                  Add technologies to your submission to record the skills
                  demonstrated in this project.
                </p>
              )}
            </section>

            <section className="mt-8 rounded-3xl bg-slate-900 p-8 text-center text-white">
              <h2 className="text-2xl font-bold">
                Project evaluation complete
              </h2>

              <p className="mt-2 text-slate-300">
                You can improve your submission or choose another project.
              </p>

              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={goBackToSubmission}
                  className="rounded-xl bg-white px-6 py-3 font-semibold text-slate-900 hover:bg-slate-100"
                >
                  Improve Submission
                </button>

                <button
                  type="button"
                  onClick={goToProjects}
                  className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-500"
                >
                  View Projects
                </button>
              </div>
            </section>
          </>
        )}
      </div>
    </main>
  );
}

function ScoreRow({
  title,
  description,
  points,
  percentage,
}: {
  title: string;
  description: string;
  points: string;
  percentage: number;
}) {
  return (
    <div className="rounded-xl border border-slate-200 p-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-semibold text-slate-900">{title}</h3>
          <p className="mt-1 text-sm text-slate-500">{description}</p>
        </div>

        <span className="whitespace-nowrap font-bold text-blue-600">
          {points}
        </span>
      </div>

      <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-blue-600"
          style={{
            width: `${Math.min(100, Math.max(0, percentage))}%`,
          }}
        />
      </div>
    </div>
  );
}

export default function ProjectEvaluationPage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
          <div className="text-center">
            <div className="mb-4 text-5xl">📊</div>
            <h2 className="text-xl font-bold text-slate-800">
              Loading project evaluation...
            </h2>
            <p className="mt-2 text-slate-500">
              Preparing your project details.
            </p>
          </div>
        </main>
      }
    >
      <ProjectEvaluationContent />
    </Suspense>
  );
}
