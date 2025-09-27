"use client";
import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <>
      <section
        className="relative w-full min-h-screen flex flex-col justify-center pt-10 lg:pt-0 px-4 sm:px-8 md:px-16 lg:px-20 text-white"
        style={{
          background: "linear-gradient(to bottom, #382933, #372935, #372831)",
        }}
      >
      

        {/* Content Row */}
        <div className="grid grid-cols-1 xl:grid-cols-2 items-center">
          {/* Responsive Image Section */}
<div className="w-full">
    <div className="relative flex justify-center items-center w-full mt-6 xl:hidden">
      {/* Collage wrapper */}
      <div className="relative w-[420px] h-[400px]">
        
        {/* Img 1 - Top Left */}
        <div className="absolute top-0 left-0 w-[180px] h-[130px] z-[8] rotate-[-10deg] shadow-xl">
          <Image
            src="/assets/images/consulting-page-images/why-choose-us-section-images/why-choose-us-1.png"
            alt="Screenshot 1"
            fill
            className="object-cover "
          />
        </div>

        {/* Img 2 - Top Right */}
        <div className="absolute top-[5px] right-0 w-[200px] h-[120px] z-[9] rotate-[5deg] shadow-xl">
          <Image
            src="/assets/images/consulting-page-images/why-choose-us-section-images/why-choose-us-2.png"
            alt="Screenshot 2"
            fill
            className="object-cover "
          />
        </div>

        {/* Img 3 - Middle Big (center focus) */}
       <div className="absolute top-[120px] left-[60%] -translate-x-1/2 w-[260px] h-[160px] z-[12] rotate-[-3deg] shadow-2xl">
  <Image
    src="/assets/images/consulting-page-images/why-choose-us-section-images/why-choose-us-3.png"
    alt="Screenshot 3"
    fill
    className="object-cover "
  />
</div>


        {/* Img 4 - Bottom Left */}
        <div className="absolute bottom-[10px] left-[20px] w-[250px] h-[140px] z-[10] rotate-[10deg] shadow-xl">
          <Image
            src="/assets/images/consulting-page-images/why-choose-us-section-images/why-choose-us-4.png"
            alt="Screenshot 4"
            fill
            className="object-cover "
          />
        </div>
      </div>
    </div>




  {/* Desktop View - Overlapping Animated Images */}
  <div className="relative hidden xl:block w-full h-[700px]">
    {/* Image 1 */}
    <div className="absolute top-[8%] left-[0%] w-[320px] h-[200px] bg-gradient-to-r from-[#372935] via-[#616FB4] to-[#372935] rounded-lg shadow-xl animate-pulse transition-transform duration-300 hover:scale-105 -rotate-3" style={{ padding: "10px" }}>
      <Image
        src="/assets/images/consulting-page-images/why-choose-us-section-images/why-choose-us-1.png"
        alt="Screenshot 1"
        width={300}
        height={180}
        className="rounded-md object-cover"
        priority
      />
    </div>

    {/* Image 2 */}
    <div className="absolute top-[22%] left-[45%] w-[320px] h-[200px] bg-gradient-to-r from-[#372935] via-[#616FB4] to-[#372935] rounded-lg shadow-xl animate-pulse transition-transform duration-300 hover:scale-105 -rotate-5" style={{ padding: "10px" }}>
      <Image
        src="/assets/images/consulting-page-images/why-choose-us-section-images/why-choose-us-2.png"
        alt="Screenshot 2"
        width={300}
        height={180}
        className="rounded-md object-cover"
        priority
      />
    </div>

    {/* Image 3 */}
    <div className="absolute top-[46%] left-[0%] w-[320px] h-[200px] bg-gradient-to-r from-[#372935] via-[#616FB4] to-[#372935] rounded-lg shadow-xl animate-pulse transition-transform duration-300 hover:scale-105 rotate-3" style={{ padding: "10px" }}>
      <Image
        src="/assets/images/consulting-page-images/why-choose-us-section-images/why-choose-us-3.png"
        alt="Screenshot 3"
        width={300}
        height={180}
        className="rounded-md object-cover"
        priority
      />
    </div>

    {/* Image 4 */}
    <div className="absolute top-[62%] left-[45%] w-[320px] h-[200px] bg-gradient-to-r from-[#372935] via-[#616FB4] to-[#372935] rounded-lg shadow-xl animate-pulse transition-transform duration-300 hover:scale-105 -rotate-3" style={{ padding: "10px" }}>
      <Image
        src="/assets/images/consulting-page-images/why-choose-us-section-images/why-choose-us-4.png"
        alt="Screenshot 4"
        width={300}
        height={180}
        className="rounded-md object-cover"
        priority
      />
    </div>
  </div>
</div>


          {/* Left - Text Paragraph */}
          <div className="text-gray-100 text-justify leading-relaxed text-base mb-8 lg:mt-0 mt-10 xl:mr-16">
             <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-white mb-3">
            Why Choose Us?
          </h2> 
            <p className="mb-4">
              Digital marketing consulting should deliver measurable growth, not
              wasted expenses. Our consulting helps businesses invest their
              budget wisely by focusing only on strategies that truly work. From
              SEO consulting and Local SEO to Google Business Profile
              optimization, Google Ads, and Meta Ads, we design every campaign
              to be data-driven, targeted, and result-oriented. With expert
              guidance, you reduce costs, improve online visibility, and attract
              the customers who matter most, ensuring maximum ROI.
            </p> 
            <p className="mb-6">
              Over the years, we have supported startups, business owners, and
              entrepreneurs in achieving consistent online growth. Our
              consulting provides a clear roadmap, blending proven digital
              marketing techniques with customized strategies tailored for your
              brand. Whether it’s ranking higher on Google, generating quality
              leads through paid ads, or building a powerful social media
              presence, we help you grow faster, smarter, and more
              sustainably—driving long-term success for your business.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8 max-w-3xl mx-auto">
              {[
                "Save 35% Budget",
                "Growth-Focused Results",
                "Proven ROI",
                "Trusted by 116+ Businesses",
              ].map((point, index) => (
                <div key={index} className="flex items-center gap-2">
                  {/* Number Circle */}
                  <div
                    className="w-10 h-10 flex items-center justify-center rounded-full text-white font-semibold flex-shrink-0"
                    style={{
                      background:
                        "linear-gradient(90deg, #5F69A8, #616FB4, #657AC9, #6E8EEE, #80B3F6, #8FCDFF)",
                    }}
                  >
                    {`0${index + 1}`}
                  </div>

                  {/* Text Box */}
                  <div
                    className="relative p-3 rounded-md"
                    style={{
                      minWidth: "150px",
                      backgroundColor: "transparent",
                    }}
                  >
                    {/* Gradient Border */}
                    <div
                      className="absolute inset-0 rounded-md pointer-events-none z-0"
                      style={{
                        borderLeft: "1px solid rgba(255, 255, 255, 0.3)",
                        borderRight: "1px solid rgba(255, 255, 255, 0.3)",
                        borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
                        borderTop: "none",
                        borderBottomLeftRadius: "10px",
                        borderBottomRightRadius: "10px",
                      }}
                    />
                    <p className="relative z-10 text-gray-300 font-semibold">
                      {point}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
   </>
  );
}