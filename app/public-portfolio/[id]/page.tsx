
import { createClient } from "@supabase/supabase-js";
import Link from "next/link";
import { connection } from "next/server";
import { Suspense } from "react";

type PortfolioProject = {
  title?: string;
  description?: string;
  technologies?: string;
  link?: string;
};

type PortfolioData = {
  user_id?: string;
  name?: string;
  education?: string;
  career_goal?: string;
  about?: string;
  skills?: string;
  email?: string;
  projects?: PortfolioProject[] | string;
  updated_at?: string;
  is_public?: boolean;
};

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    "Supabase environment variables are missing. Check your .env.local file."
  );
}

const supabase = createClient(supabaseUrl, supabaseKey);

function safeExternalUrl(value?: string) {
  if (!value?.trim()) return null;

  try {
    const url = new URL(value.trim());

    if (url.protocol === "https:" || url.protocol === "http:") {
      return url.toString();
    }

    return null;
  } catch {
    return null;
  }
}

function parseProjects(value: PortfolioData["projects"]) {
  if (Array.isArray(value)) return value;

  if (typeof value === "string") {
    try {
      const parsed: unknown = JSON.parse(value);
      if (Array.isArray(parsed)) return parsed as PortfolioProject[];
    } catch {
      return [];
    }
  }

  return [];
}

function parseSkills(value?: string) {
  return (value || "")
    .split(/[,;\n]/)
    .map((skill) => skill.trim())
    .filter(Boolean);
}

