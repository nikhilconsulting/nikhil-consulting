import GlassFooter2 from '@/components/Footer2'
import GlassNavbar2 from '@/components/Navbar2'
import ServiceCards from '@/components/ServiceCards'
import React from 'react'

export default function page() {
  return (
    <>
    {/* <title>Services</title>
<meta name="description" content="RankInventiv offers complete digital marketing services in Varanasi and across India. From SEO, social media, and paid ads to website growth strategies, we help businesses increase traffic, leads, and sales with customized solutions." />
<meta name="keywords" content="Digital Marketing Company in Varanasi, SEO & Social Media Marketing, Online Advertising & PPC Service, Website Growth & Branding Solutions, RankInventiv Digital Marketing Agency" />
<link rel="canonical" href="https://www.rankinventiv.com/services" />
<meta property="og:title" content="Services" />
<meta property="og:description" content="Complete digital marketing services in Varanasi including SEO, PPC, social media, and branding to grow your business." />
<meta property="og:url" content="https://www.rankinventiv.com/services" />
<meta property="og:type" content="website" />
<meta property="og:image" content="https://www.rankinventiv.com/assets/images/services-og-image.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="RankInventiv Services Page - SEO, PPC, Social Media" /> */}

    <GlassNavbar2 />
    
      <ServiceCards />
      <GlassFooter2 />
    </>
  )
}
