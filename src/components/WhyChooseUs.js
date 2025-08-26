"use client";
import { useState } from "react";

export default function WhyChooseUs() {
  return (
    <>
      <section
        className="relative w-full h-screen flex flex-col justify-center py-16 px-4 sm:px-8 md:px-16 lg:px-20 text-white"
        style={{
          background: "linear-gradient(to bottom, #382933, #372935, #372831)",
        }}
      >
        {/* Heading + Description */}
        <div className="text-center max-w-6xl mx-auto mb-6">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-white">
            Why Choose Us?
          </h2>
        </div>

        {/* Content Row */}
        <div className="grid grid-cols-1 xl:grid-cols-2 items-center ">
          {/* Right - Image */}
          <div className="flex justify-center md:justify-center lg:mb-4 ">
            <div className="w-full max-w-sm md:max-w-md lg:max-w-lg overflow-hidden shadow-lg h-[300px] lg:h-[520px]">
              <img
                src="/assests/images/WhyChooseUs.jpg"
                alt="Our Team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Left - Text Paragraph */}
          <div className="text-gray-300 text-justify leading-relaxed text-base mb-8 mt-2 xl:mr-16">
            <p className="mb-2">
              Digital marketing consulting should deliver measurable growth, not
              wasted expenses. Our consulting helps businesses invest their
              budget wisely by focusing only on strategies that truly work. From
              SEO consulting and Local SEO to Google Business Profile
              optimization, Google Ads, and Meta Ads, we design every campaign
              to be data-driven, targeted, and result-oriented. With expert
              guidance, you reduce costs, improve online visibility, and attract
              the customers who matter most, ensuring maximum ROI.
            </p>
            <p className="mb-6">
              Over the years, we have supported startups, business owners, and
              entrepreneurs in achieving consistent online growth. Our
              consulting provides a clear roadmap, blending proven digital
              marketing techniques with customized strategies tailored for your
              brand. Whether it’s ranking higher on Google, generating quality
              leads through paid ads, or building a powerful social media
              presence, we help you grow faster, smarter, and more
              sustainably—driving long-term success for your business.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8 max-w-3xl mx-auto">
              {[
                "Save 35% Budget",
                "Growth-Focused Results",
                "Proven ROI",
                "Trusted by 116+ Businesses",
              ].map((point, index) => (
                <div key={index} className="flex items-center gap-2">
                  {/* Number Circle */}
                  <div
                    className="w-10 h-10 flex items-center justify-center rounded-full text-white font-semibold flex-shrink-0"
                    style={{
                      background:
                        "linear-gradient(90deg, #5F69A8, #616FB4, #657AC9, #6E8EEE, #80B3F6, #8FCDFF)",
                    }}
                  >
                    {`0${index + 1}`}
                  </div>

                  {/* Text Box */}
                  <div
                    className="relative p-3 rounded-md"
                    style={{
                      minWidth: "150px",
                      backgroundColor: "transparent",
                    }}
                  >
                    {/* Gradient Border */}
                    <div
                      className="absolute inset-0 rounded-md pointer-events-none z-0"
                      style={{
                        borderLeft: "1px solid rgba(255, 255, 255, 0.3)",
                        borderRight: "1px solid rgba(255, 255, 255, 0.3)",
                        borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
                        borderTop: "none",
                        borderBottomLeftRadius: "10px",
                        borderBottomRightRadius: "10px",
                      }}
                    />
                    <p className="relative z-10 text-gray-300 font-semibold">
                      {point}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
   </>
  );
}
