"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";

const services = [
  {
    id: "1.",
    title: "SEO Services",
    url:"/services/search-engine-optimisation-page",
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
    url:"/services/social-media-marketing-page",
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
    url:"/services/meta-ads-page",
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
    url:"/services/local-seo-page",
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
    url:"/services/website-development-page",
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
    url:"/services/google-ads-page",
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
      className="relative w-full min-h-screen text-gray-200 py-12"
      style={{
        background: "linear-gradient(to bottom, #382933, #372935, #372831)",
      }}
    >
      {/* Heading + Button */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col md:flex-row justify-between items-center">
        <span className="text-white text-5xl  font-extrabold text-center md:text-left">
          Our Services
        </span>
        <div className="mt-4 md:mt-8 hidden lg:block">
  <Link href="/services">
    <button className="bg-gradient-to-r from-[#5F69A8] via-[#6E8EEE] to-[#8DCBFD] text-white transition hover:scale-105 cursor-pointer px-6 py-3 text-lg">
      Know More In Detail
    </button>
  </Link>
</div>

      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 mt-10">

        {/* ✅ Mobile Layout: Image + Content stacked */}
       {/* ✅ Mobile Layout: Title + Image + Content */}
<div className="flex flex-col gap-20 lg:hidden">
  {services.map((service) => (
    <div key={service.id} className="flex flex-col gap-6 px-2 sm:px-4">
      {/* Title */}
      <div className="flex items-center gap-4 mb-3">
  <span className="text-white text-4xl font-semibold">
    {service.id} {service.title}
  </span>

  <Link
    href={service.url}
    className="flex items-center justify-center text-white 
      bg-[linear-gradient(90deg,#5F69A8,#616FB4,#657AC9,#6E8EEE,#80B3F6,#8FCDFF)] 
      rounded-full w-10 h-10 shadow-lg"
  >
    <FiArrowUpRight className="w-6 h-6" />
  </Link>
</div>

      

      {/* Image */}
      <div className="relative w-full h-[250px] sm:h-[300px]">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="100vw"
          className="object-contain rounded-xl"
          quality={100}
          priority
        />
      </div>

      {/* Description */}
      <p className="text-gray-100 text-base sm:text-lg leading-relaxed text-justify">
        {service.description}
      </p>

      {/* Hashtags */}
      <div className="flex flex-wrap gap-3 mt-3">
        {service.hashtags.map((tag, idx) => (
          <span
            key={idx}
            className="bg-gradient-to-r from-[#5F69A8] via-[#6E8EEE] to-[#8DCBFD] text-white py-2 px-4 rounded-full text-sm font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  ))}
</div>
{/* Show See More Services at bottom on mobile */}
<div className="mt-10 flex justify-center lg:hidden">
  <Link href="/services">
    <button className="bg-gradient-to-r from-[#5F69A8] via-[#6E8EEE] to-[#8DCBFD] text-white transition hover:scale-105 cursor-pointer px-6 py-3 text-xl">
      Know More In Detail
    </button>
  </Link>
</div>



        {/* ✅ Desktop Layout: Scrollable text + sticky image */}
        <div className="hidden lg:flex gap-12 lg:gap-24">
          {/* Left: Scrollable Content */}
          <div className="flex flex-col gap-10 flex-1">
            {services.map((service, index) => (
              <div
                key={service.id}
                ref={(el) => (itemRefs.current[index] = el)}
                className="h-screen flex flex-col justify-center"
              >
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-white text-4xl  font-semibold">
                    {service.id} {service.title}
                  </span>
               <Link
  href={service.url}
  className="flex items-center gap-4 text-white 
    bg-[linear-gradient(90deg,#5F69A8,#616FB4,#657AC9,#6E8EEE,#80B3F6,#8FCDFF)] 
    rounded-full w-10 h-10 shadow-lg justify-center
    transition hover:scale-105"
>
  <FiArrowUpRight className="w-7 h-7" />
</Link>

                </div>

                <p className="text-gray-100 text-base sm:text-lg leading-relaxed mb-6 text-justify">
                  {service.description}
                </p>

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

          {/* Right: Sticky Image */}
          <div className="lg:sticky top-38 lg:flex-1 w-full h-[300px] sm:h-[400px] lg:h-[70vh] flex items-center justify-center relative">
            <div className="absolute inset-0 flex items-center justify-center z-0">
              <div className="w-[250px] sm:w-[350px] md:w-[450px] lg:w-[500px] h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] bg-gradient-radial from-[#8FCDFF]/40 via-[#5F69A8]/25 to-transparent rounded-full blur-3xl"></div>
            </div>
            <div className="relative z-10 w-full max-w-[600px] h-full min-h-[250px] sm:min-h-[350px] lg:min-h-[70vh]">
              <Image
                src={services[activeIndex].image}
                alt={services[activeIndex].title}
                key={services[activeIndex].id}
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-contain rounded-xl"
                quality={100}
                priority
              />
            </div>
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
