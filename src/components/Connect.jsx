"use client";
import Link from 'next/link';
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
    <section className="relative bg-[linear-gradient(125deg,_#382933,_#372935,_#372831)] text-white px-8 pb-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 pt-20">

        {/* Contacts */}
        <div className="bg-[#5F69A8] p-6 text-lg border border-white/20 shadow-md ">
          <h3 className="font-semibold mb-4">Address 1</h3>
          <p>2nd Floor, Lahurabir Rd, Jagatganj,</p>
          <p>Near Sanskrit University,</p>
          <p>Varanasi, Uttar Pradesh - 221002</p>
          <p className="mt-4">Our social networks:</p>
          <div className="flex flex-wrap gap-4 mt-3 text-white text-3xl">
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
                <FaTwitter className="cursor-pointer hover:scale-110 transition hover:text-[#8FCDFF]" />
              </Link>
               <Link href="https://www.youtube.com/@Rankinventiv" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="cursor-pointer hover:scale-110 transition hover:text-[#8FCDFF]" />
              </Link>

<Link href="https://maps.app.goo.gl/MNbdJh3Mn9J7joEn6" target="_blank" rel="noopener noreferrer" aria-label="Google Plus" className="hover:text-[#8FCDFF]">
  <FaGooglePlusG style={{ width: "40px", height: "40px" , paddingBottom: "6px" }}  />
</Link>
          </div>
        </div>

        {/* Catalog */}
        <div className="bg-[#5F69A8] p-6 text-lg border border-white/20 shadow-md">
          <h3 className="font-semibold mb-4">Address 2</h3>
          <p>+44-7871234567</p>
          <p>plantsstore@gmail.com</p>
          <p>address</p>
          <p className="mt-4">Our social networks:</p>
          <div className="flex flex-wrap gap-4 mt-3 text-white text-3xl">
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
                <FaTwitter className="cursor-pointer hover:scale-110 transition hover:text-[#8FCDFF]" />
              </Link>
               <Link href="https://www.youtube.com/@Rankinventiv" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="cursor-pointer hover:scale-110 transition hover:text-[#8FCDFF]" />
              </Link>

<Link href="https://maps.app.goo.gl/MNbdJh3Mn9J7joEn6" target="_blank" rel="noopener noreferrer" aria-label="Google Plus" className="hover:text-[#8FCDFF]">
  <FaGooglePlusG style={{ width: "40px", height: "40px" , paddingBottom: "6px" }}  />
</Link>

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
    </section>
  );
}
