"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ConsultingFormModal from "./ConsultingFormModal"; // import your modal

export default function HeroSection() {
  const [form, setForm] = useState({ name: "", email: "" });
  const [status, setStatus] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showForm, setShowForm] = useState(false); // for modal

  const slides = [
    {
      type: "form",
      badge: (
        <>
          Your <span className="text-[#5ec2f4] font-bold">Digital Edge</span> in Business
        </>
      ),
      heading: "Targeted Digital Marketing Strategies for Your Business",
      subtext:
        "Don’t waste your budget in the wrong place. Our Digital Marketing Consulting helps you invest smartly with SEO, Local SEO, Google Business Profile, Google Ads, and Meta Ads to boost online growth, visibility, and real customers.",
    },
    {
      type: "button",
      badge: (
        <>
          Boost Your <span className="text-[#5ec2f4] font-bold">Visibility</span>
        </>
      ),
      heading: "Free Website Audit for Your Business",
      subtext:
        "Find out how your business is performing online. Get a detailed audit with actionable insights to improve your SEO and visibility.",
    },
  ];

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

  // Auto change slides every 6s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length); 
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative min-h-screen w-full md:pb-0 pb-15 overflow-hidden">
      {/* Background Image */}
      <Image
        src="/assets/images/Speaker1.png"
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

      {/* Content Slider */}
      <div className="relative z-30 max-w-[1100px] mx-auto text-white px-4 pt-20 md:pt-36 flex flex-col items-center md:items-start">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="w-full md:max-w-[520px] text-center md:text-left md:ml-10"
          >
            {/* Badge */}
            <div className="mb-2">
              <div className="inline-block bg-black/30 px-4 py-1 mt-6 md:mt-0 rounded-full text-sm tracking-wider text-white">
                {slides[currentSlide].badge}
              </div>
            </div>

            {/* Heading */}
            <h1 className="font-semibold mb-4 tracking-tight leading-snug">
              {slides[currentSlide].heading}
            </h1>

            {/* Subtext */}
            <p className="text-base mb-5 text-white/75 leading-relaxed tracking-[0.2px]">
              {slides[currentSlide].subtext}
            </p>

            {/* Conditional Content */}
            {slides[currentSlide].type === "form" ? (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-3 w-full md:mt-0 mt-8 max-w-md mx-auto md:mx-0"
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
                  className="px-3 py-3 mt-4 md:mt-0 bg-gradient-to-r from-[#5F69A8] via-[#6E8EEE] to-[#8DCBFD] text-white font-semibold text-base cursor-pointer tracking-[1.5px] uppercase transition hover:scale-105"
                >
                  Book A Consultation
                </button>
                {status && (
                  <p className="text-sm mt-2 text-white/80">{status}</p>
                )}
              </form>
            ) : (
              <button
                onClick={() => setShowForm(true)}
                className="px-6 py-3 mt-4 bg-gradient-to-r from-[#5F69A8] via-[#6E8EEE] to-[#8DCBFD] text-white font-semibold text-base cursor-pointer tracking-[1.5px] uppercase transition hover:scale-105"
              >
                Make an Audit
              </button>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Consulting Modal */}
      <ConsultingFormModal showForm={showForm} setShowForm={setShowForm} />

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
