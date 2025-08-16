"use client";

export default function TextImageSection() {
  const sparkles = Array.from({ length: 100 });
  const colors = ["bg-white", "bg-[#8FCDFF]", "bg-[#5F69A8]"];
  const blurs = ["blur-[1px]", "blur-[2px]", "blur-[3px]"];

  return (
    <section
      className="relative h-screen w-full py-24 px-6 md:px-20 text-white overflow-hidden"
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
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Side - Text */}
        <div>
          <h2 className="text-4xl font-bold mb-4">Your Catchy Heading Here</h2>
          <p className="text-lg text-gray-300 mb-6 text-justify">
           LUCIANO FERNANDES
Médico Cirurgião Digestivo, largou a medicina no dia 10 de Setembro de 2018 e fundou o Grupo de Inteligência Financeira, que já ajudou milhares de pessoas em todo o Brasil.

Através da sua própria experiência de transformação, acabou acidentalmente criando um método completamente novo, que desenvolve Inteligência Financeira de PESSOAS COMUNS e, forma natural, as transforma INVESTIDORES de sucesso.
          </p>
          <div className="flex justify-left items-left">
          <button className="px-6 py-3 cursor-pointer  hover:opacity-90 transition-all"
          style={{
                background:
                  "linear-gradient(90deg, #5F69A8, #616FB4, #657AC9, #6E8EEE, #80B3F6, #8FCDFF)",
              }}>
            Learn More
          </button>
          </div>
        </div>

        {/* Right Side - Image with White Blurry Frame & Overlay Image */}
        <div className="relative">
          {/* Spotlight Glow */}
          <div className="absolute inset-0 flex items-center justify-center z-0">
            <div className="w-[500px] h-[500px] bg-gradient-radial from-[#8FCDFF]/40 via-[#5F69A8]/25 to-transparent rounded-full blur-3xl"></div>
          </div>

          {/* Main Image with White Blurry Aura */}
          <div className="relative z-10">
            {/* White Blurry Aura Behind */}
            <div className="absolute inset-0 rounded-3xl blur-3xl opacity-50"style={{
                background:
                  "linear-gradient(90deg, #5F69A8, #616FB4, #657AC9, #6E8EEE, #80B3F6, #8FCDFF)",
              }}></div>
            {/* Sharp Frame */}
            <div className="relative rounded-sm p-[6px] bg-black/35 backdrop-blur shadow-lg">
              <img
                src="/assests/images/banner.jpg"
                alt="Main Image"
                className="rounded-sm h-[400px] w-full object-cover"
              />
            </div>
          </div>

          {/* Overlay Rectangle Image with White Blurry Aura */}
          <div className="absolute -bottom-24 left-1/2 -translate-x-[51%] w-[700px] h-[200px] rounded-lg overflow-hidden z-20">
            {/* White Blurry Aura Behind */}
            <div className="absolute inset-0 rounded-lg bg-white blur-3xl opacity-50"></div>
            {/* Sharp Frame */}
            <div className="relative w-full h-full rounded-lg p-[6px] bg-black/35 backdrop-blur">
              <div className="relative w-full h-full rounded-md overflow-hidden">
                <img
                  src="/assests/images/banner.jpg"
                  alt="Overlay Image"
                  className="w-full h-full object-cover"
                />
                {/* Overlay Layer */}
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
     {/* Divider Wrapper so it's clearly below content */}
<div className="relative z-20 pt-46">
  <div
    className="h-[2px] w-full max-w-[1000px] mx-auto"
    style={{
      background:
        "linear-gradient(to right, rgba(211,233,253,0.3),  rgba(211,233,253,0))",
    }}
  ></div>
</div>


    </section>
  );
}
