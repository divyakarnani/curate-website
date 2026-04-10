"use client";

import { useState } from "react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) {
      setErrorMsg("Please enter a valid email.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong.");
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setErrorMsg("Something went wrong.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex items-center gap-3 justify-center" aria-live="polite">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="#5BB88A" strokeWidth="1.5" />
          <path d="M7.5 12.5L10.5 15.5L16.5 9.5" stroke="#5BB88A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-[17px] font-semibold text-ink">You&apos;re on the list.</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <input
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if (status === "error") setStatus("idle");
        }}
        placeholder="your@email.com"
        required
        aria-label="Email address"
        className="flex-1 bg-white border border-gray-200 rounded-xl px-5 py-3.5 text-[15px] text-ink placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple/30 focus:border-purple transition-all"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-purple text-white font-semibold text-[14px] px-6 py-3.5 rounded-xl whitespace-nowrap hover:bg-purple-dark transition-colors shadow-[0_4px_8px_rgba(156,126,168,0.4)] disabled:opacity-60"
      >
        {status === "loading" ? "Joining..." : "Join waitlist"}
      </button>
      {status === "error" && (
        <p className="text-[13px] text-score-low sm:absolute sm:bottom-[-24px]" aria-live="polite">
          {errorMsg}
        </p>
      )}
    </form>
  );
}
