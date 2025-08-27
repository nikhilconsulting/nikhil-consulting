"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import ContactFormModal from "./ContactFormModal";


export default function AboutSection() {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
    <section id="about-us" className="relative min-h-screen text-white py-12 px-4 sm:px-8 md:px-16 lg:px-20 flex flex-col xl:flex-row items-center xl:items-start gap-10 overflow-hidden">
      {/* Responsive Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assests/images/2banner.png"
          alt="Background"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
      </div>

     {/* Overlay */}
<div
  className="
    absolute inset-0 -z-0
    bg-gradient-to-r from-[#362D39]/40 to-[#362D39]/90  /* default (mobile: more dim) */
    md:from-[#362D39]/60 md:to-[#362D39]/95            /* stronger dim from 800px+ */
    xl:from-[#362D39]/5 xl:to-[#362D39]/100            /* lighter overlay again on xl+ */
  "
></div>

   

      {/* Right side - Text */}
      <div className="relative z-10 w-full xl:w-1/2  mt-10 xl:mt-20 flex flex-col justify-center text-justify px-2 sm:px-6 xl:mr-10 xl:ml-auto">

       <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center xl:text-left bg-clip-text">
  About US
</h2>

        <p className="mt-4 text-gray-300 leading-relaxed text-base">
      RankInventiv is a Noida-based Digital Marketing Agency with a strong presence in Varanasi. We work with startups, business owners, and founders to achieve measurable growth through SEO, Google Ads, Meta Ads, and website solutions. Our strategies are built to maximize ROI, save budgets, and eliminate wasted marketing efforts. Every campaign is designed with precision, focusing on sustainable and long-term business growth rather than short-term vanity results.</p>  <p className="mt-4 text-gray-300 leading-relaxed text-base">
 What makes us truly different is our niche-based digital marketing consulting approach. Instead of offering one-size-fits-all solutions, we assign industry-specific experts who understand your unique business challenges. This ensures you receive accurate, targeted, and actionable guidance. If you’re spending high on marketing but not getting results, share your reports with us. We’ll analyze them, identify the root problems, and provide the right direction to optimize performance and drive real growth.
</p>
        {/* Button */}
        <div className="flex justify-center xl:justify-start items-center ">
          <button
          onClick={() => setShowForm(true)}
            type="submit"
            className="w-36 transition hover:scale-105 sm:w-40 px-4 sm:mt-10 py-3 sm:py-4 bg-gradient-to-r from-[#5F69A8] via-[#6E8EEE] to-[#8DCBFD] 
                       text-white font-medium text-[10px] sm:text-xs cursor-pointer tracking-[2px] sm:tracking-[2.5px] uppercase"
          >
            Know More 
          </button>
        </div>
      </div>
      
    </section>
    <ContactFormModal showForm={showForm} setShowForm={setShowForm} />
</>
  );
}
