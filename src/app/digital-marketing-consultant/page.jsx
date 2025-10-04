"use client";
import GlassFooter from "@/components/Footer";
import GlassNavbar from "@/components/Navbar";
// import Faqs from "@/components/props/Faqs";
import AboutSection from "@/components/About";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/Cta";
import TextImageSection from "@/components/TextImageSection";
import Benefits from "@/components/Benefits";
import HeroSection from "@/components/HeroSection";
import ServiceProcess from "@/components/ServiceProcess";
import WhyChooseUs from "@/components/WhyChooseUs";
import DigitalMarketingFAQs from "@/components/props/Faqs";
import WhatsAppButton from "@/components/WhatsappButton";
export default function Page() {  
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
  return (
    <>
      <title>
        Digital Marketing Consultant | Smart Growth, Budget Friendly
      </title>
      <meta
        name="description"
        content="Grow smarter - our digital marketing consultant brings in experts from every field to deliver complete solutions that maximize your ROI."
      />
      <meta
        name="keywords"
        content="best digital marketing consultant, freelance digital marketing consultant , digital marketing consultant near me , online business consultant , business growth consultant , affordable digital marketing services , SEO expert in Varanasi , digital marketing consultant in Varanasi , local business digital marketing consultant"
      />
      <link rel="canonical" href="https://www.rankinventiv.com/digital-marketing-consultant" />
      <meta
        property="og:title"
        content="Digital Marketing Consultant |  Smart Growth, Budget Friendly"
      />
      <meta
        property="og:description"
        content="Grow smarter - our digital marketing consultant brings in experts from every field to deliver complete solutions that maximize your ROI."
      />
      <meta property="og:url" content="https://rankinventiv.com/digital-marketing-consultant" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://www.rankinventiv.com/assets/images/consulting-page-images/digital-marketing-consultant-og-speaker-1.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="Smart Digital Marketing Consultant - Rankinventiv" />

      {/* <meta name="robots" content="index, follow" /> */}
      <GlassNavbar />
      <WhatsAppButton />
      <HeroSection />
      <TextImageSection />
      <Benefits />
      <WhyChooseUs />
      <AboutSection />
      <ServiceProcess />
      <Testimonials />
        <DigitalMarketingFAQs faqs={faqsData} />
      <CTASection />
      <GlassFooter />
    </>
  );
}
