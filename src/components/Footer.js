"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaGooglePlusG
} from "react-icons/fa";
import ContactFormModal from "./ContactFormModal";

export default function GlassFooter() {
  const [scrolled, setScrolled] = useState(false);
  const [showForm, setShowForm] = useState(false);
  

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <footer id="book-consulting" className=" py-12 text-white bg-[linear-gradient(90deg,#5F69A8,#616FB4,#657AC9,#6E8EEE,#80B3F6,#8FCDFF)] backdrop-blur-[15px]">
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
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115403.50094890468!2d82.84627219726565!3d25.325718100000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2ff84c34878d%3A0x219a2452dac85f3a!2sNikhil%20Consulting%20%7C%20Business%20Growth%20%26%20Digital%20Marketer!5e0!3m2!1sen!2sus!4v1756276502921!5m2!1sen!2sus"
      width="50%"
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
          <ul className="space-y-2 text-base cursor-pointer">
            <li><a href="/consulting" className="hover:underline">Home</a></li>
            <li><a href="#about-us" className="hover:underline">About Us</a></li>
            <li><a href="/company" className="hover:underline">Company</a></li>
             <li>
                <button
                  onClick={() => setShowForm(true)}
                  className="hover:underline text-left cursor-pointer"
                >
                  Contact
                </button>
              </li>
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
        <div className="flex gap-4 text-3xl ">
  <Link href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
    <FaLinkedin className="cursor-pointer hover:scale-110 transition" />
  </Link>
  <Link href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
    <FaInstagram className="cursor-pointer hover:scale-110 transition" />
  </Link>
  <Link href="https://www.facebook.com/your-profile" target="_blank" rel="noopener noreferrer">
    <FaFacebook className="cursor-pointer hover:scale-110 transition" />
  </Link>
  <Link href="https://www.twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
    <FaTwitter className="cursor-pointer hover:scale-110 transition" />
  </Link>
  <Link href="https://maps.app.goo.gl/MNbdJh3Mn9J7joEn6" target="_blank" rel="noopener noreferrer">
    <FaGooglePlusG className="cursor-pointer hover:scale-150 transition scale-[1.4]" />
  </Link>
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
     {/* 👇 Modal Component */}
      <ContactFormModal showForm={showForm} setShowForm={setShowForm} />
      </>
  );
}
