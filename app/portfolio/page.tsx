"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { supabase } from "@/lib/supabase";

type PortfolioProject = {
  title: string;
  description: string;
  technologies: string;
  link: string;
};

type CourseProgress = {
  skill: string;
  completed_lessons: number;
  current_week: number;
  current_lesson: number;
  updated_at?: string;
};

type ProjectProgress = {
  id: number | string;
  user_id: string;
  project_key: string;
  completed_tasks: unknown;
  updated_at?: string;
};

type PortfolioAnalysis = {
  score: number;
  strengths: string[];
  suggestions: string[];
};

const EMPTY_PROJECT: PortfolioProject = {
  title: "",
  description: "",
  technologies: "",
  link: "",
};

const CAREER_SKILLS: Record<string, string[]> = {
  "cloud engineer": ["Linux", "Networking", "Cloud", "Python", "SQL", "Git", "Security"],
  "software developer": ["Programming", "Python", "Java", "SQL", "Git", "Problem Solving"],
  "web developer": ["HTML", "CSS", "JavaScript", "React", "SQL", "Git"],
  "data analyst": ["SQL", "Python", "Excel", "Statistics", "Data Analysis"],
  "data scientist": ["Python", "SQL", "Statistics", "Machine Learning", "Data Analysis"],
  "cybersecurity analyst": ["Networking", "Linux", "Security", "Python", "SQL"],
  "network engineer": ["Networking", "Linux", "IP Addressing", "Subnetting", "Security"],
  "frontend developer": ["HTML", "CSS", "JavaScript", "React", "Git"],
  "backend developer": ["Python", "Java", "SQL", "Networking", "Git"],
  "embedded systems engineer": ["C", "Microcontrollers", "Digital Electronics", "Verilog", "Communication"],
};

function splitItems(value: string): string[] {
  return value.split(/[,;\n]+/).map((item) => item.trim()).filter(Boolean);
}

function normalize(value: string): string {
  return value.trim().toLowerCase().replace(/\s+/g, " ");
}

function unique(values: string[]): string[] {
  return Array.from(new Set(values.map((value) => value.trim()).filter(Boolean)));
}

function parseCompletedTasks(value: unknown): number[] {
  let parsed = value;

  if (typeof parsed === "string") {
    try {
      parsed = JSON.parse(parsed);
    } catch {
      return [];
    }
  }

  if (!Array.isArray(parsed)) return [];

  return Array.from(
    new Set(
      parsed
        .filter(
          (item): item is number | string =>
            typeof item === "number" ||
            (typeof item === "string" && item.trim() !== "")
        )
        .map(Number)
        .filter((item) => Number.isInteger(item) && item >= 0)
    )
  );
}

function getRequiredSkills(careerGoal: string): string[] {
  const goal = normalize(careerGoal);
  if (!goal) return [];

  const exactMatch = CAREER_SKILLS[goal];
  if (exactMatch) return exactMatch;

  const matchedEntry = Object.entries(CAREER_SKILLS).find(
    ([career]) => goal.includes(career) || career.includes(goal)
  );

  if (matchedEntry) return matchedEntry[1];

  if (goal.includes("cloud")) return CAREER_SKILLS["cloud engineer"];
  if (goal.includes("web")) return CAREER_SKILLS["web developer"];
  if (goal.includes("data")) return CAREER_SKILLS["data analyst"];
  if (goal.includes("network")) return CAREER_SKILLS["network engineer"];
  if (goal.includes("security")) return CAREER_SKILLS["cybersecurity analyst"];
  if (goal.includes("software")) return CAREER_SKILLS["software developer"];
  if (goal.includes("embedded")) return CAREER_SKILLS["embedded systems engineer"];

  return [];
}

function skillMatches(skill: string, candidate: string): boolean {
  const a = normalize(skill);
  const b = normalize(candidate);

  if (!a || !b) return false;
  if (a === b) return true;

  const aliases: Record<string, string[]> = {
    programming: ["programming fundamentals", "programming basics"],
    cloud: ["cloud computing", "cloud engineer"],
    networking: ["networking fundamentals", "networking basics"],
    security: ["security fundamentals", "cybersecurity"],
    statistics: ["basic statistics"],
    "ip addressing": ["ipaddressing"],
    "digital electronics": ["digital electronics"],
    "data analysis": ["data analytics"],
    javascript: ["js"],
  };

  return (
    (aliases[a] ?? []).some((alias) => b === alias) ||
    (aliases[b] ?? []).some((alias) => a === alias)
  );
}

function getProjectScore(project: PortfolioProject) {
  let score = 0;
  const suggestions: string[] = [];

  if (project.title.trim()) score += 20;
  else suggestions.push("Add a clear project title.");

  if (project.description.trim().length >= 100) {
    score += 40;
  } else if (project.description.trim().length >= 40) {
    score += 25;
    suggestions.push(
      "Expand the description to explain the problem, your solution, and your contribution."
    );
  } else if (project.description.trim()) {
    score += 10;
    suggestions.push("Write a more detailed description of what the project does.");
  } else {
    suggestions.push("Describe the project's purpose and how it works.");
  }

  if (project.technologies.trim()) score += 25;
  else suggestions.push("List the technologies and tools you actually used.");

  if (project.link.trim()) score += 15;
  else suggestions.push("Add a working demonstration or source-code link if available.");

  return { score, suggestions };
}

