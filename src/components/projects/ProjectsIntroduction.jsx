
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

function ProjectsIntroduction() {
  const scrollToProjects = () => {
    document
      .getElementById("projects-gallery")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">

          {/* Left Content */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#C8102E]" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C8102E]">
                Our Portfolio
              </span>
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#111827] sm:text-4xl lg:text-[44px]">
              Spaces Designed
              <span className="mt-2 block text-[#D4A017]">
                With Purpose.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-8 text-slate-600 sm:text-base">
              At Vastushilp Associates & Consulting
              Engineers, we believe every building begins
              with an idea and develops through thoughtful
              planning, design, and technical considerations.
            </p>

            <p className="mt-4 max-w-xl text-sm leading-8 text-slate-600 sm:text-base">
              Explore architectural concepts and design
              possibilities across residential, commercial,
              and other building spaces.
            </p>

            <button
              type="button"
              onClick={scrollToProjects}
              className="mt-8 inline-flex items-center gap-3 rounded-md bg-[#111827] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#C8102E]"
            >
              Explore Projects
              <ArrowUpRight size={18} />
            </button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl bg-slate-100">
              <img
                src="/images/project-1.jpg"
                alt="Illustrative architectural design concept"
                loading="lazy"
                className="h-[330px] w-full object-cover sm:h-[440px] lg:h-[520px]"
              />
            </div>

            {/* Decorative Label */}
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-xl bg-white/95 px-5 py-4 shadow-lg backdrop-blur-sm sm:bottom-7 sm:left-7 sm:right-auto sm:min-w-[250px]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#C8102E]">
                  Design Inspiration
                </p>

                <p className="mt-1 text-sm font-bold text-[#111827]">
                  Architecture & Engineering
                </p>
              </div>

              <ArrowDownRight
                size={23}
                className="text-[#D4A017]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ProjectsIntroduction;
