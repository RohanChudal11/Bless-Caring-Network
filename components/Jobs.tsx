'use client';

import React, { useState } from 'react';
import toast from 'react-hot-toast';

const jobList = [
  {
    id: "22888",
    title: "Enrolled Nurse (Aged Care) - General Victoria",
    type: "Enrolled Nurse",
    category: "Aged Care",
    dates: "ASAP start 2025 Ongoing",
    location: "North Eastern VIC",
  },
  {
    id: "92882",
    title: "Short Term Contract - Dual Registered Midwife - South West Coast Victoria",
    type: "Enrolled Nurse",
    category: "Maternity & Obstetrics",
    dates: "16 Jun 2025 - 20 Jul 2025",
    location: "Western VIC",
  },
  {
    id: "29821",
    title: "Permanent Position - Registered Nurse - ICU - Western VIC",
    type: "Registered Nurse/RN",
    category: "Critical/Intensive Care",
    dates: "20 July 2025 Permanent",
    location: "Northern VIC",
  },
];

export default function Jobs() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

const handleSubmit = async (e) => {
  e.preventDefault();
  setSubmitting(true);
  setErrorMsg('');

  const form = e.currentTarget;
  const formData = new FormData(form);
  const file = formData.get('resume');

  if (!file || typeof file === 'string') {
    toast.error('Resume file is missing.');
    setSubmitting(false);
    return;
  }

  const reader = new FileReader();

  reader.onloadend = async () => {
    try {
      if (!reader.result) {
        throw new Error("File reading failed");
      }

      const base64File = typeof reader.result === 'string' ? reader.result.split(',')[1] : ''; // ✅ extract after "data:...base64,"

      const payload = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
        jobTitle: selectedJob?.title || 'Unknown',
        resume: {
          name: file.name,
          type: file.type,
          content: base64File,
        },
      };

      const res = await fetch('/api/apply-job', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        form.reset();
        setSelectedJob(null);
        toast.success('Application submitted successfully!');
      } else {
        const data = await res.json();
        const error = data?.error || 'Something went wrong.';
        setErrorMsg(error);
        toast.error(error);
      }
    } catch (err) {
      toast.error('File conversion failed. Please upload a valid resume.');
    } finally {
      setSubmitting(false);
    }
  };

  reader.onerror = () => {
    toast.error('Failed to read the file.');
    setSubmitting(false);
  };

  reader.readAsDataURL(file);
};



  return (
    <section id="jobs" className="py-32 bg-[#f8fbff]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-extrabold text-[#273C92] mb-6">
          Explore Job Opportunities
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
          Handpicked healthcare roles tailored for compassionate professionals across Australia.
        </p>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {jobList.map((job) => (
            <div
              key={job.id}
              className="bg-white border border-[#e0eaff] rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <h3 className="text-2xl font-bold text-[#273C92] group-hover:text-[#33B6FF] mb-4">
                {job.title}
              </h3>
              <ul className="text-base text-gray-700 leading-relaxed mb-6 space-y-1 text-left">
                <li><strong>Type:</strong> {job.type}</li>
                <li><strong>Category:</strong> {job.category}</li>
                <li><strong>Dates:</strong> {job.dates}</li>
                <li><strong>Location:</strong> {job.location}</li>
              </ul>
              <button
                onClick={() => setSelectedJob(job)}
                className="mt-auto bg-gradient-to-r from-[#273C92] to-[#33B6FF] text-white font-semibold px-6 py-3 rounded-full shadow hover:opacity-90 transition"
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedJob && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white p-10 rounded-2xl max-w-xl w-full relative shadow-2xl border border-[#33B6FF]/20">
              <button
                className="absolute top-3 right-5 text-3xl text-gray-500 hover:text-red-500"
                onClick={() => setSelectedJob(null)}
              >
                ×
              </button>
              <h3 className="text-2xl font-bold text-[#273C92] mb-6">
                Apply for: {selectedJob.title}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5" encType="multipart/form-data">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#33B6FF]"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#33B6FF]"
                  required
                />
                <input
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg bg-white"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Cover Message (optional)"
                  rows={4}
                  className="w-full border border-gray-300 px-4 py-3 rounded-lg"
                ></textarea>

                {errorMsg && <p className="text-red-500 font-medium">{errorMsg}</p>}

                <button
                  type="submit"
                  disabled={submitting}
                  className={`w-full bg-gradient-to-r from-[#273C92] to-[#33B6FF] text-white font-semibold py-3 rounded-full transition 
                    ${submitting ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'}`}
                >
                  {submitting ? 'Submitting...' : 'Submit Application'}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
