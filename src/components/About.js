// components/AboutSection.tsx
import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      className="relative h-screen text-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center md:items-start gap-10 overflow-hidden"
      style={{
        backgroundImage: `url('/assests/images/Landing Page 02 A.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark diagonal gradient overlay - lighter on left */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-[#025EB8]/60  to-[#362D39]/100 z-0 "></div> */}

      {/* Extra subtle overall dim layer (NEW strong overlay) */}
      <div className="absolute right-0 inset-0 bg-gradient-to-r from-[#362D39]/5  to-[#362D39]/100 z-0"></div>

      {/* Soft radial glow behind person */}
      {/* <div className="absolute left-[10%] top-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#6E8EEE]/30 rounded-full blur-[200px] z-0"></div> */}

      {/* Left side - Image */}
      <div className="relative z-10 mt-40 w-full md:w-1/2 flex justify-center ml-40">
        {/* <Image
          src="/profile.png"
          alt="Profile photo"
          width={420}
          height={420}
          className="relative z-10 rounded-lg"
        /> */}
      </div>

      {/* Right side - Text */}
      <div className="relative z-10 md:w-1/2 mt-20 flex flex-col justify-center text-justify ml-10 mr-30">
        <h2 className="text-3xl md:text-4xl font-bold">LUCIANO FERNANDES</h2>
        <p className="mt-4 text-gray-300 leading-relaxed">
          Médico Cirurgião Digestivo, largou a medicina no dia{" "}
          <span className="font-semibold">10 de Setembro de 2018</span> e fundou o{" "}
          <span className="font-semibold text-blue-400">
            Grupo de Inteligência Financeira
          </span>
          , que já ajudou milhares de pessoas em todo o Brasil.
        </p>
        <p className="mt-4 text-gray-300 leading-relaxed">
          Através da sua própria experiência de transformação, acabou
          acidentalmente criando um{" "}
          <span className="font-semibold text-blue-400">
            método completamente novo
          </span>
          , que desenvolve a Inteligência Financeira de{" "}
          <span className="underline">PESSOAS COMUNS</span> e,{" "}
          <span className="underline">
            de forma natural, as transforma em INVESTIDORES de sucesso 
          </span><br />
          Através da sua própria experiência de transformação, acabou
          acidentalmente criando um{" "}
          Através da sua própria experiência de transformação, acabou
          acidentalmente criando um{" "}
          .
        </p>

        {/* Button */}
        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="w-40 px-4 mt-10 py-4 bg-gradient-to-r from-[#5F69A8] via-[#6E8EEE] to-[#8DCBFD] 
                       text-white font-medium text-[10px] cursor-pointer tracking-[2.5px] uppercase "
          >
            APERTE AQUI →
          </button>
        </div>
      </div>
    </section>
  );
}
