"use client";
import React, { useState } from "react";
import {  ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      title: "Testimonial 1",
      name: "RAHUL",
      text: "Consulting gave me a detailed understanding of digital marketing services and helped me save costs.",
      icon:  ShieldCheck,
    },
    {
      title: "Testimonial 2",
      name: "SOUMYA",
      text: "I gained complete knowledge about Google My Business, which became a powerful tool to reach local customers and reduce website expenses.",
      icon:  ShieldCheck,
    },
    {
      title: "Testimonial 3",
      name: "VISHAL",
      text: "Earlier, I spent too much on SEO, but with proper consulting I learned to target the right audience and use my budget wisely.",
      icon:  ShieldCheck,
    },
    {
      title: "Testimonial 4",
      name: "SARANSH",
      text: "The guidance also saved me from wasting money on ads without knowing the right strategies.",
      icon:  ShieldCheck,
    },
  ];

  // We show 2 testimonials per slide, so total slides = total testimonials / 2
  const slidesCount = Math.ceil(testimonials.length / 2);
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slidesCount - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slidesCount - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="clients-testimonials"
      className="relative min-h-screen px-6 pt-16 md:pt-30 text-white flex flex-col justify-between relative overflow-x-hidden"
      style={{
        background: "linear-gradient(to bottom, #382933, #372935, #372831)",
      }}
    >
      {/* Heading + Description */}
      <div className="max-w-4xl mx-auto text-center mb-8  md:mb-0">
        <span className="text-4xl font-bold bg-clip-text">
          What Our Clients Say ?
        </span>

        <p className="text-gray-300 text-xl mt-6">
          Stories of cost-saving, smarter strategies, and business growth through Consulting
        </p>
      </div>

      {/* Slider Container */}
      <div className="overflow-hidden max-w-4xl mx-auto mb-25 relative">
    <div
  className="flex transition-transform duration-500 ease-in-out"
  style={{
    width: `${slidesCount * 100}%`,
    transform: `translateX(-${current * (100 / slidesCount)}%)`,  // Important!
  }}
>
  {Array.from({ length: slidesCount }).map((_, slideIndex) => (
    <div
      key={slideIndex}
      className="flex gap-6 px-2"
      style={{ width: `${100 / slidesCount}%` }} // <-- Set width here
    >
              {[0, 1].map((idx) => {
                const testimonial = testimonials[slideIndex * 2 + idx];
                if (!testimonial) return null;
                const Icon = testimonial.icon;
                return (
                  <div
                    key={idx}
                    className="flex-1 backdrop-blur-md shadow-lg hover:scale-[1.01] transition-transform duration-300 rounded-xl p-6 relative xl:h-[300px]"
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
                    <div className="absolute top-4 left-4">
                      <Icon
                        size={40}
                        strokeWidth={0.9}
                        style={{ stroke: "url(#icon-gradient)" }}
                      />
                      <svg width="0" height="0">
                        <defs>
                          <linearGradient
                            id="icon-gradient"
                            x1="0"
                            y1="0"
                            x2="1"
                            y2="1"
                          >
                            <stop offset="0%" stopColor="#D3E9FD" />
                            <stop offset="100%" stopColor="#8FB3D9" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>

                    {/* Content */}
                   <div className="pt-12 space-y-4">
  <h6 className="text-[#D3E9FD] tracking-widest text-base">{testimonial.title}</h6>
  <span className="text-md">{testimonial.name}</span>
  <p className="text-gray-200">{testimonial.text}</p>
</div>

                  </div>
                );
              })}
            </div>
          ))}
        </div>

      
 
      </div>
    {/* Prev Button - hidden on small screens, positioned left */}
<div className=" absolute left-40 top-1/2 transform -translate-y-1/2 z-40">
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

{/* Next Button - hidden on small screens, positioned right */}
<div className=" absolute right-40 top-1/2 transform -translate-y-1/2 z-40">
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
      {/* Bottom divider */}
      <div
        className="mt-10 md:mt-0 h-[2px] w-[1000px] mx-auto"
        style={{
          background: "linear-gradient(to right, rgba(211,233,253,0.3), rgba(211,233,253,0))",
        }}
      ></div>
    </section>
  );
}
