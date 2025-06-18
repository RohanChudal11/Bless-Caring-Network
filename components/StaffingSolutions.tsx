'use client';

import React, { useState } from 'react';
import toast from 'react-hot-toast';
import {
  FaUserNurse,
  FaHeartbeat,
  FaHandHoldingMedical,
  FaPeopleArrows,
} from 'react-icons/fa';

const roles = [
  {
    icon: <FaUserNurse className="text-4xl text-white" />,
    title: 'Registered Nurses (RN)',
    rate: '$45–65/hour',
    specialties: ['Acute Care', 'Aged Care', 'Mental Health', 'Community Nursing'],
  },
  {
    icon: <FaHeartbeat className="text-4xl text-white" />,
    title: 'Enrolled Nurses (EN)',
    rate: '$35–45/hour',
    specialties: ['Patient Care', 'Medication Support', 'Wound Care', 'Vital Signs'],
  },
  {
    icon: <FaHandHoldingMedical className="text-4xl text-white" />,
    title: 'Personal Care Assistants',
    rate: '$28–38/hour',
    specialties: ['Personal Care', 'Mobility Support', 'Companionship', 'Daily Activities'],
  },
  {
    icon: <FaPeopleArrows className="text-4xl text-white" />,
    title: 'Allied Health Professionals',
    rate: '$50–80/hour',
    specialties: ['Physiotherapy', 'Occupational Therapy', 'Speech Therapy', 'Social Work'],
  },
];

export default function StaffingSolutions() {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append('topic', 'Join Our Network');

    const res = await fetch('/api/send-inquiry', {
      method: 'POST',
      body: formData,
    });

    if (res.ok) {
      toast.success('Inquiry submitted successfully!');
      setShowModal(false);
    } else {
      toast.error('Failed to send inquiry. Please try again.');
    }
  };

  return (
    <section id="why" className="py-28 bg-[#f9fbfc]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <span className="text-sm font-semibold text-[#33B6FF] uppercase tracking-wider">
          Healthcare Staffing Excellence
        </span>
        <h2 className="text-5xl font-extrabold text-[#273C92] mt-4 mb-4">
          <span className="text-[#33B6FF]">Staffing Solutions</span> That Work
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
          Connecting exceptional healthcare professionals with leading facilities across Australia. Whether you're seeking career opportunities or staffing solutions, we deliver excellence.
        </p>

        <h3 className="text-3xl font-semibold text-[#273C92] mb-4">
          For Healthcare Professionals
        </h3>
        <p className="text-base text-gray-600 mb-12">
          Join Australia's most trusted healthcare staffing network
        </p>

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {roles.map((role, i) => (
            <div
              key={i}
              className="group bg-white border border-[#33B6FF]/10 rounded-3xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              aria-label={role.title}
            >
              <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-[#33B6FF] to-[#273C92] flex items-center justify-center mx-auto shadow-lg">
                {role.icon}
              </div>
              <h4 className="text-xl font-bold text-[#273C92] mb-3">{role.title}</h4>
              <span className="text-sm bg-red-100 text-red-600 px-3 py-1 rounded-full inline-block mb-4">
                {role.rate}
              </span>
              <ul className="mt-4 text-sm text-gray-700 space-y-2 text-left">
                {role.specialties.map((spec, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#33B6FF] font-bold">&#10004;</span>
                    {spec}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16">
          <button
            onClick={() => setShowModal(true)}
            aria-label="Join Our Network"
            className="inline-block bg-gradient-to-r from-[#273C92] to-[#33B6FF] text-white text-lg font-semibold px-8 py-4 rounded-full hover:opacity-90 transition shadow-md"
          >
            Join Our Network →
          </button>
        </div>
      </div>

      {/* Modal Form */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl w-full max-w-md relative">
            <button
              className="absolute top-2 right-3 text-xl"
              onClick={() => setShowModal(false)}
            >
              ×
            </button>
            <h3 className="text-xl font-bold mb-3 text-[#273C92]">Send Inquiry – Join Our Network</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" name="name" placeholder="Your Name" required className="w-full border p-2 rounded" />
              <input type="email" name="email" placeholder="Your Email" required className="w-full border p-2 rounded" />
              <textarea name="message" placeholder="Your Message" rows={3} className="w-full border p-2 rounded" />
              <button type="submit" className="bg-[#273C92] text-white px-4 py-2 rounded w-full">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
