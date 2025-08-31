"use client";


import GlassFooter2 from "@/components/Footer2";
import GlassNavbar2 from "@/components/Navbar2";
import ServicesScrollSticky from "@/components/ServicesScrollSticky";
import WorkingProcess from "@/components/WorkingProcess";


export default function Home() {
  return (
<>
<GlassNavbar2 />

 <ServicesScrollSticky />
 <WorkingProcess />
<GlassFooter2 />

</>
  );
}
