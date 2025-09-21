"use client";
import React, { useState } from "react";

const plans = {
  monthly: [
    {
      name: "Base",
      price: 80,
      features: [
        "All limited links",
        "Own analytics platform",
        "Chat support",
        "Optimize hashtags",
        "Unlimited users",
      ],
      buttonText: "Downgrade",
    },
    {
      name: "Pro",
      price: 120,
      features: [
        "All limited links",
        "Own analytics platform",
        "Chat support",
        "Optimize hashtags",
        "Unlimited users",
      ],
      popular: true,
      buttonText: "Upgrade",
    },
    {
      name: "Enterprise",
      price: 260,
      features: [
        "All limited links",
        "Own analytics platform",
        "Chat support",
        "Optimize hashtags",
        "Unlimited users",
      ],
      buttonText: "Upgrade",
    },
  ],
  yearly: [
    {
      name: "Base",
      price: 800,
      features: [
        "All limited links",
        "Own analytics platform (yearly)",
        "24/7 Priority support",
        "Advanced hashtag optimization",
        "Dedicated account manager",
      ],
      buttonText: "Downgrade",
    },
    {
      name: "Pro",
      price: 1200,
      features: [
        "All limited links",
        "Own analytics platform (yearly)",
        "24/7 Priority support",
        "Advanced hashtag optimization",
        "Dedicated account manager",
      ],
      popular: true,
      buttonText: "Upgrade",
    },
    {
      name: "Enterprise",
      price: 2600,
      features: [
        "All limited links",
        "Own analytics platform (yearly)",
        "24/7 Priority support",
        "Advanced hashtag optimization",
        "Dedicated account manager",
      ],
      buttonText: "Upgrade",
    },
  ],
};

export default function Pricing() {
  const [billing, setBilling] = useState("monthly");

  const currentPlans = plans[billing];

  return (
    <div className="relative bg-black/10 min-h-screen py-12 px-4 font-sans flex flex-col items-center justify-center">

      {/* Background Image with Blur */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-sm opacity-40"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80')" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center w-full">
        <h2 className="text-3xl font-bold text-gradient-to-b from-[#382933] via-[#372935] to-[#372831] tracking-tight">
          Simple, transparent pricing
        </h2>

        {/* Billing Toggle */}
        <div className="mt-4 mb-4 inline-flex border border-[#d6d3e3] rounded-full p-1.5 bg-gradient-to-b from-[#382933] via-[#372935] to-[#372831]">
          <button
            className={`px-6 py-1 rounded-full text-sm font-semibold transition-all duration-300 ${
              billing === "monthly" ? "bg-white text-[#56556e] shadow" : "bg-transparent text-[#fff]"
            }`}
            onClick={() => setBilling("monthly")}
          >
            Monthly
          </button>
          <button
            className={`px-6 py-1 rounded-full text-sm font-semibold transition-all duration-300 ${
              billing === "yearly" ? "bg-white text-[#56556e] shadow" : "bg-transparent text-[#fff]"
            }`}
            onClick={() => setBilling("yearly")}
          >
            Yearly
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="relative z-10 mt-12 grid gap-8 max-w-6xl mx-auto md:grid-cols-3 items-start px-4 sm:px-6 lg:px-8">
        {currentPlans.map((plan, index) => (
          <div
            key={plan.name}
            className={`rounded-3xl p-10 flex flex-col transform transition-transform duration-500 hover:scale-[1.02] origin-center w-full max-w-sm mx-auto ${
              plan.popular
                ? "bg-[linear-gradient(90deg,#5F69A8,#616FB4,#657AC9,#6E8EEE,#80B3F6,#8FCDFF)] backdrop-blur-[15px] text-white scale-[1.05] shadow-lg"
                : "bg-gradient-to-b from-[#382933] via-[#372935] to-[#372831] text-gray-900 shadow-md"
            } ${index === 1 ? 'mt-8 md:mt-0' : ''}`}
          >
            {plan.popular && (
              <div className="text-xs font-semibold uppercase mb-4 text-center tracking-wider text-white bg-gradient-to-b from-[#382933] via-[#372935] to-[#372831] py-1 px-4 rounded-full self-center -mt-16">
                Most Popular
              </div>
            )}
            <h3 className="text-xl text-gray-100 font-semibold mb-2">{plan.name}</h3>
            <p className="text-gray-100 mb-4 text-sm">
              For most businesses that want to optimize web queries
            </p>

            <p className={`text-3xl font-extrabold mb-6 ${plan.popular ? "text-white" : "text-[#fff]"}`}>
              ${plan.price}
              <span className="text-base font-normal">/{billing === "monthly" ? "month" : "year"}</span>
            </p>

            <ul className={`space-y-3 mb-8 text-left text-sm ${plan.popular ? "text-white" : "text-[#fff]"}`}>
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center">
                  <svg
                    className={`w-4 h-4 mr-2 flex-shrink-0 ${plan.popular ? "text-white" : "text-[#8a8a9a]"}`}
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
              className={`mt-auto px-5 py-2 rounded-full font-semibold transition-colors duration-300 ${
                plan.popular
                  ? "bg-gradient-to-b from-[#382933] via-[#372935] to-[#372831] cursor-pointer text-white transition hover:scale-105"
                  : "bg-[linear-gradient(90deg,#5F69A8,#616FB4,#657AC9,#6E8EEE,#80B3F6,#8FCDFF)] text-white cursor-pointer transition hover:scale-105"
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