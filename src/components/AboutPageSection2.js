'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
export default function AboutPageSection2() {
  return (
   <section
  className="relative w-full py-12 px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden flex flex-col justify-center bg-[linear-gradient(125deg,_#382933,_#372935,_#372831)]"
>

    <div className=" absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-[#5F69A8] rotate-45 origin-bottom-right z-0"></div>
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 z-1">
        {/* Left Side - Blob Image */}
       <div className="relative w-full max-w-[500px] aspect-[4/3] mx-auto">

          {/* 💠 Blob Background */}
          <div className="absolute inset-0 z-0 -rotate-[15deg] scale-110 sm:scale-100">
            <div className="w-full h-full bg-[#5F69A8] rounded-[50%]"></div>
          </div>

          {/* 🔷 SVG Blob ClipPath */}
          <svg width="0" height="0">
            <defs>
              <clipPath id="blobClip" clipPathUnits="objectBoundingBox">
                <path d="M0.3 0.05 C0.75 0 1 0.4 0.85 0.7 C0.75 0.9 0.4 1 0.15 0.85 C-0.05 0.7 0 0.25 0.3 0.05 Z" />
              </clipPath>
            </defs>
          </svg>

          {/* 🖼️ Image Inside Blob */}
          <div
            className="w-full h-full overflow-hidden relative z-10"
            style={{ clipPath: 'url(#blobClip)' }}
          >
            <Image
              src="/assets/images/about-us-page-image/About us 2.png"
              alt="Team discussion"
              fill
              quality={100}
              className="object-cover"
              priority
            />
          </div>

          {/* 🏷️ Label Box */}
          <div className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-gray-100 rounded-full px-4 py-2 sm:px-6 sm:py-3 shadow-lg text-center z-20">
            <p className="text-black font-bold text-sm sm:text-lg">25+</p>
            <p className="text-[10px] sm:text-xs text-black">Years of Experience</p>
          </div>
        </div>

        {/* Right Side - Text Content Wrapped in Black Card */}
<div className="border border-[#8DCBFD] bg-[linear-gradient(125deg,_#382933,_#372935,_#372831)] p-4 lg:p-12 shadow-lg max-w-3xl mx-auto lg:mx-[-30] mt-10 lg:mt-0">

  <span className="text-4xl text-gray-100 font-semibold">
    Who We Are ?
  </span>

<p className="text-white text-lg lg:text-base leading-relaxed mt-4 text-justify">
    At Rankinventiv, we help businesses transform their growth trajectory with tailored digital marketing solutions. Based in Noida and expanding in Varanasi, we merge local insights with proven strategies to deliver measurable results for startups, small enterprises, and established brands. Our team of specialists—seasoned in SEO, social media marketing, branding, paid advertising, and business consulting—crafts campaigns that align precisely with your audience, goals, and market landscape.
  </p>
  
<p className="text-white text-lg lg:text-base leading-relaxed mt-4 text-justify">
   We believe growth is built on understanding, not assumptions. That’s why every strategy we design focuses on attracting the right customers, fostering engagement, and converting interactions into lasting relationships. While our primary focus is delivering high-impact digital marketing services, we also offer consulting to help businesses strengthen visibility, streamline operations, and sustain momentum in competitive markets.
  </p>
  {/* 🔘 View Services Button */}
 <div>
  <Link
    href="/services"
    className="relative bg-[linear-gradient(90deg,#5F69A8,#616FB4,#657AC9,#6E8EEE,#80B3F6,#8FCDFF)] text-white inline-flex items-center overflow-hidden group px-6 py-2 mt-4 text-lg font-semibold cursor-pointer transition"
  >
    <span className="relative z-10 flex items-center gap-2">
      View Services
    </span>
    <span
      className="absolute inset-0 bg-gradient-to-r from-[#372935] via-black to-[#372935] scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-500 ease-out z-0"
      aria-hidden="true"
    ></span>
  </Link>
</div>

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
  );
}
