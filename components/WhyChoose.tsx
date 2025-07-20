'use client';

import React from 'react';
import {
  FaBolt,
  FaUserMd,
  FaBriefcaseMedical,
  FaUserCheck,
} from 'react-icons/fa';

const staffingSolutions = [
  {
    title: 'Emergency Staffing',
    time: '24 hours',
    description:
      'Reliable emergency staffing with rapid deployment across all shifts and specialties.',
    icon: <FaBolt className="text-[#2178bd] text-xl" />,
  },
  {
    title: 'Permanent Placement',
    time: '24 hours',
    description:
      'Professional recruitment support to fill long-term roles with qualified healthcare staff.',
    icon: <FaUserMd className="text-[#2178bd] text-xl" />,
  },
  {
    title: 'Contract Staffing',
    time: '24 hours',
    description:
      'Flexible short or long-term contract staffing tailored to your facility’s needs.',
    icon: <FaBriefcaseMedical className="text-[#2178bd] text-xl" />,
  },
  {
    title: 'Specialist Care',
    time: '24 hours',
    description:
      'Access to experienced specialists for aged care, mental health, ICU, and more.',
    icon: <FaUserCheck className="text-[#2178bd] text-xl" />,
  },
];

export default function StaffingSolutions() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#2178bd] mb-4 leading-tight">
          For Healthcare Facilities
        </h2>
        <p className="text-gray-700 text-sm sm:text-base max-w-2xl mx-auto mb-12">
          Fast, flexible, and professional staffing solutions designed for Australia’s leading healthcare providers.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {staffingSolutions.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-[#e6eef5] rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-xl transition duration-300 text-left"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-[#e3f2fc] p-3 rounded-full">
                  {item.icon}
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-[#2178bd]">
                  {item.title}
                </h3>
              </div>
              <span className="inline-block text-xs font-semibold text-[#8cc641] bg-[#f0fbe5] px-3 py-1 rounded-full mb-2">
                {item.time}
              </span>
              <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
