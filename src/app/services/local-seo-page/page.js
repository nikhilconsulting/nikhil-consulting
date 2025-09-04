import React from "react";
import ServiceSection from "@/components/props/ServiceSection";
import GlassNavbar2 from "@/components/pages/Navbar2";
import GlassFooter2 from "@/components/pages/Footer2";
import WorkingProcess from "@/components/props/WorkingProcess";
import DigitalMarketingFAQs from "@/components/props/Faqs";


const SMMPage = () => {
  const faqsData = [
  {
    question: "Why should I hire a consultant instead of doing digital marketing myself?",
    answer:
      "Doing it yourself can lead to mistakes, wasted money, and slow results. A consultant brings expertise, proven strategies, and a clear growth plan. You save time, reduce trial-and-error, and get faster, more reliable results.",
  },
  {
    question: "How does Digital Marketing Consulting help me save budget and grow my business?",
    answer:
      " Consulting gives you a clear strategy so you don’t waste money on random ads or wrong targeting. With expert guidance, your budget is used only on proven methods like SEO, Google Ads, Meta Ads, and Local SEO. This way you save cost while achieving measurable growth.",
  },
  {
    question: "How much should I spend on ads, and how will consulting help me?",
    answer:
      " Ad spend depends on your business type, target market, and goals. Some businesses grow with ₹5,000/month while others need more. As a consultant, I guide you on the right budget, design ad campaigns that reach the correct audience, and ensure you get maximum ROI from every rupee spent.",
  },
  {
    question: "Can consulting work for different people in different fields?",
    answer:
      "Yes! Every business is unique, and consulting is customized. Whether you are in retail, services, education, healthcare, or startups — strategies are tailored to your industry, location, and customers. This ensures you get results that actually matter for your field.",
  },
  {
    question: " Is there any course available if I want to learn Digital Marketing?",
    answer:
      " Yes, along with consulting, we also provide training and courses for students, entrepreneurs, and business owners. These cover SEO, Google Ads, Meta Ads, and Local SEO. With this, you not only grow your business but also gain the knowledge to manage marketing on your own.",
  },
];
   const workingSteps = [
    {
      icon: '/assets/images/icon.png',
      title: 'Local Business Audit & Keyword Research',
      description: 'We check your website and GMB profile, then find keywords your local customers are using',
    },
    {
      icon: '/assets/images/icon.png',
      title: 'Competitor & Listing Analysis',
      description: 'We review local competitors, top-ranking businesses, and listing sites that boost your visibility',
    },
    {
      icon: '/assets/images/icon.png',
      title: 'Local SEO Strategy & Execution',
      description: 'We update your listings, website, keywords, and reviews - all with a focus on local ranking',
    },
    {
      icon: '/assets/images/icon.png',
      title: '3× More Local Leads & Calls',
      description: 'You get higher map rankings, more calls, and better walk-in traffic from nearby customers',
    },
  ];
  return (
    <>
    <GlassNavbar2 />
    
    <ServiceSection
      imageSrc="/assets/images/image.png"
      imageAlt="Local SEO"
      heading="Local SEO Services"
      headingsmall="Add Small Heading Here"
      subheading="Overview"
      description={`Local SEO helps your business appear in Google when nearby customers search for services like yours. In this section, we share how we manage Local SEO projects to boost your local reach. From optimizing your Google Business Profile to using location-based keywords, we build a solid presence in your area. Through regular updates, reporting, and collaboration, we help your business rank higher in local search results and attract more nearby customers who are ready to call, visit, or make a purchase.`}
      seoTitle="Local SEO Optimization"
      seoContent="Local SEO focuses on helping your business appear in search results for your city or local area. We optimize your Google Business Profile, use location-specific keywords, and build citations on trusted local directories. Our team also creates geo-targeted content, boosts visibility on Google Maps, and ensures your business is listed correctly across the web. We monitor reviews and encourage positive feedback to build trust and credibility. Whether you own a shop, salon, clinic, or provide local services, our Local SEO solutions help you attract nearby customers through search and maps. We make sure search engines understand your location, services, and updates—so your business reaches the right people in your area, at the right time."
      seoPoints={[
        "Optimize Google Business Profile (GMB)",
        "Add city/area-specific keywords and content",
      ]}
      cardOneTitle="Helping Local Businesses Grow With SEO"
      cardOneContent="Our Local SEO approach helps small and mid-size businesses reach more people in their area. We believe local visibility is the first step toward consistent business growth."
      cardOneFeatures={[
        "Local Listing Optimization",
        "Location-Based Keywords",
        "GMB Strategy",
        "Map Pack Ranking",
      ]}
      cardTwoIconClass="fas fa-desktop"
      cardTwoTitle="Helping Local Businesses Grow With SEO"
      cardTwoContent="Web designing in a powerful way of just not an only professions, however, in a passion for our Company. We have to a tendency to believe the idea that smart looking of any website"
      finalTitle="Website + GMB Optimization For Local Reach"
      finalContent="To rank locally, your website and Google Business listing must be user-friendly and optimized. We design mobile-ready pages, add schema markup for local relevance, and ensure fast load speeds. Key features like click-to-call buttons, embedded maps, and accurate location info guide local visitors easily. We also ensure your NAP (Name, Address, Phone) is consistent across your website and all online listings. These small but critical elements help search engines trust your business and improve your chances of ranking higher in local search results."
      finalPoints={[
        "Add location schema and map integration",
        "Optimize content and design for local searches",
        "Test mobile UX and site speed for local users",
      ]}
    />
       <WorkingProcess
        title="We Complete Our Work to Follow Some Easy Ways"
        steps={workingSteps}
        background="linear-gradient(to bottom, #382933, #372935, #372831)"
      />
        <DigitalMarketingFAQs faqs={faqsData} />
    <GlassFooter2 />
    </>
  );
};

export default SMMPage;
