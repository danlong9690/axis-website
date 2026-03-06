"use client";

export default function AxisStrategiesWebsite() {

  const services = [
    {
      title: "340B Strategy & Optimization",
      text: "Strengthen compliance, improve program capture, optimize contract pharmacy performance, and prepare for changing manufacturer and reimbursement dynamics.",
      link: "/340b-consulting"
    },
    {
      title: "Pharmacy Leadership & Operations",
      text: "Provide executive-level guidance for organizational structure, staffing models, workflow improvement, financial oversight, and performance accountability.",
      link: "/fqhc-pharmacy-consulting"
    },
    {
      title: "Revenue Optimization",
      text: "Identify missed revenue opportunities across entity-owned pharmacies, contract pharmacies, specialty programs, referral capture, and payor strategy.",
      link: "/pharmacy-revenue-optimization"
    },
    {
      title: "Infusion & Specialty Growth",
      text: "Evaluate, develop, and expand infusion and specialty services with a disciplined focus on patient access, compliance, feasibility, and long-term margin.",
      link: "/infusion-program-development"
    },
    {
      title: "Managed Advisory Support",
      text: "Support leadership teams with ongoing strategic advisory, project execution oversight, and practical roadmaps that can be implemented in real operating environments.",
      link: "/fqhc-pharmacy-consulting"
    },
    {
      title: "Compliance & Audit Readiness",
      text: "Build defensible operational frameworks for 340B, accreditation, payer requirements, policy development, and pharmacy governance.",
      link: "/340b-consulting"
    }
  ];

  const focusAreas = [
    "Executive pharmacy strategy",
    "340B optimization and compliance",
    "Contract pharmacy oversight",
    "New pharmacy startup and stabilization",
    "Infusion and specialty growth",
    "Operational and financial improvement",
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800">

      {/* HERO */}

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-slate-100" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-28 lg:grid-cols-2 lg:gap-12">

          <div className="max-w-2xl">

            <div className="mb-4 inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-blue-900">
              Senior-Led Healthcare Strategy
            </div>

            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 lg:text-6xl">
              Executive Pharmacy, 340B, Infusion, and Revenue Strategy
            </h1>

            <p className="mt-6 text-lg text-slate-600">
              Axis Strategies helps healthcare organizations strengthen pharmacy
              performance, optimize 340B strategy, expand specialty and infusion
              services, and improve long-term financial sustainability.
            </p>

            <p className="mt-6 text-base text-slate-500">
              Axis leadership has served in executive roles across both for-profit
              and nonprofit healthcare organizations, including Chief Executive
              Officer, Chief Pharmacy Officer, and other senior leadership
              positions. Collectively, they have led complex pharmacy operations
              generating more than $1 billion in annual revenue across multi-state
              healthcare systems.
</p>

          </div>

          <div className="flex items-center">
            <div className="w-full rounded-3xl bg-slate-900 p-6 shadow-xl">

              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-200">
                Focus Areas
              </div>

              <div className="mt-6 grid gap-3">

                {focusAreas.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl bg-white/5 px-4 py-3 text-sm text-slate-200 ring-1 ring-white/10"
                  >
                    {item}
                  </div>
                ))}

              </div>

            </div>
          </div>

        </div>
      </section>


      {/* SERVICES */}

      <section id="services" className="mx-auto max-w-7xl px-4 py-20">

        <div className="max-w-3xl">

          <div className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-900">
            Services
          </div>

          <h2 className="mt-3 text-3xl font-semibold text-slate-900">
            Strategic services designed for healthcare organizations that need results.
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Axis combines executive leadership, operational experience,
            financial discipline, and healthcare-specific strategy to support
            complex pharmacy environments.
          </p>

        </div>


        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service) => (
            <a
              key={service.title}
              href={service.link}
              className="block rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition"
            >

              <h3 className="text-xl font-semibold text-slate-900">
                {service.title}
              </h3>

              <p className="mt-4 text-slate-600">
                {service.text}
              </p>

              <div className="mt-4 text-sm font-semibold text-blue-900">
                Learn More →
              </div>

            </a>
          ))}

        </div>

      </section>
{/* ORGANIZATIONS WE SUPPORT */}

