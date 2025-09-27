"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function SocialTicker() {
  const items = [
    { src: "/assets/images/herosection-ticker-images/1.png", alt: "Image 1" },
    { src: "/assets/images/herosection-ticker-images/2.png", alt: "Image 2" },
    { src: "/assets/images/herosection-ticker-images/3.png", alt: "Image 3" },
    { src: "/assets/images/herosection-ticker-images/4.png", alt: "Image 4" },
    { src: "/assets/images/herosection-ticker-images/5.png", alt: "Image 5" },
    { src: "/assets/images/herosection-ticker-images/6.png", alt: "Image 6" },
  ];

  const CARD_WIDTH = 340;
  const [offset, setOffset] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

useEffect(() => {
  if (isPaused) return;

  const maxOffset = items.length * CARD_WIDTH;

  const interval = setInterval(() => {
    setOffset((prev) => (prev + 1) % maxOffset);
  }, 40);

  return () => clearInterval(interval);
}, [isPaused, items.length]);


  return (
    <div
      className="relative w-full overflow-hidden h-[180px] bg-[linear-gradient(125deg,_#000000,_#372935,_#000000)]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div
        className="flex"
        style={{
          transform: `translateX(-${offset}px)`,
          transition: "transform 0.03s linear",
          width: `${items.length * CARD_WIDTH * 2}px`,
        }}
      >
        {[...items, ...items].map((item, i) => {
          const firstVisibleIndex = Math.floor(offset / CARD_WIDTH) % items.length;
          const isActive = i % items.length === firstVisibleIndex;

          return (
            <div
              key={i}
              className="w-[340px] h-[180px] flex-shrink-0 m-0 p-0"
            >
              <div
               
                className="block w-full h-full"
              >
                <div
                  className={`w-full h-full transition-transform duration-500 overflow-hidden ${
                    isActive ? "md:scale-100 shadow-2xl" : "md:scale-100"
                  }`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    quality={100}
                    width={340}
                    height={180}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
