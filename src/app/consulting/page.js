
import GlassFooter from "@/components/Footer";
import GlassNavbar from "@/components/Navbar";
import Ticker from "@/components/Ticker";
import Image from "next/image";
import Faqs from "@/components/Faqs";
import AboutSection from "@/components/About";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/Cta";
import TextImageSection from "@/components/TextImageSection";
import Benefits from "@/components/Benefits";
export default function Page() {
  return (
    <>
      <GlassNavbar />

      {/* Hero Section */}
      <div className="relative h-screen w-full">
        
        {/* Background Image */}
        <Image
          src="/assests/images/Landing Page 13.jpg"
          alt="Background"
          fill
          className="object-cover z-0"
        />

        {/* Overlay */}
       <div
  className="absolute inset-0 z-10"
 style={{
  backgroundImage: `
    linear-gradient(90deg, rgba(82,79,112,0.1) 0%, rgba(120,137,188,0.2) 70%, rgba(82,79,112,8.1) 100%)
  `,
}}

></div>
{/* Bottom Overlay Gradient */}
<div
  className="absolute inset-x-0 bottom-0 h-[500px] z-20"
  style={{
    backgroundImage: "linear-gradient(to bottom, transparent, #382933)",
  }}
></div>



        {/* Spotlight */}
       {/* <div className="absolute top-1/2 left-[70%] -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[radial-gradient(circle,#B3D6FA_0%,#9AB4E5_50%,transparent_70%)] z-20"></div> */}

        {/* Content */}
        <div className="relative flex items-center justify-between z-30 max-w-[1000px] mx-auto text-white">
          
          {/* Left Text */}
      <div className="max-w-[380px] ml-0 font-sans mt-[170px]">
  {/* Badge */}
   <div className="text-center">
    <div className="inline-block bg-black/30 px-4 py-1 rounded-full text-xs tracking-wider mb-5 text-white">
      ONLINE • <span className="text-[#5ec2f4] font-bold">GRATUITA</span> • AO VIVO
    </div>
  </div>

  {/* Heading */}
  <h1 className="text-[36px] font-bold leading-[1.15] mb-3 tracking-[-0.3px]">
    APRENDA A INVESTIR <br /> DE FORMA SIMPLES
  </h1>

  {/* Subtext */}
  <p className="text-[19px] mb-5 text-white/75 leading-[1.4] tracking-[0.2px]">
    E construa o caminho da sua{" "} <br />
    <span className="text-[#D3E9FD] font-bold">
      liberdade financeira
    </span>
  </p>

  {/* Form */}
  <form className="flex flex-col gap-2">
   <input
  type="text"
  placeholder="Digite seu nome"
  className="w-full p-3 text-white placeholder-white/40 bg-black/15 backdrop-blur-sm focus:outline-none"
  style={{
    borderBottom: `2px solid transparent`,
    backgroundImage:
      "linear-gradient(to right, rgba(255,255,255,0.3), rgba(255,255,255,0))",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 2px",
    backgroundPosition: "left bottom",
  }}
/>

<input
  type="email"
  placeholder="Digite seu e-mail"
  className="w-full p-3 mt-0 text-white placeholder-white/40 bg-black/15 backdrop-blur-sm focus:outline-none"
  style={{
    borderBottom: `2px solid transparent`,
    backgroundImage:
      "linear-gradient(to right, rgba(255,255,255,0.3), rgba(255,255,255,0))",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 2px",
    backgroundPosition: "left bottom",
  }}
/>

    <button
      type="submit"
      className="px-3 mt-2 py-3 bg-gradient-to-r from-[#5F69A8] via-[#6E8EEE] to-[#8DCBFD] text-white font-semibold text-xs cursor-pointer tracking-[2.5px] uppercase"
    >
      CADASTRAR →
    </button>
  </form>
</div>


          {/* Right Image */}
         {/* Right Image */}
<div className="relative ">
  <Image
    src=""
    alt="Speaker"
    width={500}
    height={600}
    className="object-contain mix-blend-screen opacity-80"
  />
</div>

        </div>
      </div>
<Ticker />
<TextImageSection />
<Benefits />
<AboutSection />
<Testimonials />
<Faqs />
<CTASection />
      <GlassFooter />
    </>
  );
}
