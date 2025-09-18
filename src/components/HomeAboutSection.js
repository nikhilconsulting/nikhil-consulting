import Image from 'next/image';
import Link from 'next/link';

export default function HomeAboutSection() {
  return (
    <section className="w-full min-h-screen flex flex-col lg:flex-row">
      {/* Left Image */}
      <div className="w-full lg:w-1/2 h-64 sm:h-80 md:h-96 lg:h-auto relative">
        <Image
          src="/assets/images/WhyChooseUs.png"
          alt="Visual"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Right Text */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-gradient-to-b from-[#382933] via-[#372935] to-[#372831] backdrop-blur-[15px] px-6 py-10 sm:px-10 md:px-16 lg:px-20 xl:px-24">
        <div className="max-w-2xl text-white">
          {/* Know More Badge */}
          <Link href={"/about-us"} className="hidden md:block absolute top-18 right-18 text-base font-semibold tracking-wide border border-white rounded-full p-2 hover:bg-[linear-gradient(90deg,#5F69A8,#616FB4,#657AC9,#6E8EEE,#80B3F6,#8FCDFF)] hover:border-none">
            Know More
          </Link>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-6 leading-tight">
            About us.
          </h2>

          {/* Intro Paragraph */}
          <p className="text-base sm:text-lg md:text-xl text-white/80 font-medium mb-6 leading-relaxed">
            Focused on excellence for our clients, we are well established, with a reputation for great service and a high-quality finish.
          </p>

          {/* Detailed Paragraphs */}
          <div className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed space-y-4">
            <p>
              With our roots in high-end production, TRUE works on a wide spectrum of projects, with top international event organisers and designers.
              We delight in diversity, from luxury brand experiences to ambitious, large-scale live events.
            </p>
            <p>
              The magic happens at TRUE HQ – a 3,000m² manufacturing facility in Billericay, Essex. A large, flexible space that’s reconfigured for every new challenge.
            </p>
            <p>
              The optimum work environment with plenty of room to test build your project prior to installation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
