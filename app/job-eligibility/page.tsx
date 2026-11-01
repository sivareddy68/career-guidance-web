
"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

// ==================================================
// TYPES
// ==================================================

type AcademicDetails = {
  qualification: string;
  branch: string;
  institution: string;
  graduation_year: string;
  percentage_or_cgpa: string;
  score_type: "Percentage" | "CGPA";
};

type Education = {
  qualification: string;
  institution: string;
  branch: string;
  percentage_or_cgpa: string;
  graduation_year: string;
  score_type: "Percentage" | "CGPA";
};

type Project = {
  title: string;
  description: string;
  technologies: string[];
  link: string;
};

type JobResume = {
  name: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  professional_summary: string;
  career_objective: string;
  education: Education[];
  projects: Project[];
  skills: string[];
  career_profile?: {
    career_goal: string;
    career_status: string;
    career_development_focus: string[];
  };
  interests: string[];
};

// ==================================================
// SKILL DICTIONARY
// ==================================================

const SKILL_DICTIONARY = [
  { name: "Python", aliases: ["python"] },
  { name: "Java", aliases: ["java"] },
  { name: "JavaScript", aliases: ["javascript", "js"] },
  { name: "TypeScript", aliases: ["typescript", "ts"] },
  { name: "C", aliases: ["language c", "c programming"] },
  { name: "C++", aliases: ["c++", "cpp"] },
  { name: "C#", aliases: ["c#"] },
  { name: "HTML", aliases: ["html", "html5"] },
  { name: "CSS", aliases: ["css", "css3"] },
  { name: "React.js", aliases: ["react.js", "react js", "react"] },
  { name: "Next.js", aliases: ["next.js", "next js"] },
  { name: "Node.js", aliases: ["node.js", "node js", "node"] },
  { name: "Express.js", aliases: ["express.js", "express js", "express"] },
  { name: "SQL", aliases: ["sql"] },
  { name: "PostgreSQL", aliases: ["postgresql", "postgres"] },
  { name: "MySQL", aliases: ["mysql"] },
  { name: "MongoDB", aliases: ["mongodb", "mongo db"] },
  { name: "Supabase", aliases: ["supabase"] },
  { name: "Firebase", aliases: ["firebase"] },
  { name: "FastAPI", aliases: ["fastapi", "fast api"] },
  { name: "Flask", aliases: ["flask"] },
  { name: "Django", aliases: ["django"] },
  { name: "REST APIs", aliases: ["rest api", "rest apis", "restful api"] },
  { name: "Git", aliases: ["git"] },
  { name: "GitHub", aliases: ["github", "git hub"] },
  { name: "Docker", aliases: ["docker"] },
  { name: "AWS", aliases: ["aws", "amazon web services"] },
  { name: "Azure", aliases: ["azure"] },
  { name: "Machine Learning", aliases: ["machine learning", "ml"] },
  {
    name: "Artificial Intelligence",
    aliases: ["artificial intelligence", "ai"],
  },
  { name: "Data Analytics", aliases: ["data analytics", "data analysis"] },
  { name: "Power BI", aliases: ["power bi"] },
  { name: "Tableau", aliases: ["tableau"] },
  { name: "Tailwind CSS", aliases: ["tailwind css", "tailwind"] },
  { name: "Bootstrap", aliases: ["bootstrap"] },
  { name: "Redux", aliases: ["redux"] },
  { name: "PHP", aliases: ["php"] },
  { name: "Kotlin", aliases: ["kotlin"] },
  { name: "Swift", aliases: ["swift"] },
  { name: "Go", aliases: ["golang"] },
  { name: "Linux", aliases: ["linux"] },
  { name: "Data Structures", aliases: ["data structures", "data structure"] },
  { name: "Algorithms", aliases: ["algorithms", "algorithm"] },
  { name: "Problem Solving", aliases: ["problem solving"] },
  { name: "Networking", aliases: ["computer networking", "networking"] },
  { name: "OOP", aliases: ["object oriented programming", "oop"] },
];

// ==================================================
// HELPERS
// ==================================================

function cleanText(value: any): string {
  if (typeof value !== "string") return "";
  return value.replace(/\s+/g, " ").trim();
}

function getValue(object: any, keys: string[]): string {
  if (!object || typeof object !== "object") return "";

  for (const key of keys) {
    const value = object[key];

    if (typeof value === "string" && value.trim()) {
      return value.trim();
    }

    if (typeof value === "number") {
      return String(value);
    }
  }

  return "";
}

function uniqueStrings(values: string[]): string[] {
  const seen = new Set<string>();

  return values
    .map(cleanText)
    .filter(Boolean)
    .filter((value) => {
      const key = value.toLowerCase();

      if (seen.has(key)) return false;

      seen.add(key);
      return true;
    });
}

function getScoreType(
  object: any
): "Percentage" | "CGPA" {
  if (getValue(object, ["cgpa", "gpa"])) {
    return "CGPA";
  }

  return "Percentage";
}

// ==================================================
// NORMALIZE SKILLS
// ==================================================

