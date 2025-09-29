"use client";
import Link from "next/link";
import Image from "next/image";
import Cta2 from "@/components/Cta2";
import { SiX } from "react-icons/si";

import { useState, useEffect } from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  
  FaYoutube,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaGooglePlusG
} from "react-icons/fa";
import ContactFormModal from "./ContactFormModal";

export default function GlassFooter2() {

  const [scrolled, setScrolled] = useState(false);
  const [showForm, setShowForm] = useState(false);
const [selectedExpert, setSelectedExpert] = useState('');

  const handleClick = (expertName) => {
  setSelectedExpert(expertName);
  setShowForm(true);
};


  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
           <footer id="book-consulting" className="py-12 text-white  bg-[linear-gradient(15deg,_#000000,_#382933,_#000000)] backdrop-blur-[15px]">
      <Cta2 />
        {/* Top Section */}
        <div className="max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2  xl:grid-cols-6 gap-y-10 gap-x-6 lg:gap-x-0 px-4 sm:px-6 lg:px-15 2xl:ml-26 xl:ml-6 md:ml-20 lg:mr-10 pt-10 ">
          {/* Brand Section */}
<div className="xl:col-span-2 -mt-10  ">
  {/* Logo */}
  <div className="relative w-64 h-24 -ml-4 -mb-2">
    <Link href={"/"}>
    <Image
      src="/assets/images/logo/logo-2.png"
      alt="RankInventiv Logo"
      layout="fill"
      objectFit="contain"
      priority
    />
    </Link>
  </div>

  <p className="text-base leading-relaxed text-gray-100">
    At RankInventiv, we connect your business with the right experts—whether in digital marketing, tech, or ads. Our goal is simple: help you grow smarter, save budget, and achieve maximum ROI with strategies customized just for you.
  </p>

  {/* Google Map */}
  <div className="mt-6 lg:w-70 overflow-hidden">
    <iframe
      title="RankInventiv Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115403.50094890468!2d82.84627219726565!3d25.325718100000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2ff84c34878d%3A0x219a2452dac85f3a!2sNikhil%20Consulting%20%7C%20Business%20Growth%20%26%20Digital%20Marketer!5e0!3m2!1sen!2sus!4v1756276502921!5m2!1sen!2sus"
      width="100%"
      height="120"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>


          {/* For Businesses */}
          <div className="xl:ml-3">
            <h3 className="font-semibold mb-4 text-lg">For Consulting</h3>
         <ul className="space-y-2 text-base">
  <li onClick={() => handleClick('SEO Expert')} className="hover:underline hover:text-[#8FCDFF] cursor-pointer">Talk With SEO Expert</li>
  <li onClick={() => handleClick('Ads Specialist')} className="hover:underline hover:text-[#8FCDFF] cursor-pointer">Talk With Ads Specialist</li>
  <li onClick={() => handleClick('Branding Expert')} className="hover:underline hover:text-[#8FCDFF] cursor-pointer">Talk With Branding Expert</li>
  <li onClick={() => handleClick('Social Media Expert')} className="hover:underline hover:text-[#8FCDFF] cursor-pointer">Talk With Social Media Expert</li>
  <li onClick={() => handleClick('Tech Expert')} className="hover:underline hover:text-[#8FCDFF] cursor-pointer">Talk With Tech Expert</li>
</ul>


          </div>
          <div className="xl:ml-12">
            <h3 className="font-semibold mb-4 text-lg"> Services</h3>
            <ul className="space-y-2 text-base cursor-pointer">
              <li><Link href="/services/search-engine-optimisation-page" className="hover:underline hover:text-[#8FCDFF]">SEO</Link></li>

              <li><Link href="/services/local-seo-page" className="hover:underline hover:text-[#8FCDFF]">Local SEO</Link></li>
              <li><Link href="/services/google-ads-page" className="hover:underline hover:text-[#8FCDFF]">Google Ads</Link></li>

                            <li><Link href="/services/meta-ads-page" className="hover:underline hover:text-[#8FCDFF]">Meta Ads</Link></li>
              <li><Link href="/services/website-development-page" className="hover:underline hover:text-[#8FCDFF]">Website Development</Link></li>
              
              <li><Link href="/services/social-media-marketing-page" className="hover:underline hover:text-[#8FCDFF]">Social Media Marketing</Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="xl:ml-8">
            <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2 text-base cursor-pointer">
              <li><Link href="/" className="hover:underline hover:text-[#8FCDFF]">Home</Link></li>

              <li><Link href="/about-us" className="hover:underline hover:text-[#8FCDFF]">About Us</Link></li>
              {/* <li><Link href="/blogs" className="hover:underline">Blogs</Link></li> */}

                            {/* <li><Link href="/services" className="hover:underline">Services</Link></li> */}
              <li><Link href="/digital-marketing-consultant" className="hover:underline hover:text-[#8FCDFF]">Consultancy</Link></li>
              {/* <li><Link href="/career" className="hover:underline">Career</Link></li> */}
              <li><Link href="/contact-us" className="hover:underline hover:text-[#8FCDFF]">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Get in Touch</h3>
            {/* <p className="text-base mb-3 leading-relaxed">
              2nd Floor, Lahurabir Rd, Jagatganj, <br />
              Near Sanskrit University, <br />
              Varanasi, Uttar Pradesh 221002
            </p> */}
            <a href="mailto:rankinventiv@gmail.com" className="flex items-center gap-2 mb-2 text-base hover:underline hover:text-[#8FCDFF]">
              <FaEnvelope /> rankinventiv@gmail.com
            </a>
            <a href="tel:+919310962725" className="flex items-center gap-2 mb-4 text-base hover:underline hover:text-[#8FCDFF]">
              <FaPhone /> +91- 93109 62725
            </a>
            <div className="flex gap-4 text-2xl sm:text-3xl">
               <Link href="https://www.linkedin.com/company/rankinventiv/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="cursor-pointer hover:scale-110 transition hover:text-[#8FCDFF]" />
              </Link>
              <Link href="https://www.instagram.com/rankinventiv/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="cursor-pointer hover:scale-110 transition hover:text-[#8FCDFF]" />
              </Link>
              <Link href="https://www.facebook.com/rankinventiv/" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="cursor-pointer hover:scale-110 transition hover:text-[#8FCDFF]" />
              </Link>
              <Link href="https://x.com/rankinventiv" target="_blank" rel="noopener noreferrer">
                <SiX size={26} className="cursor-pointer mt-1 hover:scale-110 transition hover:text-[#8FCDFF]" />
              </Link>
               {/* <Link href="https://www.youtube.com/@Rankinventiv" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="cursor-pointer hover:scale-110 transition hover:text-[#8FCDFF]" />
              </Link> */}
              <Link href="https://maps.app.goo.gl/MNbdJh3Mn9J7joEn6" target="_blank" rel="noopener noreferrer">
                <FaGooglePlusG className="cursor-pointer hover:scale-150 transition scale-[1.4] hover:text-[#8FCDFF]" />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="max-w-7xl mx-auto mt-12 border-t border-white/30 pt-6 flex flex-col sm:flex-row items-center justify-between text-sm px-4 sm:px-6 lg:px-8">
          <div className="flex gap-6 mb-4 sm:mb-0 text-xs">
            <Link href="/privacy-policy" className="hover:underline hover:text-[#8FCDFF]">Privacy Policy</Link>
            <span>|</span>
            <Link href="/terms-of-services" className="hover:underline hover:text-[#8FCDFF]">Terms of Services</Link>
          </div>
          <p className="text-sm sm:text-base">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </footer>
      {/* Modal Component */}
     <ContactFormModal 
  showForm={showForm} 
  setShowForm={setShowForm}
  selectedExpert={selectedExpert}
/>

    </>
  );
}
