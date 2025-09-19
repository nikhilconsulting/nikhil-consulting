"use client";
import { useState , useEffect , useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import ContactFormModal from "./ContactFormModal";

export default function Benefits() {
   const [showForm, setShowForm] = useState(false);
const intervalRef = useRef(null);

useEffect(() => {
  const startAutoSlide = () => {
    if (window.innerWidth < 640 && !intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
      }, 2000);
    }
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleResize = () => {
    stopAutoSlide();
    startAutoSlide();
  };

  handleResize();
  window.addEventListener("resize", handleResize);

  return () => {
    stopAutoSlide();
    window.removeEventListener("resize", handleResize);
  };
}, []);

const prevSlide = () => {
  if (intervalRef.current) { clearInterval(intervalRef.current); intervalRef.current = null; } // stop auto
  setCurrent((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
};

const nextSlide = () => {
  if (intervalRef.current) { clearInterval(intervalRef.current); intervalRef.current = null; } // stop auto
  setCurrent((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
};


  
const cards = [
  {
    id: "01",
    title: " Search Engine Marketing (SEO)",
    description: "SEO consulting gives you the best direction to rank higher on Google with targeted work, driving organic traffic at minimum budget.",
  },
  {
    id: "02",
    title: "Google Business Profile",
    description: "Optimize your Google Business Profile to attract local customers, improve map ranking, and boost sales with expert local SEO strategies.",
  },
  {
    id: "03",
    title: "Social Media Marketing (SMM)",
    description: "Grow faster with social media marketing that increases reach, builds brand identity, and connects you with the right audience.",
  },
  {
    id: "04",
    title: "Google & Meta Ads",
    description: "Run smart Google Ads and Meta Ads campaigns to get quality leads, more sales, and high ROI without wasting your marketing budget.",
  },
  {
    id: "05",
    title: "Website Design & Development",
    description: "Get a responsive, SEO-friendly website that looks professional, loads fast, and turns visitors into paying customers.",
  },
  {
    id: "06",
    title: "Content & Branding Strategy",
    description: "Build strong brand identity with tailored content strategies that increase trust, visibility, and long-term online growth.",
  },
];



  const [current, setCurrent] = useState(0);



  // Utility: cyclic index
  const getIndex = (index) => (index + cards.length) % cards.length;

  return (
    <>
    <section className="relative  w-full pt-20 md:py-12 h-screen md:min-h-screen text-white overflow-hidden" style={{
    background: "linear-gradient(to bottom, #382933, #372935, #372831)",
  }}>
      {/* Title */}
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-4 md:mb-16 ">
  Consultant Expertise You Can Rely On 
</h2>


      <div className="flex items-center justify-center relative ">

        {/* Carousel */}
      <div className="relative  w-full max-w-[800px] h-[400px] sm:h-[350px] xs:h-[300px] flex items-center justify-center px-4">

        {cards.map((card, index) => {
  const pos = getIndex(index - current);

  let style = {};
if (pos === 0) {
  style = { x: 0, scale: 1, opacity: 1, zIndex: 30, };
} else if (pos === cards.length - 1) {
  style = { x: -320, scale: 0.9, opacity: 0.6, zIndex: 20, };
} else if (pos === 1) {
  style = { x: 320, scale: 0.9, opacity: 0.6, zIndex: 20, };
} else {
  style = { opacity: 0, scale: 0.8, zIndex: 10, };
}



  const isSideCard = pos === 1 || pos === cards.length - 1;

  return (
    <motion.div
      key={index}
      animate={style}
      transition={{ duration: 0.6, ease: "easeInOut" }}
     className={`absolute w-[90%] sm:w-[70%] md:w-[300px] h-[280px] sm:h-[320px] md:h-[400px] rounded-lg overflow-hidden shadow-xl
        ${isSideCard ? "cursor-pointer" : "cursor-default"}`}
      onClick={() => {
        if (pos === cards.length - 1) prevSlide();
        if (pos === 1) nextSlide();
      }}
       drag={pos === 0 ? "x" : false} // 🟢 Only allow dragging for the center card
  dragConstraints={{ left: 0, right: 0 }}
  onDragEnd={(event, info) => {
    if (pos === 0) {
      if (info.offset.x < -100) nextSlide();     // Swipe Left
      if (info.offset.x > 100) prevSlide();      // Swipe Right
    }
  }}
 style={{
  background:
    pos === 0 || isSideCard
      ? "linear-gradient(to right, #5F69A8, #616FB4, #657AC9, #6E8EEE, #80B3F6, #8FCDFF)"
      : "transparent",
}}


    >
    <div className="flex flex-col justify-center items-center text-center h-full px-7">
      <span className="text-2xl bg-gradient-to-b from-[#382933] via-[#372935] to-[#372831] rounded-full p-2 font-bold   mb-2 " >{card.id}</span>
  <h3 className="text-xl font-bold mb-2">{card.title}</h3>
  <p className="text-lg text-gray-200 ">{card.description}</p>
</div>

      {/* Gradient Border Overlay */}
      <div
        className="absolute inset-0 rounded-lg pointer-events-none"
        style={{
          padding: "2px",
          background:
            "linear-gradient(to right, #5F69A8, #616FB4, #657AC9, #6E8EEE, #80B3F6, #8FCDFF)",
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
      <div className=" mt-26 md:mt-14 flex justify-center">
  <button
    onClick={() => setShowForm(true)}
    className="px-6 py-3 lg:mt-8 text-lg font-semibold shadow-md transition-transform transform hover:scale-105 cursor-pointer"
    style={{
      background:
        "linear-gradient(90deg, #5F69A8, #616FB4, #657AC9, #6E8EEE, #80B3F6, #8FCDFF)",
      color: "#fff",
    }}
  >
    Claim Your Free Audit
  </button>
</div>

  {/* Prev Button */}
<div className="absolute lg:left-40 lg:top-1/2 top-[70%] left-1/4 transform -translate-y-1/2 z-40">
  <button
    onClick={prevSlide}
    className="p-4 rounded-full hover:scale-105 transition cursor-pointer"
    style={{
      background:
        "linear-gradient(90deg, #5F69A8, #616FB4, #657AC9, #6E8EEE, #80B3F6, #8FCDFF)",
    }}
  >
    <ChevronLeft size={28} />
  </button>
</div>

{/* Next Button */}
<div className="absolute lg:right-40 lg:top-1/2 top-[70%] right-1/4 transform -translate-y-1/2 z-40">
  <button
    onClick={nextSlide}
    className="p-4 rounded-full hover:scale-105 transition cursor-pointer"
    style={{
      background:
        "linear-gradient(90deg, #5F69A8, #616FB4, #657AC9, #6E8EEE, #80B3F6, #8FCDFF)",
    }}
  >
    <ChevronRight size={28} color="white" />
  </button>
</div>


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
     <ContactFormModal showForm={showForm} setShowForm={setShowForm} />
</>
  );
}
