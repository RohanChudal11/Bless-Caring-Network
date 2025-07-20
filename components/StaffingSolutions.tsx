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
    icon: <FaUserNurse className="text-3xl sm:text-4xl text-white" />,
    title: 'Registered Nurses (RN)',
    specialties: ['Acute Care', 'Aged Care', 'Mental Health', 'Community Nursing'],
  },
  {
    icon: <FaHeartbeat className="text-3xl sm:text-4xl text-white" />,
    title: 'Enrolled Nurses (EN)',
    specialties: ['Patient Care', 'Medication Support', 'Wound Care', 'Vital Signs'],
  },
  {
    icon: <FaHandHoldingMedical className="text-3xl sm:text-4xl text-white" />,
    title: 'Personal Care Assistants',
    specialties: ['Personal Care', 'Mobility Support', 'Companionship', 'Daily Activities'],
  },
  {
    icon: <FaPeopleArrows className="text-3xl sm:text-4xl text-white" />,
    title: 'Allied Health Professionals',
    specialties: ['Physiotherapy', 'Occupational Therapy', 'Speech Therapy', 'Social Work'],
  },
];

export default function StaffingSolutions() {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    formData.append('topic', 'Join Our Network');

    const res = await fetch('/api/send-inquiry', {
      method: 'POST',
      body: formData,
    });

    if (res.ok) {
      toast.success('Inquiry submitted successfully!');
      setShowModal(false);
      setLoading(false);
    } else {
      toast.error('Failed to send inquiry. Please try again.');
      setLoading(false);
    }
  };

  return (
    <section id="why" className="py-24 sm:py-28 bg-[#f9fbfc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-sm font-semibold text-[#8cc641] uppercase tracking-wider">
          Healthcare Staffing Excellence
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2178bd] mt-4 mb-6 leading-tight">
          <span className="text-[#8cc641]">Staffing Solutions</span> That Work
        </h2>

        <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          Connecting exceptional healthcare professionals with leading facilities across Australia.
          Whether you're seeking career opportunities or staffing solutions, we deliver excellence.
        </p>

        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#2178bd] mb-3">
          For Healthcare Professionals
        </h3>
        <p className="text-sm sm:text-base text-gray-600 mb-10">
          Join Australia's most trusted healthcare staffing network
        </p>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {roles.map((role, i) => (
            <div
              key={i}
              className="group bg-white border border-[#8cc641]/20 rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              aria-label={role.title}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 mb-5 sm:mb-6 rounded-full bg-gradient-to-br from-[#2178bd] to-[#8cc641] flex items-center justify-center mx-auto shadow-md">
                {role.icon}
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-[#2178bd] mb-3">{role.title}</h4>
              <ul className="mt-3 text-sm text-gray-700 space-y-1 text-left">
                {role.specialties.map((spec, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#8cc641] font-bold">&#10004;</span>
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-14">
          <button
            onClick={() => setShowModal(true)}
            aria-label="Join Our Network"
            className="inline-block bg-gradient-to-r from-[#2178bd] to-[#8cc641] text-white text-base sm:text-lg font-semibold px-8 py-4 rounded-full hover:opacity-90 transition shadow-md"
          >
            Join Our Network →
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4 sm:px-0">
          <div className="bg-white p-6 sm:p-8 rounded-xl w-full max-w-md relative shadow-lg">
            <button
              className="absolute top-3 right-4 text-2xl text-gray-700 hover:text-red-500"
              onClick={() => setShowModal(false)}
              aria-label="Close Modal"
            >
              ×
            </button>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-[#2178bd]">
              Send Inquiry – Join Our Network
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8cc641]"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8cc641]"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8cc641]"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-[#2178bd] hover:bg-[#1a5fa3] text-white font-medium py-2.5 px-6 rounded-lg w-full transition"
              >
                {loading ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
