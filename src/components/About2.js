"use client";
import React from 'react';
import Image from 'next/image';

export default function About2() {
  return (
    <>
    <section className="relative w-full min-h-screen flex flex-col justify-center py-16 px-4 sm:px-8 md:px-16 lg:px-20 "
     style={{
          background: "linear-gradient(to bottom, #382933, #372935, #372831)",
        }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-6">
        
     {/* Left Side - Blob Image with Gradient Background Shape */}
<div className="relative w-full max-w-[600px] h-[400px] mx-auto">

{/* 🎨 Solid Blob Background (Original Color, No Gradient or Blur) */}
<div className="absolute -top-10 -left-6 w-[580px] h-[450px] z-0 rotate-[12deg]">
  <div className="w-full h-full bg-[#5F69A8] rounded-[50%]"></div>
</div>



  {/* SVG Blob Clipping Path */}
  <svg width="0" height="0">
    <defs>
      <clipPath id="blobClip" clipPathUnits="objectBoundingBox">
        <path d="M0.3 0.05 C0.75 0 1 0.4 0.85 0.7 C0.75 0.9 0.4 1 0.15 0.85 C-0.05 0.7 0 0.25 0.3 0.05 Z" />
      </clipPath>
    </defs>
  </svg>

  {/* 🖼️ Main Image with Blob Clip */}
  <div
    className="w-full h-full border-8 border-orange-300 overflow-hidden relative z-10"
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
  <div className="absolute top-4 left-4  bg-[linear-gradient(to_bottom,_#382933,_#372935,_#372831)] backdrop-blur-[15px] rounded-full px-6 py-4 shadow-lg text-center z-20">
    <p className="text-white font-bold text-xl">25+</p>
    <p className="text-xs text-gray-100">Years of Experience</p>
  </div>
</div>


        {/* Right Side - Text Content */}
        <div className="space-y-2 max-w-xl mx-auto mt-16">
          <h4 className="text-xs md:text-sm text-gray-100 font-semibold uppercase tracking-widest">
            WHO WE ARE
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Real people delivering real results.
          </h2>
          <p className="text-gray-100 text-base md:text-base leading-relaxed text-justify">
            Phasellus arcu consequat at ligula facilisis habitasse pretium
            sollicitudin maecenas. Orci purus hendrerit vulputate porttitor justo.
            Convallis eros amet quam tristique malesuada.
             Phasellus arcu consequat at ligula facilisis habitasse pretium
            sollicitudin maecenas. Orci purus hendrerit vulputate porttitor justo.
            Convallis eros amet quam tristique malesuada.
             Phasellus arcu consequat at ligula facilisis habitasse pretium
            sollicitudin maecenas. Orci purus hendrerit vulputate porttitor justo.
            Convallis eros amet quam tristique malesuada.
          </p>
 <p className="text-gray-100 text-base md:text-base leading-relaxed text-justify">
            Phasellus arcu consequat at ligula facilisis habitasse pretium
            sollicitudin maecenas. Orci purus hendrerit vulputate porttitor justo.
            Convallis eros amet quam tristique malesuada.
             Phasellus arcu consequat at ligula facilisis habitasse pretium
            sollicitudin maecenas. Orci purus hendrerit vulputate porttitor justo.
            Convallis eros amet quam tristique malesuada.
          
          </p>
          {/* Services */}
          {/* <div className="space-y-5">
            <div className="flex items-start gap-5">
              <div className="text-orange-600 text-3xl">📈</div>
              <div>
                <h5 className="font-semibold text-lg text-white">Marketing Agency</h5>
                <p className="text-gray-100 text-sm md:text-base">
                  Lorem ipsum dolor sit amet consectetur facilisi quam elit
                </p>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <div className="text-orange-600 text-3xl">💻</div>
              <div>
                <h5 className="font-semibold text-lg text-white">SEO Services</h5>
                <p className="text-gray-100 text-sm md:text-base">
                  Lorem ipsum dolor sit amet consectetur facilisi quam elit
                </p>
              </div>
            </div>
             <div className="flex items-start gap-5">
              <div className="text-orange-600 text-3xl">💻</div>
              <div>
                <h5 className="font-semibold text-lg text-white">SEO Services</h5>
                <p className="text-gray-100 text-sm md:text-base">
                  Lorem ipsum dolor sit amet consectetur facilisi quam elit
                </p>
              </div>
            </div>
          </div> */}
        </div>

      </div>
    </section>
    </>
  );
}
