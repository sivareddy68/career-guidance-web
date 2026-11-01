"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

type Career = {
  id?: string | number;
  title: string;
  category?: string;
  description?: string;
  daily_work?: string;
  beginner_skills?: string[];
  advanced_skills?: string[];
  learning_paths?: string[];
  learning_path?: string | string[];
  project_ideas?: string[];
  certification_guidance?: string;
  internship_guidance?: string;
  interview_topics?: string[];
};

type GeneratedTask = {
  week: number;
  title: string;
  description: string;
  course: string;
};

type ExistingTask = {
  id: string | number;
  title: string;
  description: string | null;
  due_date: string | null;
  course: string | null;
  completed: boolean;
  career: string | null;
};

const DATA_ANALYST_BEGINNER = [
  "Excel and spreadsheet fundamentals",
  "Data cleaning and validation",
  "SQL fundamentals",
];

const DATA_ANALYST_ADVANCED = [
  "Statistics and exploratory data analysis",
  "Python with pandas and NumPy",
  "Power BI or Tableau dashboards",
];

const CURRICULA: Record<string, string[]> = {
  "data analyst": [
    ...DATA_ANALYST_BEGINNER,
    ...DATA_ANALYST_ADVANCED,
  ],
  "data scientist": [
    "Python for data analysis",
    "Statistics and probability",
    "Pandas and NumPy",
    "Data cleaning and exploratory analysis",
    "Machine learning fundamentals",
    "Predictive analytics project",
  ],
  "electronics engineer": [
    "Circuit analysis",
    "Analog electronics",
    "Digital electronics",
    "Electronic measurements and testing",
    "Microprocessors and microcontrollers",
    "Electronics circuit design project",
  ],
  "embedded system engineer": [
    "C programming for embedded systems",
    "Digital electronics",
    "Microcontrollers",
    "GPIO timers and interrupts",
    "UART SPI and I2C communication",
    "Microcontroller-based project",
  ],
  "iot engineer": [
    "IoT architecture and fundamentals",
    "Sensors and actuators",
    "Microcontrollers and embedded programming",
    "MQTT and device communication",
    "IoT networking and cloud integration",
    "End-to-end IoT project",
  ],
  "networking engineer": [
    "Computer networking fundamentals",
    "OSI and TCP/IP models",
    "IP addressing and subnetting",
    "Routing and switching",
    "DNS DHCP and network services",
    "Network troubleshooting lab",
  ],
  "product analyst": [
    "SQL for product data",
    "Product metrics and KPIs",
    "Funnel and conversion analysis",
    "Retention and cohort analysis",
    "A/B testing fundamentals",
    "Product analytics case study",
  ],
  "ui ux designer": [
    "User research and interviews",
    "Personas and user journeys",
    "Information architecture and user flows",
    "Wireframing in Figma",
    "Prototyping and usability testing",
    "UX case study",
  ],
  "vlsi engineer": [
    "Digital logic design",
    "Verilog or SystemVerilog",
    "Combinational and sequential circuits",
    "CMOS fundamentals",
    "RTL simulation and verification",
    "Digital circuit design project",
  ],
  "software developer": [
    "Programming fundamentals",
    "Data structures and algorithms",
    "Object-oriented programming",
    "Git and version control",
    "Debugging and software testing",
    "Software project",
  ],
  "web developer": [
    "HTML and semantic markup",
    "CSS and responsive design",
    "JavaScript fundamentals",
    "React fundamentals",
    "APIs and data fetching",
    "Web application project",
  ],
  "ai ml engineer": [
    "Python programming",
    "Linear algebra and probability",
    "NumPy and Pandas",
    "Machine learning fundamentals",
    "Model evaluation",
    "Machine learning project",
  ],
  "cloud engineer": [
    "Linux fundamentals",
    "Networking fundamentals",
    "Cloud computing concepts",
    "Compute storage and identity services",
    "Deployment and monitoring",
    "Cloud deployment project",
  ],
  "cyber security analyst": [
    "Networking and TCP/IP fundamentals",
    "Linux command line",
    "Security fundamentals",
    "Log analysis and monitoring",
    "Incident response fundamentals",
    "Legal cybersecurity lab",
  ],
};

