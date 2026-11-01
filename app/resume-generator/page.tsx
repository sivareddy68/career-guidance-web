
"use client";

import { useEffect, useRef, useState } from "react";
import { supabase } from "@/lib/supabase";

type StudentProfile = {
  id?: string;
  user_id?: string;
  study_type?: string;
  study_year?: string | number;
  interests?: string[] | string;
  created_at?: string;
  selected_career?: string;
  name?: string;
  branch?: string;
  graduation_year?: string | number;
  skills?: string[] | string;
  career_status?: string;
  career_goal?: string;
  current_year?: string | number;
  onboarding_completed?: boolean;
  [key: string]: any;
};

type Project = {
  title?: string;
  description?: string;
  technologies?: string[] | string;
  link?: string;
};

type StudentPortfolio = {
  user_id?: string;
  name?: string;
  education?: string;
  career_goal?: string;
  about?: string;
  skills?: string[] | string;
  email?: string;
  projects?: Project[] | string;
  updated_at?: string;
};

type AIProject = {
  title?: string;
  description?: string;
  technologies?: string[];
  link?: string;
};

type AIResume = {
  professional_summary?: string;
  career_objective?: string;
  skills?: string[];
  projects?: AIProject[];
};

function convertToArray(
  value: string[] | string | undefined | null
): string[] {
  if (!value) return [];

  if (Array.isArray(value)) {
    return value
      .filter(Boolean)
      .map(String)
      .map((item) => item.trim())
      .filter(Boolean);
  }

  const trimmedValue = value.trim();
  if (!trimmedValue) return [];

  try {
    const parsed = JSON.parse(trimmedValue);

    if (Array.isArray(parsed)) {
      return parsed
        .filter(Boolean)
        .map(String)
        .map((item) => item.trim())
        .filter(Boolean);
    }
  } catch {
    // Continue with comma-separated text.
  }

  return trimmedValue
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function parseProjects(
  value: Project[] | string | undefined | null
): Project[] {
  if (!value) return [];

  if (Array.isArray(value)) return value;

  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export default function ResumeGeneratorPage() {
  const [loading, setLoading] = useState(true);
  const [generating, setGenerating] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [savingResume, setSavingResume] = useState(false);

  const [error, setError] = useState("");
  const [aiError, setAiError] = useState("");
  const [saveMessage, setSaveMessage] = useState("");
  const [saveError, setSaveError] = useState("");
  const [savedResumeId, setSavedResumeId] = useState<string | null>(null);

  const [profile, setProfile] = useState<StudentProfile | null>(null);
  const [portfolio, setPortfolio] = useState<StudentPortfolio | null>(null);

  const [skills, setSkills] = useState<string[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [aiResume, setAiResume] = useState<AIResume | null>(null);

  const resumeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loadResumeData();
  }, []);

  async function loadResumeData() {
    try {
      setLoading(true);
      setError("");
      setAiError("");
      setSaveMessage("");
      setSaveError("");
      setSavedResumeId(null);
      setAiResume(null);

      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError) throw authError;

      if (!user) {
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

      if (profileResult.error) throw profileResult.error;
      if (portfolioResult.error) throw portfolioResult.error;

      const profileData = profileResult.data as StudentProfile | null;
      const portfolioData = portfolioResult.data as StudentPortfolio | null;

      setProfile(profileData);
      setPortfolio(portfolioData);

      const profileSkills = convertToArray(profileData?.skills);
      const portfolioSkills = convertToArray(portfolioData?.skills);

      setSkills(
        Array.from(new Set([...profileSkills, ...portfolioSkills]))
      );

      setProjects(parseProjects(portfolioData?.projects));
    } catch (err: any) {
      console.error("Resume data error:", err);
      setError(err?.message || "Unable to load resume information.");
    } finally {
      setLoading(false);
    }
  }

  // ------------------------------------------------
  // AI RESUME GENERATION
  // ------------------------------------------------

 

async function generateAIResume() {
  try {
    setGenerating(true);
    setAiError("");
    setSaveMessage("");
    setSaveError("");
    setSavedResumeId(null);

    const response = await fetch("/api/resume-generator", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        profile,
        portfolio,
        projects,
        skills,
      }),
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(
        data.error || "Unable to generate AI resume."
      );
    }

    const cleanText = (value: unknown): string => {
      if (typeof value !== "string") return "";

      return value
        .replace(/```(?:json|markdown|text)?/gi, "")
        .replace(/```/g, "")
        .replace(/^\s*#+\s*/gm, "")
        .replace(/\*\*/g, "")
        .replace(/\*/g, "")
        .replace(/^\s*[-•]\s*/gm, "")
        .replace(/\n{3,}/g, "\n\n")
        .trim();
    };

    const resume = data.resume;

    if (!resume || typeof resume !== "object") {
      throw new Error("AI returned an invalid resume.");
    }

    const cleanedSummary = cleanText(
      resume.professional_summary
    );

    const cleanedObjective = cleanText(
      resume.career_objective
    );

    const cleanedSkills: string[] = Array.isArray(resume.skills)
      ? Array.from(
          new Set(
            resume.skills
              .filter((skill: unknown): skill is string =>
                typeof skill === "string"
              )
              .map((skill: string) => cleanText(skill))
              .filter(Boolean)
          )
        )
      : [];

    const cleanedProjects: AIProject[] = Array.isArray(resume.projects)
      ? resume.projects
          .filter(
            (project: any) =>
              project && typeof project === "object"
          )
          .map((project: any): AIProject => ({
            title: cleanText(project.title),
            description: cleanText(project.description),
            technologies: convertToArray(project.technologies),
            link:
              typeof project.link === "string"
                ? project.link.trim()
                : "",
          }))
          .filter(
            (project: AIProject) =>
              Boolean(
                project.title ||
                project.description ||
                project.technologies?.length
              )
          )
      : [];

    // Ensure fallback skills are always string[].
    const fallbackSkills: string[] = Array.isArray(skills)
      ? skills.filter(
          (skill): skill is string =>
            typeof skill === "string" && skill.trim().length > 0
        )
      : [];

    const fallbackProjects: AIProject[] = projects.map(
      (project): AIProject => ({
        title: project.title || "Project",
        description: project.description || "",
        technologies: convertToArray(project.technologies),
        link: project.link || "",
      })
    );

    const cleanedResume: AIResume = {
      professional_summary:
        cleanedSummary ||
        portfolio?.about ||
        "Aspiring professional interested in developing practical skills and building technology solutions.",

      career_objective: cleanedObjective,

      skills: cleanedSkills.length > 0
        ? cleanedSkills
        : fallbackSkills,

      projects: cleanedProjects.length > 0
        ? cleanedProjects
        : fallbackProjects,
    };

    setAiResume(cleanedResume);

  } catch (err: any) {
    console.error("AI resume generation error:", err);

    setAiError(
      err?.message || "AI resume generation failed."
    );
  } finally {
    setGenerating(false);
  }
}


  // ------------------------------------------------
  // SAVE RESUME TO SUPABASE
  // ------------------------------------------------

  async function saveResume() {
    if (savedResumeId) {
      setSaveMessage("This resume has already been saved.");
      return;
    }

    try {
      setSavingResume(true);
      setSaveMessage("");
      setSaveError("");

      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError) throw authError;

      if (!user) {
        throw new Error("Please log in before saving your resume.");
      }

      const resumeData = {
        name: studentName,
        email,
        career_goal: careerGoal,
        professional_summary: displaySummary,
        career_objective: careerObjective,
        education: {
          qualification: originalEducation,
          branch,
          study_type: studyType,
          graduation_year: graduationYear,
        },
        projects: displayProjects,
        skills: displaySkills,
        interests,
        profile,
        portfolio,
        resume_type: "general",
        generated_with_ai: Boolean(aiResume),
        saved_at: new Date().toISOString(),
      };

      const { data, error: insertError } = await supabase
        .from("resumes")
        .insert({
          user_id: user.id,
          title: `${studentName} - General Resume`,
          resume_type: "general",
          resume_data: resumeData,
        })
        .select("id")
        .single();

      if (insertError) throw insertError;

      setSavedResumeId(data.id);
      setSaveMessage("Resume saved successfully!");
    } catch (err: any) {
      console.error("Save resume error:", err);
      setSaveError(
        err?.message || "Unable to save your resume. Please try again."
      );
    } finally {
      setSavingResume(false);
    }
  }

  // ------------------------------------------------
  // PDF DOWNLOAD FUNCTION
  // ------------------------------------------------

  async function downloadPDF() {
    if (!resumeRef.current) {
      alert("Resume is not ready. Please try again.");
      return;
    }

    let clonedElement: HTMLElement | null = null;

    try {
      setDownloading(true);

      const [html2canvasModule, jsPDFModule] = await Promise.all([
        import("html2canvas-pro"),
        import("jspdf"),
      ]);

      const html2canvas = html2canvasModule.default;
      const { jsPDF } = jsPDFModule;

      if (!html2canvas || !jsPDF) {
        throw new Error("PDF libraries could not be loaded.");
      }

      const element = resumeRef.current;

      const safeName =
        studentName
          .trim()
          .replace(/[^a-zA-Z0-9]+/g, "-")
          .replace(/^-+|-+$/g, "") || "resume";

      clonedElement = element.cloneNode(true) as HTMLElement;

      clonedElement.style.width = "794px";
      clonedElement.style.minWidth = "794px";
      clonedElement.style.maxWidth = "794px";
      clonedElement.style.margin = "0";
      clonedElement.style.borderRadius = "0";
      clonedElement.style.boxShadow = "none";
      clonedElement.style.backgroundColor = "#ffffff";
      clonedElement.style.position = "fixed";
      clonedElement.style.left = "-10000px";
      clonedElement.style.top = "0";
      clonedElement.style.zIndex = "-1";
      clonedElement.style.overflow = "visible";

      document.body.appendChild(clonedElement);

      if (document.fonts?.ready) {
        await document.fonts.ready;
      }

      await new Promise<void>((resolve) => {
        requestAnimationFrame(() => resolve());
      });

      const canvas = await html2canvas(clonedElement, {
        scale: 2,
        useCORS: true,
        allowTaint: false,
        backgroundColor: "#ffffff",
        logging: false,
        scrollX: 0,
        scrollY: 0,
        windowWidth: 794,
        width: 794,
      });

      if (!canvas.width || !canvas.height) {
        throw new Error("Unable to generate the resume image.");
      }

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
        compress: true,
      });

      const pageWidth = 210;
      const pageHeight = 297;
      const pageHeightPixels = (canvas.width * pageHeight) / pageWidth;
      const totalPages = Math.ceil(canvas.height / pageHeightPixels);

      for (let page = 0; page < totalPages; page++) {
        const startY = Math.round(page * pageHeightPixels);

        const sliceHeight = Math.min(
          Math.ceil(pageHeightPixels),
          canvas.height - startY
        );

        if (sliceHeight <= 0) continue;

        const pageCanvas = document.createElement("canvas");
        pageCanvas.width = canvas.width;
        pageCanvas.height = sliceHeight;

        const context = pageCanvas.getContext("2d");

        if (!context) {
          throw new Error("Unable to process PDF page.");
        }

        context.fillStyle = "#ffffff";
        context.fillRect(0, 0, pageCanvas.width, pageCanvas.height);

        context.drawImage(
          canvas,
          0,
          startY,
          canvas.width,
          sliceHeight,
          0,
          0,
          canvas.width,
          sliceHeight
        );

        const pageImage = pageCanvas.toDataURL("image/jpeg", 0.95);

        if (page > 0) {
          pdf.addPage("a4", "portrait");
        }

        const imageHeight = (sliceHeight * pageWidth) / canvas.width;

        pdf.addImage(
          pageImage,
          "JPEG",
          0,
          0,
          pageWidth,
          imageHeight,
          undefined,
          "FAST"
        );

        pageCanvas.width = 0;
        pageCanvas.height = 0;
      }

      pdf.save(`${safeName}-resume.pdf`);
    } catch (err: any) {
      console.error("PDF download error:", err);

      alert(
        `Unable to download the PDF.\n\n${
          err?.message || "Please try again."
        }`
      );
    } finally {
      if (clonedElement?.parentNode) {
        clonedElement.parentNode.removeChild(clonedElement);
      }

      setDownloading(false);
    }
  }

  // ------------------------------------------------
  // RESUME DATA
  // ------------------------------------------------

  const studentName =
    portfolio?.name || profile?.name || "Your Name";

  const email = portfolio?.email || "";

  const careerGoal =
    portfolio?.career_goal ||
    profile?.career_goal ||
    profile?.selected_career ||
    "Software Developer";

  const originalAbout =
    portfolio?.about ||
    `Aspiring ${careerGoal} with a growing foundation in technology and programming. Interested in developing practical skills through projects and continuous learning.`;

  const originalEducation =
    portfolio?.education || profile?.branch || "B.Tech";

  const branch = profile?.branch || "";
  const graduationYear = profile?.graduation_year || "";
  const studyType = profile?.study_type || "";

  const interests = convertToArray(profile?.interests);

  const displaySummary =
    aiResume?.professional_summary || originalAbout;

  const displaySkills =
    aiResume?.skills?.length ? aiResume.skills : skills;

  const displayProjects =
    aiResume?.projects?.length ? aiResume.projects : projects;

  const careerObjective = aiResume?.career_objective || "";

  // ------------------------------------------------
  // LOADING / ERROR
  // ------------------------------------------------

  if (loading) {
    return (
      <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
        <div className="text-center">
          <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-slate-700 border-t-blue-500" />
          <p className="text-slate-300">Preparing your resume...</p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-slate-950 text-white px-6 py-12">
        <div className="mx-auto max-w-2xl rounded-2xl border border-red-500/30 bg-red-500/10 p-6">
          <h1 className="text-xl font-semibold text-red-300">
            Unable to load resume
          </h1>

          <p className="mt-3 text-sm text-red-200">{error}</p>

          <button
            onClick={loadResumeData}
            className="mt-5 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-500"
          >
            Try Again
          </button>
        </div>
      </main>
    );
  }

  // ------------------------------------------------
  // MAIN PAGE
  // ------------------------------------------------

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-medium text-blue-400">CareerPath</p>

            <h1 className="mt-1 text-3xl font-bold tracking-tight">
              Resume Generator
            </h1>

            <p className="mt-2 max-w-2xl text-sm text-slate-400">
              Build a professional resume from your CareerPath profile and
              portfolio.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={loadResumeData}
              disabled={generating || downloading || savingResume}
              className="rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-medium text-slate-200 transition hover:bg-slate-800 disabled:opacity-50"
            >
              Refresh Data
            </button>

            <button
              onClick={generateAIResume}
              disabled={generating || downloading || savingResume}
              className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/20 transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {generating
                ? "Creating Resume..."
                : aiResume
                ? "Regenerate AI Resume"
                : "✨ Generate AI Resume"}
            </button>

            <button
              onClick={saveResume}
              disabled={savingResume || generating || downloading || Boolean(savedResumeId)}
              className="rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-900/20 transition hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {savingResume
                ? "Saving Resume..."
                : savedResumeId
                ? "✓ Resume Saved"
                : "Save Resume"}
            </button>

            <button
              onClick={downloadPDF}
              disabled={generating || downloading || savingResume}
              className="rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-900/20 transition hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {downloading ? "Preparing PDF..." : "⬇ Download PDF"}
            </button>
          </div>
        </div>

        {/* SAVE STATUS */}
        {saveMessage && (
          <div className="mb-6 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4">
            <p className="text-sm text-emerald-300">
              ✓ {saveMessage}
            </p>
          </div>
        )}

        {saveError && (
          <div className="mb-6 rounded-xl border border-red-500/30 bg-red-500/10 p-4">
            <p className="text-sm text-red-300">{saveError}</p>
            <button
              onClick={saveResume}
              disabled={savingResume}
              className="mt-3 rounded-lg bg-red-500/20 px-4 py-2 text-sm font-medium text-red-200 hover:bg-red-500/30 disabled:opacity-50"
            >
              Try Saving Again
            </button>
          </div>
        )}

        {/* STANDARD RESUME STATUS */}
        {!aiResume && !generating && (
          <div className="mb-6 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-4">
            <p className="text-sm leading-6 text-slate-300">
              Your information is loaded. Click{" "}
              <strong className="text-white">Generate AI Resume</strong> to
              improve the summary, skills presentation, and project
              descriptions using only your actual information.
            </p>
          </div>
        )}

        {generating && (
          <div className="mb-6 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-4">
            <div className="flex items-center gap-3">
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-slate-600 border-t-blue-400" />

              <p className="text-sm text-slate-300">
                AI is preparing your professional resume. This can take a
                little time because the resume is being generated locally.
              </p>
            </div>
          </div>
        )}

        {aiError && (
          <div className="mb-6 rounded-2xl border border-red-500/30 bg-red-500/10 p-4">
            <p className="text-sm text-red-300">{aiError}</p>

            <button
              onClick={generateAIResume}
              className="mt-3 rounded-lg bg-red-500/20 px-4 py-2 text-sm font-medium text-red-200 hover:bg-red-500/30"
            >
              Try AI Again
            </button>
          </div>
        )}

        {aiResume && (
          <div className="mb-6 flex flex-col gap-3 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-emerald-300">
              ✓ AI-enhanced resume generated successfully.
            </p>

            <button
              onClick={generateAIResume}
              disabled={generating}
              className="w-fit rounded-lg bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300 hover:bg-emerald-500/20 disabled:opacity-50"
            >
              ✨ Enhance Again
            </button>
          </div>
        )}

        {/* RESUME DOCUMENT */}
        <div
          ref={resumeRef}
          id="resume-document"
          className="overflow-hidden rounded-2xl border border-slate-700 bg-white text-slate-900 shadow-2xl"
        >
          {/* RESUME HEADER */}
          <section className="border-b border-slate-200 px-7 py-8 sm:px-10">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  {studentName}
                </h2>

                <p className="mt-2 text-lg font-semibold text-blue-700">
                  {careerGoal}
                </p>
              </div>

              <div className="text-left text-sm text-slate-600 sm:text-right">
                {email && <p className="break-all">{email}</p>}
                {branch && <p className="mt-1">{branch}</p>}
                {graduationYear && (
                  <p className="mt-1">Graduation: {graduationYear}</p>
                )}
              </div>
            </div>
          </section>

          {/* RESUME CONTENT */}
          <div className="grid grid-cols-1 gap-0 lg:grid-cols-[1fr_270px]">
            {/* MAIN */}
            <div className="px-7 py-8 sm:px-10">
              <section>
                <h3 className="border-b-2 border-slate-900 pb-2 text-sm font-bold uppercase tracking-widest">
                  Professional Summary
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-700">
                  {displaySummary}
                </p>
              </section>

              {careerObjective && (
                <section className="mt-7">
                  <h3 className="border-b-2 border-slate-900 pb-2 text-sm font-bold uppercase tracking-widest">
                    Career Objective
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-700">
                    {careerObjective}
                  </p>
                </section>
              )}

              <section className="mt-7">
                <h3 className="border-b-2 border-slate-900 pb-2 text-sm font-bold uppercase tracking-widest">
                  Education
                </h3>

                <div className="mt-4">
                  <h4 className="font-semibold text-slate-900">
                    {originalEducation}
                  </h4>

                  {branch && originalEducation !== branch && (
                    <p className="mt-1 text-sm text-slate-600">{branch}</p>
                  )}

                  <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-600">
                    {studyType && <span>{studyType}</span>}
                    {graduationYear && (
                      <span>Expected Graduation: {graduationYear}</span>
                    )}
                  </div>
                </div>
              </section>

              <section className="mt-7">
                <h3 className="border-b-2 border-slate-900 pb-2 text-sm font-bold uppercase tracking-widest">
                  Projects
                </h3>

                {displayProjects.length > 0 ? (
                  <div className="mt-5 space-y-6">
                    {displayProjects.map((project, index) => {
                      const technologies = convertToArray(
                        project.technologies
                      );

                      return (
                        <article
                          key={index}
                          className="break-inside-avoid"
                        >
                          <h4 className="font-semibold text-slate-900">
                            {project.title || "Project"}
                          </h4>

                          {project.description && (
                            <p className="mt-2 text-sm leading-6 text-slate-700">
                              {project.description}
                            </p>
                          )}

                          {technologies.length > 0 && (
                            <div className="mt-3 flex flex-wrap gap-2">
                              {technologies.map((technology, techIndex) => (
                                <span
                                  key={techIndex}
                                  className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                                >
                                  {technology}
                                </span>
                              ))}
                            </div>
                          )}
                        </article>
                      );
                    })}
                  </div>
                ) : (
                  <p className="mt-4 text-sm text-slate-500">
                    No projects have been added yet.
                  </p>
                )}
              </section>
            </div>

            {/* SIDEBAR */}
            <aside className="border-t border-slate-200 bg-slate-50 px-7 py-8 lg:border-l lg:border-t-0 sm:px-8">
              <section>
                <h3 className="border-b-2 border-slate-900 pb-2 text-sm font-bold uppercase tracking-widest">
                  Skills
                </h3>

                {displaySkills.length > 0 ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {displaySkills.map((skill, index) => (
                      <span
                        key={index}
                        className="rounded-lg bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="mt-4 text-sm text-slate-500">
                    No skills added yet.
                  </p>
                )}
              </section>

              <section className="mt-8">
                <h3 className="border-b-2 border-slate-900 pb-2 text-sm font-bold uppercase tracking-widest">
                  Career Profile
                </h3>

                <div className="mt-5 space-y-6 text-sm">
                  <div>
                    <p className="font-semibold text-slate-800">
                      Career Goal
                    </p>

                    <p className="mt-1 font-medium text-blue-700">
                      {careerGoal}
                    </p>

                    <p className="mt-2 leading-6 text-slate-600">
                      Interested in developing software applications and
                      building practical technology solutions. Focused on
                      applying programming knowledge, strengthening technical
                      abilities, and growing into a skilled professional.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-slate-800">
                      Career Status
                    </p>

                    <p className="mt-1 font-medium text-blue-700">
                      {profile?.career_status ||
                        "Exploring Career Opportunities"}
                    </p>

                    <p className="mt-2 leading-6 text-slate-600">
                      Focused on gaining practical experience, applying
                      technical knowledge, and developing professional skills.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-slate-800">
                      Career Development Focus
                    </p>

                    <ol className="mt-2 list-decimal space-y-2 pl-5 leading-6 text-slate-600">
                      <li>
                        Building practical projects to gain hands-on
                        development experience.
                      </li>
                      <li>
                        Improving programming skills through regular practice
                        and problem-solving.
                      </li>
                      <li>
                        Developing database knowledge and learning
                        industry-relevant technologies.
                      </li>
                    </ol>
                  </div>
                </div>
              </section>

              {interests.length > 0 && (
                <section className="mt-8">
                  <h3 className="border-b-2 border-slate-900 pb-2 text-sm font-bold uppercase tracking-widest">
                    Interests
                  </h3>

                  <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-6 text-slate-600">
                    {interests.map((interest, index) => (
                      <li key={index}>{interest}</li>
                    ))}
                  </ol>
                </section>
              )}
            </aside>
          </div>
        </div>

        {/* ACTION CARDS */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <button
            onClick={generateAIResume}
            disabled={generating || downloading || savingResume}
            className="group rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-5 text-left transition hover:border-emerald-400/40 hover:bg-emerald-500/10 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-white">
                ✨ AI Enhancement
              </p>
              <span className="text-emerald-400 transition group-hover:translate-x-1">
                →
              </span>
            </div>

            <p className="mt-2 text-xs leading-5 text-slate-400">
              {generating
                ? "AI is enhancing your resume..."
                : aiResume
                ? "Regenerate your professional summary, skills and project descriptions."
                : "Use AI to improve your resume using only your actual information."}
            </p>
          </button>

          <button
            onClick={downloadPDF}
            disabled={downloading || generating || savingResume}
            className="group rounded-2xl border border-blue-500/20 bg-blue-500/5 p-5 text-left transition hover:border-blue-400/40 hover:bg-blue-500/10 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-white">
                📄 Download PDF
              </p>
              <span className="text-blue-400 transition group-hover:translate-y-1">
                ↓
              </span>
            </div>

            <p className="mt-2 text-xs leading-5 text-slate-400">
              {downloading
                ? "Creating your PDF..."
                : "Download this resume as a professional A4 PDF."}
            </p>
          </button>
        </div>

        {/* FUTURE FEATURE */}
        <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/50 p-5">
          <p className="text-sm font-semibold text-slate-200">
            🚀 Next: Job-Specific Resume
          </p>

          <p className="mt-2 text-xs leading-5 text-slate-400">
            Generate a customized resume for a selected company and job role
            using verified profile information.
          </p>
        </div>
      </div>

      {/* PRINT/PDF SUPPORT */}
      <style jsx global>{`
        @media print {
          body {
            background: white !important;
          }

          body * {
            visibility: hidden;
          }

          #resume-document,
          #resume-document * {
            visibility: visible;
          }

          #resume-document {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            margin: 0;
            border: none !important;
            box-shadow: none !important;
            border-radius: 0 !important;
          }

          @page {
            size: A4;
            margin: 8mm;
          }
        }

        .break-inside-avoid {
          break-inside: avoid;
          page-break-inside: avoid;
        }
      `}</style>
    </main>
  );
}
