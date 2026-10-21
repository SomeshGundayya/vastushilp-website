
import {
  MessagesSquare,
  DraftingCompass,
  Ruler,
  ClipboardList,
  HardHat,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessagesSquare,
    title: "Initial Consultation",
    description:
      "We discuss your project ideas, requirements, site considerations, and expectations.",
  },
  {
    number: "02",
    icon: DraftingCompass,
    title: "Planning & Design",
    description:
      "Architectural layouts and design concepts are developed around the project's needs.",
  },
  {
    number: "03",
    icon: Ruler,
    title: "Technical Development",
    description:
      "Relevant structural and technical design considerations are addressed.",
  },
  {
    number: "04",
    icon: ClipboardList,
    title: "Estimation & Review",
    description:
      "Where required, we assist with quantity estimation and project cost planning.",
  },
  {
    number: "05",
    icon: HardHat,
    title: "Project Support",
    description:
      "Site supervision and technical guidance may be provided according to the agreed scope.",
  },
];

function ServicesProcess() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#C8102E]" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C8102E]">
              From Idea to Execution
            </span>

            <span className="h-[2px] w-8 bg-[#C8102E]" />
          </div>

          <h2 className="text-3xl font-bold text-[#111827] sm:text-4xl lg:text-[44px]">
            How We <span className="text-[#D4A017]">Work</span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
            A structured approach to understanding your
            project and providing relevant architectural
            and engineering consultancy services.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-5xl">

          {/* Desktop Connecting Line */}
          <div className="absolute left-0 right-0 top-7 hidden h-[2px] bg-slate-200 lg:block" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div key={step.number} className="relative">

                  {/* Step Icon */}
                  <div
                    className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white shadow-sm ${
                      index === 0
                        ? "bg-[#C8102E] text-white"
                        : "bg-[#111827] text-white"
                    }`}
                  >
                    <Icon size={23} strokeWidth={1.8} />
                  </div>

                  {/* Step Content */}
                  <div className="mt-5">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#C8102E]">
                      Step {step.number}
                    </span>

                    <h3 className="mt-3 text-lg font-bold leading-7 text-[#111827]">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {step.description}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

export default ServicesProcess;
