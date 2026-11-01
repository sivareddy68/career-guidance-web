"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

const educationYears: Record<string, string[]> = {
Intermediate: ["Intermediate 1st Year", "Intermediate 2nd Year"],
Diploma: ["1st Year", "2nd Year", "3rd Year"],
"B.Tech": ["1st Year", "2nd Year", "3rd Year", "4th Year"],
Degree: ["1st Year", "2nd Year", "3rd Year"],
Postgraduate: ["1st Year", "2nd Year"],
Other: ["1st Year", "2nd Year", "3rd Year", "4th Year"],
};

const interestOptions = [
"Artificial Intelligence",
"Web Development",
"App Development",
"Data Analytics",
"Cloud Computing",
"Cybersecurity",
"Electronics",
"Embedded Systems",
"Robotics",
"Business and Management",
"Design and Creativity",
"Research",
];

const skillOptions = [
"Python",
"Java",
"HTML",
"CSS",
"JavaScript",
"SQL",
"C",
"C++",
"Verilog",
"Communication",
"Problem Solving",
"No skills yet",
];

export default function OnboardingPage() {
const router = useRouter();

const [step, setStep] = useState(1);
const [name, setName] = useState("");
const [studyType, setStudyType] = useState("");
const [branch, setBranch] = useState("");
const [currentYear, setCurrentYear] = useState("");
const [graduationYear, setGraduationYear] = useState("");
const [interests, setInterests] = useState<string[]>([]);
const [skills, setSkills] = useState<string[]>([]);
const [careerStatus, setCareerStatus] = useState("unsure");
const [careerGoal, setCareerGoal] = useState("");
const [loading, setLoading] = useState(false);
const [error, setError] = useState("");

const availableYears = educationYears[studyType] ?? educationYears.Other;

function toggleOption(
value: string,
selected: string[],
setter: (values: string[]) => void
) {
setter(
selected.includes(value)
? selected.filter((item) => item !== value)
: [...selected, value]
);
}

function nextStep() {
setError("");

if (step === 1 && (!name.trim() || !studyType || !branch.trim())) {
  setError("Please complete your name, education type and course/group.");
  return;
}

if (step === 2 && (!currentYear || !graduationYear)) {
  setError("Please select your current year and expected graduation year.");
  return;
}

if (step === 3 && interests.length === 0) {
  setError("Please select at least one interest.");
  return;
}

setStep((current) => Math.min(current + 1, 4));

}

async function saveProfile() {
setError("");
setLoading(true);

try {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError) throw userError;

  if (!user) {
    router.push("/login");
    return;
  }

  const profile = {
    user_id: user.id,
    name: name.trim(),
    study_type: studyType,
    branch: branch.trim(),
    current_year: currentYear,
    study_year: currentYear,
    graduation_year: Number(graduationYear),
    interests,
    skills,
    career_goal: careerGoal.trim(),
    career_status: careerStatus,
    onboarding_completed: true,
  };

  const { error: saveError } = await supabase
    .from("student_profiles")
    .upsert(profile, { onConflict: "user_id" });

  if (saveError) throw saveError;

  router.push("/career-discovery");
  router.refresh();
} catch (error: unknown) {
  console.error("Profile save failed:", error);

  const message =
    error instanceof Error ? error.message : String(error);

  setError(
  error instanceof Error
    ? error.message
    : JSON.stringify(error, null, 2)
);
} finally {
  setLoading(false);
}

}

const inputClass =
"mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus focus focus";

const labelClass = "block text-sm font-semibold text-slate-700";

