"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    title: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Submission failed");
      }

      setStatus("success");
      setFormData({
        name: "",
        organization: "",
        title: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <div className="mx-auto mt-10 max-w-3xl rounded-[1.75rem] bg-white p-6 text-slate-900 shadow-xl sm:rounded-[2rem] sm:p-8">
      <h3 className="text-xl font-semibold sm:text-2xl">
        Start a Conversation
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-600">
        Tell us a little about your organization and what you are exploring.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-base outline-none transition focus:border-blue-900"
          placeholder="Name"
          required
        />

        <input
          name="organization"
          value={formData.organization}
          onChange={handleChange}
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-base outline-none transition focus:border-blue-900"
          placeholder="Organization"
        />

        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-base outline-none transition focus:border-blue-900"
          placeholder="Title"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-base outline-none transition focus:border-blue-900"
          placeholder="Email"
          required
        />

        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-base outline-none transition focus:border-blue-900"
          placeholder="Phone"
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-base outline-none transition focus:border-blue-900"
          placeholder="How can Axis help?"
          required
        />

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full cursor-pointer rounded-2xl bg-blue-900 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading" ? "Submitting..." : "Submit"}
        </button>

        {status === "success" && (
          <p className="text-sm text-green-600">
            Thank you. Your message has been submitted.
          </p>
        )}

        {status === "error" && (
          <p className="text-sm text-red-600">
            Something went wrong. Please try again.
          </p>
        )}
      </form>
    </div>
  );
}