function normalizeSkills(value: any): string[] {
  if (!value) return [];

  if (Array.isArray(value)) {
    return uniqueStrings(
      value.flatMap((item) => normalizeSkills(item))
    );
  }

  if (typeof value !== "string") return [];

  const text = value.toLowerCase();
  const found: string[] = [];

  for (const skill of SKILL_DICTIONARY) {
    const terms = [skill.name.toLowerCase(), ...skill.aliases];

    const matched = terms.some((term) => {
      const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const regex = new RegExp(
        `(^|[^a-z0-9])${escaped}($|[^a-z0-9])`,
        "i"
      );

      return regex.test(text);
    });

    if (matched) found.push(skill.name);
  }

  if (found.length > 0) return uniqueStrings(found);

  return uniqueStrings(
    value
      .split(/[,;\n|]+/)
      .map((item) => item.trim())
      .filter(Boolean)
      .filter((item) => item.length <= 35)
  );
}

// ==================================================
// STUDENT SKILLS
// ==================================================

function getStudentSkills(profile: any, portfolio: any): string[] {
  const projectSkills: string[] = [];

  const projects = Array.isArray(portfolio?.projects)
    ? portfolio.projects
    : [];

  projects.forEach((project: any) => {
    projectSkills.push(
      ...normalizeSkills(project?.technologies),
      ...normalizeSkills(project?.tech_stack),
      ...normalizeSkills(project?.skills)
    );
  });

  return uniqueStrings([
    ...normalizeSkills(profile?.skills),
    ...normalizeSkills(portfolio?.skills),
    ...projectSkills,
  ]);
}

function getRequiredSkills(jobDescription: string): string[] {
  return normalizeSkills(jobDescription);
}

function getMissingSkills(
  requiredSkills: string[],
  studentSkills: string[]
): string[] {
  const existing = new Set(
    studentSkills.map((skill) => skill.toLowerCase())
  );

  return requiredSkills.filter(
    (skill) => !existing.has(skill.toLowerCase())
  );
}

// ==================================================
// EDUCATION
// ==================================================

function getEducation(profile: any): Education[] {
  const existing = Array.isArray(profile?.education)
    ? profile.education
    : [];

  if (existing.length > 0) {
    return existing.map((item: any) => {
      const scoreType = getScoreType(item);

      return {
        qualification: getValue(item, [
          "qualification",
          "degree",
          "course",
          "program",
        ]),
        institution: getValue(item, [
          "institution",
          "college",
          "university",
          "college_name",
        ]),
        branch: getValue(item, [
          "branch",
          "department",
          "specialization",
          "stream",
        ]),
        percentage_or_cgpa: getValue(item, [
          "percentage",
          "cgpa",
          "gpa",
          "marks",
        ]),
        graduation_year: getValue(item, [
          "graduation_year",
          "passing_year",
          "expected_graduation",
        ]),
        score_type: scoreType,
      };
    });
  }

  const scoreType = getScoreType(profile);

  const item: Education = {
    qualification: getValue(profile, [
      "qualification",
      "degree",
      "course",
    ]),
    institution: getValue(profile, [
      "institution",
      "college",
      "university",
      "college_name",
    ]),
    branch: getValue(profile, [
      "branch",
      "department",
      "specialization",
      "stream",
    ]),
    percentage_or_cgpa: getValue(profile, [
      "percentage",
      "cgpa",
      "gpa",
      "marks",
    ]),
    graduation_year: getValue(profile, [
      "graduation_year",
      "passout_year",
      "passing_year",
    ]),
    score_type: scoreType,
  };

  if (
    !Object.entries(item).some(
      ([key, value]) => key !== "score_type" && Boolean(value)
    )
  ) {
    return [];
  }

  return [item];
}

// ==================================================
// PROJECTS
// ==================================================

function getProjects(portfolio: any): Project[] {
  const existing = Array.isArray(portfolio?.projects)
    ? portfolio.projects
    : [];

  return existing
    .filter((project: any) => project && typeof project === "object")
    .map((project: any) => ({
      title: getValue(project, [
        "title",
        "name",
        "project_name",
        "projectName",
      ]),
      description: getValue(project, [
        "description",
        "details",
        "project_description",
        "about",
      ]),
      technologies: normalizeSkills(
        project?.technologies ||
          project?.tech_stack ||
          project?.skills
      ),
      link: getValue(project, [
        "link",
        "url",
        "project_link",
        "github",
      ]),
    }))
    .filter(
      (project: Project) =>
        project.title ||
        project.description ||
        project.technologies.length > 0
    );
}

// ==================================================
// API RESPONSE
// ==================================================

async function readApiResponse(response: Response): Promise<any> {
  const responseText = await response.text();

  let data: any;

  try {
    data = JSON.parse(responseText);
  } catch {
    throw new Error(
      `API returned an invalid response (HTTP ${response.status}).`
    );
  }

  if (!response.ok || data?.success === false) {
    throw new Error(
      data?.error ||
        data?.message ||
        `Request failed with status ${response.status}.`
    );
  }

  return data;
}

