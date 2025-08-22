"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import ContactFormModal from "./ContactFormModal";


export default function AboutSection() {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
    <section className="relative min-h-screen text-white py-12 px-4 sm:px-8 md:px-16 lg:px-20 flex flex-col xl:flex-row items-center xl:items-start gap-10 overflow-hidden">
      {/* Responsive Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assests/images/Landing Page 02 A.jpg"
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

      {/* Left side - Image */}
      <div className="relative z-10 mt-12 xl:mt-40 w-full xl:w-1/2 flex justify-center xl:justify-start xl:ml-10 2xl:ml-40">
        {/* <Image
          src="/profile.png"
          alt="Profile photo"
          width={320}
          height={320}
          className="rounded-lg object-contain md:w-[420px] md:h-[420px]"
        /> */}
      </div>

      {/* Right side - Text */}
      <div className="relative z-10 w-full xl:w-1/2 mt-10 xl:mt-20 flex flex-col justify-center text-justify px-2 sm:px-6 xl:ml-10 xl:mr-20">
       <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center xl:text-left bg-clip-text">
  About US
</h2>

        <p className="mt-4 text-gray-300 leading-relaxed text-base">
        RankInventiv is a Noida-based Digital Marketing Agency with a strong presence in Varanasi. We work closely with startups, business owners, and founders to help them achieve real growth through SEO, Google Ads, Meta Ads, and website solutions. Our focus is on building strategies that save budget, avoid wasted efforts, and bring measurable results. </p>
        <p className="mt-4 text-gray-300 leading-relaxed text-base">
       What makes us different is our niche-based consulting approach. We assign expert consultants who understand your specific industry needs, ensuring you get reliable and targeted guidance. If you are spending high on marketing but not seeing results, simply share your reports with us. We analyse, find the root problem, and provide the right direction to improve ROI and long-term growth.  </p>

        {/* Button */}
        <div className="flex justify-center xl:justify-start items-center">
          <button
          onClick={() => setShowForm(true)}
            type="submit"
            className="w-36 sm:w-40 px-4 mt-8 sm:mt-10 py-3 sm:py-4 bg-gradient-to-r from-[#5F69A8] via-[#6E8EEE] to-[#8DCBFD] 
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
