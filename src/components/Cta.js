"use client";
import { useState } from "react";
import ContactFormModal from "./ContactFormModal"; // Import the new component



export default function CTASection() {
      const [showForm, setShowForm] = useState(false); // Modal
    
  return (
    <>
    <section className="w-full bg-[linear-gradient(90deg,#5F69A8,#616FB4,#657AC9,#6E8EEE,#80B3F6,#8FCDFF)] py-10 px-6 flex flex-col md:flex-row items-center justify-between relative">
      {/* Text */}
      <p className="text-white text-lg md:text-base text-center ml-45 md:text-left max-w-2xl">
        CADA RETIRO REALIZADO GERA UM LITRO COM DESTINO A PROJETOS DE RECUPERAÇÃO
        QUE OBJETIVAM NÃO VIDA DE PESSOAS.
      </p>

      {/* Button */}
      <button 
      onClick={() => setShowForm(true)}
      className="mt-3 md:mt-0 flex items-center gap-2 bg-white text-black font-semibold py-2 px-6 mr-55 rounded shadow transition cursor-pointer">
        GET IN TOUCH
      </button>

      {/* Bottom divider */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-[1000px]"
        style={{
          background:
            "linear-gradient(to right, rgba(211,233,253,0.3), rgba(211,233,253,0))",
        }}
      ></div>
    </section>
    <ContactFormModal showForm={showForm} setShowForm={setShowForm} />
      
    </>
  );
}
