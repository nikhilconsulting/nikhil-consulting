import React from "react";
import ServiceSection from "@/components/props/ServiceSection";
import GlassNavbar2 from "@/components/Navbar2";
import GlassFooter2 from "@/components/Footer2";
import WorkingProcess from "@/components/props/WorkingProcess";
import DigitalMarketingFAQs from "@/components/props/Faqs";
import PricingSection from "@/components/props/Pricing";

const SMMPage = () => {
    //  Define your pricing data separately
const monthlyPricingData = [
  {
    name: "Base",
    price: 80,
    features: ["Feature A", "Feature B", "Feature C"],
    buttonText: "Sign Up",
  },
  {
    name: "Pro",
    price: 120,
    features: ["Feature D", "Feature E", "Feature F"],
    popular: true,
    buttonText: "Upgrade Now",
  },
  {
    name: "Enterprise",
    price: 260,
    features: ["Feature G", "Feature H", "Feature I"],
    buttonText: "Contact Sales",
  },
];

const yearlyPricingData = [
  {
    name: "Base",
    price: 800,
    features: ["All monthly features", "Yearly discount"],
    buttonText: "Sign Up Yearly",
  },
  {
    name: "Pro",
    price: 1200,
    features: ["All Pro features", "Dedicated support", "Advanced Analytics"],
    popular: true,
    buttonText: "Upgrade Yearly",
  },
  {
    name: "Enterprise",
    price: 2600,
    features: ["All Enterprise features", "Custom API integration"],
    buttonText: "Contact Sales",
  },
];
const faqsData = [
  {
    question: "What is Local SEO and why is it important?",
    answer:
      "Local SEO helps your business appear in Google Maps and “near me” searches, bringing more calls, visits, and customers from your local area.",
  },
  {
    question: "How long does it take to see results with Local SEO?",
    answer:
      "You may notice improvements within 4–6 weeks, but stronger rankings, reviews, and consistent customer growth usually take 3–6 months.",
  },
  {
    question: "Can Local SEO help small businesses compete with big brands?",
    answer:
      "Yes! Local SEO gives small businesses an edge by targeting nearby customers who are ready to buy—helping you compete without a huge budget.",
  },
  {
    question: "What’s included in your Local SEO services?",
    answer:
      "We optimize your Google Business Profile, improve local citations, manage reviews, and target local keywords—everything needed to grow visibility in your city.",
  },
  {
    question: "Do online reviews affect Local SEO rankings?",
    answer:
      "Yes. Positive reviews improve your Google Business Profile visibility, attract more customers, and play a big role in boosting local search rankings.",
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
      imageSrc="/assets/images/service-detail-page-images/Local.png"
      imageAlt="Local SEO"
      heading="Local SEO Services"
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
        {/* Pricing Section */}
            <PricingSection
              title="Our Main Pricing"
              monthlyPlans={monthlyPricingData}
              yearlyPlans={yearlyPricingData}
              backgroundImage="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80"
            />
        <DigitalMarketingFAQs faqs={faqsData} />
    <GlassFooter2 />
    </>
  );
};

export default SMMPage;
