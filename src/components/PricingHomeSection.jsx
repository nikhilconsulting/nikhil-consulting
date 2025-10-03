"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const plans = {
  monthly: [
    {
      name: "Landing Page Website",
      goal: "Simple & effective online presence",
      features: [
        "1 - Page Responsive Landing Page",
        "Contact / Lead Form Integration",
        "Affordable Hosting",
        "Full On-Page SEO",
        "Technical Setup",
        "6 month Support",
        
      ],
      ideal:"Startups, product launches, small services",
      buttonText: "Get Started",
    },
    {
      name: "Google Ads",
      goal: "Targeted traffic & leads from Ads",
      features: [
        "1 – 2 Search / Display Campaigns",
        "In - Depth Website Audit",
        "Keyword Research & Ad Copy",
        "Conversion Tracking Setup",
        "Weekly Optimization",
        "Monthly Performance Report",
       
      ],
      ideal: " Businesses needing instant leads & traffic", 
      buttonText: "Get Started",
    },
    {
      name: "Meta Ads",
      goal: "Brand awareness & engagement",
      features: [
        "1 – 2 Campaigns ( Awareness / Traffic / Leads )",
        "Audience Targeting & Ad creation",
        "A / B Testing & Optimization",
        "Pixel & Conversion Tracking Setup",
        "Monthly Report & Insights",
        
      ],
      ideal: "Local businesses, e-commerce, service providers",
      buttonText: "Get Started",
    },
    {
      name: "Local SEO",
      goal: "Improve local visibility & get leads from search",
      features: [
        "Google Business Profile Setup & Optimization",
        "In - Depth Site Analysis",
        "Content Marketing",
        "Local Keyword Research",
        "Complete SEO for Local Pages",
        "Monthly Reporting & Insights",
      ],
      buttonText: "Get Started",
      ideal: " Shops, clinics, service providers, restaurants",
    },
  ],
};

export default function Pricing() {
  // No billing toggle needed now since only monthly plans are shown
  const currentPlans = plans.monthly;

  return (
    <div className="relative  py-12 px-4 mx-auto flex flex-col items-center justify-center">

      {/* Background Image with Blur */}
<div className="absolute inset-0 overflow-hidden">
  <Image
    src="/assets/images/pricing-section-image/pricing-background-image.png"
    alt="Background"
    layout="fill"
    objectFit="cover"
    objectPosition="center"
    className="filter blur-sm"
    priority={true}
  />
</div>

      <span className="text-4xl lg:text-5xl font-bold text-white tracking-tight z-1">
         Best Seller Plans
        </span>

      {/* Pricing Cards */}
     <div className="relative  z-10 mt-12 grid lg:gap-12 gap-10 max-w-8xl mx-auto grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-center px-4 justify-center">
{currentPlans.map((plan, index) => (
          <div
            key={plan.name}
       className={`rounded-3xl p-10 -ml-4 md:-ml-0 flex flex-col justify-between min-h-[540px] transform transition-transform duration-500 hover:scale-[1.02] origin-center overflow-x-hidden w-[340px] mx-auto bg-[linear-gradient(125deg,_#382933,_#372935,_#372831)] text-gray-900 shadow-md`}
  >
            <span className="text-2xl text-gray-100 font-semibold mb-2">{plan.name}</span>
            <p className="text-[#8FCDFF] mb-2 text-base font-semibold">Goal : {plan.goal}</p>

            <ul className="space-y-3 mb-2 text-left text-base text-[#fff]">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start">
                 <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 mr-2 mt-1 flex-shrink-0 text-fff"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>

                  {feature}
                </li>
              ))}
            </ul>
<p className="text-[#8FCDFF] mb-4 text-base font-semibold">Ideal for : {plan.ideal}</p>
         <Link
  href="/services"
  className="relative bg-[linear-gradient(90deg,#5F69A8,#616FB4,#657AC9,#6E8EEE,#80B3F6,#8FCDFF)] text-white inline-flex items-center justify-center overflow-hidden group px-6 py-2 text-lg font-semibold cursor-pointer transition hover:scale-105"
>
  <span className="relative z-10 flex items-center gap-2">
    {plan.buttonText}
    <FaArrowRight className="text-white text-base" />
  </span>
  <span
    className="absolute inset-0 bg-gradient-to-r from-[#372935] via-black to-[#372935] scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-500 ease-out z-0"
    aria-hidden="true"
  ></span>
</Link>

          </div>
        ))}
      </div>
    </div>
  );
}
