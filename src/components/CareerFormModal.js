"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { FaBuilding, FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const CareerFormModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: '',
    description: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
   <section
  onClick={onClose}
  className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-md px-4 py-6"
>
  <div
    onClick={(e) => e.stopPropagation()}
    className="relative w-full max-w-5xl mx-auto flex flex-col md:flex-row rounded-lg overflow-hidden shadow-2xl bg-black/50 backdrop-blur-[20px] border border-white/20
      max-h-[90vh] md:max-h-[80vh] overflow-y-auto"
  >
        {/* Cancel Button */}
      <button
  onClick={(e) => {
    e.stopPropagation();
    onClose();
  }}
  className="absolute top-3 right-3 text-white bg-red-600 hover:bg-red-700 transition rounded px-4 py-1 font-semibold cursor-pointer z-50"
  aria-label="Close Modal"
>
  X
</button>



        {/* Left - Form Section */}
        <div className="w-full md:w-2/3 p-6 sm:p-8 text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Let's Talk About Your Idea</h2>

          {/* Colored Divider */}
          <div className="flex items-center mb-6">
            <div className="h-[3px] w-6 bg-cyan-400 mr-1"></div>
            <div className="h-[3px] w-2 bg-cyan-400 mr-1"></div>
            <div className="h-[3px] w-2 bg-cyan-400"></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleChange}
                className="bg-white/20 border border-white/30 placeholder-white text-white px-4 py-2 rounded w-full sm:w-[48%]"
              />
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                onChange={handleChange}
                className="bg-white/20 border border-white/30 placeholder-white text-white px-4 py-2 rounded w-full sm:w-[48%]"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4">
              <input
                type="tel"
                name="phone"
                placeholder="Mobile No."
                onChange={handleChange}
                className="bg-white/20 border border-white/30 placeholder-white text-white px-4 py-2 rounded w-full sm:w-[48%]"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                onChange={handleChange}
                className="bg-white/20 border border-white/30 placeholder-white text-white px-4 py-2 rounded w-full sm:w-[48%]"
              />
            </div>

            <select
              name="service"
              onChange={handleChange}
              className="bg-white/20 border border-white/30 text-white placeholder-white px-4 py-2 w-full rounded"
            >
              <option value="">Select Service</option>
              <option value="seo">SEO</option>
              <option value="smm">Social Media Marketing</option>
              <option value="ppc">PPC</option>
            </select>

            <textarea
              name="description"
              placeholder="Descriptions"
              onChange={handleChange}
              rows="4"
              className="bg-white/20 border border-white/30 placeholder-white text-white px-4 py-2 w-full rounded resize-none"
            ></textarea>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-[#5F69A8] to-[#8FCDFF] text-white font-bold py-3 px-10 rounded-full hover:scale-105 transition transform"
              >
                SUBMIT NOW
              </button>
            </div>
          </form>
        </div>

        {/* Right - Contact Info */}
        <div className="w-full md:w-1/3 p-6 sm:p-8 bg-black/30 text-white space-y-6 rounded-lg border border-white/20 mt-6 md:mt-0 ">
          <h3 className="text-xl sm:text-2xl font-bold flex items-center gap-3">
            <FaBuilding className="text-3xl" />
            Rankinventiv
          </h3>

          <div className="space-y-4 text-sm sm:text-base">
            <Link
              href="tel:+918527665635"
              className="flex items-center gap-2 hover:text-cyan-400 transition"
            >
              <FaPhone className="text-xl" />
              +91-8527665635
            </Link>
            <Link
              href="tel:+919310962725"
              className="flex items-center gap-2 hover:text-cyan-400 transition"
            >
              <FaPhone className="text-xl" />
              +91-9310962725
            </Link>
            <Link
              href="https://wa.me/919310962725"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-cyan-400 transition"
            >
              <FaWhatsapp className="text-xl" />
              WhatsApp: +91-9310962725
            </Link>
            <Link
              href="mailto:rankinventiv@gmail.com"
              className="flex items-center gap-2 hover:text-cyan-400 transition"
            >
              <FaEnvelope className="text-xl" />
              rankinventiv@gmail.com
            </Link>
            <div className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-xl mt-1" />
              <address className="not-italic text-sm sm:text-base">
                2nd Floor, Lahurabir Rd, Jagatganj,<br />
                Near Sanskrit University,<br />
                Varanasi, Uttar Pradesh 221002
              </address>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerFormModal;
