"use client";


import GlassFooter2 from "@/components/pages/Footer2";
import GlassNavbar2 from "@/components/pages/Navbar2";
import Testimonials2 from "@/components/pages/Testimonials2";
import ServicesScrollSticky from "@/components/pages/ServicesScrollSticky";
import ServicesSection2 from "@/components/pages/ServicesSection2";


export default function Home() {
  return (
<>
<GlassNavbar2 />
<ServicesSection2 />

 <ServicesScrollSticky />
 <Testimonials2 />

<GlassFooter2 />

</>
  );
}
