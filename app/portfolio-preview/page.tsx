
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
      <main className="flex min-h-screen items-center justify-center bg-[#070b18] text-white">
        <div className="text-center">
          <div className="mx-auto mb-5 h-12 w-12 animate-spin rounded-full border-4 border-slate-700 border-t-cyan-400" />
          <p className="text-lg text-slate-300">
            Preparing your portfolio...
          </p>
        </div>
      </main>
    );
  }

  if (error || !portfolio) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#070b18] px-5 text-white">
        <div className="w-full max-w-lg rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center shadow-2xl">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/10 text-2xl text-red-400">
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
            className="mt-7 rounded-xl bg-cyan-600 px-6 py-3 font-semibold transition hover:bg-cyan-500"
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

  const name = portfolio.name?.trim() || "Your Name";
  const careerGoal =
    portfolio.careerGoal?.trim() || "Aspiring Professional";

  const hasAbout = Boolean(portfolio.about?.trim());
  const hasEducation = Boolean(portfolio.education?.trim());
  const hasEmail = Boolean(portfolio.email?.trim());

  return (
    <main className="min-h-screen scroll-smooth bg-[#070b18] text-white">
      {/* NAVIGATION */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#070b18]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#home" className="text-xl font-black tracking-tight">
            <span>{name}</span>
            <span className="text-cyan-400">.</span>
          </a>

          <div className="hidden items-center gap-7 text-sm font-medium text-slate-300 md:flex">
            <a href="#home" className="transition hover:text-cyan-400">
              Home
            </a>
            <a href="#about" className="transition hover:text-cyan-400">
              About
            </a>
            <a href="#skills" className="transition hover:text-cyan-400">
              Skills
            </a>
            <a href="#education" className="transition hover:text-cyan-400">
              Education
            </a>
            <a href="#projects" className="transition hover:text-cyan-400">
              Projects
            </a>
            <a href="#contact" className="transition hover:text-cyan-400">
              Contact
            </a>
          </div>

          <button
            onClick={() => router.push("/portfolio")}
            className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm font-semibold transition hover:border-cyan-500 hover:text-cyan-300"
          >
            Edit Portfolio
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="relative overflow-hidden px-5 py-24 sm:py-32 lg:px-8"
      >
        <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.5fr_0.7fr]">
          <div>
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              PERSONAL PORTFOLIO
            </div>

            <p className="mb-4 text-lg font-medium text-slate-400">
              Hello, welcome to my professional space.
            </p>

            <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              I'm{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                {name}
              </span>
            </h1>

            <div className="mt-6 inline-flex rounded-lg border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-lg font-semibold text-cyan-300">
              {careerGoal}
            </div>

            <p className="mt-7 max-w-2xl whitespace-pre-wrap text-base leading-8 text-slate-300 sm:text-lg">
              {portfolio.about ||
                "Add your professional introduction in the portfolio editor to tell visitors about yourself, your interests and the work you enjoy creating."}
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-xl bg-cyan-600 px-7 py-3.5 font-bold text-white shadow-lg shadow-cyan-600/20 transition hover:-translate-y-1 hover:bg-cyan-500"
              >
                Explore My Projects →
              </a>

              <a
                href="#contact"
                className="rounded-xl border border-slate-700 bg-slate-900/70 px-7 py-3.5 font-semibold transition hover:-translate-y-1 hover:border-cyan-400"
              >
                Get In Touch
              </a>
            </div>

            <div className="mt-12 grid max-w-xl grid-cols-3 gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-3xl font-black text-cyan-300">
                  {skills.length.toString().padStart(2, "0")}
                </p>
                <p className="mt-2 text-xs text-slate-400 sm:text-sm">
                  Skills
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-3xl font-black text-cyan-300">
                  {projects.length.toString().padStart(2, "0")}
                </p>
                <p className="mt-2 text-xs text-slate-400 sm:text-sm">
                  Projects
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-3xl font-black text-cyan-300">
                  {hasEducation ? "01" : "00"}
                </p>
                <p className="mt-2 text-xs text-slate-400 sm:text-sm">
                  Education
                </p>
              </div>
            </div>
          </div>

          {/* PROFILE CARD */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 to-[#111b31] p-8 shadow-2xl">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                    Profile
                  </span>
                  <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
                    Portfolio
                  </span>
                </div>

                <div className="mx-auto mt-10 flex h-40 w-40 items-center justify-center rounded-full border-4 border-cyan-400/20 bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 text-6xl font-black text-cyan-300 shadow-xl shadow-cyan-950/30">
                  {initials}
                </div>

                <div className="mt-8 text-center">
                  <h2 className="text-2xl font-bold">{name}</h2>
                  <p className="mt-2 text-sm text-cyan-300">
                    {careerGoal}
                  </p>
                </div>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <div className="flex items-center justify-between gap-3 text-sm">
                    <span className="text-slate-500">Skills added</span>
                    <span className="font-semibold text-white">
                      {skills.length}
                    </span>
                  </div>
                  <div className="mt-4 flex items-center justify-between gap-3 text-sm">
                    <span className="text-slate-500">Projects added</span>
                    <span className="font-semibold text-white">
                      {projects.length}
                    </span>
                  </div>
                  {hasEmail && (
                    <div className="mt-4 break-all text-center text-sm text-slate-400">
                      {portfolio.email}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="border-y border-white/5 bg-slate-900/40 px-5 py-24 lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
              Get to know me
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              About Me
            </h2>
            <div className="mt-6 h-1.5 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500" />
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#0b1224] p-7 sm:p-10">
            <p className="whitespace-pre-wrap text-lg leading-9 text-slate-300">
              {portfolio.about ||
                "Your personal introduction will appear here once you add it in the portfolio editor."}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-5">
                <p className="text-sm text-slate-500">Career interest</p>
                <p className="mt-2 font-semibold text-cyan-300">
                  {careerGoal}
                </p>
              </div>

              <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-5">
                <p className="text-sm text-slate-500">Technical skills</p>
                <p className="mt-2 font-semibold text-cyan-300">
                  {skills.length} skills listed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
            What I work with
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            Technical Skills
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-slate-400">
            A collection of technologies and skills that I have developed
            through learning, projects and practical experience.
          </p>

          {skills.length > 0 ? (
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {skills.map((skill, index) => (
                <div
                  key={`${skill}-${index}`}
                  className="group rounded-2xl border border-white/10 bg-slate-900/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-slate-900"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-cyan-400/40">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-xl text-cyan-400 transition group-hover:scale-110">
                      ✦
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-bold capitalize text-white">
                    {skill}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Technical skill
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="mt-8 rounded-2xl border border-dashed border-slate-700 p-8 text-slate-400">
              Add your technical skills in the portfolio editor.
            </p>
          )}
        </div>
      </section>

      {/* EDUCATION */}
      <section
        id="education"
        className="border-y border-white/5 bg-slate-900/40 px-5 py-24 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
            My academic journey
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            Education
          </h2>

          {hasEducation ? (
            <div className="mt-12 max-w-4xl rounded-3xl border border-white/10 bg-[#0b1224] p-8 sm:p-10">
              <div className="flex items-start gap-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 text-2xl">
                  🎓
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
                    Academic Background
                  </p>

                  <h3 className="mt-3 text-2xl font-bold">
                    Education Details
                  </h3>

                  <p className="mt-5 whitespace-pre-wrap text-base leading-8 text-slate-300">
                    {portfolio.education}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <p className="mt-8 rounded-2xl border border-dashed border-slate-700 p-8 text-slate-400">
              Add your degree, institution and academic details in the
              portfolio editor.
            </p>
          )}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
            My work and experience
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            Featured Projects
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-slate-400">
            Projects that demonstrate my interests, technical skills,
            creativity and practical problem-solving.
          </p>

          {projects.length > 0 ? (
            <div className="mt-12 grid gap-7 lg:grid-cols-2">
              {projects.map((project, index) => {
                const technologies = (project.technologies ?? "")
                  .split(/[,;\n]/)
                  .map((tech) => tech.trim())
                  .filter(Boolean);

                return (
                  <article
                    key={`${project.title}-${index}`}
                    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-[#0b1224] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 sm:p-9"
                  >
                    <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-500/5 blur-3xl transition group-hover:bg-cyan-500/10" />

                    <div className="relative">
                      <div className="flex items-center justify-between">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-xl font-black text-cyan-300">
                          {String(index + 1).padStart(2, "0")}
                        </div>

                        <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                          Project
                        </span>
                      </div>

                      <h3 className="mt-8 text-2xl font-bold text-white sm:text-3xl">
                        {project.title}
                      </h3>

                      <p className="mt-5 whitespace-pre-wrap text-base leading-8 text-slate-400">
                        {project.description ||
                          "Add a detailed description of this project in the portfolio editor."}
                      </p>

                      {technologies.length > 0 && (
                        <div className="mt-7">
                          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-500">
                            Technologies used
                          </p>

                          <div className="flex flex-wrap gap-2">
                            {technologies.map((tech, techIndex) => (
                              <span
                                key={`${tech}-${techIndex}`}
                                className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-2 text-xs font-medium text-cyan-200"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {project.link?.trim() && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-cyan-600 px-5 py-3 font-semibold text-white transition hover:bg-cyan-500"
                        >
                          View Project
                          <span>↗</span>
                        </a>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="mt-10 rounded-3xl border border-dashed border-slate-700 p-12 text-center">
              <div className="text-4xl">💻</div>
              <h3 className="mt-5 text-xl font-bold">
                Your projects will appear here
              </h3>
              <p className="mt-3 text-slate-400">
                Add your projects, descriptions, technologies and links
                through the portfolio editor.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CAREER FOCUS */}
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-950/50 via-slate-900 to-indigo-950/50 p-8 sm:p-14">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
                Career direction
              </p>

              <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl">
                My Career Focus
              </h2>

              <p className="mt-5 text-xl font-semibold text-cyan-300">
                {careerGoal}
              </p>

              <p className="mt-5 leading-8 text-slate-300">
                I am interested in developing my knowledge, applying
                technical skills through practical projects and
                continuously improving in my chosen career field.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="border-t border-white/5 bg-slate-900/40 px-5 py-24 lg:px-8"
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            Let's Connect
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Thank you for taking the time to explore my portfolio.
            Feel free to contact me to discuss my projects, ideas
            and areas of professional interest.
          </p>

          {hasEmail ? (
            <div className="mt-10">
              <a
                href={`mailto:${portfolio.email}`}
                className="inline-flex items-center gap-3 rounded-xl bg-cyan-600 px-8 py-4 font-bold text-white shadow-lg shadow-cyan-600/20 transition hover:-translate-y-1 hover:bg-cyan-500"
              >
                Send Me an Email
                <span>→</span>
              </a>

              <p className="mt-5 break-all text-sm text-slate-400">
                {portfolio.email}
              </p>
            </div>
          ) : (
            <p className="mt-8 text-slate-400">
              Add your email address in the portfolio editor.
            </p>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-5 py-9 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">
          <div>
            <p className="font-bold text-white">{name}</p>
            <p className="mt-1 text-sm text-slate-500">
              {careerGoal}
            </p>
          </div>

          <p className="text-center text-sm text-slate-500">
            © {new Date().getFullYear()} {name}. All rights reserved.
          </p>

          <button
            onClick={() => router.push("/portfolio")}
            className="text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
          >
            Edit Portfolio →
          </button>
        </div>
      </footer>
    </main>
  );
}
