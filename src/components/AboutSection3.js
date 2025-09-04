import Image from "next/image";

export default function InstructorSection() {
  return (
    <>
   <section className=" relative bg-[linear-gradient(to_bottom,_#382933,_#372935,_#372831)] lg:pt-40 py-16 px-6 overflow-visible">

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] items-center gap-12 lg:gap-16">

        {/* Text Section */}
        <div className="text-white order-2 lg:order-1 lg:mt-0 mt-8 ">
          <h2 className="text-2xl sm:text-3xl font-bold leading-snug">
            If You Are A Certified Teacher <br />
            <span className="text-[#87C0FB] font-normal">
              Then Become An Instructor
            </span>
          </h2>

          <p className="text-sm sm:text-base text-gray-200 mt-4">
            Unlock the opportunity to experience classroom joy by joining
            our rich, diverse platform. Share your expertise, become
            someone's inspiration, and make a real difference.
          </p>

          <p className="text-sm sm:text-base text-gray-200 mt-2">
            Unlock the opportunity to experience classroom joy by joining
            our rich, diverse platform. Share your expertise, become
            someone's inspiration, and make a real difference.
          </p>

          <p className="text-sm sm:text-base text-gray-200 mt-2">
            Unlock the opportunity to experience classroom joy by joining
            our rich, diverse platform. Share your expertise, become
            someone's inspiration, and make a real difference.
          </p>

          <h3 className="mt-6 font-semibold text-gray-100">
            Enjoy Many Perks
          </h3>
          <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-gray-200 list-disc list-inside">
            <li>Global Impact</li>
            <li>Student Feedback</li>
            <li>Flexible Schedules</li>
            <li>Increase Your Expertise</li>
            <li>Incredible Teaching Tools</li>
            <li>Professional Development</li>
            <li>Recognition & Compensation</li>
            <li>Networking Opportunities</li>
          </ul>

          <button className="mt-6 px-6 py-3 bg-[linear-gradient(90deg,#5F69A8,#616FB4,#657AC9,#6E8EEE,#80B3F6,#8FCDFF)] backdrop-blur-[15px] text-white text-base cursor-pointer transition hover:scale-105 hover:opacity-90">
            Become an Instructor
          </button>
        </div>

        {/* Image Section */}
      <div className="relative flex justify-center items-stretch h-full order-1 lg:order-2 lg:mt-0 mt-20">
  {/* Spotlight Glow Behind Image */}
  <div className="absolute inset-0 flex items-center justify-center z-0">
    <div className="w-[250px] sm:w-[350px] md:w-[450px] lg:w-[500px] h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] bg-gradient-radial from-[#8FCDFF]/40 via-[#5F69A8]/25 to-transparent rounded-full blur-3xl"></div>
  </div>

  {/* Image Container with Aura */}
  <div className="relative z-10 w-full max-w-[500px] h-full">
    {/* Aura Behind Image */}
    <div
      className="absolute inset-0 rounded-lg blur-xl opacity-50"
      style={{
        background:
          "linear-gradient(90deg, #5F69A8, #616FB4, #657AC9, #6E8EEE, #80B3F6, #8FCDFF)",
      }}
    ></div>

    {/* Actual Image */}
    <Image
      src="/assets/images/service_thumb_3.jpg"
      alt="Instructor"
      width={500}
      height={500}
      className="w-full h-full object-cover rounded-lg relative"
    />
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
}
