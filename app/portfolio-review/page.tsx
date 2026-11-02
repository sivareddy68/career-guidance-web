
"use client";

import {
  Suspense,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase";

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

type ProjectReview = {
  title: string;
  score: number;
  strengths: string[];
  suggestions: string[];
  careerRelevance?: string;
  problemClarity?: string;
  solutionClarity?: string;
  technologyAssessment?: string;
  contributionEvidence?: string;
  evidenceQuality?: string;
};

type ActionPlanItem = {
  priority: string;
  task: string;
  reason: string;
};

type CareerAlignment = {
  fitSummary?: string;
  matchedAreas?: string[];
  gaps?: string[];
};

type LearningProgress = {
  summary?: string;
  usefulLearning?: string[];
  nextLearningFocus?: string[];
};

type ReviewResult = {
  score: number;
  strengths: string[];
  suggestions: string[];
  skillMatches: string[];
  missingSkills: string[];
  projectResults: ProjectReview[];
  summary?: string;
  source?: "ai" | "rules";
  model?: string;
  actionPlan?: ActionPlanItem[];
  careerAlignment?: CareerAlignment;
  learningProgress?: LearningProgress;
};

const emptyPortfolio: Portfolio = {
  name: "",
  education: "",
  career_goal: "",
  about: "",
  skills: "",
  projects: [],
};

const panel =
  "rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-7";

const muted = "text-sm text-slate-400";

function asObject(value: unknown): Record<string, unknown> | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return null;
  }

  return value as Record<string, unknown>;
}

function asText(value: unknown): string {
  return typeof value === "string" || typeof value === "number"
    ? String(value)
    : "";
}

function asStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) return [];

  return value
    .filter((item): item is string => typeof item === "string")
    .map((item) => item.trim())
    .filter(Boolean);
}

function parseProjects(value: unknown): PortfolioProject[] {
  let data = value;

  if (typeof data === "string") {
    try {
      data = JSON.parse(data);
    } catch {
      return [];
    }
  }

  if (!Array.isArray(data)) return [];

  return data
    .filter((item) => item && typeof item === "object")
    .map((item) => {
      const project = item as Record<string, unknown>;

      return {
        title: asText(project.title),
        description: asText(project.description),
        technologies: asText(project.technologies),
        link: asText(project.link),
      };
    })
    .filter((project) =>
      Boolean(
        project.title.trim() ||
          project.description.trim() ||
          project.technologies.trim() ||
          project.link.trim()
      )
    );
}

function splitSkills(value: string): string[] {
  return [
    ...new Set(
      value
        .split(/[,;\n]+/)
        .map((item) => item.trim())
        .filter(Boolean)
    ),
  ];
}

function normalize(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9+#.]/g, "");
}

