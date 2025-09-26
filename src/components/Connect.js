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
    <section className="bg-[linear-gradient(125deg,_#382933,_#372935,_#372831)] text-white px-8 pb-30">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 pt-20">

        {/* Contacts */}
        <div className="bg-[#5F69A8] p-6 text-lg border border-white/20 shadow-md ">
          <h3 className="font-semibold mb-4">Address 1</h3>
          <p>2nd Floor, Lahurabir Rd, Jagatganj,</p>
          <p>Near Sanskrit University,</p>
          <p>Varanasi, Uttar Pradesh - 221002</p>
          <p className="mt-4">Our social networks:</p>
          <div className="flex flex-wrap gap-4 mt-3 text-white text-3xl">
            <Link href="#" aria-label="LinkedIn" className="hover:text-[#8FCDFF]">
              <FaLinkedin />
            </Link>
            <Link href="#" aria-label="YouTube" className="hover:text-[#8FCDFF]">
              <FaYoutube />
            </Link>
            <Link href="#" aria-label="Instagram" className="hover:text-[#8FCDFF]">
              <FaInstagram />
            </Link>
            <Link href="#" aria-label="Twitter" className="hover:text-[#8FCDFF]">
              <FaTwitter />
            </Link>
            <Link href="#" aria-label="Facebook" className="hover:text-[#8FCDFF]">
              <FaFacebook />
            </Link>
<Link href="#" aria-label="Google Plus" className="hover:text-[#8FCDFF]">
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
            <Link href="#" aria-label="LinkedIn" className="hover:text-[#8FCDFF]">
              <FaLinkedin />
            </Link>
            <Link href="#" aria-label="YouTube" className="hover:text-[#8FCDFF]">
              <FaYoutube />
            </Link>
            <Link href="#" aria-label="Instagram" className="hover:text-[#8FCDFF]">
              <FaInstagram />
            </Link>
            <Link href="#" aria-label="Twitter" className="hover:text-[#8FCDFF]">
              <FaTwitter />
            </Link>
            <Link href="#" aria-label="Facebook" className="hover:text-[#8FCDFF]">
              <FaFacebook />
            </Link>
<Link href="#" aria-label="Google Plus" className="hover:text-[#8FCDFF]">
  <FaGooglePlusG style={{ width: "40px", height: "40px" , paddingBottom: "6px" }}  />
</Link>

          </div>
        </div>

       

      </div>
    </section>
  );
}
