import React from "react";
import ServiceSection from "@/components/props/ServiceSection";
import GlassNavbar2 from "@/components/Navbar2";
import GlassFooter2 from "@/components/Footer2";
import WorkingProcess from "@/components/props/WorkingProcess";
import DigitalMarketingFAQs from "@/components/props/Faqs";

const SMMPage = () => {
  const faqsData = [
  {
    question: "How do Meta Ads help my business grow?",
    answer:
      "Meta Ads (Facebook & Instagram) reach the right audience by targeting their interests, behaviors, and location. This means more visibility, leads, and sales for your business.",
  },
  {
    question: "What budget should I start with for Meta Ads?",
    answer:
      "You can start with a small daily budget and scale as you see results. We guide you on spending wisely for maximum returns.",
  },
  {
    question: "Are Meta Ads only useful for big brands?",
    answer:
      "Not at all. Small and local businesses benefit greatly from Meta Ads because they allow precise targeting—helping you connect with customers who actually need your services.",
  },
  {
    question: "Will I get reports to track my ad performance?",
    answer:
      "Yes! We provide easy-to-read reports showing reach, engagement, leads, and conversions, so you always know how your ads are performing.",
  },
  {
    question: "Can I run both brand awareness and sales campaigns on Meta Ads?",
    answer:
      "Yes! Meta Ads allow us to run campaigns for awareness, engagement, leads, or direct sales—depending on your business goals.",
  },
];

   const workingSteps = [
    {
      icon: '/assets/images/icon.png',
      title: 'Goal Setting & Ad Planning',
      description: 'We understand your objectives — sales, leads, awareness — and pick the right Meta campaign type.',
    },
    {
      icon: '/assets/images/icon.png',
      title: 'Audience & Budget Targeting',
      description: 'We identify your ideal audience and manage your ad spend for maximum efficiency.',
    },
    {
      icon: '/assets/images/icon.png',
      title: ' Creative Design & Ad Launch',
      description: 'We design visuals, write ad copy, and launch ads on feeds, stories, and reels.',
    },
    {
      icon: '/assets/images/icon.png',
      title: 'Track Results & Optimize ROI',
      description: 'We monitor performance daily and refine campaigns for better conversions and growth.',
    },
  ];
  return (
    <>
    <GlassNavbar2 />
    <ServiceSection
      imageSrc="/assets/images/image.png"
      imageAlt="Meta project"
      heading="Meta Ads"
      headingsmall="Add Small Heading Here"
      subheading="Overview"
      description={`We help businesses grow with powerful ad campaigns on Facebook and Instagram. In this section, we explain how our Meta Ads services connect your brand with the right audience and deliver measurable results. Whether your goal is to generate leads, boost sales, or increase engagement, we create campaigns that focus on real conversions. From strategy and creative planning to daily management and performance tracking, we handle everything—so your budget drives maximum growth.`}
      seoTitle="Meta Ad Campaigns"
      seoContent="Advertising on Facebook and Instagram is one of the fastest ways to grow your business online. We create customized campaigns based on your goals — whether it’s sales, sign-ups, app downloads, or event promotion. Our team researches your target audience and places ads where they spend most of their time. From engaging ad copy to scroll-stopping images and videos, we design every detail to attract attention and inspire action. We use advanced targeting like demographics, interests, and behaviors to ensure your ads reach the right people. With A/B testing, smart budget allocation, and daily performance monitoring, we keep improving results. Every campaign is designed to move customers from awareness to action, turning clicks into leads and leads into loyal customers."
      seoPoints={[
        "Facebook & Instagram Feed + Story Ads",
        "Meta Lead Form Ads & Engagement Campaigns",
      ]}
      cardOneTitle="Smart Ads That Deliver Results"
      cardOneContent="We don’t just run Meta Ads — we build campaigns that convert. From engagement to leads and sales, every ad is backed by strategy, creativity, and smart execution."
      cardOneFeatures={[
        "Targeted Ad Strategy",
        "Lead Form & Messenger Setup",
        "Audience & Budget Planning",
        "Real-Time Campaign Optimization",
      ]}
      cardTwoIconClass="fas fa-desktop"
      cardTwoTitle="Smart Ads That Deliver Results"
      cardTwoContent="Web designing in a powerful way of just not an only professions, however, in a passion for our Company. We have to a tendency to believe the idea that smart looking of any website"
      finalTitle=" High-Performance Ads With Creative Design"
      finalContent="On Facebook and Instagram, design is everything. We create eye-catching visuals and videos that reflect your brand’s style and grab instant attention. From story ads to reels and carousel campaigns, our creatives are designed to stop the scroll. The ad copy is simple, powerful, and built to drive clicks and conversions. We also design lead forms and landing pages that align perfectly with your ads. This consistency ensures a smooth user experience and maximizes results from every campaign."
      finalPoints={[
        "Design static, story & reel ads",
        "Write high-converting ad copies",
        "Setup lead forms or landing pages",
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
