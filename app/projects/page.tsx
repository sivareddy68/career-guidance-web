"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Circle,
  ClipboardList,
  Code2,
  Cpu,
  FolderKanban,
  Loader2,
  Search,
  Send,
  Sparkles,
  Target,
  X,
} from "lucide-react";
import { supabase } from "@/lib/supabase";

type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  tasks: string[];
  source: "default" | "career";
};

type CareerRow = {
  title: string;
  project_ideas: string[] | string | null;
};

type ProgressRow = {
  id?: string | number;
  user_id: string;
  project_key: string;
  completed_tasks: unknown;
  updated_at?: string;
};

type StudentProfile = {
  id?: string | number;
  user_id?: string;
  full_name?: string | null;
  name?: string | null;
  selected_career?: string | null;
};

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

const PROJECTS: Project[] = [
  {
    id: "personal-portfolio",
    title: "Personal Portfolio",
    category: "Web Development",
    description:
      "Build a personal website to showcase your skills, projects, education, and achievements.",
    source: "default",
    tasks: [
      "Plan the portfolio sections and layout.",
      "Create the project using HTML and CSS.",
      "Build the home and about sections.",
      "Add skills, education, and project sections.",
      "Make the website responsive.",
      "Add contact information and navigation.",
      "Test the website on different screen sizes.",
      "Publish the portfolio and document the work.",
    ],
  },
  {
    id: "student-management-system",
    title: "Student Management System",
    category: "Software Development",
    description:
      "Create an application to organize student records, attendance, and academic information.",
    source: "default",
    tasks: [
      "Identify the student information to store.",
      "Design the database structure.",
      "Create the application interface.",
      "Implement student record creation.",
      "Add record editing and deletion.",
      "Add search and validation.",
      "Test the application with sample records.",
      "Document the features and setup instructions.",
    ],
  },
  {
    id: "student-performance-analysis",
    title: "Student Performance Analysis",
    category: "Data Analytics",
    description:
      "Analyze student marks and attendance to identify patterns and academic performance.",
    source: "default",
    tasks: [
      "Define the questions to investigate.",
      "Collect or prepare sample student data.",
      "Clean missing and inconsistent data.",
      "Calculate marks, attendance, and averages.",
      "Analyze patterns using Python or SQL.",
      "Create charts and a performance dashboard.",
      "Write insights and recommendations.",
      "Prepare the final report.",
    ],
  },
  {
    id: "smart-irrigation-system",
    title: "Smart Irrigation System",
    category: "Electronics and IoT",
    description:
      "Develop an irrigation prototype that uses soil moisture readings to control watering.",
    source: "default",
    tasks: [
      "Study the irrigation problem and requirements.",
      "Select suitable sensors and components.",
      "Prepare the circuit or simulation.",
      "Read soil moisture sensor values.",
      "Implement the watering control logic.",
      "Test the system with different conditions.",
      "Improve reliability and document results.",
      "Prepare the project report and demonstration.",
    ],
  },
  {
    id: "digital-logic-design",
    title: "Digital Logic Design",
    category: "Electronics",
    description:
      "Design and test a digital logic circuit using Boolean expressions and logic gates.",
    source: "default",
    tasks: [
      "Choose the digital circuit to implement.",
      "Write the truth table.",
      "Simplify the Boolean expressions.",
      "Draw the logic circuit.",
      "Implement the design in a simulator.",
      "Verify the output for all input combinations.",
      "Correct errors and optimize the design.",
      "Prepare the circuit diagram and report.",
    ],
  },
  {
    id: "renewable-energy-monitoring",
    title: "Renewable Energy Monitoring",
    category: "Electrical Engineering",
    description:
      "Monitor sample solar or renewable-energy readings and summarize energy performance.",
    source: "default",
    tasks: [
      "Define the energy measurements to track.",
      "Collect or generate sample readings.",
      "Organize the readings in a dataset.",
      "Calculate energy and performance values.",
      "Create charts to visualize the results.",
      "Identify patterns and unusual readings.",
      "Check the calculations and conclusions.",
      "Prepare the final report.",
    ],
  },
  {
    id: "customer-feedback-analysis",
    title: "Customer Feedback Analysis",
    category: "Business and Management",
    description:
      "Organize customer feedback and identify common complaints, positive themes, and improvements.",
    source: "default",
    tasks: [
      "Define the business questions.",
      "Collect or prepare sample feedback.",
      "Clean and organize the feedback data.",
      "Group feedback into useful categories.",
      "Measure common themes and sentiment.",
      "Visualize the main findings.",
      "Recommend practical improvements.",
      "Prepare a summary report.",
    ],
  },
  {
    id: "research-and-innovation-project",
    title: "Research and Innovation Project",
    category: "Science and Research",
    description:
      "Investigate a problem, review existing solutions, and develop a small research prototype.",
    source: "default",
    tasks: [
      "Choose a clear research problem.",
      "Review existing research and solutions.",
      "Write the research objective.",
      "Plan the method and required resources.",
      "Build a prototype or conduct the analysis.",
      "Record and analyze the results.",
      "Review limitations and possible improvements.",
      "Write the final research report.",
    ],
  },
  {
    id: "product-metrics-dashboard",
    title: "Product Metrics Dashboard",
    category: "Product Analytics",
    description:
      "Build a dashboard to track product usage, engagement, and performance metrics.",
    source: "default",
    tasks: [
      "Define the product metrics to track.",
      "Prepare sample product usage data.",
      "Clean and organize the dataset.",
      "Calculate the selected metrics.",
      "Build charts and dashboard sections.",
      "Check the accuracy of the metrics.",
      "Identify trends and useful insights.",
      "Document the dashboard and findings.",
    ],
  },
  {
    id: "user-feedback-analysis",
    title: "User Feedback Analysis",
    category: "Product Analytics",
    description:
      "Study user feedback to understand user needs and identify product improvements.",
    source: "default",
    tasks: [
      "Define the user feedback questions.",
      "Collect or prepare feedback data.",
      "Clean and categorize the responses.",
      "Identify recurring user problems.",
      "Summarize positive and negative themes.",
      "Prioritize improvement opportunities.",
      "Validate the findings against the data.",
      "Prepare recommendations and a report.",
    ],
  },
  {
    id: "feature-performance-report",
    title: "Feature Performance Report",
    category: "Product Analytics",
    description:
      "Evaluate product feature usage and prepare a report with data-backed recommendations.",
    source: "default",
    tasks: [
      "Choose the feature to evaluate.",
      "Define success metrics.",
      "Prepare sample feature usage data.",
      "Calculate feature adoption and usage.",
      "Compare performance across groups or periods.",
      "Visualize the findings.",
      "Identify opportunities for improvement.",
      "Prepare the performance report.",
    ],
  },
];

