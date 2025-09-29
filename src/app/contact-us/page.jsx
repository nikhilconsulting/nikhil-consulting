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
    question: "Is my idea, data, and business plan kept absolutely safe with your team?",
    answer:
      "Our Assurance: Yes, absolutely. We treat your information with the same care and respect we'd use for our own. All discussions, project details, and proprietary data are kept strictly confidential. If you'd like, we are happy to sign a Non-Disclosure Agreement (NDA) right at the start before we dive into the details.",
  },
  {
    question: "How long will it take for someone to get back to me after I fill out this form?",
    answer:
      "Setting Expectations: We know you're busy, so we aim to connect with you quickly. You can expect a personal response from a member of our team within one business day (24 hours). If your inquiry is urgent, please feel free to call us directly.",
  },
  {
    question: "I'm worried about my budget! How do you handle pricing?",
    answer:
      "Transparency on Cost: We don't believe in one-size-fits-all packages. After you reach out, we'll schedule a quick, no-pressure discovery chat to fully understand your goals and needs. We then create a custom proposal with clear pricing based on the actual work involved. We'll be transparent and work within your comfort zone.",
  },
  {
    question: "What actually happens after I submit this form? What's the next step?",
    answer:
      "Our Simple Process: Once you hit submit, your message lands directly with our specialist team. We'll review your details, and one of us will reach out to schedule a brief, personalized discovery call. This is just a friendly chat to discuss your vision and see if we're the right fit to help you achieve it.",
  },
  {
    question: "Can you handle both the marketing and the development side of my project?",
    answer:
      "Full-Service Partnership: Yes! That’s exactly what we do best. We're built to be a seamless partner, meaning our digital marketing strategists and our developers work together from day one. This ensures your new website or app is beautiful, functional, and built to attract customers from the moment it launches.",
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
