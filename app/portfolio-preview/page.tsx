"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

type PortfolioProject = {
  title?: string;
  description?: string;
  technologies?: string;
  link?: string;
};

type PortfolioData = {
  name?: string;
  education?: string;
  careerGoal?: string;
  about?: string;
  skills?: string;
  email?: string;
  projects?: PortfolioProject[];
};

export default function PortfolioPreviewPage() {
  const router = useRouter();

  const [portfolio, setPortfolio] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadPortfolio() {
      try {
        const {
          data: { user },
          error: authError,
        } = await supabase.auth.getUser();

        if (authError) throw authError;

        if (!user) {
          setError("Please log in to view your portfolio.");
          return;
        }

        const { data, error: fetchError } = await supabase
          .from("student_portfolios")
          .select("*")
          .eq("user_id", user.id)
          .limit(1)
          .maybeSingle();

        if (fetchError) throw fetchError;

        if (!data) {
          setError(
            "No saved portfolio found. Please create and save your portfolio first."
          );
          return;
        }

        const saved = data.portfolio_data ?? data.portfolio ?? data;

        const parsed =
          typeof saved === "string" ? JSON.parse(saved) : saved;

        setPortfolio({
          name: parsed.name ?? data.name ?? "",
          education: parsed.education ?? data.education ?? "",
          careerGoal:
            parsed.careerGoal ??
            parsed.career_goal ??
            data.career_goal ??
            "",
          about: parsed.about ?? data.about ?? "",
          skills: parsed.skills ?? data.skills ?? "",
          email: parsed.email ?? data.email ?? "",
          projects: Array.isArray(parsed.projects)
            ? parsed.projects
            : [],
        });
      } catch (err) {
        console.error("Portfolio loading error:", err);
        setError(
          "Unable to load your portfolio. Please check your saved portfolio data."
        );
      } finally {
        setLoading(false);
      }
    }

    void loadPortfolio();
  }, []);

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#020617] text-white">
        <div className="text-center">
          <div className="mx-auto mb-5 h-10 w-10 animate-spin rounded-full border-4 border-slate-700 border-t-blue-500" />
          <p className="text-lg text-slate-300">
            Loading your portfolio...
          </p>
        </div>
      </main>
    );
  }

  if (error || !portfolio) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#020617] px-5 text-white">
        <div className="w-full max-w-lg rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center shadow-2xl">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/10 text-2xl">
            !
          </div>

          <h1 className="mt-5 text-2xl font-bold">
            Portfolio unavailable
          </h1>

          <p className="mt-4 leading-7 text-slate-400">
            {error}
          </p>

          <button
            onClick={() => router.push("/portfolio")}
            className="mt-7 rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500"
          >
            Back to Portfolio Editor
          </button>
        </div>
      </main>
    );
  }

  const skills = (portfolio.skills ?? "")
    .split(/[,;\n]/)
    .map((skill) => skill.trim())
    .filter(Boolean);

  const projects = (portfolio.projects ?? []).filter(
    (project) => project.title?.trim()
  );

  const initials =
    portfolio.name
      ?.trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((word) => word[0])
      .join("")
      .toUpperCase() || "P";

  return (
    <main className="min-h-screen scroll-smooth bg-[#020617] text-white">
      {/* ================= NAVIGATION ================= */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#020617]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a
            href="#home"
            className="text-xl font-black tracking-tight"
          >
            <span className="text-white">
              {portfolio.name || "My"}
            </span>
            <span className="text-blue-400">Portfolio</span>
            <span className="text-blue-400">.</span>
          </a>

          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a
              href="#home"
              className="transition hover:text-blue-400"
            >
              Home
            </a>

            <a
              href="#about"
              className="transition hover:text-blue-400"
            >
              About
            </a>

            <a
              href="#skills"
              className="transition hover:text-blue-400"
            >
              Skills
            </a>

            <a
              href="#education"
              className="transition hover:text-blue-400"
            >
              Education
            </a>

            <a
              href="#projects"
              className="transition hover:text-blue-400"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="transition hover:text-blue-400"
            >
              Contact
            </a>
          </div>

          <button
            onClick={() => router.push("/portfolio")}
            className="rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm font-semibold transition hover:border-blue-500 hover:bg-slate-800"
          >
            Edit Portfolio
          </button>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section
        id="home"
        className="relative overflow-hidden px-5 py-24 sm:py-32 lg:px-8"
      >
        {/* Background decoration */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.4fr_0.6fr]">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              Welcome to my portfolio
            </div>

            <h1 className="max-w-5xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                {portfolio.name || "Your Name"}
              </span>
            </h1>

            <p className="mt-7 text-xl font-semibold text-slate-300 sm:text-2xl">
              {portfolio.careerGoal || "Aspiring Professional"}
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              {portfolio.about ||
                "Welcome to my professional portfolio. More information about me will appear here once you update your portfolio."}
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-xl bg-blue-600 px-7 py-3.5 font-semibold shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-500"
              >
                View My Work
              </a>

              <a
                href="#contact"
                className="rounded-xl border border-slate-700 bg-slate-900/60 px-7 py-3.5 font-semibold transition hover:-translate-y-0.5 hover:border-slate-500 hover:bg-slate-800"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <span className="rounded-full border border-slate-800 bg-slate-900/70 px-4 py-2 text-sm text-slate-400">
                {skills.length} Skills
              </span>

              <span className="rounded-full border border-slate-800 bg-slate-900/70 px-4 py-2 text-sm text-slate-400">
                {projects.length} Projects
              </span>

              <span className="rounded-full border border-slate-800 bg-slate-900/70 px-4 py-2 text-sm text-slate-400">
                Career Portfolio
              </span>
            </div>
          </div>

          {/* Profile card */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-2xl" />

              <div className="relative flex h-64 w-64 items-center justify-center rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-800 to-slate-950 shadow-2xl sm:h-80 sm:w-80">
                <div className="flex h-40 w-40 items-center justify-center rounded-full border border-blue-400/30 bg-blue-500/10 text-6xl font-black text-blue-400 sm:h-48 sm:w-48 sm:text-7xl">
                  {initials}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section
        id="about"
        className="border-y border-white/5 bg-slate-900/40 px-5 py-24 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
              Introduction
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              About Me
            </h2>

            <p className="mt-8 whitespace-pre-wrap text-lg leading-9 text-slate-300">
              {portfolio.about ||
                "Your introduction will appear here."}
            </p>
          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section
        id="skills"
        className="px-5 py-24 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
            My Expertise
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            Technical Skills
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-slate-400">
            Technologies and skills I have developed through my learning,
            projects, and practical experience.
          </p>

          {skills.length > 0 ? (
            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {skills.map((skill, index) => (
                <div
                  key={`${skill}-${index}`}
                  className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-slate-800"
                >
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 font-bold text-blue-400 transition group-hover:bg-blue-500/20">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3 className="font-bold text-slate-100">
                    {skill}
                  </h3>

                  <div className="mt-4 h-1 overflow-hidden rounded-full bg-slate-800">
                    <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="mt-8 text-slate-400">
              Add your skills in the portfolio editor.
            </p>
          )}
        </div>
      </section>

      {/* ================= EDUCATION ================= */}
      <section
        id="education"
        className="border-y border-white/5 bg-slate-900/40 px-5 py-24 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
            My Background
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            Education
          </h2>

          <div className="mt-12 max-w-4xl rounded-3xl border border-slate-800 bg-slate-950/80 p-8 shadow-xl sm:p-10">
            <div className="flex gap-6">
              <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-xl text-blue-400 sm:flex">
                🎓
              </div>

              <div>
                <h3 className="text-2xl font-bold">
                  Academic Background
                </h3>

                <p className="mt-5 whitespace-pre-wrap leading-8 text-slate-300">
                  {portfolio.education ||
                    "Add your education details in the portfolio editor."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section
        id="projects"
        className="px-5 py-24 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
            What I've Built
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            Featured Projects
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-slate-400">
            A selection of projects that demonstrate my skills,
            problem-solving ability, and practical experience.
          </p>

          {projects.length > 0 ? (
            <div className="mt-12 grid gap-7 lg:grid-cols-2">
              {projects.map((project, index) => (
                <article
                  key={`${project.title}-${index}`}
                  className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 p-8 transition duration-300 hover:-translate-y-1 hover:border-blue-500/50"
                >
                  <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-blue-500/5 blur-3xl transition group-hover:bg-blue-500/10" />

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 font-bold text-blue-400">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      {project.link?.trim() && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-lg border border-slate-700 px-3 py-2 text-sm text-slate-300 transition hover:border-blue-500 hover:text-blue-400"
                        >
                          Open ↗
                        </a>
                      )}
                    </div>

                    <h3 className="mt-7 text-2xl font-bold">
                      {project.title}
                    </h3>

                    <p className="mt-4 whitespace-pre-wrap leading-8 text-slate-400">
                      {project.description ||
                        "Project description not provided."}
                    </p>

                    {project.technologies?.trim() && (
                      <div className="mt-7 flex flex-wrap gap-2">
                        {project.technologies
                          .split(/[,;\n]/)
                          .map((tech) => tech.trim())
                          .filter(Boolean)
                          .map((tech, techIndex) => (
                            <span
                              key={`${tech}-${techIndex}`}
                              className="rounded-full border border-blue-500/20 bg-blue-500/5 px-3 py-1.5 text-xs font-medium text-blue-300"
                            >
                              {tech}
                            </span>
                          ))}
                      </div>
                    )}

                    {project.link?.trim() && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-7 inline-flex items-center font-semibold text-blue-400 transition hover:text-blue-300"
                      >
                        View Project
                        <span className="ml-2 transition group-hover:translate-x-1">
                          →
                        </span>
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-2xl border border-dashed border-slate-700 p-10 text-center">
              <p className="text-slate-400">
                Your projects will appear here after you add them.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ================= CAREER CTA ================= */}
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-purple-600/10 p-8 sm:p-12">
            <div className="relative max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
                Career Focus
              </p>

              <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                Building my career as a{" "}
                <span className="text-blue-400">
                  {portfolio.careerGoal ||
                    "professional"}
                </span>
              </h2>

              <p className="mt-5 leading-8 text-slate-400">
                I am continuously learning, building projects, and
                improving my technical skills to become a strong
                professional in my chosen career field.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section
        id="contact"
        className="border-t border-white/5 bg-slate-900/40 px-5 py-24 lg:px-8"
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
            Get In Touch
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            Let's Connect
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Thank you for visiting my portfolio. Feel free to
            reach out for professional opportunities,
            collaborations, or interesting projects.
          </p>

          {portfolio.email?.trim() ? (
            <div className="mt-9">
              <a
                href={`mailto:${portfolio.email}`}
                className="inline-flex items-center rounded-xl bg-blue-600 px-8 py-4 font-semibold shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-500"
              >
                Email Me
                <span className="ml-3">→</span>
              </a>

              <p className="mt-5 text-sm text-slate-500">
                {portfolio.email}
              </p>
            </div>
          ) : (
            <p className="mt-8 text-slate-400">
              Add your email in the portfolio editor.
            </p>
          )}
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-slate-800 px-5 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()}{" "}
            {portfolio.name || "My Portfolio"}.
            All rights reserved.
          </p>

          <button
            onClick={() => router.push("/portfolio")}
            className="transition hover:text-blue-400"
          >
            Edit Portfolio
          </button>
        </div>
      </footer>
    </main>
  );
}