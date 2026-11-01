"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
const router = useRouter();
const [mode, setMode] = useState<"login" | "signup">("signup");
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [loading, setLoading] = useState(false);
const [error, setError] = useState("");
const [message, setMessage] = useState("");

async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
e.preventDefault();
setError("");
setMessage("");
setLoading(true);

try {
  if (mode === "signup") {
    const { data, error: authError } = await supabase.auth.signUp({
      email: email.trim(),
      password,
      options: {
        data: { full_name: name.trim() },
      },
    });

    if (authError) throw authError;

    if (data.session) {
      router.push("/onboarding");
      router.refresh();
    } else {
      setMessage(
        "Account created. Check your email to confirm your account, then log in."
      );
      setMode("login");
    }
  } else {
    const { error: authError } =
      await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });

    if (authError) throw authError;

    router.push("/dashboard");
    router.refresh();
  }
} catch (err: unknown) {
  setError(
    err instanceof Error ? err.message : "Something went wrong. Please try again."
  );
} finally {
  setLoading(false);
}

}

return (
<main className="flex min-h-screen bg-white">
<section className="relative hidden w-1/2 flex-col justify-between overflow-hidden bg-slate-950 p-12 text-white lg:flex">
<Link href="/" className="flex items-center gap-3">
<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-400 text-2xl">
🎓
</div>
<span className="text-2xl font-extrabold">
Career<span className="text-emerald-400">Path</span>
</span>
</Link>

    <div className="relative z-10 max-w-xl">
      <p className="font-bold uppercase tracking-widest text-emerald-400">
        Your journey starts here
      </p>
      <h1 className="mt-5 text-5xl font-extrabold leading-tight">
        Your future has more than one path.
      </h1>
      <p className="mt-6 text-lg leading-8 text-slate-300">
        Discover careers, learn practical skills, build projects and
        take your next step with confidence.
      </p>

      <div className="mt-10 space-y-4">
        {[
          "Explore careers that match your interests",
          "Follow a structured learning roadmap",
          "Track your progress as you grow",
        ].map((item) => (
          <div key={item} className="flex items-center gap-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-400">
              ✓
            </span>
            <span className="text-slate-200">{item}</span>
          </div>
        ))}
      </div>
    </div>

    <p className="text-sm text-slate-400">
      Learn. Build. Grow. Your journey, your pace.
    </p>

    <div className="absolute -right-20 top-1/4 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
    <div className="absolute -bottom-20 left-1/4 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
  </section>

  <section className="flex w-full items-center justify-center px-5 py-12 sm:px-10 lg:w-1/2">
    <div className="w-full max-w-md">
      <Link
        href="/"
        className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-emerald-700 lg:hidden"
      >
        ← Back to home
      </Link>

      <div className="mb-8">
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-3xl">
          {mode === "signup" ? "🌱" : "👋"}
        </div>

        <h2 className="text-3xl font-extrabold tracking-tight">
          {mode === "signup" ? "Create your account" : "Welcome back"}
        </h2>

        <p className="mt-3 leading-7 text-slate-500">
          {mode === "signup"
            ? "Start building your personalized career journey."
            : "Sign in to continue your learning journey."}
        </p>
      </div>

      <div className="mb-7 grid grid-cols-2 rounded-xl bg-slate-100 p-1">
        <button
          type="button"
          onClick={() => {
            setMode("signup");
            setError("");
            setMessage("");
          }}
          className={`rounded-lg px-4 py-3 text-sm font-bold transition ${
            mode === "signup"
              ? "bg-white text-emerald-700 shadow-sm"
              : "text-slate-500 hover:text-slate-800"
          }`}
        >
          Sign Up
        </button>
        <button
          type="button"
          onClick={() => {
            setMode("login");
            setError("");
            setMessage("");
          }}
          className={`rounded-lg px-4 py-3 text-sm font-bold transition ${
            mode === "login"
              ? "bg-white text-emerald-700 shadow-sm"
              : "text-slate-500 hover:text-slate-800"
          }`}
        >
          Log In
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {mode === "signup" && (
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Full name
            </label>
            <input
              id="name"
              type="text"
              autoComplete="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              className="w-full rounded-xl border border-slate-300 px-4 py-3.5 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
            />
          </div>
        )}

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Email address
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full rounded-xl border border-slate-300 px-4 py-3.5 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            autoComplete={
              mode === "signup" ? "new-password" : "current-password"
            }
            required
            minLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={
              mode === "signup" ? "At least 6 characters" : "Enter your password"
            }
            className="w-full rounded-xl border border-slate-300 px-4 py-3.5 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
          />
        </div>

        {error && (
          <div
            role="alert"
            className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-700"
          >
            {error}
          </div>
        )}

        {message && (
          <div
            role="status"
            className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm leading-6 text-emerald-800"
          >
            {message}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-4 font-bold text-white shadow-lg shadow-emerald-100 transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading
            ? "Please wait..."
            : mode === "signup"
              ? "Create Account"
              : "Log In"}
          {!loading && <span>→</span>}
        </button>
      </form>

      <p className="mt-7 text-center text-sm leading-6 text-slate-500">
        By continuing, you agree to use CareerPath responsibly and
        keep your account credentials secure.
      </p>

      <p className="mt-6 text-center text-sm text-slate-500">
        <Link href="/" className="font-semibold text-emerald-700 hover:underline">
          ← Return to home
        </Link>
      </p>
    </div>
  </section>
</main>

);
}