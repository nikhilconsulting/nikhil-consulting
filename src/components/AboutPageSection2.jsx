'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
  import '@fortawesome/fontawesome-free/css/all.min.css';
export default function AboutPageSection2() {
  return (
   <section
  className="relative w-full py-12 px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden flex flex-col justify-center bg-[linear-gradient(125deg,_#382933,_#372935,_#372831)]"
>

    <div className=" absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-[#5F69A8] rotate-45 origin-bottom-right z-0"></div>
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 z-1">
        {/* Left Side - Blob Image */}
     <div className="relative w-full max-w-[500px] aspect-square mx-auto">
  {/* Frame Shadow/Layer */}
  <div className="absolute bottom-6 right-6 w-full h-full bg-[linear-gradient(90deg,_#000000,_#5F69A8)] z-0 shadow-2xl"></div>

  {/* Main Frame */}
  <div className="relative w-full h-full  border-[6px] border-[#5F69A8]  z-10 ">
    <div className="relative w-full h-full border-[3px] border-[#000000] overflow-hidden">
      <Image
        src="/assets/images/about-us-page-image/who-we-are.png"
        alt="Who We Are"
        fill
        className="object-cover"
        priority
      />
    </div>
  </div>

  {/* Optional Tag/Label */}
  <div className="absolute top-0 right-3 bg-white text-black px-4 py-3 text-xl font-semibold shadow-md rounded-full z-20">
    25+ Years
  </div>
</div>


        {/* Right Side - Text Content Wrapped in Black Card */}
<div className="border border-[#8DCBFD] bg-[linear-gradient(125deg,_#382933,_#372935,_#372831)] p-4 lg:p-6 shadow-lg max-w-3xl mx-auto lg:mx-[-30] mt-10 lg:mt-0">

  <span className="text-4xl text-gray-100 font-semibold">
    Who We Are ?
  </span>

<p className="text-white text-lg lg:text-base leading-relaxed mt-4 text-justify">
    At Rankinventiv, we help businesses transform their growth trajectory with tailored digital marketing solutions. Based in Noida and expanding in Varanasi, we merge local insights with proven strategies to deliver measurable results for startups, small enterprises, and established brands. Our team of specialists—seasoned in SEO, social media marketing, branding, paid advertising, and business consulting—crafts campaigns that align precisely with your audience, goals, and market landscape.
  </p>
  
<p className="text-white text-lg lg:text-base leading-relaxed mt-4 text-justify">
   We believe growth is built on understanding, not assumptions. That’s why every strategy we design focuses on attracting the right customers, fostering engagement, and converting interactions into lasting relationships. While our primary focus is delivering high-impact digital marketing services, we also offer consulting to help businesses strengthen visibility, streamline operations, and sustain momentum in competitive markets.
  </p>
            <ul className="mt-4 mb-2 grid md:grid-cols-2 gap-2 md:text-base text-lg  font-semibold text-gray-200  list-inside whitespace-nowrap">
            <li><i className="fas fa-check text-[#8DCBFD] mr-2 mt-1" /> Local & Global Presence</li>
            <li><i className="fas fa-check text-[#8DCBFD] mr-2 mt-1" /> Expert-Led Team</li>
            <li><i className="fas fa-check text-[#8DCBFD] mr-2 mt-1" /> Sector-Wide Consulting</li>
            <li><i className="fas fa-check text-[#8DCBFD] mr-2 mt-1" /> Sustainable Growth</li>
          </ul>
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
