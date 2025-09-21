"use client";
import React, { useState } from "react";
import Link from "next/link";
import ContactFormModal from "./ContactFormModal";

import { FaArrowRight } from "react-icons/fa";

export default function ProcessSection() {
  const steps = [
    {
      id: "01",
      title: "Business & Market Audit",
      desc: " We carefully review your current marketing efforts, competitors, and industry trends to identify gaps, missed opportunities, and areas where your business can grow effectively.",
    },
    {
      id: "02",
      title: "Data Analysis",
      desc: " Your ad spend, reports, and performance metrics are deeply analyzed to highlight wasted investments, uncover improvement areas, and ensure every rupee is directed toward measurable business growth.",
    },
    {
      id: "03",
      title: "Expert Assignment",
      desc: "Based on your niche, we assign an experienced consultant who understands your industry, target customers, and goals, ensuring strategies are relevant, effective, and tailored specifically to you.",
    },
    {
      id: "04",
      title: " Consultant Session",
      desc: "You receive a personalized consulting session where we share clear insights, proven strategies, and a customized growth roadmap designed to maximize results and minimize unnecessary spending.",
    },
  ];

  // Gradient Border Style (reusable)
  const borderStyle = {
    padding: "2px",
    background:
      "linear-gradient(to top, rgba(211,233,253,0.8), rgba(211,233,253,0) 70%)",
    WebkitMask:
      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
    WebkitMaskComposite: "xor",
    maskComposite: "exclude",
  };

  // Card Inner Background (reusable)
  const cardBg =
    "linear-gradient(to bottom, rgba(56,41,51,0.9), rgba(55,41,53,0.9), rgba(55,40,49,0.9))";
const [showForm, setShowForm] = useState(false);
  return (
    <>
    <section
      className="relative w-full min-h-screen text-white flex flex-col justify-center py-16 px-4 sm:px-6 md:px-12 lg:px-20"
      style={{
        background: "linear-gradient(to bottom, #382933, #372935, #372831)",
      }}
    >
     {/* Heading */}
<div className="text-center max-w-3xl mx-auto mb-12">
  <p className="text-base md:text-lg text-[#8FCDFF] font-medium mb-2">
    4 SIMPLE STEPS
  </p>
<h2
  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug bg-clip-text text-white"
>
 The Proven 4-Step Formula for Business Growth
</h2>

 {/* Gradient underline */}
<div
className="mx-auto mt-6 h-[1px] w-32 sm:w-40 md:w-56 lg:w-64"
  style={{
    background:
      "linear-gradient(to right, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.4) 40%, rgba(255,255,255,0.1) 100%)",
    borderRadius: "999px",
  }}
></div>

</div>

      {/* Steps Grid */}
     <div className="grid gap-12 md:gap-14 lg:gap-16 
                md:grid-cols-2 lg:grid-cols-4 
                max-w-[1600px] mx-auto items-stretch px-8 relative">

 {steps.map((step, index) => (
 <div
  key={step.id}
  className="relative rounded-2xl pt-0 pb-4 px-6 flex flex-col gap-3 
             transition min-h-[240px]"
>

    {/* Gradient Border */}
    <div
      className="absolute inset-0 rounded-2xl pointer-events-none"
      style={borderStyle}
    ></div>

    {/* Step Number */}
<div className="flex justify-center items-center mt-8 md:mt-0 mb-2">
  <span
    className="flex justify-center items-center 
      bg-[linear-gradient(90deg,#5F69A8,#616FB4,#657AC9,#6E8EEE,#80B3F6,#8FCDFF)] 
      rounded-full 
      w-10 h-10 
      font-bold text-xl text-gray-100"
  >
    {step.id}
  </span>
</div>


     {/* Step Content */}
<div className="flex flex-col gap-2 text-center">
 
  {/* Step Title */}
  <span className="text-2xl font-semibold">{step.title}</span>

  {/* Step Description */}
  <p className="text-base text-gray-300 leading-relaxed">
    {step.desc}
  </p>
</div>

    {/* Gradient Arrow (except last step) */}
    {index !== steps.length - 1 && (
      <>
        {/* Large Screens */}
       <div className="absolute right-[-98px] top-1/3 hidden lg:block">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 24"
    className="w-24 h-24 bounce-horizontal"
    fill="none"
    stroke="url(#arrowGradientRight)"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <defs>
      <linearGradient id="arrowGradientRight" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#5F69A8" />
        <stop offset="20%" stopColor="#616FB4" />
        <stop offset="40%" stopColor="#657AC9" />
        <stop offset="60%" stopColor="#6E8EEE" />
        <stop offset="80%" stopColor="#80B3F6" />
        <stop offset="100%" stopColor="#8FCDFF" />
      </linearGradient>
    </defs>

    {/* Double right chevrons */}
    <path d="M6 5l5 7-5 7" />
    <path d="M14 5l5 7-5 7" />

    <style>{`
      .bounce-horizontal {
        animation: bounceX 1.4s ease-in-out infinite;
        transform-origin: center;
      }

      @keyframes bounceX {
        0%, 100% {
          transform: translateX(0);
        }
        50% {
          transform: translateX(8px);
        }
      }
    `}</style>
  </svg>
</div>



        {/* Small Screens */}
     <div className="absolute bottom-[-68px] left-1/2  -translate-x-1/2 block lg:hidden">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="w-14 h-14"
    fill="none"
    stroke="url(#arrowGradientMobile)"
    strokeWidth={3}
    style={{
      animation: 'smoothBounce 1.5s ease-in-out infinite',
      transformOrigin: 'center',
    }}
  >
    <defs>
      <linearGradient id="arrowGradientMobile" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#5F69A8" />
        <stop offset="20%" stopColor="#616FB4" />
        <stop offset="40%" stopColor="#657AC9" />
        <stop offset="60%" stopColor="#6E8EEE" />
        <stop offset="80%" stopColor="#80B3F6" />
        <stop offset="100%" stopColor="#8FCDFF" />
      </linearGradient>
    </defs>

    {/* Double Chevron Arrow */}
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7 13l5 5 5-5M7 6l5 5 5-5"
    />

    {/* Inline Bounce Animation */}
    <style>{`
      @keyframes smoothBounce {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }
    `}</style>
  </svg>
</div>


      </>
    )}
  </div>
))}

</div>


      {/* Bottom Section */}
      <div className="relative rounded-2xl mt-12 max-w-6xl mx-auto">
        {/* Border */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={borderStyle}
        ></div>

        {/* Inner Content */}
        <div
          className="relative bg-[linear-gradient(90deg,#5F69A8,#616FB4,#657AC9,#6E8EEE,#80B3F6,#8FCDFF)] backdrop-blur-[15px] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 rounded-2xl p-5 sm:p-6"
          
        >
          {/* Avatars */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-3">
              <img
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="user1"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://randomuser.me/api/portraits/women/2.jpg"
                alt="user2"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://randomuser.me/api/portraits/men/3.jpg"
                alt="user3"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white"
              />
              
            </div>
            <p className="ml-6 md:ml-0 text-sm sm:text-lg text-white font-semibold">
             Only 5 Free Consultations left this month
            </p>
          </div>

          {/* Button */}
          <Link href={"tel:+918527665635"} className="w-full hover:scale-105 sm:w-auto flex items-center justify-center gap-2 text-white font-medium px-5 py-2 bg-[linear-gradient(to_bottom,_#382933,_#372935,_#372831)] transition cursor-pointer">
            Book My Free Call <FaArrowRight className="text-sm" />
          </Link>
        </div>
      </div>
       {/* Divider */}
      <div className="absolute bottom-0 left-0 w-full z-20">
        <div
          className="h-[2px] w-full max-w-[1000px] mx-auto"
          style={{
            background:
              "linear-gradient(to right, rgba(211,233,253,0.3), rgba(211,233,253,0))",
          }}
        ></div>
      </div>
    </section>
    <ContactFormModal showForm={showForm} setShowForm={setShowForm} />
    </>
  );
}
