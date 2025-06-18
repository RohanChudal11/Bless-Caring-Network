'use client';

import React, { useState } from 'react';
import {
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock,
  FaExclamationTriangle, FaRocket, FaArrowRight, FaPaperclip
} from 'react-icons/fa';

export default function ContactUs() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [file, setFile] = useState<File | null>(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.[0] || null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', form.name);
    formData.append('email', form.email);
    formData.append('phone', form.phone);
    formData.append('message', form.message);
    if (file) formData.append('file', file);

    const res = await fetch('/api/send-email', {
      method: 'POST',
      body: formData,
    });

    if (res.ok) {
      setShowPopup(true);
      setForm({ name: '', email: '', phone: '', message: '' });
      setFile(null);
      setTimeout(() => setShowPopup(false), 4000);
    } else {
      alert('Failed to send message. Try again.');
    }
  };

  return (
    <section className="bg-gradient-to-b from-[#f4fafd] to-white py-20 px-6 text-[#273C92]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-2">
          <span className="text-[#33B6FF]">Contact</span> Our Team
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Ready to start your healthcare journey or join our team? We’re here to help you every step of the way. Reach out to us through any of the methods below.
        </p>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { icon: <FaPhone />, title: 'Call Us', text: '1300-NURSE-1 (1300-687-731)', note: '24/7 emergency support available' },
            { icon: <FaEnvelope />, title: 'Email Us', text: process.env.NEXT_PUBLIC_SUPPORT_EMAIL || 'support@nurseledhealthcare.com.au', note: 'We respond within 2 hours' },
            { icon: <FaMapMarkerAlt />, title: 'Visit Us', text: 'Level 15, 123 Collins Street', note: 'By appointment only' },
            { icon: <FaClock />, title: 'Business Hours', text: 'Mon–Fri: 8AM–6PM', note: 'Sat–Sun: Emergency only' },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-2xl border p-6 shadow-sm hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#33B6FF]/10 text-[#33B6FF] rounded-full flex items-center justify-center mb-4 text-xl">
                {item.icon}
              </div>
              <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
              <p className="text-sm text-gray-800">{item.text}</p>
              <p className="text-xs text-gray-500 mt-1">{item.note}</p>
            </div>
          ))}
        </div>

        {/* Emergency Banner */}
        <div className="bg-red-100 border border-red-300 text-red-800 p-6 rounded-xl mb-12 shadow">
          <div className="flex items-center gap-3">
            <FaExclamationTriangle className="text-xl" />
            <div>
              <p className="font-bold">Emergency Support</p>
              <p className="text-sm">For urgent healthcare staffing needs or emergencies, call us immediately:</p>
              <button className="mt-2 inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-full transition">
                Call Emergency Line: 1300-NURSE-1
              </button>
            </div>
          </div>
        </div>

        {/* Form + Actions */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white border rounded-2xl p-6 shadow-sm space-y-4" encType="multipart/form-data">
            <h3 className="text-lg font-bold mb-2">Send Us a Message</h3>
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#33B6FF]"
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#33B6FF]"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your phone number"
              value={form.phone}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#33B6FF]"
            />
            <textarea
              name="message"
              placeholder="Your message..."
              value={form.message}
              onChange={handleChange}
              rows={4}
              required
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#33B6FF]"
            ></textarea>
            <div className="flex items-center gap-2">
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <FaPaperclip />
                Attach file:
              </label>
              <input
                type="file"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx,.jpg,.png"
                className="text-sm"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#33B6FF] to-[#273C92] text-white font-semibold py-2 rounded-lg hover:opacity-90 transition"
            >
              Send Message
            </button>
            {showPopup && (
              <div className="mt-4 text-sm text-green-600">✅ Thank you! Your message has been received.</div>
            )}
          </form>

          {/* Quick Actions */}
          <div className="bg-blue-50/40 p-6 rounded-2xl shadow-sm space-y-4">
            <h3 className="text-lg font-bold mb-4">Quick Actions</h3>
            {["Book Care Assessment", "Apply for Positions", "Request Facility Staffing", "Schedule Consultation"].map((label, i) => (
              <div
                key={i}
                className="w-full border border-gray-200 rounded-lg px-4 py-2 bg-white flex items-center justify-between hover:shadow-md transition"
              >
                <span>{label}</span>
                <FaArrowRight className="text-gray-400" />
              </div>
            ))}
            <div className="bg-green-100 text-green-800 p-4 mt-6 rounded-xl text-sm">
              <FaRocket className="inline mr-2" />
              Fast Response Guarantee – replies within 2 hours during business hours
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
