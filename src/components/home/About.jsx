import AboutImageSlider from "./AboutImageSlider";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";


const expertise = [
  "Architectural Planning",
  "Structural Design",
  "2D & 3D Elevation",
  "Estimation & Costing",
  "Site Supervision",
  "Interior & Exterior Consultancy",
];

function About() {
  return (
    <section id="about" className="bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">

        {/* Image Column */}
        <div className="relative">
        <AboutImageSlider />

          {/* Decorative Corner */}
          <div className="absolute -bottom-5 -right-3 h-28 w-28 rounded-br-lg border-b-8 border-r-8 border-[#D4A017] sm:-right-5 pointer-events-none" />
</div>

        {/* Content Column */}
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-[#C8102E]" />
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#C8102E]">
              About Our Company
            </span>
          </div>

          <h2 className="text-3xl font-bold leading-tight text-[#111827] sm:text-4xl lg:text-5xl">
            Designing Strong
            <span className="block text-[#D4A017]">
              Foundations.
            </span>
            Building Your Vision.
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600">
            Vastushilp Associates & Consulting Engineers
            is an architectural and civil engineering
            consultancy focused on transforming ideas into
            thoughtfully planned, functional, and
            well-designed spaces.
          </p>

          {/* <p className="mt-4 text-base leading-8 text-slate-600">
            From architectural planning and structural
            design to project estimation, site supervision,
            and interior and exterior consultancy, we
            provide integrated solutions to support every
            stage of the building process. Our approach
            brings together practical engineering,
            creative design, and careful planning to help
            clients make informed decisions.
          </p> */}

          <h3 className="mt-8 text-lg font-bold text-[#111827]">
            Our Areas of Expertise
          </h3>

          <div className="mt-5 grid gap-x-5 gap-y-4 sm:grid-cols-2">
            {expertise.map((item) => (
              <div key={item} className="flex items-start gap-2">
                <CheckCircle2
                  size={19}
                  className="mt-0.5 shrink-0 text-[#C8102E]"
                />
                <span className="text-sm font-medium text-slate-700">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="mt-9 inline-flex items-center gap-2 rounded-md bg-[#111827] px-7 py-4 font-semibold text-white transition-colors hover:bg-[#C8102E]"
          >
            Discuss Your Project
            <ArrowUpRight size={19} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
