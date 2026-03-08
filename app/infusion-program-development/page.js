export const metadata = {
  title: "Infusion Program Development | Axis Strategies",
  description:
    "Axis Strategies helps healthcare organizations evaluate, design, and expand infusion programs with a focus on patient access, compliance, operational readiness, and financial sustainability.",
};

export default function InfusionProgramDevelopmentPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-4xl font-semibold text-slate-900">
          Infusion Program Development
        </h1>

        <p className="mt-6 text-lg text-slate-600">
          Infusion services can be a powerful extension of a healthcare
          organization’s clinical and pharmacy strategy. When developed
          thoughtfully, they can improve patient access, strengthen continuity
          of care, and support long-term financial sustainability.
        </p>

        <p className="mt-6 text-lg text-slate-600">
          Because infusion services are closely tied to specialty medication
          management, our approach ensures infusion programs align with broader
          specialty pharmacy and referral capture strategies, creating a
          coordinated model that supports long-term program growth.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-slate-900">
            Therapeutic Areas Supported
          </h2>

          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            Infusion and specialty program strategies can support a wide range
            of complex therapies across multiple disease states.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {[
            "Rheumatology",
            "Gastroenterology",
            "Infectious Disease",
            "Neurology",
            "Immunology",
          ].map((area) => (
            <div
              key={area}
              className="rounded-2xl border border-slate-200 bg-white px-4 py-5 text-center text-sm font-medium text-slate-700 shadow-sm"
            >
              {area}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-semibold text-slate-900">
            Infusion Advisory Services
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-semibold">Feasibility Assessment</h3>
              <p className="mt-3 text-slate-600">
                Evaluate service line potential, patient demand, operational
                requirements, and organizational fit before launch.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-semibold">Program Design</h3>
              <p className="mt-3 text-slate-600">
                Build an infusion model that aligns clinical workflows, pharmacy
                operations, staffing, site-of-care strategy, and compliance.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-semibold">Financial Strategy</h3>
              <p className="mt-3 text-slate-600">
                Assess reimbursement, margin opportunity, drug mix, and payer
                considerations to support sustainable growth.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-semibold">Implementation Roadmap</h3>
              <p className="mt-3 text-slate-600">
                Create a practical phased plan for launch, expansion, and
                operational stabilization.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold text-slate-900">
          Explore Infusion Strategy with Axis
        </h2>

        <p className="mt-4 text-lg text-slate-600">
          Axis supports healthcare organizations seeking disciplined infusion
          growth strategies rooted in operations, compliance, and financial
          sustainability.
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