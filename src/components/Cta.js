"use client";
import { useState } from "react";
import ContactFormModal from "./ContactFormModal";

export default function CTASection() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <section className="w-full bg-[linear-gradient(90deg,#5F69A8,#616FB4,#657AC9,#6E8EEE,#80B3F6,#8FCDFF)] py-10 px-4 sm:px-6 md:px-10 lg:px-20 flex flex-col md:flex-col lg:flex-row items-center lg:items-start justify-between relative text-center lg:text-left">
        
        {/* Text */}
        <p className="text-white xl:ml-40 text-base sm:text-lg md:text-xl lg:text-3xl max-w-full md:max-w-3xl mb-4 lg:mb-0">
        Ready to Scale Your Business? Connect With an Expert Today
        </p>

        {/* Button */}
        <button 
          onClick={() => setShowForm(true)}
          className="flex items-center xl:mr-40 gap-2 bg-white text-black font-semibold py-2 px-6 cursor-pointer shadow transition hover:scale-105 lg:ml-6"
        >
          Connect With Expert
        </button>

        {/* Bottom divider */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-[90%] sm:w-[80%] md:w-[60%] lg:w-[1000px]"
          style={{
            background:
              "linear-gradient(to right, rgba(211,233,253,0.3), rgba(211,233,253,0))",
          }}
        ></div>
      </section>

      <ContactFormModal showForm={showForm} setShowForm={setShowForm} />
    </>
  );
}