function initials(name?: string) {
  if (!name?.trim()) return "P";

  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

// Main portfolio content
async function PublicPortfolioContent({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  await connection();

  const { id } = await params;

  const { data, error } = await supabase
    .from("student_portfolios")
    .select(
      "user_id,name,education,career_goal,about,skills,email,projects,updated_at,is_public"
    )
    .eq("user_id", id)
    .eq("is_public", true)
    .maybeSingle();

  if (error) {
    console.error("Public portfolio error:", error);

    return (
      <main className="flex min-h-screen items-center justify-center bg-[#070b16] px-5 text-white">
        <div className="max-w-lg rounded-3xl border border-white/10 bg-white/[0.04] p-10 text-center">
          <div className="text-4xl text-blue-400">!</div>
          <h1 className="mt-5 text-2xl font-bold">
            Unable to load portfolio
          </h1>
          <p className="mt-3 text-slate-400">
            Something went wrong while loading this portfolio.
            Please try again later.
          </p>
          <Link
            href="/"
            className="mt-7 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-500"
          >
            Go to CareerPath
          </Link>
        </div>
      </main>
    );
  }

  if (!data) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#070b16] px-5 text-white">
        <div className="max-w-lg rounded-3xl border border-white/10 bg-white/[0.04] p-10 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-3xl text-blue-400">
            ?
          </div>
          <h1 className="mt-6 text-3xl font-bold">
            Portfolio Not Found
          </h1>
          <p className="mt-4 leading-7 text-slate-400">
            This portfolio does not exist or has not been made public.
          </p>
          <Link
            href="/"
            className="mt-7 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-500"
          >
            Go to CareerPath
          </Link>
        </div>
      </main>
    );
  }

  const portfolio = data as PortfolioData;

  const projects = parseProjects(portfolio.projects).filter(
    (project) =>
      typeof project.title === "string" &&
      project.title.trim().length > 0
  );

  const skills = parseSkills(portfolio.skills);
  const name = portfolio.name?.trim() || "My Portfolio";
  const role = portfolio.career_goal?.trim() || "Aspiring Developer";
  const about =
    portfolio.about?.trim() ||
    "Welcome to my professional portfolio.";
  const email = portfolio.email?.trim();
  const emailIsValid =
    email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  return (
    <main className="min-h-screen scroll-smooth bg-[#070b16] text-white selection:bg-blue-500/30">
      {/* NAVIGATION */}
      <nav className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#070b16]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#home" className="text-xl font-black tracking-tight">
            <span className="text-white">{name}</span>
            <span className="text-blue-400">.</span>
          </a>

          <div className="hidden items-center gap-7 text-sm font-medium text-slate-400 md:flex">
            {[
              ["Home", "#home"],
              ["About", "#about"],
              ["Skills", "#skills"],
              ["Education", "#education"],
              ["Projects", "#projects"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="transition hover:text-blue-400"
              >
                {label}
              </a>
            ))}
          </div>

          {emailIsValid && (
            <a
              href={`mailto:${email}`}
              className="rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300 transition hover:bg-blue-500/20"
            >
              Let's Talk
            </a>
          )}
        </div>

        <div className="flex justify-center gap-5 overflow-x-auto px-4 pb-3 text-xs text-slate-400 md:hidden">
          {[
            ["Home", "#home"],
            ["About", "#about"],
            ["Skills", "#skills"],
            ["Projects", "#projects"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="whitespace-nowrap hover:text-blue-400"
            >
              {label}
            </a>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="relative isolate overflow-hidden px-5 py-24 sm:py-32 lg:px-8"
      >
        <div className="pointer-events-none absolute -top-40 left-1/4 -z-10 h-[550px] w-[550px] rounded-full bg-blue-600/15 blur-[130px]" />
        <div className="pointer-events-none absolute right-0 top-40 -z-10 h-[350px] w-[350px] rounded-full bg-purple-600/10 blur-[110px]" />

        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.4fr_0.6fr]">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-4 py-2 text-sm text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Welcome to my portfolio
            </div>

            <p className="mt-9 text-sm font-bold uppercase tracking-[0.3em] text-blue-400">
              Hello, I'm
            </p>

            <h1 className="mt-4 max-w-4xl text-5xl font-black leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
              {name.split(" ").map((word, index) => (
                <span
                  key={`${word}-${index}`}
                  className={
                    index === 0
                      ? "block text-white"
                      : "block bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent"
                  }
                >
                  {word}
                </span>
              ))}
            </h1>

            <h2 className="mt-7 text-xl font-bold text-slate-300 sm:text-2xl">
              {role}
            </h2>

            <p className="mt-6 max-w-2xl whitespace-pre-wrap text-base leading-8 text-slate-400 sm:text-lg">
              {about}
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-7 py-4 font-bold shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:shadow-blue-600/30"
              >
                Explore My Work <span className="ml-2">↗</span>
              </a>

              <a
                href="#contact"
                className="rounded-xl border border-white/15 bg-white/[0.04] px-7 py-4 font-bold text-white transition hover:-translate-y-1 hover:border-blue-400/50 hover:bg-white/[0.08]"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-4">
                <p className="text-2xl font-black text-blue-400">
                  {skills.length.toString().padStart(2, "0")}
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  Technical Skills
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-4">
                <p className="text-2xl font-black text-purple-400">
                  {projects.length.toString().padStart(2, "0")}
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  Projects Built
                </p>
              </div>
            </div>
          </div>

          {/* PROFILE CARD */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-blue-500/30 to-purple-600/30 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#151e35] to-[#0b1020] p-8 shadow-2xl">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
                    Developer Profile
                  </span>
                  <span className="text-blue-400">✦</span>
                </div>

                <div className="my-12 flex justify-center">
                  <div className="flex h-48 w-48 items-center justify-center rounded-full border border-blue-400/30 bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-6xl font-black text-blue-300 shadow-[0_0_70px_rgba(59,130,246,0.15)]">
                    {initials(name)}
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-black">{name}</h3>
                  <p className="mt-2 text-sm text-blue-300">{role}</p>
                </div>

                <div className="mt-8 flex items-center justify-center gap-2 border-t border-white/10 pt-6 text-xs text-slate-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Learning · Building · Growing
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="border-y border-white/[0.06] bg-white/[0.025] px-5 py-24 lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-400">
              Get to know me
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              About Me<span className="text-blue-400">.</span>
            </h2>
          </div>

          <div>
            <p className="whitespace-pre-wrap text-lg leading-9 text-slate-300">
              {about}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-[#0c1426] p-5">
                <p className="text-sm text-slate-500">Current focus</p>
                <p className="mt-2 font-bold text-white">{role}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-[#0c1426] p-5">
                <p className="text-sm text-slate-500">My approach</p>
                <p className="mt-2 font-bold text-white">
                  Learn by building
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-400">
            My Expertise
          </p>
          <h2 className="mt-4 text-4xl font-black sm:text-5xl">
            Technical Skills<span className="text-blue-400">.</span>
          </h2>
          <p className="mt-5 max-w-2xl leading-8 text-slate-400">
            Technologies and tools I have been learning and using to develop projects.
          </p>

          {skills.length > 0 ? (
            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {skills.map((skill, index) => (
                <div
                  key={`${skill}-${index}`}
                  className="group rounded-2xl border border-white/10 bg-gradient-to-br from-[#121c31] to-[#0b1120] p-6 transition duration-300 hover:-translate-y-2 hover:border-blue-400/50 hover:shadow-xl hover:shadow-blue-950/30"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-sm font-black text-blue-400 transition group-hover:bg-blue-500 group-hover:text-white">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-6 break-words text-lg font-bold text-white">
                    {skill}
                  </h3>
                  <p className="mt-2 text-xs text-slate-500">
                    Technical skill
                  </p>
                  <div className="mt-5 h-1 overflow-hidden rounded-full bg-slate-800">
                    <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all group-hover:w-full" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="mt-8 text-slate-400">
              No skills have been added yet.
            </p>
          )}
        </div>
      </section>

      {/* EDUCATION */}
      <section
        id="education"
        className="border-y border-white/[0.06] bg-white/[0.025] px-5 py-24 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-400">
            My Background
          </p>
          <h2 className="mt-4 text-4xl font-black sm:text-5xl">
            Education<span className="text-blue-400">.</span>
          </h2>

          <div className="mt-12 max-w-4xl rounded-3xl border border-white/10 bg-[#0c1426] p-7 sm:p-10">
            <div className="flex gap-6">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-500/10 text-2xl text-blue-300">
                🎓
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-blue-400">
                  Academic Background
                </p>
                <h3 className="mt-3 text-2xl font-bold">My Education</h3>
                <p className="mt-4 whitespace-pre-wrap leading-8 text-slate-300">
                  {portfolio.education ||
                    "Education details have not been added yet."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-400">
            My Work
          </p>
          <h2 className="mt-4 text-4xl font-black sm:text-5xl">
            Featured Projects<span className="text-blue-400">.</span>
          </h2>
          <p className="mt-5 max-w-2xl leading-8 text-slate-400">
            A selection of projects that demonstrate my learning, creativity, and development skills.
          </p>

          {projects.length > 0 ? (
            <div className="mt-12 grid gap-7 lg:grid-cols-2">
              {projects.map((project, index) => {
                const projectUrl = safeExternalUrl(project.link);
                const technologies = (project.technologies || "")
                  .split(/[,;\n]/)
                  .map((tech) => tech.trim())
                  .filter(Boolean);

                return (
                  <article
                    key={`${project.title}-${index}`}
                    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#131e34] to-[#0b1120] p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-400/40 hover:shadow-2xl hover:shadow-blue-950/30 sm:p-9"
                  >
                    <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-500/[0.07] blur-3xl transition group-hover:bg-blue-500/15" />

                    <div className="relative flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 font-black text-blue-400">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                        Project
                      </span>
                    </div>

                    <h3 className="relative mt-8 text-2xl font-black leading-snug">
                      {project.title}
                    </h3>

                    <p className="relative mt-4 whitespace-pre-wrap leading-8 text-slate-400">
                      {project.description ||
                        "Project description not provided."}
                    </p>

                    {technologies.length > 0 && (
                      <div className="relative mt-7 flex flex-wrap gap-2">
                        {technologies.map((tech, techIndex) => (
                          <span
                            key={`${tech}-${techIndex}`}
                            className="rounded-full border border-blue-400/20 bg-blue-500/[0.08] px-3 py-2 text-xs font-semibold text-blue-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {projectUrl && (
                      <a
                        href={projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative mt-8 inline-flex items-center gap-2 font-bold text-blue-400 transition hover:gap-4 hover:text-blue-300"
                      >
                        View Project <span>↗</span>
                      </a>
                    )}
                  </article>
                );
              })}
            </div>
          ) : (
            <p className="mt-8 text-slate-400">
              No projects have been added yet.
            </p>
          )}
        </div>
      </section>

      {/* CAREER FOCUS */}
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2rem] border border-blue-400/20 bg-gradient-to-br from-[#122448] via-[#171b3b] to-[#101327] p-8 sm:p-14">
            <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-purple-500/20 blur-[100px]" />

            <div className="relative max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-300">
                My Career Goal
              </p>
              <h2 className="mt-5 text-3xl font-black leading-tight sm:text-5xl">
                Building my future as a{" "}
                <span className="text-blue-300">{role}</span>
              </h2>
              <p className="mt-6 leading-8 text-slate-300">
                I am continuously learning, developing practical projects, and improving my technical knowledge to grow as a professional.
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex rounded-xl bg-white px-6 py-3.5 font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-blue-100"
              >
                Connect With Me ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="border-t border-white/[0.06] bg-white/[0.025] px-5 py-24 lg:px-8"
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-400">
            Get In Touch
          </p>
          <h2 className="mt-4 text-4xl font-black sm:text-6xl">
            Let's Connect<span className="text-blue-400">.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Thank you for visiting my portfolio. I'm always interested in learning, sharing ideas, and connecting with people.
          </p>

          {emailIsValid ? (
            <div className="mt-10">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 font-bold shadow-xl shadow-blue-600/20 transition hover:-translate-y-1 hover:shadow-blue-600/30"
              >
                <span>✉</span>
                Email Me
                <span>↗</span>
              </a>
              <p className="mt-5 break-all text-sm text-slate-400">
                {email}
              </p>
            </div>
          ) : (
            <p className="mt-8 text-slate-400">
              Contact information has not been added yet.
            </p>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.08] px-5 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} {name}. All rights reserved.
          </p>
          <a
            href="#home"
            className="text-sm font-semibold text-blue-400 transition hover:text-blue-300"
          >
            Back to top ↑
          </a>
        </div>
      </footer>
    </main>
  );
}

// Page wrapper with Suspense
export default function PublicPortfolioPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-[#070b16] text-slate-300">
          Loading portfolio...
        </main>
      }
    >
      <PublicPortfolioContent params={params} />
    </Suspense>
  );
}
