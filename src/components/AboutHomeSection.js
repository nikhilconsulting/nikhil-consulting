"use client";
import React from "react";

const nftCards = [
  {
    name: "Image 1",
    price: "Any short description can be added",
    image: "/assets/images/home-page-image/about-section-image/1.png",
    style: "top-[20px] left-[48%] rotate-[-10deg]",
  },
  {
    name: "Image 2",
    price: "Any short description can be added",
    image: "/assets/images/home-page-image/about-section-image/2.png",
    style: "top-[170px] left-[65%] rotate-[24deg]",
  },
  {
    name: "Image 3",
    price: "Any short description can be added",
    image: "/assets/images/home-page-image/about-section-image/3.png",
    style: "top-[370px] left-[48%] rotate-[-28deg]",
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
          You can quickly mint NFTs and create your own collections directly on
          BNB Chain (former BSC) and Ethereum (ETH).
          You can quickly mint NFTs and create your own collections directly on
          BNB Chain (former BSC) and Ethereum (ETH).
          You can quickly mint NFTs and create your own collections directly on
          BNB Chain (former BSC) and Ethereum (ETH).
          You can quickly mint NFTs and create your own collections directly on
          BNB Chain (former BSC) and Ethereum (ETH).
        </p>
        <p className="mt-4 text-lg md:text-base text-gray-100 max-w-2xl text-justify">
          You can quickly mint NFTs and create your own collections directly on
          BNB Chain (former BSC) and Ethereum (ETH).
          You can quickly mint NFTs and create your own collections directly on
          BNB Chain (former BSC) and Ethereum (ETH).
           You can quickly mint NFTs and create your own collections directly on
          BNB Chain (former BSC) and Ethereum (ETH).
          You can quickly mint NFTs and create your own collections directly on
          BNB Chain (former BSC) and Ethereum (ETH).
        </p>

        {/* Buttons */}
        <div className="mt-6 flex gap-4 flex-wrap">
          <button className=" text-white px-6 py-2 bg-[linear-gradient(90deg,#5F69A8,#616FB4,#657AC9,#6E8EEE,#80B3F6,#8FCDFF)] backdrop-blur-[15px]  shadow">
            Explore More
          </button>
         
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
              <span className="text-xl font-semibold">{card.name}</span>
              <p className="text-sm text-gray-100">{card.price}</p>
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
