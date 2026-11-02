
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(true);
  const [canReset, setCanReset] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    let active = true;

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (!active) return;

      if (event === "PASSWORD_RECOVERY" && session) {
        setCanReset(true);
        setChecking(false);
      }
    });

    supabase.auth.getSession().then(({ data, error }) => {
      if (!active) return;

      if (data.session && !error) {
        setCanReset(true);
      }

      setChecking(false);
    });

    return () => {
      active = false;
      subscription.unsubscribe();
    };
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setMessage("");

    if (password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const { error: updateError } = await supabase.auth.updateUser({
        password,
      });

      if (updateError) throw updateError;

      setMessage(
        "Your password has been updated successfully. You can now log in with your new password."
      );

      setPassword("");
      setConfirmPassword("");
      setCanReset(false);
    } catch (err: unknown) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to update your password. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-5 py-12">
      <div className="w-full max-w-md rounded-2xl bg-white p-7 shadow-xl sm:p-10">
        <Link
          href="/login"
          className="text-sm font-semibold text-emerald-700 hover:underline"
        >
          ← Back to Login
        </Link>

        <div className="mb-6 mt-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-3xl">
          🔑
        </div>

        <h1 className="text-3xl font-extrabold text-slate-900">
          Reset Password
        </h1>

        <p className="mt-3 leading-7 text-slate-500">
          Create a new password for your CareerPath account.
        </p>

        {checking ? (
          <p className="mt-8 text-sm text-slate-500">
            Verifying your reset link...
          </p>
        ) : message ? (
          <div className="mt-8 space-y-5">
            <div
              role="status"
              className="rounded-xl bg-emerald-50 p-4 text-sm leading-6 text-emerald-800"
            >
              {message}
            </div>

            <Link
              href="/login"
              className="block w-full rounded-xl bg-emerald-600 px-5 py-4 text-center font-bold text-white hover:bg-emerald-700"
            >
              Go to Login
            </Link>
          </div>
        ) : !canReset ? (
          <div className="mt-8 space-y-5">
            <div className="rounded-xl bg-red-50 p-4 text-sm leading-6 text-red-700">
              This password reset link is invalid or expired. Please request a new one.
            </div>

            <Link
              href="/forgot-password"
              className="block w-full rounded-xl bg-emerald-600 px-5 py-4 text-center font-bold text-white hover:bg-emerald-700"
            >
              Request a New Reset Link
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                New Password
              </label>

              <input
                id="password"
                type="password"
                autoComplete="new-password"
                required
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter new password"
                className="w-full rounded-xl border border-slate-300 px-4 py-3.5 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
              />
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Confirm New Password
              </label>

              <input
                id="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                minLength={6}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm new password"
                className="w-full rounded-xl border border-slate-300 px-4 py-3.5 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
              />
            </div>

            {error && (
              <div
                role="alert"
                className="rounded-xl bg-red-50 p-4 text-sm text-red-700"
              >
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-emerald-600 px-5 py-4 font-bold text-white hover:bg-emerald-700 disabled:opacity-60"
            >
              {loading ? "Updating..." : "Update Password"}
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
