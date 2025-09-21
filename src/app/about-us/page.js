"use client";
import AboutPageSection3 from '@/components/AboutPageSection3';
import AboutPageSection2 from '@/components/AboutPageSection2';
import GlassFooter2 from '@/components/Footer2';
import GlassNavbar2 from '@/components/Navbar2';
import AboutPageSection4 from '@/components/AboutPageSection4';
import Banner from '@/components/Banner';


export default function page() {
  return (
    <>
    <GlassNavbar2 />
    <Banner />
 <AboutPageSection2 />
   <AboutPageSection3 />
     
     <AboutPageSection4 />
    <GlassFooter2 />
    </>
  );
}
