"use client";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function DigitalMarketingFAQs() {
  const faqs = [
    {
      question: "Why should I hire a consultant instead of doing digital marketing myself?",
      answer:
        "Doing it yourself can lead to mistakes, wasted money, and slow results. A consultant brings expertise, proven strategies, and a clear growth plan. You save time, reduce trial-and-error, and get faster, more reliable results.",
    },
    {
      question: "How does Digital Marketing Consulting help me save budget and grow my business?",
      answer:
        " Consulting gives you a clear strategy so you don’t waste money on random ads or wrong targeting. With expert guidance, your budget is used only on proven methods like SEO, Google Ads, Meta Ads, and Local SEO. This way you save cost while achieving measurable growth.",
    },
    {
      question: "How much should I spend on ads, and how will consulting help me?",
      answer:
        " Ad spend depends on your business type, target market, and goals. Some businesses grow with ₹5,000/month while others need more. As a consultant, I guide you on the right budget, design ad campaigns that reach the correct audience, and ensure you get maximum ROI from every rupee spent.",
    },
    {
      question: "Can consulting work for different people in different fields?",
      answer:
        "Yes! Every business is unique, and consulting is customized. Whether you are in retail, services, education, healthcare, or startups — strategies are tailored to your industry, location, and customers. This ensures you get results that actually matter for your field.",
    },
    {
      question: " Is there any course available if I want to learn Digital Marketing?",
      answer:
        " Yes, along with consulting, we also provide training and courses for students, entrepreneurs, and business owners. These cover SEO, Google Ads, Meta Ads, and Local SEO. With this, you not only grow your business but also gain the knowledge to manage marketing on your own.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      <div
        className="relative min-h-screen flex flex-col justify-start items-center px-4 sm:px-6 md:px-8 lg:px-20 sm:pt-15 pt-15 "
        style={{
          background: "linear-gradient(to bottom, #382933, #372935, #372831)",
        }}
      >
          <span className="flex justify-center  text-2xl sm:text-2xl md:text-2xl lg:text-5xl font-bold mb-2 sm:mb-12 md:mb-4 bg-clip-text text-white">
  FAQs 
</span>
        {/* Constrain the FAQ container width for large screens */}
        <div className="w-full max-w-4xl p-4 md:p-10 ">
        


          <div className="space-y-6 ">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="overflow-hidden backdrop-blur-md shadow-lg hover:scale-[1.01] transition-transform duration-300 rounded-lg"
                style={{
                  background:
                    "linear-gradient(to right, rgba(55,42,51,0.6), rgba(58,45,56,0.6), rgba(59,48,60,0.6), rgba(62,51,66,0.6))",
                }}
              >
                {/* Question */}
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === idx ? null : idx)
                  }
                  className="w-full flex justify-between items-center p-3 sm:p-4 cursor-pointer"
                  style={{
                    borderBottom: `2px solid transparent`,
                    backgroundImage:
                      "linear-gradient(to right, rgba(255,255,255,0.3), rgba(255,255,255,0))",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 2px",
                    backgroundPosition: "left bottom",
                  }}
                >
                  <span className="text-left font-medium text-gray-100 text-base sm:text-base md:text-base lg:text-base">
                    {faq.question}
                  </span>
                  <ChevronDownIcon
                    className={`h-4 w-4 sm:h-5 sm:w-5 text-gray-300 transform transition-transform duration-300 ${
                      openIndex === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Smooth animated answer */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    openIndex === idx
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p
                      className="p-3 sm:p-4 text-gray-300 text-base sm:text-base md:text-base lg:text-base"
                      style={{
                        background:
                          "linear-gradient(to right, rgba(55,42,51,0.4), rgba(58,45,56,0.4), rgba(59,48,60,0.4), rgba(62,51,66,0.4))",
                      }}
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
    </>
  );
}
