"use client";

import { FaArrowRight } from "react-icons/fa";

export default function ProcessSection() {
  const steps = [
    {
      id: "01",
      title: "Choose a Plan",
      desc: "Select the flexible or premium plan that suits your business needs",
    },
    {
      id: "02",
      title: "Subscribe Instantly",
      desc: "Activate your subscription with just a click – no forms, no hassle.",
    },
    {
      id: "03",
      title: "Get Tailored Solutions",
      desc: "Receive personalized products & support for your operations.",
    },
    {
      id: "04",
      title: "Receive Your Supplies",
      desc: "Sit back as your chemicals are delivered on time, every time.",
    },
  ];

  // Gradient Border Style (reusable)
  const borderStyle = {
    padding: "2px",
    background:
      "linear-gradient(to top, rgba(211,233,253,0.8), rgba(211,233,253,0) 70%)",
    WebkitMask:
      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
    WebkitMaskComposite: "xor",
    maskComposite: "exclude",
  };

  // Card Inner Background (reusable)
  const cardBg =
    "linear-gradient(to bottom, rgba(56,41,51,0.9), rgba(55,41,53,0.9), rgba(55,40,49,0.9))";

  return (
    <section
      className="w-full min-h-screen text-white flex flex-col justify-center py-16 px-4 sm:px-6 md:px-12 lg:px-20"
      style={{
        background: "linear-gradient(to bottom, #382933, #372935, #372831)",
      }}
    >
     {/* Heading */}
<div className="text-center max-w-3xl mx-auto mb-12">
  <p className="text-xs sm:text-sm text-white font-medium mb-2">
    4 SIMPLE STEPS
  </p>
<h2
  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug bg-clip-text text-transparent"
  style={{
    backgroundImage:
      "linear-gradient(90deg, #5F69A8, #616FB4, #657AC9, #6E8EEE, #80B3F6, #8FCDFF)",
  }}
>
  Effortless Process, <br className="hidden sm:block" /> Continuous Supply
</h2>

 {/* Gradient underline */}
<div
className="mx-auto mt-6 h-[1px] w-32 sm:w-40 md:w-56 lg:w-64"
  style={{
    background:
      "linear-gradient(to right, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.4) 40%, rgba(255,255,255,0.1) 100%)",
    borderRadius: "999px",
  }}
></div>

</div>

      {/* Steps Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto items-stretch">

        {steps.map((step) => (
      <div
  key={step.id}
  className="relative rounded-2xl p-6 flex flex-col gap-4 hover:bg-[#382933] transition min-h-[220px]"
  
>
  {/* Gradient Border */}
  <div
    className="absolute inset-0 rounded-2xl pointer-events-none"
    style={{
      padding: "2px",
      background:
        "linear-gradient(to top, rgba(211,233,253,0.8), rgba(211,233,253,0) 70%)",
      WebkitMask:
        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
      WebkitMaskComposite: "xor",
      maskComposite: "exclude",
    }}
  ></div>

  <h3 className="text-lg font-semibold">
    {step.id}. {step.title}
  </h3>
  <p className="text-sm text-gray-300">{step.desc}</p>
</div>


        ))}
      </div>

      {/* Bottom Section */}
      <div className="relative rounded-2xl mt-12 max-w-6xl mx-auto">
        {/* Border */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={borderStyle}
        ></div>

        {/* Inner Content */}
        <div
          className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 rounded-2xl p-5 sm:p-6"
          style={{ background: cardBg }}
        >
          {/* Avatars */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-3">
              <img
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="user1"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://randomuser.me/api/portraits/women/2.jpg"
                alt="user2"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://randomuser.me/api/portraits/men/3.jpg"
                alt="user3"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://randomuser.me/api/portraits/women/4.jpg"
                alt="user4"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white"
              />
            </div>
            <p className="text-xs sm:text-sm text-gray-200">
              Align with Businesses that{" "}
              <span className="font-semibold text-white">Choose Quality</span>
            </p>
          </div>

          {/* Button */}
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-[#0A1A3A] font-medium px-5 py-2 rounded-full hover:bg-gray-200 transition cursor-pointer">
            Start Now <FaArrowRight className="text-sm" />
          </button>
        </div>
      </div>
      
    </section>
    
  );
}
