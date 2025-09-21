"use client";


import GlassFooter2 from "@/components/Footer2";
import GlassNavbar2 from "@/components/Navbar2";
import Testimonials2 from "@/components/Testimonials2";
import ServicesScrollSticky from "@/components/ServicesScrollSticky";
import ServicesSection2 from "@/components/ServicesSection2";
import WorkingProcess2 from "@/components/ProcessHomeSection";
import HeroSection2 from "@/components/HeroSection2";

import HomeBlogSection from "@/components/HomeBlogSection";
import HomeAboutSection from "@/components/AboutHomeSection";
import PricingHomeSection from "@/components/PricingHomeSection";
import PricingSection from "@/components/props/Pricing";

const monthlyPricingData = [
  {
    name: "Base",
    price: 80,
    features: ["Feature A", "Feature B", "Feature C"],
    buttonText: "Sign Up",
  },
  {
    name: "Pro",
    price: 120,
    features: ["Feature D", "Feature E", "Feature F"],
    popular: true,
    buttonText: "Upgrade Now",
  },
  {
    name: "Enterprise",
    price: 260,
    features: ["Feature G", "Feature H", "Feature I"],
    buttonText: "Contact Sales",
  },
];

const yearlyPricingData = [
  {
    name: "Base",
    price: 800,
    features: ["All monthly features", "Yearly discount"],
    buttonText: "Sign Up Yearly",
  },
  {
    name: "Pro",
    price: 1200,
    features: ["All Pro features", "Dedicated support", "Advanced Analytics"],
    popular: true,
    buttonText: "Upgrade Yearly",
  },
  {
    name: "Enterprise",
    price: 2600,
    features: ["All Enterprise features", "Custom API integration"],
    buttonText: "Contact Sales",
  },
];
export default function Home() {
  
 
  return (
<>
<GlassNavbar2 />

<HeroSection2 />
<HomeAboutSection />
     <WorkingProcess2 />
       <ServicesScrollSticky />
        


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
