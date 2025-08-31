import React from "react";
import Link from "next/link";

const services = [
  {
    image: "/assets/images/service_thumb_1.jpg",
    title: "Search Engine Optimization",
    description:
      "We help improve your website’s visibility on search engines like Google, increasing traffic and brand awareness.  Explore what we can do to boost your business online.",
    link: "/services/search-engine-optimisation-page",
  },
  {
    image: "/assets/images/service_thumb_2.jpg",
    title: "Local SEO",
    description:
      "Reach nearby customers effectively with our tailored local SEO strategies that improve local search rankings. Explore what we can do to boost your business online.",
    link: "/services/local-seo-page",
  },
 
  {
    image: "/assets/images/service_thumb_4.jpg",
    title: "Google Ads",
    description:
      "Boost visibility instantly with our result-driven Google & Meta Ads campaigns to generate leads fast. Explore what we can do to boost your business online.",
    link: "/services/google-ads-page",
  },
    {
    image: "/assets/images/service_thumb_6.png",
    title: "Meta Ads",
    description:
      "Maximize ROI with data-driven PPC strategies that attract the right audience and boost conversions. Explore what we can do to boost your business online.",
    link: "/services/meta-ads-page",
  },
   {
    image: "/assets/images/service_thumb_3.jpg",
    title: "Website Development",
    description:
      "Get a stunning and high-performing website that delivers seamless user experience and drives conversions. Explore what we can do to boost your business online.",
    link: "/services/website-development-page",
  },
  {
    image: "/assets/images/service_thumb_5.jpg",
    title: "Social Media Marketing",
    description:
      "Build your brand, engage your audience, and grow followers across platforms like Instagram and Facebook. Explore what we can do to boost your business online.",
    link: "/services/social-media-marketing-page",
  },

];

const borderStyle = {
  padding: "2px",
  background:
    "linear-gradient(to top, rgba(211,233,253,0.8), rgba(211,233,253,0) 70%)",
  borderRadius: "1rem",
  borderTop: "none",
};

const ServiceCards = () => {
  return (
    <section className="bg-gradient-to-b from-[#382933] via-[#372935] to-[#372831] pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      {/* 🌟 Section Heading */}
      <div className="max-w-3xl mx-auto text-center mb-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Our Services</h2>
        <p className="mt-4 text-gray-300 text-base sm:text-lg">
          Explore what we can do to boost your business online. Explore what we can do to boost your business online.  Explore what we can do to boost your business online.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} style={borderStyle} >
            <div className="bg-gradient-to-b from-[#382933] via-[#372935] to-[#372831] hover:scale-105 transition text-white rounded-2xl shadow-md p-6 flex flex-col hover:shadow-xl h-full">
              {/* Image */}
                <Link href={service.link}>
              <div className="w-full h-44 sm:h-52 rounded-xl mb-5 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              </Link>

              {/* Title */}
              <Link href={service.link}>
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 leading-tight">
                {service.title}
              </h3>
</Link>
              {/* Description */}
                <Link href={service.link}>
              <p className="text-sm sm:text-base text-gray-300 line-clamp-3 mb-5">
                {service.description}
              </p>
</Link>
              {/* Learn More Button */}
              <div className="mt-auto relative -m-2 p-2">
                <Link
                  href={service.link}
                  className="w-fit mx-auto bg-white/10 hover:scale-105 bg-gradient-to-r from-[#5F69A8] via-[#6E8EEE] to-[#8DCBFD] text-white font-medium py-2 px-5 hover:bg-white/20 transition text-sm sm:text-base flex items-center gap-2 cursor-pointer justify-center"
                >
                  Learn More <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceCards;
