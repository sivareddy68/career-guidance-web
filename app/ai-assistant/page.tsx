
"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  created_at?: string;
};

type Conversation = {
  id: string;
  title: string;
  created_at: string;
};

type StudentProfile = {
  name?: string | null;
  study_type?: string | null;
  branch?: string | null;
  current_year?: string | number | null;
  graduation_year?: string | number | null;
  career_goal?: string | null;
};

type CourseProgress = {
  skill?: string | null;
  completed_lessons?: unknown;
  current_week?: string | number | null;
  current_lesson?: string | number | null;
  updated_at?: string | null;
};

type WeeklyTask = {
  id: string | number;
  title?: string | null;
  completed?: boolean | null;
  career?: string | null;
  course?: string | null;
  due_date?: string | null;
};

type ProjectProgress = {
  id: string | number;
  user_id?: string;
  project_key?: string | null;
  completed_tasks?: unknown;
  updated_at?: string | null;
};

function parseStoredValue(value: unknown): unknown {
  if (typeof value !== "string") return value;

  const trimmed = value.trim();
  if (!trimmed) return 0;

  try {
    return JSON.parse(trimmed);
  } catch {
    const numericValue = Number(trimmed);
    return Number.isFinite(numericValue)
      ? Math.max(0, Math.floor(numericValue))
      : 0;
  }
}

function getCompletedLessonCount(value: unknown): number {
  const parsed = parseStoredValue(value);

  if (Array.isArray(parsed)) return parsed.length;
  if (typeof parsed === "number") return Math.max(0, Math.floor(parsed));
  if (typeof parsed === "boolean") return parsed ? 1 : 0;

  return 0;
}

function getCompletedTaskCount(value: unknown): number {
  const parsed = parseStoredValue(value);

  if (Array.isArray(parsed)) {
    const completedIds = new Set<string>();
    let completedBooleanCount = 0;

    for (const item of parsed) {
      if (item === true) {
        completedBooleanCount++;
        continue;
      }

      if (item === false || item === null || item === undefined) {
        continue;
      }

      if (typeof item === "string" || typeof item === "number") {
        const normalized = String(item).trim();
        if (normalized) completedIds.add(normalized);
      }
    }

    return completedIds.size + completedBooleanCount;
  }

  if (typeof parsed === "number") return Math.max(0, Math.floor(parsed));
  if (typeof parsed === "boolean") return parsed ? 1 : 0;

  return 0;
}

function buildStudentContext(
  profile: StudentProfile | null,
  courseProgress: CourseProgress[],
  weeklyTasks: WeeklyTask[],
  projectProgress: ProjectProgress[]
) {
  const completedWeeklyTasks = weeklyTasks.filter(
    (task) => task.completed === true
  ).length;

  return JSON.stringify({
    student_profile: {
      name: profile?.name || "Not available",
      study_type: profile?.study_type || "Not available",
      branch: profile?.branch || "Not available",
      current_year: profile?.current_year || "Not available",
      graduation_year: profile?.graduation_year || "Not available",
      career_goal: profile?.career_goal || "Not selected",
    },

    course_progress: courseProgress.map((course) => ({
      skill: course.skill || "Unknown skill",
      completed_lessons: getCompletedLessonCount(
        course.completed_lessons
      ),
      current_week: course.current_week ?? "Not available",
      current_lesson: course.current_lesson ?? "Not available",
      updated_at: course.updated_at || null,
    })),

    weekly_tasks: {
      total_tasks: weeklyTasks.length,
      completed_tasks: completedWeeklyTasks,
      pending_tasks: weeklyTasks.length - completedWeeklyTasks,
      tasks: weeklyTasks.map((task) => ({
        id: task.id,
        title: task.title || "Untitled task",
        completed: task.completed === true,
        career: task.career || null,
        course: task.course || null,
        due_date: task.due_date || null,
      })),
    },

    project_progress: projectProgress.map((project) => ({
      project_key: project.project_key || "Unknown project",
      completed_tasks: getCompletedTaskCount(
        project.completed_tasks
      ),
      updated_at: project.updated_at || null,
    })),
  });
}

