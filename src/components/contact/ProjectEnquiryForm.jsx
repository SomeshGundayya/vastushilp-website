
import { useState } from "react";
import {
  ArrowUpRight,
  MessageCircle,
  ClipboardList,
  CheckCircle2,
} from "lucide-react";

const services = [
  "Architectural Planning",
  "Structural Design",
  "2D & 3D Elevation",
  "Estimation & Costing",
  "Site Supervision",
  "Interior & Exterior Consultancy",
  "Other",
];

const initialForm = {
  name: "",
  phone: "",
  email: "",
  service: "",
  location: "",
  message: "",
};

function ProjectEnquiryForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!/^[6-9]\d{9}$/.test(form.phone.trim())) {
      newErrors.phone =
        "Enter a valid 10-digit Indian mobile number.";
    }

    if (
      form.email.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())
    ) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!form.service) {
      newErrors.service = "Please select a service.";
    }

    if (!form.location.trim()) {
      newErrors.location =
        "Please enter your project location.";
    }

    if (!form.message.trim()) {
      newErrors.message =
        "Please describe your project.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) return;

    const enquiry = [
      "*New Project Enquiry*",
      "",
      "*Name:* " + form.name.trim(),
      "*Mobile:* " + form.phone.trim(),
      "*Email:* " + (form.email.trim() || "Not provided"),
      "*Service:* " + form.service,
      "*Project Location:* " + form.location.trim(),
      "",
      "*Project Details:*",
      form.message.trim(),
      "",
      "Sent from Vastushilp Website",
    ].join("\n");

    const whatsappUrl =
      "https://wa.me/919766529458?text=" +
      encodeURIComponent(enquiry);

    window.location.href = whatsappUrl;
  };

  const inputClass = (field) =>
    `w-full rounded-lg border bg-white px-4 py-3.5 text-sm text-[#111827] outline-none transition-colors placeholder:text-slate-400 focus:ring-2 focus:ring-[#D4A017]/20 ${
      errors[field]
        ? "border-red-500 focus:border-red-500"
        : "border-slate-200 focus:border-[#D4A017]"
    }`;

  return (
    <section
      id="project-enquiry"
      className="bg-[#F8FAFC] py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">

          {/* Left Information */}
          <div className="lg:pt-8">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#C8102E]" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C8102E]">
                Project Enquiry
              </span>
            </div>

            <h2 className="text-3xl font-bold leading-tight text-[#111827] sm:text-4xl lg:text-[44px]">
              Tell Us About
              <span className="mt-2 block text-[#D4A017]">
                Your Project.
              </span>
            </h2>

            <p className="mt-6 text-sm leading-8 text-slate-600 sm:text-base">
              Whether you're planning a new building,
              exploring architectural design options,
              or looking for engineering consultancy,
              we'd be happy to hear about your requirements.
            </p>

            <div className="mt-9 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white text-[#C8102E]">
                  <ClipboardList size={22} />
                </div>

                <div>
                  <h3 className="font-bold text-[#111827]">
                    Share Your Requirements
                  </h3>

                  <p className="mt-1 text-sm leading-7 text-slate-600">
                    Provide a few details about your
                    proposed project and required services.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white text-[#C8102E]">
                  <MessageCircle size={22} />
                </div>

                <div>
                  <h3 className="font-bold text-[#111827]">
                    Connect on WhatsApp
                  </h3>

                  <p className="mt-1 text-sm leading-7 text-slate-600">
                    Review your prepared enquiry in
                    WhatsApp and send it to our team.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white text-[#C8102E]">
                  <CheckCircle2 size={22} />
                </div>

                <div>
                  <h3 className="font-bold text-[#111827]">
                    Discuss the Next Steps
                  </h3>

                  <p className="mt-1 text-sm leading-7 text-slate-600">
                    Our team can discuss suitable
                    consultancy options based on
                    your requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-9 lg:p-10">
            <h3 className="text-2xl font-bold text-[#111827]">
              Project Enquiry Form
            </h3>

            <p className="mt-2 text-sm leading-7 text-slate-500">
              Fields marked * are required.
            </p>

            <form
              onSubmit={handleSubmit}
              noValidate
              className="mt-8 space-y-6"
            >
              <div className="grid gap-6 sm:grid-cols-2">

                {/* Name */}
                <div>
                  <label
                    htmlFor="enquiry-name"
                    className="mb-2 block text-sm font-semibold text-[#111827]"
                  >
                    Full Name *
                  </label>

                  <input
                    id="enquiry-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className={inputClass("name")}
                    aria-invalid={Boolean(errors.name)}
                  />

                  {errors.name && (
                    <p className="mt-2 text-xs text-red-600">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="enquiry-phone"
                    className="mb-2 block text-sm font-semibold text-[#111827]"
                  >
                    Mobile Number *
                  </label>

                  <input
                    id="enquiry-phone"
                    name="phone"
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel-national"
                    maxLength={10}
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="10-digit mobile number"
                    className={inputClass("phone")}
                    aria-invalid={Boolean(errors.phone)}
                  />

                  {errors.phone && (
                    <p className="mt-2 text-xs text-red-600">
                      {errors.phone}
                    </p>
                  )}
                </div>

              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="enquiry-email"
                  className="mb-2 block text-sm font-semibold text-[#111827]"
                >
                  Email Address (Optional)
                </label>

                <input
                  id="enquiry-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className={inputClass("email")}
                  aria-invalid={Boolean(errors.email)}
                />

                {errors.email && (
                  <p className="mt-2 text-xs text-red-600">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="grid gap-6 sm:grid-cols-2">

                {/* Service */}
                <div>
                  <label
                    htmlFor="enquiry-service"
                    className="mb-2 block text-sm font-semibold text-[#111827]"
                  >
                    Service Required *
                  </label>

                  <select
                    id="enquiry-service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className={inputClass("service")}
                    aria-invalid={Boolean(errors.service)}
                  >
                    <option value="">
                      Select a service
                    </option>

                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>

                  {errors.service && (
                    <p className="mt-2 text-xs text-red-600">
                      {errors.service}
                    </p>
                  )}
                </div>

                {/* Location */}
                <div>
                  <label
                    htmlFor="enquiry-location"
                    className="mb-2 block text-sm font-semibold text-[#111827]"
                  >
                    Project Location *
                  </label>

                  <input
                    id="enquiry-location"
                    name="location"
                    type="text"
                    value={form.location}
                    onChange={handleChange}
                    placeholder="City / Area"
                    className={inputClass("location")}
                    aria-invalid={Boolean(errors.location)}
                  />

                  {errors.location && (
                    <p className="mt-2 text-xs text-red-600">
                      {errors.location}
                    </p>
                  )}
                </div>

              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="enquiry-message"
                  className="mb-2 block text-sm font-semibold text-[#111827]"
                >
                  Project Details *
                </label>

                <textarea
                  id="enquiry-message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project requirements..."
                  className={`${inputClass("message")} resize-y`}
                  aria-invalid={Boolean(errors.message)}
                />

                {errors.message && (
                  <p className="mt-2 text-xs text-red-600">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-lg bg-[#111827] px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#C8102E]"
              >
                <MessageCircle size={19} />
                Continue to WhatsApp
                <ArrowUpRight size={18} />
              </button>

              <p className="text-center text-xs leading-6 text-slate-500">
                Your enquiry will open in WhatsApp for
                your review. You must press Send there
                to deliver it.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ProjectEnquiryForm;