function toStringArray(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value
      .map((item) => String(item ?? "").trim())
      .filter(Boolean);
  }

  if (typeof value !== "string" || !value.trim()) {
    return [];
  }

  const trimmed = value.trim();

  try {
    const parsed: unknown = JSON.parse(trimmed);

    if (Array.isArray(parsed)) {
      return parsed
        .map((item) => String(item ?? "").trim())
        .filter(Boolean);
    }
  } catch {
    // The database value may be a comma- or newline-separated string.
  }

  return trimmed
    .split(/\r?\n|;|,(?=(?:[^"]*"[^"]*")*[^"]*$)/)
    .map((item) => item.trim().replace(/^["']|["']$/g, ""))
    .filter(Boolean);
}

function normalizeTitle(title: string): string {
  return title
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function categoryFromCareer(careerTitle: string): string {
  const title = careerTitle.toLowerCase();

  if (/data|analyst|analytics|business intelligence/.test(title)) {
    return "Data Analytics";
  }

  if (/web|frontend|front-end|ui\/ux/.test(title)) {
    return "Web Development";
  }

  if (/software|full stack|full-stack|backend|back-end/.test(title)) {
    return "Software Development";
  }

  if (/iot|embedded|electronics|vlsi|ece|robotics/.test(title)) {
    return "Electronics and IoT";
  }

  if (/electrical|energy|power/.test(title)) {
    return "Electrical Engineering";
  }

  if (/product/.test(title)) {
    return "Product Analytics";
  }

  if (/research|science/.test(title)) {
    return "Science and Research";
  }

  return careerTitle.trim() || "Career Roadmap";
}

function parseCompletedTasks(
  value: unknown,
  taskCount: number
): boolean[] {
  const result: boolean[] = Array.from(
    { length: taskCount },
    () => false
  );

  let parsed: unknown = value;

  if (typeof parsed === "string") {
    const textValue: string = parsed;

    try {
      parsed = JSON.parse(textValue) as unknown;
    } catch {
      parsed = textValue
        .split(",")
        .map((item: string) => item.trim());
    }
  }

  if (Array.isArray(parsed)) {
    if (
      parsed.some(
        (item: unknown) => typeof item === "boolean"
      )
    ) {
      parsed.forEach((item: unknown, index: number) => {
        if (index < taskCount) {
          result[index] =
            item === true ||
            item === 1 ||
            item === "true";
        }
      });

      return result;
    }

    parsed.forEach((item: unknown) => {
      if (
        typeof item === "number" &&
        Number.isInteger(item) &&
        item >= 0 &&
        item < taskCount
      ) {
        result[item] = true;
      } else if (
        typeof item === "string" &&
        /^\d+$/.test(item)
      ) {
        const index = Number(item);

        if (index >= 0 && index < taskCount) {
          result[index] = true;
        }
      }
    });

    return result;
  }

  if (
    typeof parsed === "number" &&
    Number.isFinite(parsed)
  ) {
    for (
      let index = 0;
      index < Math.min(parsed, taskCount);
      index++
    ) {
      result[index] = true;
    }
  }

  return result;
}

function getProgressKeyCandidates(
  project: Project
): string[] {
  const candidates = [
    project.id,
    normalizeTitle(project.title),
  ];

  return [
    ...new Set(
      candidates.filter(Boolean)
    ),
  ];
}

function getSavedProgress(
  rows: ProgressRow[],
  project: Project
): boolean[] {
  const candidates =
    getProgressKeyCandidates(project);

  const matchingRows = rows.filter((row) =>
    candidates.includes(
      normalizeTitle(row.project_key)
    ) ||
    candidates.includes(row.project_key)
  );

  const result = Array.from(
    { length: project.tasks.length },
    () => false
  );

  matchingRows.forEach((row) => {
    const saved = parseCompletedTasks(
      row.completed_tasks,
      project.tasks.length
    );

    saved.forEach((completed, index) => {
      if (completed) {
        result[index] = true;
      }
    });
  });

  return result;
}

export default function ProjectsPage() {
  const router = useRouter();

  const [projects, setProjects] =
    useState<Project[]>(PROJECTS);

  const [progress, setProgress] =
    useState<Record<string, boolean[]>>({});

  const [userId, setUserId] =
    useState<string | null>(null);

  const [profile, setProfile] =
    useState<StudentProfile | null>(null);

  const [search, setSearch] =
    useState("");

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const [activeProject, setActiveProject] =
    useState<Project | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [savingTask, setSavingTask] =
    useState<string | null>(null);

  const [error, setError] =
    useState("");

  const loadProjectsAndProgress =
    useCallback(async () => {
      setLoading(true);
      setError("");

      try {
        const {
          data: { user },
          error: authError,
        } = await supabase.auth.getUser();

        if (authError) {
          throw authError;
        }

        if (!user) {
          setProjects(PROJECTS);
          setProgress({});
          setUserId(null);
          setLoading(false);
          return;
        }

        setUserId(user.id);

        const [
          { data: careerRows, error: careersError },
          { data: progressRows, error: progressError },
          { data: profileRows, error: profileError },
        ] = await Promise.all([
          supabase
            .from("careers")
            .select(
              "title, project_ideas"
            ),

          supabase
            .from("project_progress")
            .select("*")
            .eq("user_id", user.id),

          supabase
            .from("student_profiles")
            .select("*")
            .eq("user_id", user.id)
            .limit(1),
        ]);

        if (careersError) {
          throw careersError;
        }

        if (progressError) {
          throw progressError;
        }

        if (profileError) {
          console.warn(
            "Could not load student profile:",
            profileError.message
          );
        }

        const profileData =
          (profileRows?.[0] as
            | StudentProfile
            | undefined) ??
          null;

        setProfile(profileData);

        const allProjects: Project[] = [
          ...PROJECTS,
        ];

        const existingTitles =
          new Set(
            allProjects.map((project) =>
              normalizeTitle(project.title)
            )
          );

        (
          careerRows as CareerRow[] | null
        )?.forEach((career) => {
          const careerTitle =
            career.title?.trim();

          if (!careerTitle) {
            return;
          }

          const ideas = toStringArray(
            career.project_ideas
          );

          ideas.forEach((idea) => {
            const title = idea.trim();
            const normalized =
              normalizeTitle(title);

            if (
              !title ||
              !normalized ||
              existingTitles.has(normalized)
            ) {
              return;
            }

            existingTitles.add(normalized);

            allProjects.push({
              id: normalized,
              title,
              category:
                categoryFromCareer(
                  careerTitle
                ),
              description: `A project idea from the ${careerTitle} career roadmap.`,
              tasks: [...GENERIC_TASKS],
              source: "career",
            });
          });
        });

        const savedRows =
          (progressRows ?? []) as ProgressRow[];

        const restored:
          Record<string, boolean[]> = {};

        allProjects.forEach((project) => {
          restored[project.id] =
            getSavedProgress(
              savedRows,
              project
            );
        });

        setProjects(allProjects);
        setProgress(restored);
      } catch (err) {
        console.error(
          "Error loading projects:",
          err
        );

        setError(
          err instanceof Error
            ? err.message
            : "Unable to load projects. Please try again."
        );

        setProjects(PROJECTS);
      } finally {
        setLoading(false);
      }
    }, []);

  useEffect(() => {
    void loadProjectsAndProgress();
  }, [loadProjectsAndProgress]);

  const categories = useMemo(
    () => [
      "All",
      ...Array.from(
        new Set(
          projects.map(
            (project) => project.category
          )
        )
      ).sort((a, b) =>
        a.localeCompare(b)
      ),
    ],
    [projects]
  );

  const filteredProjects =
    useMemo(() => {
      const query =
        search.trim().toLowerCase();

      return projects.filter((project) => {
        const matchesSearch =
          !query ||
          project.title
            .toLowerCase()
            .includes(query) ||
          project.category
            .toLowerCase()
            .includes(query) ||
          project.description
            .toLowerCase()
            .includes(query);

        const matchesCategory =
          selectedCategory === "All" ||
          project.category ===
            selectedCategory;

        return (
          matchesSearch &&
          matchesCategory
        );
      });
    }, [
      projects,
      search,
      selectedCategory,
    ]);

  const getCompletedCount =
    useCallback(
      (project: Project) =>
        (
          progress[project.id] ?? []
        ).filter(Boolean).length,
      [progress]
    );

  const getPercent = useCallback(
    (project: Project) => {
      if (!project.tasks.length) {
        return 0;
      }

      return Math.round(
        (getCompletedCount(project) /
          project.tasks.length) *
          100
      );
    },
    [getCompletedCount]
  );

  const totalTasks =
    projects.reduce(
      (total, project) =>
        total + project.tasks.length,
      0
    );

  const completedTasks =
    projects.reduce(
      (total, project) =>
        total +
        getCompletedCount(project),
      0
    );

  const completedProjects =
    projects.filter(
      (project) =>
        getPercent(project) === 100
    ).length;

  const activeProjects =
    projects.filter((project) => {
      const completed =
        getCompletedCount(project);

      return (
        completed > 0 &&
        completed < project.tasks.length
      );
    }).length;

  const toggleTask = async (
    project: Project,
    taskIndex: number
  ) => {
    if (!userId) {
      setError(
        "Please sign in to save your project progress."
      );

      return;
    }

    const current =
      progress[project.id] ??
      Array.from(
        {
          length: project.tasks.length,
        },
        () => false
      );

    const updated = [...current];

    updated[taskIndex] =
      !updated[taskIndex];

    const previousProgress =
      progress;

    const nextProgress = {
      ...progress,
      [project.id]: updated,
    };

    setProgress(nextProgress);

    setSavingTask(
      `${project.id}-${taskIndex}`
    );

    setError("");

    try {
      const keys =
        getProgressKeyCandidates(
          project
        );

      const existing =
        await supabase
          .from("project_progress")
          .select("project_key")
          .eq("user_id", userId)
          .in("project_key", keys)
          .limit(1);

      if (existing.error) {
        throw existing.error;
      }

      const projectKey =
        existing.data?.[0]
          ?.project_key ??
        project.id;

      const {
        error: saveError,
      } = await supabase
        .from("project_progress")
        .upsert(
          {
            user_id: userId,
            project_key:
              projectKey,
            completed_tasks:
              updated,
            updated_at:
              new Date().toISOString(),
          },
          {
            onConflict:
              "user_id,project_key",
          }
        );

      if (saveError) {
        throw saveError;
      }
    } catch (err) {
      console.error(
        "Error saving project progress:",
        err
      );

      setProgress(
        previousProgress
      );

      setError(
        err instanceof Error
          ? `Progress could not be saved: ${err.message}`
          : "Progress could not be saved. Please try again."
      );
    } finally {
      setSavingTask(null);
    }
  };

  const openProject = (
    project: Project
  ) => {
    setActiveProject(project);
  };

  const closeProject = () => {
    setActiveProject(null);
  };

  const openSubmission = (
    project: Project
  ) => {
    router.push(
      `/project-submission?project=${encodeURIComponent(
        project.title
      )}`
    );
  };

  return (
    <main className="min-h-screen bg-[#090817] text-white">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">

        <Link
          href="/dashboard"
          className="mb-6 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300 transition hover:bg-white/[0.08] hover:text-white"
        >
          <ArrowLeft size={16} />
          Back to Dashboard
        </Link>

        <section className="relative overflow-hidden rounded-3xl border border-violet-400/20 bg-gradient-to-br from-[#211443] via-[#17102e] to-[#0d1024] p-6 sm:p-9">
          <div className="pointer-events-none absolute -right-12 -top-16 h-64 w-64 rounded-full bg-violet-500/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 left-1/3 h-52 w-52 rounded-full bg-fuchsia-500/10 blur-3xl" />

          <div className="relative">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-violet-300/10 px-3 py-1.5 text-xs font-medium text-violet-200">
              <Sparkles size={14} />
              Your project workspace
            </div>

            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Projects
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
              Explore project ideas from all
              your career roadmaps, complete
              tasks, and track your learning
              progress in one place.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-3 lg:grid-cols-4">
              <StatCard
                icon={
                  <FolderKanban size={19} />
                }
                label="Total Projects"
                value={projects.length}
              />

              <StatCard
                icon={
                  <CheckCircle2 size={19} />
                }
                label="Completed"
                value={completedProjects}
              />

              <StatCard
                icon={
                  <Target size={19} />
                }
                label="In Progress"
                value={activeProjects}
              />

              <StatCard
                icon={
                  <ClipboardList size={19} />
                }
                label="Tasks Completed"
                value={`${completedTasks}/${totalTasks}`}
              />
            </div>
          </div>
        </section>

        {error && (
          <div className="mt-5 flex items-start gap-3 rounded-2xl border border-rose-400/20 bg-rose-500/10 p-4 text-sm text-rose-200">
            <span className="flex-1">
              {error}
            </span>

            <button
              onClick={() =>
                setError("")
              }
              className="rounded-lg p-1 hover:bg-white/10"
              aria-label="Dismiss error"
            >
              <X size={16} />
            </button>
          </div>
        )}

        {!userId && !loading && (
          <div className="mt-5 rounded-2xl border border-amber-300/20 bg-amber-300/10 p-4 text-sm text-amber-100">
            Sign in to save your task
            progress. You can still browse
            the available projects.
          </div>
        )}

        <section className="mt-8">
          <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-xl font-semibold sm:text-2xl">
                Explore projects
              </h2>

              <p className="mt-1 text-sm text-slate-400">
                {filteredProjects.length}{" "}
                project
                {filteredProjects.length ===
                1
                  ? ""
                  : "s"}{" "}
                found
                {profile?.selected_career
                  ? ` · Selected career: ${profile.selected_career}`
                  : ""}
              </p>
            </div>

            <div className="relative w-full md:max-w-sm">
              <Search
                size={18}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500"
              />

              <input
                value={search}
                onChange={(event) =>
                  setSearch(
                    event.target.value
                  )
                }
                placeholder="Search projects or categories..."
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-3 pl-10 pr-4 text-sm outline-none transition placeholder:text-slate-500 focus:border-violet-400/60 focus:ring-2 focus:ring-violet-500/10"
              />
            </div>
          </div>

          <div className="mb-6 flex gap-2 overflow-x-auto pb-2">
            {categories.map(
              (category) => (
                <button
                  key={category}
                  onClick={() =>
                    setSelectedCategory(
                      category
                    )
                  }
                  className={`shrink-0 rounded-full border px-4 py-2 text-sm transition ${
                    selectedCategory ===
                    category
                      ? "border-violet-400/40 bg-violet-500/20 text-violet-100"
                      : "border-white/10 bg-white/[0.03] text-slate-400 hover:bg-white/[0.07] hover:text-white"
                  }`}
                >
                  {category}
                </button>
              )
            )}
          </div>

          {loading ? (
            <div className="flex min-h-56 flex-col items-center justify-center gap-3 text-slate-400">
              <Loader2
                size={30}
                className="animate-spin text-violet-400"
              />
              <p className="text-sm">
                Loading projects and
                progress...
              </p>
            </div>
          ) : filteredProjects.length ===
            0 ? (
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] px-5 py-16 text-center">
              <Search
                size={32}
                className="mx-auto text-slate-500"
              />

              <h3 className="mt-4 text-lg font-semibold">
                No projects found
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                Try a different search or
                select another category.
              </p>

              <button
                onClick={() => {
                  setSearch("");
                  setSelectedCategory(
                    "All"
                  );
                }}
                className="mt-5 rounded-xl bg-violet-600 px-4 py-2 text-sm font-medium transition hover:bg-violet-500"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProjects.map(
                (project) => {
                  const completed =
                    getCompletedCount(
                      project
                    );

                  const percent =
                    getPercent(project);

                  const isComplete =
                    percent === 100;

                  return (
                    <article
                      key={project.id}
                      className="group flex flex-col rounded-2xl border border-white/[0.09] bg-gradient-to-b from-[#17142b] to-[#100f20] p-5 transition duration-200 hover:-translate-y-1 hover:border-violet-400/30 hover:shadow-xl hover:shadow-violet-950/20"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-violet-300/15 bg-violet-500/10 text-violet-300">
                          {getProjectIcon(
                            project.category
                          )}
                        </div>

                        {isComplete ? (
                          <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-xs text-emerald-300">
                            <CheckCircle2
                              size={13}
                            />
                            Completed
                          </span>
                        ) : percent > 0 ? (
                          <span className="rounded-full border border-violet-300/20 bg-violet-300/10 px-2.5 py-1 text-xs text-violet-200">
                            In progress
                          </span>
                        ) : (
                          <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-slate-400">
                            Not started
                          </span>
                        )}
                      </div>

                      <p className="mt-5 text-xs font-medium uppercase tracking-wider text-violet-300">
                        {project.category}
                      </p>

                      <h3 className="mt-2 text-lg font-semibold leading-snug text-white">
                        {project.title}
                      </h3>

                      <p className="mt-2 min-h-[4.5rem] text-sm leading-6 text-slate-400">
                        {project.description}
                      </p>

                      {project.source ===
                        "career" && (
                        <div className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-lg border border-sky-300/15 bg-sky-300/[0.07] px-2.5 py-1.5 text-xs text-sky-200">
                          <BookOpen
                            size={13}
                          />
                          From career
                          roadmap
                        </div>
                      )}

                      <div className="mt-5">
                        <div className="mb-2 flex items-center justify-between text-xs">
                          <span className="text-slate-400">
                            Task progress
                          </span>

                          <span className="font-medium text-slate-200">
                            {completed}/
                            {
                              project
                                .tasks
                                .length
                            }{" "}
                            tasks
                          </span>
                        </div>

                        <div className="h-2 overflow-hidden rounded-full bg-white/[0.07]">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-400 transition-all duration-300"
                            style={{
                              width: `${percent}%`,
                            }}
                          />
                        </div>

                        <p className="mt-2 text-right text-xs text-slate-500">
                          {percent}% complete
                        </p>
                      </div>

                      {/* VIEW TASKS */}
                      <button
                        onClick={() =>
                          openProject(
                            project
                          )
                        }
                        className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-violet-400/20 bg-violet-500/10 px-4 py-3 text-sm font-medium text-violet-100 transition hover:border-violet-400/40 hover:bg-violet-500/20"
                      >
                        {isComplete
                          ? "Review Tasks"
                          : "View Project Tasks"}

                        <ArrowRight
                          size={16}
                        />
                      </button>

                      {/* SUBMIT PROJECT */}
                      <button
                        type="button"
                        onClick={() =>
                          openSubmission(
                            project
                          )
                        }
                        className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
                      >
                        <Send
                          size={16}
                        />
                        Submit Project
                      </button>

                      {project.source ===
                        "career" && (
                        <button
                          onClick={() =>
                            router.push(
                              `/project-progress?project=${encodeURIComponent(
                                project.title
                              )}&career=${encodeURIComponent(
                                profile?.selected_career ??
                                  project.category
                              )}`
                            )
                          }
                          className="mt-2 w-full rounded-xl px-3 py-2 text-xs text-slate-400 transition hover:bg-white/[0.04] hover:text-white"
                        >
                          Open project
                          progress page
                        </button>
                      )}
                    </article>
                  );
                }
              )}
            </div>
          )}
        </section>

        <section className="mt-8 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 sm:p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-fuchsia-500/10 text-fuchsia-300">
              <Sparkles
                size={21}
              />
            </div>

            <div>
              <h3 className="font-semibold text-white">
                Projects from your career
                roadmaps
              </h3>

              <p className="mt-1 text-sm leading-6 text-slate-400">
                Project ideas saved in the
                Supabase careers table are
                added automatically. When
                you add a new career or
                project idea, refresh this
                page to load it. Duplicate
                project titles are shown only
                once.
              </p>
            </div>
          </div>
        </section>
      </div>

      {activeProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-3 backdrop-blur-sm sm:p-6"
          onMouseDown={(event) => {
            if (
              event.target ===
              event.currentTarget
            ) {
              closeProject();
            }
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            className="flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#121025] shadow-2xl shadow-black/40"
          >
            <div className="flex items-start justify-between gap-4 border-b border-white/[0.08] p-5 sm:p-6">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-violet-300">
                  {
                    activeProject.category
                  }
                </p>

                <h2
                  id="project-modal-title"
                  className="mt-2 text-xl font-bold sm:text-2xl"
                >
                  {
                    activeProject.title
                  }
                </h2>

                <p className="mt-2 text-sm text-slate-400">
                  Complete each task and
                  your progress will be
                  saved.
                </p>
              </div>

              <button
                onClick={closeProject}
                className="rounded-xl border border-white/10 p-2 text-slate-400 transition hover:bg-white/[0.06] hover:text-white"
                aria-label="Close project tasks"
              >
                <X size={19} />
              </button>
            </div>

            <div className="overflow-y-auto p-5 sm:p-6">
              <div className="mb-5 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4">
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="text-slate-300">
                    Overall progress
                  </span>

                  <span className="font-semibold text-violet-200">
                    {getPercent(
                      activeProject
                    )}
                    %
                  </span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-400 transition-all"
                    style={{
                      width: `${getPercent(
                        activeProject
                      )}%`,
                    }}
                  />
                </div>

                <p className="mt-2 text-xs text-slate-500">
                  {
                    getCompletedCount(
                      activeProject
                    )
                  }{" "}
                  of{" "}
                  {
                    activeProject
                      .tasks
                      .length
                  }{" "}
                  tasks completed
                </p>
              </div>

              <div className="space-y-3">
                {activeProject.tasks.map(
                  (task, index) => {
                    const isCompleted =
                      progress[
                        activeProject
                          .id
                      ]?.[index] ??
                      false;

                    const isSaving =
                      savingTask ===
                      `${activeProject.id}-${index}`;

                    return (
                      <button
                        key={`${activeProject.id}-${index}`}
                        onClick={() =>
                          void toggleTask(
                            activeProject,
                            index
                          )
                        }
                        disabled={
                          isSaving ||
                          !userId
                        }
                        className={`flex w-full items-start gap-3 rounded-2xl border p-4 text-left transition disabled:cursor-not-allowed disabled:opacity-70 ${
                          isCompleted
                            ? "border-emerald-400/20 bg-emerald-400/[0.06]"
                            : "border-white/[0.08] bg-white/[0.025] hover:border-violet-400/30 hover:bg-white/[0.045]"
                        }`}
                      >
                        <span className="mt-0.5 shrink-0">
                          {isSaving ? (
                            <Loader2
                              size={21}
                              className="animate-spin text-violet-300"
                            />
                          ) : isCompleted ? (
                            <CheckCircle2
                              size={21}
                              className="text-emerald-300"
                            />
                          ) : (
                            <Circle
                              size={21}
                              className="text-slate-500"
                            />
                          )}
                        </span>

                        <span className="min-w-0 flex-1">
                          <span className="block text-xs font-medium text-slate-500">
                            TASK{" "}
                            {String(
                              index + 1
                            ).padStart(
                              2,
                              "0"
                            )}
                          </span>

                          <span
                            className={`mt-1 block text-sm leading-6 ${
                              isCompleted
                                ? "text-slate-400 line-through"
                                : "text-slate-200"
                            }`}
                          >
                            {task}
                          </span>
                        </span>
                      </button>
                    );
                  }
                )}
              </div>

              {!userId && (
                <p className="mt-4 text-sm text-amber-200">
                  Sign in to mark tasks
                  complete and save your
                  progress.
                </p>
              )}
            </div>

            <div className="flex flex-col gap-3 border-t border-white/[0.08] p-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <span className="text-xs text-slate-500">
                {getPercent(
                  activeProject
                ) === 100
                  ? "All tasks completed!"
                  : "Keep going, one task at a time."}
              </span>

              <div className="flex gap-2">
                <button
                  onClick={() =>
                    openSubmission(
                      activeProject
                    )
                  }
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold transition hover:bg-blue-500"
                >
                  <Send size={15} />
                  Submit Project
                </button>

                <button
                  onClick={closeProject}
                  className="rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-semibold transition hover:bg-violet-500"
                >
                  Done
                </button>
              </div>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}

function StatCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string | number;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
      <div className="flex items-center gap-2 text-violet-200">
        {icon}
        <span className="text-xs text-slate-300 sm:text-sm">
          {label}
        </span>
      </div>

      <p className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
        {value}
      </p>
    </div>
  );
}

function getProjectIcon(
  category: string
) {
  const value =
    category.toLowerCase();

  if (
    /electronics|electrical|iot|science|research/.test(
      value
    )
  ) {
    return <Cpu size={22} />;
  }

  if (
    /software|web development|programming/.test(
      value
    )
  ) {
    return <Code2 size={22} />;
  }

  if (
    /data|analytics|business|product/.test(
      value
    )
  ) {
    return <Target size={22} />;
  }

  return <FolderKanban size={22} />;
}