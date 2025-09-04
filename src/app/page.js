"use client";


import GlassFooter2 from "@/components/Footer2";
import GlassNavbar2 from "@/components/Navbar2";
import Testimonials2 from "@/components/Testimonials2";
import ServicesScrollSticky from "@/components/ServicesScrollSticky";
import ServicesSection2 from "@/components/ServicesSection2";
import WorkingProcess2 from "@/components/WorkingProcess2";


export default function Home() {
  return (
<>
<GlassNavbar2 />
{/* <ServicesSection2 /> */}

{/* <WorkingProcess2 /> */}
 <ServicesScrollSticky />

 <Testimonials2 />


<GlassFooter2 />

</>
  );
}
