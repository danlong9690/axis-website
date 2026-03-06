export const metadata = {
  title: "Pharmacy Revenue Optimization | Axis Strategies",
  description:
    "Axis Strategies helps healthcare organizations identify missed pharmacy revenue opportunities across utilization, contract pharmacy, specialty services, and operational performance.",
};

export default function PharmacyRevenueOptimizationPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-4xl font-semibold text-slate-900">
          Pharmacy Revenue Optimization
        </h1>

        <p className="mt-6 text-lg text-slate-600">
          Many healthcare organizations leave significant pharmacy revenue on
          the table due to low utilization, referral leakage, underperforming
          contract pharmacy relationships, and undeveloped specialty or infusion
          capabilities.
        </p>

        <p className="mt-6 text-lg text-slate-600">
          Axis Strategies works with leadership teams to identify missed
          opportunities, strengthen financial performance, and align pharmacy
          strategy with broader organizational goals.
        </p>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-semibold text-slate-900">
            Revenue Optimization Focus Areas
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-semibold">Pharmacy Utilization</h3>
              <p className="mt-3 text-slate-600">
                Evaluate current utilization patterns and identify strategies to
                improve capture within existing pharmacy infrastructure.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-semibold">Referral Capture</h3>
              <p className="mt-3 text-slate-600">
                Reduce leakage and improve alignment between prescribers,
                clinics, care teams, and pharmacy operations.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-semibold">Contract Pharmacy Performance</h3>
              <p className="mt-3 text-slate-600">
                Review contract pharmacy structure, performance, and oversight
                to strengthen value and reduce inefficiencies.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-semibold">Specialty & Infusion Opportunity</h3>
              <p className="mt-3 text-slate-600">
                Identify opportunities to expand into higher-value services that
                improve both access and long-term financial sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold text-slate-900">
          Identify Pharmacy Revenue Opportunity
        </h2>

        <p className="mt-4 text-lg text-slate-600">
          Axis helps organizations evaluate where revenue is being lost and
          where disciplined, compliant growth can be achieved.
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