<section id="organizations-we-support" className="bg-slate-50 py-20">

  <div className="mx-auto max-w-7xl px-6 text-center">

    <div className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-900">
      Organizations We Support
    </div>

    <h2 className="mt-3 text-3xl font-semibold text-slate-900">
      Strategic advisory services for healthcare organizations operating complex pharmacy programs.
    </h2>

    <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
      Axis Strategies partners with leadership teams of organizations responsible for pharmacy,
      340B programs, infusion services, and specialty drug strategy.
    </p>

    <div className="mt-12 grid gap-6 md:grid-cols-3">

      <div className="rounded-2xl border border-slate-200 p-8 shadow-sm">
        <h3 className="text-xl font-semibold text-slate-900">
          Federally Qualified Health Centers
        </h3>
        <p className="mt-4 text-slate-600">
          FQHC systems seeking to optimize 340B performance, expand pharmacy
          utilization, and strengthen long-term program sustainability.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 p-8 shadow-sm">
        <h3 className="text-xl font-semibold text-slate-900">
          Health Systems
        </h3>
        <p className="mt-4 text-slate-600">
          Integrated healthcare organizations developing or optimizing pharmacy,
          specialty, and infusion services across multiple sites of care.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 p-8 shadow-sm">
        <h3 className="text-xl font-semibold text-slate-900">
          Ryan White & Public Health Programs
        </h3>
        <p className="mt-4 text-slate-600">
          Public health organizations seeking strategic pharmacy leadership,
          specialty program growth, and improved patient access to therapy.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 p-8 shadow-sm">
        <h3 className="text-xl font-semibold text-slate-900">
          Multi-Site Healthcare Organizations
        </h3>
        <p className="mt-4 text-slate-600">
          Organizations operating complex pharmacy environments requiring
          operational strategy, governance, and performance improvement.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 p-8 shadow-sm">
        <h3 className="text-xl font-semibold text-slate-900">
          Pharmacy Leadership Teams
        </h3>
        <p className="mt-4 text-slate-600">
          Executive leaders responsible for pharmacy performance, regulatory
          compliance, and revenue sustainability.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 p-8 shadow-sm">
        <h3 className="text-xl font-semibold text-slate-900">
          Healthcare Boards & Executives
        </h3>
        <p className="mt-4 text-slate-600">
          Boards and executive leadership teams seeking independent strategic
          guidance for pharmacy, 340B, and infusion program development.
        </p>
      </div>

    </div>

  </div>

</section>

      {/* ABOUT */}

      <section id="about" className="bg-slate-50 py-20">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <div className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-900">
            About Axis
          </div>

          <h2 className="mt-3 text-3xl font-semibold text-slate-900">
            Built by pharmacy leaders who understand both mission and margin.
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Axis Strategies partners with healthcare leadership teams
            navigating the growing complexity of pharmacy operations, 340B
            optimization, infusion expansion, specialty growth, and revenue
            sustainability.
          </p>

          <p className="mt-5 text-lg text-slate-600">
            Our approach is practical, senior-led, and grounded in real
            operating experience. We help organizations clarify priorities,
            strengthen performance, and move critical initiatives forward with
            discipline and strategic focus.
          </p>

        </div>

      </section>
<section id="leadership" className="py-14 sm:py-16 lg:py-20">
  <div className="mx-auto max-w-6xl px-4 sm:px-6">

    <div className="mx-auto max-w-3xl text-center">
      <div className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-900">
        Leadership
      </div>

      <h2 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl lg:text-4xl">
        Direct access to experienced pharmacy and strategy leaders.
      </h2>

      <p className="mt-4 text-base text-slate-600 sm:text-lg">
        Axis leadership has collectively overseen pharmacy operations exceeding
        $1 billion in annual revenue across multi-state healthcare systems.
      </p>
    </div>

    <div className="mt-10 grid gap-5 md:grid-cols-2 sm:mt-12 sm:gap-6">

      <div className="rounded-2xl border border-slate-200 p-6 shadow-sm sm:p-8">
        <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">
          Daniel Long, PharmD
        </h3>

        <div className="mt-1 text-sm text-blue-900">
          Co-Founder & Principal
        </div>

        <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
          Daniel Long is a pharmacy executive with more than 15 years of
          experience leading complex pharmacy operations across retail,
          specialty, and 340B environments. He has served as Chief Pharmacy
          Officer for large, complex Federally Qualified Health Center systems
          and has overseen pharmacy programs generating more than $175 million
          in annual revenue.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 p-6 shadow-sm sm:p-8">
        <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">
          Christi Epps, PharmD
        </h3>

        <div className="mt-1 text-sm text-blue-900">
          Co-Founder & Principal
        </div>

        <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
          Christi Epps is a nationally recognized pharmacy executive with more
          than 30 years of leadership experience across large-scale pharmacy
          operations, specialty pharmacy, and 340B strategy. She has served as
          Chief Pharmacy Officer for large, complex Federally Qualified Health
          Center organizations and previously led a national pharmacy services
          organization to more than $1B in annual revenue.
        </p>
      </div>

    </div>
  </div>
