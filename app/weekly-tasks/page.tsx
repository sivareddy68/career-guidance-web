
"use client";

import { Suspense, useCallback, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase";

type WeeklyTask = {
  id: string;
  user_id: string;
  title: string;
  description: string | null;
  created_at: string;
  due_date: string | null;
  completed: boolean;
  career: string | null;
  course: string | null;
};

type Career = {
  title: string;
};

type FilterType = "all" | "pending" | "completed";

function WeeklyTasksContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const careerFromUrl = searchParams.get("career")?.trim() ?? "";

  const [tasks, setTasks] = useState<WeeklyTask[]>([]);
  const [careers, setCareers] = useState<string[]>([]);
  const [selectedCareer, setSelectedCareer] = useState(careerFromUrl);
  const [filter, setFilter] = useState<FilterType>("all");
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [updatingTaskId, setUpdatingTaskId] = useState<string | null>(null);

  // Load careers and saved task career names.
  useEffect(() => {
    let cancelled = false;

    async function loadCareers() {
      try {
        const {
          data: { user },
          error: authError,
        } = await supabase.auth.getUser();

        if (authError) throw authError;

        if (!user) {
          router.replace("/login");
          return;
        }

        const [careerResult, profileResult, taskCareerResult] =
          await Promise.all([
            supabase.from("careers").select("title").order("title"),
            supabase
              .from("student_profiles")
              .select("career_goal")
              .eq("user_id", user.id)
              .maybeSingle(),
            supabase
              .from("weekly_tasks")
              .select("career")
              .eq("user_id", user.id),
          ]);

        if (cancelled) return;

        if (careerResult.error) throw careerResult.error;
        if (taskCareerResult.error) throw taskCareerResult.error;

        const careerTitles = (careerResult.data ?? []).map(
          (item: Career) => item.title
        );

        const savedCareerTitles = (taskCareerResult.data ?? [])
          .map((item: { career: string | null }) => item.career?.trim())
          .filter((value): value is string => Boolean(value));

        const allCareers = Array.from(
          new Set([...careerTitles, ...savedCareerTitles])
        ).sort((a, b) => a.localeCompare(b));

        setCareers(allCareers);

        const profileCareer = profileResult.data?.career_goal?.trim() ?? "";

        const preferredCareer =
          careerFromUrl || profileCareer;

        if (preferredCareer) {
          setSelectedCareer(preferredCareer);
        } else if (allCareers.length === 1) {
          setSelectedCareer(allCareers[0]);
        } else {
          setSelectedCareer("");
        }
      } catch (error) {
        console.error("Career loading error:", error);

        if (!cancelled) {
          setErrorMessage(
            "Unable to load careers. Check your connection and try again."
          );
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    void loadCareers();

    return () => {
      cancelled = true;
    };
  }, [careerFromUrl, router]);

  // Fetch tasks for the selected career only.
  const loadTasks = useCallback(async () => {
    if (!selectedCareer) {
      setTasks([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    setErrorMessage("");

    try {
      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError) throw authError;

      if (!user) {
        router.replace("/login");
        return;
      }

      const { data, error } = await supabase
        .from("weekly_tasks")
        .select(
          "id, user_id, title, description, created_at, due_date, completed, career, course"
        )
        .eq("user_id", user.id)
        .eq("career", selectedCareer)
        .order("due_date", { ascending: true });

      if (error) throw error;

      setTasks((data ?? []) as WeeklyTask[]);
    } catch (error) {
      console.error("Weekly tasks loading error:", error);
      setTasks([]);
      setErrorMessage(
        "Unable to load tasks. Check the database column names and try again."
      );
    } finally {
      setLoading(false);
    }
  }, [selectedCareer, router]);

  useEffect(() => {
    void loadTasks();
  }, [loadTasks]);

  function changeCareer(career: string) {
    setSelectedCareer(career);
    setFilter("all");
    setTasks([]);
    setErrorMessage("");

    if (career) {
      router.replace(`/weekly-tasks?career=${encodeURIComponent(career)}`);
    } else {
      router.replace("/weekly-tasks");
    }
  }

  async function toggleTask(task: WeeklyTask) {
    if (updatingTaskId) return;

    const nextCompleted = !task.completed;
    setUpdatingTaskId(task.id);
    setErrorMessage("");

    // Update the screen immediately.
    setTasks((previous) =>
      previous.map((item) =>
        item.id === task.id
          ? { ...item, completed: nextCompleted }
          : item
      )
    );

    try {
      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError) throw authError;
      if (!user) throw new Error("Please sign in again.");

      const { error } = await supabase
        .from("weekly_tasks")
        .update({ completed: nextCompleted })
        .eq("id", task.id)
        .eq("user_id", user.id)
        .eq("career", selectedCareer);

      if (error) throw error;
    } catch (error) {
      console.error("Task update error:", error);

      // Restore the previous status if saving fails.
      setTasks((previous) =>
        previous.map((item) =>
          item.id === task.id
            ? { ...item, completed: task.completed }
            : item
        )
      );

      setErrorMessage(
        "Unable to update this task. Please check your database settings."
      );
    } finally {
      setUpdatingTaskId(null);
    }
  }

  const completedCount = tasks.filter((task) => task.completed).length;
  const pendingCount = tasks.length - completedCount;
  const progress =
    tasks.length > 0
      ? Math.round((completedCount / tasks.length) * 100)
      : 0;

  const filteredTasks = tasks.filter((task) => {
    if (filter === "pending") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="border-b border-slate-800">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <button
            onClick={() => router.push("/dashboard")}
            className="text-xl font-bold hover:text-blue-400"
          >
            CareerPath
          </button>

          <div className="flex gap-3">
            <button
              onClick={() => {
                if (selectedCareer) {
                  router.push(
                    `/roadmap?career=${encodeURIComponent(selectedCareer)}`
                  );
                } else {
                  router.push("/career-discovery");
                }
              }}
              className="rounded-lg px-4 py-2 text-slate-300 hover:bg-slate-800"
            >
              Roadmap
            </button>

            <button
              onClick={() => router.push("/dashboard")}
              className="rounded-lg bg-blue-600 px-4 py-2 hover:bg-blue-500"
            >
              Dashboard
            </button>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-6xl px-6 py-10">
        <section className="mb-8">
          <p className="mb-2 font-semibold text-blue-400">
            YOUR LEARNING PLAN
          </p>
          <h1 className="text-4xl font-bold">Weekly Tasks</h1>
          <p className="mt-3 text-slate-400">
            Each career has its own separate tasks and progress.
          </p>
        </section>

        <section className="mb-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <label
            htmlFor="career-select"
            className="mb-3 block font-semibold"
          >
            Select your career
          </label>

          <select
            id="career-select"
            value={selectedCareer}
            onChange={(event) => changeCareer(event.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white sm:max-w-xl"
          >
            <option value="">Choose a career</option>
            {careers.map((career) => (
              <option key={career} value={career}>
                {career}
              </option>
            ))}
          </select>

          {selectedCareer && (
            <p className="mt-3 text-sm text-slate-400">
              Showing tasks only for{" "}
              <span className="font-semibold text-blue-400">
                {selectedCareer}
              </span>
            </p>
          )}
        </section>

        {errorMessage && (
          <div
            role="alert"
            className="mb-6 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-red-200"
          >
            {errorMessage}
            <button
              onClick={() => void loadTasks()}
              className="ml-3 underline"
            >
              Try again
            </button>
          </div>
        )}

        {!selectedCareer ? (
          <section className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center">
            <div className="mb-3 text-4xl">🗂️</div>
            <h2 className="text-xl font-bold">Choose a career first</h2>
            <p className="mt-2 text-slate-400">
              Select a career to see its own weekly tasks.
            </p>
          </section>
        ) : (
          <>
            <section className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Total Tasks", tasks.length],
                ["Completed", completedCount],
                ["Pending", pendingCount],
                ["Progress", `${progress}%`],
              ].map(([label, value]) => (
                <div
                  key={String(label)}
                  className="rounded-2xl border border-slate-800 bg-slate-900 p-5"
                >
                  <p className="text-sm text-slate-400">{label}</p>
                  <p className="mt-2 text-3xl font-bold">{value}</p>
                </div>
              ))}
            </section>

            <section className="mb-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <div className="mb-3 flex items-center justify-between gap-3">
                <h2 className="text-xl font-bold">Career Task Progress</h2>
                <span className="text-sm text-slate-400">
                  {completedCount} / {tasks.length}
                </span>
              </div>

              <div
                className="h-3 overflow-hidden rounded-full bg-slate-800"
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={progress}
                aria-label="Career task completion"
              >
                <div
                  className="h-full rounded-full bg-emerald-500 transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </section>

            <section>
              <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-2xl font-bold">
                  {selectedCareer} Tasks
                </h2>

                <div className="flex flex-wrap gap-2">
                  {(
                    [
                      ["all", "All Tasks"],
                      ["pending", "Pending"],
                      ["completed", "Completed"],
                    ] as [FilterType, string][]
                  ).map(([value, label]) => (
                    <button
                      key={value}
                      onClick={() => setFilter(value)}
                      className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
                        filter === value
                          ? "bg-blue-600 text-white"
                          : "border border-slate-700 bg-slate-900 text-slate-300 hover:bg-slate-800"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              {loading ? (
                <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center text-slate-400">
                  Loading tasks for {selectedCareer}...
                </div>
              ) : filteredTasks.length === 0 ? (
                <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center">
                  <div className="mb-3 text-4xl">
                    {tasks.length === 0 ? "📚" : "🎉"}
                  </div>
                  <h3 className="text-xl font-bold">
                    {tasks.length === 0
                      ? "No tasks for this career yet"
                      : "No tasks in this filter"}
                  </h3>
                  <p className="mt-2 text-slate-400">
                    {tasks.length === 0
                      ? `No weekly tasks are saved for ${selectedCareer}. Open its roadmap to generate or add tasks.`
                      : "Try selecting a different task filter."}
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredTasks.map((task, index) => (
                    <article
                      key={task.id}
                      className="rounded-2xl border border-slate-800 bg-slate-900 p-5 transition hover:border-slate-700 sm:p-6"
                    >
                      <div className="flex items-start gap-4">
                        <input
                          type="checkbox"
                          checked={task.completed}
                          disabled={updatingTaskId !== null}
                          onChange={() => void toggleTask(task)}
                          aria-label={`Mark ${task.title} ${
                            task.completed ? "pending" : "completed"
                          }`}
                          className="mt-1 h-5 w-5 shrink-0 accent-emerald-500"
                        />

                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-xs text-slate-500">
                              Task {index + 1}
                            </span>

                            <span
                              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                                task.completed
                                  ? "bg-emerald-500/10 text-emerald-400"
                                  : "bg-amber-500/10 text-amber-300"
                              }`}
                            >
                              {task.completed ? "Completed" : "Pending"}
                            </span>
                          </div>

                          <h3
                            className={`mt-2 text-lg font-semibold ${
                              task.completed
                                ? "text-slate-400 line-through"
                                : "text-white"
                            }`}
                          >
                            {task.title}
                          </h3>

                          {task.description && (
                            <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-slate-400">
                              {task.description}
                            </p>
                          )}

                          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-500">
                            {task.course && (
                              <span>Course: {task.course}</span>
                            )}
                            {task.due_date && (
                              <span>
                                Due:{" "}
                                {new Date(
                                  `${task.due_date.slice(0, 10)}T00:00:00`
                                ).toLocaleDateString()}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </section>
          </>
        )}
      </div>
    </main>
  );
}

export default function WeeklyTasksPage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
          Loading weekly tasks...
        </main>
      }
    >
      <WeeklyTasksContent />
    </Suspense>
  );
}
