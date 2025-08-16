"use client";
import { Lock, FileText, MapPin, ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    { title: "TESTEMUNHO 1", name: "JOÃO SILVA", text: "Graças a este método, consegui organizar minhas finanças e alcançar meus primeiros investimentos de sucesso!", icon: Lock },
    { title: "TESTEMUNHO 2", name: "MARIA OLIVEIRA", text: "Nunca pensei que seria possível investir com tão pouco dinheiro. Este curso mudou minha visão sobre finanças.", icon: FileText },
    { title: "TESTEMUNHO 3", name: "CARLOS PEREIRA", text: "A clareza e simplicidade das aulas me ajudaram a criar um plano sólido para minha independência financeira.", icon: MapPin },
    { title: "TESTEMUNHO 4", name: "ANA COSTA", text: "Finalmente consegui quitar minhas dívidas e começar a investir, algo que sempre achei impossível!", icon: Lock },
    { title: "TESTEMUNHO 5", name: "PEDRO ALMEIDA", text: "A metodologia é simples e prática, facilitando meu caminho rumo à liberdade financeira.", icon: FileText },
    { title: "TESTEMUNHO 6", name: "FERNANDA LIMA", text: "Nunca imaginei que pudesse organizar minha vida financeira com tanta clareza e confiança.", icon: MapPin },
  ];

  return (
    <section
      id="clients-testimonials"
      className="h-screen px-6 pt-25 text-white flex flex-col justify-between relative"
      style={{
        background: "linear-gradient(to bottom, #382933, #372935, #372831)",
      }}
    >
      {/* Heading + Description */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <span
          className="text-4xl font-bold bg-clip-text text-transparent"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #5F69A8, #616FB4, #657AC9, #6E8EEE, #80B3F6, #8FCDFF)",
          }}
        >
          O que nossos alunos dizem
        </span>

        <p className="text-gray-300 text-lg mt-2">
          Histórias reais de pessoas que transformaram sua vida financeira
          através do nosso método.
        </p>
      </div>

      {/* Slider container */}
      <div className="overflow-hidden max-w-4xl mx-auto relative">
        <div
          className="flex gap-6 animate-slide"
          style={{
            animation: "slide 20s linear infinite",
          }}
        >
          {[...testimonials, ...testimonials].map((t, index) => {
            const Icon = t.icon;
            return (
              <div
                key={index}
                className="flex-shrink-0 w-[calc(33.333%-1rem)] overflow-hidden backdrop-blur-md shadow-lg hover:scale-[1.01] transition-transform duration-300 rounded-xl p-6 relative"
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

      {/* Prev Button (outside left) */}
      <button className="absolute top-1/2 left-50 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full shadow-md">
        <ChevronLeft size={28} />
      </button>

      {/* Next Button (outside right) */}
      <button className="absolute top-1/2 right-50 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full shadow-md">
        <ChevronRight size={28} />
      </button>

      {/* Bottom divider */}
      <div
        className="mt-20 h-[2px] w-[1000px] mx-auto"
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
