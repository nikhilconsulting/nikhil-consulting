"use client";
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

 <title>Digital Marketing Consultant |  Smart Growth, Budget Friendly</title>
        <meta name="description" content="Grow smarter- our digital marketing consultant brings in experts from every field to deliver complete solutions that maximize your ROI." />
        <meta name="keywords" content="contact Blue Coast Wellness, get in touch, health plans support, customer service, contact us, Blue Coast Wellness Group, inquiries, health plan inquiries, health plans assistance, wellness solutions" />
        <link rel="canonical" href="https://www.rankinventiv.com/consulting" />
        <meta property="og:title" content="Digital Marketing Consultant |  Smart Growth, Budget Friendly" />
        <meta property="og:description" content="Grow smarter- our digital marketing consultant brings in experts from every field to deliver complete solutions that maximize your ROI." />
        <meta property="og:url" content="https://rankinventiv.com/consulting" />
        <meta property="og:type" content="website" />
        {/* <meta name="robots" content="index, follow" /> */}


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
