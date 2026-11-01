
"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

type PortfolioProject = {
  title?: string;
  description?: string;
  technologies?: string[] | string;
  link?: string;
};

type Portfolio = {
  name?: string;
  education?: string;
  career_goal?: string;
  about?: string;
  skills?: string[] | string;
  email?: string;
  projects?: PortfolioProject[] | string | null;
  updated_at?: string;
};

type StudentProfile = {
  selected_career_name?: string;
  career_goal?: string;
  branch?: string;
  study_type?: string;
  skills?: string[] | string;
};

type CourseProgress = {
  skill: string;
  completed_lessons?: number | null;
  current_week?: number | null;
  current_lesson?: number | null;
  updated_at?: string;
};

type ProjectProgress = {
  project_key: string;
  completed_tasks: unknown;
};

type Career = {
  title?: string;
  description?: string;
  skills?: unknown;
  required_skills?: unknown;
  beginner_skills?: unknown;
  advanced_skills?: unknown;
};

function parseList(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value
      .filter(
        (item) =>
          typeof item === "string" || typeof item === "number"
      )
      .map(String)
      .map((item) => item.trim())
      .filter(Boolean);
  }

  if (typeof value === "string") {
    const trimmed = value.trim();

    if (!trimmed) return [];

    try {
      const parsed = JSON.parse(trimmed);

      if (Array.isArray(parsed)) {
        return parsed
          .map(String)
          .map((item) => item.trim())
          .filter(Boolean);
      }
    } catch {
      // Treat ordinary text as a comma-separated list.
    }

    return trimmed
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
  }

  return [];
}

function parseProjects(value: unknown): PortfolioProject[] {
  if (Array.isArray(value)) {
    return value.filter(
      (item): item is PortfolioProject =>
        typeof item === "object" && item !== null
    );
  }

  if (typeof value === "string") {
    try {
      const parsed = JSON.parse(value);

      if (Array.isArray(parsed)) {
        return parsed.filter(
          (item): item is PortfolioProject =>
            typeof item === "object" && item !== null
        );
      }
    } catch {
      return [];
    }
  }

  return [];
}

function countCompletedTasks(value: unknown): number {
  let parsed = value;

  if (typeof parsed === "string") {
    try {
      parsed = JSON.parse(parsed);
    } catch {
      const numericValue = Number(parsed);

      return Number.isFinite(numericValue)
        ? Math.max(0, Math.floor(numericValue))
        : 0;
    }
  }

  if (typeof parsed === "number") {
    return Math.max(0, Math.floor(parsed));
  }

  if (Array.isArray(parsed)) {
    if (parsed.every((item) => typeof item === "boolean")) {
      return parsed.filter(Boolean).length;
    }

    const ids = parsed.filter(
      (item) =>
        typeof item === "string" || typeof item === "number"
    );

    return new Set(ids.map(String)).size;
  }

  if (parsed && typeof parsed === "object") {
    const objectValue = parsed as Record<string, unknown>;

    if (Array.isArray(objectValue.completed)) {
      return countCompletedTasks(objectValue.completed);
    }

    if (typeof objectValue.count === "number") {
      return Math.max(0, Math.floor(objectValue.count));
    }
  }

  return 0;
}

function normalize(value: string) {
  return value.trim().toLowerCase().replace(/\s+/g, " ");
}

function getCareerSkills(career: Career | null): string[] {
  if (!career) return [];

  const combined = [
    ...parseList(career.skills),
    ...parseList(career.required_skills),
    ...parseList(career.beginner_skills),
    ...parseList(career.advanced_skills),
  ];

  return Array.from(new Set(combined));
}

function formatDate(value?: string) {
  if (!value) return "Not available";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "Not available";
  }

  return date.toLocaleDateString();
}

