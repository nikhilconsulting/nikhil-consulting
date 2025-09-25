"use client";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function DigitalMarketingFAQs({ faqs }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div
      className="relative min-h-screen flex flex-col justify-start items-center px-4 sm:px-6 md:px-8 lg:px-20 py-10 lg:pt-17"
style={{ background: "linear-gradient(125deg, #5F69A8, #000000, #fff)" }}
    >
      <span className="flex justify-center text-2xl sm:text-2xl md:text-2xl lg:text-5xl font-bold mb-2 sm:mb-12 md:mb-4 bg-clip-text text-white">
        FAQs
      </span>

      <div className="w-full max-w-4xl p-4 md:p-10">
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="overflow-hidden backdrop-blur-md shadow-lg hover:scale-[1.03] transition-transform duration-300 rounded-lg"
              style={{
                background:
                  "linear-gradient(to right, rgba(55,42,51,0.6), rgba(58,45,56,0.6), rgba(59,48,60,0.6), rgba(62,51,66,0.6))",
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex justify-between items-center p-3 sm:p-4 cursor-pointer "
               style={{
  borderBottom: `2px solid transparent`,
  backgroundImage:
    "linear-gradient(to right, #5F69A8, #80B3F6, rgba(143,205,255,0))",
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 2px",
  backgroundPosition: "left bottom",
}}

              >
                <span className="text-left font-medium text-gray-100 text-base sm:text-base md:text-base lg:text-base">
                  {faq.question}
                </span>
                <ChevronDownIcon
                  className={`h-4 w-4 sm:h-5 sm:w-5 text-gray-100  transform transition-transform duration-300 ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-500 ease-in-out ${
                  openIndex === idx
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p
                    className="p-3 sm:p-4 text-gray-100 text-base sm:text-base md:text-base lg:text-base bg-[linear-gradient(90deg,#5F69A8,#616FB4,#657AC9,#6E8EEE,#80B3F6,#8FCDFF)]"
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
