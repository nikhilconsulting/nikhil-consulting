"use client";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from 'react-icons/fa';

const nftCards = [
  {
    name: "Strategic Planning in Action",
    price: "Brainstorming sessions to create impactful digital solutions",
    image: "/assets/images/home-page-image/about-section-image/1.png",
    style: "top-[20px] left-[48%] rotate-[-10deg]",
  },
  {
    name: "Delivering Results",
    price: " Focused discussions that turn ideas into measurable outcomes",
    image: "/assets/images/home-page-image/about-section-image/2.png",
    style: "top-[170px] left-[65%] rotate-[24deg]",
  },
  {
        name: "Collaborating for Success",
    price: "Our team works closely with clients to understand their goals",
    image: "/assets/images/home-page-image/about-section-image/3.png",
    style: "top-[340px] left-[45%] rotate-[-20deg]",
  },
];

export default function NFTShowcaseSection() {
  return (
    <section className="relative min-h-screen bg-[linear-gradient(to_bottom,_#382933,_#372935,_#372831)] text-white px-6 py-20 md:px-20 overflow-hidden">
      {/* Mobile: First Card on Top */}
      <div className="block md:hidden mb-10 z-10 relative">
        <div className="w-full max-w-xs mx-auto bg-[linear-gradient(90deg,#5F69A8,#616FB4,#657AC9,#6E8EEE,#80B3F6,#8FCDFF)] backdrop-blur-[15px] overflow-hidden shadow-xl">
          <div className="p-2">
            <img
              src={nftCards[0].image}
              alt={nftCards[0].name}
              className="w-full h-60 object-cover"
            />
          </div>
          <div className="p-3 bg-[linear-gradient(90deg,#5F69A8,#616FB4,#657AC9,#6E8EEE,#80B3F6,#8FCDFF)] backdrop-blur-[15px]">
            <span className="text-2xl font-semibold">{nftCards[0].name}</span>
            <p className="text-lg text-gray-100">{nftCards[0].price}</p>
          </div>
        </div>
      </div>

      {/* Left content */}
      <div className="max-w-3xl z-10 relative md:mt-10">
        <span className="text-4xl md:text-5xl font-bold leading-tight">
          About Our <br />
          <span className="text-blue-400">Work</span>
        </span>
        <p className="mt-4 text-lg md:text-base text-gray-100 max-w-2xl text-justify">
         At Rankinventiv, we believe in a simple truth effective marketing is a partnership, We're a team of passionate digital strategists and creative experts dedicated to helping ambitious businesses like yours find their voice and connect with their audience. Our mission is to move beyond generic campaigns and craft tailored, data-driven strategies that don't just generate clicks-they build lasting brand value and a clear return on your investment. We pride ourselves on transparent communication and a commitment to your long-term success.
        </p>
        <p className="mt-4 text-lg md:text-base text-gray-100 max-w-2xl text-justify">
         We understand the digital landscape can feel overwhelming. That’s why we’re here to be your guide. From SEO and content creation to paid advertising and social media management, our full-service approach is designed to handle every aspect of your online presence. We focus on delivering measurable, impactful results that help your business not just compete, but lead. Partner with us, and let’s turn your marketing goals into a reality.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex gap-4 flex-wrap">
         <Link
  href="/services"
  className="flex text-xl  lg:text-base items-center text-white hover:scale-105 px-6 py-2 bg-[linear-gradient(90deg,#5F69A8,#616FB4,#657AC9,#6E8EEE,#80B3F6,#8FCDFF)] backdrop-blur-[15px] shadow"
>
  Explore More <FaArrowRight className="ml-2" />
</Link>
         
        </div>
      </div>

      {/* Desktop Cards (Original Positioning) */}
      <div className="absolute top-0 left-40 w-full h-full pointer-events-none hidden md:block">
        {nftCards.map((card, index) => (
          <div
            key={index}
            className={`absolute ${card.style} w-66 bg-[linear-gradient(90deg,#5F69A8,#616FB4,#657AC9,#6E8EEE,#80B3F6,#8FCDFF)] backdrop-blur-[15px] overflow-hidden shadow-2xl transform`}
            style={{ zIndex: 5 - index }}
          >
            <div className="p-2 bg-[linear-gradient(90deg,#5F69A8,#616FB4,#657AC9,#6E8EEE,#80B3F6,#8FCDFF)] backdrop-blur-[15px]">
              <img
                src={card.image}
                alt={card.name}
                className="w-full h-54 object-cover"
              />
            </div>
            <div className="p-3 bg-[linear-gradient(90deg,#5F69A8,#616FB4,#657AC9,#6E8EEE,#80B3F6,#8FCDFF)] backdrop-blur-[15px]">
              <span className="text-lg font-semibold">{card.name}</span>
              <p className="text-base text-gray-100">{card.price}</p>
            </div>
          </div>
        ))}
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
