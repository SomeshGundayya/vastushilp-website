
import {
  Phone,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

function ContactCTA() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        <div className="relative overflow-hidden rounded-2xl bg-[#111827] px-6 py-14 text-center sm:px-12 sm:py-16 lg:py-20">

          {/* Decorative Background */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full border border-white/10"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full border border-white/10"
          />

          {/* Content */}
          <div className="relative z-10 mx-auto max-w-3xl">

            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-[2px] w-8 bg-[#D4A017]" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4A017]">
                Let's Connect
              </span>

              <span className="h-[2px] w-8 bg-[#D4A017]" />
            </div>

            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Ready to Bring Your
              <span className="mt-2 block text-[#D4A017]">
                Vision to Life?
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-slate-300 sm:text-base">
              Every great project begins with a conversation.
              Connect with Vastushilp Associates &
              Consulting Engineers to discuss your
              architectural and engineering requirements.
            </p>

            {/* Action Buttons */}
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">

              <a
                href="tel:+919766529458"
                className="inline-flex w-full items-center justify-center gap-3 rounded-md bg-[#C8102E] px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#a30d25] sm:w-auto"
              >
                <Phone size={19} />
                Call Now
                <ArrowUpRight size={18} />
              </a>

              <a
                href="https://wa.me/919766529458?text=Hello%20Vastushilp%20Associates%2C%20I%20would%20like%20to%20discuss%20my%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-3 rounded-md border border-white/30 bg-white/10 px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#111827] sm:w-auto"
              >
                <MessageCircle size={19} />
                WhatsApp Us
                <ArrowUpRight size={18} />
              </a>

            </div>

            {/* Brand Tagline */}
            <p className="mt-10 text-sm font-medium italic tracking-wide text-[#D4A017]">
              You Dream It, We Build It...!
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}

export default ContactCTA;