function normalizeCareer(value: string): string {
  return value
    .toLowerCase()
    .replace(/\b(engineer|engineering|professional|specialist)\b/g, " ")
    .replace(/[^a-z0-9+#]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

const careerSkillAliases: Record<string, string[]> = {
  "software developer": [
    "Python",
    "Java",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "SQL",
    "Git",
    "Data Structures and Algorithms",
    "Object-Oriented Programming",
    "REST APIs",
    "Unit Testing",
    "React",
    "Node.js",
    "Backend Development",
    "System Design",
    "Cloud Deployment",
    "Linux",
  ],
  "web developer": [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "REST APIs",
    "SQL",
    "Git",
    "Responsive Design",
    "Web Accessibility",
    "Testing",
    "Deployment",
  ],
  "data analyst": [
    "Excel",
    "SQL",
    "Python",
    "Pandas",
    "Statistics",
    "Data Cleaning",
    "Data Visualization",
    "Power BI",
    "Tableau",
    "Data Analysis",
  ],
  "data scientist": [
    "Python",
    "SQL",
    "Statistics",
    "Probability",
    "Pandas",
    "NumPy",
    "Machine Learning",
    "Data Visualization",
    "Model Evaluation",
  ],
  "ai ml engineer": [
    "Python",
    "Machine Learning",
    "Deep Learning",
    "Statistics",
    "NumPy",
    "Pandas",
    "PyTorch",
    "TensorFlow",
    "Model Evaluation",
    "APIs",
  ],
  "cybersecurity analyst": [
    "Networking",
    "Linux",
    "Security Fundamentals",
    "SIEM",
    "Incident Response",
    "Threat Analysis",
    "Python",
    "Access Control",
  ],
  "cloud engineer": [
    "Linux",
    "Networking",
    "AWS",
    "Azure",
    "Google Cloud",
    "Docker",
    "CI/CD",
    "Infrastructure as Code",
    "Monitoring",
    "Security",
  ],
  "vlsi engineer": [
    "Digital Logic Design",
    "Verilog",
    "SystemVerilog",
    "CMOS",
    "RTL Design",
    "Verification",
    "Static Timing Analysis",
    "FPGA",
    "Semiconductor Fundamentals",
  ],
  "embedded system engineer": [
    "C",
    "C++",
    "Microcontrollers",
    "Embedded C",
    "UART",
    "SPI",
    "I2C",
    "RTOS",
    "Debugging",
    "Electronics",
  ],
  "iot engineer": [
    "Embedded C",
    "Microcontrollers",
    "Sensors",
    "Networking",
    "MQTT",
    "Python",
    "IoT Security",
    "Cloud Integration",
  ],
  "networking engineer": [
    "TCP/IP",
    "Routing",
    "Switching",
    "Subnetting",
    "DNS",
    "DHCP",
    "Network Security",
    "Linux",
    "Troubleshooting",
  ],
  "electronics engineer": [
    "Circuit Analysis",
    "Digital Electronics",
    "Analog Electronics",
    "Microcontrollers",
    "Signals and Systems",
    "PCB Design",
    "Embedded Systems",
    "Instrumentation",
  ],
  "product analyst": [
    "SQL",
    "Excel",
    "Statistics",
    "Data Visualization",
    "Product Metrics",
    "A/B Testing",
    "Analytics",
    "Communication",
  ],
  "ui ux designer": [
    "Figma",
    "Wireframing",
    "Prototyping",
    "User Research",
    "Usability Testing",
    "Information Architecture",
    "Accessibility",
    "Interaction Design",
  ],
};

function getCareerRequirements(career: string): string[] {
  const normalizedCareer = normalizeCareer(career);

  if (careerSkillAliases[normalizedCareer]) {
    return careerSkillAliases[normalizedCareer];
  }

  const matchingKey = Object.keys(careerSkillAliases).find(
    (key) =>
      normalizedCareer.includes(key) ||
      key.includes(normalizedCareer)
  );

  return matchingKey ? careerSkillAliases[matchingKey] : [];
}

function skillsMatch(first: string, second: string): boolean {
  const a = normalize(first);
  const b = normalize(second);

  if (!a || !b) return false;
  if (a === b) return true;

  const aliases: Record<string, string[]> = {
    js: ["javascript"],
    javascript: ["js"],
    ts: ["typescript"],
    typescript: ["ts"],
    reactjs: ["react"],
    react: ["reactjs"],
    nodejs: ["node"],
    "node.js": ["nodejs", "node"],
    powerbi: ["power bi"],
    "power bi": ["powerbi"],
    objectorientedprogramming: ["oop"],
    oop: ["objectorientedprogramming"],
    dsa: ["datastructuresandalgorithms"],
    datastructuresandalgorithms: ["dsa"],
    machinelearning: ["ml"],
    ml: ["machinelearning"],
    artificialintelligence: ["ai"],
    ai: ["artificialintelligence"],
    cascadingstylesheets: ["css"],
    css: ["cascadingstylesheets"],
    html5: ["html"],
    html: ["html5"],
    structuredquerylanguage: ["sql"],
    sql: ["structuredquerylanguage"],
  };

  const aAliases = aliases[a] ?? [];
  const bAliases = aliases[b] ?? [];

  if (aAliases.includes(b) || bAliases.includes(a)) return true;

  if (a.length >= 5 && b.length >= 5) {
    return a.includes(b) || b.includes(a);
  }

  return false;
}

function validWebUrl(value: string): boolean {
  try {
    const url = new URL(value);

    return (
      (url.protocol === "http:" || url.protocol === "https:") &&
      url.hostname.includes(".")
    );
  } catch {
    return false;
  }
}

function analyzeProject(project: PortfolioProject): ProjectReview {
  let score = 0;
  const strengths: string[] = [];
  const suggestions: string[] = [];

  if (project.title.trim()) {
    score += 20;
    strengths.push("A project title is provided.");
  } else {
    suggestions.push("Add a clear project title.");
  }

  const description = project.description.trim();

  if (description.length >= 100) {
    score += 30;
    strengths.push("The project has a detailed description.");
  } else if (description.length >= 40) {
    score += 20;
    suggestions.push(
      "Explain the problem, solution, features, and how the project works in more detail."
    );
  } else {
    if (description.length > 0) score += 10;

    suggestions.push(
      "Describe the problem, solution, features, and your contribution."
    );
  }

  if (project.technologies.trim()) {
    score += 25;
    strengths.push("Technologies used are documented.");
  } else {
    suggestions.push(
      "List the languages, frameworks, and tools you actually used."
    );
  }

  if (validWebUrl(project.link.trim())) {
    score += 15;
    strengths.push("A valid project link is provided.");
  } else {
    suggestions.push(
      "Add a valid GitHub repository or demo URL if available."
    );
  }

  if (description.length >= 100 && project.title.trim()) {
    score += 10;
  } else {
    suggestions.push(
      "Make the project purpose and your individual contribution clear."
    );
  }

  return {
    title: project.title.trim() || "Untitled project",
    score: Math.min(100, score),
    strengths,
    suggestions: [...new Set(suggestions)],
  };
}

function createReview(
  portfolio: Portfolio,
  courses: CourseProgress[],
  selectedCareer: string
): ReviewResult {
  const strengths: string[] = [];
  const suggestions: string[] = [];

  const skills = splitSkills(portfolio.skills);
  const projects = portfolio.projects;
  const projectResults = projects.map(analyzeProject);
  const requiredSkills = getCareerRequirements(selectedCareer);

  const sections = [
    {
      name: "Name",
      complete: Boolean(portfolio.name.trim()),
      points: 10,
      advice: "Add your name to your portfolio.",
    },
    {
      name: "Education",
      complete: Boolean(portfolio.education.trim()),
      points: 10,
      advice: "Add your current education or qualification.",
    },
    {
      name: "Career goal",
      complete: Boolean(selectedCareer.trim()),
      points: 15,
      advice: "Specify the career you want to pursue.",
    },
    {
      name: "About",
      complete: portfolio.about.trim().length >= 40,
      points: 15,
      advice:
        "Describe your interests, learning goals, and relevant experience.",
    },
    {
      name: "Skills",
      complete: skills.length >= 3,
      points: 15,
      advice:
        "List skills you have actually practised and can discuss.",
    },
    {
      name: "Projects",
      complete: projects.length > 0,
      points: 15,
      advice:
        "Add at least one project with a title and meaningful description.",
    },
    {
      name: "Project details",
      complete: projects.some(
        (project) =>
          project.description.trim().length >= 40 &&
          project.technologies.trim()
      ),
      points: 10,
      advice:
        "Include a meaningful project description and the technologies used.",
    },
    {
      name: "Project links",
      complete: projects.some((project) =>
        validWebUrl(project.link.trim())
      ),
      points: 10,
      advice:
        "Add a valid GitHub repository or demo link when available.",
    },
  ];

  let score = 0;

  for (const section of sections) {
    if (section.complete) {
      score += section.points;
      strengths.push(
        `${section.name}: this section meets the current completeness check.`
      );
    } else {
      suggestions.push(section.advice);
    }
  }

  if (courses.length > 0) {
    strengths.push(
      `You have ${courses.length} saved course progress record(s).`
    );
  } else {
    suggestions.push(
      "Start or continue a course so your learning progress can be recorded."
    );
  }

  const skillMatches = skills.filter((skill) =>
    requiredSkills.some((required) => skillsMatch(skill, required))
  );

  const missingSkills = requiredSkills.filter(
    (required) =>
      !skills.some((skill) => skillsMatch(skill, required))
  );

  if (requiredSkills.length === 0) {
    suggestions.push(
      `Review the specific skills required for ${selectedCareer}; an automatic requirements list is not configured for this career yet.`
    );
  } else if (skillMatches.length > 0) {
    strengths.push(
      `${skillMatches.length} listed skill(s) match the curated requirements for ${selectedCareer}.`
    );
  } else {
    suggestions.push(
      `Compare your skills with the requirements for ${selectedCareer}. Add only skills you have genuinely learned.`
    );
  }

  if (projects.length > 0) {
    const averageProjectScore = Math.round(
      projectResults.reduce((sum, project) => sum + project.score, 0) /
        projectResults.length
    );

    if (averageProjectScore >= 70) {
      strengths.push(
        "Your projects contain several useful portfolio details."
      );
    } else {
      suggestions.push(
        "Improve project descriptions, technology lists, and links to make your work easier to understand."
      );
    }
  }

  return {
    score: Math.max(0, Math.min(100, score)),
    strengths: [...new Set(strengths)],
    suggestions: [...new Set(suggestions)],
    skillMatches,
    missingSkills,
    projectResults,
    source: "rules",
  };
}

function validateReview(value: unknown): ReviewResult {
  const data = asObject(value);

  if (!data) {
    throw new Error("The AI returned an invalid review response.");
  }

  const score = Number(data.score);

  if (!Number.isFinite(score) || score < 0 || score > 100) {
    throw new Error("The AI returned an invalid portfolio score.");
  }

  const projectResults: ProjectReview[] = Array.isArray(data.projectResults)
    ? data.projectResults
        .map((item): ProjectReview | null => {
          const project = asObject(item);
          if (!project) return null;

          const projectScore = Number(project.score);

          if (
            !Number.isFinite(projectScore) ||
            projectScore < 0 ||
            projectScore > 100
          ) {
            return null;
          }

          return {
            title: asText(project.title) || "Untitled project",
            score: projectScore,
            strengths: asStringArray(project.strengths),
            suggestions: asStringArray(project.suggestions),
            careerRelevance: asText(project.careerRelevance) || undefined,
            problemClarity: asText(project.problemClarity) || undefined,
            solutionClarity: asText(project.solutionClarity) || undefined,
            technologyAssessment:
              asText(project.technologyAssessment) || undefined,
            contributionEvidence:
              asText(project.contributionEvidence) || undefined,
            evidenceQuality: asText(project.evidenceQuality) || undefined,
          };
        })
        .filter((item): item is ProjectReview => item !== null)
    : [];

  const alignment = asObject(data.careerAlignment);
  const learning = asObject(data.learningProgress);

  const actionPlan: ActionPlanItem[] = Array.isArray(data.actionPlan)
    ? data.actionPlan
        .map((item): ActionPlanItem | null => {
          const action = asObject(item);
          if (!action) return null;

          const task = asText(action.task).trim();
          if (!task) return null;

          return {
            priority: asText(action.priority) || "Medium",
            task,
            reason: asText(action.reason),
          };
        })
        .filter((item): item is ActionPlanItem => item !== null)
    : [];

  return {
    score,
    strengths: asStringArray(data.strengths),
    suggestions: asStringArray(data.suggestions),
    skillMatches: asStringArray(data.skillMatches),
    missingSkills: asStringArray(data.missingSkills),
    projectResults,
    summary: asText(data.summary) || undefined,
    model: asText(data.model) || undefined,
    source: "ai",
    actionPlan,
    careerAlignment: alignment
      ? {
          fitSummary: asText(alignment.fitSummary) || undefined,
          matchedAreas: asStringArray(alignment.matchedAreas),
          gaps: asStringArray(alignment.gaps),
        }
      : undefined,
    learningProgress: learning
      ? {
          summary: asText(learning.summary) || undefined,
          usefulLearning: asStringArray(learning.usefulLearning),
          nextLearningFocus: asStringArray(
            learning.nextLearningFocus
          ),
        }
      : undefined,
  };
}

function InfoBox({
  title,
  text,
}: {
  title: string;
  text?: string;
}) {
  if (!text) return null;

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
      <p className="text-sm font-semibold text-slate-200">{title}</p>
      <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
    </div>
  );
}

/*
 * This is the actual page content.
 * useSearchParams() is safely inside the Suspense boundary
 * rendered by the default page component below.
 */
function PortfolioReviewContent() {
  const searchParams = useSearchParams();
  const urlCareer = searchParams.get("career")?.trim() || "";

  const [portfolio, setPortfolio] = useState<Portfolio>(emptyPortfolio);
  const [courses, setCourses] = useState<CourseProgress[]>([]);
  const [review, setReview] = useState<ReviewResult | null>(null);
  const [reviewCareer, setReviewCareer] = useState("");
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState("");

  const requestId = useRef(0);
  const abortController = useRef<AbortController | null>(null);

  const selectedCareer = useMemo(
    () => urlCareer || portfolio.career_goal.trim(),
    [urlCareer, portfolio.career_goal]
  );

  useEffect(() => {
    requestId.current += 1;
    abortController.current?.abort();
    abortController.current = null;

    setReview(null);
    setReviewCareer("");
    setAiError("");
    setAiLoading(false);
  }, [selectedCareer]);

  useEffect(() => {
    return () => {
      requestId.current += 1;
      abortController.current?.abort();
    };
  }, []);

  const loadData = useCallback(async () => {
    requestId.current += 1;
    abortController.current?.abort();
    abortController.current = null;

    setLoading(true);
    setMessage("");
    setReview(null);
    setReviewCareer("");
    setAiError("");
    setAiLoading(false);

    try {
      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError) throw authError;

      if (!user) {
        setMessage("Please sign in to review your portfolio.");
        return;
      }

      const [portfolioResult, courseResult] = await Promise.all([
        supabase
          .from("student_portfolios")
          .select("name, education, career_goal, about, skills, projects")
          .eq("user_id", user.id)
          .maybeSingle(),

        supabase
          .from("course_progress")
          .select("skill, completed_lessons, current_week, current_lesson")
          .eq("user_id", user.id)
          .order("updated_at", { ascending: false }),
      ]);

      if (portfolioResult.error) throw portfolioResult.error;
      if (courseResult.error) throw courseResult.error;

      if (portfolioResult.data) {
        const data = portfolioResult.data;

        setPortfolio({
          name: data.name ?? "",
          education: data.education ?? "",
          career_goal: data.career_goal ?? "",
          about: data.about ?? "",
          skills: data.skills ?? "",
          projects: parseProjects(data.projects),
        });
      } else {
        setPortfolio(emptyPortfolio);
      }

      setCourses((courseResult.data ?? []) as CourseProgress[]);

      if (!portfolioResult.data) {
        setMessage(
          "No saved portfolio was found. Add your details on the Portfolio page, save them, and return here."
        );
      }
    } catch (error) {
      console.error("Portfolio review load error:", error);

      setMessage(
        "Could not load your review data. Check your Supabase connection and table permissions."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadData();
  }, [loadData]);

  async function runReview() {
    const careerForReview =
      urlCareer.trim() || portfolio.career_goal.trim();

    if (!careerForReview) {
      setAiError("Please select a career before analysing your portfolio.");
      return;
    }

    requestId.current += 1;
    const thisRequest = requestId.current;

    abortController.current?.abort();

    const controller = new AbortController();
    abortController.current = controller;

    setReview(null);
    setReviewCareer("");
    setAiError("");
    setAiLoading(true);

    try {
      const {
        data: { session },
        error: sessionError,
      } = await supabase.auth.getSession();

      if (sessionError) throw sessionError;

      if (!session?.access_token) {
        throw new Error(
          "Please sign in again before reviewing your portfolio."
        );
      }
 
     const response = await fetch("/api/project-review", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${session.access_token}`,
  },
  signal: controller.signal,
  body: JSON.stringify({
    portfolio: {
      name: portfolio.name,
      education: portfolio.education,
      career_goal: careerForReview,
      about: portfolio.about,
      skills: portfolio.skills,
      projects: portfolio.projects,
    },
    courses,
    selectedCareer: careerForReview,
  }),
});

      let rawResult: unknown;

      try {
        rawResult = await response.json();
      } catch {
        throw new Error("The review API returned an unreadable response.");
      }

      const resultObject = asObject(rawResult);

      if (!response.ok) {
        throw new Error(
          asText(resultObject?.error) ||
            "Unable to generate the AI review."
        );
      }

      const validatedReview = validateReview(rawResult);

      if (
        thisRequest !== requestId.current ||
        controller.signal.aborted
      ) {
        return;
      }

      setReview(validatedReview);
      setReviewCareer(careerForReview);
    } catch (error) {
      if (
        controller.signal.aborted ||
        thisRequest !== requestId.current
      ) {
        return;
      }

      console.error("AI portfolio review failed:", error);

      const errorMessage =
        error instanceof Error
          ? error.message
          : "The AI review failed. Please try again.";

      setAiError(errorMessage);

      const fallbackReview = createReview(
        portfolio,
        courses,
        careerForReview
      );

      if (thisRequest === requestId.current) {
        setReview(fallbackReview);
        setReviewCareer(careerForReview);
      }
    } finally {
      if (thisRequest === requestId.current) {
        setAiLoading(false);
        abortController.current = null;
      }
    }
  }

  const shouldShowReview =
    Boolean(review) &&
    Boolean(selectedCareer) &&
    reviewCareer === selectedCareer;

  const portfolioLink = selectedCareer
    ? `/portfolio?career=${encodeURIComponent(selectedCareer)}`
    : "/portfolio";

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-white sm:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-purple-300">
            CareerPath
          </p>

          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
            Portfolio Review
          </h1>

          <p className="mt-3 max-w-3xl text-slate-300">
            Review your saved profile, project details, skills, and
            learning activity. Get feedback based on your selected career.
          </p>

          <div className="mt-5 rounded-2xl border border-purple-700/50 bg-purple-950/20 p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-purple-300">
              Currently selected career
            </p>

            <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-2xl font-bold">
                {selectedCareer || "No career selected"}
              </h2>

              {selectedCareer && (
                <span className="rounded-full border border-purple-500/40 bg-purple-500/10 px-3 py-1 text-xs font-semibold text-purple-200">
                  Career-specific analysis
                </span>
              )}
            </div>

            <p className="mt-2 text-sm text-slate-400">
              Changing careers clears the visible result. Each new
              analysis is associated with the career that requested it.
            </p>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href={portfolioLink}
              className="rounded-xl border border-slate-700 px-4 py-2 text-sm font-semibold hover:bg-slate-800"
            >
              Edit My Portfolio
            </Link>

            <button
              type="button"
              onClick={() => void loadData()}
              disabled={loading || aiLoading}
              className="rounded-xl bg-purple-600 px-4 py-2 text-sm font-semibold hover:bg-purple-500 disabled:opacity-50"
            >
              {loading ? "Loading..." : "Refresh Data"}
            </button>
          </div>
        </header>

        {message && (
          <div
            role="status"
            className="mb-6 rounded-xl border border-amber-700/60 bg-amber-950/30 p-4 text-sm text-amber-200"
          >
            {message}
          </div>
        )}

        {loading ? (
          <section className={panel}>Loading your saved portfolio...</section>
        ) : (
          <>
            <section className={panel}>
              <h2 className="text-xl font-semibold">Student overview</h2>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-slate-950 p-4">
                  <p className={muted}>Student</p>
                  <p className="mt-2 text-lg font-semibold">
                    {portfolio.name || "Not provided"}
                  </p>
                </div>

                <div className="rounded-xl bg-slate-950 p-4">
                  <p className={muted}>Career being analysed</p>
                  <p className="mt-2 text-lg font-semibold text-purple-200">
                    {selectedCareer || "Not selected"}
                  </p>
                </div>

                <div className="rounded-xl bg-slate-950 p-4">
                  <p className={muted}>Education</p>
                  <p className="mt-2 font-medium">
                    {portfolio.education || "Not provided"}
                  </p>
                </div>

                <div className="rounded-xl bg-slate-950 p-4">
                  <p className={muted}>Saved projects</p>
                  <p className="mt-2 text-2xl font-bold text-purple-300">
                    {portfolio.projects.length}
                  </p>
                </div>
              </div>

              <div className="mt-5">
                <p className="font-medium">About</p>
                <p className="mt-2 whitespace-pre-wrap text-slate-300">
                  {portfolio.about || "No About section provided yet."}
                </p>
              </div>

              <div className="mt-5">
                <p className="font-medium">Listed skills</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {splitSkills(portfolio.skills).length > 0 ? (
                    splitSkills(portfolio.skills).map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-purple-500/40 bg-purple-500/10 px-3 py-1 text-sm text-purple-200"
                      >
                        {skill}
                      </span>
                    ))
                  ) : (
                    <p className={muted}>No skills listed yet.</p>
                  )}
                </div>
              </div>
            </section>

            <section className={`${panel} mt-6`}>
              <h2 className="text-xl font-semibold">Learning activity</h2>

              {courses.length > 0 ? (
                <div className="mt-4 space-y-3">
                  {courses.map((course, index) => (
                    <div
                      key={`${course.skill}-${index}`}
                      className="rounded-xl border border-slate-800 bg-slate-950 p-4"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="font-semibold">{course.skill}</h3>
                        <span className="text-sm text-purple-200">
                          {course.completed_lessons} lessons completed
                        </span>
                      </div>

                      <p className={`mt-2 ${muted}`}>
                        Current week: {course.current_week} · Current lesson:{" "}
                        {course.current_lesson}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className={`mt-3 ${muted}`}>
                  No saved course progress was found for this account.
                </p>
              )}
            </section>

            <section className={`${panel} mt-6`}>
              <h2 className="text-xl font-semibold">
                AI portfolio and project review
              </h2>

              <p className={`mt-2 ${muted}`}>
                Compare your portfolio with the requirements of{" "}
                <span className="font-semibold text-purple-200">
                  {selectedCareer || "your selected career"}
                </span>
                .
              </p>

              {!selectedCareer && (
                <div className="mt-4 rounded-xl border border-amber-700/60 bg-amber-950/30 p-4 text-sm text-amber-200">
                  Please select a career before running the AI review.
                </div>
              )}

              <button
                type="button"
                onClick={() => void runReview()}
                disabled={aiLoading || loading || !selectedCareer}
                className="mt-5 rounded-xl bg-blue-600 px-5 py-3 font-semibold hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {aiLoading
                  ? `AI is reviewing for ${selectedCareer}...`
                  : `Analyse ${selectedCareer || "My Portfolio"} with AI`}
              </button>

              {aiLoading && (
                <p className="mt-3 text-sm text-blue-200" role="status">
                  Reviewing your portfolio for {selectedCareer}. This may
                  take a little time.
                </p>
              )}

              {aiError && (
                <div
                  role="alert"
                  className="mt-4 rounded-xl border border-amber-700/60 bg-amber-950/30 p-4 text-sm text-amber-200"
                >
                  <p>{aiError}</p>
                  <p className="mt-2">
                    {review?.source === "rules"
                      ? "The rule-based fallback is shown below. It is not AI-generated."
                      : "A rule-based fallback will be shown if available."}
                  </p>
                </div>
              )}

              {shouldShowReview && review && (
                <div className="mt-6 space-y-6">
                  <div className="rounded-xl border border-purple-700/50 bg-purple-950/20 p-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-purple-300">
                      Analysis generated for
                    </p>
                    <p className="mt-2 text-2xl font-bold">{reviewCareer}</p>
                    <p className="mt-2 text-sm text-slate-400">
                      This result belongs to this career. Select another
                      career and run a new analysis to get different feedback.
                    </p>
                  </div>

                  {review.source === "ai" && (
                    <div className="rounded-xl border border-purple-700/50 bg-purple-950/20 p-5">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <h3 className="font-semibold text-purple-200">
                          AI Review Summary
                        </h3>
                        <span className="rounded-full border border-purple-500/40 px-3 py-1 text-xs text-purple-200">
                          AI-generated
                        </span>
                      </div>

                      <p className="mt-3 whitespace-pre-wrap leading-7 text-slate-300">
                        {review.summary ||
                          "The AI returned a review without an overall summary."}
                      </p>

                      {review.model && (
                        <p className="mt-3 text-xs text-slate-400">
                          Analysis model: {review.model}
                        </p>
                      )}
                    </div>
                  )}

                  {review.source === "rules" && (
                    <div className="rounded-xl border border-amber-700/50 bg-amber-950/20 p-4 text-sm text-amber-200">
                      This is a rule-based fallback review, not AI-generated
                      feedback.
                    </div>
                  )}

                  <div className="rounded-xl border border-slate-700 p-5">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <p className={muted}>
                          {review.source === "ai"
                            ? "AI-estimated portfolio presentation score"
                            : "Portfolio completeness"}
                        </p>
                        <p className="mt-2 text-4xl font-bold">
                          {review.score}/100
                        </p>
                      </div>

                      <span className="rounded-full bg-purple-500/10 px-3 py-2 text-sm text-purple-200">
                        {review.score >= 80
                          ? "Strong presentation"
                          : review.score >= 55
                            ? "Making progress"
                            : "More evidence needed"}
                      </span>
                    </div>

                    <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-800">
                      <div
                        className="h-full rounded-full bg-purple-500 transition-all"
                        style={{
                          width: `${Math.max(0, Math.min(100, review.score))}%`,
                        }}
                      />
                    </div>

                    <p className={`mt-3 ${muted}`}>
                      This score is an estimate based on the information
                      provided. It does not verify technical ability, inspect
                      your source code, or predict job readiness.
                    </p>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="rounded-xl border border-green-800/60 bg-green-950/20 p-5">
                      <h3 className="font-semibold text-green-300">Strengths</h3>
                      <ul className="mt-3 space-y-3 text-sm text-slate-300">
                        {review.strengths.length > 0 ? (
                          review.strengths.map((item, index) => (
                            <li key={`${item}-${index}`}>✓ {item}</li>
                          ))
                        ) : (
                          <li>
                            Complete your profile to identify its strengths.
                          </li>
                        )}
                      </ul>
                    </div>

                    <div className="rounded-xl border border-amber-800/60 bg-amber-950/20 p-5">
                      <h3 className="font-semibold text-amber-300">
                        Recommended improvements
                      </h3>
                      <ul className="mt-3 space-y-3 text-sm text-slate-300">
                        {review.suggestions.length > 0 ? (
                          review.suggestions.map((item, index) => (
                            <li key={`${item}-${index}`}>
                              {index + 1}. {item}
                            </li>
                          ))
                        ) : (
                          <li>
                            Continue improving the substance and evidence of
                            your work.
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>

                  {review.source === "ai" && review.careerAlignment && (
                    <section className="rounded-xl border border-indigo-800/60 bg-indigo-950/20 p-5">
                      <h3 className="text-lg font-semibold text-indigo-200">
                        Career Alignment
                      </h3>
                      <p className={`mt-1 ${muted}`}>
                        How your portfolio connects to{" "}
                        <strong className="text-indigo-200">
                          {selectedCareer}
                        </strong>
                        .
                      </p>

                      {review.careerAlignment.fitSummary && (
                        <div className="mt-5 rounded-xl bg-slate-950 p-4">
                          <p className="text-sm font-semibold text-slate-200">
                            Overall alignment
                          </p>
                          <p className="mt-2 text-sm leading-6 text-slate-400">
                            {review.careerAlignment.fitSummary}
                          </p>
                        </div>
                      )}

                      <div className="mt-5 grid gap-4 sm:grid-cols-2">
                        {(review.careerAlignment.matchedAreas?.length ?? 0) >
                          0 && (
                          <div className="rounded-xl border border-green-800/60 bg-green-950/20 p-4">
                            <h4 className="font-semibold text-green-300">
                              What already matches
                            </h4>
                            <ul className="mt-3 space-y-2 text-sm text-slate-300">
                              {review.careerAlignment.matchedAreas!.map(
                                (item, index) => (
                                  <li key={`${item}-${index}`}>✓ {item}</li>
                                )
                              )}
                            </ul>
                          </div>
                        )}

                        {(review.careerAlignment.gaps?.length ?? 0) > 0 && (
                          <div className="rounded-xl border border-amber-800/60 bg-amber-950/20 p-4">
                            <h4 className="font-semibold text-amber-300">
                              Career gaps
                            </h4>
                            <ul className="mt-3 space-y-2 text-sm text-slate-300">
                              {review.careerAlignment.gaps!.map(
                                (item, index) => (
                                  <li key={`${item}-${index}`}>• {item}</li>
                                )
                              )}
                            </ul>
                          </div>
                        )}
                      </div>
                    </section>
                  )}

                  <section className="rounded-xl border border-slate-800 p-5">
                    <h3 className="font-semibold">Skills and career alignment</h3>
                    <p className={`mt-2 ${muted}`}>
                      Selected career:{" "}
                      <strong className="text-purple-200">
                        {selectedCareer}
                      </strong>
                    </p>

                    {review.skillMatches.length > 0 ? (
                      <div className="mt-4">
                        <p className="text-sm text-green-300">
                          Skills that may match this career
                        </p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {review.skillMatches.map((skill, index) => (
                            <span
                              key={`${skill}-${index}`}
                              className="rounded-full bg-green-950 px-3 py-1 text-sm text-green-200"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <p className={`mt-3 ${muted}`}>
                        No matching skills were returned. Add skills you
                        have genuinely learned and compare them with this
                        career's requirements.
                      </p>
                    )}

                    {review.missingSkills.length > 0 && (
                      <div className="mt-5">
                        <h4 className="text-sm font-semibold text-amber-200">
                          Skills or evidence to consider developing
                        </h4>
                        <ul className="mt-3 space-y-2 text-sm text-slate-300">
                          {review.missingSkills.map((skill, index) => (
                            <li key={`${skill}-${index}`}>• {skill}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <p className="mt-4 text-sm text-slate-400">
                      These recommendations are associated with{" "}
                      {selectedCareer}.
                    </p>
                  </section>

                  {review.source === "ai" && review.learningProgress && (
                    <section className="rounded-xl border border-cyan-800/60 bg-cyan-950/20 p-5">
                      <h3 className="text-lg font-semibold text-cyan-200">
                        Learning Progress Analysis
                      </h3>
                      <p className={`mt-1 ${muted}`}>
                        Learning progress for{" "}
                        <strong className="text-cyan-200">
                          {selectedCareer}
                        </strong>
                        .
                      </p>

                      {review.learningProgress.summary && (
                        <div className="mt-5 rounded-xl bg-slate-950 p-4">
                          <p className="text-sm font-semibold text-slate-200">
                            Current learning status
                          </p>
                          <p className="mt-2 text-sm leading-6 text-slate-400">
                            {review.learningProgress.summary}
                          </p>
                        </div>
                      )}

                      <div className="mt-5 grid gap-4 sm:grid-cols-2">
                        {(review.learningProgress.usefulLearning?.length ??
                          0) > 0 && (
                          <div className="rounded-xl border border-green-800/60 bg-green-950/20 p-4">
                            <h4 className="font-semibold text-green-300">
                              Useful learning
                            </h4>
                            <ul className="mt-3 space-y-2 text-sm text-slate-300">
                              {review.learningProgress.usefulLearning!.map(
                                (item, index) => (
                                  <li key={`${item}-${index}`}>✓ {item}</li>
                                )
                              )}
                            </ul>
                          </div>
                        )}

                        {(review.learningProgress.nextLearningFocus?.length ??
                          0) > 0 && (
                          <div className="rounded-xl border border-cyan-800/60 bg-cyan-950/20 p-4">
                            <h4 className="font-semibold text-cyan-300">
                              What to learn next
                            </h4>
                            <ul className="mt-3 space-y-2 text-sm text-slate-300">
                              {review.learningProgress.nextLearningFocus!.map(
                                (item, index) => (
                                  <li key={`${item}-${index}`}>→ {item}</li>
                                )
                              )}
                            </ul>
                          </div>
                        )}
                      </div>
                    </section>
                  )}

                  <section className="rounded-xl border border-slate-800 p-5">
                    <h3 className="text-lg font-semibold">
                      Individual Project Reviews
                    </h3>
                    <p className={`mt-2 ${muted}`}>
                      Project clarity, technical details, and relevance to{" "}
                      <strong className="text-purple-200">
                        {selectedCareer}
                      </strong>
                      .
                    </p>

                    {review.projectResults.length > 0 ? (
                      <div className="mt-5 space-y-5">
                        {review.projectResults.map((project, index) => (
                          <article
                            key={`${project.title}-${index}`}
                            className="rounded-xl bg-slate-950 p-5"
                          >
                            <div className="flex flex-wrap items-center justify-between gap-3">
                              <h4 className="text-lg font-semibold">
                                {project.title}
                              </h4>
                              <span className="rounded-full bg-purple-500/10 px-3 py-1 text-sm text-purple-200">
                                {project.score}/100
                              </span>
                            </div>

                            <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-800">
                              <div
                                className="h-full rounded-full bg-blue-500"
                                style={{
                                  width: `${Math.max(
                                    0,
                                    Math.min(100, project.score)
                                  )}%`,
                                }}
                              />
                            </div>

                            {project.careerRelevance && (
                              <div className="mt-4 rounded-xl border border-purple-800/50 bg-purple-950/20 p-4">
                                <p className="text-sm font-semibold text-purple-200">
                                  Career relevance for {selectedCareer}
                                </p>
                                <p className="mt-2 text-sm leading-6 text-slate-400">
                                  {project.careerRelevance}
                                </p>
                              </div>
                            )}

                            {review.source === "ai" && (
                              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                                <InfoBox
                                  title="Problem clarity"
                                  text={project.problemClarity}
                                />
                                <InfoBox
                                  title="Solution clarity"
                                  text={project.solutionClarity}
                                />
                                <InfoBox
                                  title="Technology assessment"
                                  text={project.technologyAssessment}
                                />
                                <InfoBox
                                  title="Your contribution"
                                  text={project.contributionEvidence}
                                />
                                <InfoBox
                                  title="Evidence quality"
                                  text={project.evidenceQuality}
                                />
                              </div>
                            )}

                            {project.strengths.length > 0 && (
                              <div className="mt-5">
                                <h5 className="text-sm font-semibold text-green-300">
                                  Strengths
                                </h5>
                                <ul className="mt-2 space-y-2 text-sm text-slate-300">
                                  {project.strengths.map((item, i) => (
                                    <li key={`${item}-${i}`}>✓ {item}</li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {project.suggestions.length > 0 && (
                              <div className="mt-5">
                                <h5 className="text-sm font-semibold text-amber-200">
                                  Improvements
                                </h5>
                                <ul className="mt-2 space-y-2 text-sm text-slate-300">
                                  {project.suggestions.map((item, i) => (
                                    <li key={`${item}-${i}`}>• {item}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </article>
                        ))}
                      </div>
                    ) : (
                      <p className={`mt-4 ${muted}`}>
                        No saved projects were found. Add a project on your
                        Portfolio page, save it, and refresh this review.
                      </p>
                    )}
                  </section>

                  {review.actionPlan && review.actionPlan.length > 0 && (
                    <section className="rounded-xl border border-blue-800/60 bg-blue-950/20 p-5">
                      <h3 className="text-lg font-semibold text-blue-200">
                        Your Priority Action Plan
                      </h3>
                      <p className={`mt-2 ${muted}`}>
                        Practical recommendations for {selectedCareer}.
                      </p>

                      <div className="mt-5 space-y-4">
                        {review.actionPlan.map((item, index) => (
                          <div
                            key={`${item.task}-${index}`}
                            className="rounded-xl bg-slate-950 p-4"
                          >
                            <div className="flex flex-wrap items-center gap-2">
                              <h4 className="font-medium">
                                {index + 1}. {item.task}
                              </h4>
                              <span
                                className={`rounded-full px-2 py-1 text-xs ${
                                  item.priority.toLowerCase().includes("high")
                                    ? "bg-red-500/10 text-red-200"
                                    : item.priority.toLowerCase().includes("low")
                                      ? "bg-slate-700 text-slate-300"
                                      : "bg-blue-500/10 text-blue-200"
                                }`}
                              >
                                {item.priority} priority
                              </span>
                            </div>
                            <p className="mt-2 text-sm leading-6 text-slate-400">
                              {item.reason}
                            </p>
                          </div>
                        ))}
                      </div>

                      <p className="mt-4 text-xs text-slate-500">
                        These are recommendations only. They are not
                        automatically added to your weekly tasks, so this
                        review will not create duplicate tasks.
                      </p>
                    </section>
                  )}

                  <div className="flex flex-wrap gap-3">
                    <Link
                      href={portfolioLink}
                      className="rounded-xl bg-purple-600 px-5 py-3 font-semibold hover:bg-purple-500"
                    >
                      Improve My Portfolio
                    </Link>

                    <button
                      type="button"
                      onClick={() => void runReview()}
                      disabled={aiLoading || !selectedCareer}
                      className="rounded-xl border border-slate-700 px-5 py-3 font-semibold hover:bg-slate-800 disabled:opacity-50"
                    >
                      Analyse Again
                    </button>
                  </div>
                </div>
              )}

              {!shouldShowReview && !aiLoading && review && (
                <div className="mt-6 rounded-xl border border-amber-700/60 bg-amber-950/30 p-4 text-sm text-amber-200">
                  This result belongs to another career and has been hidden.
                  Analyse again for <strong>{selectedCareer}</strong>.
                </div>
              )}
            </section>
          </>
        )}
      </div>
    </main>
  );
}

/*
 * Next.js requires a Suspense boundary around components that use
 * useSearchParams() during static prerendering.
 */
export default function PortfolioReviewPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-slate-950 px-4 py-8 text-white sm:px-8">
          <div className="mx-auto max-w-6xl rounded-2xl border border-slate-800 bg-slate-900 p-6">
            Loading portfolio review...
          </div>
        </main>
      }
    >
      <PortfolioReviewContent />
    </Suspense>
  );
}
