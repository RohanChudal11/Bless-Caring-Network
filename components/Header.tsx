"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // For client-side routing

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" }, // Route link
  { label: "Why Choose Us", href: "#why" },
  { label: "Jobs", href: "#jobs" },
  { label: "Stats", href: "#stats" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleNav = (e: any, href: string) => {
    setOpen(false);

    if (href.startsWith("#")) {
      e.preventDefault();
      const section = document.querySelector(href);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    } else {
      // For full route navigation
      router.push(href);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-2">
        <a href="#hero" className="block py-1">
          <img
            src="/Bless-Caring-Network-logo.svg"
            alt="Bless Caring Network Logo"
            className="h-12 md:h-16 w-auto"
            style={{ maxWidth: 180 }}
          />
        </a>
        <button className="md:hidden p-2" onClick={() => setOpen(v => !v)} aria-label="Open menu">
          <svg className="w-7 h-7 text-[#273C92]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={e => handleNav(e, item.href)}
                className="font-semibold text-[#273C92] hover:text-[#33B6FF] px-2 py-1 transition"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <div className={`${open ? "block" : "hidden"} md:hidden absolute left-0 right-0 top-16 bg-white shadow-lg`}>
        <ul className="flex flex-col items-start p-4 gap-4">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={e => handleNav(e, item.href)}
                className="font-semibold text-[#273C92] hover:text-[#33B6FF] block px-2 py-1 transition"
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
