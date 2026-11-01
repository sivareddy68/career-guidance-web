
"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

type Profile = {
  name: string;
  study_type: string;
  branch: string;
  current_year: string;
  graduation_year: number;
  career_goal: string;
};

type CourseProgress = {
  skill: string;
  completed_lessons: unknown;
  current_week: number | null;
  current_lesson: number | null;
  updated_at?: string;
};

type WeeklyTask = {
  id: string;
  title: string;
  completed: boolean;
  career: string | null;
  course: string | null;
  due_date?: string | null;
};

type NavigationSection =
  | "home"
  | "courses"
  | "quick-actions"
  | "profile";

const COURSE_TOTALS: Record<string, number> = {
  python: 16,
  java: 16,
  javascript: 16,
  "c programming": 16,
  c: 16,
  "programming fundamentals": 16,
  "programming basics": 16,
  html: 16,
  css: 16,
  react: 16,
  sql: 16,
  "sql basics": 16,
  git: 16,
  linux: 16,
  "linux basics": 16,
  cloud: 16,
  networking: 16,
  "networking fundamentals": 16,
  "networking basics": 16,
  "security fundamentals": 16,
  "ip addressing": 16,
  subnetting: 16,
  statistics: 16,
  "basic statistics": 16,
  excel: 16,
  "circuit theory": 16,
  "analog electronics": 16,
  "digital electronics": 16,
  "microcontroller basics": 16,
  "electronics basics": 16,
  "boolean algebra": 16,
  "verilog basics": 16,
  communication: 16,
  "design fundamentals": 16,
  wireframing: 16,
  "visual communication": 16,
  "basic mathematics": 16,
};

function completedCount(value: unknown): number {
  if (Array.isArray(value)) return value.length;

  if (typeof value === "number" && Number.isFinite(value)) {
    return Math.max(0, Math.floor(value));
  }

  if (typeof value === "string") {
    const text = value.trim();
    if (!text) return 0;

    try {
      const parsed: unknown = JSON.parse(text);

      if (Array.isArray(parsed)) return parsed.length;

      if (typeof parsed === "number" && Number.isFinite(parsed)) {
        return Math.max(0, Math.floor(parsed));
      }
    } catch {
      // Check numeric strings below.
    }

    const number = Number(text);

    if (Number.isFinite(number) && number >= 0) {
      return Math.floor(number);
    }
  }

  return 0;
}

function courseTotal(skill: string): number {
  return COURSE_TOTALS[skill.trim().toLowerCase()] ?? 0;
}

function percentage(done: number, total: number): number {
  return total > 0
    ? Math.min(100, Math.round((done / total) * 100))
    : 0;
}

function lessonLabel(item: CourseProgress): string {
  return `Week ${Math.max(
    1,
    item.current_week ?? 1
  )} · Lesson ${Math.max(1, item.current_lesson ?? 1)}`;
}

