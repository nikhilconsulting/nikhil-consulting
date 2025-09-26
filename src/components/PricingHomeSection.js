"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const plans = {
  monthly: [
    {
      name: "Landing Page Website",
      goal: "Simple & effective online presence",
      features: [
        "1-page responsive landing page",
        "Basic branding & design",
        "Contact/Lead form integration",
        "Social media links",
        "Basic on-page SEO",
        "Ideal for: Startups, product launches, small services",
      ],
      buttonText: "Get Started",
    },
    {
      name: "Google Ads",
      goal: "Targeted traffic & leads",
      features: [
        "1–2 search/display campaigns",
        "Keyword research & ad copy",
        "Conversion tracking setup",
        "Weekly optimization",
        "Monthly performance report",
        "Ideal for: Businesses needing instant leads & traffic",
      ],
      buttonText: "Get Started",
    },
    {
      name: "Meta Ads",
      goal: "Brand awareness & engagement",
      features: [
        "1–2 campaigns (Awareness / Traffic / Leads)",
        "Audience targeting & ad creation",
        "A/B testing & optimization",
        "Pixel & conversion tracking setup",
        "Monthly report & insights",
        "Ideal for: Local businesses, e-commerce, service providers",
      ],
      buttonText: "Get Started",
    },
    {
      name: "Local SEO",
      goal: "Improve local visibility & get leads from search",
      features: [
        "Google Business Profile setup & optimization",
        "Local keyword research",
        "On-page SEO for local pages",
        "Citation building & review management",
        "Monthly reporting & insights",
        "Ideal for: Shops, clinics, service providers, restaurants",
      ],
      buttonText: "Get Started",
    },
  ],
};

export default function Pricing() {
  // No billing toggle needed now since only monthly plans are shown
  const currentPlans = plans.monthly;

  return (
    <div className="relative bg-black/10 min-h-screen py-12 px-4 font-sans flex flex-col items-center justify-center">

      {/* Background Image with Blur */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-sm "
        style={{ backgroundImage: "url('/assets/images/pricing-section-image/pricing-background-image.png')" }}
      />

      <span className="text-4xl lg:text-5xl font-bold text-white tracking-tight z-1">
         Our Plans
        </span>

      {/* Pricing Cards */}
      <div className="relative z-10 mt-12 grid gap-8 max-w-full mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-start px-4 sm:px-6 lg:px-8">
        {currentPlans.map((plan, index) => (
          <div
            key={plan.name}
            className={`rounded-3xl p-10 flex flex-col transform transition-transform duration-500 hover:scale-[1.02] origin-center w-[340px] mx-auto bg-[linear-gradient(125deg,_#382933,_#372935,_#372831)] text-gray-900 shadow-md ${index === 1 ? 'mt-8 md:mt-0' : ''}`}
          >
            <span className="text-2xl text-gray-100 font-semibold mb-2">{plan.name}</span>
            <p className="text-gray-100 mb-4 text-base font-semibold">{plan.goal}</p>

            <ul className="space-y-3 mb-8 text-left text-base text-[#fff]">
              {plan.features.map((feature) => (
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

                  {feature}
                </li>
              ))}
            </ul>

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
