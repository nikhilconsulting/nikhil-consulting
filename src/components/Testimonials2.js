'use client'; // if using Next.js 13+ app directory

import React from 'react';

const testimonials = [
  {
    id: 1,
    text: "Online visibility has skyrocketed since we started working with them. The results are real and measurable",
    name: "Shalini Maurya",
    role: "Enterpreneur",
    image: "/assets/images/consulting-page-images/small-images-of-clients-9.png", // ← Add image path
  },
  {
    id: 2,
    text: "They gave us a clear plan that actually works. We're seeing huge growth and I highly recommend their team",
    name: "Akash Singh ",
    role: "Business Owner",
    rotate: "rotate-5",
    image: "/assets/images/consulting-page-images/small-images-of-clients-2.png",
  },
  {
    id: 3,
    text: "I was overwhelmed by digital marketing until they stepped in. They made it simple and our sales have never been better!",
    name: "Kanchan Sachdeva",
    role: "Trading Coach",
    rotate: "-rotate-4",
    image: "/assets/images/consulting-page-images/small-images-of-clients-10.png",
  },
  {
    id: 4,
    text: "Their strategic advice was exactly what we needed. Our brand is now connecting with so many new customers",
    name: "janmejay Chauhan",
    role: "Real Estate Agent",
    rotate: "rotate-3",
    image: "/assets/images/consulting-page-images/small-images-of-clients-5.png",
  },
];


export default function TestimonialSection() {
  return (
    <div className="bg-[linear-gradient(125deg,_#5F69A8,_#000000,_#fff)] backdrop-blur-[15px] px-2 pb-32 lg:px-16 lg:mt-32 xl:mt-0 testimonial-section h-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-white">
        
        {/* Left Section - Title */}
        <div className="sticky top-0 py-16">
          <div className="font-bold lg:leading-tight text-center text-4xl md:text-5xl sticky top-1/4">
            What ? <br /> People are <br /> Saying About Us... !
          </div>
          
        </div>

        {/* Right Section - Testimonials */}
        <div className="lg:px-16 sticky ">
          {testimonials.map((item, index) => (
            <div
              key={item.id}
              className={`testimonial-card w-80 sm:w-5/6 md:w-auto mx-auto lg:py-10 lg:mx-0 text-white md:p-6 p-3 rounded-lg shadow-md border lg:mt-12 border-white bg-[#5F69A8] backdrop-blur-[15px] sticky top-1/4 mt-10 ${
                item.rotate ? item.rotate : ''
              }`}
              style={{
                transition: 'transform 0.3s, z-index 0.3s',
              }}
            >
              <p className="text-white text-lg ">{item.text}</p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-6 items-start sm:items-center">
  
  {/* Client Image + Info */}
  <div className="flex items-center gap-2 order-1 sm:order-2">
    <img
      src={item.image}
      alt={item.name}
      className="w-12 h-12 rounded-full object-cover border border-white"
    />
    <div>
      <p className="text-lg font-semibold">{item.name}</p>
      <p className="text-base text-gray-100">{item.role}</p>
    </div>
  </div>

  {/* Company Name - Rankinventiv */}
  <div className="flex items-center gap-2 relative order-2 sm:order-1">
    <p className="text-xl">Rankinventiv</p>
    <div className=" w-px  h-7 bg-gray-100" />
  </div>
</div>


            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
