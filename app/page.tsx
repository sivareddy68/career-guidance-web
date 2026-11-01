"use client";

import Link from "next/link";

const features = [
{
icon: "🧭",
title: "Discover Careers",
description:
"Explore career options based on your interests, education and goals.",
color: "bg-blue-50",
href: "/career-discovery",
},
{
icon: "📚",
title: "Learn New Skills",
description:
"Follow structured courses with syllabuses, weekly tasks and assignments.",
color: "bg-emerald-50",
href: "/course?skill=Python",
},
{
icon: "🚀",
title: "Build Projects",
description:
"Turn your knowledge into practical projects and build your portfolio.",
color: "bg-purple-50",
href: "/projects",
},
{
icon: "📈",
title: "Track Your Growth",
description:
"Monitor your learning progress and celebrate completed milestones.",
color: "bg-orange-50",
href: "/dashboard",
},
];

const steps = [
{
number: "01",
title: "Tell us about yourself",
description:
"Share your education, current year, interests and career preferences.",
},
{
number: "02",
title: "Explore your opportunities",
description:
"Discover career paths and understand the skills each career requires.",
},
{
number: "03",
title: "Follow your roadmap",
description:
"Learn step by step, complete assignments and build real projects.",
},
];

export default function HomePage() {
return (
<main className="min-h-screen overflow-hidden bg-white text-slate-900">
{/* Navigation */}
<header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
<div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
<Link href="/" className="flex items-center gap-3">
<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500 text-2xl">
🎓
</div>
<div>
<h1 className="text-xl font-extrabold tracking-tight">
Career<span className="text-emerald-600">Path</span>
</h1>
<p className="text-xs text-slate-500">
Learn. Build. Grow.
</p>
</div>
</Link>

      <nav className="hidden items-center gap-8 md:flex">
        <a
          href="#features"
          className="text-sm font-medium text-slate-600 transition hover:text-emerald-600"
        >
          Features
        </a>
        <a
          href="#how-it-works"
          className="text-sm font-medium text-slate-600 transition hover:text-emerald-600"
        >
          How it works
        </a>
        <Link
          href="/roadmap"
          className="text-sm font-medium text-slate-600 transition hover:text-emerald-600"
        >
          Career Roadmaps
        </Link>
      </nav>

      <div className="flex items-center gap-3">
        <Link
          href="/login"
          className="hidden rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 sm:inline-flex"
        >
          Log in
        </Link>
        <Link
          href="/onboarding"
          className="rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
        >
          Get Started
        </Link>
      </div>
    </div>
  </header>

  {/* Hero */}
  <section className="relative bg-gradient-to-br from-emerald-50 via-white to-blue-50">
    <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 md:grid-cols-2 md:py-28">
      <div>
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm">
          <span>✦</span>
          YOUR FUTURE, YOUR WAY
        </div>

        <h2 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Discover your path.
          <span className="mt-2 block text-emerald-600">
            Build your future.
          </span>
        </h2>

        <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
          Not sure what career to choose? Start exploring. Discover
          opportunities, learn industry-relevant skills, complete
          projects and prepare for your professional journey — one
          step at a time.
        </p>

        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/onboarding"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-7 py-4 font-bold text-white shadow-lg shadow-emerald-200 transition hover:-translate-y-0.5 hover:bg-emerald-700"
          >
            Start Your Journey <span>→</span>
          </Link>

          <Link
            href="/career-discovery"
            className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-7 py-4 font-bold text-slate-700 transition hover:border-emerald-500 hover:text-emerald-700"
          >
            Explore Careers
          </Link>
        </div>

        <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-600">
          <span>✓ Personalized roadmaps</span>
          <span>✓ Practical projects</span>
          <span>✓ Track your progress</span>
        </div>
      </div>

      {/* Dashboard preview */}
      <div className="relative mx-auto w-full max-w-lg">
        <div className="absolute -left-5 top-10 h-28 w-28 rounded-full bg-emerald-200/60 blur-2xl" />
        <div className="absolute -right-5 bottom-10 h-32 w-32 rounded-full bg-blue-200/60 blur-2xl" />

        <div className="relative rounded-3xl border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-200/70 sm:p-7">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">YOUR LEARNING SPACE</p>
              <h3 className="mt-1 text-xl font-extrabold">
                Your next chapter
              </h3>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-2xl">
              🌱
            </div>
          </div>

          <div className="mt-7 rounded-2xl bg-slate-900 p-5 text-white">
            <p className="text-sm text-emerald-300">
              YOUR PERSONAL ROADMAP
            </p>
            <h4 className="mt-2 text-xl font-bold">
              Small steps. Big possibilities.
            </h4>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Discover skills, follow your learning plan and work
              towards your goals.
            </p>
            <Link
              href="/roadmap"
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-emerald-400 px-4 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-emerald-300"
            >
              Explore Roadmaps <span>→</span>
            </Link>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
              <span className="text-2xl">💻</span>
              <p className="mt-3 font-bold">Learn by doing</p>
              <p className="mt-1 text-xs leading-5 text-slate-500">
                Lessons, exercises and assignments
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
              <span className="text-2xl">🎯</span>
              <p className="mt-3 font-bold">Build your future</p>
              <p className="mt-1 text-xs leading-5 text-slate-500">
                Projects, preparation and progress
              </p>
            </div>
          </div>

          <div className="mt-5 flex items-center gap-3 rounded-xl border border-emerald-100 bg-emerald-50 p-4">
            <span className="text-2xl">💡</span>
            <p className="text-sm leading-6 text-emerald-900">
              <strong>Your journey, your pace.</strong> You do not
              need to decide your entire future today.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Features */}
  <section id="features" className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-bold uppercase tracking-widest text-emerald-600">
        EVERYTHING IN ONE PLACE
      </p>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
        Turn your ambitions into action
      </h2>
      <p className="mt-4 leading-7 text-slate-600">
        Get the guidance, learning resources and practical experience
        you need to move forward with confidence.
      </p>
    </div>

    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {features.map((feature) => (
        <Link
          key={feature.title}
          href={feature.href}
          className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl hover:shadow-slate-200/50"
        >
          <div
            className={`flex h-14 w-14 items-center justify-center rounded-2xl ${feature.color} text-3xl`}
          >
            {feature.icon}
          </div>
          <h3 className="mt-5 text-lg font-bold transition group-hover:text-emerald-700">
            {feature.title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            {feature.description}
          </p>
          <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-emerald-700">
            Explore <span>→</span>
          </span>
        </Link>
      ))}
    </div>
  </section>

  {/* How it works */}
  <section
    id="how-it-works"
    className="border-y border-slate-100 bg-slate-50 py-20"
  >
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-emerald-600">
          YOUR JOURNEY
        </p>
        <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
          Three steps to get started
        </h2>
        <p className="mt-4 leading-7 text-slate-600">
          Begin wherever you are. We will help you figure out the
          next step.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {steps.map((step) => (
          <div
            key={step.number}
            className="rounded-2xl border border-slate-200 bg-white p-7"
          >
            <span className="text-4xl font-extrabold text-emerald-200">
              {step.number}
            </span>
            <h3 className="mt-5 text-xl font-bold">{step.title}</h3>
            <p className="mt-3 leading-7 text-slate-600">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/onboarding"
          className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-7 py-4 font-bold text-white transition hover:bg-emerald-700"
        >
          Get Started Now <span>→</span>
        </Link>
      </div>
    </div>
  </section>

  {/* Footer */}
  <footer className="bg-slate-950 text-white">
    <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-lg font-extrabold">
          Career<span className="text-emerald-400">Path</span>
        </p>
        <p className="mt-1 text-sm text-slate-400">
          Learn skills. Build projects. Shape your future.
        </p>
      </div>

      <div className="flex flex-wrap gap-5 text-sm text-slate-300">
        <Link href="/career-discovery" className="hover:text-emerald-400">
          Careers
        </Link>
        <Link href="/roadmap" className="hover:text-emerald-400">
          Roadmaps
        </Link>
        <Link href="/dashboard" className="hover:text-emerald-400">
          Dashboard
        </Link>
      </div>

      <p className="text-sm text-slate-500">
        © 2026 CareerPath
      </p>
    </div>
  </footer>
</main>

);
}