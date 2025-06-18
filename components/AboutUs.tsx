'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import bishalImg from '../images/bishal.jpg';
import toast from 'react-hot-toast';
import {
  FaStar, FaUsers, FaHospital, FaSmile, FaUserNurse, FaHandshake, FaSyncAlt,
  FaGlobe, FaHeadset, FaRocket, FaStethoscope
} from 'react-icons/fa';

export default function AboutUs() {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append('topic', 'Join Our Nursing Team');

    const res = await fetch('/api/send-inquiry', {
      method: 'POST',
      body: formData,
    });

    if (res.ok) {
      toast.success('Application sent successfully!');
      setShowModal(false);
    } else {
      toast.error('Failed to send. Please try again.');
    }
  };

  return (
    <section id="about" className="bg-gradient-to-b from-[#f4f8fd] to-white py-20 text-[#273C92]">
      <div className="max-w-7xl mx-auto px-6">
        {/* ... header, stats, and reason blocks remain unchanged ... */}

        {/* Final CTA Section */}
        <div className="mt-10 border border-[#E1EFF6] bg-gradient-to-b from-[#f9fcfe] to-white rounded-3xl px-6 py-14 text-center shadow-sm">
          <div className="flex justify-center mb-6">
            <div className="w-14 h-14 bg-gradient-to-br from-[#33B6FF] to-[#0ea5e9] rounded-full flex items-center justify-center text-white text-2xl shadow">
              <FaStethoscope />
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#273C92] mb-3">
            Ready to Experience Nurse-Led Care?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join thousands of families and healthcare professionals who trust us for exceptional care and career opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-gradient-to-r from-[#273C92] to-[#33B6FF] text-white font-semibold px-6 py-3 rounded-full shadow hover:opacity-90 transition"
            >
              Start Your Care Journey →
            </a>
            <button
              onClick={() => setShowModal(true)}
              className="border-2 border-[#0ea5e9] text-[#0ea5e9] font-semibold px-6 py-3 rounded-full hover:bg-[#0ea5e9] hover:text-white transition"
            >
              Join Our Team
            </button>
          </div>
        </div>

        {/* Modal Form */}
        {showModal && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-xl w-full max-w-md relative shadow-lg">
              <button
                className="absolute top-2 right-3 text-xl"
                onClick={() => setShowModal(false)}
              >
                ×
              </button>
              <h3 className="text-xl font-bold mb-3 text-[#273C92]">Join Our Nursing Team</h3>
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
      </div>
    </section>
  );
}
