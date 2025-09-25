"use client";
import Image from 'next/image'

const features = [
  {
    number: '01',
    title: 'Market Research',
    description:
      'Smart insights that shape strategies for stronger, lasting results.',
  },
  {
    number: '02',
    title: 'Fast Execution',
    description:
      'Quick, efficient delivery while maintaining top-quality standards. ',
  },
  {
    number: '03',
    title: 'Process and Analysis',
    description:
      'Data-driven approach ensuring measurable growth and clear progress.',
  },
  {
    number: '04',
    title: 'Successful Project',
    description:
      'Proven record of delivering value across industries and businesses.',
  },
]

export default function AboutPageSection4() {
  return (
    <section className="lg:bg-[linear-gradient(125deg,_#fff,_#000000,_#5F69A8)] bg-gradient-to-b from-[#000000] via-[#fff] to-[#000000]  py-12 px-4 sm:px-6 lg:px-16 min-h-screen lg:pt-20 lg:pb-26 pb-30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
        
        {/* Image Section + Heading */}
        <div className="order-1 md:order-2 flex flex-col space-y-6">
          <span className="text-4xl font-bold text-white leading-snug lg:mb-10 mb-12">
            Rankinventiv Team's Streamlined Workflow 
          </span>

            <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[410px] max-h-[800px]">
  {/* 🔹 3D Tilted Gradient Frame Behind Image */}
  <div className="absolute -inset-4 rotate-[3deg] bg-gradient-to-br from-[#ffffff1a] via-[#8DCBFD40] to-[#5F69A860] z-0 shadow-2xl"></div>

  {/* 🔹 Outer Static Border Frame (counter-clockwise) */}
  <div className="absolute -inset-2 border-2 border-[#6E8EEE]/50 rotate-[-2deg] z-10"></div>

  {/* 🔹 Inner Slightly Offset Border Frame (clockwise) */}
  <div className="absolute -inset-4 border-2 border-[#8FCDFF]/30 rotate-[3deg] z-10"></div>

  {/* 🔹 Aura / Glow Behind Image */}
  <div
    className="absolute inset-0 blur-xl opacity-50 z-0"
    style={{
      background:
        "linear-gradient(90deg, #5F69A8, #616FB4, #657AC9, #6E8EEE, #80B3F6, #8FCDFF)",
    }}
  ></div>

  {/* 🖼️ Actual Image */}
  <Image
    src="/assets/images/about-us-page-image/rankinventiv-team-streamlined-workflow.png"
    alt="About Image"
    fill
    quality={100}
    priority
    className="object-cover relative z-20"
  />
</div>
        </div>

        {/* Features Section */}
        <div className="order-2 md:order-1">
          <div className="space-y-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-[linear-gradient(125deg,_#000000,_#5F69A8,_#000000)] backdrop-blur-md p-4 rounded-lg shadow-md flex items-start sm:items-center gap-4"
              >
                {/* Number Circle */}
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#5F69A8] text-white font-bold text-lg select-none">
                  {feature.number}
                </div>

                {/* Text Content */}
                <div>
                  <span className="text-xl md:text-2xl font-semibold text-white">
                    {feature.title}
                  </span>
                  <p className="text-lg  text-gray-100 mt-2 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
      
    </section>
  )
}
