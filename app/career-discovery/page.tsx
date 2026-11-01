"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

type Career = {
  id?: string | number;
  title: string;
  category?: string;
  description?: string;
  daily_work?: string;
  beginner_skills?: string[];
  advanced_skills?: string[];
};

type StudentProfile = {
  study_type?: string;
  branch?: string;
  interests?: string[];
  skills?: string[];
  career_goal?: string;
  career_status?: string;
};

export default function CareerDiscoveryPage() {
  const router = useRouter();

  const [careers, setCareers] = useState<Career[]>([]);
  const [profile, setProfile] = useState<StudentProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadCareerData();
  }, []);

  async function loadCareerData() {
    try {
      setLoading(true);
      setError("");

      // Get logged-in user
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError) {
        throw userError;
      }

      if (!user) {
        router.push("/login");
        return;
      }

      // Get student profile
      const { data: profileData, error: profileError } = await supabase
        .from("student_profiles")
        .select(
          "study_type, branch, interests, skills, career_goal, career_status"
        )
        .eq("user_id", user.id)
        .single();

      if (profileError) {
        throw profileError;
      }

      setProfile(profileData);

      // Get careers
      const { data: careerData, error: careerError } = await supabase
        .from("careers")
        .select("*")
        .order("title", { ascending: true });

      if (careerError) {
        throw careerError;
      }

      setCareers(careerData || []);
    } catch (err: unknown) {
      console.error("Career discovery error:", err);

      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError(JSON.stringify(err));
      }
    } finally {
      setLoading(false);
    }
  }

  function exploreCareer(career: Career) {
    const careerName = encodeURIComponent(career.title);
    router.push(`/roadmap?career=${careerName}`);
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">🎯</div>
          <h2 className="text-xl font-semibold text-slate-800">
            Finding career options for you...
          </h2>
          <p className="text-slate-500 mt-2">
            We are checking your profile and available careers.
          </p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
        <div className="max-w-lg w-full bg-white rounded-2xl shadow-sm border border-red-200 p-8 text-center">
          <div className="text-4xl mb-4">⚠️</div>

          <h2 className="text-xl font-bold text-slate-800 mb-3">
            Unable to load careers
          </h2>

          <p className="text-red-600 text-sm break-words">{error}</p>

          <button
            onClick={loadCareerData}
            className="mt-6 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700"
          >
            Try Again
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              Career Discovery
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Explore career paths that match your interests and skills
            </p>
          </div>

          <button
            onClick={() => router.push("/dashboard")}
            className="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50"
          >
            Dashboard
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Welcome section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-white mb-10">
          <p className="text-blue-100 text-sm font-medium mb-2">
            Your Career Exploration
          </p>

          <h2 className="text-3xl font-bold mb-3">
            Let's explore your possibilities 🚀
          </h2>

          <p className="text-blue-100 max-w-2xl">
            You don't have to choose a career immediately. Explore different
            options, understand the skills required, and decide what interests
            you.
          </p>

          {profile && (
            <div className="mt-6 flex flex-wrap gap-3">
              {profile.study_type && (
                <span className="px-4 py-2 bg-white/15 rounded-full text-sm">
                  {profile.study_type}
                </span>
              )}

              {profile.branch && (
                <span className="px-4 py-2 bg-white/15 rounded-full text-sm">
                  {profile.branch}
                </span>
              )}

              {profile.career_status === "unsure" && (
                <span className="px-4 py-2 bg-white/15 rounded-full text-sm">
                  Exploring careers
                </span>
              )}
            </div>
          )}
        </section>

        {/* Profile summary */}
        {profile && (
          <section className="bg-white rounded-2xl border border-slate-200 p-6 mb-10">
            <h3 className="text-lg font-bold text-slate-900 mb-4">
              Your Profile
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-slate-500 mb-2">Interests</p>

                <div className="flex flex-wrap gap-2">
                  {profile.interests && profile.interests.length > 0 ? (
                    profile.interests.map((interest) => (
                      <span
                        key={interest}
                        className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm"
                      >
                        {interest}
                      </span>
                    ))
                  ) : (
                    <span className="text-slate-400 text-sm">
                      No interests selected
                    </span>
                  )}
                </div>
              </div>

              <div>
                <p className="text-sm text-slate-500 mb-2">
                  Current Skills
                </p>

                <div className="flex flex-wrap gap-2">
                  {profile.skills && profile.skills.length > 0 ? (
                    profile.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-green-50 text-green-700 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))
                  ) : (
                    <span className="text-slate-400 text-sm">
                      No skills selected
                    </span>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Career list */}
        <section>
          <div className="flex items-end justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Career Options
              </h2>

              <p className="text-slate-500 mt-1">
                Explore different paths before making your decision.
              </p>
            </div>

            <span className="text-sm text-slate-500">
              {careers.length} careers
            </span>
          </div>

          {careers.length === 0 ? (
            <div className="bg-white border border-slate-200 rounded-2xl p-10 text-center">
              <div className="text-4xl mb-4">🔎</div>

              <h3 className="text-lg font-bold text-slate-800">
                No careers found
              </h3>

              <p className="text-slate-500 mt-2">
                Add career records to your careers table in Supabase.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {careers.map((career, index) => (
                <div
                  key={career.id ?? `${career.title}-${index}`}
                  className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all"
                >
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-2xl">
                      {getCareerIcon(career.title)}
                    </div>

                    {career.category && (
                      <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs">
                        {career.category}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {career.title}
                  </h3>

                  <p className="text-sm text-slate-500 leading-6 min-h-[72px]">
                    {career.description ||
                      "Explore this career to understand the skills, learning path, projects, and opportunities."}
                  </p>

                  {career.beginner_skills &&
                    career.beginner_skills.length > 0 && (
                      <div className="mt-5">
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                          Beginner Skills
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {career.beginner_skills
                            .slice(0, 3)
                            .map((skill) => (
                              <span
                                key={skill}
                                className="px-2.5 py-1 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-600"
                              >
                                {skill}
                              </span>
                            ))}
                        </div>
                      </div>
                    )}

                  <button
                    onClick={() => exploreCareer(career)}
                    className="w-full mt-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
                  >
                    Explore Career →
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

function getCareerIcon(title: string) {
  const name = title.toLowerCase();

  if (name.includes("ai") || name.includes("machine")) {
    return "🤖";
  }

  if (name.includes("data")) {
    return "📊";
  }

  if (name.includes("cloud")) {
    return "☁️";
  }

  if (name.includes("software") || name.includes("developer")) {
    return "💻";
  }

  if (name.includes("business")) {
    return "📈";
  }

  if (name.includes("product")) {
    return "🚀";
  }

  if (name.includes("cyber") || name.includes("security")) {
    return "🔐";
  }

  if (name.includes("design")) {
    return "🎨";
  }

  return "🎯";
}