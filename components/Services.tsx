'use client';

import React from "react";

const services = [
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
    title: "Aged Care & Disability Support",
    icon: "👵",
    description:
      "Compassionate care for seniors and people with disabilities. Personalised support plans, companionship, and community engagement.",
    features: [
      "Companionship",
      "Personal Care",
      "Social Activities",
      "Community Access",
    ],
  },
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
    title: "Diverse Workforce",
    description: "Inclusive team of nurses, carers, and allied health professionals",
    tag: "100+ Professionals",
  },
  {
    title: "24/7 Support",
    description: "Dedicated support team available around the clock",
    tag: "Always Here",
  },
  {
    title: "Quality Assurance",
    description: "Rigorous screening and ongoing quality monitoring",
    tag: "99.2% Satisfaction",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-12 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Our Services Title */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-center text-[#2178bd] mb-10 sm:mb-16">
          Our Services
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-5 sm:p-6 rounded-2xl shadow-md border border-[#d0e8ff] hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#8cc641] to-[#2178bd] flex items-center justify-center text-white text-xl sm:text-2xl shadow-md">
                  {service.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#2178bd]">
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

        {/* Healthcare Staffing Section */}
        <div className="mt-16 sm:mt-24 bg-[#e6f4ff] py-12 sm:py-20 px-5 sm:px-10 md:px-16 rounded-3xl text-center shadow-sm">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-5 sm:mb-6">
            <span className="text-[#2178bd]">Healthcare Staffing</span>{" "}
            <span className="text-[#8cc641]">Solutions</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-700 max-w-3xl mx-auto mb-10 sm:mb-14">
            Connecting exceptional healthcare professionals with leading facilities across Australia
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {staffingHighlights.map((item, i) => (
              <div
                key={i}
                className="bg-white p-5 sm:p-6 rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:scale-[1.03] border border-[#cfeaff]"
              >
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="w-10 h-10 bg-[#d9f0ff] text-[#2178bd] rounded-full flex items-center justify-center text-lg shadow-sm">
                    🏥
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-[#2178bd]">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.description}</p>
                  <span className="text-[10px] sm:text-xs font-semibold bg-[#8cc641] text-white px-3 py-1 rounded-full mt-1 shadow-sm">
                    {item.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Victoria Note */}
        <div className="text-center mt-14 sm:mt-20">
          <h3 className="text-lg sm:text-2xl font-semibold text-[#2178bd]">
            Serving Communities Across <span className="text-[#8cc641]">Victoria</span>
          </h3>
        </div>

      </div>
    </section>
  );
};

export default Services;
