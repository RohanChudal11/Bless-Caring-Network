// const reasons = [
//   {
//     title: "Nurse-Owned & Led",
//     text: "Founded and run by experienced nurses, for authentic care and real expertise.",
//     icon: (
//       <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
//         <circle cx={12} cy={12} r={10} /><path d="M12 8v4l2 2" />
//       </svg>
//     ),
//     bg: "bg-primary",
//   },
//   {
//     title: "Personally Matched Support",
//     text: "Every client and staff member is matched based on needs, skills, and values.",
//     icon: (
//       <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
//         <path d="M16 17l-4-4-4 4" /><circle cx={12} cy={7} r={4} />
//       </svg>
//     ),
//     bg: "bg-secondary",
//   },
//   {
//     title: "Culturally Safe & Inclusive",
//     text: "We champion diversity and create a welcoming environment for all backgrounds.",
//     icon: (
//       <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
//         <circle cx={12} cy={12} r={10} /><path d="M8 12h8" />
//       </svg>
//     ),
//     bg: "bg-accent",
//   },
//   {
//     title: "Available Australia-Wide",
//     text: "Our nurse-led network covers metro, regional, and remote communities.",
//     icon: (
//       <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
//         <path d="M12 2v20m10-10H2" />
//       </svg>
//     ),
//     bg: "bg-primary",
//   },
// ];

// export default function WhyChoose() {
//   return (
//     <section className="bg-gradient-to-br from-blue-50 via-blue-100 to-white py-20 px-6" id="why">
//       <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">Why Choose Us?</h2>
//       <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
//         {reasons.map((reason, idx) => (
//           <div
//             key={idx}
//             className="group rounded-3xl bg-white p-8 shadow-xl border border-accent/10 flex flex-col items-center text-center transition hover:-translate-y-1 hover:shadow-2xl"
//           >
//             <div className={`rounded-full ${reason.bg} w-16 h-16 flex items-center justify-center mb-4 shadow-lg group-hover:scale-105 transition`}>
//               {reason.icon}
//             </div>
//             <h3 className="mt-2 text-lg font-bold text-primary mb-2">{reason.title}</h3>
//             <p className="text-gray-600 text-sm">{reason.text}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// components/WhyChooseNetwork.tsx
'use client';

import React, { useState } from 'react';
import toast from 'react-hot-toast';
import {
  FaBolt, FaUserMd, FaBriefcaseMedical, FaUserCheck
} from 'react-icons/fa';

const staffingSolutions = [/* ... */];
const metrics = [/* ... */];

export default function StaffingSolutions() {
  const [inquiryType, setInquiryType] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleOpen = (type: string) => {
    setInquiryType(type);
    setShowModal(true);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append('topic', inquiryType);

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
    <section className="py-24 px-4 sm:px-6 bg-[#f9fafc] text-center">
      {/* ... cards and CTA same as before ... */}

      {/* Modal Form */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl w-full max-w-md relative">
            <button
              className="absolute top-2 right-3 text-xl"
              onClick={() => setShowModal(false)}
            >×</button>
            <h3 className="text-xl font-bold mb-3 text-[#273C92]">Send Inquiry – {inquiryType}</h3>
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


