"use client";
import Link from 'next/link';
import { SiX } from "react-icons/si";
import {
  FaYoutube,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaGooglePlusG,
} from 'react-icons/fa';

export default function Connect() {
  return (
    <>
    <section className="relative bg-[linear-gradient(125deg,_#382933,_#372935,_#372831)] text-white px-8 pb-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-4 pt-20">

        {/* Contacts */}
     <div className="bg-[#5F69A8] p-6 text-lg border border-white/20 shadow-md">
  <div className="flex flex-col md:flex-row gap-6 ">
    {/* Address Section */}
    <div className="md:w-1/2 whitespace-nowrap">
      <h3 className="font-semibold mb-4">Office Address 1</h3>
      <p>2nd Floor, Lahurabir Rd, Jagatganj,</p>
      <p>Near Sanskrit University, Varanasi,</p>
      <p>Uttar Pradesh - 221002, India</p>
    </div>

    {/* Map Section */}
   <div className="md:w-1/3 w-auto h-[160px] md:h-auto rounded-md overflow-hidden ml-auto">
  <iframe
    title="RankInventiv Office Location"
    src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d115408.22405537314!2d82.99110895!3d25.32076265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x398e2f3b466f8205%3A0xc058bce99f321cf8!2s3rd%20Floor%2C%20Rankinventiv%2C%20C27%2F183%2C%20Lahurabir%20Rd%2C%20near%20Sanskrit%20University%20Road%2C%20Near%20Hotel%20Pradeep%2C%20Jagatganj%2C%20Chaukaghat%2C%20Varanasi%2C%20Uttar%20Pradesh%20221002!3m2!1d25.325644!2d82.99889399999999!5e0!3m2!1sen!2sin!4v1765126461023!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

  </div>
</div>

    {/* Contacts */}
     <div className="bg-[#5F69A8] p-6 text-lg border border-white/20 shadow-md">
  <div className="flex flex-col md:flex-row gap-6">
    {/* Address Section */}
    <div className="md:w-1/2 whitespace-nowrap">
     <h3 className="font-semibold mb-4">Office Address 2</h3>
          <p>A-12/16,</p>
          <p>Sector 15, Noida</p>
          <p>Uttar Pradesh - 201301, India</p>
    </div>

     {/* Map Section */}
   <div className="md:w-1/3 w-auto h-[160px] md:h-auto rounded-md overflow-hidden ml-auto">
  <iframe
    title="RankInventiv Office Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.2935105022943!2d82.98864611433802!3d25.30473298383759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e31fc7a9baeb1%3A0x48f6c382c292c3d2!2sSampurnanand%20Sanskrit%20University!5e0!3m2!1sen!2sin!4v1696607796310!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
  </div>
</div>
      

      </div>
      
<div className="absolute bottom-0 left-0 w-full z-20">
  <div
    className="h-[2px] w-full max-w-[1000px] mx-auto"
    style={{
      background:
        "linear-gradient(to right, rgba(211,233,253,0.3), rgba(211,233,253,0))",
    }}
  ></div>
</div>
<div className="text-center mt-10">
  <p className="text-white text-2xl ">Our social networks :</p>
  
  <div className="flex flex-wrap justify-center items-center gap-4 mt-3 text-white text-4xl">
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
      <Link href="https://www.youtube.com/@Rankinventiv" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="cursor-pointer hover:scale-110 transition hover:text-[#8FCDFF]" />
              </Link>
  </div>
</div>

    </section>
     
    </>
  );
}
