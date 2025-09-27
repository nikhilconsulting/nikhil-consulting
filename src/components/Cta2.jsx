"use client";
import Link from 'next/link';
export default function Cta2() {
  return (
    <section className="relative z-10 w-[90%] max-w-6xl mx-auto -mt-20 bg-[linear-gradient(90deg,#5F69A8,#616FB4,#657AC9,#6E8EEE,#80B3F6,#8FCDFF)] backdrop-blur-[15px] rounded-xl p-6 sm:p-10 shadow-2xl">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Side */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl font-bold text-white mb-2">
            Ready to Dominate  <br className="sm:hidden" />
            Your Market?
          </h2>
          <p className="text-white mb-8">
            Don't just compete-lead. Build powerful digital strategies that deliver a clear competitive advantage
          </p>
          <div className='mb-8 lg:mb-0'>
          <Link href="/services" className="bg-gradient-to-r from-[#372935] via-black to-[#372935]  cursor-pointer transition hover:scale-105 text-white font-semibold py-3 px-5 transition duration-300 ">
            Claim Your Advantage →
          </Link>
          </div>
        </div>

        {/* Right Side - Images */}
        <div className="flex-1 relative w-full max-w-md mx-auto">
  {/* BACK Image - now lower z-index */}
  <div className="absolute -top-6 -right-0 w-40 h-28 sm:w-64 sm:h-44 rounded-md overflow-hidden border-4 border-white shadow-lg z-0">
    <img
      src="/assets/images/cta-section-image/cta-2.png"
      alt="Team Hands"
      className="object-cover w-full h-full"
    />
  </div>

  {/* FRONT Image - now higher z-index */}
  <div className="relative w-52 h-36 sm:w-54 sm:h-40 rounded-md overflow-hidden shadow-xl ml-12 mt-12 border-4 border-white z-10">
    <img
      src="/assets/images/cta-section-image/cta-1.png"
      alt="Team Meeting"
      className="object-cover w-full h-full"
    />
  </div>
</div>

      </div>
    </section>
  );
}
