
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Architectural Planning",
    description:
      "Thoughtfully designed residential and commercial spaces that combine functionality, aesthetics, and efficient space utilization.",
    image: "/images/service-planning.jpg",
  },
  {
    number: "02",
    title: "Structural Design",
    description:
      "Practical structural engineering solutions focused on strength, stability, and safe building design.",
    image: "/images/service-structural.jpg",
  },
  {
    number: "03",
    title: "2D & 3D Elevation",
    description:
      "Detailed drawings and realistic architectural visualizations that help you see your dream project before construction begins.",
    image: "/images/service-elevation.jpg",
  },
  {
    number: "04",
    title: "Estimation & Costing",
    description:
      "Detailed project cost estimates and material planning to support informed budgeting and construction decisions.",
    image: "/images/service-estimation.jpg",
  },
  {
    number: "05",
    title: "Site Supervision",
    description:
      "Professional construction site monitoring to support quality workmanship, design coordination, and project progress.",
    image: "/images/service-supervision.jpg",
  },
  {
    number: "06",
    title: "Interior & Exterior Consultancy",
    description:
      "Creative and practical design guidance for beautiful, comfortable interiors and visually appealing building exteriors.",
    image: "/images/service-interior.jpg",
  },
];

function Services() {
  return (
    <section id="services" className="bg-[#F8FAFC] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        {/* Section Heading */}
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#C8102E]" />
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#C8102E]">
                What We Do
              </span>
            </div>

            <h2 className="text-3xl font-bold leading-tight text-[#111827] sm:text-4xl lg:text-5xl">
              Our Professional
              <span className="block text-[#D4A017]">
                Services
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
              From the first architectural concept to
              construction supervision, we provide
              comprehensive engineering and design
              consultancy solutions for your project.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex w-fit items-center gap-2 border-b-2 border-[#C8102E] pb-2 font-semibold text-[#111827] transition-colors hover:text-[#C8102E]"
          >
            Discuss Your Requirements
            <ArrowUpRight size={19} />
          </a>
        </div>

        {/* Services Grid */}
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              className="group overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Service Image */}
              <div className="relative h-60 overflow-hidden bg-slate-200">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/45 to-transparent" />

                {/* Service Number */}
                <span className="absolute left-5 top-5 rounded-md bg-[#111827]/90 px-3 py-2 text-sm font-bold text-[#D4A017]">
                  {service.number}
                </span>
              </div>

              {/* Card Content */}
              <div className="flex min-h-64 flex-col p-7">
                <h3 className="text-xl font-bold text-[#111827] transition-colors group-hover:text-[#C8102E]">
                  {service.title}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
                  {service.description}
                </p>

                <a
                  href="#contact"
                  aria-label={`Enquire about ${service.title}`}
                  className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-bold text-[#C8102E] transition-all group-hover:gap-3"
                >
                  Enquire Now
                  <ArrowUpRight size={18} />
                </a>
              </div>

              {/* Brand Accent */}
              <div className="h-1 w-0 bg-[#D4A017] transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 flex flex-col items-start justify-between gap-5 rounded-xl bg-[#111827] p-8 sm:flex-row sm:items-center lg:p-10">
          <div>
            <h3 className="text-xl font-bold text-white sm:text-2xl">
              Have a Project in Mind?
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Let's discuss how we can turn your ideas into
              a well-planned reality.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-md bg-[#C8102E] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#A20D26]"
          >
            Get In Touch
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;




// Service 2 Option Below
///////////////////////


// import {
//   ArrowUpRight,
//   Ruler,
//   Building2,
//   Monitor,
//   Calculator,
//   HardHat,
//   Sofa,
// } from "lucide-react";

// const services = [
//   {
//     number: "01",
//     title: "Architectural Planning",
//     description:
//       "Functional and aesthetically appealing building plans tailored to your space, lifestyle, and project requirements.",
//     icon: Ruler,
//   },
//   {
//     number: "02",
//     title: "Structural Design",
//     description:
//       "Engineering solutions focused on structural strength, stability, and safe building design.",
//     icon: Building2,
//   },
//   {
//     number: "03",
//     title: "2D & 3D Elevation",
//     description:
//       "Detailed drawings and realistic 3D visualizations that bring your architectural vision to life.",
//     icon: Monitor,
//   },
//   {
//     number: "04",
//     title: "Estimation & Costing",
//     description:
//       "Detailed construction cost estimates and material planning to help you make informed financial decisions.",
//     icon: Calculator,
//   },
//   {
//     number: "05",
//     title: "Site Supervision",
//     description:
//       "Professional site monitoring and construction coordination to support quality and project progress.",
//     icon: HardHat,
//   },
//   {
//     number: "06",
//     title: "Interior & Exterior Consultancy",
//     description:
//       "Creative design guidance to enhance the functionality, comfort, and visual appeal of your spaces.",
//     icon: Sofa,
//   },
// ];

// function Services() {
//   return (
//     <section
//       id="services"
//       className="bg-[#F8FAFC] py-20 lg:py-28"
//     >
//       <div className="mx-auto max-w-7xl px-5 lg:px-8">

//         {/* Section Header */}
//         <div className="mx-auto mb-14 max-w-2xl text-center">
//           <div className="mb-5 flex items-center justify-center gap-3">
//             <span className="h-[2px] w-8 bg-[#C8102E]" />
//             <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#C8102E]">
//               What We Offer
//             </span>
//             <span className="h-[2px] w-8 bg-[#C8102E]" />
//           </div>

//           <h2 className="text-3xl font-bold text-[#111827] sm:text-4xl lg:text-5xl">
//             Our Professional{" "}
//             <span className="text-[#D4A017]">
//               Services
//             </span>
//           </h2>

//           <p className="mt-5 text-base leading-8 text-slate-600">
//             Comprehensive architectural and engineering
//             consultancy solutions designed to transform
//             your ideas into thoughtfully planned spaces.
//           </p>
//         </div>

//         {/* Services Grid */}
//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {services.map((service) => {
//             const Icon = service.icon;

//             return (
//               <article
//                 key={service.number}
//                 className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#D4A017]/50 hover:shadow-xl"
//               >
//                 {/* Service Number */}
//                 <span className="absolute right-7 top-7 text-4xl font-bold text-slate-100 transition-colors group-hover:text-[#D4A017]/20">
//                   {service.number}
//                 </span>

//                 {/* Icon */}
//                 <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-xl bg-[#111827]/5 transition-all duration-300 group-hover:bg-[#111827]">
//                   <Icon
//                     size={30}
//                     strokeWidth={1.7}
//                     className="text-[#C8102E] transition-colors duration-300 group-hover:text-[#D4A017]"
//                   />
//                 </div>

//                 {/* Title */}
//                 <h3 className="text-xl font-bold text-[#111827] transition-colors group-hover:text-[#C8102E]">
//                   {service.title}
//                 </h3>

//                 {/* Description */}
//                 <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
//                   {service.description}
//                 </p>

//                 {/* Enquiry Link */}
//                 <a
//                   href="#contact"
//                   className="mt-7 inline-flex w-fit items-center gap-2 text-sm font-bold text-[#C8102E] transition-all group-hover:gap-3"
//                   aria-label={`Enquire about ${service.title}`}
//                 >
//                   Enquire Now
//                   <ArrowUpRight size={18} />
//                 </a>

//                 {/* Bottom Accent */}
//                 <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#D4A017] transition-all duration-500 group-hover:w-full" />
//               </article>
//             );
//           })}
//         </div>

//         {/* Bottom CTA */}
//         <div className="mt-14 flex flex-col items-start justify-between gap-6 rounded-xl bg-[#111827] p-8 sm:flex-row sm:items-center lg:p-10">
//           <div>
//             <h3 className="text-xl font-bold text-white sm:text-2xl">
//               Planning Your Dream Project?
//             </h3>

//             <p className="mt-2 text-sm leading-7 text-slate-300">
//               Connect with our team to discuss your
//               architectural and engineering requirements.
//             </p>
//           </div>

//           <a
//             href="#contact"
//             className="inline-flex shrink-0 items-center gap-2 rounded-md bg-[#C8102E] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#A20D26]"
//           >
//             Get In Touch
//             <ArrowUpRight size={18} />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Services;
