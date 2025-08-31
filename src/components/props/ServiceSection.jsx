  import React from "react";
  import '@fortawesome/fontawesome-free/css/all.min.css';

  const ServiceSection = ({
    imageSrc,
    imageAlt,
    heading,
    headingsmall,
    subheading,
    description,
    seoTitle,
    seoContent,
    seoPoints = [],
    cardOneTitle,
    cardOneContent,
    cardOneFeatures = [],
    cardTwoIconClass,
    cardTwoTitle,
    cardTwoContent,
    finalTitle,
    finalContent,
    finalPoints = [],
  }) => {
    return (
      <>      <section
    className="relative pt-32 pb-16 lg:pt-36 lg:pb-20"
    style={{
      background: "linear-gradient(to bottom, #382933, #372935, #372831)",
    }}
  >

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-base text-gray-200 ">
            {/* Top section - Image and Text */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="w-full rounded-xl object-cover"
                  loading="lazy"
                />
              </div>

              {/* Text Content */}
              <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
                {/* 🆕 New Heading */}
    <span className="text-3xl sm:text-xl font-bold text-left text-white mb-2">
      {headingsmall}
    </span>
                <h2 className="text-2xl sm:text-3xl font-semibold leading-snug text-white">
                  {heading}
                  <br className="hidden sm:block" />
                  {subheading}
                </h2>
                <p className="mt-4 text-gray-200 text-justify text-sm sm:text-base">
                  {description}
                </p>
              </div>
            </div>

            {/* SEO Description Section */}
            <div className="mt-12 sm:mt-16">
              <h4 className="text-xl sm:text-2xl font-semibold mb-4 text-white">
                {seoTitle}
              </h4>
              <p className="text-gray-200 text-justify text-sm sm:text-base">
                {seoContent}
              </p>

              {seoPoints.length > 0 && (
                <ul className="mt-6 space-y-3 pl-0 list-none">
                  {seoPoints.map((point, idx) => (
                    <li className="flex items-start text-gray-200" key={idx}>
                      <i className="fas fa-check text-blue-400 mr-2 mt-1" />
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>

    {/* Feature Cards Section */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
    {/* Card 1 */}
    <div
      className="p-6 sm:p-8 rounded-xl h-full bg-[linear-gradient(90deg,#5F69A8,#616FB4,#657AC9,#6E8EEE,#80B3F6,#8FCDFF)] border border-gray-400 text-white shadow-[0_0_10px_rgba(255,255,255,0.1)]"
    
    >
      <h5 className="text-lg font-bold mb-3">{cardOneTitle}</h5>
      <p className="text-gray-100 text-sm sm:text-base">{cardOneContent}</p>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {cardOneFeatures.map((feature, idx) => (
          <div key={idx}>
            <div className="flex items-center mb-3">
              <i className="far fa-dot-circle text-white-400 mr-2" />
              <strong className="text-sm sm:text-base text-gray-100">{feature}</strong>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Card 2 */}
    <div
      className="p-6 sm:p-8 rounded-xl h-full border border-gray-400 bg-[linear-gradient(90deg,#5F69A8,#616FB4,#657AC9,#6E8EEE,#80B3F6,#8FCDFF)] text-white shadow-[0_0_10px_rgba(255,255,255,0.1)] text-center"
      // style={{
      //   background: "linear-gradient(to bottom, #382933, #372935, #372831)",
      // }}
    >
      <i className={`${cardTwoIconClass} text-3xl sm:text-4xl text-white-400 mb-4`} />
      <h5 className="text-lg font-bold mb-3">{cardTwoTitle}</h5>
      <p className="text-gray-100 text-sm sm:text-base">{cardTwoContent}</p>
    </div>
  </div>



            {/* Final Section */}
            <div className="mt-12 sm:mt-16">
              <h4 className="text-xl sm:text-2xl font-semibold mb-4 text-white">
                {finalTitle}
              </h4>
              <p className="text-gray-200 text-justify text-sm sm:text-base">
                {finalContent}
              </p>
              {finalPoints.length > 0 && (
                <ul className="mt-6 space-y-3 pl-0 list-none">
                  {finalPoints.map((point, idx) => (
                    <li className="flex items-start text-gray-200" key={idx}>
                      <i className="fas fa-check text-blue-400 mr-2 mt-1" />
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
         {/* Divider */}
        <div className="absolute bottom-0 left-0 w-full z-20">
          <div
            className="h-[2px] w-full max-w-[1000px] mx-auto"
            style={{
              background:
                "linear-gradient(to right, rgba(211,233,253,0.3), rgba(211,233,253,0))",
            }}
          ></div>
        </div>
      </section>
      
        </>

    );
  };

  export default ServiceSection;
