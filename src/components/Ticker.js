"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function SocialTicker() {
 const items = [
  { src: "/assets/cropped-1920-1080-1343746.png", alt: "Image 1", link: "https://example.com/1" },
  { src: "/assets/demon-slayer-mitsuri-cherry-blossom-desktop-wallpaper.jpg", alt: "Image 2", link: "https://example.com/2" },
  { src: "/assets/demon-slayer-tanjiro-with-katana-epic-desktop-wallpaper.jpg", alt: "Image 3", link: "https://example.com/3" },
  { src: "/assets/inosuke-demon-slayer-epic-anime-desktop-wallpaper-4k.jpg", alt: "Image 4", link: "https://example.com/4" },
  { src: "/assets/kimetsu-no-yaiba-rengoku-with-katana-desktop-wallpaper.jpg", alt: "Image 5", link: "https://example.com/5" },
  { src: "/assets/images/demon-slayer-giyu-tomioka-cool-desktop-wallpaper-4k.jpg", alt: "Image 6", link: "https://example.com/6" },
  { src: "/assets/images/consulting-page-images/digital-marketing-consultant-og-speaker-1.png", alt: "Image 7", link: "https://example.com/7" },
  { src: "/assets/images/banner2.png", alt: "Image 8", link: "https://example.com/8" },
];


  const CARD_WIDTH = 340;
  const [offset, setOffset] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setOffset((prev) => {
      const maxOffset = items.length * CARD_WIDTH;
      // Reset offset once it scrolls past the first full loop
      if (prev >= maxOffset) {
        return 0;
      }
      return prev + 1;
    });
  }, 40);
  return () => clearInterval(interval);
}, []);


  return (
    <div className="relative w-full flex justify-center items-center overflow-hidden bg-transparent h-[240px]">
      <div
        className="flex"
        style={{
          transform: `translateX(-${offset}px)`,
          transition: "transform 0.03s linear",
          width: `${items.length * CARD_WIDTH * 2}px`,
        }}
      >
        {[...items, ...items].map((item, i) => {
          // Index of first visible card
          const firstVisibleIndex = Math.floor(offset / CARD_WIDTH) % items.length;
          const isActive = i % items.length === firstVisibleIndex;

          return (
            <div
              key={i}
              className="flex justify-center items-center w-[340px] px-2"
            >
              <Link
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div
                  className={`bg-gradient-to-r from-[#5F69A8] via-[#000000] to-[#5F69A8] rounded-xl shadow-xl flex items-center justify-center w-[320px] h-[180px] transition-all duration-500 ${
                    isActive ? "md:scale-110 opacity-100 shadow-2xl" : "md:scale-90"
                  }`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={300}
                    height={200}
                    className="object-contain rounded-xl"
                  />
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
