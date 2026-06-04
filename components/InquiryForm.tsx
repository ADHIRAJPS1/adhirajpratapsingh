"use client";

import { useState } from "react";
import { Send } from "lucide-react";

const CATEGORIES = [
  "Business Intelligence",
  "Software Development",
  "Web Development",
  "Startup Consulting",
  "Research & Analytics",
  "Other",
];

type Status = "idle" | "submitting" | "success" | "error";

export default function InquiryForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });

      if (res.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      name="inquiry"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <input type="hidden" name="form-name" value="inquiry" />
      <p style={{ display: "none" }}>
        <label>
          Do not fill: <input name="bot-field" />
        </label>
      </p>

      <input
        type="text"
        name="full-name"
        placeholder="Full Name"
        required
        className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 text-white placeholder-slate-500 focus:outline-none focus:border-yellow-500 transition"
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        required
        className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 text-white placeholder-slate-500 focus:outline-none focus:border-yellow-500 transition"
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        required
        className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 text-white placeholder-slate-500 focus:outline-none focus:border-yellow-500 transition"
      />

      <input
        type="text"
        name="company"
        placeholder="Company Name"
        required
        className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 text-white placeholder-slate-500 focus:outline-none focus:border-yellow-500 transition"
      />

      <select
        name="category"
        required
        defaultValue=""
        className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 text-white focus:outline-none focus:border-yellow-500 transition"
      >
        <option value="" disabled>
          Select Category
        </option>
        {CATEGORIES.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <textarea
        name="project-description"
        rows={5}
        placeholder="Project Description"
        required
        className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 text-white placeholder-slate-500 focus:outline-none focus:border-yellow-500 transition"
      />

      {status === "success" && (
        <p className="text-green-400 text-sm text-center">
          Your inquiry has been submitted! We&apos;ll be in touch soon.
        </p>
      )}

      {status === "error" && (
        <p className="text-red-400 text-sm text-center">
          Something went wrong. Please try again or reach out via email.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-yellow-500 text-black py-4 rounded-xl font-semibold flex justify-center items-center gap-2 hover:scale-[1.02] transition disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending…" : "Send Inquiry"}
        <Send size={18} />
      </button>
    </form>
  );
}
