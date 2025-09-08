"use client";
import GlassFooter2 from "@/components/Footer2";
import GlassNavbar2 from "@/components/Navbar2";
import React from "react";

const PrivacyPolicy = () => {

  return (
    <><GlassNavbar2 /> 
    <div
      className="min-h-screen w-full text-gray-200"
      style={{
        background: "linear-gradient(to bottom, #382933, #372935, #372831)",
      }}
    >
      

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-30 space-y-12 text-justify">
        <span className="text-2xl font-bold text-center text-white block mb-10">
          Privacy Policy – RankInventiv Digital Marketing & Development Agency
        </span>

        <p className="mb-6">
          <span className="text-sm text-gray-400 text-start">Effective Date:</span> [Insert Date]
        </p>

        <p className="mb-6">
          At RankInventiv, we value your privacy and are committed to protecting
          your personal information. This Privacy Policy explains how we
          collect, use, and safeguard the information you share with us when you
          visit our website, use our services, or interact with our team.
        </p>

        <section className="mb-8">
          <span className="text-lg font-semibold mb-2 text-white block">
            1. Information We Collect
          </span>
          <ul className="list-disc list-outside space-y-2 ml-4">
            <li>
              <strong>Personal Information:</strong> Name, email address, phone
              number, business details, billing information, etc.
            </li>
            <li>
              <strong>Non-Personal Information:</strong> Browser type, device
              information, IP address, pages visited, and time spent on our
              site.
            </li>
            <li>
              <strong>Project & Service Data:</strong> Any files, credentials,
              or project details you share for digital marketing, web
              development, or other services.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <span className="text-lg font-semibold mb-2 text-white block">
            2. How We Use Your Information
          </span>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Provide and improve our digital marketing and development
              services.
            </li>
            <li>Communicate project updates, reports, and proposals.</li>
            <li>Respond to inquiries and support requests.</li>
            <li>Send relevant marketing updates (only with your consent).</li>
            <li>Maintain website security and performance.</li>
          </ul>
        </section>

        <section className="mb-8">
          <span className="text-lg font-semibold mb-2 text-white block">
            3. How We Share Your Information
          </span>
          <ul className="list-disc list-outside space-y-2 ml-4">
            <li>
              With trusted third-party service providers assisting us in
              delivering our services (bound by confidentiality agreements).
            </li>
            <li>When required by law or government authorities.</li>
            <li>
              To protect our rights, safety, and the security of our services.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <span className="text-lg font-semibold mb-2 text-white block">
            4. Data Security
          </span>
          <p className="mt-2">
            We use secure servers, encryption, and access control measures to
            protect your information. However, no online transmission is 100%
            secure, and we cannot guarantee complete security.
          </p>
        </section>

        <section className="mb-8">
          <span className="text-lg font-semibold mb-2 text-white block">
            5. Cookies & Tracking Technologies
          </span>
          <p className="mt-2">
            Our website may use cookies, pixels, and analytics tools (such as
            Google Analytics) to improve user experience and measure
            performance. You can manage or disable cookies in your browser
            settings.
          </p>
        </section>

        <section className="mb-8">
          <span className="text-lg font-semibold mb-2 text-white block">
            6. Your Rights
          </span>
          <ul className="list-disc list-inside space-y-2">
            <li>Access, update, or delete your personal information.</li>
            <li>Opt-out of marketing communications.</li>
            <li>Request a copy of the data we hold about you.</li>
          </ul>
          <p className="mt-2">
            To exercise these rights, email us at{" "}
            <a
              href="mailto:rankinventiv@gmail.com"
              className="text-blue-400 underline hover:text-white"
            >
              rankinventiv@gmail.com
            </a>
          </p>
        </section>

        <section className="mb-8">
          <span className="text-lg font-semibold mb-2 text-white block">
            7. Third-Party Links
          </span>
          <p className="mt-2">
            Our website may link to third-party sites. We are not responsible
            for the content or privacy practices of these websites.
          </p>
        </section>

        <section className="mb-8">
          <span className="text-lg font-semibold mb-2 text-white block">
            8. Changes to This Privacy Policy
          </span>
          <p className="mt-2">
            We may update this policy from time to time. Any changes will be
            posted on this page with the updated effective date.
          </p>
        </section>

        <section className="mb-8">
          <span className="text-lg font-semibold mb-2 text-white block">
            9. Contact Us
          </span>
          <ul className="space-y-1 mt-2">
            <li>
              <strong>RankInventiv Support</strong>
            </li>
            <li>
              Email:{" "}
              <a
                href="mailto:rankinventiv@gmail.com"
                className="text-blue-400 underline hover:text-white"
              >
                rankinventiv@gmail.com
              </a>
            </li>
            <li> Phone: 
              <a href="tel:+918527665635" className="text-blue-400 hover:text-white underline">
                +91-8527665635
              </a>
            </li>

            <li>
              Website:{" "}
              <a
                href="https://www.rankinventiv.com"
                className="text-blue-400 underline hover:text-white"
              >
                www.rankinventiv.com
              </a>
            </li>
          </ul>
        </section>
      </main>

    </div>
      <GlassFooter2 />
    </>
  );
};

export default PrivacyPolicy;