function getCareerRelevance(
  project: PortfolioProject,
  careerGoal: string,
  requiredSkills: string[]
) {
  const projectText = normalize(
    `${project.title} ${project.description} ${project.technologies}`
  );

  if (!careerGoal.trim() || !projectText.trim()) {
    return { label: "Not enough information", matched: [] as string[] };
  }

  const matched = requiredSkills.filter((skill) =>
    projectText.includes(normalize(skill))
  );

  if (requiredSkills.length === 0) {
    return { label: "Needs manual review", matched };
  }

  const ratio = matched.length / requiredSkills.length;

  return {
    label:
      ratio >= 0.4
        ? "Strong keyword match"
        : ratio >= 0.2
          ? "Some keyword match"
          : "Limited keyword match",
    matched,
  };
}

export default function PortfolioPage() {
  const [name, setName] = useState("");
  const [education, setEducation] = useState("");
  const [careerGoal, setCareerGoal] = useState("");
  const [about, setAbout] = useState("");
  const [skills, setSkills] = useState("");
  const [email, setEmail] = useState("");

  const [projects, setProjects] = useState<PortfolioProject[]>([
    { ...EMPTY_PROJECT },
  ]);

  const [message, setMessage] = useState("");
  const [showPreview, setShowPreview] = useState(false);
  const [courseProgress, setCourseProgress] = useState<CourseProgress[]>([]);
  const [projectProgress, setProjectProgress] =
    useState<ProjectProgress | null>(null);
  const [loadingAnalysisData, setLoadingAnalysisData] = useState(false);
  const [analysis, setAnalysis] = useState<PortfolioAnalysis | null>(null);

  const completedTaskIds = useMemo(
    () => parseCompletedTasks(projectProgress?.completed_tasks),
    [projectProgress]
  );

  const skillList = useMemo(() => splitItems(skills), [skills]);

  const requiredSkills = useMemo(
    () => getRequiredSkills(careerGoal),
    [careerGoal]
  );

  const learnedSkills = useMemo(
    () =>
      unique([
        ...skillList,
        ...courseProgress.map((course) => course.skill),
      ]),
    [skillList, courseProgress]
  );

  const matchedSkills = useMemo(
    () =>
      requiredSkills.filter((required) =>
        learnedSkills.some((learned) => skillMatches(required, learned))
      ),
    [requiredSkills, learnedSkills]
  );

  const missingSkills = useMemo(
    () =>
      requiredSkills.filter(
        (required) =>
          !learnedSkills.some((learned) => skillMatches(required, learned))
      ),
    [requiredSkills, learnedSkills]
  );

  const completedFields = [
    name.trim(),
    education.trim(),
    careerGoal.trim(),
    about.trim(),
    skills.trim(),
    projects.some((project) => project.title.trim()),
  ].filter(Boolean).length;

  const completion = Math.round((completedFields / 6) * 100);

  const completedLessons = courseProgress.reduce(
    (total, course) =>
      total + Math.max(0, Number(course.completed_lessons) || 0),
    0
  );

  const totalProjects = projects.filter((project) =>
    project.title.trim()
  ).length;

  const projectTaskCount = completedTaskIds.length;

  const careerReadinessScore = useMemo(() => {
    const skillScore =
      requiredSkills.length > 0
        ? Math.round((matchedSkills.length / requiredSkills.length) * 40)
        : Math.min(40, skillList.length * 8);

    const courseScore = Math.min(25, completedLessons * 2);

    const projectScore =
      totalProjects > 0
        ? Math.min(
            25,
            Math.round(
              (projects
                .filter((project) => project.title.trim())
                .reduce(
                  (total, project) => total + getProjectScore(project).score,
                  0
                ) /
                totalProjects) *
                0.25
            )
          )
        : 0;

    const profileScore =
      (name.trim() ? 2.5 : 0) +
      (education.trim() ? 2.5 : 0) +
      (careerGoal.trim() ? 2.5 : 0) +
      (about.trim() ? 2.5 : 0);

    return Math.min(
      100,
      Math.round(skillScore + courseScore + projectScore + profileScore)
    );
  }, [
    requiredSkills,
    matchedSkills,
    skillList,
    completedLessons,
    totalProjects,
    projects,
    name,
    education,
    careerGoal,
    about,
  ]);

  const refreshAnalysisData = useCallback(async () => {
    setLoadingAnalysisData(true);

    try {
      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError) throw authError;

      if (!user) {
        setCourseProgress([]);
        setProjectProgress(null);
        setMessage("Please sign in to load your learning and project progress.");
        return;
      }

      const [courseResult, projectResult] = await Promise.all([
        supabase
          .from("course_progress")
          .select(
            "skill, completed_lessons, current_week, current_lesson, updated_at"
          )
          .eq("user_id", user.id)
          .order("updated_at", { ascending: false }),

        supabase
          .from("project_progress")
          .select("id, user_id, project_key, completed_tasks, updated_at")
          .eq("user_id", user.id)
          .eq("project_key", "portfolio")
          .order("updated_at", { ascending: false })
          .limit(1),
      ]);

      if (courseResult.error) {
        console.error("Course progress database error:", courseResult.error);
        setCourseProgress([]);
      } else {
        setCourseProgress((courseResult.data ?? []) as CourseProgress[]);
      }

      if (projectResult.error) {
        console.error("Project progress database error:", projectResult.error);
        setProjectProgress(null);
      } else {
        setProjectProgress(
          (projectResult.data?.[0] as ProjectProgress | undefined) ?? null
        );
      }
    } catch (error) {
      console.error("Analysis data load error:", error);
      setMessage("Could not refresh all analysis data. Check the console.");
    } finally {
      setLoadingAnalysisData(false);
    }
  }, []);

  useEffect(() => {
    void refreshAnalysisData();
  }, [refreshAnalysisData]);

  function updateProject(
    index: number,
    field: keyof PortfolioProject,
    value: string
  ) {
    setProjects((previous) =>
      previous.map((project, i) =>
        i === index ? { ...project, [field]: value } : project
      )
    );
    setAnalysis(null);
  }

  function addProject() {
    setProjects((previous) => [...previous, { ...EMPTY_PROJECT }]);
    setAnalysis(null);
  }

  async function savePortfolio() {
    try {
      setMessage("");

      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError) throw authError;

      if (!user) {
        setMessage("Please sign in before saving your portfolio.");
        return;
      }

      const { error } = await supabase.from("student_portfolios").upsert(
        {
          user_id: user.id,
          name,
          education,
          career_goal: careerGoal,
          about,
          skills,
          email,
          projects: projects.filter((project) => project.title.trim()),
          updated_at: new Date().toISOString(),
        },
        { onConflict: "user_id" }
      );

      if (error) throw error;

      setMessage("Portfolio saved to your account successfully.");
    } catch (error) {
      console.error("Portfolio save error:", error);
      setMessage("Could not save your portfolio. Check the console for details.");
    }
  }

  async function sharePortfolio() {
    try {
      setMessage("");

      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError) throw authError;

      if (!user) {
        setMessage("Please sign in to share your portfolio.");
        return;
      }

      const { data, error } = await supabase
        .from("student_portfolios")
        .select("user_id, is_public")
        .eq("user_id", user.id)
        .maybeSingle();

      if (error) throw error;

      if (!data) {
        setMessage("Please save your portfolio before sharing it.");
        return;
      }

      if (data.is_public !== true) {
        setMessage(
          "Your portfolio is saved but not public yet. Enable public visibility in Supabase before sharing."
        );
        return;
      }

      const publicUrl = `${window.location.origin}/public-portfolio/${user.id}`;

      await navigator.clipboard.writeText(publicUrl);

      setMessage("Public portfolio link copied successfully!");
    } catch (error) {
      console.error("Portfolio sharing error:", error);
      setMessage("Could not copy the public link. Please try again.");
    }
  }

  async function loadPortfolio() {
    try {
      setMessage("");

      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError) throw authError;

      if (!user) {
        setMessage("Please sign in to load your saved portfolio.");
        return;
      }

      const { data, error } = await supabase
        .from("student_portfolios")
        .select("*")
        .eq("user_id", user.id)
        .maybeSingle();

      if (error) throw error;

      if (!data) {
        setMessage("No saved portfolio found for your account yet.");
        return;
      }

      setName(data.name ?? "");
      setEducation(data.education ?? "");
      setCareerGoal(data.career_goal ?? "");
      setAbout(data.about ?? "");
      setSkills(data.skills ?? "");
      setEmail(data.email ?? "");

      setProjects(
        Array.isArray(data.projects) && data.projects.length > 0
          ? data.projects.map((project: Partial<PortfolioProject>) => ({
              title: project.title ?? "",
              description: project.description ?? "",
              technologies: project.technologies ?? "",
              link: project.link ?? "",
            }))
          : [{ ...EMPTY_PROJECT }]
      );

      setAnalysis(null);
      setMessage("Your portfolio was loaded successfully.");
      await refreshAnalysisData();
    } catch (error) {
      console.error("Portfolio load error:", error);
      setMessage("Could not load your portfolio. Check the console for details.");
    }
  }

  function downloadPortfolio() {
    const savedProjects = projects.filter((project) => project.title.trim());

    const content = [
      `# ${name || "My Career Portfolio"}`,
      "",
      `**Education:** ${education}`,
      `**Career goal:** ${careerGoal}`,
      email ? `**Contact:** ${email}` : "",
      "",
      "## About Me",
      about,
      "",
      "## Skills",
      skillList.join(", "),
      "",
      "## Career Skill Match",
      `Matched skills: ${matchedSkills.join(", ") || "None identified"}`,
      `Skills to develop: ${missingSkills.join(", ") || "None identified"}`,
      "",
      "## Course Progress",
      ...courseProgress.flatMap((course) => [
        `### ${course.skill}`,
        `Completed lessons: ${course.completed_lessons}`,
        `Current week: ${course.current_week}`,
        `Current lesson: ${course.current_lesson}`,
        "",
      ]),
      "## Project Progress",
      `Project key: ${projectProgress?.project_key ?? "No record found"}`,
      `Completed task IDs recorded: ${completedTaskIds.join(", ") || "None"}`,
      "",
      "## Projects",
      ...savedProjects.flatMap((project) => [
        `### ${project.title}`,
        project.description,
        `Technologies: ${project.technologies}`,
        project.link ? `Project link: ${project.link}` : "",
        "",
      ]),
    ].join("\n");

    const blob = new Blob([content], {
      type: "text/markdown;charset=utf-8",
    });

    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "careerpath-portfolio.md";
    anchor.click();
    URL.revokeObjectURL(url);
  }

  function analyzePortfolio() {
    let score = 0;
    const strengths: string[] = [];
    const suggestions: string[] = [];

    if (name.trim()) {
      score += 8;
      strengths.push("Your profile name is provided.");
    } else {
      suggestions.push("Add your name to your portfolio.");
    }

    if (education.trim()) {
      score += 7;
      strengths.push("Your education details are included.");
    } else {
      suggestions.push("Add your current education or qualification.");
    }

    if (careerGoal.trim()) {
      score += 15;
      strengths.push(`Your career goal is defined as ${careerGoal.trim()}.`);
    } else {
      suggestions.push("Define the career or role you want to pursue.");
    }

    if (about.trim().length >= 80) {
      score += 15;
      strengths.push("Your About section provides useful detail.");
    } else {
      suggestions.push(
        "Expand your About section with interests, learning goals, and relevant experience."
      );
    }

    if (skillList.length >= 3) {
      score += 15;
      strengths.push("You have listed at least three skills.");
    } else {
      suggestions.push("List more relevant skills you have actually learned.");
    }

    const savedProjects = projects.filter((project) => project.title.trim());
    const detailedProject = savedProjects.some(
      (project) => project.description.trim().length >= 40
    );
    const hasTechnologies = savedProjects.some(
      (project) => project.technologies.trim()
    );
    const hasLink = savedProjects.some((project) => project.link.trim());

    if (savedProjects.length > 0) {
      score += 8;
      strengths.push(`You have listed ${savedProjects.length} project(s).`);
    } else {
      suggestions.push("Add at least one project with a clear title.");
    }

    if (detailedProject) {
      score += 12;
      strengths.push("At least one project has a detailed description.");
    } else {
      suggestions.push("Explain your project's purpose and how it works.");
    }

    if (hasTechnologies) {
      score += 12;
      strengths.push("Project technologies are listed.");
    } else {
      suggestions.push("List the technologies actually used in your projects.");
    }

    if (hasLink) {
      score += 8;
      strengths.push("You have provided a project link.");
    } else {
      suggestions.push("Add a working demo or source-code link if available.");
    }

    setAnalysis({
      score: Math.min(100, score),
      strengths,
      suggestions,
    });
  }

  const inputClass =
    "mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-purple-500";

  const labelClass = "block text-sm font-medium text-slate-200";

  const quickActionClass =
    "flex min-h-[48px] items-center justify-center rounded-xl px-3 py-3 text-center text-sm font-semibold transition sm:px-5";

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 pb-12 text-white sm:px-8">
      <div className="mx-auto max-w-5xl">
        <header className="mb-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-purple-300">
            CareerPath
          </p>

          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
            Portfolio & Project Analysis
          </h1>

          <p className="mt-3 text-slate-300">
            Build your portfolio, review your learning progress, and identify
            improvements related to your chosen career.
          </p>

          <div className="mt-5 rounded-2xl border border-purple-500/40 bg-purple-500/10 p-5">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h2 className="text-lg font-semibold">
                  Detailed Portfolio Review
                </h2>
                <p className="mt-1 text-sm text-slate-300">
                  Open your existing portfolio review page for its additional
                  review features.
                </p>
              </div>

              <a
                href="/portfolio-review"
                className="inline-flex shrink-0 items-center justify-center rounded-xl bg-purple-600 px-5 py-3 text-center font-semibold hover:bg-purple-500"
              >
                Review My Portfolio →
              </a>
            </div>
          </div>
        </header>

        {/* STICKY PORTFOLIO ACTIONS */}
        <section className="sticky top-2 z-30 mb-6 rounded-2xl border border-slate-700 bg-slate-900/95 p-3 shadow-xl backdrop-blur-md sm:p-4">
          <div className="mb-3 flex items-center justify-between gap-2">
            <div>
              <h2 className="text-sm font-bold sm:text-base">
                Portfolio Actions
              </h2>
              <p className="text-xs text-slate-400">
                Quick access — no need to scroll down
              </p>
            </div>
            <span className="rounded-full bg-purple-500/15 px-3 py-1 text-xs font-semibold text-purple-200">
              Quick menu
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            <button
              type="button"
              onClick={() => void savePortfolio()}
              className={`${quickActionClass} bg-purple-600 hover:bg-purple-500`}
            >
              <span className="mr-2">💾</span>
              Save Portfolio
            </button>

            <button
              type="button"
              onClick={() => setShowPreview((previous) => !previous)}
              className={`${quickActionClass} bg-blue-600 hover:bg-blue-500`}
            >
              <span className="mr-2">👁</span>
              {showPreview ? "Hide Preview" : "Preview Portfolio"}
            </button>

            <button
              type="button"
              onClick={() => window.open("/portfolio-preview", "_blank")}
              className={`${quickActionClass} border border-blue-500 text-blue-300 hover:bg-blue-500/10`}
            >
              <span className="mr-2">↗</span>
              Open Preview
            </button>

            <button
              type="button"
              onClick={() => void sharePortfolio()}
              className={`${quickActionClass} bg-green-600 hover:bg-green-500`}
            >
              <span className="mr-2">🔗</span>
              Copy Public Link
            </button>
          </div>

          {message && (
            <p
              role="status"
              className="mt-3 rounded-lg bg-slate-800 px-3 py-2 text-xs text-purple-200 sm:text-sm"
            >
              {message}
            </p>
          )}
        </section>

        <section className="mb-6 rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-7">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold">Portfolio completion</h2>
              <p className="mt-1 text-sm text-slate-400">
                This measures how many of the six main sections are filled in.
              </p>
            </div>
            <span className="text-2xl font-bold text-purple-300">
              {completion}%
            </span>
          </div>

          <div
            className="mt-4 h-3 overflow-hidden rounded-full bg-slate-800"
            role="progressbar"
            aria-valuenow={completion}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="h-full rounded-full bg-purple-500 transition-all"
              style={{ width: `${completion}%` }}
            />
          </div>
        </section>

        <section className="mb-6 rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-7">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-xl font-semibold">
                Career Readiness Analysis
              </h2>
              <p className="mt-2 text-sm text-slate-400">
                An estimate based on your listed skills, course records, profile,
                and project details.
              </p>
            </div>

            <button
              type="button"
              onClick={() => void refreshAnalysisData()}
              disabled={loadingAnalysisData}
              className="rounded-xl border border-slate-700 px-4 py-2 text-sm font-semibold hover:bg-slate-800 disabled:opacity-50"
            >
              {loadingAnalysisData ? "Refreshing..." : "Refresh data"}
            </button>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
            <div className="rounded-xl bg-slate-950 p-4">
              <p className="text-xs text-slate-400 sm:text-sm">
                Career readiness estimate
              </p>
              <p className="mt-2 text-2xl font-bold text-purple-300 sm:text-3xl">
                {careerReadinessScore}/100
              </p>
            </div>

            <div className="rounded-xl bg-slate-950 p-4">
              <p className="text-xs text-slate-400 sm:text-sm">Skills matched</p>
              <p className="mt-2 text-2xl font-bold sm:text-3xl">
                {matchedSkills.length}/{requiredSkills.length || "—"}
              </p>
            </div>

            <div className="rounded-xl bg-slate-950 p-4">
              <p className="text-xs text-slate-400 sm:text-sm">
                Completed lessons
              </p>
              <p className="mt-2 text-2xl font-bold sm:text-3xl">
                {completedLessons}
              </p>
            </div>

            <div className="rounded-xl bg-slate-950 p-4">
              <p className="text-xs text-slate-400 sm:text-sm">
                Projects listed
              </p>
              <p className="mt-2 text-2xl font-bold sm:text-3xl">
                {totalProjects}
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-xl border border-slate-800 p-4">
            <h3 className="font-semibold text-green-300">
              Skills matched to your career
            </h3>

            {matchedSkills.length > 0 ? (
              <div className="mt-3 flex flex-wrap gap-2">
                {matchedSkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-green-500/10 px-3 py-1 text-sm text-green-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            ) : (
              <p className="mt-2 text-sm text-slate-400">
                {careerGoal.trim()
                  ? "No matches found yet. Add your learned skills and course progress."
                  : "Enter a career goal to compare your skills with relevant skills."}
              </p>
            )}
          </div>

          <div className="mt-4 rounded-xl border border-slate-800 p-4">
            <h3 className="font-semibold text-amber-300">
              Skills to develop
            </h3>

            {requiredSkills.length > 0 ? (
              missingSkills.length > 0 ? (
                <ul className="mt-3 space-y-2 text-sm text-slate-300">
                  {missingSkills.map((skill) => (
                    <li key={skill}>○ {skill}</li>
                  ))}
                </ul>
              ) : (
                <p className="mt-2 text-sm text-slate-300">
                  All skills in this basic comparison are represented in your
                  listed skills or course progress. This does not prove mastery.
                </p>
              )
            ) : (
              <p className="mt-2 text-sm text-slate-400">
                We do not have a predefined skill list for this career yet. You
                can still review your course and project progress below.
              </p>
            )}
          </div>

          <div className="mt-4 rounded-xl border border-slate-800 p-4">
            <h3 className="font-semibold">Recommended next actions</h3>

            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {!careerGoal.trim() && <li>1. Enter your career goal.</li>}

              {missingSkills.length > 0 && (
                <li>
                  {careerGoal.trim() ? "1." : "2."} Focus on learning{" "}
                  {missingSkills.slice(0, 3).join(", ")}.
                </li>
              )}

              {completedLessons === 0 && (
                <li>Complete your first course lesson and pass its quiz.</li>
              )}

              {totalProjects === 0 && (
                <li>Add a project that demonstrates your practical skills.</li>
              )}

              {projects.some(
                (project) =>
                  project.title.trim() &&
                  (!project.description.trim() ||
                    !project.technologies.trim() ||
                    !project.link.trim())
              ) && (
                <li>
                  Improve your project descriptions, technologies, and
                  source-code links where available.
                </li>
              )}

              {careerGoal.trim() &&
                missingSkills.length === 0 &&
                completedLessons > 0 &&
                totalProjects > 0 && (
                  <li>
                    Continue practising and add evidence of what you built and
                    learned to your portfolio.
                  </li>
                )}
            </ul>
          </div>

          <p className="mt-4 text-xs text-slate-500">
            Scores are heuristic estimates based on available records. Skill
            matches use names and keywords; they do not verify skill proficiency,
            project functionality, or employment eligibility.
          </p>
        </section>

        <div className="space-y-6">
          <section className="rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-7">
            <h2 className="text-xl font-semibold">Student profile</h2>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <label className={labelClass}>
                Full name
                <input
                  className={inputClass}
                  value={name}
                  onChange={(event) => {
                    setName(event.target.value);
                    setAnalysis(null);
                  }}
                  placeholder="Enter your name"
                />
              </label>

              <label className={labelClass}>
                Education
                <input
                  className={inputClass}
                  value={education}
                  onChange={(event) => {
                    setEducation(event.target.value);
                    setAnalysis(null);
                  }}
                  placeholder="e.g. B.Tech ECE"
                />
              </label>

              <label className={labelClass}>
                Career goal
                <input
                  className={inputClass}
                  value={careerGoal}
                  onChange={(event) => {
                    setCareerGoal(event.target.value);
                    setAnalysis(null);
                  }}
                  placeholder="e.g. Cloud Engineer"
                />
              </label>

              <label className={labelClass}>
                Contact email (optional)
                <input
                  type="email"
                  className={inputClass}
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@example.com"
                />
              </label>
            </div>

            <label className={`${labelClass} mt-5`}>
              About me
              <textarea
                className={inputClass}
                value={about}
                onChange={(event) => {
                  setAbout(event.target.value);
                  setAnalysis(null);
                }}
                placeholder="Write about your interests, learning goals, and experience..."
                rows={4}
              />
            </label>
          </section>

          <section className="rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-7">
            <h2 className="text-xl font-semibold">Skills</h2>
            <p className="mt-2 text-sm text-slate-400">
              Enter skills separated by commas. Include only skills you have
              actually learned or practised.
            </p>

            <label className={`${labelClass} mt-4`}>
              My skills
              <textarea
                className={inputClass}
                value={skills}
                onChange={(event) => {
                  setSkills(event.target.value);
                  setAnalysis(null);
                }}
                placeholder="Python, HTML, CSS, SQL"
                rows={3}
              />
            </label>
          </section>

          <section className="rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-7">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="text-xl font-semibold">Course Progress</h2>
                <p className="mt-2 text-sm text-slate-400">
                  Learning records saved in your account.
                </p>
              </div>

              <button
                type="button"
                onClick={() => void refreshAnalysisData()}
                disabled={loadingAnalysisData}
                className="rounded-xl border border-slate-700 px-4 py-2 text-sm font-semibold hover:bg-slate-800 disabled:opacity-50"
              >
                Refresh
              </button>
            </div>

            {courseProgress.length > 0 ? (
              <div className="mt-5 overflow-x-auto">
                <table className="w-full min-w-[600px] border-collapse">
                  <thead>
                    <tr className="border-b border-slate-700 text-left text-sm text-slate-400">
                      <th className="px-4 py-3">Skill</th>
                      <th className="px-4 py-3">Completed Lessons</th>
                      <th className="px-4 py-3">Current Week</th>
                      <th className="px-4 py-3">Current Lesson</th>
                    </tr>
                  </thead>

                  <tbody>
                    {courseProgress.map((course, index) => (
                      <tr
                        key={`${course.skill}-${index}`}
                        className="border-b border-slate-800"
                      >
                        <td className="px-4 py-4 font-semibold text-purple-200">
                          {course.skill}
                        </td>
                        <td className="px-4 py-4 text-slate-300">
                          {course.completed_lessons}
                        </td>
                        <td className="px-4 py-4 text-slate-300">
                          Week {course.current_week}
                        </td>
                        <td className="px-4 py-4 text-slate-300">
                          Lesson {course.current_lesson}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="mt-5 rounded-xl border border-dashed border-slate-700 p-6 text-center">
                <p className="font-semibold text-slate-200">
                  No course progress found yet
                </p>
                <p className="mt-2 text-sm text-slate-400">
                  Complete a lesson and save its progress to display it here.
                </p>
              </div>
            )}
          </section>

          <section className="rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-7">
            <div>
              <h2 className="text-xl font-semibold">Project Task Progress</h2>
              <p className="mt-2 text-sm text-slate-400">
                Progress loaded from your existing project_progress record for
                the project key{" "}
                <span className="font-semibold text-purple-200">portfolio</span>.
              </p>
            </div>

            {projectProgress ? (
              <div className="mt-5 rounded-xl border border-slate-800 bg-slate-950 p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-sm text-slate-400">Project key</p>
                    <p className="mt-1 font-semibold">
                      {projectProgress.project_key}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-slate-400">
                      Unique task IDs recorded
                    </p>
                    <p className="mt-1 text-2xl font-bold text-purple-300">
                      {projectTaskCount}
                    </p>
                  </div>
                </div>

                {projectTaskCount > 0 ? (
                  <>
                    <p className="mt-4 text-sm text-slate-300">
                      Recorded task IDs: {completedTaskIds.join(", ")}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {completedTaskIds.map((taskId) => (
                        <span
                          key={taskId}
                          className="rounded-full bg-green-500/10 px-3 py-1 text-sm text-green-200"
                        >
                          Task {taskId} recorded
                        </span>
                      ))}
                    </div>
                  </>
                ) : (
                  <p className="mt-4 text-sm text-slate-400">
                    No task IDs are recorded in the saved array yet.
                  </p>
                )}

                <p className="mt-4 text-xs text-slate-500">
                  The array records task IDs, not the total possible tasks. This
                  page does not assume a maximum task count or treat ID 0 as
                  unfinished.
                </p>
              </div>
            ) : (
              <div className="mt-5 rounded-xl border border-dashed border-slate-700 p-6">
                <p className="font-semibold text-slate-200">
                  No portfolio project-progress record found
                </p>
                <p className="mt-2 text-sm text-slate-400">
                  Check that a record exists for the signed-in user with
                  project_key set to portfolio.
                </p>
              </div>
            )}
          </section>

          <section className="rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-7">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-xl font-semibold">My projects</h2>

              <button
                type="button"
                onClick={addProject}
                className="rounded-xl border border-purple-500 px-4 py-2 text-sm font-semibold text-purple-200 hover:bg-purple-500/10"
              >
                + Add project
              </button>
            </div>

            <div className="mt-5 space-y-5">
              {projects.map((project, index) => {
                const result = getProjectScore(project);
                const relevance = getCareerRelevance(
                  project,
                  careerGoal,
                  requiredSkills
                );

                return (
                  <div
                    key={index}
                    className="rounded-xl border border-slate-800 bg-slate-950 p-4 sm:p-5"
                  >
                    <h3 className="font-medium text-purple-200">
                      Project {index + 1}
                    </h3>

                    <div className="mt-4 space-y-4">
                      <label className={labelClass}>
                        Project title
                        <input
                          className={inputClass}
                          value={project.title}
                          onChange={(event) =>
                            updateProject(index, "title", event.target.value)
                          }
                          placeholder="Enter project name"
                        />
                      </label>

                      <label className={labelClass}>
                        Description
                        <textarea
                          className={inputClass}
                          value={project.description}
                          onChange={(event) =>
                            updateProject(
                              index,
                              "description",
                              event.target.value
                            )
                          }
                          placeholder="What problem does your project solve, and how does it work?"
                          rows={4}
                        />
                      </label>

                      <label className={labelClass}>
                        Technologies used
                        <input
                          className={inputClass}
                          value={project.technologies}
                          onChange={(event) =>
                            updateProject(
                              index,
                              "technologies",
                              event.target.value
                            )
                          }
                          placeholder="e.g. Python, SQL, HTML, CSS"
                        />
                      </label>

                      <label className={labelClass}>
                        Project link (optional)
                        <input
                          type="url"
                          className={inputClass}
                          value={project.link}
                          onChange={(event) =>
                            updateProject(index, "link", event.target.value)
                          }
                          placeholder="https://github.com/..."
                        />
                      </label>

                      <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                        <h4 className="font-semibold text-purple-200">
                          Project Completeness Score
                        </h4>

                        <p className="mt-2 text-2xl font-bold">
                          {result.score}/100
                        </p>

                        <div
                          className="mt-3 h-2 overflow-hidden rounded-full bg-slate-700"
                          role="progressbar"
                          aria-valuenow={result.score}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          <div
                            className="h-full rounded-full bg-purple-500"
                            style={{ width: `${result.score}%` }}
                          />
                        </div>

                        <p className="mt-3 text-xs text-slate-400">
                          This score measures the completeness of the project
                          information, not the quality of its code.
                        </p>

                        <div className="mt-4 border-t border-slate-700 pt-4">
                          <h5 className="font-medium">Project checklist</h5>

                          <ul className="mt-3 space-y-2 text-sm text-slate-300">
                            <li>
                              {project.title.trim() ? "✓" : "○"} Clear project
                              title
                            </li>
                            <li>
                              {project.description.trim().length >= 40
                                ? "✓"
                                : "○"}{" "}
                              Explain the purpose and functionality
                            </li>
                            <li>
                              {project.technologies.trim() ? "✓" : "○"}{" "}
                              Technologies listed
                            </li>
                            <li>
                              {project.link.trim() ? "✓" : "○"} Demo or
                              source-code link
                            </li>
                          </ul>
                        </div>

                        <div className="mt-4 border-t border-slate-700 pt-4">
                          <h5 className="font-medium">Career relevance</h5>

                          <p className="mt-2 text-sm text-purple-200">
                            {relevance.label}
                          </p>

                          {relevance.matched.length > 0 && (
                            <p className="mt-2 text-sm text-slate-300">
                              Matching keywords:{" "}
                              {relevance.matched.join(", ")}
                            </p>
                          )}

                          <p className="mt-2 text-xs text-slate-500">
                            This is a keyword-based comparison. It does not
                            verify the project's actual implementation.
                          </p>
                        </div>

                        {result.suggestions.length > 0 ? (
                          <div className="mt-4">
                            <h5 className="font-medium text-amber-300">
                              Suggested improvements
                            </h5>

                            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-300">
                              {result.suggestions.map((suggestion) => (
                                <li key={suggestion}>{suggestion}</li>
                              ))}
                            </ul>
                          </div>
                        ) : (
                          <p className="mt-4 text-sm text-green-300">
                            All project information checks passed.
                          </p>
                        )}
                      </div>

                      {projects.length > 1 && (
                        <button
                          type="button"
                          onClick={() => {
                            setProjects((previous) =>
                              previous.filter((_, i) => i !== index)
                            );
                            setAnalysis(null);
                          }}
                          className="text-sm text-red-300 hover:text-red-200"
                        >
                          Remove project
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-7">
            <h2 className="text-xl font-semibold">Save and export</h2>

            <p className="mt-2 text-sm text-slate-400">
              Save your portfolio to Supabase, load saved details, export a
              Markdown file, preview your portfolio, or share its public link.
            </p>

            <div className="mt-5 grid grid-cols-1 gap-3 sm:flex sm:flex-wrap">
              <button
                type="button"
                onClick={() => void savePortfolio()}
                className="rounded-xl bg-purple-600 px-5 py-3 font-semibold hover:bg-purple-500"
              >
                Save portfolio
              </button>

              <button
                type="button"
                onClick={() => void loadPortfolio()}
                className="rounded-xl border border-slate-700 px-5 py-3 font-semibold hover:bg-slate-800"
              >
                Load saved portfolio
              </button>

              <button
                type="button"
                onClick={downloadPortfolio}
                className="rounded-xl border border-slate-700 px-5 py-3 font-semibold hover:bg-slate-800"
              >
                Export portfolio
              </button>

              <button
                type="button"
                onClick={() => setShowPreview((previous) => !previous)}
                className="rounded-xl bg-blue-600 px-5 py-3 font-semibold hover:bg-blue-500"
              >
                Preview portfolio
              </button>

              <button
                type="button"
                onClick={() => window.open("/portfolio-preview", "_blank")}
                className="rounded-xl border border-blue-500 px-5 py-3 font-semibold text-blue-300 hover:bg-blue-500/10"
              >
                Open Portfolio Preview
              </button>

              <button
                type="button"
                onClick={() => void sharePortfolio()}
                className="rounded-xl bg-green-600 px-5 py-3 font-semibold hover:bg-green-500"
              >
                Copy Public Portfolio Link
              </button>
            </div>

            {message && (
              <p role="status" className="mt-4 text-sm text-purple-200">
                {message}
              </p>
            )}
          </section>
        </div>

        <section className="mt-10 rounded-2xl border border-slate-700 bg-slate-900 p-6">
          <h2 className="text-2xl font-bold">
            Portfolio Completeness Analyzer
          </h2>

          <p className="mt-2 text-slate-400">
            Review the information in your portfolio and receive practical
            suggestions to improve its presentation.
          </p>

          <button
            type="button"
            onClick={analyzePortfolio}
            className="mt-5 rounded-lg bg-blue-600 px-5 py-3 font-semibold transition hover:bg-blue-500"
          >
            Analyse My Portfolio
          </button>

          {analysis && (
            <div className="mt-6 space-y-6">
              <div className="rounded-xl border border-slate-700 p-5">
                <p className="text-sm text-slate-400">
                  Portfolio completeness score
                </p>

                <p className="mt-2 text-4xl font-bold">
                  {analysis.score}/100
                </p>

                <div
                  className="mt-4 h-3 overflow-hidden rounded-full bg-slate-700"
                  role="progressbar"
                  aria-valuenow={analysis.score}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="h-full rounded-full bg-blue-500 transition-all"
                    style={{ width: `${analysis.score}%` }}
                  />
                </div>

                <p className="mt-3 text-sm text-slate-400">
                  This score measures portfolio completeness, not actual skill
                  proficiency or job readiness.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-green-400">
                  What you have done well
                </h3>

                {analysis.strengths.length > 0 ? (
                  <ul className="mt-3 space-y-2">
                    {analysis.strengths.map((item) => (
                      <li key={item} className="text-slate-300">
                        ✓ {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-2 text-slate-400">
                    Complete some profile fields to see your strengths.
                  </p>
                )}
              </div>

              <div>
                <h3 className="text-lg font-semibold text-amber-400">
                  Suggestions for improvement
                </h3>

                {analysis.suggestions.length > 0 ? (
                  <ul className="mt-3 space-y-3">
                    {analysis.suggestions.map((item, index) => (
                      <li
                        key={item}
                        className="rounded-lg bg-slate-800 p-3 text-slate-300"
                      >
                        {index + 1}. {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-2 text-slate-300">
                    All current portfolio completeness checks passed.
                  </p>
                )}
              </div>
            </div>
          )}
        </section>

        {showPreview && (
          <section className="mt-8 rounded-2xl border border-slate-700 bg-white p-6 text-slate-900 sm:p-10">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h2 className="text-3xl font-bold">
                  {name.trim() || "Your Name"}
                </h2>
                <p className="mt-2 text-lg text-slate-600">
                  {careerGoal.trim() || "Your Career Goal"}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowPreview(false)}
                className="rounded-lg border border-slate-300 px-3 py-2 text-sm hover:bg-slate-100"
              >
                Close preview
              </button>
            </div>

            <hr className="my-6 border-slate-200" />

            <h3 className="text-xl font-semibold">About</h3>
            <p className="mt-2 whitespace-pre-wrap text-slate-700">
              {about.trim() || "Add your introduction in the portfolio form."}
            </p>

            <h3 className="mt-6 text-xl font-semibold">Education</h3>
            <p className="mt-2 whitespace-pre-wrap text-slate-700">
              {education.trim() || "Add your education details."}
            </p>

            <h3 className="mt-6 text-xl font-semibold">Skills</h3>
            <p className="mt-2 whitespace-pre-wrap text-slate-700">
              {skills.trim() || "Add your skills."}
            </p>

            <h3 className="mt-6 text-xl font-semibold">Career Skill Match</h3>
            <p className="mt-2 text-slate-700">
              Matched skills: {matchedSkills.join(", ") || "Not identified"}
            </p>
            <p className="mt-2 text-slate-700">
              Skills to develop: {missingSkills.join(", ") || "Not identified"}
            </p>

            <h3 className="mt-6 text-xl font-semibold">Learning Progress</h3>

            {courseProgress.length > 0 ? (
              <div className="mt-3 space-y-3">
                {courseProgress.map((course, index) => (
                  <div
                    key={`${course.skill}-${index}`}
                    className="rounded-xl border border-slate-200 p-4"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h4 className="font-semibold">{course.skill}</h4>
                      <span className="text-sm text-slate-600">
                        Week {course.current_week}
                      </span>
                    </div>

                    <p className="mt-2 text-sm text-slate-600">
                      Completed lessons: {course.completed_lessons}
                    </p>
                    <p className="mt-1 text-sm text-slate-600">
                      Current lesson: {course.current_lesson}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="mt-2 text-slate-600">
                No course progress available yet.
              </p>
            )}

            <h3 className="mt-6 text-xl font-semibold">Projects</h3>

            {projects.filter((project) => project.title.trim()).length > 0 ? (
              <div className="mt-3 space-y-4">
                {projects
                  .filter((project) => project.title.trim())
                  .map((project, index) => (
                    <article
                      key={`${project.title}-${index}`}
                      className="rounded-xl border border-slate-200 p-4"
                    >
                      <h4 className="text-lg font-semibold">
                        {project.title}
                      </h4>

                      <p className="mt-2 whitespace-pre-wrap text-slate-700">
                        {project.description}
                      </p>

                      <p className="mt-3 text-sm text-slate-600">
                        Technologies: {project.technologies || "Not specified"}
                      </p>

                      {project.link.trim() && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 inline-block text-blue-700 underline"
                        >
                          View project
                        </a>
                      )}
                    </article>
                  ))}
              </div>
            ) : (
              <p className="mt-2 text-slate-600">
                Add a project to display it here.
              </p>
            )}

            {email.trim() && (
              <>
                <h3 className="mt-6 text-xl font-semibold">Contact</h3>
                <p className="mt-2 text-slate-700">{email}</p>
              </>
            )}
          </section>
        )}
      </div>
    </main>
  );
}