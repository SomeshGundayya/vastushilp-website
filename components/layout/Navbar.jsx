import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import logo from "../../assets/logo.png";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        {/* Company Logo */}
        <a href="#home" className="flex items-center">
          <img
            src={logo}
            alt="Vastushilp Associates & Consulting Engineers"
            className="h-14 w-auto max-w-[200px] object-contain"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-slate-700 transition-colors hover:text-[#C8102E]"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Contact Button */}
        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-md bg-[#C8102E] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#A20D26] lg:flex"
        >
          Contact Us
          <ArrowUpRight size={18} />
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="text-[#111827] lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-gray-100 bg-white px-5 py-4 lg:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-semibold text-slate-700 hover:text-[#C8102E]"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-md bg-[#C8102E] px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
