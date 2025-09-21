"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const slides = [
  {
    title: "Looking to boost your business online?",
    description: (
      <>
        Welcome to <strong>Rankinventiv</strong>, we provide result-driven SEO Services in Varanasi and complete digital marketing solutions tailored to your local market. Whether a startup or growing business, our digital experts provide Local SEO in Varanasi and Google & Meta Ads to help you grow.
      </>
    ),
    imageUrl: "/assets/images/home-page-image/WebsiteHomePage.png",
    button: (
      <Link
        href="/services"
        className="inline-flex items-center gap-3 bg-gradient-to-r from-[#5F69A8] via-[#6E8EEE] to-[#8DCBFD] text-white hover:scale-105 px-6 sm:px-8 py-2 sm:py-3 font-semibold transition-all rounded-md text-sm sm:text-base"
      >
        View Services <i className="fas fa-arrow-right"></i>
      </Link>
    ),
  },
  {
    title: "Grow faster with targeted digital marketing",
    description: (
      <>
        At <strong>Rankinventiv</strong>, we specialize in high-converting Google Ads and effective Meta campaigns. Our focus is on delivering leads and measurable ROI for local businesses in Varanasi and beyond.
      </>
    ),
    imageUrl: "/assets/images/banner.jpg",
    button: (
      <Link
        href="/solutions"
        className="inline-flex items-center gap-3 bg-gradient-to-r from-[#5F69A8] via-[#6E8EEE] to-[#8DCBFD] text-white hover:scale-105 px-6 sm:px-8 py-2 sm:py-3 font-semibold transition-all rounded-md text-sm sm:text-base"
      >
        <i className="fas fa-arrow-left"></i> Explore Solutions
      </Link>
    ),
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setAnimate(true);
      }, 100);
    }, 12000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section
      className="relative bg-cover bg-center min-h-screen flex items-center transition-all duration-700 ease-in-out"
      style={{ backgroundImage: `url('${slide.imageUrl}')` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 py-16 sm:py-24 lg:py-0">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-white text-center lg:text-left">
            <h1
              className={`text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight opacity-0 ${
                animate ? "animate-slide-in-left" : ""
              }`}
              style={{ animationDelay: "0.2s" }}
            >
              {slide.title}
            </h1>

            <p
              className={`text-base sm:text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0 opacity-0 ${
                animate ? "animate-slide-in-left" : ""
              }`}
              style={{ animationDelay: "0.5s" }}
            >
              {slide.description}
            </p>

            <div
              className={`opacity-0 ${animate ? "animate-slide-in-left" : ""}`}
              style={{ animationDelay: "0.8s" }}
            >
              {slide.button}
            </div>
          </div>

          {/* Optional right-side image or content (empty for now) */}
          <div className="hidden lg:block lg:w-1/2">{/* Optional visual */}</div>
        </div>
      </div>
     
    </section>
  );
};

export default HeroSection;
