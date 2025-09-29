"use client";


import GlassNavbar2 from "@/components/Navbar2";
import GlassFooter2 from "@/components/Footer2";
import Connect from "@/components/Connect";
import ContactUsPage from "@/components/ContactUsPage";
import Banner from "@/components/Banner";
import DigitalMarketingFAQs from "@/components/props/Faqs";

export default function ContactPage() {
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
{/* <title>Contact Us</title>
<meta name="description" content="Get in touch with RankInventiv, your trusted digital marketing agency in Varanasi. Contact us for SEO, social media, PPC, and more. We’re here to help your business grow" />
<link rel="canonical" href="https://www.rankinventiv.com/contact-us" />
<meta property="og:title" content="Contact Us" />
<meta property="og:description" content="Reach out to RankInventiv for expert digital marketing solutions. Let's grow your business online!" />
<meta property="og:url" content="https://www.rankinventiv.com/contact-us" />
<meta property="og:type" content="website" />
<meta property="og:image" content="https://www.rankinventiv.com/assets/images/contact-og-image.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="Contact RankInventiv - Digital Marketing Experts" /> */}

<GlassNavbar2 />
<Banner title="Contact Us" />

  <ContactUsPage />
    <Connect />
    <DigitalMarketingFAQs faqs={faqsData} />
    <GlassFooter2 />
    </>
  );
}
