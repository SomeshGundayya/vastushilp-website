
import {
  MessagesSquare,
  DraftingCompass,
  Ruler,
  HardHat,
  ArrowUpRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessagesSquare,
    title: "Understanding Your Vision",
    description:
      "We begin by discussing your ideas, project requirements, preferences, and practical considerations.",
  },
  {
    number: "02",
    icon: DraftingCompass,
    title: "Planning & Design",
    description:
      "We develop architectural planning and design solutions aligned with the project's needs.",
  },
  {
    number: "03",
    icon: Ruler,
    title: "Technical Engineering",
    description:
      "Structural design and engineering considerations help shape practical project solutions.",
  },
  {
    number: "04",
    icon: HardHat,
    title: "Project Guidance",
    description:
      "We provide relevant consultancy and site supervision services based on the project scope.",
  },
];

function OurApproach() {
  return (
    <section className="bg-[#F8FAFC] py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">

          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#C8102E]" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C8102E]">
              How We Work
            </span>

            <span className="h-[2px] w-8 bg-[#C8102E]" />
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl lg:text-[44px]">
            Our <span className="text-[#D4A017]">Approach</span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            Every project begins with an idea. Our approach
            brings together thoughtful planning, technical
            considerations, and practical consultancy.
          </p>
        </div>

        {/* Process Cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6">

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="group relative rounded-xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4A017]/40 hover:shadow-lg"
              >
                {/* Step Number */}
                <span className="absolute right-6 top-6 text-4xl font-bold text-slate-100 transition-colors group-hover:text-[#D4A017]/20">
                  {step.number}
                </span>

                {/* Icon */}
                <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-[#111827]/5 text-[#111827] transition-colors group-hover:bg-[#C8102E] group-hover:text-white">
                  <Icon size={26} strokeWidth={1.8} />
                </div>

                {/* Content */}
                <h3 className="mt-7 text-lg font-bold leading-7 text-[#111827]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {step.description}
                </p>

                {/* Accent */}
                <div className="mt-7 h-[3px] w-10 rounded-full bg-[#D4A017] transition-all duration-300 group-hover:w-20" />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <a
            href="/#contact"
            className="inline-flex items-center justify-center gap-3 rounded-md bg-[#111827] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#C8102E]"
          >
            Discuss Your Project
            <ArrowUpRight size={18} />
          </a>
        </div>

      </div>
    </section>
  );
}

export default OurApproach;
