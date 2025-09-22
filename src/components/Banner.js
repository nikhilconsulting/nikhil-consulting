'use client';

// import Image from 'next/image';

export default function Banner() {
  return (
    <section className="relative  w-full h-[190px] lg:h-[230px] flex items-center justify-center overflow-hidden"
    style={{
                background:
                  "linear-gradient(90deg, #5F69A8, #616FB4, #657AC9)",
              }}>
      {/* Background Image */}
      {/* <Image
        src="/images/service-detail-page-images/local-seo-banner.png"
        alt="Social Media Marketing Banner"
        fill
        className="object-cover absolute inset-0 -z-10"
        priority
      /> */}

      {/* Overlay text */}
      <h1 className="relative text-gray-100 text-4xl sm:text-5xl md:text-6xl mt-20 font-bold z-10 text-center">
        About Us
      </h1>
    </section>
  );
}


// background: 'linear-gradient(to bottom, #372935, #5F69A8, #fff)',
// background: 'linear-gradient(to bottom, #5F69A8, #372935, #5F69A8)',
// bg-[linear-gradient(to_bottom,_#372935,_#5F69A8,_#000)]
  //  background: 'linear-gradient(to bottom, #372935, #5F69A8, #000)',
