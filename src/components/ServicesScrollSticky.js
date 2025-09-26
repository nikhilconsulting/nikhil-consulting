"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";
import { FiCheck } from "react-icons/fi";


const services = [
  {
    id: "1.",
    title: "SEO Services",
    url:"/services/search-engine-optimisation-page",
    description:
      "Your customers are searching for you - we make sure they find you first. With our tailored SEO strategies, we help your business rank higher on Google, attract the right audience, and convert them into loyal buyers. From optimizing your website to building authority with quality backlinks and engaging content, our SEO approach ensures long term growth. Be it local reach or global visibility, our SEO services put your business in front of the people who matter most.",
    image: "/assets/images/home-page-image/service-section-image/SEO 2.png",
    hashtags: [
      "Onpage & Offpage SEO",
      "Technical Audits",
      "Link Building",
      "Ranking Growth",
      "Keyword Research & Optimization",
    ],
  },
  {
    id: "2.",
    title: "Local SEO",
    url:"/services/local-seo-page",
    description:
      "When people nearby search for services you offer, your business should be their first choice. Our Local SEO strategies put your business on the map - literally. From optimizing your Google Business Profile to improving your local rankings, we ensure your shop, clinic, or service gets more calls, visits, and inquiries. Positive reviews, accurate listings, and local keyword targeting make your brand a trusted name in your area. With Local SEO, customers won’t just find you - they’ll choose you.",
    image: "/assets/images/home-page-image/service-section-image/Local SEO.png",
hashtags: [
  "Google Business Profile Setup",
  "Local Keyword Optimization",
  "Maps Ranking Boost",
  "Review Management",
  "Drive Calls And Visits"
]

  },
  {
    id: "3.",
   title: "Google Ads",
    url:"/services/google-ads-page",
    description:
     "Get instant visibility on Google and reach your ideal customers when they’re ready to buy. Our Google Ads campaigns are designed to bring measurable results while keeping your budget in control. From selecting the right keywords to creating engaging ad copies, we ensure every click has the potential to become a customer. With constant monitoring and optimization, we help you drive more traffic, generate qualified leads, and boost sales quickly. Every campaign is focused on delivering maximum returns.", 
    image: "/assets/images/home-page-image/service-section-image/Google ads.png",
hashtags: [
  "Smart Targeting",
  "Engaging Ad Copies",
  "ROI-Focused Strategy",
  "Conversion Tracking",
  "Measurable Growth"
]

  },
  {
    id: "4.",
     title: "Meta Ads",
    url:"/services/meta-ads-page",
    description:
      "Your audience is already scrolling - let’s put your brand in front of them. With Meta Ads on Facebook and Instagram, we design campaigns that connect emotionally with your audience and turn engagement into results. Whether your goal is leads, sales, or awareness, our strategies deliver by targeting the right people at the right time. Eyecatching creatives, precise targeting, and realtime optimization ensure your message stands out in a crowded social space and inspires people to act immediately.",
    image: "/assets/images/home-page-image/service-section-image/Meta ads.png",
hashtags: [
  "Targeted Audience Reach",
  "Creative Visuals",
  "Lead Generation & Retargeting",
  "Optimized Ad Campaigns",
  "Measurable Results"
]

  },
  {
    id: "5.",
    title: "Website Development",
    url:"/services/website-development-page",
    description:
      "Your website is more than just pages - it’s the heart of your digital presence. We create websites that look stunning, load fast, and guide visitors smoothly toward becoming customers. From responsive designs that work on every device to custom features that reflect your brand, we ensure your website makes a lasting impression. Every site we build is secure, easy to navigate, and optimized for search engines. It’s not just a website, it’s a tool to grow your business.",
    image: "/assets/images/home-page-image/service-section-image/Website Development.png",
hashtags: [
  "Mobile Friendly Design",
  "Fast Secure Websites",
  "Custom Features",
  "SEO Ready Structure",
  "Conversion Focused"
]

  },
  {
    id: "6.",
    title: "Social Media Marketing",
    url:"/services/social-media-marketing-page",
    description:
      "Your customers spend hours on social media every day - we make sure they spend some of it engaging with your brand. Through powerful social media strategies, we help you attract followers, build meaningful connections, and turn engagement into business growth. From eyecatching posts to paid campaigns, we keep your brand relevant and active across platforms like Facebook, Instagram, and LinkedIn. Our goal is simple: make your brand memorable, trusted, and a goto choice for your audience.", 
    image: "/assets/images/home-page-image/service-section-image/Social Media.png",
hashtags: [
  "Engaging Content Creation",
  "Community Interaction",
  "Paid Ad Management",
  "Brand Awareness Growth",
  "Measurable Insights"
]

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
      className="relative w-full min-h-screen text-gray-200 py-12 bg-[linear-gradient(125deg,_#382933,_#372935,_#372831)]"
    >
      {/* Heading + Button */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col md:flex-row justify-between items-center">
        <span className="text-white text-5xl  font-extrabold text-center md:text-left">
          Our Services
        </span>
<div className="mt-4 hidden lg:block">
  <Link
    href="/services"
    className="relative bg-gradient-to-r from-[#5F69A8] via-[#6E8EEE] to-[#8DCBFD] inline-flex items-center overflow-hidden group px-6 py-2  text-lg font-semibold text-white cursor-pointer"
  >
    <span className="relative z-10 flex items-center gap-2">
      Know More In Detail
    </span>
    <span
      className="absolute inset-0 bg-gradient-to-r from-[#372935] via-black to-[#372935] scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-500 ease-out z-0"
      aria-hidden="true"
    ></span>

  </Link>
</div>

      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 mt-10">
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
       <div className="hidden lg:grid lg:grid-cols-2 gap-12 lg:gap-20 pb-10">
          {/* Left: Scrollable Content */}
        <div className="flex flex-col gap-26 flex-1  ">
  {services.map((service, index) => (
<div
  key={service.id}
  ref={(el) => (itemRefs.current[index] = el)}
  className="flex flex-col justify-center border border-[#5F69A8] rounded-2xl p-4 shadow-lg min-h-[480px]"
>
      <div className="flex items-center gap-4 mb-3">
        <span className="text-white text-4xl font-semibold">
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

      <p className="text-gray-100 text-base lg:text-base leading-relaxed mb-6 text-justify">
        {service.description}
      </p>

      <div className="flex flex-wrap gap-4">
{service.hashtags.map((hashtag, idx) => (
  <span
    key={idx}
    className="flex items-center gap-2 bg-gradient-to-r from-[#5F69A8] via-[#6E8EEE] to-[#8DCBFD] text-white py-3 px-4 rounded-full text-base font-medium"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 flex-shrink-0 text-green-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 13l4 4L19 7" />
    </svg>
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
  {/* --- Frame Layer: Top-Left (Layer 1) --- */}
  <div className="absolute inset-0 border-4 border-[#6E8EEE] -translate-x-4 -translate-y-2 -rotate-2 z-0"></div>
  {/* --- Frame Layer: Top-Left (Layer 1) --- */}
  <div className="absolute inset-0 border-8 border-[#5F69A8] -translate-x-1 translate-y-0 -rotate-0 z-0"></div>

  {/* --- Frame Layer: Bottom-Right (Layer 2) --- */}
  <div className="absolute inset-0 border-4 border-[#8DCBFD] translate-x-5 translate-y-5 rotate-2 z-0"></div>

            <div className="relative  z-10 w-full max-w-[600px] h-full min-h-[250px] sm:min-h-[350px] lg:min-h-[70vh]">
              <Image
                src={services[activeIndex].image}
                alt={services[activeIndex].title}
                key={services[activeIndex].id}
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-contain"
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
