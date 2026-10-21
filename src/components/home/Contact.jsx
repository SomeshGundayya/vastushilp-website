
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ArrowUpRight,
  Send,
} from "lucide-react";

const projectTypes = [
  "Architectural Planning",
  "Structural Design",
  "2D & 3D Elevation",
  "Estimation & Costing",
  "Site Supervision",
  "Interior & Exterior Consultancy",
  "Other",
];

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const message = [
      "Hello Vastushilp Associates & Consulting Engineers,",
      "",
      "I would like to enquire about a project.",
      "",
      `Name: ${formData.name}`,
      `Phone: ${formData.phone}`,
      `Service: ${formData.projectType}`,
      `Project Details: ${formData.message || "Not provided"}`,
    ].join("\n");

    const whatsappUrl =
      `https://wa.me/919766529458?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        {/* Section Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#C8102E]" />
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#C8102E]">
              Contact Us
            </span>
            <span className="h-[2px] w-8 bg-[#C8102E]" />
          </div>

          <h2 className="text-3xl font-bold text-[#111827] sm:text-4xl lg:text-5xl">
            Let's Build Your{" "}
            <span className="text-[#D4A017]">Vision Together</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Planning a new project or looking for architectural
            and engineering consultancy? Get in touch with
            Vastushilp to discuss your requirements.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">

          {/* Left: Contact Information */}
          <div className="rounded-2xl bg-[#111827] p-7 text-white sm:p-10">
            <h3 className="text-2xl font-bold">Get In Touch</h3>

            <p className="mt-4 leading-7 text-slate-300">
              Reach out to our team for architectural planning,
              structural design, estimation, or other
              engineering consultancy requirements.
            </p>

            <div className="mt-10 space-y-8">

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#D4A017]">
                  <Phone size={23} />
                </div>

                <div>
                  <h4 className="font-semibold">Call Us</h4>

                  <a
                    href="tel:+919766529458"
                    className="mt-2 block text-slate-300 hover:text-[#D4A017]"
                  >
                    +91 9766529458
                  </a>

                  <a
                    href="tel:+918149822296"
                    className="mt-1 block text-slate-300 hover:text-[#D4A017]"
                  >
                    +91 8149822296
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#D4A017]">
                  <Mail size={23} />
                </div>

                <div className="min-w-0">
                  <h4 className="font-semibold">Email Us</h4>

                  <a
                    href="mailto:vastushilpengg0902@gmail.com"
                    className="mt-2 block break-all text-slate-300 hover:text-[#D4A017]"
                  >
                    vastushilpengg0902@gmail.com
                  </a>
                </div>
              </div>

              {/* Office Locations */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#D4A017]">
                  <MapPin size={23} />
                </div>

                <div>
                  <h4 className="font-semibold">Our Offices</h4>

                  <p className="mt-2 text-slate-300">
                    Chaitanya Nagar, Nanded, Maharashtra
                  </p>

                  <p className="mt-2 text-slate-300">
                    Anand Nagar, Purna, Maharashtra
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919766529458"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-3 rounded-lg bg-[#25D366] px-6 py-4 font-semibold text-white transition-colors hover:bg-[#1DA851]"
            >
              <MessageCircle size={21} />
              Chat on WhatsApp
              <ArrowUpRight size={18} />
            </a>

            <div className="mt-12 border-t border-white/15 pt-7">
              <p className="text-xl font-bold text-white">
                You Dream It,
                <span className="block text-[#D4A017]">
                  We Build It...!
                </span>
              </p>
            </div>
          </div>

          {/* Right: Enquiry Form */}
          <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-7 sm:p-10">
            <h3 className="text-2xl font-bold text-[#111827]">
              Start Your Project
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Fill in your project details and send your
              enquiry directly to our WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">

              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-semibold text-[#111827]"
                >
                  Full Name *
                </label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3.5 outline-none transition-colors focus:border-[#C8102E]"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-phone"
                  className="mb-2 block text-sm font-semibold text-[#111827]"
                >
                  Phone Number *
                </label>

                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  inputMode="numeric"
                  required
                  pattern="[0-9]{10}"
                  title="Enter a 10-digit mobile number"
                  maxLength={10}
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your 10-digit mobile number"
                  className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3.5 outline-none transition-colors focus:border-[#C8102E]"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-project"
                  className="mb-2 block text-sm font-semibold text-[#111827]"
                >
                  Service Required *
                </label>

                <select
                  id="contact-project"
                  name="projectType"
                  required
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3.5 outline-none transition-colors focus:border-[#C8102E]"
                >
                  <option value="">Select a service</option>

                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-semibold text-[#111827]"
                >
                  Project Details
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project, location, requirements..."
                  className="w-full resize-y rounded-lg border border-slate-200 bg-white px-4 py-3.5 outline-none transition-colors focus:border-[#C8102E]"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-lg bg-[#C8102E] px-6 py-4 font-semibold text-white transition-colors hover:bg-[#A20D26]"
              >
                Send Enquiry via WhatsApp
                <Send size={19} />
              </button>

              <p className="text-center text-xs leading-5 text-slate-500">
                This opens WhatsApp with your enquiry.
                Review and send the message to complete your request.
              </p>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
