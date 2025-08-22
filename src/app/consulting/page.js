import GlassFooter from "@/components/Footer";
import GlassNavbar from "@/components/Navbar";
import Faqs from "@/components/Faqs";
import AboutSection from "@/components/About";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/Cta";
import TextImageSection from "@/components/TextImageSection";
import Benefits from "@/components/Benefits";
import HeroSection from "@/components/HeroSection";
import ServiceProcess from "@/components/ServiceProcess";
export default function Page() {
  return (
    <>
      <GlassNavbar />
      <HeroSection />
      <TextImageSection />
      
      <AboutSection />
       <ServiceProcess /> 
        <Faqs /> 
        <CTASection />
      <GlassFooter />

     
      {/* <Benefits /> */}
      {/* <Testimonials /> */}
      
    </>
  );
}
