import React from "react";
import ServiceSection from "@/components/props/ServiceSection";
import GlassNavbar2 from "@/components/Navbar2";
import GlassFooter2 from "@/components/Footer2";
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
      title: 'Business Goal & Design Brief',
      description: 'We understand what your business does and what your website should achieve',
    },
    {
      icon: '/assets/images/icon.png',
      title: 'Website Structure & Mock Design',
      description: 'We plan the pages, content flow, and create design samples for your approval',
    },
    {
      icon: '/assets/images/icon.png',
      title: 'Development & Responsive Setup',
      description: 'We build the full website and test it across mobile, tablet, and desktop screens',
    },
    {
      icon: '/assets/images/icon.png',
      title: 'Launch, Support & Handover',
      description: 'We launch your website, provide training if needed, and offer regular updates if you want',
    },
  ];
  return (
    <>
    <GlassNavbar2 />
    <ServiceSection
      imageSrc="/assets/images/image.png"
      imageAlt="SEO project"
      heading="Website Design & Development "
      headingsmall="Add Small Heading Here"
      subheading="Overview"
      description={`Your website is the digital face of your business. In this section, we explain how our web development and design services help build a strong online presence. From layout to loading speed, we focus on every detail to ensure your website looks great, works smoothly, and loads quickly on all devices. A professional, mobile-friendly site not only builds trust but also improves user experience—turning visitors into loyal customers and helping your brand grow in a competitive digital environment.`}
      seoTitle="Custom Website Design & Development"
      seoContent="We build websites that are fast, user-friendly, and look great on both mobile and desktop. Our team creates custom designs aligned with your business goals—whether you need a simple website, a service portfolio, an eCommerce store, or a high-converting landing page. We focus on user experience, mobile responsiveness, and SEO-friendly structure. From homepages to contact forms, every section is crafted to guide your visitors. We work with platforms like WordPress, HTML5, and Shopify to deliver secure, scalable, and modern websites. You get full control, beautiful design, and performance that lasts. With the right layout, speed, and features, we help you build trust, engage customers, and turn your website into a powerful business tool."
      seoPoints={[
        "Mobile-friendly, responsive design",
        "Fast loading, SEO-ready websites",
      ]}
      cardOneTitle="Grow Your Brand With A Professional Website"
      cardOneContent="Social media is more than just posts - it’s about connecting. We help businesses grow through meaningful content, smart strategy, and consistent branding."
      cardOneFeatures={[
        "Custom layout for your business",
        "Contact forms, maps, and WhatsApp chat",
        "Speed, security & mobile support",
        "E-Commerce & booking-ready sites",
      ]}
      cardTwoIconClass="fas fa-desktop"
      cardTwoTitle="Grow Your Brand With A Professional Website"
      cardTwoContent="Web designing in a powerful way of just not an only professions, however, in a passion for our Company. We have to a tendency to believe the idea that smart looking of any website"
      finalTitle="User-Friendly Websites That Convert"
      finalContent="We focus on creating a website that is simple to use, fast to load, and easy to update. Your customers should enjoy browsing and find what they need within seconds. From layout to navigation, every part is designed with the user in mind. We also take care of the technical essentials — hosting, SSL security, domain setup, and regular backups — so your site runs smoothly. Whether you're launching a new business or looking to redesign an old site, we provide complete support and handle everything from start to finish."
      finalPoints={[
        "Clean layout, fast loading speed",
        "Easy navigation & update options",
        "Secure hosting, SSL & backups included",
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
