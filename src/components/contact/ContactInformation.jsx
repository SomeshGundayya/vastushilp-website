
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";

const contactDetails = [
  {
    id: 1,
    icon: Phone,
    title: "Call Us",
    description: "Speak with us about your project.",
    lines: [
      {
        text: "+91 9766529458",
        href: "tel:+919766529458",
      },
      {
        text: "+91 8149822296",
        href: "tel:+918149822296",
      },
    ],
  },
  {
    id: 2,
    icon: Mail,
    title: "Email Us",
    description: "Send us your project requirements.",
    lines: [
      {
        text: "vastushilpengg0902@gmail.com",
        href: "mailto:vastushilpengg0902@gmail.com",
      },
    ],
  },
  {
    id: 3,
    icon: MapPin,
    title: "Nanded Office",
    description: "Visit our office in Nanded.",
    lines: [
      {
        text: "Chaitanya Nagar, Nanded, Maharashtra",
        href: "https://www.google.com/maps/search/?api=1&query=Chaitanya+Nagar+Nanded+Maharashtra",
      },
    ],
  },
  {
    id: 4,
    icon: MapPin,
    title: "Purna Office",
    description: "Visit our office in Purna.",
    lines: [
      {
        text: "Anand Nagar, Purna, Maharashtra",
        href: "https://www.google.com/maps/search/?api=1&query=Anand+Nagar+Purna+Maharashtra",
      },
    ],
  },
];

function ContactInformation() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#C8102E]" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C8102E]">
              Get In Touch
            </span>

            <span className="h-[2px] w-8 bg-[#C8102E]" />
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl lg:text-[44px]">
            Let's Start a{" "}
            <span className="text-[#D4A017]">
              Conversation.
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
            Have questions about architectural planning,
            structural design, or engineering consultancy?
            Reach out to us through any of the following
            contact options.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactDetails.map((contact) => {
            const Icon = contact.icon;

            return (
              <div
                key={contact.id}
                className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4A017]/50 hover:shadow-lg"
              >
                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#F8FAFC] text-[#C8102E] transition-colors group-hover:bg-[#111827] group-hover:text-white">
                  <Icon size={25} strokeWidth={1.8} />
                </div>

                {/* Content */}
                <h3 className="mt-6 text-xl font-bold text-[#111827]">
                  {contact.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {contact.description}
                </p>

                <div className="mt-6 space-y-3">
                  {contact.lines.map((line) => (
                    <a
                      key={line.href}
                      href={line.href}
                      target={
                        line.href.startsWith("https://")
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        line.href.startsWith("https://")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="flex items-start gap-2 break-words text-sm font-medium leading-6 text-[#111827] transition-colors hover:text-[#C8102E]"
                    >
                      <span className="min-w-0 flex-1 break-all">
                        {line.text}
                      </span>

                      <ArrowUpRight
                        size={16}
                        className="mt-1 shrink-0 text-[#C8102E]"
                      />
                    </a>
                  ))}
                </div>

                {/* Bottom Accent */}
                <div className="mt-auto pt-7">
                  <div className="h-[2px] w-10 bg-[#D4A017] transition-all duration-300 group-hover:w-full" />
                </div>
              </div>
            );
          })}
        </div>

        {/* WhatsApp Contact Strip */}
        <div className="mt-10 flex flex-col items-start justify-between gap-6 rounded-2xl bg-[#111827] p-7 sm:flex-row sm:items-center sm:p-9">
          <div>
            <h3 className="text-xl font-bold text-white sm:text-2xl">
              Prefer to Chat on WhatsApp?
            </h3>

            <p className="mt-2 text-sm leading-7 text-slate-300">
              Share your project requirements directly
              with our team.
            </p>
          </div>

          <a
            href="https://wa.me/919766529458?text=Hello%20Vastushilp%20Associates%2C%20I%20would%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-3 rounded-md bg-[#C8102E] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#a30d25]"
          >
            <MessageCircle size={19} />
            Chat on WhatsApp
            <ArrowUpRight size={17} />
          </a>
        </div>

      </div>
    </section>
  );
}

export default ContactInformation;
