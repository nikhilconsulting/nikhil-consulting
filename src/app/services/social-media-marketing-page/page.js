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
    <GlassNavbar2 />
    <ServiceSection
      imageSrc="/assets/images/image.png"
      imageAlt="SEO project"
      heading="Social Media Marketing"
      headingsmall="Add Small Heading Here"
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
      cardTwoTitle="Helping Brands Stand Out On Social Media"
      cardTwoContent="Web designing in a powerful way of just not an only professions, however, in a passion for our Company. We have to a tendency to believe the idea that smart looking of any website"
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
    <GlassFooter2 />
    </>
  );
};

export default SMMPage;
