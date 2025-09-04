import React from "react";
import ServiceSection from "@/components/props/ServiceSection";
import GlassNavbar2 from "@/components/Navbar2";
import GlassFooter2 from "@/components/Footer2";
import WorkingProcess from "@/components/props/WorkingProcess";
import DigitalMarketingFAQs from "@/components/props/Faqs";
const MetaPage = () => {
  const faqsData = [
  {
    question: "Why should I use Google Ads for my business?",
    answer:
      "Google Ads provides instant visibility and helps reach customers actively searching for your products or services.",
  },
  {
    question: "How much budget do I need to run ads?",
    answer:
      "We create strategies that fit any budget. Spend is flexible and depends on your goals.",
     },
  {
    question: "Do you provide reports?",
    answer:
      "Yes, we share detailed performance reports so you can track ROI clearly.",
     },
  {
   question: "Can I run both search and display ads together?",
    answer:
      "Absolutely! Combining ad types gives wider reach and better conversions.",
      },
  {
   question: "How soon will I see results?",
    answer:
      "Google Ads starts driving traffic almost instantly, but consistent results improve with optimization.",
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
      imageSrc="/assets/images/image.png"
      imageAlt="SMM project"
      heading="Introduction of Projects"
      headingsmall="Add Small Heading Here"
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
        <DigitalMarketingFAQs faqs={faqsData} />
    <GlassFooter2 />
    </>
  );
};

export default MetaPage;