function normalize(value: string): string {
  return value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9+#]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

function normalizeTaskTitle(title: string): string {
  return normalize(title.replace(/^week\s+\d+\s*:\s*/i, ""));
}

function resolveCareerKey(title: string): string {
  const key = normalize(title);

  if (key.includes("data analyst")) return "data analyst";
  if (key.includes("data scientist")) return "data scientist";
  if (key.includes("product analyst")) return "product analyst";
  if (key.includes("embedded")) return "embedded system engineer";
  if (key.includes("iot")) return "iot engineer";
  if (key.includes("network")) return "networking engineer";
  if (key.includes("vlsi")) return "vlsi engineer";
  if (key.includes("electronics")) return "electronics engineer";

  if (
    key.includes("ui ux") ||
    key.includes("ux ui") ||
    key.includes("user experience designer")
  ) {
    return "ui ux designer";
  }

  if (key.includes("cyber") || key.includes("security analyst")) {
    return "cyber security analyst";
  }

  if (key.includes("cloud")) return "cloud engineer";

  if (key.includes("machine learning") || key.includes("ai ml")) {
    return "ai ml engineer";
  }

  if (key.includes("artificial intelligence")) {
    return "ai ml engineer";
  }

  if (key.includes("web developer") || key.includes("web development")) {
    return "web developer";
  }

  if (
    key.includes("software developer") ||
    key.includes("software development")
  ) {
    return "software developer";
  }

  return "";
}

function toStringArray(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value
      .filter((item): item is string => typeof item === "string")
      .map((item) => item.trim())
      .filter(Boolean);
  }

  if (typeof value === "string" && value.trim()) {
    try {
      const parsed: unknown = JSON.parse(value);

      if (Array.isArray(parsed)) {
        return parsed
          .filter((item): item is string => typeof item === "string")
          .map((item) => item.trim())
          .filter(Boolean);
      }
    } catch {
      return value
        .split(/\r?\n|[,;]+/)
        .map((item) => item.trim())
        .filter(Boolean);
    }
  }

  return [];
}

function uniqueSkills(values: string[]): string[] {
  const seen = new Set<string>();

  return values.filter((value) => {
    const cleaned = value.trim();
    const key = normalize(cleaned);

    if (!key || seen.has(key)) return false;

    seen.add(key);
    return true;
  });
}

function getCareerCurriculum(career: Career): string[] {
  const key = resolveCareerKey(career.title);

  if (key && CURRICULA[key]) {
    return [...CURRICULA[key]];
  }

  return uniqueSkills([
    ...toStringArray(career.beginner_skills),
    ...toStringArray(career.advanced_skills),
  ]);
}

