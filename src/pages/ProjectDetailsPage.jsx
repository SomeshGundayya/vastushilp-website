
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { projects } from "../data/projects";
import SEO from "../components/common/SEO";

function ProjectDetailsPage() {
  const { slug } = useParams();

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return (
      <>
        <Navbar />

        <main className="mx-auto flex min-h-[65vh] max-w-7xl flex-col items-center justify-center px-5 py-24 text-center">
          <h1 className="text-3xl font-bold text-[#111827]">
            Project Not Found
          </h1>

          <p className="mt-4 text-slate-600">
            The requested project could not be found.
          </p>

          <Link
            to="/projects"
            className="mt-8 rounded-md bg-[#111827] px-6 py-3 text-sm font-semibold text-white hover:bg-[#C8102E]"
          >
            Back to Projects
          </Link>
        </main>

        <Footer />
      </>
    );
  }

  const relatedProjects = projects
    .filter((item) => item.id !== project.id)
    .slice(0, 3);

  return (
    <>
      <SEO
  title={project.title}
  description={project.description}
/>
      <Navbar />

      <main className="bg-white">

        {/* Project Heading */}
        <section className="bg-[#F8FAFC] pb-12 pt-32 sm:pb-16">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition-colors hover:text-[#C8102E]"
            >
              <ArrowLeft size={17} />
              Back to Projects
            </Link>

            <div className="mt-10 max-w-4xl">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C8102E]">
                {project.category} / {project.type}
              </span>

              <h1 className="mt-5 text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl lg:text-5xl">
                {project.title}
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-8 text-slate-600 sm:text-base">
                {project.description}
              </p>
            </div>
          </div>
        </section>

        {/* Main Project Image */}
        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-2xl bg-slate-100">
              <img
                src={project.image}
                alt={`${project.title} illustrative image`}
                className="max-h-[650px] w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Project Overview */}
        <section className="pb-16 sm:pb-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[1.3fr_1fr] lg:gap-20 lg:px-8">

            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C8102E]">
                Project Overview
              </span>

              <h2 className="mt-4 text-2xl font-bold text-[#111827] sm:text-3xl">
                About This Concept
              </h2>

              <p className="mt-6 text-sm leading-8 text-slate-600 sm:text-base">
                {project.description}
              </p>

              <p className="mt-5 text-sm leading-8 text-slate-600 sm:text-base">
                This demonstration entry illustrates
                the type of project information that can
                be presented in the Vastushilp portfolio.
                Actual project specifications and
                photographs can be added once verified.
              </p>
            </div>

            {/* Project Information */}
            <div className="rounded-xl border border-slate-200 bg-[#F8FAFC] p-7 sm:p-9">
              <h3 className="text-xl font-bold text-[#111827]">
                Project Information
              </h3>

              <div className="mt-6 space-y-5 border-b border-slate-200 pb-7">
                <div className="flex justify-between gap-4">
                  <span className="text-sm text-slate-500">
                    Category
                  </span>
                  <span className="text-right text-sm font-semibold text-[#111827]">
                    {project.category}
                  </span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-sm text-slate-500">
                    Project Type
                  </span>
                  <span className="text-right text-sm font-semibold text-[#111827]">
                    {project.type}
                  </span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-sm text-slate-500">
                    Portfolio Status
                  </span>
                  <span className="text-right text-sm font-semibold text-[#111827]">
                    Illustrative Example
                  </span>
                </div>
              </div>

              <h4 className="mt-7 text-sm font-bold text-[#111827]">
                Design Highlights
              </h4>

              <div className="mt-5 space-y-4">
                {project.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      size={19}
                      className="mt-0.5 shrink-0 text-[#C8102E]"
                    />

                    <span className="text-sm leading-6 text-slate-600">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Additional Images */}
        {project.gallery.length > 1 && (
          <section className="bg-[#F8FAFC] py-16">
            <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
              <h2 className="mb-8 text-2xl font-bold text-[#111827]">
                Project Gallery
              </h2>

              <div className="grid gap-6 sm:grid-cols-2">
                {project.gallery.slice(1).map((image, index) => (
                  <img
                    key={`${image}-${index}`}
                    src={image}
                    alt={`${project.title} additional view ${index + 1}`}
                    loading="lazy"
                    className="h-72 w-full rounded-xl object-cover"
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related Projects */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="mb-9 flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C8102E]">
                  Explore More
                </span>

                <h2 className="mt-3 text-2xl font-bold text-[#111827] sm:text-3xl">
                  Related Projects
                </h2>
              </div>

              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#C8102E]"
              >
                View All Projects
                <ArrowUpRight size={17} />
              </Link>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProjects.map((item) => (
                <Link
                  key={item.id}
                  to={`/projects/${item.slug}`}
                  className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition-shadow hover:shadow-lg"
                >
                  <div className="overflow-hidden">
                    <img
                      src={item.image}
                      alt={`${item.title} illustrative image`}
                      loading="lazy"
                      className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-5">
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#C8102E]">
                      {item.category}
                    </p>

                    <h3 className="mt-2 text-lg font-bold text-[#111827]">
                      {item.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Consultation CTA */}
        <section className="bg-[#111827] py-16 text-center sm:py-20">
          <div className="mx-auto max-w-3xl px-5">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Have a Project in Mind?
            </h2>

            <p className="mt-5 text-sm leading-8 text-slate-300 sm:text-base">
              Connect with Vastushilp Associates &
              Consulting Engineers to discuss your
              architectural and engineering requirements.
            </p>

            <a
              href="https://wa.me/919766529458"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#C8102E] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#a30d25]"
            >
              Enquire About Your Project
              <ArrowUpRight size={18} />
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

export default ProjectDetailsPage;
