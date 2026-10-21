
import { ArrowUpRight, ChevronDown } from "lucide-react";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[85vh] items-center overflow-hidden bg-[#111827]"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/hero-building.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#111827]/95 via-[#111827]/75 to-[#111827]/30" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-24 lg:px-8">
        <div className="max-w-3xl">

          <div className="mb-6 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-[#D4A017]" />
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4A017]">
              Welcome to Vastushilp Associates
            </span>
          </div>

          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl">
            You Dream It,
            <br />
            <span className="text-[#D4A017]">
              We Build It.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-gray-200 sm:text-lg">
            Vastushilp Associates & Consulting Engineers
            provides professional civil engineering,
            planning, and construction solutions to help
            bring your vision to life.
          </p>

          {/* CTA Buttons */}
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-[#C8102E] px-7 py-4 font-semibold text-white transition-colors hover:bg-[#A20D26]"
            >
              Explore Our Projects
              <ArrowUpRight size={19} />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-white/60 px-7 py-4 font-semibold text-white transition-colors hover:bg-white hover:text-[#111827]"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-white"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}

export default Hero;


