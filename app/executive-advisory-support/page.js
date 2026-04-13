export const metadata = {
  title: "Executive Advisory Support | Axis Strategies",
  description:
    "Axis Strategies provides ongoing executive-level pharmacy advisory support for healthcare organizations seeking strategic guidance, operational oversight, and long-term program growth.",
  alternates: {
    canonical:
      "https://www.axisstrategiesgroup.com/executive-advisory-support",
  },
};

export default function ExecutiveAdvisorySupportPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-4xl font-semibold text-slate-900">
          Executive Advisory Support
        </h1>

        <p className="mt-6 text-lg text-slate-600">
          Axis provides ongoing executive-level advisory support for healthcare
          organizations seeking experienced pharmacy leadership without the need
          for a full-time internal executive structure.
        </p>

        <p className="mt-6 text-lg text-slate-600">
          Our advisory model allows organizations to work alongside seasoned
          pharmacy executives who provide strategic guidance, operational
          oversight, and leadership support on a recurring basis.
        </p>

        <p className="mt-6 text-lg text-slate-600">
          This approach is particularly valuable for organizations navigating
          complex pharmacy environments, expanding service lines, strengthening
          existing programs, or aligning pharmacy strategy with broader
          organizational goals.
        </p>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-semibold text-slate-900">
            Areas of Executive Advisory Support
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold">
                Strategic Pharmacy Planning
              </h3>
              <p className="mt-3 text-slate-600">
                Provide ongoing guidance on pharmacy program strategy, growth
                initiatives, and alignment with organizational priorities.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold">
                Executive Leadership Guidance
              </h3>
              <p className="mt-3 text-slate-600">
                Support executive teams with experienced pharmacy leadership
                insight, decision support, and strategic direction.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold">
                Operational Performance Oversight
              </h3>
              <p className="mt-3 text-slate-600">
                Monitor pharmacy operations and identify opportunities to
                strengthen execution, accountability, and service performance.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold">
                340B Strategy and Oversight
              </h3>
              <p className="mt-3 text-slate-600">
                Provide ongoing guidance to support 340B program performance,
                compliance, sustainability, and long-term strategic value.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold">
                Infusion and Specialty Program Growth
              </h3>
              <p className="mt-3 text-slate-600">
                Advise organizations pursuing specialty pharmacy and infusion
                opportunities that support patient access and program expansion.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold">
                Organizational Structure and Staffing
              </h3>
              <p className="mt-3 text-slate-600">
                Evaluate pharmacy leadership structure, staffing models, and
                management accountability to support effective operations.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold">
                Compliance and Regulatory Readiness
              </h3>
              <p className="mt-3 text-slate-600">
                Support ongoing readiness for regulatory reviews, accreditation,
                audits, and broader compliance expectations.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold">
                Financial Performance Support
              </h3>
              <p className="mt-3 text-slate-600">
                Help organizations monitor pharmacy financial drivers, program
                performance, and long-term sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold text-slate-900">
          Partner with Axis for Executive Pharmacy Guidance
        </h2>

        <p className="mt-4 text-lg text-slate-600">
          Axis provides ongoing executive advisory partnerships that help
          healthcare organizations strengthen leadership, improve operational
          performance, and support long-term pharmacy program growth.
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