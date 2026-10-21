
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
// import logo from "../../assets/logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () =>
      window.removeEventListener("keydown", handleEscape);
  }, []);

  const linkClass = ({ isActive }) =>
    `relative text-sm font-semibold transition-colors duration-200 ${
      isActive
        ? "text-[#C8102E]"
        : "text-[#111827] hover:text-[#C8102E]"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 ${
        scrolled
          ? "shadow-md"
          : "border-b border-slate-100"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-5 px-5 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="flex min-w-0 items-center gap-3"
        >
          {/* <img
            src={logo}
            alt="Vastushilp Associates logo"
            className="h-12 w-auto max-w-[65px] object-contain"
          /> */}

          <div className="hidden min-w-0 sm:block">
            <p className="text-sm text-red-500 text-[22px] font-extrabold leading-tight text-[#111827]">
              VASTUSHILP
            </p>

            <p className="text-[10px] font-semibold tracking-wide text-slate-600">
              ASSOCIATES & CONSULTING ENGINEERS
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-7 lg:flex"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={linkClass}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="tel:+919766529458"
          className="hidden items-center gap-2 rounded-md bg-[#C8102E] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#a30d25] lg:inline-flex"
        >
          <Phone size={17} />
          Call Now
          <ArrowUpRight size={16} />
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((previous) => !previous)}
          className="flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 text-[#111827] lg:hidden"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-slate-100 bg-white px-5 pb-6 pt-3 shadow-lg lg:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `rounded-md px-4 py-3 text-sm font-semibold transition-colors ${
                    isActive
                      ? "bg-red-50 text-[#C8102E]"
                      : "text-[#111827] hover:bg-slate-50"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <a
              href="tel:+919766529458"
              className="mt-4 flex items-center justify-center gap-2 rounded-md bg-[#C8102E] px-5 py-3.5 text-sm font-semibold text-white"
            >
              <Phone size={18} />
              Call Now
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
