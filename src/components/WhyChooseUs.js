"use client";
import { useState } from "react";
import ContactFormModal from "./ContactFormModal";

export default function WhyChooseUs() {
    const [showForm, setShowForm] = useState(false);
  return (
    <>
    <section
      className="w-full min-h-screen flex flex-col justify-center py-24 px-4 sm:px-8 md:px-16 lg:px-20 text-white "
      style={{
        background: "linear-gradient(to bottom, #382933, #372935, #372831)",
      }}
    >
      {/* Heading + Description */}
      <div className="text-center max-w-6xl mx-auto mb-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-white">
          Why Choose Us?
        </h2>
        <p className="text-base md:text-base text-gray-300 text-justify">
         Digital marketing consulting should deliver measurable growth, not wasted expenses. Our consulting helps businesses use their budget wisely by focusing on strategies that actually work. From SEO consulting and Local SEO to Google Business Profile optimization, Google Ads, and Meta Ads, we ensure every campaign is data-driven and designed to maximize ROI. With the right guidance, you save cost, improve visibility, and attract the customers who matter most. </p>
        {/* Know More Button */}
        <button 
          onClick={() => setShowForm(true)}
        className="text-white font-semibold py-2 px-6 mt-4 cursor-pointer transition hover:scale-105 "
         style={{
                background:
                  "linear-gradient(90deg, #5F69A8, #616FB4, #657AC9, #6E8EEE, #80B3F6, #8FCDFF)",
              }}>
          Know More
        </button>
      </div>

      {/* Content Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center lg:ml-14">
        {/* Left - Text Paragraph */}
        <div className="text-gray-300 text-justify leading-relaxed text-base mb-2">
                    <p className="mb-3">
           Over the years, we have guided startups, business owners, and entrepreneurs to achieve consistent online growth. Our digital marketing consulting provides a clear roadmap, combining proven techniques with customized solutions for your brand. Whether it’s ranking higher on Google, generating leads through paid ads, or building a strong social media presence, we help you grow faster, smarter, and with long-term results.

          </p>
                   <ul className=" list-disc list-outside text-gray-300 ml-4">
        <li>
          <strong>Save 35% Budget</strong> – Our consulting ensures smarter use of your money with targeted, efficient strategies.
        </li>
        <li>
          <strong>Growth-Focused Results</strong> – We help businesses scale online using SEO, Google Ads, and Meta Ads.
        </li>
        <li>
          <strong>Proven ROI</strong> – Delivered measurable growth and higher returns for all our clients.
        </li>
        <li>
          <strong>Trusted by 116+ Businesses</strong> – Successfully worked with 87+ businesses and guided 46+ owners and startup founders.
        </li>
        <li>
          <strong>Experience That Matters</strong> – Real strategies, real results — driving long-term digital success.
        </li>
      </ul>
        </div>

        {/* Right - Image */}
        <div className="flex justify-center">
          <div className="w-full max-w-sm md:max-w-md lg:max-w-lg aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
            <img
              src="/assests/images/banner.jpg"
              alt="Our Team"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
     <ContactFormModal showForm={showForm} setShowForm={setShowForm} />
    </>
  );
}
