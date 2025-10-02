"use client";
import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

import SocialTicker from "./Ticker";

const slides = [
    {
    title:
    (
      <>
         AI-Driven Digital Marketing to Maximize Leads and Conversions
      </>
    ),
    subheading: <>
    
    <span className="text-[#5ec2f4] font-bold ">Smarter Marketing, </span> Real Results
    </>,
    description: (
      <>
We focus on strategies that convert, not just generate traffic. Our team blends SEO, CRO, and AI-powered performance campaigns to drive leads, improve ROI, and accelerate growth. Experience smarter marketing designed to scale your business and amplify your digital impact 
      </>
    ),
    button: (
      <Link
        href="/contact-us"
        className="relative inline-flex items-center overflow-hidden group px-6 sm:px-8 py-2 sm:py-3 font-semibold text-white text-xl lg:text-base z-0"
      >
        <span className="relative z-10 flex items-center gap-2">
          Schedule Meeting
          <FaArrowRight className="text-lg" />
        </span>
        <span
          className="absolute inset-0 bg-gradient-to-r from-[#372935] via-black to-[#372935] scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-500 ease-out z-0"
          aria-hidden="true"
        ></span>
        <span
          className="absolute inset-0 bg-gradient-to-r from-[#5F69A8] via-[#6E8EEE] to-[#8DCBFD] z-[-1]"
          aria-hidden="true"
        ></span>
      </Link>
    ),
  },
  {
    title: "Scaling Brands with a Smarter Approach",
        subheading: <>
    
     Innovation That <span className="text-[#5ec2f4] font-bold "> Delivers ROI </span> 
    </>,
    description: (
      <>
        Welcome to <strong>Rankinventiv</strong>, We're not just an agency, we're
        your dedicated team for sustainable growth. We use AI-powered precision
        and an ROI-based approach to scale your brand and outperform the
        competition
      </>
    ),
    button: (
      <Link
        href="/contact-us"
        className="relative inline-flex items-center overflow-hidden group px-6 sm:px-8 py-2 sm:py-3 font-semibold text-white text-xl lg:text-base z-0"
      >
        <span className="relative z-10 flex items-center gap-2">
          Get a Free Strategy Call
          <FaArrowRight className="text-lg" />
        </span>
        <span
          className="absolute inset-0 bg-gradient-to-r from-[#372935] via-black to-[#372935] scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-500 ease-out z-0"
          aria-hidden="true"
        ></span>
        <span
          className="absolute inset-0 bg-gradient-to-r from-[#5F69A8] via-[#6E8EEE] to-[#8DCBFD] z-[-1]"
          aria-hidden="true"
        ></span>
      </Link>
    ),
  },

];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // fade out
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setFade(true); // fade in
      }, 500); // match transition duration
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section
      className="relative  h-[740px] pt-16 lg:pt-0 flex items-center transition-all duration-700 ease-in-out"
    >
        <Image
    src="/assets/images/home-page-image/herosection-bg-image.png"
    alt="Hero Background"
    fill
    className="object-cover object-center z-0"
    priority
  />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

<div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
  <div className="flex flex-col lg:flex-row items-center justify-center gap-10 pt-4 lg:pb-14">
    {/* Left Content */}
    <div
      className={`text-white text-center pb-40 lg:pb-16 transform transition-all duration-500 ${
        fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
    >
       {/* Subheading Badge */}
    <div className="inline-block bg-black/30 px-4 py-1 mt-12 md:mt-0 mb-4 rounded-full text-base tracking-wider text-white">
               {slide.subheading || "Featured Project"} {/* <-- You can replace this text or make it dynamic */}
  </div>

      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight whitespace-normal sm:whitespace-normal">
        {slide.title}
      </h1>

      <p className="text-lg sm:text-xl lg:text-lg mb-4 max-w-full sm:max-w-2xl lg:max-w-3xl mx-auto px-2 lg:px-0">
        {slide.description}
      </p>

      <div className="mt-6">{slide.button}</div>
    </div>
  </div>
</div>



      <div className="absolute  bottom-0 left-0 w-full z-20">

        <SocialTicker />
      </div>
    </section>
  );
};

export default HeroSection;
