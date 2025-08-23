"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Benefits() {
  const cards = [
    {
      id: "01",
      title: " Search Engine Marketing (SEO)",
      description:
        "SEO consulting gives you the best direction to rank higher on Google with targeted work, driving organic traffic at minimum budget.",
    },
    {
      id: "02",
      title: "Google Business Profile",
      description:
        "Optimize your Google Business Profile to attract local customers, improve map ranking, and boost sales with expert local SEO strategies.",
    },
    {
      id: "03",
      title: "Social Media Marketing (SMM)",
      description:
        "Grow faster with social media marketing that increases reach, builds brand identity, and connects you with the right audience.",
    },
    {
      id: "04",
      title: "Google & Meta Ads",
      description:
        "Run smart Google Ads and Meta Ads campaigns to get quality leads, more sales, and high ROI without wasting your marketing budget.",
    },
    {
      id: "05",
      title: "Website Design & Development",
      description:
        "Get a responsive, SEO-friendly website that looks professional, loads fast, and turns visitors into paying customers.",
    },
    {
      id: "06",
      title: "Content & Branding Strategy",
      description:
        "Build strong brand identity with tailored content strategies that increase trust, visibility, and long-term online growth.",
    },
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  // Utility: cyclic index
  const getIndex = (index) => (index + cards.length) % cards.length;

  return (
    <>
      <section
        className="relative w-full py-12 sm:py-16 md:py-24 px-4 sm:px-8 md:px-16 lg:px-20  min-h-screen text-white overflow-hidden"
        style={{
          background: "linear-gradient(to bottom, #382933, #372935, #372831)",
        }}
      >
        {/* Title */}
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-4 md:mb-16 ">
          Service Section
        </h2>

        <div className="flex items-center justify-center relative ">
          {/* Carousel */}
          <div className="relative  w-full max-w-[800px] h-[400px] sm:h-[350px] xs:h-[300px] flex items-center justify-center px-4">
            {cards.map((card, index) => {
              const pos = getIndex(index - current);

              let style = {};
              if (pos === 0) {
                style = { x: 0, scale: 1, opacity: 1, zIndex: 30 };
              } else if (pos === cards.length - 1) {
                style = { x: -320, scale: 0.9, opacity: 0.6, zIndex: 20 };
              } else if (pos === 1) {
                style = { x: 320, scale: 0.9, opacity: 0.6, zIndex: 20 };
              } else {
                style = { opacity: 0, scale: 0.8, zIndex: 10 };
              }

              const isSideCard = pos === 1 || pos === cards.length - 1;

              return (
                <motion.div
                  key={index}
                  animate={style}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className={`absolute w-[90%] sm:w-[75%] md:w-[300px] h-[90%] sm:h-[350px] md:h-[400px] rounded-lg overflow-hidden shadow-xl
        ${isSideCard ? "cursor-pointer" : "cursor-default"}`}
                  onClick={() => {
                    if (pos === cards.length - 1) prevSlide();
                    if (pos === 1) nextSlide();
                  }}
                  drag={pos === 0 ? "x" : false} // 🟢 Only allow dragging for the center card
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(event, info) => {
                    if (pos === 0) {
                      if (info.offset.x < -100) nextSlide(); // Swipe Left
                      if (info.offset.x > 100) prevSlide(); // Swipe Right
                    }
                  }}
                  style={{
                    background:
                      pos === 0 || isSideCard
                        ? "linear-gradient(to right, #5F69A8, #616FB4, #657AC9, #6E8EEE, #80B3F6, #8FCDFF)"
                        : "transparent",
                  }}
                >
                  <div className="flex flex-col justify-center items-center text-center h-full px-6">
                    <span className="text-3xl font-bold mb-2">{card.id}</span>
                    <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                    <p className="text-base text-gray-200 ">
                      {card.description}
                    </p>
                  </div>

                  {/* Gradient Border Overlay */}
                  <div
                    className="absolute inset-0 rounded-lg pointer-events-none"
                    style={{
                      padding: "2px",
                      background:
                        "linear-gradient(to top, rgba(211,233,253,0.8), rgba(211,233,253,0) 70%)",
                      WebkitMask:
                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "xor",
                      maskComposite: "exclude",
                    }}
                  ></div>
                </motion.div>
              );
            })}
          </div>
        </div>
        <div className="mt-6 md:mt-18 flex justify-center gap-6">
          {/* Prev Button */}
          <button
            onClick={prevSlide}
            className="p-4 rounded-full hover:scale-105 transition"
            style={{
              background:
                "linear-gradient(90deg, #5F69A8, #616FB4, #657AC9, #6E8EEE, #80B3F6, #8FCDFF)",
            }}
          >
            <ChevronLeft size={28} />
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="p-4 rounded-full hover:scale-105 transition"
            style={{
              background:
                "linear-gradient(90deg, #5F69A8, #616FB4, #657AC9, #6E8EEE, #80B3F6, #8FCDFF)",
            }}
          >
            <ChevronRight size={28} color="white" />
          </button>
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
        </div>
      </section>
    </>
  );
}
