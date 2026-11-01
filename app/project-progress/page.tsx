
"use client";

import { Suspense, useCallback, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

type ProjectProgress = {
  project_key: string;
  completed_tasks: unknown;
  updated_at: string | null;
};

type StudentProfile = {
  selected_career_name?: string | null;
  career_goal?: string | null;
  branch?: string | null;
  study_type?: string | null;
};

type ProjectDefinition = {
  id: string;
  title: string;
  aliases: string[];
  tasks: string[];
};

const PROJECTS: ProjectDefinition[] = [
  {
    id: "product-metrics-dashboard",
    title: "Product Metrics Dashboard",
    aliases: [
      "Product Metrics Dashboard",
      "Product Metrics Analysis",
    ],
    tasks: [
      "Define the product goals and key performance indicators (KPIs).",
      "Collect or prepare sample product usage data.",
      "Clean the data and check for missing values.",
      "Calculate daily and monthly active users.",
      "Calculate retention, conversion, and engagement metrics.",
      "Create charts and a product metrics dashboard.",
      "Identify important trends and changes in the metrics.",
      "Write recommendations based on the dashboard findings.",
      "Test the dashboard and document the results.",
    ],
  },
  {
    id: "user-feedback-analysis",
    title: "User Feedback Analysis",
    aliases: [
      "User Feedback Analysis",
      "User Feedback Analysis Project",
    ],
    tasks: [
      "Collect sample user reviews, feedback, or survey responses.",
      "Organize the feedback in a spreadsheet or dataset.",
      "Clean duplicate entries and incomplete responses.",
      "Group feedback into themes such as usability and performance.",
      "Identify common complaints and feature requests.",
      "Summarize positive and negative feedback trends.",
      "Prioritize issues based on frequency and user impact.",
      "Prepare charts showing the main feedback categories.",
      "Write actionable product improvement recommendations.",
    ],
  },
  {
    id: "feature-performance-report",
    title: "Feature Performance Report",
    aliases: [
      "Feature Performance Report",
      "Feature Performance Analysis",
    ],
    tasks: [
      "Choose a product feature to evaluate.",
      "Define success metrics for the selected feature.",
      "Prepare sample feature usage data.",
      "Calculate how many users discover and use the feature.",
      "Measure engagement and repeat usage.",
      "Compare performance across user groups or time periods.",
      "Identify possible reasons for low or high usage.",
      "Create a feature performance report with charts.",
      "Recommend improvements and define how success will be measured.",
    ],
  },
  {
    id: "data-analysis",
    title: "Student Performance Analysis",
    aliases: [
      "Student Performance Analysis",
      "Student Performance Analysis Project",
    ],
    tasks: [
      "Collect or prepare student marks and attendance data.",
      "Clean the dataset and handle missing values.",
      "Calculate average marks and attendance percentages.",
      "Analyze student performance patterns.",
      "Create charts to present the findings.",
      "Write a report with conclusions and recommendations.",
    ],
  },
];

const GENERIC_TASKS = [
  "Define the project objective and expected outcome.",
  "Research the problem and gather requirements.",
  "Collect or prepare the project data and resources.",
  "Set up the tools and project structure.",
  "Complete the first version of the project.",
  "Test the project and fix identified issues.",
  "Review the results and make improvements.",
  "Document the project and prepare a final report.",
];

function normalize(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function getProjectDefinition(projectName: string): ProjectDefinition {
  const normalizedName = normalize(projectName);

  const match = PROJECTS.find((project) =>
    [project.id, project.title, ...project.aliases].some(
      (name) => normalize(name) === normalizedName
    )
  );

  if (match) return match;

  return {
    id: normalizedName || "general-project",
    title: projectName || "Project",
    aliases: [projectName],
    tasks: GENERIC_TASKS,
  };
}

function matchesProjectKey(
  savedKey: string,
  project: ProjectDefinition,
  selectedProject: string
) {
  const saved = normalize(savedKey);

  const possibleKeys = [
    project.id,
    project.title,
    selectedProject,
    ...project.aliases,
  ].map(normalize);

  if (
    normalize(project.title) ===
      normalize("Student Performance Analysis") &&
    ["dataanalysis", "studentperformanceanalysis"].includes(saved)
  ) {
    return true;
  }

  return possibleKeys.includes(saved);
}

function formatDate(value: string | null) {
  if (!value) return "Not available";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) return "Not available";

  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function readCompletedTasks(
  value: unknown,
  totalTasks: number
): boolean[] {
  const completed = Array.from(
    { length: totalTasks },
    () => false
  );

  let saved: unknown = value;

  if (
    saved &&
    typeof saved === "object" &&
    !Array.isArray(saved)
  ) {
    const objectValue = saved as Record<string, unknown>;

    if (Array.isArray(objectValue.completed)) {
      saved = objectValue.completed;
    } else if (typeof objectValue.count === "number") {
      const count = Math.min(
        totalTasks,
        Math.max(0, Math.floor(objectValue.count))
      );

      return completed.map((_, index) => index < count);
    }
  }

  if (Array.isArray(saved)) {
    saved.slice(0, totalTasks).forEach((item, index) => {
      completed[index] = Boolean(item);
    });

    return completed;
  }

  if (typeof saved === "number" && Number.isFinite(saved)) {
    const count = Math.min(
      totalTasks,
      Math.max(0, Math.floor(saved))
    );

    return completed.map((_, index) => index < count);
  }

  if (typeof saved === "string") {
    const count = Number(saved);

    if (Number.isFinite(count)) {
      const safeCount = Math.min(
        totalTasks,
        Math.max(0, Math.floor(count))
      );

      return completed.map((_, index) => index < safeCount);
    }
  }

  return completed;
}

function ProjectProgressContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const selectedProject =
    searchParams.get("project")?.trim() || "";

  const selectedCareer =
    searchParams.get("career")?.trim() || "";

  const project = useMemo(
    () => getProjectDefinition(selectedProject),
    [selectedProject]
  );

  const [profile, setProfile] =
    useState<StudentProfile | null>(null);

  const [completedTasks, setCompletedTasks] = useState<boolean[]>(
    () => project.tasks.map(() => false)
  );

  const [lastUpdated, setLastUpdated] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState("");
  const [userId, setUserId] = useState("");

  const completedCount = completedTasks.filter(Boolean).length;
  const totalTasks = project.tasks.length;
  const percentage =
    totalTasks > 0
      ? Math.round((completedCount / totalTasks) * 100)
      : 0;

  const loadProgress = useCallback(
    async (showRefresh = false) => {
      if (showRefresh) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }

      setError("");

      try {
        const {
          data: { user },
          error: authError,
        } = await supabase.auth.getUser();

        if (authError) throw authError;

        if (!user) {
          setUserId("");
          setProfile(null);
          setCompletedTasks(project.tasks.map(() => false));
          router.replace("/login");
          return;
        }

        setUserId(user.id);

        const [progressResult, profileResult] = await Promise.all([
          supabase
            .from("project_progress")
            .select("project_key, completed_tasks, updated_at")
            .eq("user_id", user.id),

          supabase
            .from("student_profiles")
            .select(
              "selected_career_name, career_goal, branch, study_type"
            )
            .eq("user_id", user.id)
            .maybeSingle(),
        ]);

        if (profileResult.error) {
          console.error(
            "Student profile error:",
            profileResult.error
          );
        }

        setProfile(
          (profileResult.data ?? null) as StudentProfile | null
        );

        if (progressResult.error) {
          throw progressResult.error;
        }

        const records = (progressResult.data ??
          []) as ProjectProgress[];

        const matchingRecords = records.filter((record) =>
          matchesProjectKey(
            record.project_key || "",
            project,
            selectedProject
          )
        );

        matchingRecords.sort((a, b) => {
          const timeA = a.updated_at
            ? new Date(a.updated_at).getTime()
            : 0;
          const timeB = b.updated_at
            ? new Date(b.updated_at).getTime()
            : 0;

          return timeB - timeA;
        });

        const record = matchingRecords[0];

        if (record) {
          setCompletedTasks(
            readCompletedTasks(
              record.completed_tasks,
              project.tasks.length
            )
          );
          setLastUpdated(record.updated_at);
        } else {
          setCompletedTasks(project.tasks.map(() => false));
          setLastUpdated(null);
        }
      } catch (err) {
        console.error("Project progress loading error:", err);
        setError(
          "Unable to load project progress. Check your Supabase project_progress table and access policies."
        );
      } finally {
        setLoading(false);
        setRefreshing(false);
      }
    },
    [router, project, selectedProject]
  );

  useEffect(() => {
    void loadProgress();
  }, [loadProgress]);

  async function toggleTask(index: number) {
    if (!userId || saving) return;

    const previousTasks = [...completedTasks];
    const nextTasks = [...completedTasks];
    nextTasks[index] = !nextTasks[index];

    setCompletedTasks(nextTasks);
    setSaving(true);
    setError("");

    try {
      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError) throw authError;
      if (!user) throw new Error("Your session has expired.");

      const { data: records, error: readError } = await supabase
        .from("project_progress")
        .select("project_key")
        .eq("user_id", user.id);

      if (readError) throw readError;

      const existingRecord = ((records ?? []) as {
        project_key: string;
      }[]).find((record) =>
        matchesProjectKey(
          record.project_key || "",
          project,
          selectedProject
        )
      );

      const projectKey =
        existingRecord?.project_key || project.id;

      const updatedAt = new Date().toISOString();

      const { error: saveError } = await supabase
        .from("project_progress")
        .upsert(
          {
            user_id: user.id,
            project_key: projectKey,
            completed_tasks: nextTasks,
            updated_at: updatedAt,
          },
          {
            onConflict: "user_id,project_key",
          }
        );

      if (saveError) throw saveError;

      setLastUpdated(updatedAt);
    } catch (err) {
      console.error("Saving project progress error:", err);
      setCompletedTasks(previousTasks);
      setError(
        "Could not save this task. Please check your internet connection and Supabase permissions, then try again."
      );
    } finally {
      setSaving(false);
    }
  }

  const careerName =
    selectedCareer ||
    profile?.selected_career_name ||
    profile?.career_goal ||
    "Career not selected";

  if (loading) {
    return (
      <main className="min-h-screen bg-slate-950 px-4 py-12 text-white sm:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="animate-pulse space-y-5">
            <div className="h-8 w-64 rounded-lg bg-slate-800" />
            <div className="h-4 w-80 max-w-full rounded bg-slate-800" />
            <div className="h-48 rounded-2xl bg-slate-900" />
            <div className="h-64 rounded-2xl bg-slate-900" />
          </div>
          <p className="mt-6 text-center text-sm text-slate-400">
            Loading your selected project...
          </p>
        </div>
      </main>
    );
  }

  if (!selectedProject) {
    return (
      <main className="min-h-screen bg-slate-950 px-4 py-12 text-white sm:px-8">
        <div className="mx-auto max-w-3xl rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8">
          <h1 className="text-2xl font-bold">No project selected</h1>
          <p className="mt-3 text-sm leading-6 text-slate-400">
            Return to your career roadmap and select Track Project
            Progress under the project you want to work on.
          </p>
          <Link
            href="/roadmap"
            className="mt-5 inline-flex rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-500"
          >
            Return to Career Roadmap →
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-slate-100 sm:px-8 sm:py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <Link
            href="/roadmap"
            className="mb-4 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
          >
            <span aria-hidden="true">←</span>
            Back to Career Roadmap
          </Link>

          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
            <div>
              <p className="text-sm font-medium text-indigo-400">
                {careerName}
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Project Progress
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
                Complete the checklist as you build your project.
                Progress is saved separately for each project.
              </p>
            </div>

            <button
              type="button"
              onClick={() => void loadProgress(true)}
              disabled={refreshing || saving}
              className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm font-medium transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <span aria-hidden="true">↻</span>
              {refreshing ? "Refreshing..." : "Refresh progress"}
            </button>
          </div>
        </div>

        {error && (
          <div
            role="alert"
            className="mb-6 rounded-xl border border-amber-700/50 bg-amber-950/30 p-4 text-sm text-amber-200"
          >
            {error}
          </div>
        )}

        <section className="mb-6 rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-7">
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-indigo-500/10 text-3xl">
              🛠️
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-sm text-slate-400">Selected project</p>
              <h2 className="mt-1 break-words text-2xl font-bold">
                {selectedProject}
              </h2>
              <p className="mt-2 text-sm text-indigo-300">
                Career: {careerName}
              </p>
              {profile?.branch && (
                <p className="mt-1 text-xs text-slate-500">
                  Branch: {profile.branch}
                </p>
              )}
            </div>
          </div>
        </section>

        <section className="mb-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <p className="text-sm text-slate-400">Completed tasks</p>
            <p className="mt-3 text-3xl font-bold">
              {completedCount} / {totalTasks}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <p className="text-sm text-slate-400">Project completion</p>
            <p className="mt-3 text-3xl font-bold">{percentage}%</p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <p className="text-sm text-slate-400">Project status</p>
            <p className="mt-3 text-xl font-bold">
              {percentage === 100
                ? "Completed"
                : completedCount > 0
                  ? "In progress"
                  : "Not started"}
            </p>
            <p className="mt-2 text-xs text-slate-500">
              Last saved: {formatDate(lastUpdated)}
            </p>
          </div>
        </section>

        <section className="mb-6 rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-7">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h2 className="text-xl font-semibold">Project checklist</h2>
              <p className="mt-1 text-sm text-slate-400">
                Tick a task when you finish it. Each change is saved
                to your account.
              </p>
            </div>
            <span className="shrink-0 rounded-lg bg-indigo-500/10 px-3 py-2 text-sm font-semibold text-indigo-300">
              {percentage}%
            </span>
          </div>

          <div
            className="mt-5 h-3 overflow-hidden rounded-full bg-slate-800"
            role="progressbar"
            aria-label="Project completion"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={percentage}
          >
            <div
              className="h-full rounded-full bg-indigo-500 transition-all duration-300"
              style={{ width: `${percentage}%` }}
            />
          </div>

          <div className="mt-6 space-y-3">
            {project.tasks.map((task, index) => (
              <label
                key={`${project.id}-${index}`}
                className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition ${
                  completedTasks[index]
                    ? "border-emerald-800/70 bg-emerald-950/20"
                    : "border-slate-800 bg-slate-950/60 hover:border-slate-700"
                } ${saving ? "opacity-80" : ""}`}
              >
                <input
                  type="checkbox"
                  checked={Boolean(completedTasks[index])}
                  onChange={() => void toggleTask(index)}
                  disabled={saving}
                  className="mt-1 h-4 w-4 shrink-0 accent-indigo-500"
                />

                <span
                  className={`text-sm leading-6 ${
                    completedTasks[index]
                      ? "text-slate-400 line-through"
                      : "text-slate-200"
                  }`}
                >
                  <span className="mr-2 text-xs text-slate-500">
                    {String(index + 1).padStart(2, "0")}.
                  </span>
                  {task}
                </span>
              </label>
            ))}
          </div>

          <p className="mt-5 text-xs text-slate-500" aria-live="polite">
            {saving
              ? "Saving your progress..."
              : "Your checklist is up to date when the save completes."}
          </p>

          {percentage === 100 && (
            <div className="mt-5 rounded-xl border border-emerald-800/60 bg-emerald-950/30 p-4">
              <h3 className="font-semibold text-emerald-300">
                Project checklist completed!
              </h3>
              <p className="mt-1 text-sm leading-6 text-slate-300">
                You have checked off every task for this project.
                Review your work and keep your project files ready
                for your portfolio.
              </p>
            </div>
          )}
        </section>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/roadmap"
            className="rounded-xl border border-slate-700 px-4 py-3 text-sm font-medium transition hover:bg-slate-800"
          >
            Career Roadmap
          </Link>

          <Link
            href="/dashboard"
            className="rounded-xl border border-slate-700 px-4 py-3 text-sm font-medium transition hover:bg-slate-800"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}

export default function ProjectProgressPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-slate-950 px-4 py-12 text-white sm:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="animate-pulse space-y-5">
              <div className="h-8 w-64 rounded-lg bg-slate-800" />
              <div className="h-4 w-80 max-w-full rounded bg-slate-800" />
              <div className="h-48 rounded-2xl bg-slate-900" />
            </div>
            <p className="mt-6 text-center text-sm text-slate-400">
              Preparing your project progress...
            </p>
          </div>
        </main>
      }
    >
      <ProjectProgressContent />
    </Suspense>
  );
}
