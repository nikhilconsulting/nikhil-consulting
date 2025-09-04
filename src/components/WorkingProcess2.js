"use client";

import React from "react";

const workingSteps = [
  {
    title: "01 | Business Insight & Needs Analysis",
    description:
      "We dive into your Varanasi market, audience & rivals to craft digital plans focused on your business goals and growth.",
  },
  {
    title: "02 | Market Research & Competitor Analysis",
    description:
      "We study Varanasi’s market & rivals deeply to craft smart strategies that give your business a winning edge.",
  },
  {
    title: "03 | Impactful Execution & Results Enhancement",
    description:
      "We launch data-driven digital plans that boost your brand, drive engagement, and fuel powerful business growth.",
  },
  {
    title: "04 | Monitoring & Updating: Agile Optimization",
    description:
      "We monitor in real-time and optimize fast to boost performance, adapt to trends, and keep your growth on track.",
  },
];

export default function WorkingProcess2() {
  return (
    <section className="relative bg-gradient-to-r from-[#111827] to-[#5b21b6] text-white py-24 px-4">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold">
          DOMINATE YOUR MARKET WITH OUR BATTLE-TESTED{" "}
          <span className="text-purple-400">FRAMEWORK</span>
        </h2>
      </div>

      {/* Timeline Container */}
      <div className="relative w-full max-w-6xl mx-auto">
        {/* Horizontal Line */}
        <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-1 bg-white/30 z-0" />

        {/* Circles on line */}
        <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 flex justify-between px-4 z-10">
          {workingSteps.map((_, index) => (
            <div
              key={index}
              className="w-4 h-4 bg-white rounded-full border-4 border-white z-10"
            />
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-y-24 gap-x-8 relative z-10 mt-10">
          {workingSteps.map((step, index) => (
            <div
              key={index}
              className={`max-w-sm ${
                index < 2 ? "justify-self-start text-left" : "justify-self-end text-left"
              }`}
            >
              <h3 className="text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-white/80">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
