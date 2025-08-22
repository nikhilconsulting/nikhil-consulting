"use client";
import { useState, useEffect } from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

export default function GlassFooter() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="px-6 py-12 text-white bg-[linear-gradient(90deg,#5F69A8,#616FB4,#657AC9,#6E8EEE,#80B3F6,#8FCDFF)] backdrop-blur-[15px]">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-16">
        {/* Left: Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-4">DESIGNRUSH</h2>
          <p className="text-sm leading-relaxed text-gray-100">
            DesignRush is the premier agency directory, awards platform, and
            media hub connecting brands with top agencies in software, app
            development, design, and marketing. We deliver vetted reviews,
            insights, and trends to drive business growth.
          </p>
           <div className="flex gap-4 mt-4  text-2xl md:text-3xl">
            <FaLinkedin className="cursor-pointer hover:scale-110 transition" />
            <FaInstagram className="cursor-pointer hover:scale-110 transition" />
            <FaFacebook className="cursor-pointer hover:scale-110 transition" />
            <FaTwitter className="cursor-pointer hover:scale-110 transition" />
            <FaWhatsapp className="cursor-pointer hover:scale-110 transition" />
          </div>
        </div>
        

        {/* Middle Left: For Businesses */}
        <div>
          <h3 className="font-semibold mb-4 text-lg ">For Businesses</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Agencies Categories</a></li>
            <li><a href="#" className="hover:underline">Agency Ranking Methodology</a></li>
            <li><a href="#" className="hover:underline">Trends Articles</a></li>
            <li><a href="#" className="hover:underline">FAQs</a></li>
          </ul>
        </div>

        {/* Middle Right: For Agencies */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">For Agencies</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Benefits Of Listing With Us</a></li>
            <li><a href="#" className="hover:underline">Submit An Agency</a></li>
            <li><a href="#" className="hover:underline">Sponsorship</a></li>
            <li><a href="#" className="hover:underline">All Agencies</a></li>
          </ul>
        </div>

        {/* Right: Contact */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Get in Touch</h3>
          <p className="text-sm mb-3 leading-relaxed">
            18117 Biscayne Blvd <br />
            Miami, FL 33160 <br />
            United States
          </p>
          <a href="mailto:rankinventiv@gmail.com" className="block mb-2 text-sm hover:underline">
           rankinventiv@gmail.com
          </a>
          <a href="tel:+91-9310962725" className="block mb-4 text-sm hover:underline">
           +91-9310962725
          </a>
         
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto mt-12 border-t border-white/30 pt-6 flex flex-col sm:flex-row items-center justify-between text-sm">
        <div className="flex gap-6 mb-4 sm:mb-0 text-xs">
          <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
          <span>|</span>
          <a href="/terms-&-conditions" className="hover:underline">Terms of Service</a>
        </div>
        <p className="text-sm sm:text-base">
          © {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
