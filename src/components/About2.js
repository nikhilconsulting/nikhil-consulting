'use client';
import React from 'react';
import Image from 'next/image';

export default function About2() {
  return (
    <section
      className="relative w-full min-h-screen overflow-x-hidden flex flex-col justify-center py-12 px-4 sm:px-8 md:px-12 lg:px-20"
      style={{
        background: 'linear-gradient(to bottom, #382933, #372935, #372831)',
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
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
            className="w-full h-full border-4 sm:border-6 border-orange-300 overflow-hidden relative z-10"
            style={{ clipPath: 'url(#blobClip)' }}
          >
            <Image
              src="/assets/images/WhyChooseUs.png"
              alt="Team discussion"
              fill
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

        {/* Right Side - Text Content */}
        <div className="space-y-6 max-w-xl mx-auto lg:mx-0 px-2 mt-10 lg:mt-0">
          <h4 className="text-xs sm:text-sm text-gray-100 font-semibold uppercase tracking-widest">
            WHO WE ARE
          </h4>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
            Real people delivering real results.
          </h2>
          <p className="text-gray-100 text-sm sm:text-base leading-relaxed text-justify">
            Phasellus arcu consequat at ligula facilisis habitasse pretium sollicitudin maecenas.
            Orci purus hendrerit vulputate porttitor justo. Convallis eros amet quam tristique
            malesuada.
            Phasellus arcu consequat at ligula facilisis habitasse pretium sollicitudin maecenas.
            Orci purus hendrerit vulputate porttitor justo. Convallis eros amet quam tristique
            malesuada.
            Phasellus arcu consequat at ligula facilisis habitasse pretium sollicitudin maecenas.
            Orci purus hendrerit vulputate porttitor justo. Convallis eros amet quam tristique
            malesuada.
          </p>
          <p className="text-gray-100 text-sm sm:text-base leading-relaxed text-justify">
            Phasellus arcu consequat at ligula facilisis habitasse pretium sollicitudin maecenas.
            Convallis eros amet quam tristique malesuada.
            Phasellus arcu consequat at ligula facilisis habitasse pretium sollicitudin maecenas.
            Orci purus hendrerit vulputate porttitor justo. Convallis eros amet quam tristique
            malesuada.
            Phasellus arcu consequat at ligula facilisis habitasse pretium sollicitudin maecenas.
            Orci purus hendrerit vulputate porttitor justo. Convallis eros amet quam tristique
            malesuada.
          </p>
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
        </div>  {/* Divider */}
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
