"use client";
import React, { useState, useEffect, useRef } from "react";
import { ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      title: "Testimonial 1",
      name: "RAHUL",
      text: "Consulting gave me a detailed understanding of digital marketing services and helped me save costs.",
      icon: ShieldCheck,
    },
    {
      title: "Testimonial 2",
      name: "SOUMYA",
      text: "I gained complete knowledge about Google My Business, which became a powerful tool to reach local customers and reduce website expenses.",
      icon: ShieldCheck,
    },
    {
      title: "Testimonial 3",
      name: "VISHAL",
      text: "Earlier, I spent too much on SEO, but with proper consulting I learned to target the right audience and use my budget wisely.",
      icon: ShieldCheck,
    },
    {
      title: "Testimonial 4",
      name: "SARANSH",
      text: "The guidance also saved me from wasting money on ads without knowing the right strategies.",
      icon: ShieldCheck,
    },
  ];

  const slidesCount = testimonials.length;
  const [current, setCurrent] = useState(1); // Start at 1 because of clone at index 0
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  // Create cloned slides for seamless looping
  const slides = [
    testimonials[slidesCount - 1], // clone last at beginning
    ...testimonials,
    testimonials[0], // clone first at end
  ];

  const sliderRef = useRef(null);

  const nextSlide = () => {
    setCurrent((prev) => prev + 1);
  };

  const prevSlide = () => {
    setCurrent((prev) => prev - 1);
  };

  // Handle jump after transition ends
  const handleTransitionEnd = () => {
    if (current === 0) {
      // jumped to clone of last, reset to real last
      setTransitionEnabled(false);
      setCurrent(slidesCount);
    }
    if (current === slidesCount + 1) {
      // jumped to clone of first, reset to real first
      setTransitionEnabled(false);
      setCurrent(1);
    }
  };

  useEffect(() => {
    if (!transitionEnabled) {
      // re-enable transition after jump
      setTimeout(() => setTransitionEnabled(true), 50);
    }
  }, [transitionEnabled]);

  return (
    <section
      id="clients-testimonials"
      className="relative md:min-h-screen h-screen px-6 pt-22 md:pt-30 text-white flex flex-col justify-between overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #382933, #372935, #372831)",
      }}
    >
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-8 md:mb-0">
        <span className="text-4xl font-bold bg-clip-text">
          What Our Clients Say ?
        </span>
        <p className="text-gray-300 text-xl mt-6">
          Stories of cost-saving, smarter strategies, and business growth
          through Consulting
        </p>
      </div>

      {/* Slider */}
   <div className="overflow-hidden max-w-2xl mx-auto mb-25 relative">
        <div
          ref={sliderRef}
          className={`flex ${transitionEnabled ? "transition-transform duration-500 ease-in-out" : ""}`}
          style={{
            width: `${slides.length * 100}%`,
            transform: `translateX(-${current * (100 / slides.length)}%)`,
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {slides.map((testimonial, index) => {
            const Icon = testimonial.icon;
            return (
              <div
                key={index}
                className="flex-shrink-0 w-full px-4"
                style={{ width: `${100 / slides.length}%` }}
              >
           <div
  className="backdrop-blur-md shadow-lg hover:scale-[1.01] transition-transform duration-300 rounded-xl
             p-4 sm:p-6 md:p-10 relative min-h-[200px] sm:min-h-[250px] md:min-h-[300px]"
  style={{
    background:
      "linear-gradient(to right, rgba(55,42,51,0.6), rgba(58,45,56,0.6), rgba(59,48,60,0.6), rgba(62,51,66,0.6))",
  }}
>
  {/* Border */}
  <div
    className="absolute inset-0 rounded-xl pointer-events-none"
    style={{
      padding: "2px",
      background:
        "linear-gradient(to top, rgba(211,233,253,0.8), rgba(211,233,253,0) 70%)",
      WebkitMask:
        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
      WebkitMaskComposite: "xor",
      maskComposite: "exclude",
    }}
  ></div>

  {/* Icon */}
  <div className="absolute top-3 left-4 sm:top-4 sm:left-10">
    <Icon
      size={30}       // small on mobile
      className="sm:text-[36px] md:text-[40px]" // scales up for larger screens
      strokeWidth={0.9}
      style={{ stroke: "url(#icon-gradient)" }}
    />
    <svg width="0" height="0">
      <defs>
        <linearGradient id="icon-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#D3E9FD" />
          <stop offset="100%" stopColor="#8FB3D9" />
        </linearGradient>
      </defs>
    </svg>
  </div>

  {/* Content */}
  <div className="pt-10 sm:pt-12 space-y-2 sm:space-y-4 md:space-y-6">
    <h6 className="text-[#D3E9FD] tracking-widest text-sm sm:text-base md:text-lg">
      {testimonial.title}
    </h6>
    <span className="text-sm sm:text-base md:text-lg">{testimonial.name}</span>
    <p className="text-gray-200 text-xs sm:text-sm md:text-base">
      {testimonial.text}
    </p>
  </div>
</div>

              </div>
            );
          })}
        </div>
      </div>



      {/* Prev Button */}
      <div className="absolute lg:left-40 lg:top-1/2 top-[85%] left-1/4 transform -translate-y-1/2 z-40">
        <button
          onClick={prevSlide}
          className="p-4 rounded-full hover:scale-105 transition cursor-pointer"
          style={{
            background:
              "linear-gradient(90deg, #5F69A8, #616FB4, #657AC9, #6E8EEE, #80B3F6, #8FCDFF)",
          }}
        >
          <ChevronLeft size={28} />
        </button>
      </div>

      {/* Next Button */}
      <div className="absolute lg:right-40 lg:top-1/2 top-[85%] right-1/4 transform -translate-y-1/2 z-40">
        <button
          onClick={nextSlide}
          className="p-4 rounded-full hover:scale-105 transition cursor-pointer"
          style={{
            background:
              "linear-gradient(90deg, #5F69A8, #616FB4, #657AC9, #6E8EEE, #80B3F6, #8FCDFF)",
          }}
        >
          <ChevronRight size={28} color="white" />
        </button>
      </div>

      {/* Bottom Divider */}
      <div
        className="mt-10 md:mt-0 h-[2px] w-[1000px] mx-auto"
        style={{
          background:
            "linear-gradient(to right, rgba(211,233,253,0.3), rgba(211,233,253,0))",
        }}
      ></div>
    </section>
  );
}