function makeDataAnalystTasks(): GeneratedTask[] {
  return [
    {
      week: 1,
      title: "Learn spreadsheet fundamentals",
      description:
        "Practise spreadsheet formulas, cell references, sorting, filtering, and basic tables. Complete exercises using a small sample dataset.",
      course: "Excel and spreadsheet fundamentals",
    },
    {
      week: 1,
      title: "Practise spreadsheet analysis",
      description:
        "Use SUM, AVERAGE, COUNTIF, and conditional formatting to answer questions about a sample dataset. Check the results for accuracy.",
      course: "Excel and spreadsheet fundamentals",
    },
    {
      week: 1,
      title: "Complete an Excel mini-exercise",
      description:
        "Create a small summary report from sample student marks or sales data. Include the question, calculations, and findings.",
      course: "Excel and spreadsheet fundamentals",
    },
    {
      week: 2,
      title: "Learn data cleaning",
      description:
        "Identify missing values, duplicate rows, inconsistent labels, and incorrect data types in a sample dataset.",
      course: "Data cleaning and validation",
    },
    {
      week: 2,
      title: "Clean and validate a dataset",
      description:
        "Correct data quality issues in a copy of your dataset. Keep a short record of each issue and the correction made.",
      course: "Data cleaning and validation",
    },
    {
      week: 2,
      title: "Document data quality checks",
      description:
        "Compare the dataset before and after cleaning. Explain how missing or inconsistent data could affect the analysis.",
      course: "Data cleaning and validation",
    },
    {
      week: 3,
      title: "Learn SQL fundamentals",
      description:
        "Practise SELECT, WHERE, ORDER BY, LIMIT, and filtering with a sample relational database.",
      course: "SQL fundamentals",
    },
    {
      week: 3,
      title: "Practise SQL grouping and joins",
      description:
        "Write queries using GROUP BY, aggregate functions, and JOIN. Check that each query answers a clear data question.",
      course: "SQL fundamentals",
    },
    {
      week: 3,
      title: "Solve SQL analysis questions",
      description:
        "Write queries to find totals, averages, category comparisons, and records meeting specified conditions.",
      course: "SQL fundamentals",
    },
    {
      week: 4,
      title: "Learn descriptive statistics",
      description:
        "Study mean, median, mode, range, variance, standard deviation, and the difference between correlation and causation.",
      course: "Statistics and exploratory data analysis",
    },
    {
      week: 4,
      title: "Explore a dataset",
      description:
        "Calculate summary statistics and compare groups. Identify unusual values and explain why they may need investigation.",
      course: "Statistics and exploratory data analysis",
    },
    {
      week: 4,
      title: "Write evidence-based findings",
      description:
        "Prepare three findings from your analysis. Support each finding with a value or comparison from the dataset.",
      course: "Statistics and exploratory data analysis",
    },
    {
      week: 5,
      title: "Learn Python for data analysis",
      description:
        "Practise Python variables, lists, dictionaries, conditions, loops, and functions using simple data-related exercises.",
      course: "Python with pandas and NumPy",
    },
    {
      week: 5,
      title: "Load and inspect data with pandas",
      description:
        "Load a CSV file, inspect rows and columns, check data types, and calculate basic summaries using pandas.",
      course: "Python with pandas and NumPy",
    },
    {
      week: 5,
      title: "Analyse data using pandas",
      description:
        "Filter rows, select columns, group records, handle missing values, and export a cleaned dataset.",
      course: "Python with pandas and NumPy",
    },
    {
      week: 6,
      title: "Learn data visualisation",
      description:
        "Understand when to use bar charts, line charts, histograms, and scatter plots. Choose a chart that fits each question.",
      course: "Power BI or Tableau dashboards",
    },
    {
      week: 6,
      title: "Build a simple dashboard",
      description:
        "Create charts and summary indicators in Power BI or Tableau using a clean dataset. Add clear labels and titles.",
      course: "Power BI or Tableau dashboards",
    },
    {
      week: 6,
      title: "Explain dashboard insights",
      description:
        "Write a short explanation of the main trends, comparisons, and limitations shown in your dashboard.",
      course: "Power BI or Tableau dashboards",
    },
    {
      week: 7,
      title: "Prepare the student performance dataset",
      description:
        "Use a suitable sample dataset to investigate student marks, attendance, or study patterns. Document the dataset's columns and limitations.",
      course: "Student Performance Analysis project",
    },
    {
      week: 7,
      title: "Analyse student performance",
      description:
        "Clean the dataset and use SQL or Python to compare marks and attendance. Do not claim that correlation proves causation.",
      course: "Student Performance Analysis project",
    },
    {
      week: 7,
      title: "Visualise project findings",
      description:
        "Build charts or a dashboard that communicates the main results. Make sure each visual answers a specific question.",
      course: "Student Performance Analysis project",
    },
    {
      week: 8,
      title: "Prepare the project report",
      description:
        "Document the problem, data source, cleaning steps, analysis method, key findings, and limitations.",
      course: "Student Performance Analysis project",
    },
    {
      week: 8,
      title: "Publish the project evidence",
      description:
        "Organise your notebook, SQL queries, dashboard screenshots, and report in a portfolio folder or repository. Remove private data.",
      course: "Student Performance Analysis project",
    },
    {
      week: 8,
      title: "Practise Data Analyst interview questions",
      description:
        "Explain joins, grouping, missing values, descriptive statistics, chart selection, and the findings of your project in your own words.",
      course: "Data Analyst interview preparation",
    },
  ];
}

