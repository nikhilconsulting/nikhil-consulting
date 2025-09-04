"use client";
import Link from "next/link";
export default function cta2() {
  return (
    <div className="bg-gray-100 text-black rounded-full px-10 py-14 shadow-2xl w-[90vw] max-w-[1000px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left Text */}
        <div className="text-center md:text-left md:ml-10">
          <h2 className="text-2xl md:text-3xl font-bold ">Level up your brand with Creatix</h2>
          <p className="text-black text-sm md:text-base">We build beautiful digital experiences tailored to your business.</p>
        </div>

        {/* Button */}
        <Link  
          href="/contact-us"
          className="bg-[linear-gradient(90deg,#5F69A8,#616FB4,#657AC9,#6E8EEE,#80B3F6,#8FCDFF)] backdrop-blur-[15px] transition hover:scale-105 text-white px-8 py-3 text-lg font-semibold md:mr-10 "
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
