import AboutSection3 from '@/components/AboutSection3';
import About2 from '@/components/About2';
import GlassFooter2 from '@/components/Footer2';
import GlassNavbar2 from '@/components/Navbar2';
import Image from 'next/image';
import AboutSection4 from '@/components/AboutSection4';


export default function page() {
  return (
    <>
    <GlassNavbar2 />
 <About2 />
   <AboutSection3 />
     
     <AboutSection4 />
    <GlassFooter2 />
    </>
  );
}
