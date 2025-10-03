"use client";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from 'react-icons/fa';

const nftCards = [
  {
    name: "Strategic Planning in Action",
    price: "Brainstorming sessions to create impactful digital solutions",
    image: "/assets/images/home-page-image/about-section-image/1.png",
    style: "top-[34px] left-[47%] rotate-[-10deg]",
   
  },
  {
    name: "Delivering Results",
    price: "Focused discussions that turn ideas into measurable outcomes",
    image: "/assets/images/home-page-image/about-section-image/2.png",
    style: "top-[170px] left-[65%] rotate-[24deg]",
    
  },
  {
    name: "Collaborating for Success",
    price: "Our team works closely with clients to understand their goals",
    image: "/assets/images/home-page-image/about-section-image/3.png",
    style: "top-[320px] left-[45%] rotate-[-30deg]",
   
  },
];


export default function NFTShowcaseSection() {
  return (
    <section className="relative grid bg-[linear-gradient(125deg,_#382933,_#372935,_#372831)] text-white px-6 py-18 md:px-20 overflow-hidden">
     <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 max-w-7xl mx-auto items-start">

      {/* Left content */}
      <div className="max-w-3xl  z-10 relative lg:ml-20 xl:ml-0 ml-0  md:order-last xl:order-none">
        <span className="text-4xl md:text-5xl font-bold leading-tight">
          About Our <br />
          <span className="text-[#8FCDFF]">Work</span>
        </span>
        <p className="mt-4 text-lg md:text-base text-gray-100 max-w-2xl  text-justify">
         At Rankinventiv, we believe in a simple truth effective marketing is a partnership, We're a team of passionate digital strategists and creative experts dedicated to helping ambitious businesses like yours find their voice and connect with their audience. Our mission is to move beyond generic campaigns and craft tailored, data-driven strategies that don't just generate clicks-they build lasting brand value and a clear return on your investment. We pride ourselves on transparent communication and a commitment to your long-term success.
        </p>
        <p className="mt-4 text-lg md:text-base text-gray-100 max-w-2xl text-justify">
         We understand the digital landscape can feel overwhelming. That’s why we’re here to be your guide. From SEO and content creation to paid advertising and social media management, our full-service approach is designed to handle every aspect of your online presence. We focus on delivering measurable, impactful results that help your business not just compete, but lead. Partner with us, and let’s turn your marketing goals into a reality.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex gap-4 flex-wrap ">
         <Link
  href="/about-us"
  className="relative inline-flex items-center overflow-hidden group text-xl  lg:text-base items-center text-white  px-6 py-2  shadow"
>


          {/* Hover background (animated) */}
      <span
        className="absolute inset-0 bg-gradient-to-r from-[#372935] via-black to-[#372935] scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-500 ease-out z-0"
        aria-hidden="true"
      ></span>

      {/* Default background */}
      <span
        className="absolute inset-0 bg-gradient-to-r from-[#5F69A8] via-[#6E8EEE] to-[#8DCBFD] z-[-1]"
        aria-hidden="true"
      ></span>
     


 <span className="relative z-10 flex items-center gap-2">Explore More <FaArrowRight className="ml-2 text-lg" />
</span> 
</Link>


         
        </div>
      </div>

      {/* Desktop Cards (Original Positioning) */}
    {/* 👇 lg and up: Floating styled cards */}
<div className="absolute top-0 left-40 w-full h-full pointer-events-none hidden xl:block">
  {nftCards.map((card, index) => (
    <div
      key={index}
      className={`absolute ${card.style} w-66 bg-[linear-gradient(90deg,#5F69A8,#616FB4,#657AC9,#6E8EEE,#80B3F6,#8FCDFF)] backdrop-blur-[15px] overflow-hidden shadow-2xl transform`}
      style={{ zIndex: 5 - index }}
    >
      <div className="p-2">
        <img
          src={card.image}
          alt={card.name}
          className="w-full h-46 object-cover"
        />
      </div>
      <div className="p-2">
        <span className="text-lg font-semibold">{card.name}</span>
        <p className="text-base text-gray-100">{card.price}</p>
      </div>
    </div>
  ))}
</div>

{/* 👇 md only: Stacked cards like point items */}

<div className="w-full h-full pointer-events-none block xl:hidden md:block hidden order-first">
  <div className="flex flex-row gap-x-6 relative lg:ml-10"> {/* ← shift left here */}
    {nftCards.map((card, index) => (
      <div
        key={index}
        className={` w-64 bg-[linear-gradient(90deg,#5F69A8,#616FB4,#657AC9,#6E8EEE,#80B3F6,#8FCDFF)] backdrop-blur-[15px] overflow-hidden shadow-2xl transform`}
        style={{ zIndex: 5 - index }}
      >
        <div className="p-2">
          <img
            src={card.image}
            alt={card.name}
            className="w-full h-44 lg:h-54 object-cover"
          />
        </div>
        <div className="p-2">
          <span className="text-lg font-semibold text-white">{card.name}</span>
          <p className="text-base text-gray-100">{card.price}</p>
        </div>
      </div>
    ))}
  </div>
</div>
</div>
 {/* Mobile: First Card on Top */}
      <div className="block md:hidden mb-10 z-10 relative order-first">
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
