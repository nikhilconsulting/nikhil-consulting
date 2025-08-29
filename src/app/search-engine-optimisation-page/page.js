import React from "react";
import ServiceSection from "@/components/ServiceSection";
import GlassNavbar2 from "@/components/Navbar2";
import GlassFooter2 from "@/components/Footer2";
const SEOPage = () => {
  return (
    <>
    <GlassNavbar2 />
    <ServiceSection
      imageSrc="/assets/images/serviceimage.jpg"
      imageAlt="SEO project"
      heading="SEO Strategy, Planning & Growth"
      subheading="Overview"
      description={`Running a successful SEO campaign requires clear steps and proper teamwork. This section gives an overview of how we plan and execute SEO strategies.
Our goal is to increase visibility, improve search rankings, and drive organic traffic. By working closely with clients and reviewing performance, we ensure SEO efforts meet your business goals. Running a successful SEO campaign requires clear steps and proper teamwork. This section gives an overview of how we plan and execute SEO strategies.
Our goal is to increase visibility, improve search rankings, and drive organic traffic. By working closely with clients and reviewing performance, we ensure SEO efforts meet your business goals.Running a successful SEO campaign requires clear steps and proper teamwork.`}
      seoTitle="Search Engine Optimization (SEO)"
      seoContent="We help businesses improve their visibility on search engines like Google. Our SEO services include keyword research, on-page optimization, content creation, and link building. We also focus on improving technical aspects like site speed and mobile usability. With a strong SEO foundation, your website can reach the right audience and generate leads consistently. From meta tags to structured data, we handle every SEO element carefully. We analyze your site’s health and fix errors affecting your rankings. Whether you need local SEO or national targeting, we customize strategies that suit your needs."
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
      finalContent="A smooth website experience supports better SEO. We ensure that your site is mobile-friendly, easy to navigate, and loads quickly. Clear layouts and structured content help both users and search engines. Our SEO team collaborates with developers to make the site technically sound and SEO-ready. Consistent testing and updates help maintain performance over time."
      finalPoints={[
        "Plan layout and flow with SEO in mind",
        "Design clean pages and site structure",
        "Optimize for speed, mobile, and readability",
      ]}
    />
    <GlassFooter2 />
    </>

  );
};

export default SEOPage;
