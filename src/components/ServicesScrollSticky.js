"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";

const services = [
  {
    id: "1.",
    title: "SEO Services",
    description:
      "Drive organic traffic with our comprehensive SEO solutions tailored for your niche and location. SEO-friendly, responsive websites built to convert visitors into loyal customers. SEO-friendly, responsive websites built to convert visitors into loyal customers. SEO-friendly, responsive websites built to convert visitors into loyal customers.SEO-friendly, responsive websites built to convert visitors into loyal customers.SEO-friendly, responsive websites built to convert visitors into loyal customers.SEO-friendly, responsive websites built to convert visitors into loyal customers.",
    image: "/assets/images/home-page-image/service-section-image/SEO 2.png",
    hashtags: [
      "ModelingIndustry",
      "BrandEstablishment",
      "MilestoneAchievement",
      "MilestoneAchievement",
      "MilestoneAchievement",
    ],
  },
  {
    id: "2.",
    title: "Social Media Marketing",
    description:
      "Engage and grow your loyal community through our strategic content and paid campaign expertise.Engage and grow your loyal community through our strategic content and paid campaign expertise.Engage and grow your loyal community through our strategic content and paid campaign expertise.Engage and grow your loyal community through our strategic content and paid campaign expertise.Engage and grow your loyal community through our strategic content and paid campaign expertise.",
    image: "/assets/images/home-page-image/service-section-image/Social Media.png",
    hashtags: [
      "ModelingIndustry",
      "BrandEstablishment",
      "MilestoneAchievement",
      "ModelingIndustry",
      "BrandEstablishment",
    ],
  },
  {
    id: "3.",
    title: "Meta Ads",
    description:
      "From search ads to display and Facebook promotions, we are a certified Google Ads service provider in Varanasi. Engage and grow your loyal community through our strategic content and paid campaign expertise. Engage and grow your loyal community through our strategic content and paid campaign expertise.Engage and grow your loyal community through our strategic content and paid campaign expertise.Engage and grow your loyal community through our strategic content and paid campaign expertise.",
    image: "/assets/images/home-page-image/service-section-image/Meta ads.png",
    hashtags: [
      "ModelingIndustry",
      "BrandEstablishment",
      "MilestoneAchievement",
      "ModelingIndustry",
      "BrandEstablishment",
    ],
  },
  {
    id: "4.",
    title: "Local SEO",
    description:
      "Rank your business on Google Maps and local search with our GMB listing service in Varanasi. Engage and grow your loyal community through our strategic content and paid campaign expertise.Engage and grow your loyal community through our strategic content and paid campaign expertise.Engage and grow your loyal community through our strategic content and paid campaign expertise.Engage and grow your loyal community through our strategic content and paid campaign expertise.",
    image: "/assets/images/home-page-image/service-section-image/Local SEO.png",
    hashtags: [
      "ModelingIndustry",
      "BrandEstablishment",
      "MilestoneAchievement",
      "ModelingIndustry",
      "BrandEstablishment",
    ],
  },
  {
    id: "5.",
    title: "Website Development",
    description:
      "SEO-friendly, responsive websites built to convert visitors into loyal customers. Engage and grow your loyal community through our strategic content and paid campaign expertise. Engage and grow your loyal community through our strategic content and paid campaign expertise.Engage and grow your loyal community through our strategic content and paid campaign expertise.Engage and grow your loyal community through our strategic content and paid campaign expertise.",
    image: "/assets/images/home-page-image/service-section-image/Website Development.png",
    hashtags: [
      "ModelingIndustry",
      "BrandEstablishment",
      "MilestoneAchievement",
      "ModelingIndustry",
      "BrandEstablishment",
    ],
  },
  {
    id: "6.",
    title: "Google Ads",
    description:
      "SEO-friendly, responsive websites built to convert visitors into loyal customers. Engage and grow your loyal community through our strategic content and paid campaign expertise. Engage and grow your loyal community through our strategic content and paid campaign expertise.Engage and grow your loyal community through our strategic content and paid campaign expertise.Engage and grow your loyal community through our strategic content and paid campaign expertise.",
    image: "/assets/images/home-page-image/service-section-image/Google ads.png",
    hashtags: [
      "ModelingIndustry",
      "BrandEstablishment",
      "MilestoneAchievement",
      "ModelingIndustry",
      "BrandEstablishment",
    ],
  },
];

