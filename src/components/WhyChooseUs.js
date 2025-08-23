"use client";
import { useState } from "react";
import ContactFormModal from "./ContactFormModal";

export default function WhyChooseUs() {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <section
        className="w-full min-h-screen flex flex-col justify-center py-16 px-4 sm:px-8 md:px-16 lg:px-20 text-white"
        style={{
          background: "linear-gradient(to bottom, #382933, #372935, #372831)",
        }}
      >
        {/* Heading + Description */}
        <div className="text-center max-w-6xl mx-auto mb-8">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-white">
            Why Choose Us?
          </h2>
        </div>

        {/* Content Row */}
        <div className="grid grid-cols-1 xl:grid-cols-2 items-center ">
          {/* Right - Image */}
       <div className="flex justify-center md:justify-center lg:mb-4 ">
  <div
    className="w-full max-w-sm md:max-w-md lg:max-w-lg overflow-hidden shadow-lg h-[300px] lg:h-[480px]"
  >
    <img
      src="/assests/images/banner.jpg"
      alt="Our Team"
      className="w-full h-full object-cover"
    />
  </div>
</div>


          {/* Left - Text Paragraph */}
          <div className="text-gray-300 text-justify leading-relaxed text-base mb-8 mt-2 xl:mr-16">
            <p className="mb-2">
              Digital marketing consulting should deliver measurable growth, not
              wasted expenses. Our consulting helps businesses use their budget
              wisely by focusing on strategies that actually work. From SEO
              consulting and Local SEO to Google Business Profile optimization,
              Google Ads, and Meta Ads, we ensure every campaign is data-driven
              and designed to maximize ROI. With the right guidance, you save
              cost, improve visibility, and attract the customers who matter
              most.
            </p>
            <p className="mb-6">
              Over the years, we have guided startups, business owners, and
              entrepreneurs to achieve consistent online growth. Our digital
              marketing consulting provides a clear roadmap, combining proven
              techniques with customized solutions for your brand. Whether it’s
              ranking higher on Google, generating leads through paid ads, or
              building a strong social media presence, we help you grow faster,
              smarter, and with long-term results.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-10 max-w-3xl mx-auto">
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
      <ContactFormModal showForm={showForm} setShowForm={setShowForm} />
    </>
  );
}
