"use client";
import GlassFooter2 from '@/components/Footer2';
import GlassNavbar2 from '@/components/Navbar2';
import React from 'react';

const page = () => {
  return (
    <>
     <div
      className="min-h-screen w-full text-gray-200"
      style={{
        background: "linear-gradient(to bottom, #382933, #372935, #372831)",
      }}
    >
      <GlassNavbar2 />
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
