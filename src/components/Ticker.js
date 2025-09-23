"use client";
import Image from "next/image";

export default function SocialTicker() {
  const items = [
    { src: "/assets/cropped-1920-1080-1343746.png", alt: "Google Tag Manager", link: "https://tagmanager.google.com" },
    { src: "/assets/demon-slayer-mitsuri-cherry-blossom-desktop-wallpaper.jpg", alt: "Semrush", link: "https://semrush.com" },
    { src: "/assets/demon-slayer-tanjiro-with-katana-epic-desktop-wallpaper.jpg", alt: "Google Partner", link: "https://marketingplatform.google.com/about/partners/" },
    { src: "/assets/kimetsu-no-yaiba-rengoku-with-katana-desktop-wallpaper.jpg", alt: "Trusted Seller", link: "#" },
        { src: "/assets/cropped-1920-1080-1343746.png", alt: "Google Tag Manager", link: "https://tagmanager.google.com" },
    { src: "/assets/demon-slayer-mitsuri-cherry-blossom-desktop-wallpaper.jpg", alt: "Semrush", link: "https://semrush.com" },
    { src: "/assets/demon-slayer-tanjiro-with-katana-epic-desktop-wallpaper.jpg", alt: "Google Partner", link: "https://marketingplatform.google.com/about/partners/" },
    { src: "/assets/kimetsu-no-yaiba-rengoku-with-katana-desktop-wallpaper.jpg", alt: "Trusted Seller", link: "#" },
  ];

  const Row = ({ ariaHidden = false }) => (
    <ul
      className="flex min-w-full flex-shrink-0 [animation:scroll_15s_linear_infinite]"
      aria-hidden={ariaHidden}
    >
      {items.map((item, i) => (
        <li
          key={`${i}-${ariaHidden ? "dup" : "main"}`}
          className="w-[25%] flex justify-center items-center"
        >
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-full flex items-center justify-center px-6 py-4"
          >
            {/* Bigger Card */}
           <div className="bg-gradient-to-r from-[#372935] via-[#000000] to-[#372935] rounded-xl  shadow-xl flex items-center justify-center w-[320px] h-[180px] transition-transform duration-300 hover:scale-105">
  <Image
    src={item.src}
    alt={item.alt}
    width={300}
    height={200}
    className="object-contain rounded-xl "
  />
</div>

          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="overflow-hidden flex w-full bg-transparent">
      <Row />
      <Row ariaHidden />
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
}