function cleanGeneratedText(value: any): string {
  return cleanText(value);
}

// ==================================================
// MAIN PAGE
// ==================================================

export default function JobEligibilityPage() {
  const [profile, setProfile] = useState<any>({});
  const [portfolio, setPortfolio] = useState<any>({});

  const [studentSkills, setStudentSkills] = useState<string[]>([]);
  const [jobDescription, setJobDescription] = useState("");

  const [loadingProfile, setLoadingProfile] = useState(true);
  const [generating, setGenerating] = useState(false);

  const [missingSkills, setMissingSkills] = useState<string[]>([]);
  const [requiredSkills, setRequiredSkills] = useState<string[]>([]);
  const [additionalSkills, setAdditionalSkills] = useState("");

  const [showSkillConfirmation, setShowSkillConfirmation] =
    useState(false);

  const [resume, setResume] = useState<JobResume | null>(null);

  const [error, setError] = useState("");
  const [resumeError, setResumeError] = useState("");

  // Academic input fields
  const [academicDetails, setAcademicDetails] =
    useState<AcademicDetails>({
      qualification: "",
      branch: "",
      institution: "",
      graduation_year: "",
      percentage_or_cgpa: "",
      score_type: "Percentage",
    });

  // Save resume states
  const [savingResume, setSavingResume] = useState(false);
  const [saveMessage, setSaveMessage] = useState("");
  const [saveError, setSaveError] = useState("");
  const [savedResumeId, setSavedResumeId] = useState<string | null>(
    null
  );

  // ==================================================
  // LOAD STUDENT INFORMATION
  // ==================================================

  useEffect(() => {
    loadStudentInformation();
  }, []);

  async function loadStudentInformation() {
    setLoadingProfile(true);
    setError("");

    try {
      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError || !user) {
        throw new Error("Please log in to generate your resume.");
      }

      const [profileResult, portfolioResult] = await Promise.all([
        supabase
          .from("student_profiles")
          .select("*")
          .eq("user_id", user.id)
          .maybeSingle(),

        supabase
          .from("student_portfolios")
          .select("*")
          .eq("user_id", user.id)
          .maybeSingle(),
      ]);

      if (profileResult.error) {
        throw new Error(profileResult.error.message);
      }

      if (portfolioResult.error) {
        throw new Error(portfolioResult.error.message);
      }

      const studentProfile = profileResult.data || {};
      const studentPortfolio = portfolioResult.data || {};

      setProfile(studentProfile);
      setPortfolio(studentPortfolio);

      setStudentSkills(
        getStudentSkills(studentProfile, studentPortfolio)
      );

      // Prefill academic input fields from Supabase.
      const education = getEducation(studentProfile);
      const firstEducation = education[0] || {};

      setAcademicDetails({
        qualification:
          firstEducation.qualification ||
          getValue(studentProfile, ["qualification", "degree", "course"]),

        branch:
          firstEducation.branch ||
          getValue(studentProfile, [
            "branch",
            "department",
            "specialization",
            "stream",
          ]),

        institution:
          firstEducation.institution ||
          getValue(studentProfile, [
            "institution",
            "college",
            "university",
            "college_name",
          ]),

        graduation_year:
          firstEducation.graduation_year ||
          getValue(studentProfile, [
            "graduation_year",
            "passout_year",
            "passing_year",
          ]),

        percentage_or_cgpa:
          firstEducation.percentage_or_cgpa ||
          getValue(studentProfile, [
            "percentage",
            "cgpa",
            "gpa",
            "marks",
          ]),

        score_type:
          getValue(studentProfile, ["cgpa", "gpa"]) ||
          getValue(firstEducation, ["cgpa", "gpa"])
            ? "CGPA"
            : "Percentage",
      });
    } catch (err: any) {
      console.error("Student profile loading error:", err);

      setError(
        err.message ||
          "Unable to load your student information."
      );
    } finally {
      setLoadingProfile(false);
    }
  }

  // ==================================================
  // UPDATE ACADEMIC INPUT
  // ==================================================

  function updateAcademicField(
    field: keyof AcademicDetails,
    value: string
  ) {
    setAcademicDetails((previous) => ({
      ...previous,
      [field]: value,
    }));

    // Require a new resume if academic information changes.
    setResume(null);
    setSavedResumeId(null);
    setSaveMessage("");
    setSaveError("");
    setResumeError("");
  }

  // ==================================================
  // GENERATE RESUME
  // ==================================================

  async function generateResume(confirmedSkills: string[]) {
    setGenerating(true);
    setResumeError("");
    setResume(null);

    setSaveMessage("");
    setSaveError("");
    setSavedResumeId(null);

    try {
      const normalizedAcademic: AcademicDetails = {
        qualification: cleanText(academicDetails.qualification),
        branch: cleanText(academicDetails.branch),
        institution: cleanText(academicDetails.institution),
        graduation_year: cleanText(academicDetails.graduation_year),
        percentage_or_cgpa: cleanText(
          academicDetails.percentage_or_cgpa
        ),
        score_type: academicDetails.score_type,
      };

      const education: Education[] = [
        {
          ...normalizedAcademic,
        },
      ].filter((item) =>
        Object.entries(item).some(
          ([key, value]) =>
            key !== "score_type" && Boolean(value)
        )
      );

      const projects = getProjects(portfolio);

      const normalizedProfile = {
        ...profile,
        skills: studentSkills.join(", "),
        education,
        qualification: normalizedAcademic.qualification,
        branch: normalizedAcademic.branch,
        department: normalizedAcademic.branch,
        institution: normalizedAcademic.institution,
        graduation_year: normalizedAcademic.graduation_year,
        percentage:
          normalizedAcademic.score_type === "Percentage"
            ? normalizedAcademic.percentage_or_cgpa
            : "",
        cgpa:
          normalizedAcademic.score_type === "CGPA"
            ? normalizedAcademic.percentage_or_cgpa
            : "",
      };

      const normalizedPortfolio = {
        ...portfolio,
        skills: studentSkills.join(", "),
        projects: projects.map((project) => ({
          ...project,
          technologies: project.technologies.join(", "),
        })),
      };

      const response = await fetch("/api/job-specific-resume", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          profile: normalizedProfile,
          portfolio: normalizedPortfolio,
          skills: uniqueStrings([
            ...studentSkills,
            ...confirmedSkills,
          ]),
          additionalSkills: confirmedSkills,
          jobDescription,
          academicDetails: normalizedAcademic,
        }),
      });

      const data = await readApiResponse(response);

      if (!data.resume) {
        throw new Error(
          "The resume API did not return a resume."
        );
      }

      const result = data.resume;

      const finalResume: JobResume = {
        name:
          cleanText(result.name) ||
          getValue(profile, [
            "name",
            "full_name",
            "student_name",
          ]),

        email:
          cleanText(result.email) ||
          getValue(profile, ["email", "email_address"]),

        phone:
          cleanText(result.phone) ||
          getValue(profile, [
            "phone",
            "phone_number",
            "mobile",
          ]),

        location:
          cleanText(result.location) ||
          getValue(profile, ["location", "city", "address"]),

        linkedin:
          cleanText(result.linkedin) ||
          getValue(profile, ["linkedin", "linkedin_url"]),

        github:
          cleanText(result.github) ||
          getValue(profile, ["github", "github_url"]),

        professional_summary: cleanGeneratedText(
          result.professional_summary
        ),

        career_objective: cleanGeneratedText(
          result.career_objective
        ),

        // Use the student's entered academic details exactly.
        education,

        projects:
          Array.isArray(result.projects) &&
          result.projects.length > 0
            ? result.projects
            : projects,

        skills: uniqueStrings([
          ...normalizeSkills(result.skills),
          ...studentSkills,
          ...confirmedSkills,
        ]),

        career_profile: {
          career_goal: cleanGeneratedText(
            result.career_profile?.career_goal
          ),

          career_status:
            cleanGeneratedText(
              result.career_profile?.career_status
            ) || "Fresher",

          career_development_focus: Array.isArray(
            result.career_profile?.career_development_focus
          )
            ? result.career_profile.career_development_focus
                .map(cleanGeneratedText)
                .filter(Boolean)
                .slice(0, 3)
            : [],
        },

        interests: uniqueStrings([
          ...normalizeSkills(result.interests),
          ...normalizeSkills(profile?.interests),
          ...normalizeSkills(portfolio?.interests),
        ]),
      };

      setResume(finalResume);
      setShowSkillConfirmation(false);

      setTimeout(() => {
        document
          .getElementById("job-resume-preview")
          ?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
      }, 200);
    } catch (err: any) {
      console.error("Resume generation error:", err);

      setResumeError(
        err.message || "Unable to generate your resume."
      );
    } finally {
      setGenerating(false);
    }
  }

  // ==================================================
  // SAVE RESUME
  // ==================================================

  async function saveResume() {
    if (!resume || savingResume || savedResumeId) return;

    setSavingResume(true);
    setSaveMessage("");
    setSaveError("");

    try {
      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError || !user) {
        throw new Error(
          "Please log in again to save your resume."
        );
      }

      const resumeTitle = `${
        resume.name || "My"
      } - Job-Specific Resume`;

      const { data, error: insertError } = await supabase
        .from("resumes")
        .insert({
          user_id: user.id,
          title: resumeTitle,
          resume_type: "job-specific",
          resume_data: {
            ...resume,
            academic_details: academicDetails,
            job_description: jobDescription,
            required_skills: requiredSkills,
            missing_skills: missingSkills,
            confirmed_additional_skills:
              normalizeSkills(additionalSkills),
          },
        })
        .select("id")
        .single();

      if (insertError) {
        throw new Error(insertError.message);
      }

      setSavedResumeId(data.id);
      setSaveMessage("Resume saved successfully!");
    } catch (err: any) {
      console.error("Save resume error:", err);

      setSaveError(
        err.message ||
          "Unable to save your resume. Please try again."
      );
    } finally {
      setSavingResume(false);
    }
  }

  // ==================================================
  // ANALYZE JOB DESCRIPTION
  // ==================================================

  function handleGenerateClick() {
    setError("");
    setResumeError("");
    setResume(null);

    setSaveMessage("");
    setSaveError("");
    setSavedResumeId(null);

    if (!jobDescription.trim()) {
      setError("Please paste the job description first.");
      return;
    }

    if (jobDescription.trim().length < 30) {
      setError("Please paste a complete job description.");
      return;
    }

    if (
      !academicDetails.qualification.trim() ||
      !academicDetails.branch.trim()
    ) {
      setError(
        "Please enter your degree and branch before generating your resume."
      );
      return;
    }

    const detectedSkills = getRequiredSkills(jobDescription);

    const missing = getMissingSkills(
      detectedSkills,
      studentSkills
    );

    setRequiredSkills(detectedSkills);
    setMissingSkills(missing);
    setAdditionalSkills("");
    setShowSkillConfirmation(true);

    if (missing.length === 0) {
      generateResume([]);
    } else {
      setTimeout(() => {
        document
          .getElementById("missing-skills-panel")
          ?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
      }, 100);
    }
  }

  // ==================================================
  // CONFIRM SKILLS
  // ==================================================

  function confirmSkillsAndGenerate() {
    const confirmed = normalizeSkills(additionalSkills);
    generateResume(confirmed);
  }

  // ==================================================
  // DOWNLOAD PDF
  // ==================================================

  function downloadResume() {
    if (!resume) return;
    window.print();
  }

  // ==================================================
  // RESET
  // ==================================================

  function resetPage() {
    setJobDescription("");
    setAdditionalSkills("");
    setRequiredSkills([]);
    setMissingSkills([]);
    setShowSkillConfirmation(false);
    setResume(null);
    setError("");
    setResumeError("");

    setSaveMessage("");
    setSaveError("");
    setSavedResumeId(null);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  // ==================================================
  // UI
  // ==================================================

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-white sm:px-6 lg:px-10">
      <style jsx global>{`
        @media print {
          body {
            background: white !important;
            color: black !important;
          }

          body * {
            visibility: hidden !important;
          }

          #job-resume-preview,
          #job-resume-preview * {
            visibility: visible !important;
          }

          #job-resume-preview {
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            width: 100% !important;
            margin: 0 !important;
            padding: 10px !important;
            background: white !important;
            color: black !important;
            border: none !important;
            box-shadow: none !important;
          }

          #job-resume-preview h1,
          #job-resume-preview h2,
          #job-resume-preview h3,
          #job-resume-preview p,
          #job-resume-preview li,
          #job-resume-preview span {
            color: black !important;
          }

          .no-print {
            display: none !important;
          }

          @page {
            size: A4;
            margin: 12mm;
          }
        }
      `}</style>

      <div className="mx-auto max-w-5xl">
        {/* HEADER */}

        <div className="mb-8 no-print">
          <a
            href="/"
            className="mb-5 inline-flex text-sm text-slate-400 hover:text-white"
          >
            ← Back to Dashboard
          </a>

          <div className="rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-950/50 to-slate-900 p-6 sm:p-8">
            <span className="rounded-full border border-purple-400/20 bg-purple-500/10 px-3 py-1 text-xs text-purple-300">
              AI Career Assistant
            </span>

            <h1 className="mt-4 text-3xl font-bold sm:text-4xl">
              Job-Specific Resume Generator
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
              Enter your academic details, paste a job description,
              and generate a resume based on your actual education,
              skills and projects.
            </p>
          </div>
        </div>

        {/* PROFILE STATUS */}

        <section className="mb-6 rounded-2xl border border-slate-800 bg-slate-900 p-5 no-print">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h2 className="font-semibold">Your student profile</h2>
              <p className="mt-1 text-xs text-slate-400">
                Your information is loaded from Supabase.
              </p>
            </div>

            <span
              className={`rounded-full px-3 py-1 text-xs ${
                loadingProfile
                  ? "bg-amber-500/10 text-amber-300"
                  : error
                    ? "bg-red-500/10 text-red-300"
                    : "bg-emerald-500/10 text-emerald-300"
              }`}
            >
              {loadingProfile
                ? "Loading..."
                : error
                  ? "Check profile"
                  : "Loaded"}
            </span>
          </div>

          {!loadingProfile && (
            <div className="mt-4 rounded-xl bg-slate-800/60 p-3">
              <p className="text-xs text-slate-400">
                Skills found in your profile
              </p>

              <div className="mt-2 flex flex-wrap gap-2">
                {studentSkills.length > 0 ? (
                  studentSkills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-1.5 text-xs text-slate-200"
                    >
                      {skill}
                    </span>
                  ))
                ) : (
                  <p className="text-sm text-amber-300">
                    No skills found in your profile.
                  </p>
                )}
              </div>
            </div>
          )}
        </section>

        {/* ACADEMIC DETAILS */}

        <section className="mb-6 rounded-2xl border border-purple-500/30 bg-slate-900 p-5 sm:p-7 no-print">
          <span className="text-xs font-semibold uppercase tracking-wider text-purple-400">
            Step 1
          </span>

          <h2 className="mt-2 text-xl font-bold">
            Your Academic Details
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-400">
            Check and correct your academic information. The AI
            will use these details exactly as entered.
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium">
                Degree *
              </label>

              <input
                value={academicDetails.qualification}
                onChange={(e) =>
                  updateAcademicField(
                    "qualification",
                    e.target.value
                  )
                }
                placeholder="Example: B.Tech"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Department / Branch *
              </label>

              <input
                value={academicDetails.branch}
                onChange={(e) =>
                  updateAcademicField("branch", e.target.value)
                }
                placeholder="Example: Electronics and Communication Engineering (ECE)"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm outline-none focus:border-purple-500"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm font-medium">
                College / University
              </label>

              <input
                value={academicDetails.institution}
                onChange={(e) =>
                  updateAcademicField(
                    "institution",
                    e.target.value
                  )
                }
                placeholder="Enter your college or university"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Graduation Year
              </label>

              <input
                value={academicDetails.graduation_year}
                onChange={(e) =>
                  updateAcademicField(
                    "graduation_year",
                    e.target.value
                  )
                }
                placeholder="Example: 2028"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm outline-none focus:border-purple-500"
              />
            </div>

            {/* ACADEMIC SCORE TYPE AND VALUE */}

            <div>
              <label className="mb-2 block text-sm font-medium">
                Academic Score
              </label>

              <select
                value={academicDetails.score_type}
                onChange={(e) =>
                  updateAcademicField(
                    "score_type",
                    e.target.value as "Percentage" | "CGPA"
                  )
                }
                className="mb-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm outline-none focus:border-purple-500"
              >
                <option value="Percentage">
                  Percentage (%)
                </option>
                <option value="CGPA">
                  CGPA
                </option>
              </select>

              <input
                value={academicDetails.percentage_or_cgpa}
                onChange={(e) =>
                  updateAcademicField(
                    "percentage_or_cgpa",
                    e.target.value
                  )
                }
                placeholder={
                  academicDetails.score_type === "Percentage"
                    ? "Example: 80"
                    : "Example: 8.0"
                }
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm outline-none focus:border-purple-500"
              />
            </div>
          </div>

          <p className="mt-4 text-xs text-slate-500">
            * Degree and branch are required. Other fields can be
            completed when available.
          </p>
        </section>

        {/* JOB DESCRIPTION */}

        <section className="rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-xl sm:p-7 no-print">
          <span className="text-xs font-semibold uppercase tracking-wider text-purple-400">
            Step 2
          </span>

          <h2 className="mt-2 text-xl font-bold">
            Paste the Job Description
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-400">
            Copy the complete job description from the company's
            website or placement notification.
          </p>

          <textarea
            value={jobDescription}
            onChange={(e) => {
              setJobDescription(e.target.value);
              setShowSkillConfirmation(false);
              setResume(null);
              setError("");
              setResumeError("");
              setSaveMessage("");
              setSaveError("");
              setSavedResumeId(null);
            }}
            placeholder={`Paste the complete job description here...

Example:
Junior Python Developer

Required Skills:
Python, SQL, HTML, CSS, REST APIs, FastAPI, Git...`}
            rows={12}
            maxLength={20000}
            className="mt-5 w-full resize-y rounded-xl border border-slate-700 bg-slate-950 p-4 text-sm leading-6 text-white outline-none placeholder:text-slate-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
          />

          <div className="mt-2 flex justify-between text-xs text-slate-500">
            <span>Maximum 20,000 characters</span>
            <span>{jobDescription.length}/20,000</span>
          </div>

          {error && (
            <div className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-300">
              {error}
            </div>
          )}

          <button
            onClick={handleGenerateClick}
            disabled={loadingProfile || generating}
            className="mt-6 w-full rounded-xl bg-purple-600 px-5 py-3.5 font-semibold text-white transition hover:bg-purple-500 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
          >
            {generating
              ? "Generating Resume..."
              : "✦ Analyze & Generate Resume"}
          </button>
        </section>

        {/* SKILL CONFIRMATION */}

        {showSkillConfirmation &&
          missingSkills.length > 0 &&
          !resume && (
            <section
              id="missing-skills-panel"
              className="mt-7 rounded-2xl border border-amber-500/30 bg-slate-900 p-5 sm:p-7 no-print"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                Step 3
              </span>

              <h2 className="mt-2 text-xl font-bold">
                Review the Missing Skills
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                These skills were found in the job description but
                were not found in your current profile.
              </p>

              <h3 className="mt-5 text-sm font-semibold">
                Required job skills
              </h3>

              <div className="mt-3 flex flex-wrap gap-2">
                {requiredSkills.map((skill) => (
                  <span
                    key={skill}
                    className={`rounded-lg px-3 py-2 text-xs ${
                      studentSkills.some(
                        (item) =>
                          item.toLowerCase() === skill.toLowerCase()
                      )
                        ? "bg-emerald-500/10 text-emerald-300"
                        : "bg-amber-500/10 text-amber-300"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-6 rounded-xl border border-amber-500/20 bg-amber-500/5 p-4">
                <h3 className="font-semibold text-amber-300">
                  Skills not currently in your profile
                </h3>

                <div className="mt-3 flex flex-wrap gap-2">
                  {missingSkills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-amber-500/20 bg-slate-950 px-3 py-2 text-xs text-amber-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <label className="mb-2 block text-sm font-semibold">
                  Additional skills you actually know
                </label>

                <p className="mb-3 text-xs leading-5 text-slate-400">
                  Enter only skills you genuinely know. Leave this
                  field empty if you do not know any of them.
                </p>

                <textarea
                  value={additionalSkills}
                  onChange={(e) =>
                    setAdditionalSkills(e.target.value)
                  }
                  rows={3}
                  placeholder="Example: FastAPI, REST APIs, Git"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4 text-sm text-white outline-none placeholder:text-slate-600 focus:border-purple-500"
                />
              </div>

              <button
                onClick={confirmSkillsAndGenerate}
                disabled={generating}
                className="mt-6 w-full rounded-xl bg-emerald-600 px-5 py-3.5 font-semibold text-white transition hover:bg-emerald-500 disabled:opacity-50"
              >
                {generating
                  ? "Generating Your Resume..."
                  : "Continue & Generate Resume"}
              </button>
            </section>
          )}

        {/* GENERATING */}

        {generating && (
          <div className="mt-6 rounded-2xl border border-purple-500/20 bg-purple-500/5 p-6 text-center no-print">
            <div className="mx-auto mb-3 h-8 w-8 animate-spin rounded-full border-4 border-purple-500/20 border-t-purple-400" />

            <h3 className="font-semibold">
              Creating your resume
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              Preparing your academic details, skills, projects
              and professional summary.
            </p>
          </div>
        )}

        {/* RESUME ERROR */}

        {resumeError && (
          <div className="mt-6 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300 no-print">
            {resumeError}
          </div>
        )}

        {/* RESUME PREVIEW */}

        {resume && (
          <section className="mt-8">
            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between no-print">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                  Resume generated
                </span>

                <h2 className="mt-2 text-2xl font-bold">
                  Your Professional Resume
                </h2>

                <p className="mt-2 text-sm text-slate-400">
                  Check your academic details and resume before
                  saving or downloading.
                </p>
              </div>

              <button
                onClick={downloadResume}
                className="rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white hover:bg-emerald-500"
              >
                ↓ Download Resume PDF
              </button>
            </div>

            {/* RESUME DOCUMENT */}

            <div
              id="job-resume-preview"
              className="mx-auto max-w-4xl rounded-xl border border-slate-300 bg-white p-6 text-slate-900 shadow-2xl sm:p-10"
            >
              {/* NAME */}

              <div className="border-b-2 border-slate-800 pb-4">
                <h1 className="text-3xl font-bold uppercase tracking-wide text-slate-900">
                  {resume.name}
                </h1>
              </div>

              {/* PROFESSIONAL SUMMARY */}

              {resume.professional_summary && (
                <div className="mt-5">
                  <h2 className="border-b border-slate-400 pb-1 text-sm font-bold uppercase tracking-wider text-slate-900">
                    Professional Summary
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-slate-800">
                    {resume.professional_summary}
                  </p>
                </div>
              )}

              {/* CONTACT DETAILS */}

              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-700">
                {resume.email && <span>{resume.email}</span>}

                {academicDetails.graduation_year && (
                  <span>
                    Graduation: {academicDetails.graduation_year}
                  </span>
                )}

                {resume.phone && <span>{resume.phone}</span>}
                {resume.location && <span>{resume.location}</span>}
              </div>

              {(resume.linkedin || resume.github) && (
                <div className="mt-2 flex flex-wrap gap-4 text-xs text-blue-700">
                  {resume.linkedin && (
                    <a href={resume.linkedin}>{resume.linkedin}</a>
                  )}

                  {resume.github && (
                    <a href={resume.github}>{resume.github}</a>
                  )}
                </div>
              )}

              {/* CAREER OBJECTIVE */}

              {resume.career_objective && (
                <div className="mt-5">
                  <h2 className="border-b border-slate-400 pb-1 text-sm font-bold uppercase tracking-wider text-slate-900">
                    Career Objective
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-slate-800">
                    {resume.career_objective}
                  </p>
                </div>
              )}

              {/* EDUCATION */}

              {resume.education.length > 0 && (
                <div className="mt-5">
                  <h2 className="border-b border-slate-400 pb-1 text-sm font-bold uppercase tracking-wider text-slate-900">
                    Education
                  </h2>

                  <div className="mt-3 space-y-3">
                    {resume.education.map((item, index) => (
                      <div key={index}>
                        {item.qualification && (
                          <h3 className="text-sm font-bold text-slate-900">
                            {item.qualification}
                          </h3>
                        )}

                        {item.branch && (
                          <p className="text-sm text-slate-800">
                            {item.branch}
                          </p>
                        )}

                        {item.institution && (
                          <p className="text-sm text-slate-800">
                            {item.institution}
                          </p>
                        )}

                        <div className="mt-1 flex flex-wrap gap-4 text-xs text-slate-600">
                          {item.percentage_or_cgpa && (
                            <span>
                              {item.score_type === "Percentage"
                                ? `Percentage: ${item.percentage_or_cgpa.replace(/%$/, "")}%`
                                : `CGPA: ${item.percentage_or_cgpa}`}
                            </span>
                          )}

                          {item.graduation_year && (
                            <span>
                              Graduation: {item.graduation_year}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* PROJECTS */}

              {resume.projects.length > 0 && (
                <div className="mt-5">
                  <h2 className="border-b border-slate-400 pb-1 text-sm font-bold uppercase tracking-wider text-slate-900">
                    Projects
                  </h2>

                  <div className="mt-3 space-y-4">
                    {resume.projects.map((project, index) => (
                      <div key={index}>
                        {project.title && (
                          <h3 className="text-sm font-bold text-slate-900">
                            {project.title}
                          </h3>
                        )}

                        {project.description && (
                          <p className="mt-1 text-sm leading-6 text-slate-800">
                            {project.description}
                          </p>
                        )}

                        {project.technologies.length > 0 && (
                          <p className="mt-1 text-xs leading-5 text-slate-700">
                            <strong>Technologies:</strong>{" "}
                            {project.technologies.join(", ")}
                          </p>
                        )}

                        {project.link && (
                          <p className="mt-1 break-all text-xs text-blue-700">
                            {project.link}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SKILLS */}

              {resume.skills.length > 0 && (
                <div className="mt-5">
                  <h2 className="border-b border-slate-400 pb-1 text-sm font-bold uppercase tracking-wider text-slate-900">
                    Skills
                  </h2>

                  <ul className="mt-3 grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-slate-800 sm:grid-cols-3">
                    {resume.skills.map((skill, index) => (
                      <li key={`${skill}-${index}`} className="list-disc pl-1">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CAREER PROFILE */}

              {resume.career_profile && (
                <div className="mt-5">
                  <h2 className="border-b border-slate-400 pb-1 text-sm font-bold uppercase tracking-wider text-slate-900">
                    Career Profile
                  </h2>

                  <div className="mt-3 space-y-3 text-sm text-slate-800">
                    {resume.career_profile.career_goal && (
                      <div>
                        <h3 className="font-bold">Career Goal</h3>
                        <p className="mt-1 leading-6">
                          {resume.career_profile.career_goal}
                        </p>
                      </div>
                    )}

                    {resume.career_profile.career_status && (
                      <div>
                        <h3 className="font-bold">Career Status</h3>
                        <p className="mt-1">
                          {resume.career_profile.career_status}
                        </p>
                      </div>
                    )}

                    {resume.career_profile.career_development_focus
                      .length > 0 && (
                      <div>
                        <h3 className="font-bold">
                          Career Development Focus
                        </h3>

                        <ol className="mt-2 list-decimal space-y-1 pl-5">
                          {resume.career_profile.career_development_focus.map(
                            (item, index) => (
                              <li key={index}>{item}</li>
                            )
                          )}
                        </ol>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* INTERESTS */}

              {resume.interests.length > 0 && (
                <div className="mt-5">
                  <h2 className="border-b border-slate-400 pb-1 text-sm font-bold uppercase tracking-wider text-slate-900">
                    Interests
                  </h2>

                  <ul className="mt-2 grid grid-cols-2 gap-2 text-sm text-slate-800 sm:grid-cols-3">
                    {resume.interests.map((interest, index) => (
                      <li key={index}>• {interest}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* ACTION BUTTONS */}

            <div className="mt-5 flex flex-col gap-3 no-print sm:flex-row">
              <button
                onClick={saveResume}
                disabled={savingResume || !!savedResumeId}
                className="flex-1 rounded-xl bg-purple-600 px-5 py-3 font-semibold text-white transition hover:bg-purple-500 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {savingResume
                  ? "Saving Resume..."
                  : savedResumeId
                    ? "✓ Resume Saved"
                    : "Save Resume"}
              </button>

              <button
                onClick={downloadResume}
                className="flex-1 rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white hover:bg-emerald-500"
              >
                ↓ Download Resume PDF
              </button>

              <button
                onClick={resetPage}
                className="flex-1 rounded-xl border border-slate-700 px-5 py-3 font-medium text-slate-300 hover:border-purple-500 hover:text-white"
              >
                Create Another Resume
              </button>
            </div>

            {saveMessage && (
              <div className="mt-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-300 no-print">
                ✓ {saveMessage}
              </div>
            )}

            {saveError && (
              <div className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300 no-print">
                {saveError}
              </div>
            )}

            <p className="mt-4 text-xs leading-5 text-amber-300 no-print">
              Please check your academic details, skills and projects
              before submitting your resume to an employer.
            </p>
          </section>
        )}
      </div>
    </main>
  );
}
