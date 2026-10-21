
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

function PageBanner({
  title,
  subtitle,
  backgroundImage = "/images/about-building.jpg",
}) {
  return (
    <section className="relative flex min-h-[300px] items-center overflow-hidden bg-[#111827] py-20 sm:min-h-[350px] lg:min-h-[400px]">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#111827]/95 via-[#111827]/80 to-[#111827]/50" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="mb-6 flex items-center gap-2 text-sm"
        >
          <Link
            to="/"
            className="text-slate-300 transition-colors hover:text-white"
          >
            Home
          </Link>

          <ChevronRight size={16} className="text-slate-400" />

          <span className="font-medium text-[#D4A017]">
            {title}
          </span>
        </nav>

        {/* Heading */}
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>

        {/* Description */}
        {subtitle && (
          <p className="mt-5 max-w-xl text-base leading-8 text-slate-200 sm:text-lg">
            {subtitle}
          </p>
        )}

        {/* Accent */}
        <div className="mt-7 h-1 w-16 rounded-full bg-[#D4A017]" />
      </div>
    </section>
  );
}

export default PageBanner;
