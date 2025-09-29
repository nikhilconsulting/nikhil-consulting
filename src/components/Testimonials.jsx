"use client";
import React, { useState, useEffect } from "react";

const testimonials = [
  { name: "RAHUL", text: "Consulting gave me a detailed understanding of digital marketing services and helped me save costs.", image: "/assets/images/consulting-page-images/small-images-of-clients-4.png" },
  { name: "SOUMYA", text: "I gained complete knowledge about Google My Business, which became a powerful tool to reach local customers and reduce website expenses.", image: "/assets/images/consulting-page-images/small-images-of-clients-7.png" },
  { name: "VISHAL", text: "Earlier, I spent too much on SEO, but with proper consulting I learned to target the right audience and use my budget wisely.", image: "/assets/images/consulting-page-images/small-images-of-clients-6.png" },
  { name: "SARANSH", text: "The guidance also saved me from wasting money on ads without knowing the right strategies.", image: "/assets/images/consulting-page-images/small-images-of-clients-3.png" },
];

function Star() {
  return (
    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.286 3.974c.3.922-.755 1.688-1.54 1.118l-3.39-2.462a1 1 0 00-1.175 0l-3.39 2.462c-.784.57-1.838-.196-1.54-1.118l1.286-3.974a1 1 0 00-.364-1.118L2.045 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z"/>
    </svg>
  );
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto increment active index every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full relative min-h-screen bg-[linear-gradient(to_bottom,_#382933,_#372935,_#372831)] py-8 px-4 sm:px-6 md:px-10 lg:px-20 flex items-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Text */}
        <div>
          <span className="text-5xl sm:text-5xl font-bold mb-3 text-gray-100 leading-snug block">
            What Our <br /><span className="text-gray-100">Clients Say !</span>
          </span>
          <p className="text-gray-200 text-lg sm:text-xl mb-5 max-w-md">
            Stories of cost-saving, smarter strategies, and business growth through Consulting
          </p>
        </div>

        {/* Right Testimonial Cards */}
        <div className="flex flex-col gap-4">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`group relative flex items-start shadow-md text-white p-3 sm:p-4 bg-[linear-gradient(90deg,#5F69A8,#616FB4,#657AC9,#6E8EEE,#80B3F6,#8FCDFF)] transition-transform duration-500 border-l-4 border-gray-100 ${i % 2 === 0 ? 'self-start' : 'self-end'}`}
              style={{
                maxWidth: "80%",
                transform: activeIndex === i ? "scale(1.05)" : "scale(1)",
              }}
            >
              <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full object-cover mr-3"/>
              <div>
                <span className="font-semibold text-gray-100 text-xl">{t.name}</span>
                <p className="text-gray-200 text-base sm:text-base mb-1">{t.text}</p>
                <div className="flex space-x-1">{[...Array(5)].map((_, index) => (<Star key={index} />))}</div>
              </div>
              <div className="absolute top-1 right-3 text-gray-200 text-7xl">”</div>
            </div>
          ))}
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
