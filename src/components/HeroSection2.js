"use client";
import { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import SocialTicker from "./Ticker";

const slides = [
  {
    title: "Scaling Brands with a Smarter Approach",
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
        href="/solutions"
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
  {
    title:
    (
      <>
         The Future of <br /> Marketing is Here
      </>
    ),
    description: (
      <>
        Harness the power of AI to transform your business. As a recognized
        industry leader by Deloitte and Clutch, we craft intelligent strategies
        that anticipate your needs and deliver unmatched market leadership
      </>
    ),
    button: (
      <Link
        href="/solutions"
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
    }, 12000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section
      className="relative bg-cover bg-center min-h-screen py-20 flex items-center transition-all duration-700 ease-in-out"
      style={{
        backgroundImage:
          "url('/assets/images/home-page-image/WebsiteHomePage.png')", // FIXED IMAGE
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 pt-0 pb-6">
          {/* Left Content */}
          <div
            className={`w-full lg:w-1/2 text-white text-center lg:text-left pb-40 lg:pb-16 transform transition-all duration-500 ${
              fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            <h1 className="text-3xl lg:text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              {slide.title}
            </h1>

            <p className="text-xl lg:text-lg mb-4 lg:max-w-lg max-w-xl mx-auto lg:mx-0">
              {slide.description}
            </p>

            <div className="mt-6" >{slide.button}</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 lg:bottom-0 left-1/2 -translate-x-1/2 w-full max-w-8xl px-4 z-20 ">
        <SocialTicker />
      </div>
    </section>
  );
};

export default HeroSection;
