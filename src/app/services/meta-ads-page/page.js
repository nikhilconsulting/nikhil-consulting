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
