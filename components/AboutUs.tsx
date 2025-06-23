'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import bishalImg from '../images/bishal.jpeg';
import {
  FaUserNurse,
  FaHandshake,
  FaSyncAlt,
  FaGlobe,
  FaHeadset,
  FaRocket,
  FaStethoscope,
} from 'react-icons/fa';
import toast from 'react-hot-toast';

export default function AboutUs() {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    formData.append('topic', 'Join Our Nursing Team');
    if (file) {
      formData.append('resume', file);
    }

    const res = await fetch('/api/send-inquiry', {
      method: 'POST',
      body: formData,
    });

    if (res.ok) {
      toast.success('Application sent successfully!');
      setShowModal(false);
      setLoading(false);
    } else {
      toast.error('Failed to send. Please try again.');
      setLoading(false);
    }
  };

  return (
    <section id="about" className="bg-gradient-to-b from-[#f4f8fd] to-white py-16 sm:py-20 text-[#2178bd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-sm text-[#8cc641] font-semibold uppercase tracking-wide mb-2 block">
            About Our Mission
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            More Than Support. <span className="text-[#8cc641]">Real Care</span>, From Real Nurses.
          </h1>
          <p className="text-base text-gray-700">
            Nurse Led Health Care & Staffing is Australia’s premier nurse-owned and led healthcare agency,
            founded by experienced Nurses who served during the COVID-19 Healthcare Crisis (Working Frontline).
          </p>
        </div>

        {/* Mission & Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#2178bd]">Our Journey</h3>
            <p className="text-gray-700">
              Our journey began with a realization: the need for a healthcare service that truly understands
              and prioritizes the human element of care. Founded by experienced nurses with frontline service,
              we saw the gap between what healthcare should be and what it often becomes.
            </p>
            <p className="text-gray-700">
              Whether you're a participant, a family member, a healthcare professional, or an aged care facility or hospital — 
              <span className="text-[#8cc641] font-semibold"> you'll always feel heard, safe, and supported.</span>
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image
              src={bishalImg}
              alt="bishal"
              className="w-full h-auto object-cover"
              placeholder="blur"
            />
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#2178bd] mb-3">
            Why Families & Facilities Choose Us
          </h2>
          <p className="text-gray-700 max-w-xl mx-auto">
            Our nurse-led approach ensures clinical excellence meets compassionate care.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-20">
          {[
            {
              icon: <FaUserNurse />,
              title: 'Nurse-Owned & Nurse-Led',
              text: 'Founded by experienced Nurses with deep clinical insight and understanding of care needs.',
            },
            {
              icon: <FaHandshake />,
              title: 'Cultural & Personality Matching',
              text: 'We match people not just skills. Culturally responsive, personality-aligned care.',
            },
            {
              icon: <FaSyncAlt />,
              title: 'Consistent Care Teams',
              text: 'We aim to assign the same caregivers weekly to build trust and continuity.',
            },
            {
              icon: <FaGlobe />,
              title: 'Currently Serving Across Victoria',
              text: 'Supporting clients across VICTORIA. Inter-states incoming.',
            },
            {
              icon: <FaHeadset />,
              title: '24/7 Support',
              text: 'Our team is always reachable. No bots, just real people ready to help.',
            },
            {
              icon: <FaRocket />,
              title: 'Fast, Flexible Onboarding',
              text: 'Get started in just less than 24 hrs with our streamlined intake process.',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 border border-[#8cc641]/20 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-3 mb-3 text-[#8cc641] text-xl">{item.icon}</div>
              <h4 className="font-bold text-lg text-[#2178bd] mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Final CTA Section */}
        <div className="mt-10 border border-[#d0e6f0] bg-gradient-to-b from-[#f9fcfe] to-white rounded-3xl px-6 py-14 text-center shadow-sm">
          <div className="flex justify-center mb-6">
            <div className="w-14 h-14 bg-gradient-to-br from-[#2178bd] to-[#8cc641] rounded-full flex items-center justify-center text-white text-2xl shadow">
              <FaStethoscope />
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#2178bd] mb-3">
            Ready to Experience Nurse-Led Care?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join thousands of families and healthcare professionals who trust us for exceptional care and career opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="bg-gradient-to-r from-[#2178bd] to-[#8cc641] text-white font-semibold px-6 py-3 rounded-full shadow hover:opacity-90 transition"
            >
              Start Your Care Journey →
            </a>
            <button
              onClick={() => setShowModal(true)}
              className="border-2 border-[#8cc641] text-[#8cc641] font-semibold px-6 py-3 rounded-full hover:bg-[#8cc641] hover:text-white transition"
            >
              Join Our Team
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">
          <div className="bg-white p-6 rounded-xl w-full max-w-md relative shadow-lg">
            <button
              className="absolute top-2 right-3 text-xl"
              onClick={() => setShowModal(false)}
            >
              ×
            </button>
            <h3 className="text-xl font-bold mb-3 text-[#2178bd]">Join Our Nursing Team</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" name="name" placeholder="Your Name" required className="w-full border p-2 rounded" />
              <input type="email" name="email" placeholder="Your Email" required className="w-full border p-2 rounded" />
              <textarea name="message" placeholder="Your Message" rows={3} className="w-full border p-2 rounded" />
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                className="w-full border p-2 rounded"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
              />
              <button type="submit" className="bg-[#2178bd] text-white px-4 py-2 rounded w-full" disabled={loading}>
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