export default function DashboardPage() {
  const router = useRouter();

  const [profile, setProfile] = useState<Profile | null>(null);
  const [courseProgress, setCourseProgress] = useState<CourseProgress[]>([]);
  const [weeklyTasks, setWeeklyTasks] = useState<WeeklyTask[]>([]);
  const [selectedSkill, setSelectedSkill] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

  const [activeSection, setActiveSection] =
    useState<NavigationSection>("home");

  const loadDashboard = useCallback(async () => {
    setLoading(true);
    setLoadError("");

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

      const [profileResult, courseResult, taskResult] =
        await Promise.all([
          supabase
            .from("student_profiles")
            .select(
              "name, study_type, branch, current_year, graduation_year, career_goal"
            )
            .eq("user_id", user.id)
            .maybeSingle(),

          supabase
            .from("course_progress")
            .select(
              "skill, completed_lessons, current_week, current_lesson, updated_at"
            )
            .eq("user_id", user.id)
            .order("updated_at", { ascending: false }),

          supabase
            .from("weekly_tasks")
            .select("id, title, completed, career, course, due_date")
            .eq("user_id", user.id)
            .order("due_date", { ascending: true }),
        ]);

      if (profileResult.error) {
        console.error("Profile error:", profileResult.error);
      }

      setProfile((profileResult.data as Profile | null) ?? null);

      if (courseResult.error) {
        console.error("Course progress error:", courseResult.error);
        setCourseProgress([]);
        setLoadError(
          "Course progress could not be loaded. Check the course_progress table."
        );
      } else {
        const rows = (courseResult.data ?? []) as CourseProgress[];
        setCourseProgress(rows);

        setSelectedSkill((previous) =>
          previous && rows.some((row) => row.skill === previous)
            ? previous
            : rows[0]?.skill ?? ""
        );
      }

      if (taskResult.error) {
        console.error("Weekly tasks error:", taskResult.error);
        setWeeklyTasks([]);

        setLoadError((previous) =>
          previous
            ? `${previous} Weekly tasks could not be loaded.`
            : "Weekly tasks could not be loaded. Check the weekly_tasks table and permissions."
        );
      } else {
        setWeeklyTasks((taskResult.data ?? []) as WeeklyTask[]);
      }
    } catch (error) {
      console.error("Dashboard error:", error);
      setLoadError(
        "We couldn't load your dashboard. Please refresh the page."
      );
    } finally {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    void loadDashboard();
  }, [loadDashboard]);

  useEffect(() => {
    const refresh = () => void loadDashboard();

    window.addEventListener("focus", refresh);

    return () => window.removeEventListener("focus", refresh);
  }, [loadDashboard]);

  useEffect(() => {
    const sectionIds: NavigationSection[] = [
      "home",
      "profile",
      "courses",
      "quick-actions",
    ];

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length) {
          setActiveSection(
            visibleSections[0].target.id as NavigationSection
          );
        }
      },
      {
        rootMargin: "-15% 0px -65% 0px",
        threshold: [0, 0.1, 0.25, 0.5],
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [loading]);

  const selectedProgress = useMemo(
    () =>
      courseProgress.find(
        (item) => item.skill === selectedSkill
      ) ?? null,
    [courseProgress, selectedSkill]
  );

  const courseStats = useMemo(() => {
    const lessons = courseProgress.reduce(
      (sum, item) =>
        sum + completedCount(item.completed_lessons),
      0
    );

    const completedCourses = courseProgress.filter((item) => {
      const total = courseTotal(item.skill);

      return (
        total > 0 &&
        completedCount(item.completed_lessons) >= total
      );
    }).length;

    return {
      started: courseProgress.length,
      lessons,
      completedCourses,
    };
  }, [courseProgress]);

  const taskStats = useMemo(() => {
    const completed = weeklyTasks.filter(
      (task) => task.completed
    ).length;

    const pending = weeklyTasks.length - completed;

    return {
      total: weeklyTasks.length,
      completed,
      pending,
      percent: percentage(completed, weeklyTasks.length),
    };
  }, [weeklyTasks]);

  const overallLearningStats = useMemo(() => {
    const totalCourseLessons = courseProgress.reduce(
      (sum, item) => sum + courseTotal(item.skill),
      0
    );

    const completedCourseLessons = courseProgress.reduce(
      (sum, item) =>
        sum + completedCount(item.completed_lessons),
      0
    );

    const coursePercent = percentage(
      completedCourseLessons,
      totalCourseLessons
    );

    const taskPercent = taskStats.percent;

    const hasCourseProgress = totalCourseLessons > 0;
    const hasTaskProgress = weeklyTasks.length > 0;

    const overallPercent =
      hasCourseProgress && hasTaskProgress
        ? Math.round((coursePercent + taskPercent) / 2)
        : hasCourseProgress
          ? coursePercent
          : hasTaskProgress
            ? taskPercent
            : 0;

    return {
      coursePercent,
      taskPercent,
      overallPercent,
      completedCourseLessons,
      totalCourseLessons,
    };
  }, [courseProgress, taskStats.percent, weeklyTasks.length]);

  async function openRoadmap() {
    if (!profile?.career_goal) {
      router.push("/career-discovery");
      return;
    }

    const { data, error } = await supabase
      .from("careers")
      .select("title")
      .eq("title", profile.career_goal)
      .maybeSingle();

    if (error) {
      console.error("Career lookup error:", error);
    }

    router.push(
      data?.title
        ? `/roadmap?career=${encodeURIComponent(data.title)}`
        : "/career-discovery"
    );
  }

  function continueLearning(skill?: string) {
    const target =
      skill || selectedProgress?.skill || courseProgress[0]?.skill;

    router.push(
      target
        ? `/course?skill=${encodeURIComponent(target)}`
        : "/roadmap"
    );
  }

  async function toggleTask(task: WeeklyTask) {
    const next = !task.completed;

    setWeeklyTasks((previous) =>
      previous.map((item) =>
        item.id === task.id
          ? { ...item, completed: next }
          : item
      )
    );

    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      setWeeklyTasks((previous) =>
        previous.map((item) =>
          item.id === task.id
            ? { ...item, completed: task.completed }
            : item
        )
      );

      setLoadError("Please sign in again to update tasks.");
      return;
    }

    const { error } = await supabase
      .from("weekly_tasks")
      .update({ completed: next })
      .eq("id", task.id)
      .eq("user_id", user.id);

    if (error) {
      console.error("Task update error:", error);

      setWeeklyTasks((previous) =>
        previous.map((item) =>
          item.id === task.id
            ? { ...item, completed: task.completed }
            : item
        )
      );

      setLoadError("Task update failed. Please try again.");
    }
  }

  function scrollToSection(id: NavigationSection) {
    setActiveSection(id);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <div className="text-center">
          <div className="mb-4 text-5xl">🎓</div>
          <p className="text-slate-300">
            Loading your dashboard...
          </p>
        </div>
      </main>
    );
  }

  const selectedCompleted = selectedProgress
    ? completedCount(selectedProgress.completed_lessons)
    : 0;

  const selectedTotal = selectedProgress
    ? courseTotal(selectedProgress.skill)
    : 0;

  const selectedPercent = percentage(
    selectedCompleted,
    selectedTotal
  );

  const navigationItems: {
    id: NavigationSection;
    label: string;
    icon: string;
  }[] = [
    { id: "home", label: "Home", icon: "⌂" },
    { id: "courses", label: "Courses", icon: "▤" },
    { id: "quick-actions", label: "Quick Actions", icon: "▦" },
    { id: "profile", label: "Profile", icon: "♙" },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* TOP NAVIGATION - ONLY CAREERPATH AND MY RESUMES */}
      <nav className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          <button
            onClick={() => router.push("/")}
            className="text-xl font-bold transition hover:text-blue-400"
          >
            CareerPath
          </button>

          <button
            onClick={() => router.push("/saved-resumes")}
            className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold transition hover:bg-emerald-500"
          >
            My Resumes
          </button>
        </div>
      </nav>

      {/* DASHBOARD CONTENT */}
      <div className="mx-auto max-w-7xl px-4 py-6 pb-28 sm:px-6 sm:py-10 md:pb-10">

        {/* HOME / WELCOME */}
        <section
          id="home"
          className="mb-10 scroll-mt-5"
        >
          <p className="mb-2 font-semibold text-blue-400">
            STUDENT DASHBOARD
          </p>

          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Welcome, {profile?.name || "Student"} 👋
          </h1>

          <p className="mt-3 max-w-2xl text-sm text-slate-400 sm:text-base">
            Track your learning, complete weekly tasks, follow your career
            roadmap and build practical projects.
          </p>
        </section>

        {loadError && (
          <div
            role="alert"
            className="mb-6 rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-amber-200"
          >
            {loadError}

            <button
              onClick={() => void loadDashboard()}
              className="ml-3 font-semibold underline"
            >
              Try again
            </button>
          </div>
        )}

        {/* PROFILE INFORMATION */}
        <section
          id="profile"
          className="mb-10 grid scroll-mt-5 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {[
            ["Education", profile?.study_type || "Not set"],
            ["Branch", profile?.branch || "Not set"],
            ["Current Year", profile?.current_year || "Not set"],
            ["Graduation", profile?.graduation_year || "Not set"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-5"
            >
              <p className="text-sm text-slate-400">
                {label}
              </p>
              <p className="mt-2 text-lg font-semibold">
                {value}
              </p>
            </div>
          ))}
        </section>

        {/* CAREER GOAL */}
        <section className="mb-10 rounded-3xl border border-blue-500/20 bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-5 sm:p-7">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-300">
            Career Goal
          </p>

          <div className="mt-2 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">
                {profile?.career_goal || "Choose your career"}
              </h2>

              <p className="mt-2 text-sm text-slate-300 sm:text-base">
                Follow your personalized roadmap and develop the skills needed
                for your career.
              </p>
            </div>

            <button
              onClick={openRoadmap}
              className="rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500"
            >
              View Roadmap →
            </button>
          </div>
        </section>

        {/* QUICK STATISTICS */}
        <section className="mb-10 grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-5">
          {[
            ["Courses Started", courseStats.started],
            ["Lessons Completed", courseStats.lessons],
            ["Courses Completed", courseStats.completedCourses],
            ["Tasks Completed", taskStats.completed],
            ["Tasks Pending", taskStats.pending],
          ].map(([label, value]) => (
            <div
              key={String(label)}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-4 sm:p-5"
            >
              <p className="text-xs text-slate-400 sm:text-sm">
                {label}
              </p>
              <p className="mt-2 text-2xl font-bold sm:text-3xl">
                {value}
              </p>
            </div>
          ))}
        </section>

        {/* OVERALL LEARNING PROGRESS */}
        <section className="mb-10 rounded-3xl border border-blue-500/20 bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-5 sm:p-7">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-300">
                Overall Learning Progress
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                {overallLearningStats.overallPercent}% complete
              </h2>

              <p className="mt-2 max-w-2xl text-sm text-slate-400 sm:text-base">
                Your course lessons and weekly task completion are combined
                here to give you one simple view of your current learning
                progress.
              </p>
            </div>

            <div className="w-full lg:max-w-md">
              <div
                className="h-4 overflow-hidden rounded-full bg-slate-800"
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={overallLearningStats.overallPercent}
                aria-label="Overall learning progress"
              >
                <div
                  className="h-full rounded-full bg-blue-500 transition-all duration-500"
                  style={{
                    width: `${overallLearningStats.overallPercent}%`,
                  }}
                />
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-4">
                  <p className="text-xs text-slate-500">
                    Course Learning
                  </p>
                  <p className="mt-1 text-xl font-bold">
                    {overallLearningStats.coursePercent}%
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    {overallLearningStats.completedCourseLessons} of{" "}
                    {overallLearningStats.totalCourseLessons} lessons
                  </p>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-4">
                  <p className="text-xs text-slate-500">
                    Weekly Tasks
                  </p>
                  <p className="mt-1 text-xl font-bold">
                    {overallLearningStats.taskPercent}%
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    {taskStats.completed} of {taskStats.total} tasks
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WEEKLY TASKS */}
        <section className="mb-10 rounded-3xl border border-slate-800 bg-slate-900 p-5 sm:p-7">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold">
                Weekly Tasks Progress
              </h2>

              <p className="mt-1 text-sm text-slate-400 sm:text-base">
                Track your assignments and weekly learning activities.
              </p>
            </div>

            <button
              onClick={() => router.push("/weekly-tasks")}
              className="rounded-xl bg-blue-600 px-5 py-3 font-semibold transition hover:bg-blue-500"
            >
              Open Weekly Tasks →
            </button>
          </div>

          <div className="mt-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm text-slate-400">
                Overall task completion
              </p>

              <p className="mt-1 text-3xl font-bold">
                {taskStats.percent}%
              </p>
            </div>

            <p className="text-sm text-slate-400">
              {taskStats.completed} of {taskStats.total} tasks
            </p>
          </div>

          <div
            className="mt-4 h-3 overflow-hidden rounded-full bg-slate-800"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={taskStats.percent}
            aria-label="Weekly task completion"
          >
            <div
              className="h-full rounded-full bg-emerald-500 transition-all duration-500"
              style={{ width: `${taskStats.percent}%` }}
            />
          </div>

          {weeklyTasks.length === 0 ? (
            <p className="mt-5 text-slate-400">
              No weekly tasks found yet. Open Weekly Tasks to check your task
              list.
            </p>
          ) : (
            <div className="mt-6 space-y-3">
              {weeklyTasks.slice(0, 5).map((task) => (
                <label
                  key={task.id}
                  className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-800 bg-slate-950 p-4 transition hover:border-slate-600"
                >
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => void toggleTask(task)}
                    className="mt-1 h-4 w-4 accent-emerald-500"
                  />

                  <span className="min-w-0 flex-1">
                    <span
                      className={`block font-medium ${
                        task.completed
                          ? "text-slate-500 line-through"
                          : "text-white"
                      }`}
                    >
                      {task.title}
                    </span>

                    {task.course && (
                      <span className="mt-1 block text-xs text-slate-500">
                        Course: {task.course}
                      </span>
                    )}
                  </span>

                  <span
                    className={`text-xs ${
                      task.completed
                        ? "text-emerald-400"
                        : "text-amber-300"
                    }`}
                  >
                    {task.completed ? "Completed" : "Pending"}
                  </span>
                </label>
              ))}

              {weeklyTasks.length > 5 && (
                <button
                  onClick={() => router.push("/weekly-tasks")}
                  className="pt-2 text-sm font-semibold text-blue-400 hover:text-blue-300"
                >
                  View all {weeklyTasks.length} tasks →
                </button>
              )}
            </div>
          )}
        </section>

        {/* COURSES */}
        <section
          id="courses"
          className="mb-10 scroll-mt-5"
        >
          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold">
                Continue Learning
              </h2>

              <p className="mt-1 text-sm text-slate-400 sm:text-base">
                Select a course to continue where you left off.
              </p>
            </div>

            {courseProgress.length > 0 && (
              <span className="font-semibold text-blue-400">
                {courseProgress.length} course
                {courseProgress.length === 1 ? "" : "s"} tracked
              </span>
            )}
          </div>

          {courseProgress.length === 0 ? (
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-7">
              <h3 className="text-xl font-bold">
                No course progress yet
              </h3>

              <p className="mt-2 text-slate-400">
                Start a course from your roadmap. Your saved progress will
                appear here.
              </p>

              <button
                onClick={openRoadmap}
                className="mt-5 rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500"
              >
                Explore Your Roadmap →
              </button>
            </div>
          ) : (
            <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.8fr)]">
              <div className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
                <label
                  htmlFor="course-select"
                  className="mb-2 block text-sm text-slate-400"
                >
                  Choose a course
                </label>

                <select
                  id="course-select"
                  value={selectedSkill}
                  onChange={(event) =>
                    setSelectedSkill(event.target.value)
                  }
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white"
                >
                  {courseProgress.map((item) => (
                    <option key={item.skill} value={item.skill}>
                      {item.skill}
                    </option>
                  ))}
                </select>

                <div className="mt-6 space-y-3">
                  {courseProgress.map((item) => {
                    const count = completedCount(
                      item.completed_lessons
                    );

                    const total = courseTotal(item.skill);
                    const percent = percentage(count, total);
                    const selected = item.skill === selectedSkill;

                    return (
                      <button
                        key={item.skill}
                        onClick={() => setSelectedSkill(item.skill)}
                        className={`w-full rounded-xl border p-4 text-left transition ${
                          selected
                            ? "border-blue-500 bg-blue-500/10"
                            : "border-slate-800 bg-slate-950 hover:border-slate-600"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <span className="font-semibold">
                            {item.skill}
                          </span>

                          <span className="text-sm text-slate-400">
                            {total > 0
                              ? `${percent}%`
                              : `${count} completed`}
                          </span>
                        </div>

                        <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-800">
                          <div
                            className="h-full bg-blue-500 transition-all"
                            style={{ width: `${percent}%` }}
                          />
                        </div>

                        <p className="mt-2 text-xs text-slate-500">
                          {lessonLabel(item)}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-3xl border border-slate-800 bg-slate-900 p-5 sm:p-7">
                <p className="text-sm font-semibold text-blue-400">
                  SELECTED COURSE
                </p>

                <h3 className="mt-2 text-3xl font-bold">
                  {selectedProgress?.skill || "Select a course"}
                </h3>

                <p className="mt-2 text-slate-400">
                  {selectedProgress
                    ? lessonLabel(selectedProgress)
                    : "Your course details will appear here."}
                </p>

                <div className="mt-7">
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="text-slate-400">
                      Course Progress
                    </span>

                    <span className="font-semibold">
                      {selectedTotal > 0
                        ? `${selectedPercent}%`
                        : "Total not configured"}
                    </span>
                  </div>

                  <div className="h-3 overflow-hidden rounded-full bg-slate-800">
                    <div
                      className="h-full bg-blue-500 transition-all duration-500"
                      style={{ width: `${selectedPercent}%` }}
                    />
                  </div>

                  <p className="mt-3 text-sm text-slate-400">
                    {selectedTotal > 0
                      ? `${selectedCompleted} of ${selectedTotal} lessons completed`
                      : `${selectedCompleted} lessons completed`}
                  </p>
                </div>

                <button
                  onClick={() =>
                    continueLearning(selectedProgress?.skill)
                  }
                  className="mt-7 w-full rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500"
                >
                  Continue This Course →
                </button>
              </div>
            </div>
          )}
        </section>

        {/* QUICK ACTIONS */}
        <section
          id="quick-actions"
          className="mb-10 scroll-mt-5"
        >
          <h2 className="mb-5 text-2xl font-bold">
            Quick Actions
          </h2>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">

            <button
              onClick={() => router.push("/career-discovery")}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-4 text-left transition hover:bg-slate-800 sm:p-5"
            >
              <div className="mb-3 text-2xl">🔎</div>
              <h3 className="font-bold">Explore Careers</h3>
              <p className="mt-1 text-sm text-slate-400">
                Discover career options.
              </p>
            </button>

            <button
              onClick={() => router.push("/ai-assistant")}
              className="rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-600/15 to-blue-600/15 p-4 text-left transition hover:border-purple-400 hover:bg-slate-800 sm:p-5"
            >
              <div className="mb-3 text-2xl">🤖</div>
              <h3 className="font-bold">AI Career Assistant</h3>
              <p className="mt-1 text-sm text-slate-400">
                Chat with AI about your career, courses, weekly tasks and
                project progress.
              </p>
            </button>

            <button
              onClick={openRoadmap}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-4 text-left transition hover:bg-slate-800 sm:p-5"
            >
              <div className="mb-3 text-2xl">🗺️</div>
              <h3 className="font-bold">My Roadmap</h3>
              <p className="mt-1 text-sm text-slate-400">
                Continue your career plan.
              </p>
            </button>

            <button
              onClick={() => router.push("/weekly-tasks")}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-4 text-left transition hover:bg-slate-800 sm:p-5"
            >
              <div className="mb-3 text-2xl">✅</div>
              <h3 className="font-bold">Weekly Tasks</h3>
              <p className="mt-1 text-sm text-slate-400">
                Complete your pending tasks.
              </p>
            </button>

            <button
              onClick={() => router.push("/projects")}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-4 text-left transition hover:bg-slate-800 sm:p-5"
            >
              <div className="mb-3 text-2xl">💻</div>
              <h3 className="font-bold">My Projects</h3>
              <p className="mt-1 text-sm text-slate-400">
                Build and track projects.
              </p>
            </button>

            <button
              onClick={() => router.push("/portfolio-analysis")}
              className="rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-600/15 to-purple-600/15 p-4 text-left transition hover:border-blue-400 hover:bg-slate-800 sm:p-5"
            >
              <div className="mb-3 text-2xl">📊</div>
              <h3 className="font-bold">Portfolio Analysis</h3>
              <p className="mt-1 text-sm text-slate-400">
                Review your skills, course progress, and project completion.
              </p>
            </button>

            <button
              onClick={() => router.push("/resume-generator")}
              className="rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-600/15 to-teal-600/15 p-4 text-left transition hover:border-emerald-400 hover:bg-slate-800 sm:p-5"
            >
              <div className="mb-3 text-2xl">📄</div>
              <h3 className="font-bold">Resume Generator</h3>
              <p className="mt-1 text-sm text-slate-400">
                Create a professional resume using your student profile and
                portfolio.
              </p>
            </button>

            <button
              onClick={() => router.push("/job-eligibility")}
              className="rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-600/15 to-pink-600/15 p-4 text-left transition hover:border-purple-400 hover:bg-slate-800 sm:p-5"
            >
              <div className="mb-3 text-2xl">🎯</div>
              <h3 className="font-bold">Job-Specific Resume</h3>
              <p className="mt-1 text-sm text-slate-400">
                Analyse a job description and generate a tailored resume.
              </p>
            </button>

            <button
              onClick={() => router.push("/saved-resumes")}
              className="rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-600/15 to-teal-600/15 p-4 text-left transition hover:border-emerald-400 hover:bg-slate-800 sm:p-5"
            >
              <div className="mb-3 text-2xl">📚</div>
              <h3 className="font-bold">Resume Management</h3>
              <p className="mt-1 text-sm text-slate-400">
                View, edit, delete and download all your saved resumes.
              </p>
            </button>

          </div>
        </section>

        {/* NEXT STEP */}
        <section className="rounded-3xl border border-slate-800 bg-slate-900 p-5 sm:p-7">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold text-blue-400">
                NEXT STEP
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                Build practical skills
              </h2>

              <p className="mt-2 text-sm text-slate-400 sm:text-base">
                Keep learning and apply your knowledge in projects related to
                your career.
              </p>
            </div>

            <button
              onClick={() => router.push("/projects")}
              className="whitespace-nowrap rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500"
            >
              View Projects →
            </button>
          </div>
        </section>
      </div>

      {/* FIXED MOBILE BOTTOM NAVIGATION */}
      <nav
        aria-label="Mobile dashboard navigation"
        className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-800 bg-slate-950/95 px-2 pt-2 pb-[max(8px,env(safe-area-inset-bottom))] backdrop-blur-lg md:hidden"
      >
        <div className="mx-auto grid max-w-lg grid-cols-4">
          {navigationItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                aria-label={`Go to ${item.label}`}
                aria-current={isActive ? "location" : undefined}
                className={`flex flex-col items-center justify-center gap-1 rounded-xl py-2 transition ${
                  isActive
                    ? "text-blue-400"
                    : "text-slate-400 hover:text-blue-300"
                }`}
              >
                <span
                  className={`text-2xl leading-none transition-transform ${
                    isActive ? "scale-110" : ""
                  }`}
                >
                  {item.icon}
                </span>

                <span
                  className={`text-[10px] sm:text-[11px] ${
                    isActive ? "font-bold" : "font-medium"
                  }`}
                >
                  {item.label}
                </span>

                {isActive && (
                  <span className="h-1 w-1 rounded-full bg-blue-400" />
                )}
              </button>
            );
          })}
        </div>
      </nav>
    </main>
  );
}
