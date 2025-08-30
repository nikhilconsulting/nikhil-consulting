'use client';

import Image from 'next/image';

export default function Banner() {
  return (
    <section className=" ">
    
       
          <Image 
            src="/assets/images/service-detail-page-images/local-seo-banner.png"
            alt="Social Media Marketing Banner"
            width={1920}
            height={620}
            className="w-full h-auto object-cover"
          />
      
      
    </section>
  );
}
