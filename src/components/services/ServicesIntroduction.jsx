
import {
  ArrowUpRight,
  DraftingCompass,
  Building2,
  CheckCircle2,
} from "lucide-react";

const focusAreas = [
  "Architectural Design & Planning",
  "Structural Engineering",
  "Project Consultancy",
];

function ServicesIntroduction() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">

          {/* Left Content */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#C8102E]" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C8102E]">
                What We Offer
              </span>
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#111827] sm:text-4xl lg:text-[44px]">
              Complete Solutions
              <span className="mt-2 block text-[#D4A017]">
                For Your Vision.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-8 text-slate-600 sm:text-base">
              At Vastushilp Associates & Consulting Engineers,
              we provide architectural and engineering
              consultancy services designed to support
              different stages of your building project.
            </p>

            <p className="mt-4 max-w-xl text-sm leading-8 text-slate-600 sm:text-base">
              From initial planning and structural design
              to project estimation, visualization, and
              site supervision, our services bring together
              design thinking and technical considerations.
            </p>

            <a
              href="/#contact"
              className="mt-8 inline-flex items-center gap-3 rounded-md bg-[#111827] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#C8102E]"
            >
              Discuss Your Requirements
              <ArrowUpRight size={18} />
            </a>
          </div>

          {/* Right Highlight Panel */}
          <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-7 sm:p-10">

            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#111827] text-white">
              <DraftingCompass size={28} strokeWidth={1.7} />
            </div>

            <h3 className="mt-7 text-2xl font-bold text-[#111827]">
              Design Meets Engineering
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              We focus on combining functional planning,
              thoughtful design, and practical engineering
              considerations for each project's requirements.
            </p>

            <div className="mt-7 space-y-4 border-t border-slate-200 pt-7">
              {focusAreas.map((area) => (
                <div key={area} className="flex items-center gap-3">
                  <CheckCircle2
                    size={20}
                    className="shrink-0 text-[#C8102E]"
                  />

                  <span className="text-sm font-medium text-slate-700">
                    {area}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-3 rounded-lg bg-white p-4">
              <Building2 size={23} className="shrink-0 text-[#D4A017]" />

              <p className="text-sm font-semibold text-[#111827]">
                You Dream It, We Build It...!
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesIntroduction;
