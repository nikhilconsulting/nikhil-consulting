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
    {/* <title>About Us</title>
<meta name="description" content="RankInventiv is a trusted digital marketing agency in Varanasi helping businesses across India and beyond. Our team specializes in SEO, social media, ads, and branding to deliver measurable growth and long-term success." />
<link rel="canonical" href="https://www.rankinventiv.com/about-us" />
<meta property="og:title" content="About Us" />
<meta property="og:description" content="Trusted digital marketing agency in Varanasi offering SEO, social media, and ads for business growth." />
<meta property="og:url" content="https://www.rankinventiv.com/about-us" />
<meta property="og:type" content="website" />
<meta property="og:image" content="https://www.rankinventiv.com/assets/images/about-us-og-image.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="About RankInventiv - Digital Growth Experts" /> */}

    <GlassNavbar2 />
    <Banner />
 <AboutPageSection2 />
   <AboutPageSection3 />
     
     <AboutPageSection4 />
    <GlassFooter2 />
    </>
  );
}
