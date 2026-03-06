export const metadata = {
  title: "340B Consulting Services | Axis Strategies",
  description:
    "Axis Strategies provides executive 340B consulting, contract pharmacy optimization, compliance strategy, and revenue growth advisory for FQHCs and healthcare systems.",
};

export default function Consulting340B() {
  return (
    <div className="min-h-screen bg-white text-slate-800">

      
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-4xl font-semibold text-slate-900">
          340B Strategy and Consulting
        </h1>

        <p className="mt-6 text-lg text-slate-600">
          The 340B program has become one of the most complex operational and
          financial programs in healthcare. Covered entities must balance
          compliance, contract pharmacy performance, manufacturer restrictions,
          and patient access while maintaining program sustainability.
        </p>

        <p className="mt-6 text-lg text-slate-600">
          Axis Strategies provides executive-level advisory services to help
          healthcare organizations optimize 340B program performance, strengthen
          compliance frameworks, and identify revenue opportunities within
          existing pharmacy infrastructure.
        </p>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-5xl px-6">

          <h2 className="text-3xl font-semibold text-slate-900">
            340B Services
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">

            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="font-semibold text-lg">340B Program Optimization</h3>
              <p className="mt-3 text-slate-600">
                Evaluate program structure, utilization rates, and capture
                opportunities across entity-owned and contract pharmacy
                environments.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="font-semibold text-lg">Contract Pharmacy Strategy</h3>
              <p className="mt-3 text-slate-600">
                Improve contract pharmacy performance, evaluate network
                structure, and identify opportunities to strengthen program
                oversight and financial results.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="font-semibold text-lg">Compliance & Audit Readiness</h3>
              <p className="mt-3 text-slate-600">
                Prepare organizations for HRSA audits, manufacturer reviews,
                and internal governance requirements.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="font-semibold text-lg">Executive Strategy</h3>
              <p className="mt-3 text-slate-600">
                Support healthcare leadership teams navigating evolving 340B
                policy, manufacturer restrictions, and long-term program
                sustainability.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 text-center">

        <h2 className="text-3xl font-semibold text-slate-900">
          Talk with a 340B Strategy Advisor
        </h2>

        <p className="mt-4 text-lg text-slate-600">
          Axis Strategies works with healthcare organizations across the
          country seeking executive-level pharmacy and 340B strategy support.
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