// components/AboutSection.tsx
import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      className="relative h-screen text-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center md:items-start gap-10 overflow-hidden"
      style={{
        backgroundImage: `url('/assests/images/banner.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark diagonal gradient overlay - lighter on left */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#382A36]/70 via-[#495C82]/90 to-[#0D0B10]/95 z-0"></div>

      {/* Soft radial glow behind person */}
      <div className="absolute left-[10%] top-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#6E8EEE]/30 rounded-full blur-[200px] z-0"></div>

      {/* Extra subtle overall dim layer */}
      <div className="absolute inset-0 bg-black/20 z-0"></div>

      {/* Left side - Image */}
      <div className="relative z-10 w-full md:w-1/2 flex justify-center">
        <Image
          src="/profile.png" // replace with your image
          alt="Profile photo"
          width={420}
          height={420}
          className="relative z-10 rounded-lg"
        />
      </div>

      {/* Right side - Text */}
      <div className="relative z-10 md:w-1/2 flex flex-col justify-center">
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
          </span>
          .
        </p>

        {/* Button */}
        <button
          type="submit"
          className="px-3 mt-6 py-3 bg-gradient-to-r from-[#5F69A8] via-[#6E8EEE] to-[#8DCBFD] text-white font-semibold text-xs cursor-pointer tracking-[2.5px] uppercase"
        >
          APERTE AQUI PARA PARTICIPAR →
        </button>
      </div>
    </section>
  );
}
