'use client'
import React, { useState } from 'react';
import Image from 'next/image'

export default function HeroSection() {
  const [form, setForm] = useState({ name: '', email: '' });
  const [status, setStatus] = useState('');

const handleSubmit = async (e) => {
  e.preventDefault();

  const { name, email } = form;  // get values from React state

  try {
    const res = await fetch('/api/Inquiry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email }),
    });

    const data = await res.json();
    if (res.ok) {
      alert('Inquiry sent!');
      setForm({ name: '', email: '' }); // reset form state
    } else {
      alert(data.error || 'Failed to send inquiry');
    }
  } catch (error) {
    alert('Failed to send inquiry');
  }
};



  return (
    <>
       {/* Hero Section */}
            <div className="relative h-screen w-full">
              {/* Background Image */}
              <Image
                src="/assests/images/Landing Page 015.jpg"
                alt="Background"
                fill
                className="object-cover z-0"
              />
      
              {/* Bottom Overlay Gradient */}
              {/* Overlay */}
              {/* <div
        className="absolute inset-0 z-10"
       style={{
        backgroundImage: `
          linear-gradient(90deg, rgba(82,79,112,0.1) 0%, rgba(120,137,188,0.2) 70%, rgba(82,79,112,8.1) 100%)
        `,
      }}
      
      ></div> */}
              {/* Bottom Overlay Gradient */}
              <div
                className="absolute inset-x-0 bottom-0 h-[300px] z-20"
                style={{
                  backgroundImage: "linear-gradient(to bottom, transparent, #382933)",
                }}
              ></div>
      
              {/* Spotlight */}
              {/* <div className="absolute top-1/2 left-[70%] -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[radial-gradient(circle,#B3D6FA_0%,#9AB4E5_50%,transparent_70%)] z-20"></div> */}
      
              {/* Content */}
              <div className="relative flex flex-col md:flex-row items-center justify-between z-30 max-w-[1000px] mx-auto text-white px-4 md:px-0">
                {/* Left Text */}
                <div className="w-full md:max-w-[520px] mt-28 md:mt-[170px] text-center md:text-left md:ml-12  ">
                  {/* Badge */}
                  <div className="mb-5">
                    <div className="inline-block bg-black/30 px-4 py-1 rounded-full text-xs tracking-wider text-white">
                      ONLINE •{" "}
                      <span className="text-[#5ec2f4] font-bold">GRATUITA</span> • AO
                      VIVO
                    </div>
                  </div>
      
                  {/* Heading */}
                  <h1 className="text-[24px] sm:text-[32px] md:text-[36px] font-bold leading-tight mb-3 tracking-[-0.3px]">
                    Smart Marketing Strategies for   <br className="hidden sm:block" />
                    Your Business
                  </h1>
      
                  {/* Subtext */}
                  <p className="text-lg mb-5 text-white/75 leading-relaxed tracking-[0.2px]">
                    Invest where it counts. Our expert consulting uses SEO, Local SEO, Google & Meta Ads to grow your visibility and attract real customers.
 {/* <span className="text-[#D3E9FD] font-bold">
                      liberdade financeira
                    </span> */}
                  </p>
      
                  {/* Form */}
                   <form

        onSubmit={handleSubmit} 
        className="flex flex-col gap-2 max-w-md mx-auto md:mx-0"
      >
        <input
          type="text"
          required
          placeholder="Enter Your Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full p-3 text-white placeholder-white/40 bg-black/15 backdrop-blur-sm focus:outline-none"
          style={{
            borderBottom: `2px solid transparent`,
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.3), rgba(255,255,255,0))',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 2px',
            backgroundPosition: 'left bottom',
          }}
        />

        <input
        required
          type="email"
          placeholder="Enter Your E-mail"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full p-3 text-white placeholder-white/40 bg-black/15 backdrop-blur-sm focus:outline-none"
          style={{
            borderBottom: `2px solid transparent`,
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.3), rgba(255,255,255,0))',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 2px',
            backgroundPosition: 'left bottom',
          }}
        />

        <button
          type="submit"
          className="px-3 transition hover:scale-105 mt-2 py-3 bg-gradient-to-r from-[#5F69A8] via-[#6E8EEE] to-[#8DCBFD] text-white font-semibold text-xs cursor-pointer tracking-[2.5px] uppercase"
        >
          Get Inquiry
        </button>
        {status && <p className="text-sm mt-2 text-white/80">{status}</p>}
      </form>
                </div>
              </div>
            </div>
    </>
  )
}
