"use client";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function DigitalMarketingFAQs() {
  const faqs = [
    {
      question: "O que é marketing digital?",
      answer:
        "Marketing digital é um conjunto de estratégias online usadas para promover produtos, serviços ou marcas por meio de canais digitais como redes sociais, e-mail marketing, SEO e anúncios pagos.",
    },
    {
      question: "Por que minha empresa precisa de marketing digital?",
      answer:
        "Com o marketing digital, sua empresa pode alcançar um público muito maior, segmentar clientes ideais e medir resultados com mais precisão do que no marketing tradicional.",
    },
    {
      question: "Quanto tempo leva para ter resultados?",
      answer:
        "Os resultados variam de acordo com a estratégia, mas normalmente campanhas de tráfego pago mostram resultados rápidos, enquanto SEO e marketing de conteúdo exigem mais tempo e consistência.",
    },
    {
      question: "Marketing digital é caro?",
      answer:
        "Não necessariamente. É possível começar com orçamentos reduzidos e escalar gradualmente, conforme os resultados começam a aparecer.",
    },
    {
      question: "Posso fazer marketing digital sozinho?",
      answer:
        "Sim, mas contar com especialistas pode acelerar resultados e evitar erros comuns que podem custar caro no longo prazo.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      <div
        className="min-h-screen flex flex-col justify-start items-center px-4 sm:px-6 md:px-8 lg:px-20 pt-16 sm:pt-20"
        style={{
          background: "linear-gradient(to bottom, #382933, #372935, #372831)",
        }}
      >
        {/* Constrain the FAQ container width for large screens */}
        <div className="w-full max-w-4xl p-4 md:p-8">
          <h2
  className="text-center text-2xl sm:text-2xl md:text-2xl lg:text-3xl font-bold mb-12 sm:mb-12 md:mb-16 bg-clip-text text-transparent"
  style={{
    backgroundImage:
      "linear-gradient(90deg, #5F69A8, #616FB4, #657AC9, #6E8EEE, #80B3F6, #8FCDFF)",
  }}
>
  Perguntas Frequentes sobre Marketing Digital
</h2>


          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="overflow-hidden backdrop-blur-md shadow-lg hover:scale-[1.01] transition-transform duration-300 rounded-lg"
                style={{
                  background:
                    "linear-gradient(to right, rgba(55,42,51,0.6), rgba(58,45,56,0.6), rgba(59,48,60,0.6), rgba(62,51,66,0.6))",
                }}
              >
                {/* Question */}
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === idx ? null : idx)
                  }
                  className="w-full flex justify-between items-center p-3 sm:p-4 cursor-pointer"
                  style={{
                    borderBottom: `2px solid transparent`,
                    backgroundImage:
                      "linear-gradient(to right, rgba(255,255,255,0.3), rgba(255,255,255,0))",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 2px",
                    backgroundPosition: "left bottom",
                  }}
                >
                  <span className="text-left font-medium text-gray-100 text-sm sm:text-base md:text-lg lg:text-lg">
                    {faq.question}
                  </span>
                  <ChevronDownIcon
                    className={`h-4 w-4 sm:h-5 sm:w-5 text-gray-300 transform transition-transform duration-300 ${
                      openIndex === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Smooth animated answer */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    openIndex === idx
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p
                      className="p-3 sm:p-4 text-gray-300 text-sm sm:text-base md:text-base lg:text-base"
                      style={{
                        background:
                          "linear-gradient(to right, rgba(55,42,51,0.4), rgba(58,45,56,0.4), rgba(59,48,60,0.4), rgba(62,51,66,0.4))",
                      }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
