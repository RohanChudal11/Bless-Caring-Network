'use client';

import Image from 'next/image';
import {
  FaHandshake,
  FaGlobe,
  FaHeart,
  FaUsers,
  FaShieldAlt,
  FaCertificate,
} from 'react-icons/fa';

export default function CulturalSafety() {
  return (
    <section
      id="cultural-care"
      className="bg-gradient-to-b from-[#f4fafd] to-white py-20 px-6 text-[#2178bd]"
    >
      <div className="max-w-7xl mx-auto space-y-20">

        {/* Acknowledgement */}
        <div className="bg-white rounded-3xl border border-[#d0eaff] shadow p-10 text-center">
          <span className="text-xs text-[#8cc641] bg-[#f0fbe5] px-3 py-1 rounded-full font-medium">
            Acknowledgement of Country
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mt-4 mb-2">
            We acknowledge the Traditional Owners
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-6">
            We acknowledge the Traditional Owners of the lands on which we work and live across Australia.
            We pay our respects to Elders past, present, and emerging, and recognize their continuing connection
            to land, waters, and community. We are committed to learning from and working with Aboriginal and
            Torres Strait Islander peoples to provide culturally safe and appropriate healthcare services.
          </p>
          <div className="flex justify-center gap-4">
            <Image
              src="/flags/aboriginal-flag.png"
              alt="Aboriginal Flag"
              width={80}
              height={50}
              className="rounded shadow-sm"
            />
            <Image
              src="/flags/torres-strait-flag.png"
              alt="Torres Strait Islander Flag"
              width={80}
              height={50}
              className="rounded shadow-sm"
            />
          </div>
        </div>

        {/* Cultural Safety Values */}
        <div className="text-center">
          <span className="text-xs text-[#2178bd] bg-[#d8ecff] px-3 py-1 rounded-full font-medium mb-3 inline-block">
            Culturally Safe Healthcare
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-[#2178bd]">Cultural</span>{' '}
            <span className="text-[#8cc641]">Safety</span> at the Heart of Care
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We believe that quality healthcare must be culturally safe, respectful, and inclusive.
            Our approach ensures every person receives care that honors their cultural identity and values.
          </p>
        </div>

        {/* Value Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {[
            {
              icon: <FaHeart />,
              title: 'Respect & Dignity',
              text: 'Every person deserves care that honors their background and values.',
            },
            {
              icon: <FaUsers />,
              title: 'Inclusive Care',
              text: 'We celebrate diversity and ensure services are accessible to all.',
            },
            {
              icon: <FaShieldAlt />,
              title: 'Cultural Competency',
              text: 'Ongoing training to deliver culturally responsive care.',
            },
            {
              icon: <FaHandshake />,
              title: 'Community Partnership',
              text: 'Working with leaders and orgs to meet community needs.',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 border border-[#d0eaff] rounded-2xl shadow-sm hover:shadow-lg transition group"
            >
              <div className="bg-gradient-to-r from-[#2178bd] to-[#8cc641] text-white w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center text-lg">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-[#2178bd] mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Specialized Services */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-3 text-[#2178bd]">Specialized Cultural Care Services</h3>
          <p className="text-gray-600 max-w-xl mx-auto mb-6">
            Tailored healthcare services that respect and celebrate cultural diversity
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {[
              {
                title: 'Aboriginal & Torres Strait Islander Care',
                points: [
                  'Traditional Healing Integration',
                  'Community Elder Involvement',
                  'Cultural Protocol Respect',
                  'Land Connection Support',
                ],
              },
              {
                title: 'Multicultural Support',
                points: [
                  'Interpreter Services',
                  'Cultural Dietary Requirements',
                  'Religious Practice Support',
                  'Family-Centered Care',
                ],
              },
              {
                title: 'LGBTQI+ Inclusive Care',
                points: [
                  'Inclusive Language',
                  'Chosen Family Recognition',
                  'Privacy & Confidentiality',
                  'Affirming Care Practices',
                ],
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 border border-[#d0eaff] rounded-2xl shadow-sm"
              >
                <h4 className="font-bold text-[#2178bd] mb-3">{item.title}</h4>
                <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                  {item.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
