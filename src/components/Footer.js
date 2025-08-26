"use client";
import { useState, useEffect } from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
  FaPhone,
  FaEnvelope
} from "react-icons/fa";

export default function GlassFooter() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer id="contact-us" className=" py-12 text-white bg-[linear-gradient(90deg,#5F69A8,#616FB4,#657AC9,#6E8EEE,#80B3F6,#8FCDFF)] backdrop-blur-[15px]">
      {/* Top Section */}
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-y-10 gap-x-6">

        {/* Left: Brand */}
        <div className="xl:col-span-2 xl:mr-4">
          <p className="text-base leading-relaxed text-gray-100">
           At RankInventiv, we connect your business with the right experts—whether in digital marketing, tech, or ads. Our goal is simple: help you grow smarter, save budget, and achieve maximum ROI with strategies customized just for you.
          </p>
          {/* Embedded Google Map */}
  <div className="mt-4 overflow-hidden">
    <iframe
      title="RankInventiv Location"
      src="https://www.google.com/maps?q=2nd%20Floor,%20Lahurabir%20Rd,%20Jagatganj,%20Near%20Sanskrit%20University,%20Varanasi,%20Uttar%20Pradesh%20221002&output=embed"
      width="100%"
      height="180"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
        </div>
        

        {/* Middle Left: For Businesses */}
        <div className="xl:ml-1">
          <h3 className="font-semibold mb-4 text-lg ">For Businesses</h3>
          <ul className="space-y-2 text-base">
            <li><a href="#" className="hover:underline">Talk With SEO Expert</a></li>
            <li><a href="#" className="hover:underline">Talk With Ads Specialist</a></li>
            <li><a href="#" className="hover:underline">Talk With Branding Expert</a></li>
            <li><a href="#" className="hover:underline">Talk With Social Media Expert</a></li>
             <li><a href="#" className="hover:underline">Talk With Tech Expert</a></li>
          </ul>
        </div>

        {/* Middle Right: For Agencies */}
        <div className="xl:ml-10">
          <h3 className="font-semibold mb-4 text-lg ">Quick Links</h3>
          <ul className="space-y-2 text-base">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Company</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Right: Contact */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Get in Touch</h3>
          <p className="text-base mb-3 leading-relaxed">
            2nd Floor, Lahurabir Rd, Jagatganj, Near Sanskrit University, Varanasi, Uttar Pradesh 221002
          </p>
          <a href="mailto:rankinventiv@gmail.com" className="flex items-center gap-2 mb-2 text-base hover:underline">
  <FaEnvelope /> rankinventiv@gmail.com
</a>
<a href="tel:+91-9310962725" className="flex items-center gap-2 mb-4 text-base hover:underline">
  <FaPhone /> +91-9310962725
</a>
           <div className="flex gap-4 mt-4  text-2xl md:text-3xl">
            <FaLinkedin className="cursor-pointer hover:scale-110 transition" />
            <FaInstagram className="cursor-pointer hover:scale-110 transition" />
            <FaFacebook className="cursor-pointer hover:scale-110 transition" />
            <FaTwitter className="cursor-pointer hover:scale-110 transition" />
            <FaWhatsapp className="cursor-pointer hover:scale-110 transition" />
          </div>
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
