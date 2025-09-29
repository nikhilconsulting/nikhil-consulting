import React from "react";
import ServiceSection from "@/components/props/ServiceSection";
import GlassNavbar2 from "@/components/Navbar2";
import GlassFooter2 from "@/components/Footer2";
import WorkingProcess from "@/components/props/WorkingProcess";
import DigitalMarketingFAQs from "@/components/props/Faqs";
// import PricingSection from "@/components/props/Pricing";
import Banner from "@/components/Banner";
import WhatsAppButton from "@/components/WhatsappButton";
const GooglePage = () => {

// const plans = [
//   {
//     name: "Basic Plan (Starter)",
//     description: "Account setup with 1–2 simple campaigns and monthly report.",
//     features: [
//       "Account & campaign setup",
//       "1–2 simple campaigns (Search/Display)",
//       "Basic keyword research",
//       "Ad copywriting + extensions",
//       "Monthly performance report",
//     ],
//     buttonText: "Upgrade Now",
//   },
//   {
//     name: "Advanced Plan (Growth)",
//     description: "Multiple campaigns with conversion tracking and weekly optimization.",
//     features: [
//       "Multiple campaigns (Search, Display, Remarketing)",
//       "Advanced keyword research + negative keywords",
//       "Conversion tracking setup",
//       "Weekly optimization (CPC, CTR, Quality Score)",
//       "Competitor analysis",
//       "Detailed monthly report",
//     ],
//     buttonText: "Upgrade Now",
//     popular: true,
//   },
//   {
//     name: "Premium Plan (Full Scale)",
//     description: "Full funnel campaigns with smart bidding and 24/7 strategy calls.",
//     features: [
//       "Full-funnel campaigns (Search, Display, Shopping, Video, Remarketing)",
//       "Landing page optimization for conversions",
//       "Smart bidding & automation",
//       "A/B testing (ads & landing pages)",
//       "ROI-focused tracking (calls, forms, sales)",
//       "Weekly strategy calls + 24/7 monitoring",
//     ],
//     buttonText: "Upgrade Now",
//   },
// ];


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
      icon: '/assets/images/service-detail-page-images/google-ads-working-process-steps-icons/business-&-goal-analysis.png',
      title: 'Business & Goal Analysis',
      description: 'We understand your business, target audience, and set clear advertising goals that match your growth objectives.',
    },
    {
      icon: '/assets/images/service-detail-page-images/google-ads-working-process-steps-icons/keyword-&-competitor-research.png',
      title: 'Keyword & Competitor Research',
      description: 'We find the right keywords, study your competitors, and build a solid foundation for high-performing ad campaigns.',
    },
    {
      icon: '/assets/images/service-detail-page-images/google-ads-working-process-steps-icons/campaign-setup-&-optimization.png',
      title: 'Campaign Setup & Optimization',
      description: 'We design, launch, and optimize Google Ads campaigns—from Search & Display to Shopping & YouTube-to maximize reach and ROI.',
    },
    {
      icon: '/assets/images/service-detail-page-images/google-ads-working-process-steps-icons/performance-tracking-&-growth.png',
      title: 'Performance Tracking & Growth',
      description: 'We monitor results, share transparent reports, and scale campaigns to bring more leads, sales, and long-term growth.',
    },
  ];
  return (
    <>
    {/* <title>Google Ads Agency in Varanasi</title>
<meta name="description" content="Expert Google Ads services in Varanasi. Boost website traffic, leads, and sales with targeted PPC campaigns tailored for your business." />
<meta name="keywords" content="Google Ads Services Varanasi, PPC Management Varanasi, Google Ads Expert Varanasi, Pay-Per-Click Services Varanasi, Google Ads Campaign Varanasi, Online Advertising Varanasi, Best Google Ads company in Varanasi, Affordable Google Ads services for small businesses in Varanasi, Hire Google Ads expert near me in Varanasi" />
<link rel="canonical" href="https://www.rankinventiv.com/google-ads" />
<meta property="og:title" content="Google Ads Agency in Varanasi" />
<meta property="og:description" content="Run high-performance Google Ads campaigns with RankInventiv. Get more leads and sales today." />
<meta property="og:url" content="https://www.rankinventiv.com/google-ads" />
<meta property="og:type" content="website" />
<meta property="og:image" content="https://www.rankinventiv.com/assets/images/google-ads-og-image.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="Google Ads Company in Varanasi - RankInventiv" /> */}

    <GlassNavbar2 />
 
    <Banner title="Google Ads" />
       <WhatsAppButton />
    <ServiceSection
      imageSrc="/assets/images/service-detail-page-images/Google ads.png"
      imageAlt="SMM project"
      heading="Introduction of Projects Overview"
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
      cardTwoTitle="Google Ads Role in Buisness"
      cardTwoContent="Get your business in front of people who are ready to buy. We build smart campaigns that turn clicks into customers, delivering quick, powerful results."
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
 <DigitalMarketingFAQs faqs={faqsData} />
    
            {/* <PricingSection
  title="Our Plans"
  plans={plans}
  backgroundImage="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80"
/> */}
       
    <GlassFooter2 />
    </>
  );
};

export default GooglePage;





