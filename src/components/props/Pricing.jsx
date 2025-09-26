"use client";
import React from "react";




export default function PricingSection({
  title,
  plans,
  backgroundImage
}) {
  return (
   <div className="relative bg-black/10 min-h-screen py-12 px-4 font-sans flex flex-col items-center justify-center">
  {/* Background Image using <img> */}
  {backgroundImage && (
    <img
      src={"/assets/images/pricing-section-image/pricing-background-image.png"}
      alt="Background"
      className="absolute inset-0 w-full h-full object-cover blur-sm -z-10"
    />
  )}


      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center w-full pb-6">
        <span className="text-5xl font-bold text-white tracking-tight ">
          {title || "Simple, transparent pricing"}
        </span>
      </div>

      {/* Pricing Cards */}
      <div className="relative z-10 mt-12 grid gap-8 max-w-[1400px] mx-auto lg:grid-cols-3  items-start px-4 md:px-6 lg:px-8">
        {plans.map((plan, index) => (
          <div
            key={plan.name}
            className={`rounded-3xl p-10 flex flex-col transform transition-transform duration-500 origin-center w-full max-w-[620px] mx-auto ${
              plan.popular
                ? "bg-[#5F69A8] backdrop-blur-[15px] text-white scale-[1.05] shadow-lg"
                : "bg-[linear-gradient(125deg,_#382933,_#372935,_#372831)] text-gray-900 shadow-md"
            } ${index === 1 ? "mt-8 md:mt-0" : ""}`}
          >
            {plan.popular && (
              <div className="text-xs font-semibold uppercase mb-4 text-center tracking-wider text-white bg-gradient-to-b from-[#382933] via-[#372935] to-[#372831] py-1 px-4 rounded-full self-center -mt-16">
                Most Popular
              </div>
            )}

            <div className="text-2xl lg:text-2xl text-white font-bold mb-2">{plan.name}</div>

            {/* Description with dynamic size */}
            <p className={`text-base    text-gray-100 mb-4`}>{plan.description}</p>

            {/* Removed price section */}

         <ul className="space-y-3 mb-8 text-left text-lg md:text-base lg:text-base text-white">
  {plan.features.map((feature) => {
    const match = feature.match(/(.*?)(\s*\(.*?\))/); // group before and inside brackets
    const mainText = match ? match[1] : feature;
    const bracketText = match ? match[2] : "";

    return (
      <li key={feature} className="flex items-start">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 mr-2 mt-1 flex-shrink-0 text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>

        <span>
          {mainText}
          <span className={plan.popular ? "text-[#8FCDFF] font-semibold" : "text-[#8FCDFF] font-semibold"}>
            {bracketText}
          </span>
        </span>
      </li>
    );
  })}
</ul>



            <button
              className={`mt-auto px-5 py-2 font-semibold transition-colors duration-300 ${
                plan.popular
                  ? "bg-gradient-to-r from-[#372935] via-[#000000] to-[#372935] cursor-pointer text-white transition hover:scale-105"
                  : "bg-[#5F69A8] text-white cursor-pointer transition hover:scale-105"
              }`}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