export default function AIAssistantPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [activeConversationId, setActiveConversationId] =
    useState<string | null>(null);

  const [userId, setUserId] = useState<string | null>(null);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingPage, setLoadingPage] = useState(true);
  const [loadingHistory, setLoadingHistory] = useState(false);
  const [creatingChat, setCreatingChat] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [saveNotice, setSaveNotice] = useState("");
  const [studentContext, setStudentContext] = useState("");

  // Controls the mobile chat-history drawer.
  const [mobileHistoryOpen, setMobileHistoryOpen] = useState(false);

  useEffect(() => {
    async function initialize() {
      try {
        setLoadingPage(true);
        setErrorMessage("");

        const {
          data: { session },
          error: sessionError,
        } = await supabase.auth.getSession();

        if (sessionError) {
          console.error("Session error:", sessionError);
          setErrorMessage(
            "Unable to access your login session. Please log in again."
          );
          return;
        }

        if (!session?.user) {
          setErrorMessage(
            "Your login session is missing. Please log in again."
          );
          return;
        }

        const user = session.user;
        setUserId(user.id);

        await loadStudentInformation(user.id);

        const {
          data: conversationData,
          error: conversationError,
        } = await supabase
          .from("ai_chat_conversations")
          .select("id, title, created_at")
          .eq("user_id", user.id)
          .order("created_at", { ascending: false });

        if (conversationError) throw conversationError;

        const existingConversations =
          (conversationData || []) as Conversation[];

        if (existingConversations.length === 0) {
          const {
            data: newConversation,
            error: createError,
          } = await supabase
            .from("ai_chat_conversations")
            .insert({
              user_id: user.id,
              title: "New Chat",
            })
            .select("id, title, created_at")
            .single();

          if (createError) throw createError;

          const conversation = newConversation as Conversation;

          setConversations([conversation]);
          setActiveConversationId(conversation.id);
        } else {
          setConversations(existingConversations);
          setActiveConversationId(existingConversations[0].id);
        }
      } catch (error) {
        console.error("AI assistant initialization error:", error);
        setErrorMessage("Unable to load the AI Career Assistant.");
      } finally {
        setLoadingPage(false);
      }
    }

    void initialize();
  }, []);

  async function loadStudentInformation(id: string) {
    try {
      const [
        profileResult,
        courseResult,
        taskResult,
        projectResult,
      ] = await Promise.all([
        supabase
          .from("student_profiles")
          .select(
            "name, study_type, branch, current_year, graduation_year, career_goal"
          )
          .eq("user_id", id)
          .maybeSingle(),

        supabase
          .from("course_progress")
          .select(
            "skill, completed_lessons, current_week, current_lesson, updated_at"
          )
          .eq("user_id", id)
          .order("updated_at", { ascending: false }),

        supabase
          .from("weekly_tasks")
          .select("id, title, completed, career, course, due_date")
          .eq("user_id", id)
          .order("due_date", { ascending: true }),

        supabase
          .from("project_progress")
          .select(
            "id, user_id, project_key, completed_tasks, updated_at"
          )
          .eq("user_id", id)
          .order("updated_at", { ascending: false }),
      ]);

      if (profileResult.error) {
        console.error("Student profile error:", profileResult.error);
      }

      if (courseResult.error) {
        console.error("Course progress error:", courseResult.error);
      }

      if (taskResult.error) {
        console.error("Weekly tasks error:", taskResult.error);
      }

      if (projectResult.error) {
        console.error("Project progress error:", projectResult.error);
      }

      const profile = (profileResult.data as StudentProfile | null) || null;
      const courses = (courseResult.data as CourseProgress[]) || [];
      const tasks = (taskResult.data as WeeklyTask[]) || [];
      const projects = (projectResult.data as ProjectProgress[]) || [];

      setStudentContext(
        buildStudentContext(profile, courses, tasks, projects)
      );

      console.log("Student AI context loaded:", {
        profile,
        courses,
        tasks,
        projects,
        projectCounts: projects.map((project) => ({
          project_key: project.project_key,
          completed_tasks: getCompletedTaskCount(
            project.completed_tasks
          ),
          updated_at: project.updated_at,
        })),
      });
    } catch (error) {
      console.error("Unable to load student information:", error);
      setStudentContext("");
    }
  }

  useEffect(() => {
    if (!activeConversationId) return;

    async function loadMessages() {
      try {
        setLoadingHistory(true);
        setErrorMessage("");

        const { data, error } = await supabase
          .from("ai_chat_messages")
          .select("id, role, content, created_at")
          .eq("conversation_id", activeConversationId)
          .order("created_at", { ascending: true });

        if (error) throw error;

        setMessages((data || []) as Message[]);
      } catch (error) {
        console.error("Load messages error:", error);
        setErrorMessage("Unable to load this conversation.");
      } finally {
        setLoadingHistory(false);
      }
    }

    void loadMessages();
  }, [activeConversationId]);

  async function createNewChat() {
    if (!userId || creatingChat) return;

    try {
      setCreatingChat(true);
      setErrorMessage("");

      const { data, error } = await supabase
        .from("ai_chat_conversations")
        .insert({
          user_id: userId,
          title: "New Chat",
        })
        .select("id, title, created_at")
        .single();

      if (error) throw error;

      const conversation = data as Conversation;

      setConversations((previous) => [
        conversation,
        ...previous,
      ]);

      setMessages([]);
      setActiveConversationId(conversation.id);
      setMobileHistoryOpen(false);
    } catch (error) {
      console.error("Create chat error:", error);
      setErrorMessage("Unable to create a new chat.");
    } finally {
      setCreatingChat(false);
    }
  }

  async function sendMessage() {
    const question = input.trim();

    if (
      !question ||
      loading ||
      !userId ||
      !activeConversationId
    ) {
      return;
    }

    setInput("");
    setLoading(true);
    setErrorMessage("");
    setSaveNotice("");

    const temporaryUserMessage: Message = {
      id: `temp-user-${Date.now()}`,
      role: "user",
      content: question,
      created_at: new Date().toISOString(),
    };

    setMessages((previous) => [
      ...previous,
      temporaryUserMessage,
    ]);

    try {
      const {
        data: savedUserMessage,
        error: userSaveError,
      } = await supabase
        .from("ai_chat_messages")
        .insert({
          conversation_id: activeConversationId,
          user_id: userId,
          role: "user",
          content: question,
        })
        .select("id, role, content, created_at")
        .single();

      if (userSaveError) throw userSaveError;

      setMessages((previous) =>
        previous.map((message) =>
          message.id === temporaryUserMessage.id
            ? (savedUserMessage as Message)
            : message
        )
      );

      const currentConversation = conversations.find(
        (conversation) =>
          conversation.id === activeConversationId
      );

      if (currentConversation?.title === "New Chat") {
        const newTitle =
          question.length > 40
            ? `${question.slice(0, 40)}...`
            : question;

        await supabase
          .from("ai_chat_conversations")
          .update({ title: newTitle })
          .eq("id", activeConversationId)
          .eq("user_id", userId);

        setConversations((previous) =>
          previous.map((conversation) =>
            conversation.id === activeConversationId
              ? { ...conversation, title: newTitle }
              : conversation
          )
        );
      }

      const response = await fetch("/api/ai-assistant", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: question,
          context: studentContext,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.error || "The AI could not generate a response."
        );
      }

      const reply =
        typeof data.reply === "string"
          ? data.reply.trim()
          : "";

      if (!reply) {
        throw new Error("The AI returned an empty response.");
      }

      const temporaryAssistantMessage: Message = {
        id: `temp-assistant-${Date.now()}`,
        role: "assistant",
        content: reply,
        created_at: new Date().toISOString(),
      };

      setMessages((previous) => [
        ...previous,
        temporaryAssistantMessage,
      ]);

      const {
        data: savedAssistantMessage,
        error: assistantSaveError,
      } = await supabase
        .from("ai_chat_messages")
        .insert({
          conversation_id: activeConversationId,
          user_id: userId,
          role: "assistant",
          content: reply,
        })
        .select("id, role, content, created_at")
        .single();

      if (assistantSaveError) {
        console.error(
          "Assistant message save error:",
          assistantSaveError
        );
      } else {
        setMessages((previous) =>
          previous.map((message) =>
            message.id === temporaryAssistantMessage.id
              ? (savedAssistantMessage as Message)
              : message
          )
        );
      }

      setSaveNotice("Saved");

      setTimeout(() => {
        setSaveNotice("");
      }, 1500);
    } catch (error) {
      console.error("Send message error:", error);

      const message =
        error instanceof Error
          ? error.message
          : "Something went wrong.";

      setErrorMessage(message);

      setMessages((previous) =>
        previous.filter(
          (item) => item.id !== temporaryUserMessage.id
        )
      );
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ) {
    if (
      event.key === "Enter" &&
      !event.shiftKey
    ) {
      event.preventDefault();
      void sendMessage();
    }
  }

  function selectConversation(id: string) {
    setActiveConversationId(id);
    setMobileHistoryOpen(false);
    setMessages([]);
  }

  if (loadingPage) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <div className="text-center">
          <div className="text-lg font-semibold">
            Loading AI Career Assistant...
          </div>
          <div className="mt-2 text-sm text-slate-400">
            Loading your student progress
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="h-[100dvh] overflow-hidden bg-slate-950 text-white">
      <div className="flex h-full min-h-0">

        {/* DESKTOP SIDEBAR */}
        <aside className="hidden w-72 shrink-0 flex-col border-r border-slate-800 bg-slate-900/70 md:flex">
          <div className="border-b border-slate-800 p-5">
            <h1 className="text-xl font-bold">
              AI Career Assistant
            </h1>
            <p className="mt-1 text-xs text-slate-400">
              Your personal career guide
            </p>
          </div>

          <div className="p-4">
            <button
              onClick={createNewChat}
              disabled={creatingChat}
              className="w-full rounded-xl bg-blue-600 px-4 py-3 font-semibold transition hover:bg-blue-500 disabled:opacity-50"
            >
              {creatingChat ? "Creating..." : "+ New Chat"}
            </button>
          </div>

          <div className="px-3 pb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
            Chat History
          </div>

          <div className="flex-1 overflow-y-auto px-3 pb-4">
            {conversations.length === 0 ? (
              <p className="px-2 text-sm text-slate-500">
                No conversations yet.
              </p>
            ) : (
              <div className="space-y-1">
                {conversations.map((conversation) => (
                  <button
                    key={conversation.id}
                    onClick={() =>
                      selectConversation(conversation.id)
                    }
                    className={`w-full rounded-lg px-3 py-3 text-left text-sm transition ${
                      activeConversationId === conversation.id
                        ? "bg-slate-800 text-white"
                        : "text-slate-300 hover:bg-slate-800/70"
                    }`}
                  >
                    <div className="truncate">
                      {conversation.title}
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </aside>

        {/* MOBILE CHAT HISTORY DRAWER */}
        {mobileHistoryOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            <button
              type="button"
              aria-label="Close chat history"
              onClick={() => setMobileHistoryOpen(false)}
              className="absolute inset-0 bg-black/70"
            />

            <aside className="absolute inset-y-0 left-0 flex w-[min(85%,320px)] flex-col border-r border-slate-800 bg-slate-900 shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-800 p-5">
                <div>
                  <h2 className="text-lg font-bold">
                    Chat History
                  </h2>
                  <p className="mt-1 text-xs text-slate-400">
                    Your previous conversations
                  </p>
                </div>

                <button
                  onClick={() => setMobileHistoryOpen(false)}
                  aria-label="Close"
                  className="rounded-lg px-3 py-2 text-xl text-slate-300 hover:bg-slate-800"
                >
                  ×
                </button>
              </div>

              <div className="p-4">
                <button
                  onClick={createNewChat}
                  disabled={creatingChat}
                  className="w-full rounded-xl bg-blue-600 px-4 py-3 font-semibold transition hover:bg-blue-500 disabled:opacity-50"
                >
                  {creatingChat ? "Creating..." : "+ New Chat"}
                </button>
              </div>

              <div className="px-4 pb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Old Chats
              </div>

              <div className="flex-1 overflow-y-auto px-3 pb-5">
                {conversations.length === 0 ? (
                  <p className="px-2 py-3 text-sm text-slate-500">
                    No conversations yet.
                  </p>
                ) : (
                  <div className="space-y-2">
                    {conversations.map((conversation) => (
                      <button
                        key={conversation.id}
                        onClick={() =>
                          selectConversation(conversation.id)
                        }
                        className={`w-full rounded-xl px-3 py-3 text-left text-sm transition ${
                          activeConversationId === conversation.id
                            ? "bg-blue-600/20 text-blue-300 ring-1 ring-blue-500/40"
                            : "text-slate-300 hover:bg-slate-800"
                        }`}
                      >
                        <div className="truncate font-medium">
                          {conversation.title}
                        </div>
                        <div className="mt-1 text-xs text-slate-500">
                          {new Date(
                            conversation.created_at
                          ).toLocaleDateString()}
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </aside>
          </div>
        )}

        {/* MAIN CHAT */}
        <section className="flex min-w-0 flex-1 flex-col">

          <header className="shrink-0 border-b border-slate-800 bg-slate-900/60 px-3 py-3 sm:px-6 sm:py-4">
            <div className="flex items-center justify-between gap-3">

              <div className="flex min-w-0 items-center gap-3">

                {/* MOBILE HISTORY BUTTON */}
                <button
                  onClick={() => setMobileHistoryOpen(true)}
                  className="flex shrink-0 items-center gap-2 rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm font-medium text-slate-200 transition hover:bg-slate-700 md:hidden"
                  aria-label="Open chat history"
                >
                  <span className="text-lg">☰</span>
                  <span>Chats</span>
                </button>

                <div className="min-w-0">
                  <h2 className="truncate text-base font-semibold sm:text-lg">
                    AI Career Assistant
                  </h2>
                  <p className="mt-1 hidden text-xs text-slate-400 sm:block">
                    Ask about your career, courses, projects or learning progress.
                  </p>
                </div>
              </div>

              <div className="shrink-0 text-xs text-green-400">
                {saveNotice}
              </div>
            </div>
          </header>

          {errorMessage && (
            <div className="mx-3 mt-3 shrink-0 rounded-xl border border-red-900/50 bg-red-950/30 px-4 py-3 text-sm text-red-300 sm:mx-6">
              {errorMessage}
            </div>
          )}

          {/* CHAT MESSAGES */}
          <div className="min-h-0 flex-1 overflow-y-auto px-3 py-5 sm:px-8 sm:py-6">
            <div className="mx-auto max-w-4xl space-y-5">

              {loadingHistory ? (
                <div className="py-10 text-center text-sm text-slate-500">
                  Loading conversation...
                </div>
              ) : messages.length === 0 ? (
                <div className="py-16 text-center sm:py-20">
                  <div className="mb-4 text-4xl">
                    🤖
                  </div>

                  <h3 className="text-lg font-semibold sm:text-xl">
                    How can I help with your career?
                  </h3>

                  <p className="mx-auto mt-2 max-w-lg px-3 text-sm text-slate-400">
                    I can use your saved student profile, course progress,
                    weekly tasks and project progress to give more relevant
                    guidance.
                  </p>
                </div>
              ) : (
                messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.role === "user"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[90%] rounded-2xl px-4 py-3 sm:max-w-[85%] ${
                        message.role === "user"
                          ? "bg-blue-600 text-white"
                          : "bg-slate-800 text-slate-100"
                      }`}
                    >
                      <div className="whitespace-pre-wrap break-words text-sm leading-6">
                        {message.content}
                      </div>
                    </div>
                  </div>
                ))
              )}

              {loading && (
                <div className="flex justify-start">
                  <div className="rounded-2xl bg-slate-800 px-4 py-3 text-sm text-slate-400">
                    AI is thinking...
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* MESSAGE INPUT */}
          <div className="shrink-0 border-t border-slate-800 bg-slate-900/90 p-3 pb-[max(12px,env(safe-area-inset-bottom))] sm:p-4">
            <div className="mx-auto flex max-w-4xl items-end gap-2 sm:gap-3">

              <textarea
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={handleKeyDown}
                disabled={loading}
                rows={2}
                placeholder="Ask something about your career or progress..."
                className="min-w-0 flex-1 resize-none rounded-xl border border-slate-700 bg-slate-950 px-3 py-3 text-sm text-white outline-none focus:border-blue-500 disabled:opacity-50 sm:px-4"
              />

              <button
                onClick={() => void sendMessage()}
                disabled={
                  loading ||
                  !input.trim() ||
                  !activeConversationId
                }
                className="shrink-0 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold transition hover:bg-blue-500 disabled:opacity-50 sm:px-5"
              >
                {loading ? "..." : "Send"}
              </button>
            </div>

            <p className="mx-auto mt-2 hidden max-w-4xl text-xs text-slate-500 sm:block">
              Press Enter to send · Shift + Enter for a new line
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
