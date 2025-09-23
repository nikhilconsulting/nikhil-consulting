"use client";
import { useState, useEffect } from "react";
import { FaArrowRight } from 'react-icons/fa';

import Link from "next/link";
import SocialTicker from "./Ticker";

const slides = [
  {
    title: "Scaling Brands with a Smarter Approach",
    description: (
      <>
        Welcome to <strong>Rankinventiv</strong>, We're not just an agency, we're your dedicated team for sustainable growth. We use AI-powered precision and an ROI-based approach to scale your brand and outperform the competition
      </>
    ),
    imageUrl: "/assets/images/home-page-image/WebsiteHomePage.png",
    button: (
    <Link
      href="/solutions"
      className="relative inline-flex items-center overflow-hidden group px-6 sm:px-8 py-2 sm:py-3 font-semibold text-white text-xl lg:text-base z-0"
    >
         {/* Button Content */}
      <span className="relative z-10 flex items-center gap-2">
        Get a Free Strategy Call
        <FaArrowRight className="text-lg" />
      </span>

          {/* Hover background (animated) */}
      <span
        className="absolute inset-0 bg-gradient-to-r from-[#372935] via-black to-[#372935] scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-500 ease-out z-0"
        aria-hidden="true"
      ></span>

      {/* Default background */}
      <span
        className="absolute inset-0 bg-gradient-to-r from-[#5F69A8] via-[#6E8EEE] to-[#8DCBFD] z-[-1]"
        aria-hidden="true"
      ></span>
      </Link>
    ),
  },
  {
    title: "The Future of Marketing is Here",
    description: (
      <>
        Harness the power of AI to transform your business. As a recognized industry leader by Deloitte and Clutch, we craft intelligent strategies that anticipate your needs and deliver unmatched market leadership
      </>
    ),
    imageUrl: "/assets/images/banner.jpg",
    button: (
       <Link
      href="/solutions"
      className="relative inline-flex items-center overflow-hidden group px-6 sm:px-8 py-2 sm:py-3 font-semibold text-white text-xl lg:text-base z-0"
    >
      {/* Button Content */}
      <span className="relative z-10 flex items-center gap-2">
        Schedule Meeting
        <FaArrowRight className="text-lg" />
      </span>

      {/* Hover background (animated) */}
      <span
        className="absolute inset-0 bg-gradient-to-r from-[#372935] via-black to-[#372935] scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-500 ease-out z-0"
        aria-hidden="true"
      ></span>

      {/* Default background */}
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
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setAnimate(true);
      }, 100);
    }, 12000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section
      className="relative bg-cover bg-center min-h-screen flex items-center transition-all duration-700 ease-in-out"
      style={{ backgroundImage: `url('${slide.imageUrl}')` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
       <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 pt-0 pb-8">
  {/* Left Content */}
          <div className="w-full lg:w-1/2 text-white text-center lg:text-left pb-40 lg:pb-16">
            <h1
              className={`text-3xl lg:text-4xl md:text-5xl font-extrabold mb-6 leading-tight opacity-0 ${
                animate ? "animate-slide-in-left" : ""
              }`}
              style={{ animationDelay: "0.2s" }}
            >
              {slide.title}
            </h1>

            <p
              className={`text-xl lg:text-lg mb-8 max-w-xl mx-auto lg:mx-0 opacity-0 ${
                animate ? "animate-slide-in-left" : ""
              }`}
              style={{ animationDelay: "0.5s" }}
            >
              {slide.description}
            </p>

            <div
              className={`opacity-0 ${animate ? "animate-slide-in-left" : ""}`}
              style={{ animationDelay: "0.8s" }}
            >
              {slide.button}
            </div>
          </div>


        </div>
      </div>
       <div className="absolute bottom-20 lg:bottom-0 left-1/2 -translate-x-1/2 w-full max-w-8xl px-4 z-20">
        <SocialTicker />
      </div>
    </section>
  );
};

export default HeroSection;
