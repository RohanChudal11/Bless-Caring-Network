'use client';

import {
  FaUserShield,
  FaFileAlt,
  FaMobileAlt,
  FaLock,
  FaFolderOpen,
  FaClipboardList,
  FaEye,
  FaSync,
} from 'react-icons/fa';

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: '1. Summary',
      icon: <FaFileAlt className="text-[#2178bd] text-lg shrink-0" />,
      description:
        'This policy outlines how Bless Caring Network manages personal information per the Privacy Act 1988, APPs, and health legislation. It applies to all stakeholders.',
    },
    {
      title: '2. Privacy Statement',
      icon: <FaUserShield className="text-[#2178bd] text-lg shrink-0" />,
      description:
        'We respect your privacy and safeguard personal data. No disclosure without consent, unless required by law.',
    },
    {
      title: '3. Responsibility',
      icon: <FaLock className="text-[#2178bd] text-lg shrink-0" />,
      description:
        'Management ensures compliance; all parties must handle data securely, accurately, and legally.',
    },
    {
      title: '4. Collecting Personal Information',
      icon: <FaFolderOpen className="text-[#2178bd] text-lg shrink-0" />,
      description:
        'We collect info like name, address, contact details, and next of kin. Sometimes third parties provide it too.',
    },
    {
      title: '5. Employee Information',
      icon: <FaFileAlt className="text-[#2178bd] text-lg shrink-0" />,
      description:
        'Records may include job history, emergency contacts, superannuation, and union memberships.',
    },
    {
      title: '6. Health Information',
      icon: <FaFileAlt className="text-[#2178bd] text-lg shrink-0" />,
      description:
        'Health data is collected with consent and shared only in emergencies or with proper authorization.',
    },
    {
      title: '7. Mobile Application Information',
      icon: <FaMobileAlt className="text-[#2178bd] text-lg shrink-0" />,
      description:
        'We may collect location, device, and login data to enhance app functionality and service delivery.',
    },
    {
      title: '8. Data Security and Storage',
      icon: <FaLock className="text-[#2178bd] text-lg shrink-0" />,
      description:
        'Data is encrypted and secured both digitally and physically. We avoid USB storage and prefer cloud access.',
    },
    {
      title: '9. Access Rights',
      icon: <FaEye className="text-[#2178bd] text-lg shrink-0" />,
      description:
        'Clients and staff may request access to their personal information and correct it if inaccurate.',
    },
    {
      title: '10. Disclosure of Information',
      icon: <FaClipboardList className="text-[#2178bd] text-lg shrink-0" />,
      description:
        'Information is only disclosed to relevant third parties when legally required or with explicit consent.',
    },
    {
      title: '11. Policy Review',
      icon: <FaSync className="text-[#2178bd] text-lg shrink-0" />,
      description:
        'This policy is reviewed regularly to ensure compliance with new laws and updated standards.',
    },
  ];

  return (
    <section className="bg-[#f8fbff] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          <span className="text-[#2178bd]">Bless Caring</span>{' '}
          <span className="text-green-600">Network</span>
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-sm sm:text-base">
          Compliant with the Privacy Act 1988, Australian Privacy Principles (APPs), and Health Privacy Principles (HPPs).
        </p>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl border-l-4 border-[#2178bd] p-6 transition-all duration-300"
            >
              <div className="flex items-start gap-3 mb-2">
                {section.icon}
                <h3 className="text-base font-semibold text-[#273C92]">{section.title}</h3>
              </div>
              <p className="text-gray-700 text-sm sm:text-[15px] leading-relaxed">{section.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
