"use client";
import Banner from '@/components/Banner';
import GlassFooter2 from '@/components/Footer2';
import GlassNavbar2 from '@/components/Navbar2';
import React from 'react';

const page = () => {
  return (
    <>
    {/* <title>Terms & Conditions | Rankinventiv</title>
<meta name="description" content="View the Terms & Conditions for using rankinventiv services, including user responsibilities and legal guidelines." />
<meta name="keywords" content="Google Ads Services Varanasi, PPC Management Varanasi, Google Ads Expert Varanasi, Pay-Per-Click Services Varanasi, Google Ads Campaign Varanasi, Online Advertising Varanasi, Best Google Ads company in Varanasi, Affordable Google Ads services for small businesses in Varanasi, Hire Google Ads expert near me in Varanasi" />
<link rel="canonical" href="https://www.rankinventiv.com/google-ads" />
<meta property="og:title" content="Terms & Conditions | Rankinventiv" />
<meta property="og:description" content="View the Terms & Conditions for using rankinventiv services, including user responsibilities and legal guidelines." />
<meta property="og:url" content="https://www.rankinventiv.com/google-ads" />
<meta property="og:type" content="website" />
<meta property="og:image" content="https://www.rankinventiv.com/assets/images/google-ads-og-image.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="Google Ads Company in Varanasi - RankInventiv" /> */}

     <div
      className="min-h-screen w-full text-gray-200 bg-gradient-to-r from-[#5F69A8] via-[#000000] to-[#372935] "
    >
      <GlassNavbar2 />
      <Banner title="Terms Of Services" />

      <main className="px-6 sm:px-10 py-30 max-w-4xl mx-auto text-white space-y-6 text-justify">
        <div className="text-2xl font-semibold mb-2 text-center">
          Terms & Conditions – RankInventiv
        </div>

        <p className="text-sm text-gray-400 text-start">
          Effective Date: 16-08-25
        </p>

        <p>
          By using our website or services, you agree to these terms.
        </p>

       <ol className="list-decimal list-inside space-y-4">
  <li>
    <strong>Services –</strong>{' '}
    We provide digital marketing, web/app development, branding, and related solutions.
  </li>

  <li>
    <strong>Client Responsibility –</strong>{' '}
    Provide accurate details, required materials, and timely payments.
  </li>

  <li>
    <strong>Payments –</strong>{' '}
    Work starts after payment; no refunds once the project begins (unless we cannot deliver).
  </li>

  <li>
    <strong>Ownership –</strong>{' '}
    Final deliverables belong to the client after full payment; we may display work in our portfolio.
  </li>

  <li>
    <strong>Liability –</strong>{' '}
    We are not responsible for indirect or unforeseen damages; results may vary.
  </li>

  <li>
    <strong>Confidentiality –</strong>{' '}
    We protect your information and project data.
  </li>

  <li>
    <strong>Termination –</strong>{' '}
    Either party may end the project with notice; payment required for work done.
  </li>

  <li>
    <strong>Governing Law –</strong>{' '}
    Disputes handled under [Your Country/State] law.
  </li>
</ol>


        <div className="pt-8 border-t border-rgba(211,233,253,0.3) mt-10 text-sm text-center text-gray-400">
          Contact: <a href="mailto:rankinventiv@gmail.com" className="underline text-blue-400 hover:text-white">rankinventiv@gmail.com</a> |{' '}
          <a href="tel:+918527665635" className="underline text-blue-400 hover:text-white">+91-8527665635</a> |{' '}
          <a href="https://www.rankinventiv.com" target="_blank" rel="noopener noreferrer" className="underline text-blue-400 hover:text-white">www.rankinventiv.com</a>
        </div>
      </main>
      <GlassFooter2 />
      </div>
    </>
  );
};

export default page;
