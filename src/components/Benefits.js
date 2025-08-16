"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Benefits() {
  const cards = [
    "/assests/images/image1.png",
    "/assests/images/image2.png",
    "/assests/images/image3.png",
    "/assests/images/image4.png",
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
    <section className="relative w-full py-24 h-screen  text-white overflow-hidden" style={{
    background: "linear-gradient(to bottom, #382933, #372935, #372831)",
  }}>
      {/* Title */}
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-12">
  VEJA OS{" "}
  <span
    className="bg-clip-text text-transparent"
    style={{
      backgroundImage:
        "linear-gradient(90deg, #5F69A8, #616FB4, #657AC9, #6E8EEE, #80B3F6, #8FCDFF)",
    }}
  >
    RESULTADOS
  </span>{" "}
  DOS MEUS{" "}
  <span
    className="bg-clip-text text-transparent"
    style={{
      backgroundImage:
        "linear-gradient(90deg, #5F69A8, #616FB4, #657AC9, #6E8EEE, #80B3F6, #8FCDFF)",
    }}
  >
    ALUNOS
  </span>
</h2>


      <div className="flex items-center justify-center relative">
        {/* Prev Button */}
        <button
          onClick={prevSlide}
          className="p-3 rounded-full bg-gray-700/70 hover:bg-gray-600 transition absolute left-50 z-10 cursor-pointer"
          style={{
    background:
      "linear-gradient(90deg, #5F69A8, #616FB4, #657AC9, #6E8EEE, #80B3F6, #8FCDFF)",
  }}>
          <ChevronLeft size={28} />
        </button>

        {/* Carousel */}
        <div className="relative w-[800px] h-[400px] flex items-center justify-center">
        {cards.map((card, index) => {
  const pos = getIndex(index - current);

  let style = {};
if (pos === 0) {
  style = { x: 0, scale: 1, opacity: 1, zIndex: 30, filter: "blur(0px)" };
} else if (pos === cards.length - 1) {
  style = { x: -320, scale: 0.9, opacity: 0.6, zIndex: 20, filter: "blur(4px)" }; // -300 instead of -250
} else if (pos === 1) {
  style = { x: 320, scale: 0.9, opacity: 0.6, zIndex: 20, filter: "blur(4px)" };  // 300 instead of 250
} else {
  style = { opacity: 0, scale: 0.8, zIndex: 10, filter: "blur(8px)" };
}


  const isSideCard = pos === 1 || pos === cards.length - 1;

  return (
    <motion.div
      key={index}
      animate={style}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className={`absolute w-75 h-[400] rounded-lg overflow-hidden shadow-xl
        ${isSideCard ? "cursor-pointer" : "cursor-default"}`}
      onClick={() => {
        if (pos === cards.length - 1) prevSlide();
        if (pos === 1) nextSlide();
      }}
      style={{
        background: isSideCard
          ? "linear-gradient(to right, rgba(55,42,51,0.6), rgba(58,45,56,0.6), rgba(59,48,60,0.6), rgba(62,51,66,0.6))"
          : "transparent",
      }}
    >
      <img
        src={card}
        alt={`card-${index}`}
        className="w-full h-full object-cover"
        style={{
          opacity: isSideCard ? 0.5 : 1, // dim effect on side
        }}
      />
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

        {/* Next Button */}
      <button
  onClick={nextSlide}
  className="p-3 rounded-full transition absolute right-4 z-10 cursor-pointer right-50"
  style={{
    background:
      "linear-gradient(90deg, #5F69A8, #616FB4, #657AC9, #6E8EEE, #80B3F6, #8FCDFF)",
  }}
>
  <ChevronRight size={28} color="white" />
</button>

      </div>
    </section>
  );
}
