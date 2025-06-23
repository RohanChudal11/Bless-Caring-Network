import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-tr from-[#273C92] via-[#1e2d64] to-[#33B6FF] py-10 px-4 text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10 border-b border-white/10 pb-8">
        {/* Logo Left */}
        <div className="flex-shrink-0 flex items-center md:justify-start justify-center w-full md:w-auto mb-8 md:mb-0">
          <img
            src="/Bless-Caring-Network-logo.svg"
            alt="Bless Caring Logo"
            className="w-40 md:w-48 max-w-full"
            style={{ minWidth: 130 }}
          />
        </div>

        {/* Quick Links Center */}
        <div className="flex-1 flex flex-col items-center text-center md:text-left">
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

        {/* Contact Right */}
        <div className="flex flex-col items-center md:items-end mt-8 md:mt-0 text-center md:text-right">
          <h3 className="font-bold mb-3 text-[#FBC21C] tracking-wider uppercase text-sm">
            Contact
          </h3>
          <ul className="space-y-2">
            <li className="flex items-center justify-center md:justify-end gap-2">
              <FaPhoneAlt className="text-[#FBC21C]" />
              <span>0452 239 053</span>
            </li>
            <li className="flex items-center justify-center md:justify-end gap-2">
              <FaMapMarkerAlt className="text-[#FBC21C]" />
              <span>Fawkner, VIC, Australia</span>
            </li>
            <li className="flex items-center justify-center md:justify-end gap-2">
              <FaEnvelope className="text-[#FBC21C]" />
              <a
                href="mailto:info@blesscaring.com.au"
                className="hover:text-[#FBC21C] transition underline"
              >
                info@blesscaring.com.au
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-6 text-center text-white/70 text-xs">
        &copy; {new Date().getFullYear()} Bless Caring Network. All Rights Reserved.
      </div>
    </footer>
  );
}