export default function PortfolioAnalysisPage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [portfolio, setPortfolio] = useState<Portfolio | null>(null);
  const [profile, setProfile] = useState<StudentProfile | null>(null);
  const [courseProgress, setCourseProgress] = useState<CourseProgress[]>([]);
  const [projectProgress, setProjectProgress] = useState<ProjectProgress[]>([]);
  const [career, setCareer] = useState<Career | null>(null);
  const [careerName, setCareerName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  // AI review states
  const [aiLoading, setAiLoading] = useState(false);
  const [aiReview, setAiReview] = useState("");
  const [aiError, setAiError] = useState("");

  const loadAnalysisData = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError) throw authError;

      if (!user) {
        setError("Please log in to view your portfolio analysis.");
        return;
      }

      setUserEmail(user.email || "");

      const [
        portfolioResult,
        profileResult,
        courseResult,
        projectResult,
      ] = await Promise.all([
        supabase
          .from("student_portfolios")
          .select("*")
          .eq("user_id", user.id)
          .maybeSingle(),

        supabase
          .from("student_profiles")
          .select("*")
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
          .from("project_progress")
          .select("project_key, completed_tasks")
          .eq("user_id", user.id),
      ]);

      if (portfolioResult.error) throw portfolioResult.error;
      if (profileResult.error) throw profileResult.error;
      if (courseResult.error) throw courseResult.error;
      if (projectResult.error) throw projectResult.error;

      const savedPortfolio =
        portfolioResult.data as Portfolio | null;

      const savedProfile =
        profileResult.data as StudentProfile | null;

      setPortfolio(savedPortfolio);
      setProfile(savedProfile);
      setCourseProgress(
        (courseResult.data || []) as CourseProgress[]
      );
      setProjectProgress(
        (projectResult.data || []) as ProjectProgress[]
      );

      const selectedCareer =
        savedProfile?.selected_career_name?.trim() ||
        savedProfile?.career_goal?.trim() ||
        savedPortfolio?.career_goal?.trim() ||
        "";

      setCareerName(selectedCareer);

      if (selectedCareer) {
        const { data: careerData, error: careerError } =
          await supabase
            .from("careers")
            .select("*")
            .ilike("title", selectedCareer)
            .limit(1)
            .maybeSingle();

        if (careerError) {
          console.error("Career lookup error:", careerError);
        }

        setCareer((careerData as Career | null) || null);
      } else {
        setCareer(null);
      }
    } catch (err) {
      console.error("Portfolio analysis loading error:", err);

      setError(
        err instanceof Error
          ? err.message
          : "Unable to load portfolio analysis."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadAnalysisData();
  }, [loadAnalysisData]);

  const skills = useMemo(
    () => parseList(portfolio?.skills),
    [portfolio?.skills]
  );

  const projects = useMemo(
    () => parseProjects(portfolio?.projects),
    [portfolio?.projects]
  );

  const requiredSkills = useMemo(
    () => getCareerSkills(career),
    [career]
  );

  const matchedSkills = useMemo(() => {
    const studentSkills = new Set(skills.map(normalize));

    return requiredSkills.filter((skill) =>
      studentSkills.has(normalize(skill))
    );
  }, [skills, requiredSkills]);

  const missingSkills = useMemo(() => {
    const studentSkills = new Set(skills.map(normalize));

    return requiredSkills.filter(
      (skill) => !studentSkills.has(normalize(skill))
    );
  }, [skills, requiredSkills]);

  const totalCompletedLessons = courseProgress.reduce(
    (total, item) =>
      total + Math.max(0, item.completed_lessons || 0),
    0
  );

  const totalCompletedTasks = projectProgress.reduce(
    (total, item) =>
      total + countCompletedTasks(item.completed_tasks),
    0
  );

  const courseCount = courseProgress.length;
  const projectCount = projects.length;

  const portfolioChecks = [
    Boolean(portfolio?.name?.trim()),
    Boolean(portfolio?.education?.trim()),
    Boolean(portfolio?.about?.trim()),
    skills.length > 0,
    projects.length > 0,
    Boolean(careerName),
  ];

  const completedPortfolioSections =
    portfolioChecks.filter(Boolean).length;

  const portfolioScore = Math.round(
    (completedPortfolioSections / portfolioChecks.length) * 100
  );

  const skillMatchPercentage =
    requiredSkills.length > 0
      ? Math.round(
          (matchedSkills.length / requiredSkills.length) * 100
        )
      : 0;

  const recommendations = useMemo(() => {
    const items: string[] = [];

    if (!portfolio?.about?.trim()) {
      items.push(
        "Add an About section explaining your interests and career goals."
      );
    }

    if (!portfolio?.education?.trim()) {
      items.push("Add your education details to your portfolio.");
    }

    if (skills.length === 0) {
      items.push(
        "Add the technical and practical skills you have learned."
      );
    }

    if (projects.length === 0) {
      items.push(
        "Add at least one project with a clear description and technologies used."
      );
    }

    if (missingSkills.length > 0) {
      items.push(
        `Work on these career-related skills: ${missingSkills
          .slice(0, 5)
          .join(", ")}.`
      );
    }

    if (courseCount === 0) {
      items.push("Start a course and track your learning progress.");
    }

    if (projects.length > 0) {
      const projectsWithoutDescription = projects.filter(
        (project) => !project.description?.trim()
      ).length;

      if (projectsWithoutDescription > 0) {
        items.push(
          "Add descriptions to your saved projects so visitors can understand what you built."
        );
      }
    }

    if (items.length === 0) {
      items.push(
        "Keep updating your projects, learning progress, and skills as you gain experience."
      );
    }

    return items;
  }, [
    portfolio,
    skills,
    projects,
    missingSkills,
    courseCount,
  ]);

  // Generate the actual AI portfolio review
  const generateAIReview = async () => {
    setAiLoading(true);
    setAiError("");
    setAiReview("");

    try {
      const response = await fetch("/api/portfolio-analysis", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          portfolio: {
            name: portfolio?.name || "",
            education: portfolio?.education || "",
            career_goal: portfolio?.career_goal || careerName,
            about: portfolio?.about || "",
            skills,
            projects,
          },
          career: career
            ? {
                title: career.title,
                description: career.description,
                required_skills: requiredSkills,
              }
            : {
                title: careerName || "Not selected",
                required_skills: [],
              },
          courses: courseProgress,
          projectProgress: projectProgress.map((item) => ({
            project_key: item.project_key,
            completed_tasks_count: countCompletedTasks(
              item.completed_tasks
            ),
          })),
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.error || "Unable to generate AI portfolio review."
        );
      }

      if (
        typeof result.review !== "string" ||
        !result.review.trim()
      ) {
        throw new Error("The AI returned an empty review.");
      }

      setAiReview(result.review);
    } catch (err) {
      console.error("AI portfolio review error:", err);

      setAiError(
        err instanceof Error
          ? err.message
          : "Something went wrong while generating your AI review."
      );
    } finally {
      setAiLoading(false);
    }
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-slate-950 p-6 text-white">
        <div className="mx-auto max-w-6xl py-24 text-center">
          <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-slate-700 border-t-blue-500" />
          <p className="text-slate-300">
            Loading your portfolio analysis...
          </p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-slate-950 p-6 text-white">
        <div className="mx-auto max-w-3xl rounded-2xl border border-red-500/30 bg-red-500/10 p-6">
          <h1 className="text-xl font-bold">
            Unable to load portfolio analysis
          </h1>

          <p className="mt-3 text-sm text-red-200">
            {error}
          </p>

          <button
            onClick={loadAnalysisData}
            className="mt-5 rounded-xl bg-blue-600 px-5 py-3 font-semibold hover:bg-blue-500"
          >
            Try again
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-white sm:px-6">
      <div className="mx-auto max-w-6xl space-y-8">

        {/* Header */}
        <header className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <Link
              href="/portfolio"
              className="text-sm text-blue-400 hover:text-blue-300"
            >
              ← Back to Portfolio
            </Link>

            <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
              CareerPath Portfolio Review
            </h1>

            <p className="mt-2 text-slate-400">
              Review your saved portfolio, learning progress, and career skills.
            </p>
          </div>

          <button
            onClick={loadAnalysisData}
            className="rounded-xl border border-slate-700 px-5 py-3 text-sm font-semibold hover:bg-slate-800"
          >
            Refresh analysis
          </button>
        </header>

        {/* AI Portfolio Review */}
        <section className="rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-950/60 to-slate-900 p-6">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <div className="flex items-center gap-2">
                <span className="rounded-lg bg-blue-500/20 px-3 py-1 text-xs font-semibold text-blue-300">
                  OLLAMA AI
                </span>
                <span className="text-xs text-slate-400">
                  Powered by your local AI model
                </span>
              </div>

              <h2 className="mt-4 text-2xl font-bold">
                AI-Powered Portfolio Review
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                Generate a personalized review using your saved portfolio,
                career requirements, courses, and project progress.
              </p>
            </div>

            <button
              onClick={generateAIReview}
              disabled={aiLoading}
              className="shrink-0 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {aiLoading
                ? "Generating review..."
                : aiReview
                  ? "Regenerate AI Review"
                  : "Generate AI Review"}
            </button>
          </div>

          {aiLoading && (
            <div className="mt-6 flex items-center gap-3 rounded-xl border border-blue-500/20 bg-slate-950/60 p-4">
              <div className="h-6 w-6 animate-spin rounded-full border-2 border-slate-600 border-t-blue-400" />
              <div>
                <p className="text-sm font-semibold text-blue-300">
                  AI is reviewing your portfolio
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  This may take a little time depending on your computer.
                </p>
              </div>
            </div>
          )}

          {aiError && (
            <div className="mt-6 rounded-xl border border-red-500/30 bg-red-500/10 p-4">
              <p className="font-semibold text-red-300">
                Unable to generate review
              </p>
              <p className="mt-2 text-sm text-red-200">
                {aiError}
              </p>
              <button
                onClick={generateAIReview}
                disabled={aiLoading}
                className="mt-3 text-sm font-semibold text-red-300 underline hover:text-red-200"
              >
                Try again
              </button>
            </div>
          )}

          {aiReview && !aiLoading && (
            <div className="mt-6 rounded-xl border border-slate-700 bg-slate-950 p-5 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-lg font-bold text-blue-300">
                  Your AI Portfolio Feedback
                </h3>

                <button
                  onClick={() => {
                    navigator.clipboard.writeText(aiReview);
                  }}
                  className="rounded-lg border border-slate-700 px-3 py-2 text-xs text-slate-300 hover:bg-slate-800"
                >
                  Copy review
                </button>
              </div>

              <div className="mt-5 whitespace-pre-wrap text-sm leading-7 text-slate-300">
                {aiReview}
              </div>
            </div>
          )}
        </section>

        {/* Career */}
        <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <p className="text-sm text-slate-400">
            Selected career
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            {careerName || "No career selected"}
          </h2>

          {career?.description && (
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {career.description}
            </p>
          )}

          {!careerName && (
            <p className="mt-3 text-sm text-amber-300">
              Select a career in your profile or add a career goal to your portfolio.
            </p>
          )}

          {careerName && !career && (
            <p className="mt-3 text-sm text-amber-300">
              Your career is saved, but no matching career record was found in the careers table.
            </p>
          )}
        </section>

        {/* Overview cards */}
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <p className="text-sm text-slate-400">
              Portfolio completeness
            </p>
            <p className="mt-3 text-3xl font-bold text-blue-400">
              {portfolioScore}%
            </p>
            <p className="mt-2 text-xs text-slate-500">
              {completedPortfolioSections} of 6 sections completed
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <p className="text-sm text-slate-400">
              Career skill match
            </p>
            <p className="mt-3 text-3xl font-bold text-emerald-400">
              {requiredSkills.length > 0
                ? `${skillMatchPercentage}%`
                : "—"}
            </p>
            <p className="mt-2 text-xs text-slate-500">
              {requiredSkills.length > 0
                ? `${matchedSkills.length} of ${requiredSkills.length} skills matched`
                : "Career skill data unavailable"}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <p className="text-sm text-slate-400">
              Completed lessons
            </p>
            <p className="mt-3 text-3xl font-bold text-purple-400">
              {totalCompletedLessons}
            </p>
            <p className="mt-2 text-xs text-slate-500">
              Across {courseCount} course records
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <p className="text-sm text-slate-400">
              Saved projects
            </p>
            <p className="mt-3 text-3xl font-bold text-amber-400">
              {projectCount}
            </p>
            <p className="mt-2 text-xs text-slate-500">
              {totalCompletedTasks} completed project tasks recorded
            </p>
          </div>
        </section>

        {/* Student information */}
        <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-xl font-bold">
            Student overview
          </h2>

          {portfolio ? (
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <div>
                <p className="text-sm text-slate-400">Name</p>
                <p className="mt-1 font-medium">
                  {portfolio.name || "Not provided"}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-400">Email</p>
                <p className="mt-1 font-medium">
                  {portfolio.email || userEmail || "Not provided"}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-400">Education</p>
                <p className="mt-1 font-medium">
                  {portfolio.education || "Not provided"}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-400">Branch</p>
                <p className="mt-1 font-medium">
                  {profile?.branch || "Not provided"}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-400">Study type</p>
                <p className="mt-1 font-medium">
                  {profile?.study_type || "Not provided"}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-400">Last portfolio update</p>
                <p className="mt-1 font-medium">
                  {formatDate(portfolio.updated_at)}
                </p>
              </div>
            </div>
          ) : (
            <p className="mt-4 text-slate-400">
              No saved portfolio found. Add your information in the Portfolio page first.
            </p>
          )}

          <div className="mt-6 border-t border-slate-800 pt-5">
            <p className="text-sm font-semibold text-slate-300">
              About
            </p>
            <p className="mt-2 whitespace-pre-wrap text-sm leading-7 text-slate-400">
              {portfolio?.about || "No About section added yet."}
            </p>
          </div>
        </section>

        {/* Skills */}
        <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-xl font-bold">
            Skills analysis
          </h2>

          <div className="mt-5">
            <h3 className="text-sm font-semibold text-slate-300">
              Your saved skills
            </h3>

            {skills.length > 0 ? (
              <div className="mt-3 flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={`${skill}-${index}`}
                    className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-2 text-sm text-blue-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            ) : (
              <p className="mt-3 text-sm text-slate-400">
                No skills listed in your saved portfolio.
              </p>
            )}
          </div>

          <div className="mt-7 grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold text-emerald-400">
                Matched career skills
              </h3>

              {matchedSkills.length > 0 ? (
                <ul className="mt-3 space-y-2">
                  {matchedSkills.map((skill) => (
                    <li key={skill} className="text-sm text-slate-300">
                      ✓ {skill}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-3 text-sm text-slate-500">
                  No matched skills found yet.
                </p>
              )}
            </div>

            <div>
              <h3 className="text-sm font-semibold text-amber-400">
                Skills to learn
              </h3>

              {missingSkills.length > 0 ? (
                <ul className="mt-3 space-y-2">
                  {missingSkills.map((skill) => (
                    <li key={skill} className="text-sm text-slate-300">
                      + {skill}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-3 text-sm text-slate-500">
                  No missing career skills identified, or career skill data is unavailable.
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Saved projects */}
        <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-xl font-bold">
            Saved projects
          </h2>

          {projects.length > 0 ? (
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {projects.map((project, index) => {
                const technologies = parseList(project.technologies);

                return (
                  <article
                    key={`${project.title || "project"}-${index}`}
                    className="rounded-xl border border-slate-700 bg-slate-950 p-5"
                  >
                    <h3 className="font-semibold">
                      {project.title || `Project ${index + 1}`}
                    </h3>

                    <p className="mt-3 whitespace-pre-wrap text-sm leading-6 text-slate-400">
                      {project.description || "No project description added."}
                    </p>

                    {technologies.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {technologies.map((technology, techIndex) => (
                          <span
                            key={`${technology}-${techIndex}`}
                            className="rounded-lg bg-slate-800 px-2 py-1 text-xs text-slate-300"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    )}

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4 inline-block text-sm text-blue-400 hover:text-blue-300"
                      >
                        View project →
                      </a>
                    )}
                  </article>
                );
              })}
            </div>
          ) : (
            <p className="mt-4 text-sm text-slate-400">
              No saved projects found. Add projects from your Portfolio page.
            </p>
          )}
        </section>

        {/* Course progress */}
        <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-xl font-bold">
            Learning activity
          </h2>

          {courseProgress.length > 0 ? (
            <div className="mt-5 space-y-4">
              {courseProgress.map((item, index) => (
                <div
                  key={`${item.skill}-${index}`}
                  className="rounded-xl border border-slate-700 bg-slate-950 p-4"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-semibold">
                      {item.skill}
                    </h3>

                    <span className="text-xs text-slate-500">
                      Updated: {formatDate(item.updated_at)}
                    </span>
                  </div>

                  <div className="mt-3 grid grid-cols-3 gap-3 text-sm">
                    <div>
                      <p className="text-xs text-slate-500">
                        Completed lessons
                      </p>
                      <p className="mt-1 font-semibold">
                        {item.completed_lessons ?? 0}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-slate-500">
                        Current week
                      </p>
                      <p className="mt-1 font-semibold">
                        {item.current_week ?? 0}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-slate-500">
                        Current lesson
                      </p>
                      <p className="mt-1 font-semibold">
                        {item.current_lesson ?? 0}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="mt-4 text-sm text-slate-400">
              No course progress found yet.
            </p>
          )}
        </section>

        {/* Project task progress */}
        <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-xl font-bold">
            Project task progress
          </h2>

          {projectProgress.length > 0 ? (
            <div className="mt-5 space-y-3">
              {projectProgress.map((item, index) => (
                <div
                  key={`${item.project_key}-${index}`}
                  className="flex items-center justify-between gap-4 rounded-xl border border-slate-700 bg-slate-950 p-4"
                >
                  <div>
                    <p className="font-medium">
                      {item.project_key}
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Completed tasks recorded
                    </p>
                  </div>

                  <span className="rounded-lg bg-emerald-500/10 px-3 py-2 text-sm font-semibold text-emerald-400">
                    {countCompletedTasks(item.completed_tasks)}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="mt-4 text-sm text-slate-400">
              No project task progress found yet.
            </p>
          )}
        </section>

        {/* Recommendations */}
        <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-xl font-bold">
            Recommended next steps
          </h2>

          <p className="mt-2 text-sm text-slate-400">
            These suggestions are based on the information currently saved in your account.
          </p>

          <ul className="mt-5 space-y-3">
            {recommendations.map((recommendation, index) => (
              <li
                key={index}
                className="flex gap-3 rounded-xl border border-slate-700 bg-slate-950 p-4"
              >
                <span className="font-bold text-blue-400">
                  {index + 1}.
                </span>

                <span className="text-sm leading-6 text-slate-300">
                  {recommendation}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Actions */}
        <section className="flex flex-wrap gap-3 border-t border-slate-800 pt-6">
          <Link
            href="/portfolio"
            className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold hover:bg-blue-500"
          >
            Edit portfolio
          </Link>

          <Link
            href="/dashboard"
            className="rounded-xl border border-slate-700 px-5 py-3 text-sm font-semibold hover:bg-slate-800"
          >
            Back to dashboard
          </Link>
        </section>

      </div>
    </main>
  );
}
