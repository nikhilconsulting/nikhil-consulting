import React from "react";
import ServiceSection from "@/components/props/ServiceSection";
import GlassNavbar2 from "@/components/Navbar2";
import GlassFooter2 from "@/components/Footer2";
import WorkingProcess from "@/components/props/WorkingProcess";
import DigitalMarketingFAQs from "@/components/props/Faqs";
import PricingSection from "@/components/props/Pricing";
const GooglePage = () => {

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
    question: "How quickly can I see results with Google Ads?",
    answer:
      "Unlike SEO, Google Ads can generate traffic and leads almost instantly. Once your campaign goes live, ads can start showing within a few hours.",
  },
  {
    question: "How much budget do I need for Google Ads?",
    answer:
      "The budget depends on your industry, competition, and goals. We help you set a budget that balances affordability with maximum ROI, ensuring no wasted spend.",
  },
  {
    question: "Can Google Ads help a small business grow?",
    answer:
      "Yes! Google Ads levels the playing field. Even small businesses can compete with bigger brands by targeting the right keywords and local audiences effectively.",
  },
  {
    question: "Do you provide reports to track ad performance?",
    answer:
      "Absolutely. We share clear, easy-to-understand reports showing clicks, conversions, and ROI so you always know where your money is going.",
  },
  {
    question: "Can I control where my Google Ads appear?",
    answer:
      "Absolutely. We set up precise targeting options—location, keywords, devices, and audience preferences—so your ads reach only the right customers.",
  },
];

   const workingSteps = [
    {
      icon: '/assets/images/icon.png',
      title: 'Business & Goal Analysis',
      description: 'We understand your business, target audience, and set clear advertising goals that match your growth objectives.',
    },
    {
      icon: '/assets/images/icon.png',
      title: 'Keyword & Competitor Research',
      description: 'We find the right keywords, study your competitors, and build a solid foundation for high-performing ad campaigns.',
    },
    {
      icon: '/assets/images/icon.png',
      title: 'Campaign Setup & Optimization',
      description: 'We design, launch, and optimize Google Ads campaigns—from Search & Display to Shopping & YouTube-to maximize reach and ROI.',
    },
    {
      icon: '/assets/images/icon.png',
      title: 'Performance Tracking & Growth',
      description: 'We monitor results, share transparent reports, and scale campaigns to bring more leads, sales, and long-term growth.',
    },
  ];
  return (
    <>
    <GlassNavbar2 />
    <ServiceSection
      imageSrc="/assets/images/service-detail-page-images/Google ads.png"
      imageAlt="SMM project"
      heading="Introduction of Projects"
      subheading="Overview"
      description={`Running a successful business online requires smart advertising strategies that connect you with the right audience. Google Ads is one of the most effective ways to grow visibility, drive traffic, and increase sales. With our Google Ads expertise, we create campaigns that deliver real results. From search and display ads to remarketing and shopping ads, our strategies ensure maximum ROI. By focusing on data-driven decisions and continuous optimization, we help your business stay ahead in a competitive market.`}
      seoTitle="Branding with Google Ads"
      seoContent="We believe in creating ad campaigns that not only generate clicks but also build trust and long-term value for your brand. Your brand deserves to stand out in the crowded digital space. Through tailored Google Ads campaigns, we help you:"
      seoPoints={[
        "Build a strong brand identity with targeted messaging",
        "Reach customers at the right time with the right offer",
        "Drive measurable growth through strategic ad placements",
      ]}
      cardOneTitle="Helping Brands Stand Out On Social Media"
      cardOneContent="Social media is more than just posts - it’s about connecting. We help businesses grow through meaningful content, smart strategy, and consistent branding."
      cardOneFeatures={[
        "Instagram & Facebook Growth",
        "Reels & Story Posting",
        "Ads & Leads Campaigns",
        "Visual Branding",
      ]}
      cardTwoIconClass="fas fa-desktop"
      cardTwoTitle="Elevating Businesses Through Edge"
      cardTwoContent="Web designing in a powerful way of just not an only professions, however, in a passion for our Company. We have to a tendency to believe the idea that smart looking of any website"
      finalTitle="User Experience (UX) Design in Ads"
      finalContent="Every campaign is monitored closely to ensure users get the best experience while your business achieves consistent growth. A good ad is more than just visibility—it’s about experience. We design ad journeys that lead users smoothly from a click to conversion. This includes:"
      finalPoints={[
        "Crafting compelling ad copies and visuals",
        "Designing optimized landing pages for better conversions",
        "Running A/B tests to improve user flow and maximize results",
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

export default GooglePage;





