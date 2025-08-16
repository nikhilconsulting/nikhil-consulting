"use client";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function SocialTicker() {
  const items = [
    { icon: <FaFacebookF />, color: "bg-[#3A2D38]", link: "https://facebook.com" },
    { icon: <FaInstagram />, color: "bg-[#3C313E]", link: "https://instagram.com" },
    { icon: <FaWhatsapp />, color: "bg-[#3E3340]", link: "https://whatsapp.com" },
    { icon: <FaLinkedinIn />, color: "bg-[#3A2D38]", link: "https://linkedin.com" },
    { icon: <FaTwitter />, color: "bg-[#3C313E]", link: "https://twitter.com" },
  ];

  const Row = ({ ariaHidden = false }) => (
    <ul
      className="flex min-w-full flex-shrink-0 [animation:scroll_15s_linear_infinite]"
      aria-hidden={ariaHidden}
    >
      {items.map((item, i) => (
        <li key={`${i}-${ariaHidden ? "dup" : "main"}`} className="w-[20%]">
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`${item.color} block px-12 py-4 flex items-center justify-center text-white text-2xl w-full h-full transition-colors duration-300 hover:bg-[#392731]`}
          >
            {item.icon}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="overflow-hidden flex w-full">
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
