import React from "react";
import ServiceSection from "@/components/props/ServiceSection";
import GlassNavbar2 from "@/components/Navbar2";
import GlassFooter2 from "@/components/Footer2";
import WorkingProcess from "@/components/props/WorkingProcess";
import DigitalMarketingFAQs from "@/components/props/Faqs";
// import PricingSection from "@/components/props/Pricing";
import Banner from "@/components/Banner";
import WhatsAppButton from "@/components/WhatsappButton";
const SEOPage = () => {
// const plans = [
//   {
//     name: "Basic SEO Plan (Foundation SEO)",
//     description: "We plan the pages, content flow, and create design samples for your approval.",
//     features: [
//       "Website Audit (Basic Technical Check)",
//       "Keyword Research (5–10 keywords)",
//       "On-Page SEO: Title, Meta Description, URL Optimization",
//       "Header Tags (H1, H2)",
//       "Image Alt Tags",
//       "Internal Linking",
//       "Sitemap & Robots.txt Setup",
//       "Google Analytics & Search Console Setup",
//       "Basic Local SEO: Google Business Profile Optimization",
//       "NAP (Name/Address/Phone) Consistency",
//       "Monthly Report (Basic Traffic & Ranking Overview)",
//     ],
//     buttonText: "Upgrade Now",
//   },
//   {
//     name: "Advanced SEO Plan (Growth SEO)",
//     description: "For businesses that want traffic growth & local visibility.",
//     features: [
//       "Detailed Website Audit (Technical + Content)",
//       "Keyword Research (20–30 keywords, mix of short & long-tail)",
//       "Advanced On-Page SEO: Schema Markup (Local/Business/FAQ)",
//       "Page Speed Optimization",
//       "Content Optimization (Existing Pages)",
//       "Off-Page SEO: 10–20 Backlinks per month (Guest Posts, Directories, Local Citations)",
//       "Social Bookmarking",
//       "Local SEO: Google Business Profile Weekly Updates (Posts, Photos, Offers)",
//       "Review Generation Strategy",
//       "Blog Writing (2 Blogs / month) with SEO Optimization",
//       "Competitor Analysis & Keyword Gap Report",
//       "Monthly Report (Traffic, Rankings, Conversions)",
//     ],
//     buttonText: "Upgrade Now",
//     popular: true,
//   },
//   {
//     name: "Premium SEO Plan (Full SEO Domination)",
//     description: "For businesses aiming for top rankings, branding & lead generation.",
//     features: [
//       "Complete Website Audit (Technical, UX, CRO, Mobile-first)",
//       "Keyword Research (50+ keywords across multiple clusters)",
//       "Full On-Page SEO: Advanced Schema (FAQ, Product, Review, HowTo, Local)",
//       "Internal Linking Strategy for Topical Authority",
//       "Content Silos (Pillar + Cluster Content)",
//       "Landing Page Optimization (for conversions)",
//       "Off-Page SEO: High-Quality Backlinks (Guest Posting, Niche Edits, PR Submissions)",
//       "Authority Link Building (DA 40+ sites)",
//       "Local Citations (International + Regional)",
//       "Content Marketing: 4–8 Blogs / month with SEO optimization",
//       "PR Articles / Guest Contributions",
//       "Video SEO (YouTube Optimization if applicable)",
//       "Local SEO: Advanced Google Business Management (Daily/Weekly Updates, Offers, Events, Q&A)",
//       "Voice Search Optimization",
//       "Technical SEO: Site Speed, Core Web Vitals, Mobile Optimization",
//       "Crawl Budget Optimization & Indexing Control",
//       "Analytics & Tracking: Custom Dashboard (GA4, GSC, Keyword Ranking, Conversions)",
//       "Heatmaps & User Behavior Analysis (Hotjar/Clarity)",
//       "Detailed Monthly Report + Strategy Call",
//     ],
//     buttonText: "Upgrade Now",
//   },
// ];


  const faqsData = [
  {
    question: "How long does SEO take to show results?",
    answer:
      "SEO is a long-term strategy. You can expect small improvements within 2–3 months, but significant traffic and ranking growth usually happens in 6–9 months.",
  },
  {
    question: "What makes your SEO services different from others?",
    answer:
      "We focus on personalized strategies. Instead of applying the same formula to every business, we study your industry, audience, and goals to deliver meaningful, lasting results.",
  },
  {
    question: "Can SEO really help a small or local business like mine?",
    answer:
      "Yes! Local SEO helps small businesses appear in Google Maps and local searches. This brings more calls, visits, and inquiries from customers nearby who are ready to buy. " },
  {
    question: "Do I need to keep investing in SEO once I start ranking?",
    answer:
      "Yes, SEO is ongoing. Search engines update regularly, and competitors also optimize. Continuous SEO keeps your business visible, growing, and ahead of the competition.",
  },
  {
    question: " Do you use only safe and ethical SEO practices?",
    answer:
      "Yes, we follow white-hat SEO strategies that align with Google’s guidelines, ensuring long-term rankings without the risk of penalties.",
  },
];
    const workingSteps = [
    {
      icon: '/assets/images/service-detail-page-images/search-engine-optimisation-working-process-steps-icons/website-audit-&-keyword-research.png',
      title: 'Website Audit & Keyword Research',
      description: 'We analyze your website and find the best keywords that your target audience is searching for',
    },
    {
      icon: '/assets/images/service-detail-page-images/search-engine-optimisation-working-process-steps-icons/competitor-seo-analysis.png',
      title: 'Competitor SEO Analysis',
      description: 'We study your competitor s strategies to find content gaps, backlink opportunities, and ranking factors',
    },
    {
      icon: '/assets/images/service-detail-page-images/search-engine-optimisation-working-process-steps-icons/seo-strategy-&-implementation.png',
      title: 'SEO Strategy & Implementation',
      description: 'Our team applies smart SEO practices, optimizes content, and builds links to improve your rankings',
    },
    {
      icon: '/assets/images/service-detail-page-images/search-engine-optimisation-working-process-steps-icons/results-&-growth-tracking.png',
      title: 'Results & Growth Tracking',
      description: 'We deliver visible improvements - more traffic, better rankings, and real business leads',
    },
  ];
  return (
    <>
    <title>Best SEO Company | Rankinventiv</title>
<meta name="description" content="Looking for the best SEO company? RankInventiv provides top-notch SEO and digital marketing services to grow your business online." />
<meta name="keywords" content="SEO Services Varanasi, SEO Company Varanasi, Best SEO Consultant Varanasi, Local SEO Varanasi, SEO Expert Varanasi, SEO Agency Varanasi, Affordable SEO Varanasi, Best SEO company for small business in Varanasi, Local SEO expert near me in Varanasi, Affordable SEO services in Varanasi, Hire SEO consultant in Varanasi, Improve Google rankings Varanasi business" />
<link rel="canonical" href="https://www.rankinventiv.com/services/search-engine-optimisation-page" />
<meta property="og:title" content="Best SEO Company | Rankinventiv" />
<meta property="og:description" content="Looking for the best SEO company? RankInventiv provides top-notch SEO and digital marketing services to grow your business online." />
<meta property="og:url" content="https://www.rankinventiv.com/services/search-engine-optimisation-page" />
<meta property="og:type" content="website" />
<meta property="og:image" content="https://www.rankinventiv.com/assets/images/service-detail-page-images/seo-og-image.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="Best SEO Company in Varanasi - RankInventiv" />

    <GlassNavbar2 />
   
    <Banner title="Search Engine Optimisation (SEO)" />
     <WhatsAppButton />
    <ServiceSection
      imageSrc="/assets/images/service-detail-page-images/seo-og-image.png"
      imageAlt="SEO project"
      heading="Planning & Growth Overview"
      
      // subheading="Overview"
      description={`Running a successful SEO campaign takes a clear process and strong teamwork. In this section, we explain our step-by-step approach to planning and executing effective strategies. Our main goal is to boost your website’s visibility, improve search rankings, and attract quality traffic that converts. We start by understanding your goals, audience, and competition. With ongoing collaboration and regular performance checks, we adjust our SEO tactics to match your changing needs and deliver consistent, measurable results that support your growth.`}
      seoTitle="Search Engine Optimization (SEO)"
      seoContent=" We help businesses improve their visibility on search engines like Google. Our SEO services cover keyword research, on-page optimization, content creation, and link building. We also focus on technical improvements such as site speed, mobile usability, and secure browsing. With a strong SEO foundation, your website can reach the right audience and generate consistent leads. From meta tags to structured data, we manage every SEO element with care. We regularly analyze your website’s health and fix issues that may affect rankings. Whether you’re targeting a local audience or aiming for national reach, we customize our SEO strategies to match your goals and business needs—ensuring long-term growth and better search performance."
      seoPoints={[
        "Fix on-page SEO issues like titles, tags, and structure",
        "Build links and authority from trusted sources",
      ]}
      cardOneTitle="Groww Businesses Through SEO"
      cardOneContent="SEO is not just a service - it’s a growth strategy. Our team believes in smart, steady work that brings your business long-term visibility on Google."
      cardOneFeatures={[
        "Local SEO",
        "Technical SEO",
        "Keyword Planning",
        "Link Building",
      ]}
      cardTwoIconClass="fas fa-desktop"
      cardTwoTitle="SEO Role in Buisness"
      cardTwoContent="We make sure your business is easy to find online. We help you connect with your customers by creating content that answers their questions and solves their problems."
      finalTitle="User-Friendly SEO Implementation"
      finalContent="A smooth website experience supports better SEO. We ensure that your site is mobile-friendly, easy to navigate, and loads quickly. Clear layouts and structured content help both users and search engines understand your pages better. Our SEO team works closely with web developers to make the site technically sound and fully SEO-ready. From optimizing code to improving internal linking, we take care of all the essentials. Consistent testing, monitoring, and timely updates help maintain website performance, ensuring long-term visibility and a better user experience for your visitors."
      finalPoints={[
        "Plan layout and flow with SEO in mind",
        "Design clean pages and site structure",
        "Optimize for speed, mobile, and readability",
      ]}
    />

     <WorkingProcess
        title="We Complete Our Work to Follow Some Easy Ways"
        steps={workingSteps}
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

export default SEOPage;
