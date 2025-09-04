import AboutSection3 from '@/components/AboutSection3';
import About2 from '@/components/About2';
import GlassFooter2 from '@/components/Footer2';
import GlassNavbar2 from '@/components/Navbar2';
import Image from 'next/image';
import WorkingProcess2 from '@/components/WorkingProcess2';

export default function page() {
  return (
    <>
    <GlassNavbar2 />
 
   <AboutSection3 />
     <About2 />
     {/* <WorkingProcess2 /> */}
    <GlassFooter2 />
    </>
  );
}
