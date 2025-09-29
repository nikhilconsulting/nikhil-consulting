import React from "react";
import ServiceSection from "@/components/props/ServiceSection";
import GlassNavbar2 from "@/components/Navbar2";
import GlassFooter2 from "@/components/Footer2";
import WorkingProcess from "@/components/props/WorkingProcess";
import DigitalMarketingFAQs from "@/components/props/Faqs";
// import PricingSection from "@/components/props/Pricing";
import Banner from "@/components/Banner";
import WhatsAppButton from "@/components/WhatsappButton";

const SMMPage = () => {
// const plans = [
//   {
//     name: "Basic Plan (Starter Website)",
//     description: "Simple 3–5 page responsive website with basic SEO.",
//     features: [
//       "3–5 page website  (Home, About, Services, Contact)",
//       "Mobile responsive design",
//       "Basic on-page SEO setup",
//       "Contact form integration",
//       "Social media links",
//       "1 round of revisions",
//     ],
//     buttonText: "Upgrade Now",
//   },
//   {
//     name: "Advanced Plan (Business Website)",
//     description: "Custom design with branding, blog setup & SEO.",
//     features: [
//       "8–12 page website (with Blog, Portfolio, Gallery, etc.)",
//       "Custom design with branding",
//       "Advanced on-page SEO (meta, schema, sitemap)",
//       "Speed & security optimization",
//       "Integration (Chatbot, WhatsApp, Email forms)",
//       "Blog setup & training for updates",
//       "2–3 rounds of revisions",
//     ],
//     buttonText: "Upgrade Now",
//     popular: true,
//   },
//   {
//     name: "Premium Plan (Custom/Enterprise Website)",
//     description: "Fully custom, advanced SEO, payment & API integrations.",
//     features: [
//       "Fully custom website (Unlimited pages / E-commerce / Booking system)",
//       "Advanced UX/UI design + animations",
//       "Full SEO optimization (on-page + technical)",
//       "Payment gateway / CRM / API integrations",
//       "Multi-language & advanced features (if required)",
//       "Conversion-focused landing pages",
//       "Ongoing maintenance & priority support",
//       "Unlimited revisions (within project scope)",
//     ],
//     buttonText: "Upgrade Now",
//   },
// ];


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
      icon: '/assets/images/service-detail-page-images/website-development-working-process-steps-icons/business-goal-&-design-brief.png',
      title: 'Business Goal & Design Brief',
      description: 'We understand what your business does and what your website should achieve',
    },
    {
      icon: '/assets/images/service-detail-page-images/website-development-working-process-steps-icons/website-structure-&-mock-design.png',
      title: 'Website Structure & Mock Design',
      description: 'We plan the pages, content flow, and create design samples for your approval',
    },
    {
      icon: '/assets/images/service-detail-page-images/website-development-working-process-steps-icons/development-&-responsive-setup.png',
      title: 'Development & Responsive Setup',
      description: 'We build the full website and test it across mobile, tablet, and desktop screens',
    },
    {
      icon: '/assets/images/service-detail-page-images/website-development-working-process-steps-icons/launch-support-&-handover.png',
      title: 'Launch, Support & Handover',
      description: 'We launch your website, provide training if needed, and offer regular updates if you want',
    },
  ];
  return (
    <>
    {/* <title>Best website Making Company in Varanasi</title>
<meta name="description" content="RankInventiv – Trusted website development company in Varanasi. Create custom websites that attract visitors and boost your online presence." />
<meta name="keywords" content="Website Development Varanasi, Website Development Company Varanasi, Website Design and Development Varanasi, Custom Website Developer Varanasi, Web Development Services Varanasi, Professional Website Developer Varanasi, Business Website Development Varanasi, Ecommerce Website Development Varanasi, Website Redesign Services Varanasi" />
<link rel="canonical" href="https://www.rankinventiv.com/website-development" />
<meta property="og:title" content="Best website Making Company in Varanasi" />
<meta property="og:description" content="Custom website design and development services in Varanasi by RankInventiv. Build your brand online today." />
<meta property="og:url" content="https://www.rankinventiv.com/website-development" />
<meta property="og:type" content="website" />
<meta property="og:image" content="https://www.rankinventiv.com/assets/images/web-dev-og-image.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="Website Development Company in Varanasi - RankInventiv" /> */}

    <GlassNavbar2 />
    <Banner title="Website Development" />
    <WhatsAppButton />
    <ServiceSection
      imageSrc="/assets/images/service-detail-page-images/Website.png"
      imageAlt="SEO project"
      heading="Website Development Overview"
      // subheading="Overview"
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
      cardTwoTitle="Website Development Role in Buisness"
      cardTwoContent="We build more than just a website, we create a powerful online tool. Your site will be fast, beautiful, and designed to attract and convert visitors into loyal customers."
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
        
            {/* <PricingSection
  title="Our Plans"
  plans={plans}
  backgroundImage="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80"
/> */}
        
    <GlassFooter2 />
    </>
  );
};

export default SMMPage;
