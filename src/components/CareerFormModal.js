"use client";
import React, { useState } from 'react';

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
  className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md px-4"
>

     <div
  onClick={(e) => e.stopPropagation()}
  className="w-full max-w-5xl mx-auto flex flex-col md:flex-row rounded-lg overflow-hidden shadow-2xl bg-white/10 backdrop-blur-[20px] border border-white/20"
>

        {/* Left - Form Section */}
        <div className="w-full md:w-2/3 p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Let's Talk About Your Idea</h2>

          {/* Colored Divider */}
          <div className="flex items-center mb-6">
            <div className="h-[3px] w-6 bg-cyan-400 mr-1"></div>
            <div className="h-[3px] w-2 bg-cyan-400 mr-1"></div>
            <div className="h-[3px] w-2 bg-cyan-400"></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <input type="text" name="name" placeholder="Name" onChange={handleChange}
                className="bg-white/20 border border-white/30 placeholder-white text-white px-4 py-2 w-full md:w-[48%] rounded" />
              <input type="text" name="company" placeholder="Company Name" onChange={handleChange}
                className="bg-white/20 border border-white/30 placeholder-white text-white px-4 py-2 w-full md:w-[48%] rounded" />
            </div>

            <div className="flex flex-wrap gap-4">
              <input type="tel" name="phone" placeholder="Mobile No." onChange={handleChange}
                className="bg-white/20 border border-white/30 placeholder-white text-white px-4 py-2 w-full md:w-[48%] rounded" />
              <input type="email" name="email" placeholder="Email Address" onChange={handleChange}
                className="bg-white/20 border border-white/30 placeholder-white text-white px-4 py-2 w-full md:w-[48%] rounded" />
            </div>

            <select name="service" onChange={handleChange}
              className="bg-white/20 border border-white/30 text-white placeholder-white px-4 py-2 w-full rounded">
              <option value="">Select Service</option>
              <option value="seo">SEO</option>
              <option value="smm">Social Media Marketing</option>
              <option value="ppc">PPC</option>
            </select>

            <textarea name="description" placeholder="Descriptions" onChange={handleChange} rows="4"
              className="bg-white/20 border border-white/30 placeholder-white text-white px-4 py-2 w-full rounded"></textarea>

            <div className="flex justify-center">
              <button type="submit"
                className="bg-gradient-to-r from-[#5F69A8] to-[#8FCDFF] text-white font-bold py-3 px-10 rounded-full hover:scale-105 transition">
                SUBMIT NOW
              </button>
            </div>
          </form>
        </div>

        {/* Right - Contact Info */}
        <div className="w-full md:w-1/3 p-6 bg-black/30 text-white space-y-4">
          <h3 className="text-2xl font-bold flex items-center gap-2">
            <span role="img" aria-label="building">🏢</span> Rankinventiv
          </h3>

          <div className="space-y-2 text-sm">
            <p>📞 +91-8527665635</p>
            <p>📞 +91-9310962725</p>
            <p>💬 WhatsApp: +91-9310962725</p>
            <p>✉️ rankinventiv@gmail.com</p>
            <p>📍 2nd Floor, Lahurabir Rd, Jagatganj,<br />
              Near Sanskrit University,<br />
              Varanasi, Uttar Pradesh 221002</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerFormModal;
