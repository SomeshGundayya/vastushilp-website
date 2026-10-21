
import { ArrowUpRight, ArrowRight } from "lucide-react";

const expertise = [
  {
    number: "01",
    title: "Architectural Planning",
    description: "Functional layouts and thoughtful spatial planning.",
  },
  {
    number: "02",
    title: "Structural Design",
    description: "Engineering-led structural design solutions.",
  },
  {
    number: "03",
    title: "2D & 3D Elevation",
    description: "Visualizing architectural concepts and building exteriors.",
  },
  {
    number: "04",
    title: "Estimation & Costing",
    description: "Project quantity and cost estimation support.",
  },
  {
    number: "05",
    title: "Site Supervision",
    description: "Technical guidance and supervision during construction.",
  },
  {
    number: "06",
    title: "Interior & Exterior Consultancy",
    description: "Design guidance for interior and exterior spaces.",
  },
];

function AreasOfExpertise() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">

          {/* Left Content */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#C8102E]" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C8102E]">
                What We Do
              </span>
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#111827] sm:text-4xl lg:text-[44px]">
              Our Areas of
              <span className="block text-[#D4A017]">
                Expertise.
              </span>
            </h2>

            <p className="mt-6 max-w-md text-sm leading-8 text-slate-600 sm:text-base">
              From architectural concepts to engineering
              consultancy, Vastushilp provides services
              across different stages of building planning,
              design, and construction.
            </p>

            <a
              href="/#contact"
              className="mt-8 inline-flex items-center gap-3 rounded-md bg-[#111827] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#C8102E]"
            >
              Discuss Your Requirements
              <ArrowUpRight size={18} />
            </a>
          </div>

          {/* Right Expertise List */}
          <div className="border-t border-slate-200">
            {expertise.map((item) => (
              <div
                key={item.number}
                className="group flex items-start gap-4 border-b border-slate-200 py-6 transition-colors hover:bg-[#F8FAFC] sm:gap-6 sm:px-4"
              >
                <span className="pt-1 text-sm font-bold text-[#C8102E]">
                  {item.number}
                </span>

                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-bold text-[#111827] sm:text-xl">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>

                <ArrowRight
                  size={20}
                  className="mt-1 shrink-0 text-slate-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#C8102E]"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default AreasOfExpertise;
