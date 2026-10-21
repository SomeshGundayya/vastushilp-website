
import {
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

const strengths = [
  "Thoughtful Architectural Planning",
  "Engineering-Focused Solutions",
  "Integrated Project Consultancy",
];

function CompanyIntroduction() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Left Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/images/about-building.jpg"
                alt="Modern architectural building design"
                className="h-[320px] w-full object-cover sm:h-[450px] lg:h-[550px]"
                loading="lazy"
              />
            </div>

            {/* Decorative Accent */}
            <div className="absolute -bottom-4 -right-4 -z-10 hidden h-40 w-40 rounded-2xl bg-[#D4A017]/15 lg:block" />
          </div>

          {/* Right Content */}
          <div>

            {/* Label */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#C8102E]" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C8102E]">
                Who We Are
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#111827] sm:text-4xl lg:text-[44px]">
              Designing With Purpose.
              <span className="mt-2 block text-[#D4A017]">
                Building With Precision.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-7 text-sm leading-8 text-slate-600 sm:text-base">
              Vastushilp Associates & Consulting Engineers
              is an architectural and civil engineering
              consultancy providing solutions in planning,
              structural design, and project-related
              engineering services.
            </p>

            <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
              Our approach brings together design thinking,
              technical considerations, and practical
              project requirements to help clients plan
              spaces that are functional, thoughtfully
              designed, and aligned with their vision.
            </p>

            {/* Strengths */}
            <div className="mt-8 border-t border-slate-200 pt-7">

              <h3 className="text-lg font-bold text-[#111827]">
                What Guides Our Work
              </h3>

              <div className="mt-5 space-y-4">
                {strengths.map((strength) => (
                  <div
                    key={strength}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2
                      size={20}
                      className="shrink-0 text-[#C8102E]"
                    />

                    <span className="text-sm font-medium text-slate-700">
                      {strength}
                    </span>
                  </div>
                ))}
              </div>

            </div>

            {/* CTA */}
            <a
              href="/#contact"
              className="mt-9 inline-flex items-center gap-3 rounded-md bg-[#111827] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#C8102E]"
            >
              Discuss Your Project
              <ArrowUpRight size={18} />
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}

export default CompanyIntroduction;
