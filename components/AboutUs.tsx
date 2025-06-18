'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import bishalImg from '../images/bishal.jpg';

import {
  FaStar,
  FaUsers,
  FaHospital,
  FaSmile,
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
  
    const handleSubmit = async (e: any) => {
      e.preventDefault();
      setLoading(true);
      const formData = new FormData(e.target);
      formData.append('topic', 'Join Our Nursing Team');
  
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
    <section id="about" className="bg-gradient-to-b from-[#f4f8fd] to-white py-20 text-[#273C92]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-sm text-[#33B6FF] font-semibold uppercase tracking-wide mb-2 block">
            About Our Mission
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            More Than Support. <span className="text-[#33B6FF]">Real Care</span>, From Real Nurses.
          </h1>
          <p className="text-base text-gray-700">
            Nurse Led Health Care & Staffing is Australia’s premier nurse-owned and led healthcare agency,
            founded by experienced RNs who understand the frontline.
          </p>
        </div>

        {/* Mission & Stats */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#273C92]">Our Journey</h3>
            <p className="text-gray-700">
              Our journey began with a realization: the need for a healthcare service that truly understands
              and prioritizes the human element of care. Founded by registered nurses with frontline experience,
              we saw the gap between what healthcare should be and what it often becomes.
            </p>
            <p className="text-gray-700">
              Whether you're a participant, a family member, or a healthcare professional, our promise is simple:
              <span className="text-[#33B6FF] font-semibold"> You'll always feel heard, safe, and supported.</span>
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <FaStar />, value: '15+', label: 'Years of Excellence' },
                { icon: <FaUsers />, value: '2,500+', label: 'Healthcare Professionals' },
                { icon: <FaHospital />, value: '150+', label: 'Healthcare Facilities' },
                { icon: <FaSmile />, value: '99.2%', label: 'Client Satisfaction' },
              ].map((item, i) => (
                <div key={i} className="bg-white p-4 rounded-xl shadow-md flex items-center space-x-3">
                  <div className="text-[#33B6FF] text-xl">{item.icon}</div>
                  <div>
                    <div className="font-bold text-xl text-[#273C92]">{item.value}</div>
                    <div className="text-sm text-gray-600">{item.label}</div>
                  </div>
                </div>
              ))}
            </div>
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
          <h2 className="text-3xl font-bold text-[#273C92] mb-3">Why Families & Facilities Choose Us</h2>
          <p className="text-gray-700 max-w-xl mx-auto">
            Our nurse-led approach ensures clinical excellence meets compassionate care
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {[
            {
              icon: <FaUserNurse />,
              title: 'Nurse-Owned & Nurse-Led',
              text: 'Founded by experienced RNs with deep clinical insight and understanding of care needs.',
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
              title: 'Nationwide Coverage',
              text: 'Supporting clients across VIC, NSW, QLD, SA & WA with local understanding.',
            },
            {
              icon: <FaHeadset />,
              title: '24/7 Support',
              text: 'Our team is always reachable. No bots, just real people ready to help.',
            },
            {
              icon: <FaRocket />,
              title: 'Fast, Flexible Onboarding',
              text: 'Get started in 2-5 days with our streamlined intake process.',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 border border-[#33B6FF]/10 rounded-xl shadow-sm hover:shadow-md transition text-left"
            >
              <div className="flex items-center gap-3 mb-3 text-[#33B6FF] text-xl">{item.icon}</div>
              <h4 className="font-bold text-lg text-[#273C92] mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

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
      </div>
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
                <button type="submit" className="bg-[#273C92] text-white px-4 py-2 rounded w-full" disabled={loading}>
                  {loading ? "Submitting":"Submit"}
                </button>
              </form>
            </div>
          </div>
        )}
    </section>
  );
}
