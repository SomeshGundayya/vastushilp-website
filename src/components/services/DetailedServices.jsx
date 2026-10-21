
import { ArrowUpRight, Check } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Architectural Planning",
    description:
      "We provide architectural planning solutions that consider functionality, space utilization, and individual project requirements. Our focus is on creating thoughtful layouts that support your vision.",
    features: [
      "Residential & Commercial Planning",
      "Floor Plans & Layout Design",
      "Space Planning",
    ],
    image: "/images/service-1.jpg",
  },
  {
    number: "02",
    title: "Structural Design",
    description:
      "Our structural design consultancy focuses on technical planning and engineering considerations for building projects, helping translate architectural concepts into practical structural solutions.",
    features: [
      "Structural Design Consultancy",
      "Structural Layouts",
      "Technical Drawings",
    ],
    image: "/images/service-2.jpg",
  },
  {
    number: "03",
    title: "2D & 3D Elevation",
    description:
      "We help visualize building exteriors through 2D and 3D elevation designs, making it easier to understand the architectural appearance before construction.",
    features: [
      "2D Elevation Design",
      "3D Building Visualization",
      "Exterior Design Concepts",
    ],
    image: "/images/service-3.jpg",
  },
  {
    number: "04",
    title: "Estimation & Costing",
    description:
      "Our estimation and costing services support project planning by preparing quantity and cost estimates based on available drawings, specifications, and project requirements.",
    features: [
      "Quantity Estimation",
      "Project Cost Estimation",
      "Material Quantity Assessment",
    ],
    image: "/images/service-4.jpg",
  },
  {
    number: "05",
    title: "Site Supervision",
    description:
      "We provide site supervision and technical guidance based on the agreed project scope, helping coordinate construction activities with relevant plans and specifications.",
    features: [
      "Construction Site Visits",
      "Technical Guidance",
      "Work Progress Review",
    ],
    image: "/images/service-5.jpg",
  },
  {
    number: "06",
    title: "Interior & Exterior Consultancy",
    description:
      "We provide design consultancy for interior and exterior spaces, considering aesthetics, functionality, materials, and the individual requirements of each project.",
    features: [
      "Interior Design Consultation",
      "Exterior Design Guidance",
      "Material & Finish Selection",
    ],
    image: "/images/service-6.jpg",
  },
];

function DetailedServices() {
  return (
    <section id="detailed-services" className="bg-[#F8FAFC] py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center lg:mb-20">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#C8102E]" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C8102E]">
              Our Expertise
            </span>

            <span className="h-[2px] w-8 bg-[#C8102E]" />
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl lg:text-[44px]">
            Explore Our{" "}
            <span className="text-[#D4A017]">Services</span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
            Explore our architectural and engineering
            consultancy services for different stages
            of your project.
          </p>
        </div>

        {/* Service Sections */}
        <div className="space-y-16 lg:space-y-24">
          {services.map((service, index) => (
            <article
              key={service.number}
              className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16"
            >
              {/* Image */}
              <div
                className={`relative ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <div className="overflow-hidden rounded-2xl bg-slate-200">
                  <img
                    src={service.image}
                    alt={`${service.title} illustration`}
                    loading="lazy"
                    className="h-[260px] w-full object-cover transition-transform duration-500 hover:scale-105 sm:h-[360px] lg:h-[440px]"
                  />
                </div>

                <div className="absolute bottom-5 left-5 rounded-lg bg-white px-5 py-3 shadow-md">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#C8102E]">
                    Service {service.number}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#C8102E]">
                  Vastushilp Services
                </span>

                <h3 className="mt-4 text-2xl font-bold leading-tight text-[#111827] sm:text-3xl lg:text-[38px]">
                  {service.title}
                </h3>

                <p className="mt-6 text-sm leading-8 text-slate-600 sm:text-base">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mt-7 space-y-4">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-3"
                    >
                      <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#D4A017]/15 text-[#B8860B]">
                        <Check size={15} strokeWidth={2.5} />
                      </div>

                      <span className="text-sm font-medium leading-6 text-slate-700">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="/#contact"
                  className="mt-9 inline-flex items-center gap-3 rounded-md bg-[#111827] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#C8102E]"
                >
                  Enquire About This Service
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DetailedServices;
