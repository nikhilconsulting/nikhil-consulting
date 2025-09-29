'use client';

import React from 'react';
// import Image from 'next/image';

export default function Banner({ title, imageSrc }) {
  return (
    <section className="relative w-full h-[220px] lg:h-[210px] flex items-center justify-center overflow-hidden bg-[#6E8EEE]">
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

      <span className="relative text-gray-100 text-4xl md:text-5xl lg:text-5xl mt-24 lg:mt-20 font-bold z-10 text-center">
        {title}
      </span>
    </section>
  );
}

// calling prop structure for every pages
{/* <Banner
  title="About Us"
  imageSrc="/images/about-banner.jpg"
/> */}