</section>
<section id="insights" className="py-14 sm:py-16 lg:py-20">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-3xl text-center">
      <div className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-900">
        Strategic Insights
      </div>
      <h2 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl lg:text-4xl">
        What healthcare leaders are navigating right now.
      </h2>
      <p className="mt-4 text-base text-slate-600 sm:text-lg">
        Healthcare organizations are facing rapid changes across pharmacy
        reimbursement, the 340B program, and specialty drug distribution.
        Axis works with leadership teams to navigate these changes while
        protecting both financial sustainability and patient access.
      </p>
    </div>

    <div className="mt-10 grid gap-5 md:grid-cols-3 sm:mt-12 sm:gap-8">
      <div className="rounded-2xl border border-slate-200 p-6 shadow-sm sm:p-7">
        <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">
          The Future of 340B Is Changing
        </h3>
        <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
          Manufacturer restrictions, policy discussions, and operational
          complexity are reshaping how covered entities must manage 340B
          programs. Organizations must balance compliance, contract pharmacy
          performance, and long-term program sustainability.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 p-6 shadow-sm sm:p-7">
        <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">
          Pharmacy Is a Core Revenue Engine
        </h3>
        <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
          For many healthcare organizations, pharmacy programs are critical to
          financial sustainability. Low utilization, referral leakage, and
          underperforming contract pharmacies can create major revenue gaps.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 p-6 shadow-sm sm:p-7">
        <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">
          Infusion and Specialty Programs Are Rapidly Expanding
        </h3>
        <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
          Biologic therapies and specialty medications continue to drive
          healthcare growth. Strategic infusion and specialty program
          development can improve both patient access and organizational
          sustainability.
        </p>
      </div>
    </div>
  </div>
</section>
<section id="assessment" className="bg-slate-900 py-14 text-white sm:py-16 lg:py-20">
  <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr,0.95fr] lg:gap-10 lg:px-8">
    <div>
      <div className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-200">
        Executive Assessment
      </div>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
        How much pharmacy opportunity is your organization leaving on the
        table?
      </h2>
      <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
        Axis offers a complimentary executive-level assessment to identify
        opportunities in pharmacy utilization, contract pharmacy performance,
        specialty therapy capture, infusion development, and 340B program
        optimization.
      </p>

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl bg-white/5 px-4 py-3 text-sm text-slate-200 ring-1 ring-white/10">
          Pharmacy utilization rates
        </div>
        <div className="rounded-2xl bg-white/5 px-4 py-3 text-sm text-slate-200 ring-1 ring-white/10">
          Contract pharmacy performance
        </div>
        <div className="rounded-2xl bg-white/5 px-4 py-3 text-sm text-slate-200 ring-1 ring-white/10">
          Referral capture gaps
        </div>
        <div className="rounded-2xl bg-white/5 px-4 py-3 text-sm text-slate-200 ring-1 ring-white/10">
          Specialty therapy leakage
        </div>
        <div className="rounded-2xl bg-white/5 px-4 py-3 text-sm text-slate-200 ring-1 ring-white/10">
          Infusion program opportunities
        </div>
        <div className="rounded-2xl bg-white/5 px-4 py-3 text-sm text-slate-200 ring-1 ring-white/10">
          340B optimization opportunities
        </div>
      </div>
    </div>

    <div className="rounded-[1.75rem] bg-white p-6 text-slate-900 shadow-2xl sm:rounded-[2rem] sm:p-8">
      <h3 className="text-xl font-semibold sm:text-2xl">
        Request Your Assessment
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">
        Use this form to start the conversation. You can connect it to your
        CRM, inbox, or scheduling tool.
      </p>

      <form className="mt-6 space-y-4">
        <input
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-base outline-none transition focus:border-blue-900"
          placeholder="Name"
        />
        <input
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-base outline-none transition focus:border-blue-900"
          placeholder="Organization"
        />
        <input
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-base outline-none transition focus:border-blue-900"
          placeholder="Title"
        />
        <input
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-base outline-none transition focus:border-blue-900"
          placeholder="Email"
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <input
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-base outline-none transition focus:border-blue-900"
            placeholder="# Entity Pharmacies"
          />
          <input
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-base outline-none transition focus:border-blue-900"
            placeholder="# Contract Pharmacies"
          />
        </div>
        <input
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-base outline-none transition focus:border-blue-900"
          placeholder="Estimated pharmacy utilization rate (optional)"
        />
        <button
          type="button"
          className="w-full rounded-2xl bg-blue-900 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
        >
          Request Assessment
        </button>
      </form>
    </div>
  </div>
</section>
      {/* CONTACT */}

      <section id="contact" className="bg-blue-50 py-20">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <div className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-900">
            Contact
          </div>

          <h2 className="mt-3 text-3xl font-semibold text-slate-900">
            Start a conversation with Axis.
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Axis partners with healthcare organizations seeking strategic
            pharmacy leadership, 340B optimization, infusion planning, and
            revenue growth.
          </p>

          <a
            href="mailto:info@axisstrategiesgroup.com"
            className="inline-block mt-8 rounded-xl bg-blue-900 px-6 py-3 text-white"
          >
            info@axisstrategiesgroup.com
          </a>

        </div>

      </section>


      {/* FOOTER */}

      <footer className="border-t border-slate-200 px-4 py-8 text-center text-sm text-slate-500">
        © 2026 Axis Strategies. All rights reserved.
      </footer>

    </div>
  );
}