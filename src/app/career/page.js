"use client";

import GlassFooter2 from '@/components/Footer2';
import GlassNavbar2 from '@/components/Navbar2';
import CareerFormModal from '@/components/CareerFormModal';
import Image from 'next/image';
import React , { useState } from 'react';



export default function CareerSection() {
  const categories = ['All','UI/UX Design', 'Development', 'Data Science', 'Business', 'Financial'];

const jobs = [
  {
    id: 1,
    image: '/assets/images/service_thumb_2.jpg',
    title: 'Content Writer',
    level: 'Experienced',
    qualification: 'Graduate in any discipline with good command of the English language.',
    skills: 'Min 1.5 years of experience writing content for websites, blogs, and guest posts.',
    tag: 'UI/UX Design',
  },
  {
    id: 2,
    image: '/assets/images/service_thumb_3.jpg',
    title: 'UI/UX Designer',
    level: 'Fresher',
    qualification: 'Bachelor’s in Design or similar field.',
    skills: 'Good understanding of UX principles. Basic Figma or Adobe XD skills.',
    tag: 'UI/UX Design',
  },
  {
    id: 3,
    image: '/assets/images/service_thumb_4.jpg',
    title: 'Frontend Developer',
    level: 'Experienced',
    qualification: 'B.Tech in CS/IT or related field.',
    skills: '2+ years experience in React.js, Tailwind CSS, and responsive web development.',
    tag: 'Development',
  },
  {
    id: 4,
    image: '/assets/images/service_thumb_5.jpg',
    title: 'Marketing Intern',
    level: 'Fresher',
    qualification: 'Pursuing or completed BBA/MBA in Marketing.',
    skills: 'Basic understanding of digital marketing, SEO, and content strategy.',
    tag: 'Business',
  },
  {
    id: 5,
    image: '/assets/images/service_thumb_3.jpg',
    title: 'Financial Analyst',
    level: 'Experienced',
    qualification: 'B.Com / M.Com / MBA Finance.',
    skills: 'Experience in budgeting, reporting, and financial modeling.',
    tag: 'Financial',
  },
  {
    id: 6,
    image: '/assets/images/service_thumb_1.jpg',
    title: 'Data Analyst',
    level: 'Fresher',
    qualification: 'Bachelor’s in CS, Math, or related field.',
    skills: 'Strong foundation in Excel, Python, and SQL. Eager to learn BI tools.',
    tag: 'Data Science',
  },
  {
    id: 7,
    image: '/assets/images/service_thumb_4.jpg',
    title: 'Junior Backend Developer',
    level: 'Fresher',
    qualification: 'B.Tech in CS/IT or equivalent.',
    skills: 'Basic Node.js, Express, MongoDB knowledge. Good logical thinking.',
    tag: 'Development',
  },
  {
    id: 8,
    image: '/assets/images/service_thumb_2.jpg',
    title: 'Senior UX Researcher',
    level: 'Experienced',
    qualification: 'Bachelor’s in HCI, Psychology, or similar.',
    skills: '3+ years of UX research, surveys, interviews, usability testing.',
    tag: 'UI/UX Design',
  },
];

  const [selectedCategory, setSelectedCategory] = useState('All');
    const [showModal, setShowModal] = useState(false); // 👈 NEW
  const [selectedJob, setSelectedJob] = useState(null); // Optional: Pass job info


  const filteredJobs = selectedCategory === 'All'
  ? jobs
  : jobs.filter(job => job.tag === selectedCategory);

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setShowModal(true);
  };
  return (
    <>
      <GlassNavbar2 />
      <section className="py-32 px-4 sm:px-10 bg-[#382933] text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">
            All <span className="text-[#8FCDFF]">Job Openings</span> of Rankinventiv
          </h2>

          {/* Categories */}
          <div className="flex flex-wrap gap-4 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-base font-semibold transition cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#8FCDFF] text-[#382933]'
                    : 'hover:bg-[#8FCDFF] hover:text-[#382933] bg-white text-[#382933]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Job Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.slice(0, 6).map((job) => (
              <div
  key={job.id}
  className="bg-white text-gray-800 rounded-lg overflow-hidden shadow-lg transition hover:scale-105 flex flex-col min-h-[380px]"
>
<Image
  src={job.image}
  alt={job.title}
  width={600}
  height={176} // Equivalent to h-44 (44 * 4 = 176px)
  className="w-full h-44 object-cover rounded-t-lg"
  style={{ height: '176px', width: '100%' }} // Ensures h-44 and responsiveness
/>
 <div className="p-4 space-y-2 flex flex-col justify-between h-full">
    <div>
      <h3 className="text-xl font-bold text-[#382933]">
        {job.title} <span className="text-sm font-medium text-gray-600">({job.level})</span>
      </h3>

      <div className="mt-2">
        <p className="font-semibold text-[#382933]">Qualification:</p>
        <p className="text-sm text-gray-700">{job.qualification}</p>
      </div>

      <div className="mt-2">
        <p className="font-semibold text-[#382933]">Skills Required:</p>
        <p className="text-sm text-gray-700">{job.skills}</p>
      </div>
    </div>

    <button
    onClick={() => handleApplyClick(job)}
    className="mt-2 bg-[linear-gradient(90deg,#5F69A8,#616FB4,#657AC9,#6E8EEE,#80B3F6,#8FCDFF)] backdrop-blur-[15px] text-white font-bold px-4 py-2 transition hover:scale-105 cursor-pointer">
      APPLY NOW
    </button>
  </div>
</div>

            ))}
          </div>

          {/* Other Jobs Button */}
          <div className="text-center mt-10">
            <button className="bg-white text-[#382933] px-6 py-3 rounded-full transition font-semibold cursor-pointer hover:scale-105">
              Other Jobs
            </button>
          </div>
        </div>
      </section>
       {showModal && (
  <div className="fixed inset-0 flex justify-center items-center z-50">
    <div className="relative w-full max-w-5xl mx-auto p-4">
      <button
        className="absolute top-2 right-2 text-2xl font-bold text-white"
        onClick={() => setShowModal(false)}
      >
        ×
      </button>
      <CareerFormModal job={selectedJob} onClose={() => setShowModal(false)} />
    </div>
  </div>
)}

      <GlassFooter2 />
    </>
  );
}
