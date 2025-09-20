"use client";


import GlassFooter2 from "@/components/Footer2";
import GlassNavbar2 from "@/components/Navbar2";
import Testimonials2 from "@/components/Testimonials2";
import ServicesScrollSticky from "@/components/ServicesScrollSticky";
import ServicesSection2 from "@/components/ServicesSection2";
import WorkingProcess2 from "@/components/WorkingProcess2";
import HeroSection2 from "@/components/HeroSection2";
import Image from "next/image";
import NextAndProgress from "@/components/NextAndProgress";
import Slide from "@/components/Slide";
import Slider from "@/components/Slider";
import HomeBlogSection from "@/components/HomeBlogSection";
import HomeAboutSection from "@/components/HomeAboutSection";
import PricingHomeSection from "@/components/PricingHomeSection";


export default function Home() {
  return (
<>
<GlassNavbar2 />

{/* <HeroSection2 /> */}
  {/* <div className="relative h-screen w-screen overflow-hidden bg-stone-800">
       <Image 
  src="/assets/pngwing.com.png" 
  alt="example" 
  width={400} 
  height={400} 
/>
        <Slide />
        <Slider />
        <NextAndProgress />
      </div > */}
     
       <ServicesScrollSticky />
        <HomeAboutSection />
<WorkingProcess2 />

      {/* <HomeBlogSection /> */}

{/* <ServicesSection2 /> */}


<PricingHomeSection />

 <Testimonials2 />

<GlassFooter2 />

</>
  );
}
