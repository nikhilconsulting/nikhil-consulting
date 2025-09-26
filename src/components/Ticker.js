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
              <Link
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
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
                    width={340}
                    height={180}
                    className="w-full h-full object-cover"
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
