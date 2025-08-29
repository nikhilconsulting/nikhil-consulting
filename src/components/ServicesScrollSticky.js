'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const services = [
  {
    id: 0,
    title: "SEO Services",
    description: "Drive organic traffic with our comprehensive SEO solutions tailored for your niche and location.",
    image: "/assets/images/service_thumb_1.jpg"
  },
  {
    id: 1,
    title: "Social Media Marketing",
    description: "Engage and grow your loyal community through our strategic content and paid campaign expertise.",
    image: "/assets/images/service_thumb_2.jpg"
  },
  {
    id: 2,
    title: "Pay Per Click (PPC)",
    description: "From search ads to display and Facebook promotions, we are a certified Google Ads service provider in Varanasi.",
    image: "/assets/images/service_thumb_3.jpg"
  },
  {
    id: 3,
    title: "Local SEO",
    description: "Rank your business on Google Maps and local search with our GMB listing service in Varanasi.",
    image: "/assets/images/service_thumb_4.jpg"
  },
  {
    id: 4,
    title: "Website Development",
    description: "SEO-friendly, responsive websites built to convert visitors into loyal customers.",
    image: "/assets/images/service_thumb_5.jpg"
  }
];

export default function ServicesScrollSticky() {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      itemRefs.current.forEach((ref, index) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
   <section
  className="w-full min-h-screen text-gray-200 pt-32 lg:pt-20 lg:pb-20"
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
            <button className="bg-white text-black px-6 py-3 rounded-md text-base hover:bg-gray-200 transition">
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
              <h2 className="text-white text-3xl sm:text-4xl font-extrabold mb-3">
                {service.title}
              </h2>
              <p className="text-gray-100 text-base sm:text-lg leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Right Sticky Image */}
        <div className="sticky top-24 lg:flex-1 h-[300px] sm:h-[400px] lg:h-[70vh] flex items-center justify-center">
          <img
            src={services[activeIndex].image}
            alt={services[activeIndex].title}
            key={services[activeIndex].id}
            className="w-full max-w-[600px] h-full rounded-xl object-cover shadow-lg transition-opacity duration-500 ease-in-out"
          />
        </div>
      </div>
    </section>
  );
}
