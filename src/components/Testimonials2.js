'use client'; // if using Next.js 13+ app directory

import React from 'react';

const testimonials = [
  {
    id: 1,
    text: "Firm provided a cost-effective IT solution that transformed our lending business.",
    name: "Steve Mark",
    role: "Digital Operations",
    
  },
  {
    id: 2,
    text: "Firm's expertise in finance and data management helped us improve our backend operations.",
    name: "Kashish Sachdeva",
    role: "Founder & Leader",
    rotate: "rotate-5"
  },
  {
    id: 3,
    text: "Thanks to Firm's Build to Assist Digital Information Platforms, we've gained invaluable insights.",
    name: "Kenn Gallagher",
    role: "Founder & Leader",
    rotate: "-rotate-4"
  },
    {
    id: 4,
    text: "Thanks to Firm's Build to Assist Digital Information Platforms, we've gained invaluable insights.",
    name: "Kenn Gallagher",
    role: "Founder & Leader",
    rotate: "rotate-3"
  }
];

export default function TestimonialSection() {
  return (
    <div className="bg-[linear-gradient(to_bottom,_#382933,_#372935,_#372831)] backdrop-blur-[15px] px-2 pb-32 lg:px-16 lg:mt-32 xl:mt-0 testimonial-section h-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-white">
        
        {/* Left Section - Title */}
        <div className="sticky top-0 py-16">
          <div className="font-bold lg:leading-tight text-3xl md:text-6xl sticky top-1/4">
            What People are <br /> saying about us
          </div>
          
        </div>

        {/* Right Section - Testimonials */}
        <div className="lg:px-16 sticky ">
          {testimonials.map((item, index) => (
            <div
              key={item.id}
              className={`testimonial-card w-80 sm:w-5/6 md:w-auto mx-auto lg:py-10 lg:mx-0 text-white md:p-6 p-3 rounded-lg shadow-md border lg:mt-12 border-white bg-[linear-gradient(90deg,#5F69A8,#616FB4,#657AC9,#6E8EEE,#80B3F6,#8FCDFF)] backdrop-blur-[15px] sticky top-1/4 mt-10 ${
                item.rotate ? item.rotate : ''
              }`}
              style={{
                transition: 'transform 0.3s, z-index 0.3s',
              }}
            >
              <p className="text-white text-base">{item.text}</p>
              <div className="flex gap-14 mt-6">
                <div className="relative">
                  <p className="text-base">Rankinventiv</p>
                  <span className="absolute inset-y-0 left-26 w-0.5 bg-gray-100" aria-hidden="true"></span>
                </div>
                <div>
                  <p className="text-base">{item.name}</p>
                  <p className="text-base">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
