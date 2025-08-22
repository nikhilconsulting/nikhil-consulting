"use client";

export default function TextImageSection() {
  const sparkles = Array.from({ length: 100 });
  const colors = ["bg-white", "bg-[#8FCDFF]", "bg-[#5F69A8]"];
  const blurs = ["blur-[1px]", "blur-[2px]", "blur-[3px]"];

  return (
 <section
  className="relative min-h-screen w-full py-12 sm:py-16 md:py-24 px-4 sm:px-8 md:px-16 lg:px-20 text-white overflow-hidden"
  style={{
    background: "linear-gradient(to bottom, #382933, #372935, #372831)",
  }}
>
  {/* Sparkles */}
  <div className="absolute inset-0 pointer-events-none z-0">
    {sparkles.map((_, i) => {
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const size = Math.random() * 3 + 2;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const blur = blurs[Math.floor(Math.random() * blurs.length)];
      const delay = Math.random() * 5;
      const duration = 2 + Math.random() * 2;

      return (
        <span
          key={i}
          className={`absolute rounded-full ${color} ${blur} animate-bounce`}
          style={{
            top: `${top}%`,
            left: `${left}%`,
            width: `${size}px`,
            height: `${size}px`,
            opacity: 0.8,
            animation: `bounce ${duration}s infinite, twinkle 3s infinite`,
            animationDelay: `${delay}s`,
          }}
        ></span>
      );
    })}
  </div>

  {/* Main Content */}
  <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-20 items-center relative z-10 lg:mb-6 xl:mb-22">

    {/* Left Side - Text */}
    <div className="text-center xl:text-left px-2 sm:px-6 order-last xl:order-first">
    <h2
  className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-bold mb-6 leading-tight bg-clip-text text-transparent"
  style={{
    backgroundImage:
      "linear-gradient(90deg, #5F69A8, #616FB4, #657AC9, #6E8EEE, #80B3F6, #8FCDFF)",
  }}
>
  Your Catchy Heading Here
</h2>

      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-8 leading-relaxed text-justify">
        LUCIANO FERNANDES Médico Cirurgião Digestivo, largou a medicina no dia
        10 de Setembro de 2018 e fundou o Grupo de Inteligência Financeira, que
        já ajudou milhares de pessoas em todo o Brasil.
        <br />
        <br />
        Através da sua própria experiência de transformação, acabou
        acidentalmente criando um método completamente novo, que desenvolve
        Inteligência Financeira de PESSOAS COMUNS e, de forma natural, as
        transforma em INVESTIDORES de sucesso.
      </p>
      <div className="flex justify-center xl:justify-start">
        <button
          className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg cursor-pointer hover:scale-105 hover:opacity-90 transition-all text-white text-sm sm:text-base md:text-lg font-medium"
          style={{
            background:
              "linear-gradient(90deg, #5F69A8, #616FB4, #657AC9, #6E8EEE, #80B3F6, #8FCDFF)",
          }}
        >
          Learn More
        </button>
      </div>
    </div>

    {/* Right Side - Image */}
<div className="relative flex justify-center w-full order-first xl:order-last mb-10 md:mb-18 xl:mb-0">

      {/* Spotlight Glow */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <div className="w-[250px] sm:w-[350px] md:w-[450px] lg:w-[550px] h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] bg-gradient-radial from-[#8FCDFF]/40 via-[#5F69A8]/25 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Main Image with Aura */}
      <div className="relative z-10 w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl">
        <div
          className="absolute inset-0 rounded-2xl blur-2xl opacity-50"
          style={{
            background:
              "linear-gradient(90deg, #5F69A8, #616FB4, #657AC9, #6E8EEE, #80B3F6, #8FCDFF)",
          }}
        ></div>
        <div className="relative rounded-lg p-[3px] sm:p-[5px] bg-black/35 backdrop-blur shadow-lg">
          <img
            src="/assests/images/banner.jpg"
            alt="Main Image"
            className="rounded-lg h-[200px] sm:h-[280px] md:h-[360px] lg:h-[420px] w-full object-cover"
          />
        </div>
      </div>

      {/* Overlay Image */}
      <div className="absolute -bottom-16 sm:-bottom-20 lg:-bottom-24 left-1/2 -translate-x-1/2 w-[90%] sm:w-[500px] md:w-[600px] lg:w-[700px] h-[100px] sm:h-[140px] md:h-[180px] lg:h-[200px] rounded-lg overflow-hidden z-20">
        <div className="absolute inset-0 rounded-lg bg-white blur-3xl opacity-50"></div>
        <div className="relative w-full h-full rounded-lg p-[3px] sm:p-[5px] bg-black/35 backdrop-blur">
          <div className="relative w-full h-full rounded-md overflow-hidden">
            <img
              src="/assests/images/banner.jpg"
              alt="Overlay Image"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Flicker Animation */}
  <style jsx>{`
    @keyframes twinkle {
      0%,
      100% {
        opacity: 0.8;
      }
      50% {
        opacity: 0.2;
      }
    }
  `}</style>

  {/* Divider */}
{/* Divider at section bottom */}
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
