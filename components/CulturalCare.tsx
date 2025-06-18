'use client';

import { FaHandshake, FaGlobe, FaHeart, FaUsers, FaShieldAlt, FaChartBar, FaComments, FaCertificate, FaMapMarkedAlt } from 'react-icons/fa';

export default function CulturalSafety() {
  return (
    <section className="bg-gradient-to-b from-[#f4fafd] to-white py-20 px-6 text-[#273C92]">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* Acknowledgement */}
        <div className="bg-white rounded-3xl border shadow p-10 text-center">
          <span className="text-xs text-green-600 bg-green-100 px-3 py-1 rounded-full font-medium">
            Acknowledgement of Country
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mt-4 mb-2">
            We acknowledge the Traditional Owners
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We acknowledge the Traditional Owners of the lands on which we work and live across Australia. We pay our
            respects to Elders past, present, and emerging, and recognize their continuing connection to land, waters,
            and community. We are committed to learning from and working with Aboriginal and Torres Strait Islander
            peoples to provide culturally safe and appropriate healthcare services.
          </p>
          <div className="mt-5 text-white text-3xl bg-gradient-to-r from-green-600 to-red-400 w-12 h-12 mx-auto rounded-full flex items-center justify-center">
            <FaMapMarkedAlt />
          </div>
        </div>

        {/* Cultural Safety Values */}
        <div className="text-center">
          <span className="text-xs text-blue-800 bg-blue-100 px-3 py-1 rounded-full font-medium mb-3 inline-block">
            Culturally Safe Healthcare
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-green-700">Cultural</span> <span className="text-red-500">Safety</span> at the Heart of Care
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We believe that quality healthcare must be culturally safe, respectful, and inclusive. Our approach ensures
            every person receives care that honors their cultural identity and values.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {[
            { icon: <FaHeart />, title: 'Respect & Dignity', text: 'Every person deserves care that honors their background and values.' },
            { icon: <FaUsers />, title: 'Inclusive Care', text: 'We celebrate diversity and ensure services are accessible to all.' },
            { icon: <FaShieldAlt />, title: 'Cultural Competency', text: 'Ongoing training to deliver culturally responsive care.' },
            { icon: <FaHandshake />, title: 'Community Partnership', text: 'Working with leaders and orgs to meet community needs.' },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 border rounded-2xl shadow-sm hover:shadow-lg transition group">
              <div className="bg-gradient-to-r from-green-600 to-red-400 text-white w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center text-lg">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-[#273C92] mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Specialized Services */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-3">Specialized Cultural Care Services</h3>
          <p className="text-gray-600 max-w-xl mx-auto mb-6">
            Tailored healthcare services that respect and celebrate cultural diversity
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[{
              title: 'Aboriginal & Torres Strait Islander Care',
              points: ['Traditional Healing Integration', 'Community Elder Involvement', 'Cultural Protocol Respect', 'Land Connection Support'],
            }, {
              title: 'Multicultural Support',
              points: ['Interpreter Services', 'Cultural Dietary Requirements', 'Religious Practice Support', 'Family-Centered Care'],
            }, {
              title: 'LGBTQI+ Inclusive Care',
              points: ['Inclusive Language', 'Chosen Family Recognition', 'Privacy & Confidentiality', 'Affirming Care Practices'],
            }].map((item, idx) => (
              <div key={idx} className="bg-white p-6 border rounded-2xl shadow-sm text-left">
                <h4 className="font-bold text-[#273C92] mb-3">{item.title}</h4>
                <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                  {item.points.map((p, i) => <li key={i}>{p}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Cultural Competency & Stats */}
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="text-xl font-bold text-[#273C92] mb-4">Our Cultural Competency Commitment</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li><FaCertificate className="inline-block mr-2 text-red-500" /> Ongoing Training: Regular cultural competency training for all staff</li>
              <li><FaShieldAlt className="inline-block mr-2 text-green-500" /> Safe Spaces: Environments where all cultures feel welcomed</li>
              <li><FaUsers className="inline-block mr-2 text-blue-500" /> Community Engagement: Active participation in cultural celebrations</li>
              <li><FaHandshake className="inline-block mr-2 text-orange-500" /> Partnership Approach: Working with cultural leaders to improve services</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-red-50 p-6 rounded-2xl shadow text-center">
            <h4 className="font-semibold text-lg mb-4">Cultural Safety Statistics</h4>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-green-700 font-bold text-xl">95%</p>
                <p className="text-sm text-gray-600">Cultural Satisfaction</p>
              </div>
              <div>
                <p className="text-red-500 font-bold text-xl">40+</p>
                <p className="text-sm text-gray-600">Languages Supported</p>
              </div>
              <div>
                <p className="text-blue-700 font-bold text-xl">100%</p>
                <p className="text-sm text-gray-600">Staff Trained</p>
              </div>
              <div>
                <p className="text-green-700 font-bold text-xl">24/7</p>
                <p className="text-sm text-gray-600">Cultural Support</p>
              </div>
            </div>
            {/* <button className="mt-5 bg-gradient-to-r from-green-600 to-red-400 text-white font-semibold px-6 py-2 rounded-full hover:opacity-90 transition">
              Learn About Our Cultural Programs
            </button> */}
          </div>
        </div>

      </div>
    </section>
  );
}
