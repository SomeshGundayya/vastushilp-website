
import { ArrowUpRight, MapPin } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Modern Luxury Residence",
    category: "Residential Architecture",
    location: "Pune, Maharashtra",
    status: "Completed",
    image: "/images/project-1.jpg",
  },
  {
    id: 2,
    title: "Contemporary Villa Design",
    category: "3D Elevation & Planning",
    location: "Baramati, Maharashtra",
    status: "Design Concept",
    image: "/images/project-2.jpg",
  },
  {
    id: 3,
    title: "Commercial Complex",
    category: "Commercial Architecture",
    location: "Pune, Maharashtra",
    status: "Ongoing",
    image: "/images/project-3.jpg",
  },
];

function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="bg-white py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        {/* Section Header */}
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">

            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#C8102E]" />

              <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#C8102E]">
                Our Portfolio
              </span>
            </div>

            <h2 className="text-3xl font-bold leading-tight text-[#111827] sm:text-4xl lg:text-5xl">
              Featured{" "}
              <span className="text-[#D4A017]">
                Projects
              </span>
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Explore architectural concepts and design
              possibilities that reflect our approach
              to thoughtful planning and engineering.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex w-fit items-center gap-2 border-b-2 border-[#C8102E] pb-2 font-semibold text-[#111827] transition-colors hover:text-[#C8102E]"
          >
            Discuss Your Project
            <ArrowUpRight size={19} />
          </a>
        </div>

        {/* Demo Projects Notice */}
        <p className="mb-6 text-xs font-medium text-slate-500">
          Sample portfolio projects for website demonstration.
        </p>

        {/* Project Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              {/* Project Image */}
              <div className="relative h-72 overflow-hidden bg-slate-100">

                <img
                  src={project.image}
                  alt={`${project.title} demo visualization`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/50 via-transparent to-transparent" />

                {/* Status Badge */}
                <span className="absolute left-5 top-5 rounded-md bg-white px-3 py-2 text-xs font-bold text-[#111827] shadow-sm">
                  {project.status}
                </span>

                {/* Arrow Decoration */}
                <div className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#C8102E] text-white transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={22} />
                </div>
              </div>

              {/* Project Details */}
              <div className="p-7">

                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#C8102E]">
                  {project.category}
                </p>

                <h3 className="mt-3 text-xl font-bold text-[#111827] transition-colors group-hover:text-[#C8102E]">
                  {project.title}
                </h3>

                <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
                  <MapPin size={16} />
                  <span>{project.location}</span>
                </div>

              </div>

              {/* Gold Accent */}
              <div className="h-1 w-0 bg-[#D4A017] transition-all duration-500 group-hover:w-full" />
            </article>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md bg-[#111827] px-8 py-4 font-semibold text-white transition-colors hover:bg-[#C8102E]"
          >
            Start Your Project
            <ArrowUpRight size={19} />
          </a>
        </div>

      </div>
    </section>
  );
}

export default FeaturedProjects;
