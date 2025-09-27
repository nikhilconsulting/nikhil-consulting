"use client";
import Image from "next/image";

export default function AboutPageSection3() {
  return (
    <>
   <section className=" relative bg-[linear-gradient(125deg,_#382933,_#372935,_#372831)]  py-26 px-6 overflow-visible">

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-0">

        {/* Text Section */}
        <div className="text-white order-2 lg:order-1 lg:mt-0 mt-8 border-2 border-[#8DCBFD]  lg:p-8 p-4  ">
          <span className="text-4xl font-bold leading-snug">
           What We Do ?
          </span>

          <p className="text-lg md:text-base text-gray-200 mt-4 text-justify">
            At Rankinventiv, we create bespoke digital marketing strategies that resonate with your business vision and industry demands. Moving beyond generic campaigns, we provide end-to-end execution and ongoing optimization to ensure your brand grows consistently and meaningfully.
          </p>

          <p className="text-lg md:text-base text-gray-200 mt-2 text-justify">
           Our expertise covers SEO services in Varanasi and beyond, social media marketing, branding solutions, paid advertising campaigns, and business consulting. Serving sectors like retail, education, healthcare, real estate, and technology, we adapt our approach to each industry’s unique challenges. By combining data-driven insights with creative strategy, we help your brand reach the right audience, build credibility, and turn leads into loyal customers.
          </p>

         <br />

          <span className="mt-6 text-lg md:text-base text-gray-100 text-justify ">
            By aligning your goals with the right digital tools and strategies, we ensure your brand attracts the right audience, builds trust, and converts leads into loyal customers.

          </span>
          <ul className="mt-3 grid md:grid-cols-2 gap-2 md:text-base text-lg  font-semibold text-gray-200 list-disc list-inside">
            <li>Local & Global Presence</li>
            <li>Expert-Led Team</li>
            <li>Sector-Wide Consulting</li>
            <li>Sustainable Growth</li>
          </ul>

        
        </div>

        {/* Image Section */}
   <div className="relative flex justify-end items-center h-auto order-1 lg:order-2 lg:mt-0 mt-20">
  {/* Spotlight Glow Behind Image */}
  <div className="absolute inset-0 flex items-center justify-center z-0">
    <div className="w-[250px] sm:w-[350px] md:w-[450px] lg:w-[500px] h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] bg-gradient-radial from-[#8FCDFF]/40 via-[#5F69A8]/25 to-transparent rounded-full blur-3xl"></div>
  </div>

  <div className="relative z-10 w-full max-w-[500px] h-auto max-h-[500px]">
    {/* 🔹 3D Tilted Gradient Frame Behind Image */}
    <div className="absolute -inset-4 rotate-[4deg] bg-gradient-to-b from-[#000000] via-[#5F69A8] to-[#000000] z-0 shadow-2xl"></div>

    {/* 🔹 Outer Static Border Frame (counter-clockwise) */}
    <div className="absolute -inset-2 border-2 border-[#6E8EEE]/50 rotate-[-1deg] z-10"></div>

    {/* 🖼️ Actual Image */}
    <Image
      src="/assets/images/about-us-page-image/About us 1.png"
      alt="Instructor"
      quality={100}
      width={500}
      height={500}
      priority
      className="w-full h-auto object-cover rounded-lg relative z-20"
    />
  </div>
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
    </>
  );
}
