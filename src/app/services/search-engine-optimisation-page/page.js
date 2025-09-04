import React from "react";
import ServiceSection from "@/components/props/ServiceSection";
import GlassNavbar2 from "@/components/pages/Navbar2";
import GlassFooter2 from "@/components/pages/Footer2";
import WorkingProcess from "@/components/props/WorkingProcess";
import DigitalMarketingFAQs from "@/components/props/Faqs";
const SEOPage = () => {
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
      title: 'Website Audit & Keyword Research',
      description: 'We analyze your website and find the best keywords that your target audience is searching for',
    },
    {
      icon: '/assets/images/icon.png',
      title: 'Competitor SEO Analysis',
      description: 'We study your competitor s strategies to find content gaps, backlink opportunities, and ranking factors',
    },
    {
      icon: '/assets/images/icon.png',
      title: 'SEO Strategy & Implementation',
      description: 'Our team applies smart SEO practices, optimizes content, and builds links to improve your rankings',
    },
    {
      icon: '/assets/images/icon.png',
      title: 'Results & Growth Tracking',
      description: 'We deliver visible improvements - more traffic, better rankings, and real business leads',
    },
  ];
  return (
    <>
    <GlassNavbar2 />
    <ServiceSection
      imageSrc="/assets/images/image.png"
      imageAlt="SEO project"
      heading="Planning & Growth"
      headingsmall="SEO Strategy,"
      subheading="Overview"
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
      cardTwoTitle="Groww Businesses Through SEO"
      cardTwoContent="Web designing in a powerful way of just not an only professions, however, in a passion for our Company. We have to a tendency to believe the idea that smart looking of any website"
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
        background="linear-gradient(to bottom, #382933, #372935, #372831)"
      />
      <DigitalMarketingFAQs faqs={faqsData} />
    <GlassFooter2 />
    </>

  );
};

export default SEOPage;
