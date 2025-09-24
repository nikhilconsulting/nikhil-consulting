"use client";
import React, { useState } from "react";

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

      <span className="text-5xl lg:text-4xl font-bold text-white tracking-tight z-1">
          Simple, transparent pricing
        </span>

      {/* Pricing Cards */}
      <div className="relative z-10 mt-12 grid gap-8 max-w-full mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-start px-4 sm:px-6 lg:px-8">
        {currentPlans.map((plan, index) => (
          <div
            key={plan.name}
            className={`rounded-3xl p-10 flex flex-col transform transition-transform duration-500 hover:scale-[1.02] origin-center w-[340px] mx-auto bg-gradient-to-b from-[#382933] via-[#372935] to-[#372831] text-gray-900 shadow-md ${index === 1 ? 'mt-8 md:mt-0' : ''}`}
          >
            <span className="text-2xl text-gray-100 font-semibold mb-2">{plan.name}</span>
            <p className="text-gray-100 mb-4 text-base font-semibold">{plan.goal}</p>

            <ul className="space-y-3 mb-8 text-left text-base text-[#fff]">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 flex-shrink-0 text-[#8a8a9a]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <button
              className="mt-auto px-5 py-2 rounded-full font-semibold bg-[linear-gradient(90deg,#5F69A8,#616FB4,#657AC9,#6E8EEE,#80B3F6,#8FCDFF)] text-white cursor-pointer transition hover:scale-105"
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