return (
<main className="min-h-screen bg-slate-50">
<header className="border-b border-slate-200 bg-white">
<div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
<a href="/" className="text-xl font-extrabold">
Career<span className="text-emerald-600">Path</span>
</a>
<span className="text-sm text-slate-500">Student profile setup</span>
</div>
</header>

  <div className="mx-auto max-w-3xl px-5 py-10 sm:py-14">
    <div className="mb-8">
      <p className="text-sm font-bold uppercase tracking-widest text-emerald-600">
        LET'S GET TO KNOW YOU
      </p>
      <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
        Build your career journey
      </h1>
      <p className="mt-3 leading-7 text-slate-600">
        Tell us a little about yourself so we can help you explore
        suitable career paths and learning opportunities. You can still
        explore careers if you're unsure what you want to do.
      </p>
    </div>

    <div className="mb-8 flex gap-2">
      {[1, 2, 3, 4].map((number) => (
        <div
          key={number}
          className={`h-2 flex-1 rounded-full ${
            number <= step ? "bg-emerald-500" : "bg-slate-200"
          }`}
        />
      ))}
    </div>

    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
      <div className="mb-7 flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-2xl">
          {["👋", "🎓", "💡", "🎯"][step - 1]}
        </div>
        <div>
          <p className="text-sm text-slate-500">Step {step} of 4</p>
          <h2 className="text-xl font-bold">
            {
              [
                "Your basic details",
                "Your education",
                "Your interests and skills",
                "Your career direction",
              ][step - 1]
            }
          </h2>
        </div>
      </div>

      {step === 1 && (
        <div className="space-y-5">
          <div>
            <label className={labelClass} htmlFor="name">
              Full name
            </label>
            <input
              id="name"
              className={inputClass}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label className={labelClass} htmlFor="studyType">
              What are you studying?
            </label>
            <select
              id="studyType"
              className={inputClass}
              value={studyType}
              onChange={(e) => {
                setStudyType(e.target.value);
                setCurrentYear("");
                setGraduationYear("");
              }}
              required
            >
              <option value="">Select education type</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Diploma">Diploma</option>
              <option value="B.Tech">B.Tech / Engineering</option>
              <option value="Degree">Degree / Bachelor's</option>
              <option value="Postgraduate">Postgraduate</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className={labelClass} htmlFor="branch">
              Course, branch or group
            </label>
            <input
              id="branch"
              className={inputClass}
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
              placeholder="e.g. MPC, ECE, CSE, B.Com"
              required
            />
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-5">
          <div>
            <label className={labelClass} htmlFor="currentYear">
              Current year or study stage
            </label>
            <select
              id="currentYear"
              className={inputClass}
              value={currentYear}
              onChange={(e) => setCurrentYear(e.target.value)}
              required
            >
              <option value="">Select current year</option>
              {availableYears.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
              <option value="Completed">Course completed</option>
            </select>
          </div>

          <div>
            <label className={labelClass} htmlFor="graduationYear">
              Expected graduation year
            </label>
            <select
              id="graduationYear"
              className={inputClass}
              value={graduationYear}
              onChange={(e) => setGraduationYear(e.target.value)}
              required
            >
              <option value="">Select year</option>
              {Array.from(
                { length: 9 },
                (_, index) => new Date().getFullYear() + index
              ).map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          <p className="rounded-xl bg-blue-50 p-4 text-sm leading-6 text-blue-800">
            Your available study years depend on the education type
            you selected in the previous step.
          </p>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-7">
          <div>
            <p className={labelClass}>What interests you?</p>
            <p className="mt-1 text-sm text-slate-500">
              Select one or more topics you would like to explore.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {interestOptions.map((interest) => (
                <label
                  key={interest}
                  className={`flex cursor-pointer items-center gap-3 rounded-xl border p-3 transition ${
                    interests.includes(interest)
                      ? "border-emerald-500 bg-emerald-50"
                      : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={interests.includes(interest)}
                    onChange={() =>
                      toggleOption(interest, interests, setInterests)
                    }
                    className="h-4 w-4 accent-emerald-600"
                  />
                  <span className="text-sm font-medium">{interest}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <p className={labelClass}>Which skills do you already have?</p>
            <p className="mt-1 text-sm text-slate-500">
              Optional. Choose No skills yet if you're just beginning.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {skillOptions.map((skill) => {
                const selected = skills.includes(skill);
                return (
                  <button
                    key={skill}
                    type="button"
                    onClick={() => {
                      if (skill === "No skills yet") {
                        setSkills(selected ? [] : ["No skills yet"]);
                      } else {
                        const updated = selected
                          ? skills.filter(
                              (item) =>
                                item !== skill && item !== "No skills yet"
                            )
                          : [
                              ...skills.filter(
                                (item) => item !== "No skills yet"
                              ),
                              skill,
                            ];
                        setSkills(updated);
                      }
                    }}
                    className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                      selected
                        ? "border-emerald-500 bg-emerald-600 text-white"
                        : "border-slate-200 bg-white text-slate-700 hover:border-emerald-400"
                    }`}
                  >
                    {selected ? "✓ " : "+ "}
                    {skill}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="space-y-5">
          <div>
            <p className={labelClass}>Have you chosen a career?</p>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {[
                {
                  value: "unsure",
                  title: "I'm still exploring",
                  description: "Help me discover possible careers.",
                },
                {
                  value: "chosen",
                  title: "I have a career in mind",
                  description: "Help me prepare for my chosen direction.",
                },
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setCareerStatus(option.value)}
                  className={`rounded-xl border p-4 text-left transition ${
                    careerStatus === option.value
                      ? "border-emerald-500 bg-emerald-50 ring-2 ring-emerald-100"
                      : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <span className="font-bold">{option.title}</span>
                  <span className="mt-2 block text-sm leading-6 text-slate-600">
                    {option.description}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {careerStatus === "chosen" && (
            <div>
              <label className={labelClass} htmlFor="careerGoal">
                Which career interests you?
              </label>
              <input
                id="careerGoal"
                className={inputClass}
                value={careerGoal}
                onChange={(e) => setCareerGoal(e.target.value)}
                placeholder="e.g. AI/ML Engineer, Data Analyst"
              />
            </div>
          )}

          {careerStatus === "unsure" && (
            <div className="rounded-xl bg-emerald-50 p-4 text-sm leading-6 text-emerald-900">
              That's completely fine! We'll help you explore career
              options before you make a decision.
            </div>
          )}
        </div>
      )}

      {error && (
        <div
          role="alert"
          className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-700"
        >
          {error}
        </div>
      )}

      <div className="mt-8 flex flex-col-reverse gap-3 border-t border-slate-100 pt-6 sm:flex-row sm:justify-between">
        <button
          type="button"
          onClick={() => {
            setError("");
            if (step === 1) {
              router.push("/");
            } else {
              setStep((current) => current - 1);
            }
          }}
          className="rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
        >
          {step === 1 ? "Back to Home" : "← Previous"}
        </button>

        {step < 4 ? (
          <button
            type="button"
            onClick={nextStep}
            className="rounded-xl bg-emerald-600 px-6 py-3 font-bold text-white transition hover:bg-emerald-700"
          >
            Continue →
          </button>
        ) : (
          <button
            type="button"
            onClick={saveProfile}
            disabled={loading}
            className="rounded-xl bg-emerald-600 px-6 py-3 font-bold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Saving your profile..." : "Save & Explore Careers →"}
          </button>
        )}
      </div>
    </section>

    <p className="mt-5 text-center text-sm text-slate-500">
      Your journey, your pace. You can explore even if you haven't
      chosen a career yet.
    </p>
  </div>
</main>

);
}