
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

import logo from "../../assets/logo.png";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Our Services", path: "/services" },
  { name: "Our Projects", path: "/projects" },
  { name: "Contact Us", path: "/contact" },
];

const services = [
  "Architectural Planning",
  "Structural Design",
  "2D & 3D Elevation",
  "Estimation & Costing",
  "Site Supervision",
  "Interior & Exterior Consultancy",
];

function Footer() {
  return (
    <footer className="bg-[#111827] text-white">

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-5 pb-14 pt-16 sm:px-6 lg:px-8 lg:pb-20 lg:pt-20">

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">

          {/* Company Information */}
          <div>
            <Link to="/" className="inline-flex items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-white p-2">
                <img
                  src={logo}
                  alt="Vastushilp Associates logo"
                  className="h-full w-full object-contain"
                />
              </div>
            </Link>

            <h3 className="mt-5 text-lg font-bold leading-7">
              Vastushilp Associates
              <span className="block text-sm font-medium text-slate-300">
                & Consulting Engineers
              </span>
            </h3>

            <p className="mt-5 text-sm leading-7 text-slate-400">
              Architectural planning, structural design,
              and engineering consultancy services
              tailored to your project requirements.
            </p>

            <p className="mt-5 text-sm font-semibold italic text-[#D4A017]">
              You Dream It, We Build It...!
            </p>

            <a
              href="https://wa.me/919766529458"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-md border border-white/20 px-4 py-2.5 text-sm font-semibold transition-colors hover:border-[#D4A017] hover:text-[#D4A017]"
            >
              <MessageCircle size={17} />
              WhatsApp Us
              <ArrowUpRight size={15} />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold">
              Quick Links
            </h3>

            <div className="mt-4 h-[2px] w-10 bg-[#C8102E]" />

            <nav
              aria-label="Footer navigation"
              className="mt-7 flex flex-col gap-4"
            >
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="w-fit text-sm text-slate-400 transition-colors hover:text-[#D4A017]"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-bold">
              Our Services
            </h3>

            <div className="mt-4 h-[2px] w-10 bg-[#C8102E]" />

            <div className="mt-7 flex flex-col gap-4">
              {services.map((service) => (
                <Link
                  key={service}
                  to="/services#detailed-services"
                  className="w-fit text-sm leading-6 text-slate-400 transition-colors hover:text-[#D4A017]"
                >
                  {service}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-base font-bold">
              Contact Information
            </h3>

            <div className="mt-4 h-[2px] w-10 bg-[#C8102E]" />

            <div className="mt-7 space-y-6">

              {/* Phone */}
              <div className="flex items-start gap-3">
                <Phone
                  size={19}
                  className="mt-1 shrink-0 text-[#D4A017]"
                />

                <div className="space-y-2">
                  <a
                    href="tel:+919766529458"
                    className="block text-sm text-slate-400 hover:text-white"
                  >
                    +91 9766529458
                  </a>

                  <a
                    href="tel:+918149822296"
                    className="block text-sm text-slate-400 hover:text-white"
                  >
                    +91 8149822296
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <Mail
                  size={19}
                  className="mt-1 shrink-0 text-[#D4A017]"
                />

                <a
                  href="mailto:vastushilpengg0902@gmail.com"
                  className="min-w-0 break-all text-sm leading-6 text-slate-400 hover:text-white"
                >
                  vastushilpengg0902@gmail.com
                </a>
              </div>

              {/* Nanded Office */}
              <div className="flex items-start gap-3">
                <MapPin
                  size={19}
                  className="mt-1 shrink-0 text-[#D4A017]"
                />

                <div>
                  <p className="text-sm font-semibold text-white">
                    Nanded Office
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    Chaitanya Nagar, Nanded,
                    Maharashtra
                  </p>
                </div>
              </div>

              {/* Purna Office */}
              <div className="flex items-start gap-3">
                <MapPin
                  size={19}
                  className="mt-1 shrink-0 text-[#D4A017]"
                />

                <div>
                  <p className="text-sm font-semibold text-white">
                    Purna Office
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    Anand Nagar, Purna,
                    Maharashtra
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-6 text-center sm:px-6 md:flex-row md:text-left lg:px-8">

          <p className="text-xs leading-6 text-slate-400">
            © {new Date().getFullYear()} Vastushilp Associates
            & Consulting Engineers. All Rights Reserved.
          </p>

          <p className="text-xs text-slate-400">
            Designed with Purpose. Built on Trust.
          </p>

        </div>
      </div>

    </footer>
  );
}

export default Footer;
