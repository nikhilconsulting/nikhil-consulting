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
import WhyChooseUs from "@/components/WhyChooseUs";
export default function Page() {
  return (
    <>
      <GlassNavbar />
      <HeroSection />
      <TextImageSection />  
      <Benefits />
      <WhyChooseUs />
      <AboutSection />
      
      <ServiceProcess />      
      
      <Testimonials />

        <Faqs /> 
        <CTASection />
      <GlassFooter />
      
    </>
  );
}
