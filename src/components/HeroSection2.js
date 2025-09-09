import React, { useEffect, useState, useRef } from 'react';

const slides = [
  {
    title: 'Marrakech Merzouga',
    subtitle: 'Sahara Desert - Morocco',
    description: 'Explore the vast Sahara desert with camel rides and desert camping.',
    background:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80',
  },
  {
    title: 'Yosemite National Park',
    subtitle: 'California, United States',
    description: 'Majestic cliffs and beautiful wilderness to explore.',
    background:
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1470&q=80',
  },
  {
    title: 'Los Lances Beach',
    subtitle: 'Tarifa - Spain',
    description: 'A paradise for kite surfers and beach lovers.',
    background:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1470&q=80',
  },
  {
    title: 'Göreme Valley',
    subtitle: 'Cappadocia - Turkey',
    description: 'Famous for its unique rock formations and hot air balloons.',
    background:
      'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1470&q=80',
  },
];

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearTimeout(timeoutRef.current);
  }, [activeIndex]);

  const currentSlide = slides[activeIndex] || slides[0];

  return (
    <section className="relative w-full h-screen select-none overflow-hidden">
      {/* Fullscreen hero background */}
      <div
        className="w-full h-full bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${currentSlide.background})`,
          filter: 'brightness(0.6)',
          transition: 'background-image 0.7s ease-in-out',
        }}
      >
        {/* Left side text content */}
        <div className="absolute top-1/4 left-16 max-w-lg text-white">
          <p className="uppercase text-yellow-400 tracking-widest mb-3">{currentSlide.subtitle}</p>
          <h1 className="text-6xl font-extrabold mb-5 leading-tight">{currentSlide.title}</h1>
          <p className="opacity-90 mb-8">{currentSlide.description}</p>
          <button className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold w-max hover:bg-yellow-500 transition">
            Discover Location
          </button>
        </div>

        {/* Bottom right cards container */}
        <div className="absolute bottom-8 right-8 flex space-x-6 overflow-x-auto max-w-[80vw]">
          {slides.map((slide, idx) => {
            const isActive = idx === activeIndex;
            return (
              <div
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`relative flex-shrink-0 rounded-lg shadow-lg cursor-pointer overflow-hidden transition-transform duration-500
                  ${isActive ? 'w-60 h-96 scale-100' : 'w-52 h-80 scale-90 opacity-70 hover:opacity-100'}
                `}
                style={{
                  backgroundImage: `url(${slide.background})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  boxShadow: isActive ? '0 8px 20px rgba(0,0,0,0.6)' : '0 4px 10px rgba(0,0,0,0.3)',
                }}
                title={slide.title}
              >
                {/* Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-4 rounded-b-lg text-white">
                  <p className="text-xs uppercase tracking-wide">{slide.subtitle}</p>
                  <h3 className="font-semibold text-lg leading-tight">{slide.title}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
    </section>
  );
}