function createCareerTasks(career: Career): GeneratedTask[] {
  const key = resolveCareerKey(career.title);

  if (key === "data analyst") {
    return makeDataAnalystTasks();
  }

  const skills = getCareerCurriculum(career).slice(0, 6);

  if (skills.length === 0) return [];

  const tasks: GeneratedTask[] = [];

  skills.forEach((skill, index) => {
    const week = index + 1;

    tasks.push(
      {
        week,
        title: `Learn ${skill}`,
        description:
          `Study the fundamentals of ${skill} for the ${career.title} career. Write down the key concepts and complete beginner exercises.`,
        course: skill,
      },
      {
        week,
        title: `Practise ${skill}`,
        description:
          `Complete practical exercises using ${skill}. Check your results, correct mistakes, and record what you learned.`,
        course: skill,
      },
      {
        week,
        title: `Apply ${skill}`,
        description:
          `Use ${skill} in a small exercise relevant to ${career.title}. Document your approach and the result.`,
        course: skill,
      }
    );
  });

  const projects = toStringArray(career.project_ideas);
  const topics = toStringArray(career.interview_topics);

  if (projects.length > 0) {
    tasks.push({
      week: skills.length + 1,
      title: "Build a career-related project",
      description: projects[0],
      course: projects[0],
    });
  }

  if (topics.length > 0) {
    tasks.push({
      week: skills.length + 1,
      title: "Practise an interview topic",
      description:
        `Study this ${career.title} interview topic and prepare an explanation with an example: ${topics[0]}`,
      course: topics[0],
    });
  }

  return tasks;
}

function taskDueDate(week: number, taskIndex: number): string {
  const date = new Date();
  const offset = Math.max(0, week - 1) * 7 + (taskIndex % 3) * 2;

  date.setDate(date.getDate() + offset);

  return date.toISOString().slice(0, 10);
}

function RoadmapPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const careerName = searchParams.get("career");

  const [career, setCareer] = useState<Career | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [generatingTasks, setGeneratingTasks] = useState(false);
  const [taskMessage, setTaskMessage] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function fetchCareer() {
      if (!careerName) {
        setCareer(null);
        setError("No career was selected.");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError("");
        setCareer(null);
        setTaskMessage("");

        const { data, error: careerError } = await supabase
          .from("careers")
          .select("*")
          .eq("title", careerName)
          .single();

        if (careerError) throw careerError;

        if (!cancelled && data) {
          setCareer({
            ...(data as Career),
            beginner_skills: toStringArray(data.beginner_skills),
            advanced_skills: toStringArray(data.advanced_skills),
            learning_paths: toStringArray(
              data.learning_paths ?? data.learning_path
            ),
            project_ideas: toStringArray(data.project_ideas),
            interview_topics: toStringArray(data.interview_topics),
          });
        }
      } catch (err: unknown) {
        console.error("Roadmap error:", err);

        if (!cancelled) {
          setError(
            err instanceof Error ? err.message : "Unable to load this career."
          );
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    void fetchCareer();

    return () => {
      cancelled = true;
    };
  }, [careerName]);

  function openSkill(skill: string) {
    const selectedSkill = skill.trim();

    if (!selectedSkill) {
      setTaskMessage("This skill does not have a valid name.");
      return;
    }

    router.push(`/course?skill=${encodeURIComponent(selectedSkill)}`);
  }

  function openProjectProgress(project: string) {
    const selectedProject = project.trim();

    if (!selectedProject) {
      setTaskMessage("This project does not have a valid name.");
      return;
    }

    router.push(
      `/project-progress?project=${encodeURIComponent(
        selectedProject
      )}&career=${encodeURIComponent(career?.title || "")}`
    );
  }

  function viewWeeklyTasks() {
    if (!career) return;

    router.push(
      `/weekly-tasks?career=${encodeURIComponent(career.title)}`
    );
  }

  async function generateWeeklyTasks() {
    if (generatingTasks) return;

    try {
      setGeneratingTasks(true);
      setTaskMessage("");

      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError) throw userError;

      if (!user) {
        setTaskMessage("Please log in again before generating tasks.");
        return;
      }

      if (!career) {
        setTaskMessage("Career information is not available.");
        return;
      }

      const selectedCareer = career.title;
      const taskIdeas = createCareerTasks(career);

      if (taskIdeas.length === 0) {
        setTaskMessage(
          "No validated curriculum is available for this career. Add relevant beginner or advanced skills to the careers table before generating tasks."
        );
        return;
      }

      const { data: existing, error: existingError } = await supabase
        .from("weekly_tasks")
        .select(
          "id, title, description, due_date, course, completed, career"
        )
        .eq("user_id", user.id);

      if (existingError) throw existingError;

      const oldTasks = ((existing ?? []) as ExistingTask[]).filter(
        (task) =>
          typeof task.career === "string" &&
          normalize(task.career) === normalize(selectedCareer)
      );

      const desiredRows = taskIdeas.map((task, index) => ({
        user_id: user.id,
        title: `Week ${task.week}: ${task.title}`,
        description: task.description,
        due_date: taskDueDate(task.week, index),
        career: selectedCareer,
        course: task.course,
        completed: false,
      }));

      let insertedCount = 0;
      let updatedCount = 0;
      let removedDuplicates = 0;

      for (const desired of desiredRows) {
        const matching = oldTasks.filter(
          (old) =>
            normalizeTaskTitle(old.title) ===
            normalizeTaskTitle(desired.title)
        );

        const completedMatches = matching.filter(
          (task) => task.completed
        );

        const pendingMatches = matching.filter(
          (task) => !task.completed
        );

        if (completedMatches.length > 0) {
          for (const duplicate of pendingMatches) {
            const { error: deleteError } = await supabase
              .from("weekly_tasks")
              .delete()
              .eq("id", duplicate.id)
              .eq("user_id", user.id)
              .eq("completed", false);

            if (deleteError) throw deleteError;

            removedDuplicates++;
          }

          continue;
        }

        if (pendingMatches.length > 0) {
          const keep = pendingMatches[0];

          const { error: updateError } = await supabase
            .from("weekly_tasks")
            .update({
              title: desired.title,
              description: desired.description,
              due_date: desired.due_date,
              course: desired.course,
              career: selectedCareer,
            })
            .eq("id", keep.id)
            .eq("user_id", user.id)
            .eq("completed", false);

          if (updateError) throw updateError;

          updatedCount++;

          for (const duplicate of pendingMatches.slice(1)) {
            const { error: deleteError } = await supabase
              .from("weekly_tasks")
              .delete()
              .eq("id", duplicate.id)
              .eq("user_id", user.id)
              .eq("completed", false);

            if (deleteError) throw deleteError;

            removedDuplicates++;
          }

          continue;
        }

        const { error: insertError } = await supabase
          .from("weekly_tasks")
          .insert([desired]);

        if (insertError) throw insertError;

        insertedCount++;
      }

      setTaskMessage(
        `Curriculum checked: ${desiredRows.length} planned tasks, ` +
          `${updatedCount} updated, ${insertedCount} added, and ` +
          `${removedDuplicates} duplicate pending tasks removed. ` +
          `Completed tasks were preserved.`
      );
    } catch (err: unknown) {
      console.error("Generate tasks error:", err);

      setTaskMessage(
        `Error: ${
          err instanceof Error ? err.message : "Unable to update tasks."
        }`
      );
    } finally {
      setGeneratingTasks(false);
    }
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-5xl mb-4">🧭</div>
          <h2 className="text-xl font-bold text-slate-800">
            Preparing your career roadmap...
          </h2>
          <p className="text-slate-500 mt-2">
            Loading your learning path.
          </p>
        </div>
      </main>
    );
  }

  if (error || !career) {
    return (
      <main className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
        <div className="bg-white border border-red-200 rounded-2xl p-8 max-w-lg w-full text-center">
          <div className="text-4xl mb-4">⚠️</div>
          <h2 className="text-xl font-bold text-slate-800">
            Unable to load roadmap
          </h2>
          <p className="text-red-600 text-sm mt-3 break-words">
            {error || "Career not found."}
          </p>
          <button
            onClick={() => router.push("/career-discovery")}
            className="mt-6 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700"
          >
            Back to Careers
          </button>
        </div>
      </main>
    );
  }

  const curriculum = getCareerCurriculum(career);
  const isDataAnalyst = resolveCareerKey(career.title) === "data analyst";

  const beginnerSkills = isDataAnalyst
    ? DATA_ANALYST_BEGINNER
    : toStringArray(career.beginner_skills);

  const advancedSkills = isDataAnalyst
    ? DATA_ANALYST_ADVANCED
    : toStringArray(career.advanced_skills);

  const projects = toStringArray(career.project_ideas);
  const learningPaths = toStringArray(career.learning_paths);
  const interviewTopics = toStringArray(career.interview_topics);

  return (
    <main className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => router.push("/career-discovery")}
            className="text-sm font-medium text-slate-600 hover:text-blue-600"
          >
            ← Career Discovery
          </button>
          <button
            onClick={() => router.push("/dashboard")}
            className="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50"
          >
            Dashboard
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-10">
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 md:p-10 text-white">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-3xl">
              {career.category && (
                <span className="inline-block px-3 py-1 bg-white/15 rounded-full text-sm mb-4">
                  {career.category}
                </span>
              )}
              <h1 className="text-4xl md:text-5xl font-bold">
                {career.title}
              </h1>
              <p className="text-blue-100 text-lg leading-8 mt-5">
                {career.description ||
                  "Explore this career path and build the skills needed to grow in this field."}
              </p>
            </div>
            <div className="text-7xl hidden md:block">🚀</div>
          </div>
        </section>

        <section className="mt-8 bg-white border border-slate-200 rounded-2xl p-6 md:p-7">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div>
              <p className="text-blue-600 text-sm font-semibold">
                YOUR NEXT STEP
              </p>
              <h2 className="text-2xl font-bold text-slate-900 mt-1">
                Weekly Learning Tasks
              </h2>
              <p className="text-slate-500 mt-2">
                Generate a career-specific learning plan. Existing matching
                tasks will be reused, completed tasks preserved, and duplicate
                pending copies removed.
              </p>
              {taskMessage && (
                <p
                  role="status"
                  className={`mt-3 text-sm font-medium ${
                    taskMessage.startsWith("Curriculum checked:")
                      ? "text-green-600"
                      : taskMessage.startsWith("Error:")
                        ? "text-red-600"
                        : "text-blue-600"
                  }`}
                >
                  {taskMessage}
                </p>
              )}
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => void generateWeeklyTasks()}
                disabled={generatingTasks}
                className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {generatingTasks
                  ? "Updating tasks..."
                  : "Generate / Fix Weekly Tasks"}
              </button>
              <button
                onClick={viewWeeklyTasks}
                className="px-6 py-3 rounded-xl border border-slate-300 text-slate-700 font-semibold hover:bg-slate-50"
              >
                View Weekly Tasks →
              </button>
            </div>
          </div>
        </section>

        <div className="mt-6 bg-white border border-slate-200 rounded-2xl p-4 flex flex-wrap gap-3">
          {[
            ["Skills", "#skills"],
            ["Learning Path", "#learning"],
            ["Projects", "#projects"],
            ["Certifications", "#certifications"],
            ["Internships", "#internships"],
            ["Interview", "#interview"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="px-4 py-2 rounded-lg hover:bg-blue-50 text-blue-700 text-sm font-medium"
            >
              {label}
            </a>
          ))}
        </div>

        <section id="skills" className="mt-12">
          <div className="mb-6">
            <p className="text-blue-600 text-sm font-semibold">STEP 1</p>
            <h2 className="text-3xl font-bold text-slate-900 mt-1">
              Skills to Learn
            </h2>
            <p className="text-slate-500 mt-2">
              Start with beginner skills and gradually move toward advanced
              skills.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <SkillSection
              title="Beginner Skills"
              subtitle="Start here"
              icon="🌱"
              skills={beginnerSkills}
              emptyMessage="Beginner skills will be added soon."
              onOpenSkill={openSkill}
              color="green"
            />
            <SkillSection
              title="Advanced Skills"
              subtitle="Learn after fundamentals"
              icon="🚀"
              skills={advancedSkills}
              emptyMessage="Advanced skills will be added soon."
              onOpenSkill={openSkill}
              color="purple"
            />
          </div>

          {curriculum.length > 0 && (
            <p className="mt-4 text-sm text-slate-500">
              The weekly task generator uses the selected career's curriculum.
            </p>
          )}
        </section>

        <section id="learning" className="mt-12">
          <div className="mb-6">
            <p className="text-blue-600 text-sm font-semibold">STEP 2</p>
            <h2 className="text-3xl font-bold text-slate-900 mt-1">
              Learning Path
            </h2>
            <p className="text-slate-500 mt-2">
              Follow the roadmap in stages and build your knowledge step by
              step.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            {isDataAnalyst ? (
              <div className="space-y-5">
                {[
                  ["Weeks 1–2", "Excel, spreadsheets and data cleaning"],
                  ["Week 3", "SQL queries, grouping and joins"],
                  ["Week 4", "Statistics and exploratory analysis"],
                  ["Week 5", "Python, pandas and NumPy"],
                  ["Week 6", "Visualisation and dashboard development"],
                  [
                    "Weeks 7–8",
                    "Student Performance Analysis project and interview preparation",
                  ],
                ].map(([stage, detail], index) => (
                  <div key={stage} className="flex gap-5">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      {index < 5 && (
                        <div className="w-px h-full bg-slate-200 mt-2" />
                      )}
                    </div>
                    <div className="pb-6">
                      <h3 className="font-semibold text-slate-900">{stage}</h3>
                      <p className="text-slate-600 mt-1">{detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : learningPaths.length > 0 ? (
              <div className="space-y-5">
                {learningPaths.map((path, index) => (
                  <div key={`${path}-${index}`} className="flex gap-5">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      {index !== learningPaths.length - 1 && (
                        <div className="w-px h-full bg-slate-200 mt-2" />
                      )}
                    </div>
                    <div className="pb-6">
                      <h3 className="font-semibold text-slate-900">
                        Stage {index + 1}
                      </h3>
                      <p className="text-slate-600 mt-1">{path}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  "Fundamentals",
                  "Core Skills",
                  "Projects",
                  "Career Preparation",
                ].map((stage, index) => (
                  <div key={stage} className="p-5 bg-slate-50 rounded-xl">
                    <div className="text-blue-600 font-bold text-sm">
                      STAGE {index + 1}
                    </div>
                    <h3 className="font-bold text-slate-900 mt-2">{stage}</h3>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        <section id="projects" className="mt-12">
          <div className="mb-6">
            <p className="text-blue-600 text-sm font-semibold">STEP 3</p>
            <h2 className="text-3xl font-bold text-slate-900 mt-1">
              Project Ideas
            </h2>
            <p className="text-slate-500 mt-2">
              Select a project to open its progress tracker and record your
              work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {isDataAnalyst ? (
              <ProjectCard
                number="01"
                title="Student Performance Analysis"
                description="Clean a sample student dataset, analyse marks and attendance, use SQL or Python, create charts, and present evidence-based findings."
                onTrack={() =>
                  openProjectProgress("Student Performance Analysis")
                }
              />
            ) : projects.length > 0 ? (
              projects.map((project, index) => (
                <div
                  key={`${project}-${index}`}
                  className="bg-white border border-slate-200 rounded-2xl p-6"
                >
                  <div className="text-2xl mb-4">🛠️</div>
                  <h3 className="font-bold text-slate-900">
                    Project {index + 1}
                  </h3>
                  <p className="text-sm text-slate-500 mt-2 leading-6">
                    {project}
                  </p>

                  <button
                    type="button"
                    onClick={() => openProjectProgress(project)}
                    className="mt-5 w-full px-4 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
                  >
                    Track Project Progress →
                  </button>
                </div>
              ))
            ) : (
              <>
                <ProjectCard
                  number="01"
                  title="Beginner Project"
                  description="Build a small project using fundamental skills."
                  onTrack={() => openProjectProgress("Beginner Project")}
                />
                <ProjectCard
                  number="02"
                  title="Intermediate Project"
                  description="Combine multiple skills to solve a practical problem."
                  onTrack={() => openProjectProgress("Intermediate Project")}
                />
                <ProjectCard
                  number="03"
                  title="Mini Project"
                  description="Create a portfolio-ready project before applying for internships."
                  onTrack={() => openProjectProgress("Mini Project")}
                />
              </>
            )}
          </div>
        </section>

        <section id="certifications" className="mt-12">
          <InfoCard
            icon="🏆"
            title="Certifications"
            description={
              career.certification_guidance ||
              "Choose certifications that match the skills you are learning and your target career."
            }
          />
        </section>

        <section id="internships" className="mt-6">
          <InfoCard
            icon="💼"
            title="Internship Preparation"
            description={
              career.internship_guidance ||
              "Build projects, improve your resume, and develop practical skills before applying for internships."
            }
          />
        </section>

        <section id="interview" className="mt-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-7">
            <div className="flex gap-4">
              <div className="text-4xl">🎤</div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-slate-900">
                  Interview Preparation
                </h2>

                {isDataAnalyst ? (
                  <div className="flex flex-wrap gap-3 mt-5">
                    {[
                      "SQL joins and grouping",
                      "Missing values and data cleaning",
                      "Mean, median and standard deviation",
                      "Choosing suitable charts",
                      "Power BI or Tableau dashboards",
                      "Explaining project findings",
                    ].map((topic) => (
                      <span
                        key={topic}
                        className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                ) : interviewTopics.length > 0 ? (
                  <div className="flex flex-wrap gap-3 mt-5">
                    {interviewTopics.map((topic, index) => (
                      <span
                        key={`${topic}-${index}`}
                        className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="text-slate-500 mt-2">
                    Interview topics will be added as you progress through the
                    roadmap.
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12 bg-slate-900 rounded-3xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold">Ready to start learning?</h2>
          <p className="text-slate-300 mt-2">
            Choose a skill above and start your learning journey.
          </p>
          <button
            onClick={() => {
              if (beginnerSkills.length > 0) {
                openSkill(beginnerSkills[0]);
              } else {
                viewWeeklyTasks();
              }
            }}
            className="mt-6 px-7 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:bg-slate-100"
          >
            Start Learning →
          </button>
        </section>
      </div>
    </main>
  );
}

function SkillSection({
  title,
  subtitle,
  icon,
  skills,
  emptyMessage,
  onOpenSkill,
  color,
}: {
  title: string;
  subtitle: string;
  icon: string;
  skills: string[];
  emptyMessage: string;
  onOpenSkill: (skill: string) => void;
  color: "green" | "purple";
}) {
  const hoverClasses =
    color === "green"
      ? "hover:border-blue-400 hover:bg-blue-50 group-hover:text-blue-600"
      : "hover:border-purple-400 hover:bg-purple-50 group-hover:text-purple-600";

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6">
      <div className="flex items-center gap-3 mb-5">
        <div
          className={`w-10 h-10 rounded-xl ${
            color === "green" ? "bg-green-50" : "bg-purple-50"
          } flex items-center justify-center`}
        >
          {icon}
        </div>
        <div>
          <h3 className="font-bold text-lg text-slate-900">{title}</h3>
          <p className="text-sm text-slate-500">{subtitle}</p>
        </div>
      </div>

      {skills.length > 0 ? (
        <div className="space-y-3">
          {skills.map((skill, index) => (
            <button
              type="button"
              key={`${skill}-${index}`}
              onClick={() => onOpenSkill(skill)}
              className={`w-full text-left p-4 rounded-xl border border-slate-200 transition flex items-center justify-between group cursor-pointer ${hoverClasses}`}
            >
              <div>
                <p className="font-semibold text-slate-800">{skill}</p>
                <p className="text-xs text-slate-500 mt-1">
                  Open complete course
                </p>
              </div>
              <span className="text-slate-400">→</span>
            </button>
          ))}
        </div>
      ) : (
        <p className="text-slate-400">{emptyMessage}</p>
      )}
    </div>
  );
}

function ProjectCard({
  number,
  title,
  description,
  onTrack,
}: {
  number: string;
  title: string;
  description: string;
  onTrack?: () => void;
}) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6">
      <div className="text-blue-600 font-bold text-sm">
        PROJECT {number}
      </div>
      <h3 className="font-bold text-lg text-slate-900 mt-2">{title}</h3>
      <p className="text-sm text-slate-500 mt-2 leading-6">
        {description}
      </p>

      {onTrack && (
        <button
          type="button"
          onClick={onTrack}
          className="mt-5 w-full px-4 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
        >
          Track Project Progress →
        </button>
      )}
    </div>
  );
}

function InfoCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-7">
      <div className="flex gap-4">
        <div className="text-4xl">{icon}</div>
        <div>
          <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
          <p className="text-slate-500 mt-2 leading-7">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function RoadmapPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-slate-50 flex items-center justify-center">
          <p className="text-slate-600">Loading roadmap...</p>
        </div>
      }
    >
      <RoadmapPageContent />
    </Suspense>
  );
}