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
    <>
    <div
      className="relative w-full overflow-hidden h-[180px]  pt-10 lg:pt-0"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
<div
  className="flex gap-12" // <-- gap added here
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
  className="w-[300px] h-[170px] flex-shrink-0"
>
  <div className="w-full h-full p-2  ">
<div
  className={`w-full h-full transition-transform duration-500 overflow-hidden rounded-md ${
    isActive ? "md:scale-90 aura-shadow" : "md:scale-90 aura-shadow"
  }`}
>

      <Image
        src={item.src}
        alt={item.alt}
        quality={100}
        width={300}
        height={200}
        className="w-full h-full object-contain "
      />
    </div>
  </div>
</div>

          );
        })}
      </div>
    </div>
    <style jsx>{`
  .aura-shadow {
    box-shadow: 0 0 25px rgba(255, 255, 255, 0.5);
  }
`}</style>

    </>
  );
}
