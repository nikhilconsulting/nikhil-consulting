"use client";
import { Lock, FileText, MapPin, ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    { title: "Testimonial 1", name: "RAHUL", text: "Graças a este método, consegui organizar minhas finanças e alcançar meus primeiros investimentos de sucesso!", icon: Lock },
    { title: "Testimonial 2", name: "SOUMYA", text: "Nunca pensei que seria possível investir com tão pouco dinheiro. Este curso mudou minha visão sobre finanças.", icon: FileText },
    { title: "Testimonial 3", name: "VISHAL", text: "A clareza e simplicidade das aulas me ajudaram a criar um plano sólido para minha independência financeira.", icon: MapPin },
    { title: "Testimonial 4", name: "SARANSH", text: "Finalmente consegui quitar minhas dívidas e começar a investir, algo que sempre achei impossível!", icon: Lock },
    ];
     const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="clients-testimonials"
      className="h-screen px-6 pt-16 md:pt-20 text-white flex flex-col justify-between relative overflow-x-hidden"
      style={{
        background: "linear-gradient(to bottom, #382933, #372935, #372831)",
      }}
    >
      {/* Heading + Description */}
      <div className="max-w-4xl mx-auto text-center mb-8 md:mb-0">
        <span
          className="text-4xl font-bold bg-clip-text">
         What Our Clients Say ?

        </span>

        <p className="text-gray-300 text-lg mt-6">
          Stories of cost-saving, smarter strategies, and business growth through Consulting

        </p>
      </div>

      {/* Slider container */}
      <div className="overflow-hidden max-w-3xl md:max-w-2xl mx-auto relative">
       <div
  className="flex gap-8 animate-slide"
  style={{
    animation: "slide 20s linear infinite",
  }}
>
  {[...testimonials, ...testimonials].map((t, index) => {
    const Icon = t.icon;
    return (
      <div
        key={index}
        className="flex-shrink-0 w-[calc(40%-0.75rem)] overflow-hidden backdrop-blur-md shadow-lg hover:scale-[1.01] transition-transform duration-300 rounded-xl p-6 relative"
        style={{
          background:
            "linear-gradient(to right, rgba(55,42,51,0.6), rgba(58,45,56,0.6), rgba(59,48,60,0.6), rgba(62,51,66,0.6))",
        }}
      >
                {/* Border */}
                <div
                  className="absolute inset-0 rounded-xl pointer-events-none"
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

                {/* Icon top-left */}
                <div className="absolute top-4 left-4">
                  <Icon
                    size={40}
                    strokeWidth={0.9}
                    style={{
                      stroke: "url(#icon-gradient)",
                    }}
                  />
                  <svg width="0" height="0">
                    <defs>
                      <linearGradient
                        id="icon-gradient"
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="1"
                      >
                        <stop offset="0%" stopColor="#D3E9FD" />
                        <stop offset="100%" stopColor="#8FB3D9" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Text content */}
                <h4 className="text-[#D3E9FD] tracking-widest text-sm mb-2 mt-12">
                  {t.title}
                </h4>
                <h2 className="text-xl font-bold mb-4">{t.name}</h2>
                <p className="text-gray-200">{t.text}</p>
              </div>
            );
          })}
        </div>
      </div>

       <div className="mt-8 md:mt-0 flex justify-center gap-6">
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
 
</div>
{/* Bottom divider */}
      <div
        className="mt-10 md:mt-0 h-[2px] w-[1000px] mx-auto"
        style={{
          background:
            "linear-gradient(to right, rgba(211,233,253,0.3), rgba(211,233,253,0))",
        }}
      ></div>

      {/* Animation */}
      <style>
        {`
          @keyframes slide {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </section>
  );
}
