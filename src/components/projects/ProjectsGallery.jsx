
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../../data/projects";

const categories = [
  "All Projects",
  "Residential",
  "Commercial",
  "Elevation Design",
  "Interior Design",
];



function ProjectsGallery() {
  const [activeCategory, setActiveCategory] =
    useState("All Projects");

  const filteredProjects =
    activeCategory === "All Projects"
      ? projects
      : projects.filter(
          (project) =>
            project.category === activeCategory
        );

  return (
    <section
      id="projects-gallery"
      className="bg-[#F8FAFC] py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mb-12 text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#C8102E]" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C8102E]">
              Design Portfolio
            </span>

            <span className="h-[2px] w-8 bg-[#C8102E]" />
          </div>

          <h2 className="text-3xl font-bold text-[#111827] sm:text-4xl lg:text-[44px]">
            Explore Our{" "}
            <span className="text-[#D4A017]">
              Work
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Browse architectural and design concepts
            across different project categories.
          </p>

          <p className="mt-3 text-xs text-slate-500">
            Demonstration portfolio — images shown
            are illustrative examples.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              className={`rounded-md border px-5 py-2.5 text-sm font-medium transition-all ${
                activeCategory === category
                  ? "border-[#111827] bg-[#111827] text-white"
                  : "border-slate-200 bg-white text-slate-600 hover:border-[#C8102E] hover:text-[#C8102E]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
           <Link
  key={project.id}
  to={`/projects/${project.slug}`}
  className="group block overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
>
              {/* Project Image */}
              <div className="relative overflow-hidden bg-slate-200">
                <img
                  src={project.image}
                  alt={`${project.title} illustrative design`}
                  loading="lazy"
                  className="h-[260px] w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-[280px]"
                />

                <span className="absolute left-4 top-4 rounded-md bg-white/95 px-3 py-1.5 text-xs font-semibold text-[#111827] shadow-sm">
                  {project.category}
                </span>
              </div>

              {/* Project Content */}
              <div className="flex items-center justify-between gap-4 p-6">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#C8102E]">
                    Design Concept
                  </p>

                  <h3 className="text-lg font-bold leading-7 text-[#111827]">
                    {project.title}
                  </h3>
                </div>

                <div
                  aria-hidden="true"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F8FAFC] text-[#111827] transition-colors group-hover:bg-[#C8102E] group-hover:text-white"
                >
                  <ArrowUpRight size={19} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Note */}
        <p className="mt-12 text-center text-sm leading-7 text-slate-500">
          Actual project details and completed-work
          photographs will be added as they become
          available.
        </p>
      </div>
    </section>
  );
}

export default ProjectsGallery;
