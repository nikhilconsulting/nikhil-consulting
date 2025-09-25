import React from "react";
import ServiceSection from "@/components/props/ServiceSection";
import GlassNavbar2 from "@/components/Navbar2";
import GlassFooter2 from "@/components/Footer2";
import WorkingProcess from "@/components/props/WorkingProcess";
import DigitalMarketingFAQs from "@/components/props/Faqs";
import PricingSection from "@/components/props/Pricing";

const SMMPage = () => {
const plans = [
  {
    name: "Basic Plan (Starter Presence)",
    description: "Profile setup & optimization with basic engagement.",
    features: [
      "Profile setup & optimization",
      "8–10 posts + 2–3 stories weekly",
      "Basic captions & hashtags",
      "Monthly content calendar",
      "Simple engagement + monthly report",
    ],
    buttonText: "Upgrade Now",
  },
  {
    name: "Advanced Plan (Growth & Engagement)",
    description: "Branded profiles & templates for higher engagement.",
    features: [
      "Branded profiles & templates",
      "15–20 posts + 8–10 stories monthly",
      "Mix of static, carousel & reels",
      "Paid ads setup (small budget)",
      "Community management (DMs, comments)",
      "Influencer outreach (micro)",
      "Monthly content calendar & growth report",
    ],
    buttonText: "Upgrade Now",
    popular: true,
  },
  {
    name: "Premium Plan (Full Branding & Leads)",
    description: "Full branding kit and strategy with 24/7 community management.",
    features: [
      "Full branding kit + strategy",
      "Daily posts (images, reels, videos, polls, stories)",
      "Professional graphics & video editing",
      "Paid ads campaigns (awareness to leads)",
      "Influencer & collaboration marketing",
      "24/7 community management",
      "Multi-platform (FB, Insta, LinkedIn, YouTube)",
      "Weekly calls + detailed monthly report",
    ],
    buttonText: "Upgrade Now",
  },
];


 const faqsData = [
  {
    question: "Why is social media marketing important for my business?",
    answer:
      "Social media marketing builds brand awareness, engages your audience, and drives sales by connecting your business with the right people on platforms they use daily.",
  },
  {
    question: "Which platforms do you manage for social media marketing?",
    answer:
      "We create and manage strategies for Facebook, Instagram, LinkedIn, and more—choosing platforms that best fit your industry and target audience.",
  },
  {
    question: "How soon can I expect results from social media campaigns?",
    answer:
      "Results vary by industry, but you’ll often see engagement and follower growth within the first month. Sales and leads grow as campaigns optimize over time.",
  },
  {
    question: "Will I get content ideas and reports regularly?",
    answer:
      "Yes! We handle content planning, post designs, captions, and ad campaigns. Plus, we share monthly reports so you can track growth and ROI clearly.",
  },
  {
    question: "Can you create content if I don’t have any?",
    answer:
      "Of course! We design creatives, write captions, and plan strategies so you don’t have to worry about content creation—we handle it for you.",
  },
];

   const workingSteps = [
    {
      icon: '/assets/images/icon.png',
      title: 'Social Media Audit & Goal Setup',
      description: 'We review your profile, understand your brand, and set clear goals for growth and engagement',
    },
    {
      icon: '/assets/images/icon.png',
      title: 'Competitor & Trend Analysis',
      description: 'We explore what works in your industry, study top trends, and plan content that stands out',
    },
    {
      icon: '/assets/images/icon.png',
      title: 'Content Strategy & Campaigns',
      description: 'We create and post content, run ad campaigns, and handle your daily social activity',
    },
    {
      icon: '/assets/images/icon.png',
      title: 'Track Growth & Get More Leads',
      description: 'You’ll see more likes, comments, followers - and most importantly - real leads and conversions',
    },
  ];
  return (
    <>
    {/* <title>Social Media Marketing Management Company</title>
<meta name="description" content="We provide expert Social Media Marketing (SMM) services in Varanasi. Grow your brand, increase engagement, and boost leads with strategic social campaigns." />
<meta name="keywords" content="Social Media Marketing Varanasi, SMM Services Varanasi, Social Media Expert Varanasi, Facebook Marketing Varanasi, Instagram Marketing Varanasi, LinkedIn Marketing Varanasi, Best SMM agency in Varanasi, Affordable social media marketing for small businesses, Hire social media marketing expert near me in Varanasi" />
<link rel="canonical" href="https://www.rankinventiv.com/social-media-marketing" />
<meta property="og:title" content="Social Media Marketing Management Company" />
<meta property="og:description" content="Grow your social presence with expert SMM services in Varanasi from RankInventiv. Facebook, Instagram, LinkedIn & more." />
<meta property="og:url" content="https://www.rankinventiv.com/social-media-marketing" />
<meta property="og:type" content="website" />
<meta property="og:image" content="https://www.rankinventiv.com/assets/images/smm-og-image.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="SMM Company in Varanasi - RankInventiv" /> */}

    <GlassNavbar2 />
    <ServiceSection
      imageSrc="/assets/images/service-detail-page-images/Social Media.png"
      imageAlt="SEO project"
      heading="Social Media Marketing"
      
      subheading="Overview"
      description={`Social media marketing helps your brand connect with the right audience. In this section, we show how we create strong strategies that drive engagement, followers, and leads. From creative content planning to ad campaign management, we make sure your business gets noticed. With regular updates, original ideas, and consistent performance tracking, we grow your online presence across platforms like Facebook, Instagram, and others—helping you build trust, stay relevant, and turn social media into a powerful tool for business growth.`}
      seoTitle="Creative Social Media Growth"
      seoContent="We manage your social media pages to attract, engage, and convert followers into customers. Our services include content creation, posting schedules, reels, videos, and ad campaign setup. We use trending hashtags, creative captions, and viral formats to make your brand stand out. Whether you run a shop, offer services, or run a startup, we keep your pages active and visible. Our team builds your online presence with daily posts, engaging visuals, and consistent branding. We also manage paid ads to drive traffic, generate inquiries, and boost sales. Using platform insights, we monitor performance, track growth, and adjust strategies weekly to improve results—ensuring your business stays ahead and gets noticed on Facebook, Instagram, and other platforms."
      seoPoints={[
        "Post daily content (images, videos, reels)",
        "Run Facebook & Instagram Ads to reach target audience",
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
      cardTwoTitle="Social Media Marketing Role in Buisness"
      cardTwoContent="We help you tell your story and build a loyal following. Our approach is about creating real connections, not just posting content."
      finalTitle="User-Friendly SEO Implementation"
      finalContent="A good social media profile is both attractive and strategic. We design eye-catching posts, write engaging captions, and use relevant hashtags to boost your reach. Every piece of content aligns with your brand voice and goals. We also optimize your bio, story highlights, and call-to-action buttons to drive more engagement. Whether it’s festive campaigns, product promotions, or daily updates, we make sure your brand stays active and appealing. A strong, well-managed profile helps build trust, attract followers, and turn them into loyal customers over time."
      finalPoints={[
        "Create content calendar with trending ideas",
        "Design & post reels, graphics, and carousels",
        "Track engagement, insights & improve weekly",
      ]}
    />
       <WorkingProcess
        title="We Complete Our Work to Follow Some Easy Ways"
        steps={workingSteps}
        background="linear-gradient(to bottom, #382933, #372935, #372831)"
      />
      <DigitalMarketingFAQs faqs={faqsData} />
        {/* Pricing Section */}
            <PricingSection
  title="Our Plans"
  plans={plans}
  backgroundImage="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80"
/>

        
    <GlassFooter2 />
    </>
  );
};

export default SMMPage;
