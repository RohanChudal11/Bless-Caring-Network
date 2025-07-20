'use client';

import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-tr from-[#273C92] via-[#1e2d64] to-[#33B6FF] text-white px-4 sm:px-6 lg:px-8 py-10">
      <div className="max-w-7xl mx-auto flex flex-wrap gap-10 justify-between border-b border-white/10 pb-8">

        {/* Logo */}
        <div className="w-full sm:w-auto flex justify-center sm:justify-start">
          <img
            src="/Bless-Caring-Network-logo.svg"
            alt="Bless Caring Logo"
            className="w-36 sm:w-44 max-w-full"
            style={{ minWidth: 130 }}
          />
        </div>

        {/* Quick Links */}
        <div className="flex-1 min-w-[180px] text-center sm:text-left">
          <h3 className="font-bold mb-3 text-[#FBC21C] tracking-wider uppercase text-sm">
            Quick Links
          </h3>
          <ul className="space-y-2 text-white/90 font-medium">
            <li><a href="#hero" className="hover:text-[#FBC21C] transition">Home</a></li>
            <li><a href="#services" className="hover:text-[#FBC21C] transition">Services</a></li>
            <li><a href="#why" className="hover:text-[#FBC21C] transition">Why Choose Us</a></li>
            <li><a href="#jobs" className="hover:text-[#FBC21C] transition">Jobs</a></li>
            <li><a href="#contact" className="hover:text-[#FBC21C] transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="min-w-[200px] text-center sm:text-left">
          <h3 className="font-bold mb-3 text-[#FBC21C] tracking-wider uppercase text-sm">
            Contact
          </h3>
          <ul className="space-y-2 text-white/90 text-sm">
            <li className="flex items-center justify-center sm:justify-start gap-2">
              <FaPhoneAlt className="text-[#FBC21C]" />
              <span>03 8577 5616</span>
            </li>
            <li className="flex items-start justify-center sm:justify-start gap-2">
              <FaMapMarkerAlt className="text-[#FBC21C]" />
              <span className="leading-snug max-w-[220px]">80 Mackie Road, Mulgrave 3170</span>
            </li>
            <li className="flex items-center justify-center sm:justify-start gap-2">
              <FaEnvelope className="text-[#FBC21C]" />
              <a
                href="mailto:info@blesscaring.com.au"
                className="hover:text-[#FBC21C] transition underline break-words"
              >
                info@blesscaring.com.au
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto pt-6 text-center text-white/70 text-xs">
        &copy; {new Date().getFullYear()} Bless Caring Network. All Rights Reserved.
      </div>
    </footer>
  );
}
