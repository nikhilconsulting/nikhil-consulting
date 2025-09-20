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

export default function AboutSection4() {
  return (
    <section className="bg-gradient-to-b from-[#382933] via-[#372935] to-[#372831] py-12 px-4 sm:px-6 lg:px-16 min-h-screen lg:pt-20 lg:pb-0 pb-30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
        
        {/* Image Section + Heading */}
        <div className="order-1 md:order-2 flex flex-col space-y-6">
          <span className="text-4xl font-bold text-white leading-snug">
            Rankinventiv Team's Streamlined Workflow 
          </span>

          <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[410px] max-h-[800px] rounded-md overflow-hidden">
            <Image
              src="/assets/cropped-1920-1080-1343746.png"
              alt="About Image"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="order-2 md:order-1">
          <div className="space-y-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-r from-[#5F69A8] via-[#6E8EEE] to-[#8FCDFF] backdrop-blur-md p-4 rounded-lg shadow-md flex items-start sm:items-center gap-4"
              >
                {/* Number Circle */}
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-b from-[#382933] to-[#372831] text-white font-bold text-lg select-none">
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
