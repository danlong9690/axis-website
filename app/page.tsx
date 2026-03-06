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
    "Referral capture and utilization",
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
              Axis leadership has served as Chief Pharmacy Officer for large,
              complex FQHC organizations and collectively overseen pharmacy
              operations exceeding $1 billion in annual revenue across
              multi-state healthcare systems.
            </p>

          </div>

          <div className="flex items-center">
            <div className="w-full rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">

              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-900">
                Focus Areas
              </div>

              <div className="mt-6 grid gap-3">

                {focusAreas.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl bg-slate-50 px-4 py-3 text-sm"
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