"use client";


import GlassFooter2 from "@/components/Footer2";
import GlassNavbar2 from "@/components/Navbar2";
import Testimonials2 from "@/components/Testimonials2";
import ServicesScrollSticky from "@/components/ServicesScrollSticky";
// import ServicesSection2 from "@/components/ServicesSection2";
import ProcessHomeSection from "@/components/ProcessHomeSection";
import HeroSection2 from "@/components/HeroSection2";

// import HomeBlogSection from "@/components/HomeBlogSection";
import HomeAboutSection from "@/components/AboutHomeSection";
import PricingHomeSection from "@/components/PricingHomeSection";
import WhatsAppPopup from "@/components/WhatsappButton";
// import Navbar from "@/components/DemoNav";



export default function Home() {
  
 
  return (
<>

{/* <title>Digital Marketing Company in Varanasi | Rankinventiv</title>
<meta name="description" content="RankInventiv is a digital marketing company in Varanasi that helps local businesses grow online with simple SEO, ads, and smart marketing solutions." />
<meta name="keywords" content="Digital Marketing Agency in Varanasi, Best Digital marketing services in Varanasi, Varanasi digital marketing company, Online marketing services in Varanasi" />
<link rel="canonical" href="https://www.rankinventiv.com/" />
<meta property="og:title" content="Digital Marketing Company in Varanasi | Rankinventiv" />
<meta property="og:description" content="RankInventiv is a digital marketing company in Varanasi that helps local businesses grow online with simple SEO, ads, and smart marketing solutions." />
<meta property="og:url" content="https://www.rankinventiv.com/" />
<meta property="og:type" content="website" />
<meta property="og:image" content="https://www.rankinventiv.com/assets/images/home-og-image.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="RankInventiv - Digital Marketing Agency in Varanasi" /> */}

<GlassNavbar2 />
{/* <Navbar /> */}
<WhatsAppPopup
  phone="9199xxxxxxx"
  message="Hi there!"
  logo="/images/logo.png"
/>

<HeroSection2 />
<HomeAboutSection />
     <ProcessHomeSection />
       <ServicesScrollSticky />
        


      {/* <HomeBlogSection /> */}

{/* <ServicesSection2 /> */}


<PricingHomeSection />


 <Testimonials2 />

<GlassFooter2 />

</>
  );
}
