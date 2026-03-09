"use client";

import { useState } from "react";

export default function ExecutiveAssessmentForm() {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    title: "",
    email: "",
    entityPharmacies: "",
    contractPharmacies: "",
    utilizationRate: "",
  });

  const [status, setStatus] = useState("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
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
      const res = await fetch("/api/executive-assessment", {
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
        entityPharmacies: "",
        contractPharmacies: "",
        utilizationRate: "",
      });

    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <div className="rounded-[1.75rem] bg-white p-6 text-slate-900 shadow-2xl sm:rounded-[2rem] sm:p-8">
      <h3 className="text-xl font-semibold sm:text-2xl">
        Request Your Assessment
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-600">
        Complete the form below and an Axis team member will follow up.
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
          required
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

        <div className="grid gap-4 sm:grid-cols-2">
          <input
            name="entityPharmacies"
            value={formData.entityPharmacies}
            onChange={handleChange}
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-base outline-none transition focus:border-blue-900"
            placeholder="# Entity Pharmacies"
          />

          <input
            name="contractPharmacies"
            value={formData.contractPharmacies}
            onChange={handleChange}
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-base outline-none transition focus:border-blue-900"
            placeholder="# Contract Pharmacies"
          />
        </div>

        <input
          name="utilizationRate"
          value={formData.utilizationRate}
          onChange={handleChange}
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-base outline-none transition focus:border-blue-900"
          placeholder="Estimated pharmacy utilization rate (optional)"
        />

        <button
  type="submit"
  disabled={status === "loading"}
  className="w-full cursor-pointer rounded-2xl bg-blue-900 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 disabled:opacity-60"
>
  {status === "loading" ? "Submitting..." : "Request Assessment"}
</button>

        {status === "success" && (
          <p className="text-sm text-green-600">
            Thank you. Your request has been submitted.
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