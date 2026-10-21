
import {
  ArrowUpRight,
  Phone,
  ArrowRight,
} from "lucide-react";

function ProjectConsultationCTA() {
  return (
    <section className="bg-white px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl bg-[#111827] px-6 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20">

        {/* Decorative background */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -right-10 -top-10 h-60 w-60 rounded-full border border-white/10" />

        <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

          {/* Left Content */}
          <div className="max-w-2xl">

            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#D4A017]" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4A017]">
                Let's Work Together
              </span>
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[46px]">
              Have a Project
              <span className="block text-[#D4A017]">
                in Mind?
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
              Planning a new building or looking for
              architectural and engineering consultancy?
              Connect with Vastushilp to discuss your
              ideas and project requirements.
            </p>

          </div>

          {/* Right Actions */}
          <div className="flex shrink-0 flex-col gap-4 sm:flex-row lg:flex-col">

            <a
              href="/#contact"
              className="inline-flex items-center justify-center gap-3 rounded-md bg-[#C8102E] px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#A20D26]"
            >
              Start Your Project
              <ArrowUpRight size={19} />
            </a>

            <a
              href="tel:+919766529458"
              className="inline-flex items-center justify-center gap-3 rounded-md border border-white/30 px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <Phone size={18} />
              Call Us
              <ArrowRight size={18} />
            </a>

          </div>
        </div>

        {/* Bottom Accent */}
        <div className="relative z-10 mt-12 flex items-center gap-4 border-t border-white/15 pt-6">
          <span className="h-2 w-2 rounded-full bg-[#D4A017]" />

          <p className="text-xs font-medium uppercase tracking-[0.14em] text-slate-400">
            You Dream It, We Build It...!
          </p>
        </div>

      </div>
    </section>
  );
}

export default ProjectConsultationCTA;
