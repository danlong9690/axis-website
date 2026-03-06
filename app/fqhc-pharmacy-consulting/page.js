export const metadata = {
  title: "FQHC Pharmacy Consulting | Axis Strategies",
  description:
    "Axis Strategies provides executive pharmacy consulting for FQHCs, including 340B strategy, operations, contract pharmacy oversight, infusion planning, and revenue optimization.",
};

export default function FQHcPharmacyConsultingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-4xl font-semibold text-slate-900">
          FQHC Pharmacy Consulting
        </h1>

        <p className="mt-6 text-lg text-slate-600">
          Federally Qualified Health Centers operate in a uniquely complex
          environment where pharmacy strategy must support patient access,
          regulatory compliance, operational performance, and financial
          sustainability at the same time.
        </p>

        <p className="mt-6 text-lg text-slate-600">
          Axis Strategies provides senior-level pharmacy advisory support for
          FQHCs seeking stronger 340B performance, improved pharmacy operations,
          contract pharmacy optimization, specialty and infusion growth, and
          executive-level strategic guidance.
        </p>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-semibold text-slate-900">
            FQHC Advisory Support
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-semibold">340B Strategy</h3>
              <p className="mt-3 text-slate-600">
                Strengthen program oversight, optimize value capture, and
                navigate changing manufacturer and policy dynamics.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-semibold">Pharmacy Operations</h3>
              <p className="mt-3 text-slate-600">
                Improve workflows, leadership structure, staffing models, and
                performance accountability across complex pharmacy environments.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-semibold">Contract Pharmacy Oversight</h3>
              <p className="mt-3 text-slate-600">
                Review contract pharmacy performance, network design, and
                governance to improve value and reduce risk.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-semibold">Growth Strategy</h3>
              <p className="mt-3 text-slate-600">
                Support expansion into specialty, infusion, and other
                high-impact pharmacy services aligned with mission and margin.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold text-slate-900">
          Talk with an FQHC Pharmacy Strategy Advisor
        </h2>

        <p className="mt-4 text-lg text-slate-600">
          Axis works with FQHC leadership teams seeking executive pharmacy
          strategy grounded in real operating experience.
        </p>

        <a
          href="mailto:info@axisstrategiesgroup.com"
          className="inline-block mt-8 rounded-xl bg-blue-900 px-6 py-3 text-white"
        >
          Start a Conversation
        </a>
      </section>
    </div>
  );
}