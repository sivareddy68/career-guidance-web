
"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Resume = {
  id: string;
  user_id: string;
  title: string;
  resume_type: string;
  resume_data: Record<string, any>;
  created_at: string;
  updated_at: string;
};

const SECTION_ORDER = [
  "professional_summary",
  "career_objective",
  "education",
  "projects",
  "work_experience",
  "internships",
  "skills",
  "career_profile",
  "certifications",
  "interests",
];

const SECTION_TITLES: Record<string, string> = {
  professional_summary: "PROFESSIONAL SUMMARY",
  career_objective: "CAREER OBJECTIVE",
  education: "EDUCATION",
  projects: "PROJECTS",
  work_experience: "WORK EXPERIENCE",
  internships: "INTERNSHIPS",
  skills: "SKILLS",
  career_profile: "CAREER PROFILE",
  certifications: "CERTIFICATIONS",
  interests: "INTERESTS",
};

function isEmpty(value: any): boolean {
  if (value === null || value === undefined || value === "") return true;
  if (Array.isArray(value)) return value.length === 0;
  if (typeof value === "object") return Object.keys(value).length === 0;
  return false;
}

function formatLabel(value: string) {
  return value
    .replace(/_/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function getBranchName(branch: any): string {
  if (!branch) return "";

  const value = String(branch).trim();

  const branches: Record<string, string> = {
    ece: "Electronics and Communication Engineering (ECE)",
    cse: "Computer Science and Engineering (CSE)",
    eee: "Electrical and Electronics Engineering (EEE)",
    mechanical: "Mechanical Engineering",
    civil: "Civil Engineering",
    it: "Information Technology (IT)",
  };

  return branches[value.toLowerCase()] || value;
}

function getSkills(data: any): string[] {
  if (!data) return [];

  if (Array.isArray(data)) {
    return data.flatMap((item) => {
      if (typeof item === "string") {
        return item.split(/[,\n]/).map((v) => v.trim()).filter(Boolean);
      }
      return [];
    });
  }

  if (typeof data === "string") {
    return data.split(/[,\n]/).map((v) => v.trim()).filter(Boolean);
  }

  return [];
}

function RenderValue({ data }: { data: any }) {
  if (isEmpty(data)) return null;

  if (typeof data === "string" || typeof data === "number") {
    return (
      <p className="text-slate-700 whitespace-pre-wrap break-words leading-relaxed">
        {String(data)}
      </p>
    );
  }

  if (typeof data === "boolean") {
    return <p className="text-slate-700">{data ? "Yes" : "No"}</p>;
  }

  if (Array.isArray(data)) {
    return (
      <div className="space-y-2">
        {data.map((item, index) => (
          <div key={index}>
            {typeof item === "object" && item !== null ? (
              <RenderValue data={item} />
            ) : (
              <p className="text-slate-700 break-words">
                • {String(item)}
              </p>
            )}
          </div>
        ))}
      </div>
    );
  }

  if (typeof data === "object") {
    return (
      <div className="space-y-3">
        {Object.entries(data).map(([key, value]) => {
          if (isEmpty(value)) return null;

          return (
            <div key={key}>
              <h4 className="font-semibold text-slate-800 mb-1">
                {formatLabel(key)}
              </h4>
              <RenderValue data={value} />
            </div>
          );
        })}
      </div>
    );
  }

  return null;
}

function EducationItem({ education }: { education: any }) {
  const qualification =
    education?.qualification || education?.degree || "";

  const branch = getBranchName(
    education?.branch || education?.specialization
  );

  const institution =
    education?.institution ||
    education?.college ||
    education?.university ||
    "";

  const score =
    education?.percentage_or_cgpa ??
    education?.percentage ??
    education?.cgpa ??
    education?.gpa;

  const scoreType = String(education?.score_type || "").toLowerCase();

  const isCGPA =
    scoreType.includes("cgpa") ||
    education?.cgpa !== undefined ||
    education?.gpa !== undefined;

  const graduationYear =
    education?.graduation_year ||
    education?.graduationYear ||
    education?.year_of_graduation ||
    education?.passout_year ||
    education?.year;

  return (
    <div className="space-y-2 text-slate-700 leading-relaxed">
      <p className="font-semibold text-slate-800">
        {qualification} {qualification && branch ? "– " : ""}
        {branch}
      </p>

      {institution && <p>{institution}</p>}

      {score !== undefined && score !== null && score !== "" && (
        <p>
          <strong>{isCGPA ? "CGPA" : "PERCENTAGE"}: </strong>
          {isCGPA ? score : `${String(score).replace(/%/g, "")}%`}
        </p>
      )}

      {graduationYear && (
        <p>
          <strong>Graduation Year: </strong>
          {graduationYear}
        </p>
      )}
    </div>
  );
}

function ResumePreview({ resume }: { resume: Resume }) {
  const data = resume.resume_data || {};

  const name =
    data.name ||
    data.full_name ||
    data.personal_information?.name ||
    data.personal_info?.name ||
    resume.title;

  const contact = [
    data.email || data.personal_information?.email || data.personal_info?.email,
    data.phone || data.personal_information?.phone || data.personal_info?.phone,
    data.location || data.personal_information?.location || data.personal_info?.location,
    data.linkedin || data.personal_information?.linkedin || data.personal_info?.linkedin,
    data.github || data.personal_information?.github || data.personal_info?.github,
  ].filter(Boolean);

  const visibleSections = SECTION_ORDER.filter(
    (key) => !isEmpty(data[key])
  );

  return (
    <div className="resume-print-area bg-white text-slate-900 rounded-xl p-6 sm:p-9 shadow-lg">
      <div className="text-center border-b-2 border-slate-300 pb-5 mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold uppercase tracking-wide">
          {name}
        </h1>

        {contact.length > 0 && (
          <p className="text-sm text-slate-600 mt-3 leading-relaxed">
            {contact.join(" | ")}
          </p>
        )}
      </div>

      {visibleSections.length === 0 ? (
        <p className="text-slate-500">
          No resume sections are available to display.
        </p>
      ) : (
        <div className="space-y-6">
          {visibleSections.map((key) => (
            <section key={key}>
              <h2 className="text-base font-bold tracking-wide border-b border-slate-300 pb-2 mb-3">
                {SECTION_TITLES[key] || formatLabel(key)}
              </h2>

              {key === "education" ? (
                <div className="space-y-4">
                  {(Array.isArray(data.education)
                    ? data.education
                    : [data.education]
                  ).map((item: any, index: number) => (
                    <EducationItem key={index} education={item} />
                  ))}
                </div>
              ) : key === "skills" || key === "interests" ? (
                <p className="text-slate-700 leading-relaxed break-words">
                  {getSkills(data[key]).join(" | ")}
                </p>
              ) : (
                <RenderValue data={data[key]} />
              )}
            </section>
          ))}
        </div>
      )}
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  rows = 2,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  rows?: number;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-300 mb-2">
        {label}
      </label>

      {rows === 1 ? (
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 outline-none focus:border-blue-500"
        />
      ) : (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={rows}
          placeholder={placeholder}
          className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 outline-none focus:border-blue-500 resize-y"
        />
      )}
    </div>
  );
}

function ResumeEditor({
  data,
  onChange,
}: {
  data: Record<string, any>;
  onChange: (data: Record<string, any>) => void;
}) {
  const education = Array.isArray(data.education)
    ? data.education
    : data.education
      ? [data.education]
      : [];

  const projects = Array.isArray(data.projects)
    ? data.projects
    : data.projects
      ? [data.projects]
      : [];

  const careerProfile = data.career_profile || {};

  function updateField(key: string, value: any) {
    onChange({ ...data, [key]: value });
  }

  function updateEducation(index: number, key: string, value: string) {
    const updated = [...education];
    updated[index] = { ...updated[index], [key]: value };
    updateField("education", updated);
  }

  function updateProject(index: number, key: string, value: any) {
    const updated = [...projects];
    updated[index] = { ...updated[index], [key]: value };
    updateField("projects", updated);
  }

  function updateCareerProfile(key: string, value: any) {
    updateField("career_profile", {
      ...careerProfile,
      [key]: value,
    });
  }

  function linesToArray(value: string) {
    return value
      .split(/\n/)
      .map((item) => item.trim())
      .filter(Boolean);
  }

  return (
    <div className="space-y-7">
      <section className="space-y-4">
        <h3 className="text-lg font-bold text-blue-400">
          PROFESSIONAL SUMMARY
        </h3>

        <Field
          label="Professional Summary"
          value={data.professional_summary || ""}
          onChange={(value) => updateField("professional_summary", value)}
          rows={5}
          placeholder="Write your professional summary"
        />
      </section>

      <section className="space-y-4">
        <h3 className="text-lg font-bold text-blue-400">
          CAREER OBJECTIVE
        </h3>

        <Field
          label="Career Objective"
          value={data.career_objective || ""}
          onChange={(value) => updateField("career_objective", value)}
          rows={4}
          placeholder="Write your career objective"
        />
      </section>

      <section className="space-y-4">
        <div className="flex justify-between items-center gap-3">
          <h3 className="text-lg font-bold text-blue-400">EDUCATION</h3>

          <button
            type="button"
            onClick={() =>
              updateField("education", [
                ...education,
                {
                  qualification: "",
                  branch: "",
                  institution: "",
                  score_type: "CGPA",
                  percentage_or_cgpa: "",
                  graduation_year: "",
                },
              ])
            }
            className="text-sm text-blue-400 hover:text-blue-300"
          >
            + Add Education
          </button>
        </div>

        {education.map((item: any, index: number) => (
          <div
            key={index}
            className="border border-slate-700 rounded-xl p-4 space-y-3"
          >
            <div className="flex justify-between items-center">
              <h4 className="font-semibold">Education {index + 1}</h4>

              <button
                type="button"
                onClick={() =>
                  updateField(
                    "education",
                    education.filter((_: any, i: number) => i !== index)
                  )
                }
                className="text-sm text-red-400 hover:text-red-300"
              >
                Remove
              </button>
            </div>

            <Field
              label="Qualification"
              value={item.qualification || ""}
              onChange={(value) =>
                updateEducation(index, "qualification", value)
              }
              rows={1}
              placeholder="BTECH"
            />

            <Field
              label="Branch"
              value={item.branch || ""}
              onChange={(value) => updateEducation(index, "branch", value)}
              rows={1}
              placeholder="ECE"
            />

            <Field
              label="College / Institution"
              value={item.institution || ""}
              onChange={(value) =>
                updateEducation(index, "institution", value)
              }
              rows={1}
              placeholder="College name"
            />

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Score Type
              </label>

              <select
                value={item.score_type || "CGPA"}
                onChange={(e) =>
                  updateEducation(index, "score_type", e.target.value)
                }
                className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 outline-none focus:border-blue-500"
              >
                <option value="Percentage">Percentage</option>
                <option value="CGPA">CGPA</option>
              </select>
            </div>

            <Field
              label="Percentage / CGPA"
              value={String(item.percentage_or_cgpa ?? "")}
              onChange={(value) =>
                updateEducation(index, "percentage_or_cgpa", value)
              }
              rows={1}
              placeholder="8.0"
            />

            <Field
              label="Graduation Year"
              value={String(item.graduation_year ?? "")}
              onChange={(value) =>
                updateEducation(index, "graduation_year", value)
              }
              rows={1}
              placeholder="2028"
            />
          </div>
        ))}
      </section>

      <section className="space-y-4">
        <div className="flex justify-between items-center gap-3">
          <h3 className="text-lg font-bold text-blue-400">PROJECTS</h3>

          <button
            type="button"
            onClick={() =>
              updateField("projects", [
                ...projects,
                { title: "", description: "", technologies: [], link: "" },
              ])
            }
            className="text-sm text-blue-400 hover:text-blue-300"
          >
            + Add Project
          </button>
        </div>

        {projects.map((item: any, index: number) => (
          <div
            key={index}
            className="border border-slate-700 rounded-xl p-4 space-y-3"
          >
            <div className="flex justify-between items-center">
              <h4 className="font-semibold">Project {index + 1}</h4>

              <button
                type="button"
                onClick={() =>
                  updateField(
                    "projects",
                    projects.filter((_: any, i: number) => i !== index)
                  )
                }
                className="text-sm text-red-400 hover:text-red-300"
              >
                Remove
              </button>
            </div>

            <Field
              label="Project Title"
              value={item.title || ""}
              onChange={(value) => updateProject(index, "title", value)}
              rows={1}
              placeholder="Project title"
            />

            <Field
              label="Project Description"
              value={item.description || ""}
              onChange={(value) =>
                updateProject(index, "description", value)
              }
              rows={4}
              placeholder="Describe your project"
            />

            <Field
              label="Technologies (one per line)"
              value={getSkills(item.technologies).join("\n")}
              onChange={(value) =>
                updateProject(index, "technologies", linesToArray(value))
              }
              rows={3}
              placeholder={"Python\nJavaScript\nHTML"}
            />

            <Field
              label="Project Link"
              value={item.link || ""}
              onChange={(value) => updateProject(index, "link", value)}
              rows={1}
              placeholder="Project URL"
            />
          </div>
        ))}
      </section>

      <section className="space-y-4">
        <h3 className="text-lg font-bold text-blue-400">SKILLS</h3>

        <Field
          label="Skills (one skill per line)"
          value={getSkills(data.skills).join("\n")}
          onChange={(value) => updateField("skills", linesToArray(value))}
          rows={7}
          placeholder={"Python\nJavaScript\nHTML\nCSS\nSQL"}
        />
      </section>

      <section className="space-y-4">
        <h3 className="text-lg font-bold text-blue-400">CAREER PROFILE</h3>

        <Field
          label="Career Goal"
          value={careerProfile.career_goal || ""}
          onChange={(value) =>
            updateCareerProfile("career_goal", value)
          }
          rows={4}
          placeholder="Your career goal"
        />

        <Field
          label="Career Status"
          value={careerProfile.career_status || ""}
          onChange={(value) =>
            updateCareerProfile("career_status", value)
          }
          rows={1}
          placeholder="Fresher"
        />

        <Field
          label="Career Development Focus (one item per line)"
          value={Array.isArray(careerProfile.career_development_focus)
            ? careerProfile.career_development_focus.join("\n")
            : careerProfile.career_development_focus || ""}
          onChange={(value) =>
            updateCareerProfile(
              "career_development_focus",
              linesToArray(value)
            )
          }
          rows={5}
          placeholder={"Improve problem-solving\nLearn data structures"}
        />
      </section>

      <section className="space-y-4">
        <h3 className="text-lg font-bold text-blue-400">INTERESTS</h3>

        <Field
          label="Interests (one interest per line)"
          value={getSkills(data.interests).join("\n")}
          onChange={(value) =>
            updateField("interests", linesToArray(value))
          }
          rows={5}
          placeholder={"Web Development\nData Analytics\nRobotics"}
        />
      </section>
    </div>
  );
}

export default function SavedResumesPage() {
  const [resumes, setResumes] = useState<Resume[]>([]);
  const [selectedResume, setSelectedResume] = useState<Resume | null>(null);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [editing, setEditing] = useState(false);

  const [editedTitle, setEditedTitle] = useState("");
  const [editedData, setEditedData] = useState<Record<string, any>>({});

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    loadResumes();
  }, []);

  async function loadResumes() {
    setLoading(true);
    setError("");

    try {
      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError) throw authError;

      if (!user) {
        setResumes([]);
        setSelectedResume(null);
        setError("Please log in to view your saved resumes.");
        return;
      }

      const { data, error: fetchError } = await supabase
        .from("resumes")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

      if (fetchError) throw fetchError;

      const list = (data || []) as Resume[];
      setResumes(list);

      setSelectedResume((current) => {
        if (!current) return null;
        return list.find((item) => item.id === current.id) || null;
      });
    } catch (err: any) {
      setError(err.message || "Unable to load resumes.");
    } finally {
      setLoading(false);
    }
  }

  function openResume(resume: Resume) {
    setSelectedResume(resume);
    setEditedTitle(resume.title || "");
    setEditedData({ ...(resume.resume_data || {}) });
    setEditing(false);
    setError("");
    setSuccess("");
  }

  function startEditing() {
    if (!selectedResume) return;

    setEditedTitle(selectedResume.title || "");
    setEditedData({ ...(selectedResume.resume_data || {}) });
    setEditing(true);
    setError("");
    setSuccess("");
  }

  function cancelEditing() {
    if (!selectedResume) return;

    setEditedTitle(selectedResume.title || "");
    setEditedData({ ...(selectedResume.resume_data || {}) });
    setEditing(false);
    setError("");
  }

  async function saveChanges() {
    if (!selectedResume) {
      setError("Please select a resume first.");
      return;
    }

    setError("");
    setSuccess("");

    if (!editedTitle.trim()) {
      setError("Please enter a resume title.");
      return;
    }

    setSaving(true);

    try {
      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError) throw authError;

      if (!user) {
        throw new Error("Your login session has expired. Please log in again.");
      }

      // Merge the edited resume sections into the original data.
      // Internal job-analysis fields are preserved without being exposed
      // in the editor.
      const mergedData = {
        ...selectedResume.resume_data,
        ...editedData,
      };

      const { data: updatedResume, error: updateError } = await supabase
        .from("resumes")
        .update({
          title: editedTitle.trim(),
          resume_data: mergedData,
          updated_at: new Date().toISOString(),
        })
        .eq("id", selectedResume.id)
        .eq("user_id", user.id)
        .select("*")
        .maybeSingle();

      if (updateError) throw updateError;

      if (!updatedResume) {
        throw new Error(
          "No resume was updated. Please check your Supabase update policy."
        );
      }

      const updated = updatedResume as Resume;

      setResumes((previous) =>
        previous.map((resume) =>
          resume.id === updated.id ? updated : resume
        )
      );

      setSelectedResume(updated);
      setEditedTitle(updated.title);
      setEditedData({ ...updated.resume_data });
      setEditing(false);

      setSuccess("Resume updated successfully!");
    } catch (err: any) {
      console.error("Resume update error:", err);
      setError(err.message || "Unable to update resume.");
    } finally {
      setSaving(false);
    }
  }

  async function deleteResume(resume: Resume) {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${resume.title}"?`
    );

    if (!confirmed) return;

    setError("");
    setSuccess("");
    setDeleting(true);

    try {
      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError) throw authError;

      if (!user) {
        throw new Error("Please log in again.");
      }

      const { data: deletedRows, error: deleteError } = await supabase
        .from("resumes")
        .delete()
        .eq("id", resume.id)
        .eq("user_id", user.id)
        .select("id");

      if (deleteError) throw deleteError;

      if (!deletedRows || deletedRows.length === 0) {
        throw new Error(
          "Resume was not deleted. Please check your Supabase delete policy."
        );
      }

      setResumes((previous) =>
        previous.filter((item) => item.id !== resume.id)
      );

      if (selectedResume?.id === resume.id) {
        setSelectedResume(null);
        setEditing(false);
      }

      setSuccess("Resume deleted successfully!");
    } catch (err: any) {
      console.error("Resume delete error:", err);
      setError(err.message || "Unable to delete resume.");
    } finally {
      setDeleting(false);
    }
  }

  function downloadPDF() {
    if (!selectedResume) return;
    window.print();
  }

  const generalCount = resumes.filter(
    (resume) => resume.resume_type?.toLowerCase() === "general"
  ).length;

  const jobSpecificCount = resumes.filter(
    (resume) => resume.resume_type?.toLowerCase() === "job-specific"
  ).length;

  return (
    <main className="min-h-screen bg-slate-950 text-white p-4 sm:p-8">
      <style jsx global>{`
        @media print {
          @page {
            size: A4;
            margin: 12mm;
          }

          body {
            background: white !important;
            color: black !important;
          }

          body * {
            visibility: hidden !important;
          }

          .resume-print-area,
          .resume-print-area * {
            visibility: visible !important;
          }

          .resume-print-area {
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            width: 100% !important;
            padding: 10px !important;
            margin: 0 !important;
            background: white !important;
            color: black !important;
            box-shadow: none !important;
            border: none !important;
          }

          .resume-print-area h1,
          .resume-print-area h2,
          .resume-print-area h3,
          .resume-print-area h4,
          .resume-print-area p,
          .resume-print-area div,
          .resume-print-area span {
            color: black !important;
          }

          .no-print {
            display: none !important;
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <p className="text-blue-400 text-sm font-semibold mb-2">
            CAREERPATH
          </p>

          <h1 className="text-3xl sm:text-4xl font-bold">
            Resume Management
          </h1>

          <p className="text-slate-400 mt-2">
            View, edit, download and manage your saved resumes.
          </p>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/30 text-red-300 p-4 rounded-xl mb-5">
            {error}
          </div>
        )}

        {success && (
          <div className="bg-green-500/10 border border-green-500/30 text-green-300 p-4 rounded-xl mb-5">
            {success}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
            <p className="text-slate-400 text-sm">Total Resumes</p>
            <h2 className="text-3xl font-bold mt-2">{resumes.length}</h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
            <p className="text-slate-400 text-sm">General Resumes</p>
            <h2 className="text-3xl font-bold mt-2 text-blue-400">
              {generalCount}
            </h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
            <p className="text-slate-400 text-sm">Job-Specific Resumes</p>
            <h2 className="text-3xl font-bold mt-2 text-purple-400">
              {jobSpecificCount}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <section className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-5">
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-xl font-bold">My Resumes</h2>

              <button
                onClick={loadResumes}
                disabled={loading}
                className="text-sm text-blue-400 hover:text-blue-300 disabled:opacity-50"
              >
                {loading ? "Loading..." : "Refresh"}
              </button>
            </div>

            {loading ? (
              <p className="text-slate-400 py-8 text-center">
                Loading resumes...
              </p>
            ) : resumes.length === 0 ? (
              <div className="text-center py-10">
                <p className="text-slate-400 mb-4">
                  No saved resumes found.
                </p>

                <a
                  href="/resume-generator"
                  className="inline-block bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg"
                >
                  Create Resume
                </a>
              </div>
            ) : (
              <div className="space-y-3">
                {resumes.map((resume) => (
                  <div
                    key={resume.id}
                    className={`rounded-xl border p-4 transition ${
                      selectedResume?.id === resume.id
                        ? "border-blue-500 bg-blue-500/10"
                        : "border-slate-700 bg-slate-950"
                    }`}
                  >
                    <button
                      onClick={() => openResume(resume)}
                      className="w-full text-left"
                    >
                      <h3 className="font-semibold break-words">
                        {resume.title}
                      </h3>

                      <span
                        className={`inline-block mt-2 text-xs px-2 py-1 rounded-full ${
                          resume.resume_type?.toLowerCase() === "general"
                            ? "bg-blue-500/20 text-blue-300"
                            : "bg-purple-500/20 text-purple-300"
                        }`}
                      >
                        {resume.resume_type?.toLowerCase() === "general"
                          ? "General Resume"
                          : "Job-Specific Resume"}
                      </span>

                      <p className="text-xs text-slate-500 mt-3">
                        Created:{" "}
                        {resume.created_at
                          ? new Date(resume.created_at).toLocaleDateString()
                          : "Unknown"}
                      </p>
                    </button>

                    <div className="flex gap-3 mt-4">
                      <button
                        onClick={() => openResume(resume)}
                        className="text-sm text-blue-400 hover:text-blue-300"
                      >
                        View
                      </button>

                      <button
                        onClick={() => deleteResume(resume)}
                        disabled={deleting}
                        className="text-sm text-red-400 hover:text-red-300 disabled:opacity-50"
                      >
                        {deleting ? "Deleting..." : "Delete"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>

          <section className="lg:col-span-3">
            {!selectedResume ? (
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-10 text-center h-full flex flex-col justify-center items-center">
                <h2 className="text-xl font-bold mb-2">
                  Select a Resume
                </h2>

                <p className="text-slate-400">
                  Choose a saved resume from the left to view its details.
                </p>
              </div>
            ) : (
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-7">
                <div className="flex flex-wrap justify-between items-center gap-3 mb-6 no-print">
                  <div>
                    <h2 className="text-xl font-bold">
                      {selectedResume.title}
                    </h2>

                    <p className="text-slate-400 text-sm mt-1">
                      {selectedResume.resume_type?.toLowerCase() === "general"
                        ? "General Resume"
                        : "Job-Specific Resume"}
                    </p>
                  </div>

                  {!editing && (
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={startEditing}
                        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm"
                      >
                        Edit
                      </button>

                      <button
                        onClick={downloadPDF}
                        className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-sm"
                      >
                        Download PDF
                      </button>
                    </div>
                  )}
                </div>

                {editing ? (
                  <div className="space-y-5 no-print">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Resume Title
                      </label>

                      <input
                        value={editedTitle}
                        onChange={(e) => setEditedTitle(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 outline-none focus:border-blue-500"
                        placeholder="Enter resume title"
                      />
                    </div>

                    <ResumeEditor
                      data={editedData}
                      onChange={setEditedData}
                    />

                    <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-700">
                      <button
                        type="button"
                        onClick={saveChanges}
                        disabled={saving}
                        className="bg-green-600 hover:bg-green-700 disabled:opacity-50 px-5 py-2 rounded-lg"
                      >
                        {saving ? "Saving..." : "Save Changes"}
                      </button>

                      <button
                        type="button"
                        onClick={cancelEditing}
                        disabled={saving}
                        className="bg-slate-700 hover:bg-slate-600 px-5 py-2 rounded-lg"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <ResumePreview resume={selectedResume} />
                )}
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
