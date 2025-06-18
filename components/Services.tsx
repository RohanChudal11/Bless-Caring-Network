'use client';

import React from "react";

const services = [
  {
    title: "Daily Living Support",
    icon: "🧍",
    description:
      "Empowering independence while preserving dignity. Assistance with showering, dressing, grooming, toileting, meal preparation, and mobility support.",
    features: [
      "Personal Care",
      "Meal Preparation",
      "Mobility Assistance",
      "Medication Reminders",
    ],
  },
  {
    title: "Complex Clinical Care",
    icon: "🩺",
    description:
      "Specialist nursing support delivered at home. Medication administration, wound care, diabetes management, catheter care, and post-hospital recovery.",
    features: [
      "Wound Care",
      "Medication Management",
      "Post-Surgery Care",
      "Chronic Disease Support",
    ],
  },
  {
    title: "Home & Community Support",
    icon: "🏠",
    description:
      "Comprehensive household assistance and community access including cleaning, shopping, appointments, and social engagement.",
    features: [
      "Household Tasks",
      "Shopping Assistance",
      "Transport Services",
      "Social Activities",
    ],
  },
  {
    title: "NDIS & Self-Funded Care",
    icon: "📑",
    description:
      "Flexible services for NDIS participants and private clients with transparent pricing and no hidden fees. Your plan, your way, our care.",
    features: [
      "NDIS Plan Management",
      "Self-Funded Options",
      "Transparent Pricing",
      "Flexible Scheduling",
    ],
  },
  {
    title: "Healthcare Staffing",
    icon: "🧑‍⚕️",
    description:
      "Premium healthcare professionals for facilities. RN, EN, PCA, and allied health positions with same-day pay and 24/7 support.",
    features: [
      "Registered Nurses",
      "Enrolled Nurses",
      "Care Workers",
      "Allied Health",
    ],
  },
  {
    title: "Emergency & Respite Care",
    icon: "🛟",
    description:
      "24/7 emergency response and planned respite care services. Always available when you need us most.",
    features: [
      "24/7 Emergency Response",
      "Planned Respite",
      "Crisis Support",
      "Family Relief",
    ],
  },
];

const staffingHighlights = [
  {
    title: "Healthcare Facilities",
    description: "Premium staffing for hospitals, aged care, and healthcare facilities",
    tag: "150+ Facilities",
  },
  {
    title: "Professional Development",
    description: "Ongoing training and career advancement opportunities",
    tag: "CPD Programs",
  },
  {
    title: "Flexible Scheduling",
    description: "Work that fits your life with same-day pay options",
    tag: "Same-Day Pay",
  },
  {
    title: "Quality Assurance",
    description: "Rigorous screening and ongoing quality monitoring",
    tag: "99.2% Satisfaction",
  },
];

const states = [
  "Victoria",
  "New South Wales",
  "Queensland",
  "South Australia",
  "Western Australia",
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Services */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#273C92] mb-16">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md border border-[#dbeafe] hover:shadow-2xl hover:scale-[1.03] transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#33B6FF] to-[#273C92] flex items-center justify-center text-white text-2xl shadow-md">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-[#273C92]">
                  {service.title}
                </h3>
              </div>
              <p className="text-sm text-gray-600 mb-3 leading-relaxed">{service.description}</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                {service.features.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Healthcare Staffing Solutions */}
        <div className="mt-24 bg-blue-50/40 py-20 px-6 md:px-12 rounded-3xl text-center shadow-sm">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#273C92] mb-6">
            Healthcare Staffing <span className="text-[#33B6FF]">Solutions</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-14">
            Connecting exceptional healthcare professionals with leading facilities across Australia
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {staffingHighlights.map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:scale-105 border border-[#e0eaff]"
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-12 h-12 bg-[#e4f0ff] text-[#273C92] rounded-full flex items-center justify-center text-xl shadow-sm">
                    🏥
                  </div>
                  <h3 className="text-base font-bold text-[#273C92]">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  <span className="text-xs font-semibold bg-[#273C92] text-white px-3 py-1 rounded-full mt-2 shadow-sm">
                    {item.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* <a href="#why">
            <button className="px-8 py-3 bg-gradient-to-r from-[#273C92] to-[#1fd186] text-white text-base rounded-full font-semibold hover:opacity-90 transition shadow-md">
              Join Our Healthcare Network
            </button>
          </a> */}
        </div>

        {/* State Coverage */}
        <div className="text-center mt-20">
          <h3 className="text-2xl font-semibold text-[#273C92] mb-6">
            Serving Communities Across Australia
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {states.map((state, idx) => (
              <span
                key={idx}
                className="px-5 py-2 border border-[#273C92] text-[#273C92] rounded-full text-sm font-medium hover:bg-[#273C92] hover:text-white transition"
              >
                {state}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
