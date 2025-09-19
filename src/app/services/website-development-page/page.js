import React from "react";
import ServiceSection from "@/components/props/ServiceSection";
import GlassNavbar2 from "@/components/Navbar2";
import GlassFooter2 from "@/components/Footer2";
import WorkingProcess from "@/components/props/WorkingProcess";
import DigitalMarketingFAQs from "@/components/props/Faqs";

const SMMPage = () => {
 const faqsData = [
  {
    question: "Why does my business need a professional website?",
    answer:
      "A professional website builds trust, attracts new customers, and showcases your products or services 24/7—making it one of the best investments for growth.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "The timeline depends on your requirements. A basic website may take 2–3 weeks, while advanced, customized websites can take 6–8 weeks.",
  },
  {
    question: "Will my website be mobile-friendly and SEO-ready?",
    answer:
      "Yes! Every website we design is mobile-responsive, fast-loading, and SEO-optimized to ensure better rankings and a smooth user experience.",
  },
  {
    question: "Can I update my website after it’s built?",
    answer:
      "Absolutely. We create websites with user-friendly dashboards (CMS), so you can easily update content, images, or products without technical skills.",
  },
  {
    question: "Do you also provide website maintenance after launch?",
    answer:
      "Yes, we offer ongoing maintenance and support to keep your website secure, updated, and performing at its best even after it goes live.",
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
