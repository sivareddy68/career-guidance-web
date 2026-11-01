"use client";

import {
  Suspense,
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  ExternalLink,
  ImagePlus,
  Loader2,
  Save,
  Send,
  Trash2,
  X,
} from "lucide-react";
import { supabase } from "@/lib/supabase";

type Submission = {
  project_title: string;
  description: string | null;
  technologies: string | null;
  github_url: string | null;
  demo_url: string | null;
  learning_summary: string | null;
  evidence_urls: string[] | null;
  status: string;
  score: number | null;
  feedback: string | null;
};

const MAX_FILES = 5;
const MAX_FILE_SIZE = 5 * 1024 * 1024;

function normalizeTitle(title: string) {
  return title
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getFileExtension(fileName: string) {
  const parts = fileName.split(".");
  return parts.length > 1
    ? parts[parts.length - 1].toLowerCase()
    : "png";
}

function ProjectSubmissionContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const initialProject = searchParams.get("project") || "";

  const [userId, setUserId] = useState("");
  const [projectTitle, setProjectTitle] = useState(initialProject);
  const [description, setDescription] = useState("");
  const [technologies, setTechnologies] = useState("");
  const [learningSummary, setLearningSummary] = useState("");
  const [githubUrl, setGithubUrl] = useState("");
  const [demoUrl, setDemoUrl] = useState("");

  const [existingEvidence, setExistingEvidence] = useState<string[]>([]);
  const [newFiles, setNewFiles] = useState<File[]>([]);

  const [status, setStatus] = useState("submitted");
  const [score, setScore] = useState<number | null>(null);
  const [feedback, setFeedback] = useState("");

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    let active = true;

    async function loadSubmission() {
      setLoading(true);
      setError("");

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

        if (!active) return;

        setUserId(user.id);

        const title = searchParams.get("project") || "";

        if (!title.trim()) {
          setLoading(false);
          return;
        }

        const projectKey = normalizeTitle(title);

        const { data, error: fetchError } = await supabase
          .from("project_submissions")
          .select("*")
          .eq("user_id", user.id)
          .eq("project_key", projectKey)
          .maybeSingle();

        if (fetchError) throw fetchError;
        if (!active) return;

        if (data) {
          const submission = data as Submission;

          setProjectTitle(submission.project_title || title);
          setDescription(submission.description || "");
          setTechnologies(submission.technologies || "");
          setGithubUrl(submission.github_url || "");
          setDemoUrl(submission.demo_url || "");
          setLearningSummary(submission.learning_summary || "");
          setExistingEvidence(submission.evidence_urls || []);
          setStatus(submission.status || "submitted");
          setScore(submission.score ?? null);
          setFeedback(submission.feedback || "");
        }
      } catch (err) {
        if (!active) return;

        setError(
          err instanceof Error
            ? err.message
            : "Unable to load your project submission."
        );
      } finally {
        if (active) setLoading(false);
      }
    }

    loadSubmission();

    return () => {
      active = false;
    };
  }, [router, searchParams]);

  function handleFileSelection(event: ChangeEvent<HTMLInputElement>) {
    setError("");
    setSuccess("");

    const selectedFiles = Array.from(event.target.files || []);

    if (selectedFiles.length === 0) return;

    const allowedTypes = [
      "image/png",
      "image/jpeg",
      "image/jpg",
      "image/webp",
    ];

    const invalidType = selectedFiles.find(
      (file) => !allowedTypes.includes(file.type)
    );

    if (invalidType) {
      setError(
        `"${invalidType.name}" is not supported. Use PNG, JPG, JPEG, or WEBP.`
      );
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }

    const oversizedFile = selectedFiles.find(
      (file) => file.size > MAX_FILE_SIZE
    );

    if (oversizedFile) {
      setError(
        `"${oversizedFile.name}" is larger than 5 MB. Choose a smaller image.`
      );
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }

    const totalFiles =
      existingEvidence.length + newFiles.length + selectedFiles.length;

    if (totalFiles > MAX_FILES) {
      setError(`You can upload a maximum of ${MAX_FILES} screenshots.`);
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }

    setNewFiles((previous) => [...previous, ...selectedFiles]);

    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  function removeNewFile(index: number) {
    setNewFiles((previous) =>
      previous.filter((_, fileIndex) => fileIndex !== index)
    );
  }

  async function removeExistingEvidence(url: string) {
    setError("");
    setSuccess("");

    try {
      const marker = "/project-evidence/";
      const markerIndex = url.indexOf(marker);

      if (markerIndex === -1) {
        setExistingEvidence((previous) =>
          previous.filter((item) => item !== url)
        );
        return;
      }

      const storagePath = decodeURIComponent(
        url.substring(markerIndex + marker.length)
      );

      const { error: removeError } = await supabase.storage
        .from("project-evidence")
        .remove([storagePath]);

      if (removeError) throw removeError;

      setExistingEvidence((previous) =>
        previous.filter((item) => item !== url)
      );
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to remove this screenshot."
      );
    }
  }

  function isValidOptionalUrl(value: string) {
    if (!value.trim()) return true;

    try {
      const parsed = new URL(value);
      return parsed.protocol === "https:" || parsed.protocol === "http:";
    } catch {
      return false;
    }
  }

  async function uploadFiles(
    files: File[],
    projectKey: string
  ): Promise<string[]> {
    const uploadedUrls: string[] = [];

    for (const file of files) {
      const extension = getFileExtension(file.name);
      const fileName = `${crypto.randomUUID()}.${extension}`;
      const storagePath = `${userId}/${projectKey}/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("project-evidence")
        .upload(storagePath, file, {
          cacheControl: "3600",
          upsert: false,
          contentType: file.type,
        });

      if (uploadError) throw uploadError;

      const { data: signedData, error: signedError } = await supabase.storage
        .from("project-evidence")
        .createSignedUrl(storagePath, 60 * 60 * 24 * 365);

      if (signedError) throw signedError;

      if (signedData?.signedUrl) {
        uploadedUrls.push(signedData.signedUrl);
      }
    }

    return uploadedUrls;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setSuccess("");

    if (!userId) {
      setError("Please sign in before submitting your project.");
      return;
    }

    if (!projectTitle.trim()) {
      setError("Please enter your project title.");
      return;
    }

    if (!description.trim()) {
      setError("Please describe your project.");
      return;
    }

    if (!technologies.trim()) {
      setError("Please enter the technologies or tools you used.");
      return;
    }

    if (!isValidOptionalUrl(githubUrl)) {
      setError("Enter a valid GitHub URL beginning with http:// or https://.");
      return;
    }

    if (!isValidOptionalUrl(demoUrl)) {
      setError("Enter a valid demo URL beginning with http:// or https://.");
      return;
    }

    const projectKey = normalizeTitle(projectTitle);

    if (!projectKey) {
      setError("Please enter a valid project title.");
      return;
    }

    setSaving(true);

    try {
      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError) throw authError;

      if (!user || user.id !== userId) {
        setError("Your login session has changed. Please sign in again.");
        return;
      }

      let uploadedUrls: string[] = [];

      if (newFiles.length > 0) {
        uploadedUrls = await uploadFiles(newFiles, projectKey);
      }

      const allEvidence = [...existingEvidence, ...uploadedUrls];

      const { error: saveError } = await supabase
        .from("project_submissions")
        .upsert(
          {
            user_id: userId,
            project_key: projectKey,
            project_title: projectTitle.trim(),
            description: description.trim(),
            technologies: technologies.trim(),
            github_url: githubUrl.trim() || null,
            demo_url: demoUrl.trim() || null,
            learning_summary: learningSummary.trim() || null,
            evidence_urls: allEvidence,
            status: "submitted",
            updated_at: new Date().toISOString(),
          },
          {
            onConflict: "user_id,project_key",
          }
        );

      if (saveError) throw saveError;

      setExistingEvidence(allEvidence);
      setNewFiles([]);
      setStatus("submitted");
      setScore(null);
      setFeedback("");

      setSuccess(
        "Project submitted successfully. Opening project evaluation..."
      );

      const evaluationUrl =
        `/project-evaluation?project=${encodeURIComponent(projectTitle.trim())}`;

      window.setTimeout(() => {
        router.push(evaluationUrl);
      }, 1200);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to save your project. Please try again."
      );
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <div className="flex items-center gap-3 text-slate-300">
          <Loader2 className="h-5 w-5 animate-spin" />
          Loading your project submission...
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/projects"
          className="mb-7 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>

        <div className="mb-8">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1.5 text-sm text-blue-300">
            <Send className="h-4 w-4" />
            Project Submission
          </div>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Submit Your Project
          </h1>

          <p className="mt-3 max-w-2xl text-slate-400">
            You don&apos;t need to publish your project online. Upload screenshots
            of your completed work and describe what you built.
          </p>
        </div>

        {error && (
          <div
            role="alert"
            className="mb-5 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300"
          >
            {error}
          </div>
        )}

        {success && (
          <div
            role="status"
            className="mb-5 flex items-start gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-300"
          >
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
            <div>
              <p className="font-semibold">{success}</p>
              <p className="mt-1 text-emerald-200/80">
                Your project details and evidence have been saved.
              </p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 sm:p-7">
            <h2 className="text-lg font-semibold">Project Details</h2>
            <p className="mt-1 text-sm text-slate-400">
              Tell us about the project you completed.
            </p>

            <div className="mt-6 space-y-5">
              <div>
                <label
                  htmlFor="projectTitle"
                  className="mb-2 block text-sm font-medium text-slate-200"
                >
                  Project Title *
                </label>
                <input
                  id="projectTitle"
                  value={projectTitle}
                  onChange={(event) => setProjectTitle(event.target.value)}
                  placeholder="e.g. Student Performance Analysis"
                  required
                  maxLength={150}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="mb-2 block text-sm font-medium text-slate-200"
                >
                  Project Description *
                </label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                  placeholder="What problem does your project solve? What did you build?"
                  required
                  rows={5}
                  maxLength={5000}
                  className="w-full resize-y rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
                <p className="mt-1 text-right text-xs text-slate-500">
                  {description.length}/5000
                </p>
              </div>

              <div>
                <label
                  htmlFor="technologies"
                  className="mb-2 block text-sm font-medium text-slate-200"
                >
                  Technologies / Tools Used *
                </label>
                <input
                  id="technologies"
                  value={technologies}
                  onChange={(event) => setTechnologies(event.target.value)}
                  placeholder="e.g. Python, Pandas, Matplotlib, SQL"
                  required
                  maxLength={500}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 sm:p-7">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="text-lg font-semibold">Project Evidence</h2>
                <p className="mt-1 text-sm text-slate-400">
                  Upload screenshots showing your completed project, output,
                  charts, or application.
                </p>
              </div>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-400">
                Optional • Max {MAX_FILES}
              </span>
            </div>

            <div className="mt-6">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/png,image/jpeg,image/jpg,image/webp"
                multiple
                onChange={handleFileSelection}
                className="hidden"
              />

              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                disabled={
                  existingEvidence.length + newFiles.length >= MAX_FILES
                }
                className="flex w-full flex-col items-center justify-center rounded-2xl border border-dashed border-slate-700 bg-slate-950/70 px-6 py-10 text-center transition hover:border-blue-500/60 hover:bg-slate-950 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
                  <ImagePlus className="h-6 w-6 text-blue-400" />
                </div>
                <p className="font-medium text-slate-200">
                  Upload project screenshots
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  PNG, JPG, JPEG or WEBP • Maximum 5 MB each
                </p>
              </button>

              {(existingEvidence.length > 0 || newFiles.length > 0) && (
                <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {existingEvidence.map((url, index) => (
                    <div
                      key={`${url}-${index}`}
                      className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-950"
                    >
                      <img
                        src={url}
                        alt={`Project evidence ${index + 1}`}
                        className="h-48 w-full object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => removeExistingEvidence(url)}
                        className="absolute right-2 top-2 rounded-lg bg-black/70 p-2 text-white opacity-0 transition group-hover:opacity-100 hover:bg-red-600"
                        aria-label="Remove screenshot"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                      <div className="absolute bottom-0 left-0 right-0 bg-black/60 px-3 py-2 text-xs text-slate-200">
                        Saved evidence
                      </div>
                    </div>
                  ))}

                  {newFiles.map((file, index) => (
                    <div
                      key={`${file.name}-${index}`}
                      className="group relative overflow-hidden rounded-xl border border-blue-500/30 bg-slate-950"
                    >
                      <img
                        src={URL.createObjectURL(file)}
                        alt={file.name}
                        className="h-48 w-full object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => removeNewFile(index)}
                        className="absolute right-2 top-2 rounded-lg bg-black/70 p-2 text-white transition hover:bg-red-600"
                        aria-label="Remove screenshot"
                      >
                        <X className="h-4 w-4" />
                      </button>
                      <div className="absolute bottom-0 left-0 right-0 truncate bg-black/60 px-3 py-2 text-xs text-slate-200">
                        {file.name}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>

          <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 sm:p-7">
            <h2 className="text-lg font-semibold">Optional Project Links</h2>
            <p className="mt-1 text-sm text-slate-400">
              You can add these later. They are not required for project
              submission.
            </p>

            <div className="mt-6 space-y-5">
              <div>
                <label
                  htmlFor="githubUrl"
                  className="mb-2 block text-sm font-medium text-slate-200"
                >
                  GitHub Repository{" "}
                  <span className="ml-2 text-xs text-slate-500">Optional</span>
                </label>
                <input
                  id="githubUrl"
                  type="url"
                  value={githubUrl}
                  onChange={(event) => setGithubUrl(event.target.value)}
                  placeholder="https://github.com/username/project"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              <div>
                <label
                  htmlFor="demoUrl"
                  className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-200"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo{" "}
                  <span className="text-xs text-slate-500">Optional</span>
                </label>
                <input
                  id="demoUrl"
                  type="url"
                  value={demoUrl}
                  onChange={(event) => setDemoUrl(event.target.value)}
                  placeholder="https://your-project.example.com"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 sm:p-7">
            <h2 className="text-lg font-semibold">What You Learned</h2>
            <p className="mt-1 text-sm text-slate-400">
              Explain the skills you practiced and the challenges you solved.
            </p>

            <div className="mt-6">
              <label
                htmlFor="learningSummary"
                className="mb-2 block text-sm font-medium text-slate-200"
              >
                Learning Summary
              </label>
              <textarea
                id="learningSummary"
                value={learningSummary}
                onChange={(event) => setLearningSummary(event.target.value)}
                placeholder="Which skills did you use? What challenges did you face, and how did you solve them?"
                rows={5}
                maxLength={5000}
                className="w-full resize-y rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />
            </div>
          </section>

          {status === "evaluated" && (
            <section className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-5 sm:p-7">
              <h2 className="font-semibold text-emerald-300">
                Previous Evaluation
              </h2>
              {score !== null && (
                <p className="mt-3 text-sm text-slate-300">
                  Score: <strong>{score}/100</strong>
                </p>
              )}
              {feedback && (
                <p className="mt-2 whitespace-pre-wrap text-sm text-slate-300">
                  {feedback}
                </p>
              )}
            </section>
          )}

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={() => router.push("/projects")}
              className="rounded-xl border border-slate-700 px-5 py-3 font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={saving || !userId}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {saving ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="h-5 w-5" />
                  Submit Project
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default function ProjectSubmissionPage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
          <div className="flex items-center gap-3 text-slate-300">
            <Loader2 className="h-5 w-5 animate-spin" />
            Loading project submission...
          </div>
        </main>
      }
    >
      <ProjectSubmissionContent />
    </Suspense>
  );
}