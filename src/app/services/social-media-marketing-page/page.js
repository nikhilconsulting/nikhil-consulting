import React from "react";
import ServiceSection from "@/components/props/ServiceSection";
import GlassNavbar2 from "@/components/Navbar2";
import GlassFooter2 from "@/components/Footer2";

const SMMPage = () => {
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
    <GlassFooter2 />
    </>
  );
};

export default SMMPage;
