"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export default function ServicesSectionAligned() {
    
  const services = [
    { id: "01", name: "Search Engine Optimisation (SEO)", image: "/assets/images/service_thumb_1.jpg", url: "/services/search-engine-optimisation-page" },
    { id: "02", name: "Local SEO", image: "/assets/images/service_thumb_2.jpg",  url: "/services/local-seo-page" },
    { id: "03", name: "Website Development", image: "/assets/images/service_thumb_3.jpg" , url: "/services/website-development-page" },
    { id: "04", name: "Google Ads", image: "/assets/images/service_thumb_4.jpg" , url: "/services/google-ads-page" },
  ];

  const [hoveredService, setHoveredService] = useState(null);
  const defaultImage = services[0].image;
  const defaultName = services[0].name;

useEffect(() => {
  services.forEach(service => {
    const imgPreload = new globalThis.Image();
    imgPreload.src = service.image;
  });
}, []);





  return (
    <section className="bg-[linear-gradient(to_bottom,_#382933,_#372935,_#372831)] text-white min-h-screen flex items-center justify-center px-10 pt-38 pb-16 relative">
      {/* Vertical Side Label */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 rotate-[-90deg] bg-[linear-gradient(90deg,#5F69A8,#616FB4,#657AC9,#6E8EEE,#80B3F6,#8FCDFF)] backdrop-blur-[15px] text-white px-3 py-1 rounded-tr-md rounded-tl-md text-base tracking-wider">
        WHAT WE DO
      </div>

      <div className="max-w-[1200px] w-full grid grid-cols-12 items-center">
        {/* Left Column: Heading + Services List */}
        <div className="col-span-5 space-y-8 h-[460px] flex flex-col justify-center lg:ml-14">
          <h2 className="text-4xl font-bold leading-tight">
            Our{" "}
            <span className="bg-[linear-gradient(90deg,#5F69A8,#616FB4,#657AC9,#6E8EEE,#80B3F6,#8FCDFF)] backdrop-blur-[15px] text-white px-4 py-1 rounded-md">
              Services
            </span>
          </h2>
          <p className="text-gray-100 max-w-[380px] text-base">
            We offer a range of creative and digital services designed to help your brand stand out.
          </p>

       <div className="space-y-5 max-w-[380px]">
            {services.map((item, idx) => (
                <Link href={item.url} key={idx} className="block" >
              <div
                key={idx}
                className="group p-[2px] rounded-full cursor-pointer transition hover:scale-105 bg-transparent "
                onMouseEnter={() => setHoveredService(item)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div
                  className="flex items-center justify-between px-6 py-5 rounded-full w-full h-full transition-all duration-300 ease-in-out
                    bg-black/30  text-gray-400
                    group-hover:text-white
                    group-hover:bg-[linear-gradient(90deg,#5F69A8,#616FB4,#657AC9,#6E8EEE,#80B3F6,#8FCDFF)]"
                >
                  <div className="flex items-center gap-5">
                    <span className="text-lg font-semibold group-hover:text-white">{item.id}</span>
                    <span className="font-medium">{item.name}</span>
                  </div>
                  <span className="text-xl transition-colors group-hover:text-white">→</span>
                </div>
              </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Center Image Column */}
        <div className="col-span-4 flex justify-center">
          <div className="relative w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-[460px] rounded-2xl overflow-hidden shadow-lg">
          <Image
  key={hoveredService ? hoveredService.image : defaultImage}
  src={hoveredService ? hoveredService.image : defaultImage}
  alt={hoveredService ? hoveredService.name : defaultName}
  fill
  priority={true}       // <-- Add this to prioritize loading
  className="object-cover rounded-2xl"
  sizes="(max-width: 768px) 100vw, 600px"
/>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-span-3 flex flex-col space-y-6 max-w-[250px] h-[460px] ml-6">
          {/* Box 1 */}
          <div className="relative rounded-2xl p-6 flex-1 flex flex-col justify-between bg-[#372831]">
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                padding: "2px",
                background:
                  "linear-gradient(to top, rgba(95,105,168,0.8), rgba(95,105,168,0) 70%)",
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
                borderRadius: "16px",
              }}
            ></div>

            <p className="text-base text-gray-300 mb-4 leading-relaxed">
              Ever wondered how design magic happens?
            </p>
            <div className="flex items-center justify-between">
              <span className="text-2xl ml-2">
                See what <br /> we offer
              </span>
              <Link
                href="/services"
                className="flex items-center gap-4 text-black bg-white rounded-full w-14 h-14 shadow-lg justify-center
              hover:bg-[linear-gradient(90deg,#5F69A8,#616FB4,#657AC9,#6E8EEE,#80B3F6,#8FCDFF)] backdrop-blur-[15px] cursor-pointer hover:text-white transition-colors duration-300 ease-in-out"
              >
                <FiArrowUpRight className="w-7 h-7" />
              </Link>
            </div>
          </div>

          {/* Box 2 */}
          <div className="bg-[linear-gradient(90deg,#5F69A8,#616FB4,#657AC9,#6E8EEE,#80B3F6,#8FCDFF)] backdrop-blur-[15px] text-black p-6 rounded-xl flex-1 flex flex-col justify-between">
            <p className="text-base mb-6 leading-relaxed text-gray-100">
              Looking for design experts who can bring your vision to life?
            </p>

            <div className="flex items-center justify-between">
              <span className=" text-2xl text-white">
                Learn about <br /> our firm
              </span>
              <Link
                href="/about-us"
                className="flex items-center gap-4 text-black bg-white rounded-full w-14 h-14 shadow-lg justify-center
              hover:bg-[linear-gradient(to_bottom,_#382933,_#372935,_#372831)]  backdrop-blur-[15px] cursor-pointer hover:text-white transition-colors duration-300 ease-in-out"
              >
                <FiArrowUpRight className="w-7 h-7" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
