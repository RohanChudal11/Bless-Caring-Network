'use client';

import React from 'react';
import {
  FaClock,
  FaUserMd,
  FaHandshake,
  FaHospitalAlt,
  FaBolt,
  FaBriefcaseMedical,
  FaUserCheck,
} from 'react-icons/fa';

const staffingSolutions = [
  {
    title: 'Emergency Staffing',
    time: '< 2 hours',
    description: '24/7 emergency staffing solutions with rapid response times',
    icon: <FaBolt className="text-secondary text-xl" />,
  },
  {
    title: 'Permanent Placement',
    time: '5-10 days',
    description: 'Find the perfect permanent staff for your facility',
    icon: <FaUserMd className="text-secondary text-xl" />,
  },
  {
    title: 'Contract Solutions',
    time: '24-48 hours',
    description: 'Long-term contract staffing for ongoing needs',
    icon: <FaBriefcaseMedical className="text-secondary text-xl" />,
  },
  {
    title: 'Specialized Care',
    time: 'Same day',
    description: 'Specialists for complex care requirements',
    icon: <FaUserCheck className="text-secondary text-xl" />,
  },
];

const metrics = [
  { value: '150+', label: 'Partner Facilities', color: 'text-green-600' },
  { value: '2,500+', label: 'Healthcare Professionals', color: 'text-blue-700' },
  { value: '99.2%', label: 'Client Satisfaction', color: 'text-red-500' },
  { value: '24/7', label: 'Emergency Response', color: 'text-emerald-600' },
];

export default function StaffingSolutions() {
  return (
    <section className="py-20 px-6 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#273C92] mb-4">
        For Healthcare Facilities
      </h2>
      <p className="text-gray-700 max-w-xl mx-auto mb-12">
        Premium staffing solutions for Australia’s leading healthcare facilities
      </p>

      {/* ✅ 2x2 Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto">
        {staffingSolutions.map((item, i) => (
          <div
            key={i}
            className="rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition p-6 text-left"
          >
            <div className="mb-3 flex items-center gap-3">
              <div className="bg-[#E5F3FB] rounded-full p-2">{item.icon}</div>
              <h3 className="font-semibold text-[#273C92] text-sm">
                {item.title}
              </h3>
            </div>
            <div className="text-xs bg-emerald-50 text-emerald-600 rounded px-2 py-1 inline-block mb-2">
              {item.time}
            </div>
            <p className="text-xs text-gray-600 leading-snug">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 bg-gradient-to-r from-[#EBF9F6] to-[#FFF5F5] rounded-xl py-6 px-4 max-w-6xl mx-auto">
        {metrics.map((m, idx) => (
          <div key={idx} className="text-center">
            <div className={`text-3xl font-bold ${m.color}`}>{m.value}</div>
            <div className="text-xs text-gray-600 mt-1">{m.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
