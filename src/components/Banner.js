'use client';

import React from 'react';
// import Image from 'next/image';

export default function Banner({ title, imageSrc }) {
  return (
    <section className="relative w-full h-[190px] lg:h-[230px] flex items-center justify-center overflow-hidden bg-[linear-gradient(125deg,_#fff,_#000000,_#5F69A8)]">
      {/* Conditional background image */}
      {/* {imageSrc && (
        <Image
          src={imageSrc}
          alt={`${title} Banner`}
          fill
          className="object-cover absolute inset-0 -z-10"
          priority
        />
      )} */}

      <h1 className="relative text-gray-100 text-4xl sm:text-5xl md:text-6xl mt-20 font-bold z-10 text-center">
        {title}
      </h1>
    </section>
  );
}

// calling prop structure for every pages
{/* <Banner
  title="About Us"
  imageSrc="/images/about-banner.jpg"
/> */}