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
// import PricingHomeSection from "@/components/PricingHomeSection";
import PricingSection from "@/components/props/Pricing";

 const plans = {
  monthly: [
    {
      name: "Base",
      price: 80,
      features: [
        "All limited links",
        "Own analytics platform",
        "Chat support",
        "Optimize hashtags",
        "Unlimited users",
      ],
      buttonText: "Downgrade",
    },
    {
      name: "Pro",
      price: 120,
      features: [
        "All limited links",
        "Own analytics platform",
        "Chat support",
        "Optimize hashtags",
        "Unlimited users",
      ],
      popular: true,
      buttonText: "Upgrade",
    },
    {
      name: "Enterprise",
      price: 260,
      features: [
        "All limited links",
        "Own analytics platform",
        "Chat support",
        "Optimize hashtags",
        "Unlimited users",
      ],
      buttonText: "Upgrade",
    },
  ],
  yearly: [
    {
      name: "Base",
      price: 800,
      features: [
        "All limited links",
        "Own analytics platform (yearly)",
        "24/7 Priority support",
        "Advanced hashtag optimization",
        "Dedicated account manager",
      ],
      buttonText: "Downgrade",
    },
    {
      name: "Pro",
      price: 1200,
      features: [
        "All limited links",
        "Own analytics platform (yearly)",
        "24/7 Priority support",
        "Advanced hashtag optimization",
        "Dedicated account manager",
      ],
      popular: true,
      buttonText: "Upgrade",
    },
    {
      name: "Enterprise",
      price: 2600,
      features: [
        "All limited links",
        "Own analytics platform (yearly)",
        "24/7 Priority support",
        "Advanced hashtag optimization",
        "Dedicated account manager",
      ],
      buttonText: "Upgrade",
    },
  ],
};
export default function Home() {
  const monthlyPricingData = plans.monthly;
const yearlyPricingData = plans.yearly;
  
 
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


{/* <PricingHomeSection /> */}

  {/* Pricing Section */}
      <PricingSection
        title="Our Main Pricing"
        monthlyPlans={monthlyPricingData}
        yearlyPlans={yearlyPricingData}
        backgroundImage="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80"
      />
 <Testimonials2 />

<GlassFooter2 />

</>
  );
}
