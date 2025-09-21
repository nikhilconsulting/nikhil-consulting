"use client";

import React from "react";



const workingSteps = [
  {
    title: "01 | Business Insight & Market Need's Analysis",
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
const DownArrow = () => (
  <div className="flex justify-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="w-16 h-16"
      style={{
        animation: 'smoothBounce 1.5s ease-in-out infinite',
        transformOrigin: 'center',
      }}
      fill="none"
      stroke="url(#arrowGradientMobile)"
      strokeWidth={3}
    >
      <defs>
        <linearGradient id="arrowGradientMobile" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#5F69A8" />
          <stop offset="20%" stopColor="#616FB4" />
          <stop offset="40%" stopColor="#657AC9" />
          <stop offset="60%" stopColor="#6E8EEE" />
          <stop offset="80%" stopColor="#80B3F6" />
          <stop offset="100%" stopColor="#8FCDFF" />
        </linearGradient>
      </defs>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 13l5 5 5-5M7 6l5 5 5-5" />
      <style>{`
        @keyframes smoothBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15%); }
        }
      `}</style>
    </svg>
  </div>
);




  return (
    <section className="relative bg-[linear-gradient(to_bottom,_#382933,_#372935,_#372831)] text-white px-4 py-20 overflow-hidden">
      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-16 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          DOMINATE YOUR MARKET WITH OUR BATTLE-TESTED{" "}
          <span className="bg-[linear-gradient(90deg,#5F69A8,#616FB4,#657AC9,#6E8EEE,#80B3F6,#8FCDFF)] text-white p-1">
            FRAMEWORK
          </span>
        </h2>
      </div>

      {/* Timeline Container */}
      <div className="relative max-w-6xl mx-auto w-full">
        {/* Timeline Line - Desktop Only */}
      <div
  className="hidden md:block absolute top-1/2 h-0.5 bg-white/30 z-0 transform -translate-y-1/2"
  style={{ left: '-4rem', right: '-4rem' }}
/>

        {/* Timeline Dots - Desktop Only */}
        <div className="hidden md:flex absolute top-1/2 left-0 right-0 justify-between px-4 z-10 transform -translate-y-1/2">
          {[...Array(4)].map((_, idx) => (
            <div
              key={idx}
              className="w-4 h-4 bg-[linear-gradient(90deg,#5F69A8,#616FB4,#657AC9,#6E8EEE,#80B3F6,#8FCDFF)] rounded-full "
            />
          ))}
        </div>

        {/* Timeline Content */}
        <div className="hidden md:block">
         {/* Top Row */}
<div className="grid grid-cols-8 gap-8 relative z-10 mb-24">
  <div></div>

 <div className="col-span-3 text-left px-4 relative">
  <span className="absolute left-[-2.0rem] top-0 text-2xl font-bold whitespace-nowrap bg-[linear-gradient(90deg,#5F69A8,#616FB4,#657AC9,#6E8EEE,#80B3F6,#8FCDFF)] text-gray-100 px-1 ">
    01
  </span>
  <h3 className="text-lg font-bold mb-2">{workingSteps[0].title.slice(5)}</h3>
  <p className="text-base text-white/80">{workingSteps[0].description}</p>
</div>


  <div></div>

  <div className="col-span-3 text-left px-4 relative">
    <span className="absolute left-[-2.0rem] top-0 text-2xl font-bold whitespace-nowrap bg-[linear-gradient(90deg,#5F69A8,#616FB4,#657AC9,#6E8EEE,#80B3F6,#8FCDFF)] text-gray-100 px-1">
      02
    </span>
    <h3 className="text-lg font-bold mb-2">{workingSteps[1].title.slice(5)}</h3>
    <p className="text-base text-white/80">{workingSteps[1].description}</p>
  </div>

  <div></div>
</div>

{/* Bottom Row */}
<div className="grid grid-cols-8 gap-8 relative z-10 mt-12">
  <div className="col-span-3 text-left px-4 relative">
    <span className="absolute left-[-2.0rem] top-0 text-2xl font-bold whitespace-nowrap bg-[linear-gradient(90deg,#5F69A8,#616FB4,#657AC9,#6E8EEE,#80B3F6,#8FCDFF)] text-gray-100 px-1">
      03
    </span>
    <h3 className="text-lg font-bold mb-2">{workingSteps[2].title.slice(5)}</h3>
    <p className="text-base text-white/80">{workingSteps[2].description}</p>
  </div>

  <div></div>

  <div className="col-span-3 text-left px-4 relative">
    <span className="absolute left-[-2.0rem] top-0 text-2xl font-bold whitespace-nowrap bg-[linear-gradient(90deg,#5F69A8,#616FB4,#657AC9,#6E8EEE,#80B3F6,#8FCDFF)] text-gray-100 px-1">
      04
    </span>
    <h3 className="text-lg font-bold mb-2">{workingSteps[3].title.slice(5)}</h3>
    <p className="text-base text-white/80">{workingSteps[3].description}</p>
  </div>

  <div></div>
</div>

        </div>

        {/* Mobile Layout */}
<div className="md:hidden flex flex-col gap-10 z-10 relative">
        {workingSteps.map((step, idx) => (
          <React.Fragment key={idx}>
            <div className="relative pl-12"> {/* padding-left for spacing */}
              <span className="absolute left-0 top-0 text-2xl font-bold whitespace-nowrap bg-[linear-gradient(90deg,#5F69A8,#616FB4,#657AC9,#6E8EEE,#80B3F6,#8FCDFF)] text-gray-100 px-1">
                {step.title.slice(0, 2)}
              </span>
              <span className="text-2xl font-bold">{step.title.slice(5)}</span>
              <p className="text-lg text-gray-100 mt-2">{step.description}</p>
            </div>
            {idx < workingSteps.length - 1 && <DownArrow />}
          </React.Fragment>
        ))}
      </div>

      </div>

      {/* Bottom Gradient Divider */}
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
