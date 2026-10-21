
import {
  DraftingCompass,
  ShieldCheck,
  ClipboardCheck,
  House,
  ArrowUpRight,
} from "lucide-react";

const benefits = [
  {
    icon: DraftingCompass,
    title: "Thoughtful Planning",
    description:
      "Practical architectural solutions designed around your space, needs, and project vision.",
  },
  {
    icon: ShieldCheck,
    title: "Engineering-Focused Approach",
    description:
      "Structural design considerations that prioritize strength, stability, and functionality.",
  },
  {
    icon: ClipboardCheck,
    title: "Detailed Project Approach",
    description:
      "Careful attention to design details, cost estimation, and construction coordination.",
  },
  {
    icon: House,
    title: "Integrated Consultancy",
    description:
      "Architectural, structural, interior, and exterior design guidance under one roof.",
  },
];

function WhyChooseUs() {
  return (
    <section className="bg-[#F8FAFC] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">

          {/* Left Content */}
          <div>
            {/* Section Label */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#C8102E]" />

              <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#C8102E]">
                Why Choose Us
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-bold leading-tight text-[#111827] sm:text-4xl lg:text-5xl">
              Your Vision Deserves
              <span className="block text-[#D4A017]">
                The Right Expertise.
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600">
              At Vastushilp Associates & Consulting
              Engineers, we believe every successful
              project begins with thoughtful planning
              and practical engineering solutions.
              Our consultancy approach brings design
              and technical considerations together
              to support your building journey.
            </p>

            {/* Benefit Cards */}
            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <div
                    key={benefit.title}
                    className="group rounded-xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4A017] hover:shadow-lg"
                  >
                    {/* Icon */}
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#C8102E]/10 transition-colors group-hover:bg-[#111827]">
                      <Icon
                        size={25}
                        strokeWidth={1.8}
                        className="text-[#C8102E] transition-colors group-hover:text-[#D4A017]"
                      />
                    </div>

                    <h3 className="text-base font-bold text-[#111827]">
                      {benefit.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="mt-9 inline-flex items-center gap-2 rounded-md bg-[#C8102E] px-7 py-4 font-semibold text-white transition-colors hover:bg-[#A20D26]"
            >
              Discuss Your Project
              <ArrowUpRight size={19} />
            </a>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-xl">
              <img
                src="/images/why-choose-us.jpg"
                alt="Professional architectural and engineering consultancy"
                loading="lazy"
                className="h-[450px] w-full object-cover transition-transform duration-700 hover:scale-105 lg:h-[680px]"
              />
            </div>

            {/* Decorative Border */}
            <div className="pointer-events-none absolute -bottom-5 -right-3 h-32 w-32 rounded-br-xl border-b-8 border-r-8 border-[#D4A017] sm:-right-5" />

            {/* Floating Brand Card */}
            <div className="absolute bottom-8 left-4 max-w-[250px] rounded-lg border border-white/20 bg-[#111827]/95 p-5 shadow-xl sm:left-6">
              <div className="mb-3 h-1 w-10 bg-[#D4A017]" />

              <p className="text-lg font-bold text-white">
                You Dream It,
                <span className="block text-[#D4A017]">
                  We Build It...!
                </span>
              </p>

              <p className="mt-2 text-xs leading-5 text-slate-300">
                Architectural & Engineering Consultancy
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
