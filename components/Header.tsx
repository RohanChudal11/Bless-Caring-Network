"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Why Choose Us", href: "#why" },
  { label: "Jobs", href: "#jobs" },
  { label: "Cultural Care", href: "#cultural-care" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  // Close menu on scroll or route change
  useEffect(() => {
    const closeMenu = () => setOpen(false);
    window.addEventListener("scroll", closeMenu);
    return () => window.removeEventListener("scroll", closeMenu);
  }, []);

  const handleNav = (e: any, href: string) => {
    setOpen(false);
    if (href.startsWith("#")) {
      e.preventDefault();
      const section = document.querySelector(href);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(href);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm transition-all duration-300">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-3">
        <a href="#hero" className="block py-1">
          <img
            src="/Bless-Caring-Network-logo.svg"
            alt="Bless Caring Network Logo"
            className="h-10 md:h-14 w-auto"
            style={{ maxWidth: 180 }}
          />
        </a>
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#33B6FF]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-7 h-7 text-[#273C92]"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={(e) => handleNav(e, item.href)}
                className="font-semibold text-[#273C92] hover:text-[#33B6FF] px-3 py-2 transition rounded"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute top-16 left-0 right-0 bg-white shadow-md transform transition-all duration-300 ${
          open ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
        } origin-top`}
      >
        <ul className="flex flex-col items-start p-4 gap-4">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={(e) => handleNav(e, item.href)}
                className="font-semibold text-[#273C92] hover:text-[#33B6FF] block px-2 py-2 transition"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
