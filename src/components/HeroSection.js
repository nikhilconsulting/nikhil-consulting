"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function HeroSection() {
  const [form, setForm] = useState({ name: "", email: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email } = form;

    try {
      const res = await fetch("/api/Inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Inquiry sent!");
        setForm({ name: "", email: "" });
      } else {
        alert(data.error || "Failed to send inquiry");
      }
    } catch (error) {
      alert("Failed to send inquiry");
    }
  };

  return (
    <section className="relative h-screen w-full">
      {/* Background Image */}
      <Image
        src="/assests/images/Speaker1.png"
        alt="Background"
        fill
        className="object-cover z-0"
        priority
      />

      {/* Bottom Overlay Gradient */}
      <div
        className="absolute inset-x-0 bottom-0 h-[200px] sm:h-[300px] z-20"
        style={{
          backgroundImage: "linear-gradient(to bottom, transparent, #382933)",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-30 max-w-[1100px] mx-auto text-white px-4 pt-20 sm:pt-28 md:pt-36 flex flex-col md:flex-row items-center justify-between">
        {/* Left Text */}
        <div className="w-full md:max-w-[520px] text-center md:text-left md:ml-10">
          {/* Badge */}
          <div className="mb-2">
            <div className="inline-block bg-black/30 px-4 py-1 rounded-full text-sm tracking-wider text-white">
              Your{" "}
              <span className="text-[#5ec2f4] font-bold">Digital Edge</span> in
              Business
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[32px] font-semibold mb-4 tracking-tight leading-snug">
            Targeted Digital Marketing Strategies for Your Business
          </h1>

          {/* Subtext */}
          <p className="text-sm sm:text-base mb-5 text-white/75 leading-relaxed tracking-[0.2px]">
            Don’t waste your budget in the wrong place. Our Digital Marketing
            Consulting helps you invest smartly with SEO, Local SEO, Google
            Business Profile, Google Ads, and Meta Ads to boost online growth,
            visibility, and real customers.
          </p>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 w-full max-w-md mx-auto md:mx-0"
          >
            <input
              type="text"
              required
              placeholder="Enter Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full p-3 text-white placeholder-white/40 bg-black/15 backdrop-blur-sm focus:outline-none"
              style={{
                borderBottom: "2px solid transparent",
                backgroundImage:
                  "linear-gradient(to right, rgba(255,255,255,0.3), rgba(255,255,255,0))",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 2px",
                backgroundPosition: "left bottom",
              }}
            />

            <input
              type="email"
              required
              placeholder="Enter Your E-mail"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full p-3 text-white placeholder-white/40 bg-black/15 backdrop-blur-sm focus:outline-none"
              style={{
                borderBottom: "2px solid transparent",
                backgroundImage:
                  "linear-gradient(to right, rgba(255,255,255,0.3), rgba(255,255,255,0))",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 2px",
                backgroundPosition: "left bottom",
              }}
            />

            <button
              type="submit"
              className="px-3 py-3 bg-gradient-to-r from-[#5F69A8] via-[#6E8EEE] to-[#8DCBFD] text-white font-semibold text-sm sm:text-base cursor-pointer tracking-[1.5px] uppercase transition hover:scale-105"
            >
              Book a free consultation
            </button>
            {status && <p className="text-sm mt-2 text-white/80">{status}</p>}
          </form>
        </div>
      </div>

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
    </section>
  );
}
