'use client';

import React, { useState } from 'react';
import {
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock,
  FaExclamationTriangle, FaPaperclip
} from 'react-icons/fa';
import toast from 'react-hot-toast';

export default function ContactUs() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [file, setFile] = useState<File | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.[0] || null);
  };

  const convertFileToBase64 = (file: File | null): Promise<string> => {
    return new Promise((resolve, reject) => {
      if (!file) return resolve('');
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve((reader.result as string).split(',')[1]);
      reader.onerror = error => reject(error);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const base64 = await convertFileToBase64(file);

    const payload = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      message: form.message,
      resume: file ? {
        name: file.name,
        type: file.type,
        content: base64
      } : null
    };

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (res.ok) {
        toast.success('Your message has been sent!');
        setShowPopup(true);
        setForm({ name: '', email: '', phone: '', message: '' });
        setFile(null);
        setTimeout(() => setShowPopup(false), 4000);
      } else {
        toast.error(`${data?.error || 'Failed to send message'}`);
      }
    } catch (err) {
      toast.error('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 bg-gradient-to-b from-[#f4fafd] to-white py-20 px-6 text-[#2178bd]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-2">
          <span className="text-[#8cc641]">Contact</span> Our Team
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Ready to start your healthcare journey or join our team? We’re here to help you every step of the way.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[{
            icon: <FaPhone />,
            title: 'Call Us',
            text: '03 8577 5616',
            note: '24/7 emergency support available'
          }, {
            icon: <FaEnvelope />,
            title: 'Email Us',
            text: 'info@blesscaring.com.au',
            note: 'We respond within 2 hours'
          }, {
            icon: <FaMapMarkerAlt />,
            title: 'Visit Us',
            text: '80 Mackie Road, Mulgrave 3170',
            note: 'By appointment only'
          }, {
            icon: <FaClock />,
            title: 'Business Hours',
            text: 'Mon–Fri: 8AM–6PM',
            note: 'Sat–Sun: Emergency only'
          }].map((item, i) => (
            <div key={i} className="bg-white rounded-2xl border p-6 shadow-sm hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#e5f7ff] text-[#2178bd] rounded-full flex items-center justify-center mb-4 text-xl">
                {item.icon}
              </div>
              <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
              <p className="text-sm text-gray-800">{item.text}</p>
              <p className="text-xs text-gray-500 mt-1">{item.note}</p>
            </div>
          ))}
        </div>

        <div className="bg-red-100 border border-red-300 text-red-800 p-6 rounded-xl mb-12 shadow">
          <div className="flex items-start gap-3">
            <FaExclamationTriangle className="text-xl mt-1" />
            <div>
              <p className="font-bold">Emergency Support (24 Hours)</p>
              <p className="text-sm">For urgent healthcare staffing needs or emergencies, call us immediately:</p>
              <button className="mt-2 inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-full transition">
                Call Emergency Line: 03 8577 5616
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <form
            onSubmit={handleSubmit}
            className="bg-white border border-[#d0eaff] rounded-2xl p-8 shadow-md space-y-5 max-w-2xl w-full"
          >
            <h3 className="text-lg font-bold mb-2">Send Us a Message</h3>
            <input type="text" name="name" placeholder="Your full name" value={form.name} onChange={handleChange} required className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2178bd]" />
            <input type="email" name="email" placeholder="Your email" value={form.email} onChange={handleChange} required className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2178bd]" />
            <input type="tel" name="phone" placeholder="Your phone number" value={form.phone} onChange={handleChange} className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2178bd]" />
            <textarea name="message" placeholder="Your message..." value={form.message} onChange={handleChange} rows={4} required className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2178bd]" />
            <div className="flex items-center gap-2">
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <FaPaperclip /> Attach file:
              </label>
              <input type="file" onChange={handleFileChange} accept=".pdf,.doc,.docx,.jpg,.png" className="text-sm" />
            </div>
            <button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-[#2178bd] to-[#8cc641] text-white font-semibold py-2 rounded-lg hover:opacity-90 transition">
              {loading ? 'Sending...' : 'Send Message'}
            </button>
            {showPopup && <div className="mt-4 text-sm text-green-600">✅ Thank you! Your message has been received.</div>}
          </form>
        </div>

        {/* Embedded Google Map */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-4 text-center text-[#2178bd]">Our Location</h3>
          <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg border border-[#d0eaff]">
            <iframe
              title="Google Map - 80 Mackie Road"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3133.543335353847!2d145.16177557617186!3d-37.92685957196368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad614e54c33a85d%3A0x6e0cb5d054b68262!2s80%20Mackie%20Rd%2C%20Mulgrave%20VIC%203170%2C%20Australia!5e0!3m2!1sen!2sau!4v1721463247584!5m2!1sen!2sau"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
