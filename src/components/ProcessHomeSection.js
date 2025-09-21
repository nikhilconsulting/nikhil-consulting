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

export default function ProcessHomeSection() {
  return (
   <section className="relative bg-[linear-gradient(to_bottom,_#382933,_#372935,_#372831)] backdrop-blur-[15px] text-white px-4 overflow-hidden h-screen flex flex-col justify-center">
   <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold">
          DOMINATE YOUR MARKET WITH OUR BATTLE-TESTED{" "}
          <span className="bg-[linear-gradient(90deg,#5F69A8,#616FB4,#657AC9,#6E8EEE,#80B3F6,#8FCDFF)] backdrop-blur-[15px] p-2">FRAMEWORK</span>
        </h2>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Horizontal Line */}
        <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-white/30 z-0 transform -translate-y-1/2" />

        {/* Timeline Dots */}
        <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 z-10 transform -translate-y-1/2 ">
          {[...Array(4)].map((_, idx) => (
            <div
              key={idx}
              className="w-4 h-4 bg-white rounded-full border-4 border-white"
            />
          ))}
        </div>

       {/* Top Row */}
<div className="grid grid-cols-8 gap-8 relative z-10 mb-24">
  <div></div>
  <div className="col-span-3 text-left px-4"> {/* col-span-3 for more width */}
    <h3 className="text-lg font-bold mb-2">{workingSteps[0].title}</h3>
    <p className="text-base text-white/80">
      {workingSteps[0].description}
    </p>
  </div>
  <div></div>
  <div className="col-span-3 text-left px-4"> {/* col-span-3 for more width */}
    <h3 className="text-lg font-bold mb-2">{workingSteps[1].title}</h3>
    <p className="text-base text-white/80">
      {workingSteps[1].description}
    </p>
  </div>
  <div></div>
</div>

{/* Bottom Row */}
<div className="grid grid-cols-8 gap-8 relative z-10 mt-12">
  <div className="col-span-3 text-left px-4">
    <h3 className="text-lg font-bold mb-2">{workingSteps[2].title}</h3>
    <p className="text-base text-white/80">
      {workingSteps[2].description}
    </p>
  </div>
  <div></div>
  <div className="col-span-3 text-left px-4">
    <h3 className="text-lg font-bold mb-2">{workingSteps[3].title}</h3>
    <p className="text-base text-white/80">
      {workingSteps[3].description}
    </p>
  </div>
  <div></div>
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