export default function ServicesScrollSticky() {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      itemRefs.current.forEach((ref, index) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="relative w-full min-h-screen text-gray-200 pt-32 lg:pt-20 lg:pb-20"
      style={{
        background: "linear-gradient(to bottom, #382933, #372935, #372831)",
      }}
    >
      {/* Heading + Button */}
      <div className="max-w-[1280px] mx-auto mt-10 px-4 sm:px-6 lg:px-10 flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold mt-8 text-center md:text-left">
          Our Services
        </h1>
        <div className="mt-4 md:mt-8">
          <Link href="/services">
            <button className=" bg-gradient-to-r from-[#5F69A8] via-[#6E8EEE] to-[#8DCBFD] text-white transition hover:scale-105 cursor-pointer px-6 py-3 text-base hover:bg-gray-200 transition">
              See More Services
            </button>
          </Link>
        </div>
      </div>

      {/* Scroll Sticky Wrapper */}
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 px-4 sm:px-6 mt-10">
        {/* Left Scroll Text */}
        <div className="flex flex-col gap-10 flex-1">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => (itemRefs.current[index] = el)}
              className="h-screen flex flex-col justify-center"
            >
             <div className="flex items-center gap-4 mb-3">
  <h2 className="text-white text-3xl sm:text-4xl font-extrabold">
    {service.id} {service.title}
  </h2>

 <Link
  href="/services"
  className="flex items-center gap-4 text-white 
    bg-[linear-gradient(90deg,#5F69A8,#616FB4,#657AC9,#6E8EEE,#80B3F6,#8FCDFF)] 
    rounded-full w-14 h-14 shadow-lg justify-center
    hover:bg-none hover:bg-white hover:text-black 
    transition-colors duration-300 ease-in-out transition hover:scale-105"
>
  <FiArrowUpRight className="w-7 h-7" />
</Link>

</div>

<p className="text-gray-100 text-base sm:text-lg leading-relaxed mb-6 text-justify">
  {service.description}
</p>


              {/* Hashtags Section */}
              <div className="flex flex-wrap gap-4">
                {service.hashtags.map((hashtag, idx) => (
                  <span
                    key={idx}
                    className="bg-gradient-to-r from-[#5F69A8] via-[#6E8EEE] to-[#8DCBFD] text-white py-3 px-4 rounded-full text-base font-medium"
                  >
                    {hashtag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      {/* Right Sticky Image */}
<div className="sticky top-38 lg:flex-1 h-[300px] sm:h-[400px] lg:h-[70vh] flex items-center justify-center relative">

  {/* 1. Spotlight Glow Behind Image */}
  <div className="absolute inset-0 flex items-center justify-center z-0">
    <div className="w-[250px] sm:w-[350px] md:w-[450px] lg:w-[500px] h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] bg-gradient-radial from-[#8FCDFF]/40 via-[#5F69A8]/25 to-transparent rounded-full blur-3xl"></div>
  </div>

  {/* 2. Image Container with Aura */}
  <div className="relative z-10 w-full max-w-[600px] h-full">
    

    {/* 2b. Actual Image */}
   <Image
  src={services[activeIndex].image}
  alt={services[activeIndex].title}
  key={services[activeIndex].id}
  fill
  sizes="(max-width: 768px) 100vw, 600px"
  className="object-contain rounded-xl"
  quality={100} // increase clarity
  priority // preload all (see note below)
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
  );
}
