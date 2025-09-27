"use client";
import { useState } from "react";
import Link from "next/link";
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

export default function ContactFormModal({ showForm, setShowForm, selectedExpert }) {


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  if (!showForm) return null; // ✅ Only render when visible

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
     const res = await fetch("/api/contact", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ ...formData, expert: selectedExpert }),
});


      const data = await res.json();

      if (res.ok) {
        console.log("✅ Email sent:", data);
        alert("Thank you for your message!");
        setShowForm(false);
        window.location.reload();
      } else {
        console.error("❌ API error:", data);
        alert(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("❌ Network error:", err);
      alert("Failed to send message. Please try again later.");
    }
  };



return (
<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-2 sm:px-4 py-8 overflow-y-auto">
   <div className="bg-black/70 shadow-lg max-w-4xl w-full p-4 sm:p-8 relative max-h-[90vh] overflow-y-auto"
  style={{
    backgroundImage:
      "linear-gradient( rgba(255,255,255,0.2), rgba(255,255,255,0))",
    backgroundRepeat: "no-repeat",

  }} >
   {/* ❌ REMOVE THE SELF-CALLING LINE HERE */}

        {/* Close Button */}
<button
  onClick={() => setShowForm(false)}
  className="
    absolute top-2 right-3 
    rounded-3xl
    transition-transform transform
    hover:scale-115
    cursor-pointer
    flex items-center justify-center
  "
  aria-label="Close"
>
  <svg
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Circle background with improved red radial gradient */}
    <circle cx="12" cy="12" r="11" fill="url(#bgGradient)" />

    {/* Main X shape with deeper red gradient */}
    <g stroke="url(#xGradient)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="7" x2="17" y2="17" />
      <line x1="17" y1="7" x2="7" y2="17" />
    </g>
    
    {/* Inner shadow lines, slightly more transparent for subtle depth */}
    <g stroke="url(#shadowGradient)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.25">
      <line x1="8" y1="8" x2="16" y2="16" />
      <line x1="16" y1="8" x2="8" y2="16" />
    </g>

    <defs>
      {/* Background radial gradient for rich reds */}
      <radialGradient id="bgGradient" cx="0.4" cy="0.3" r="1">
        <stop offset="0%" stopColor="#ff4d4d" />  {/* bright red */}
        <stop offset="70%" stopColor="#b22222" />  {/* firebrick red */}
        <stop offset="100%" stopColor="#7a1a1a" /> {/* deep dark red */}
      </radialGradient>

      {/* Gradient on X shape for 3D red shading */}
      <linearGradient id="xGradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#fff0f0" />
        <stop offset="50%" stopColor="#ff7a7a" />
        <stop offset="100%" stopColor="#7a1a1a" />
      </linearGradient>

      {/* Shadow gradient for inner lines */}
      <linearGradient id="shadowGradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#7a1a1a" />
        <stop offset="100%" stopColor="#ff7a7a" />
      </linearGradient>
    </defs>
  </svg>
</button>





      <div className="flex flex-col lg:flex-row py-6 gap-8">
        {/* Left Side Info */}
        <div className="lg:w-1/2 mb-10 lg:mb-0 pr-6 ">
       <h2 className="text-4xl font-light leading-snug text-gray-200">
  {selectedExpert ? `Talk With ${selectedExpert}` : "Get in Touch"}
</h2>



          <div className="mt-8 space-y-4 text-gray-200 text-base">
            <div>
              <p className="font-semibold text-[#8CC8FD]">Contact Support</p>
              <Link href="tel:+918527665635" className="underline text-gray-300 hover:text-white">+91-8527665635</Link>
            </div>
            <div>
              <p className="font-semibold text-[#8CC8FD]">General Inquiries</p>
              <Link href="rankinventiv@gmail.com" className="underline text-gray-300 hover:text-white">rankinventiv@gmail.com</Link>
            </div>
              <div>
              <p className="font-semibold text-[#8CC8FD]">Consulting Hours:</p>
              <span>Monday – Friday: 11:00 AM – 6:00 PM <br />
Saturday: 3:00 PM – 7:00 PM <br />
Sunday: Closed
</span>
            </div>
            <div>
              <p className="font-semibold text-[#8CC8FD]">Mailing Address</p>
              <p>2nd Floor, Lahurabir Rd, Jagatganj, <br /> Near Sanskrit University, Varanasi, <br /> Uttar Pradesh 221002</p>
            </div>
             <div className="flex gap-4 text-3xl ">
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
              <Link href="https://maps.app.goo.gl/MNbdJh3Mn9J7joEn6" target="_blank" rel="noopener noreferrer">
                <FaGooglePlusG className="cursor-pointer hover:scale-150 transition scale-[1.4] hover:text-[#8FCDFF]" />
              </Link>
           </div>
          </div>
        </div>

        {/* Right Side Form */}
        <form onSubmit={handleSubmit} className="lg:w-1/2 p-6 space-y-4"
         style={{
    backgroundImage:
      "linear-gradient( rgba(255,255,255,0.2), rgba(255,255,255,0.1))",
    backgroundRepeat: "no-repeat",

  }}>
            <input
              name="name"
              type="text"
              placeholder="Enter Your Name "
              required
              value={formData.name}
              onChange={handleChange}
               className=" w-full text-white placeholder-white/40 bg-black/15 backdrop-blur-sm focus:outline-none p-2"
                       style={{
    borderBottom: `2px solid transparent`,
    backgroundImage:
      "linear-gradient(to right, rgba(255,255,255,0.3), rgba(255,255,255,0))",
    backgroundRepeat: "no-repeat",
     backgroundSize: "100% 2px",
    backgroundPosition: "left bottom",

  }}
            />
         

          
            <input
              name="email"
              type="email"
              placeholder="Business Email "
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full text-white placeholder-white/40 bg-black/15 backdrop-blur-sm focus:outline-none p-2"
                       style={{
    borderBottom: `2px solid transparent`,
    backgroundImage:
      "linear-gradient(to right, rgba(255,255,255,0.3), rgba(255,255,255,0))",
    backgroundRepeat: "no-repeat",
     backgroundSize: "100% 2px",
    backgroundPosition: "left bottom",

  }}
            />
            <input
              name="phone"
              type="tel"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
               className="w-full text-white placeholder-white/40 bg-black/15 backdrop-blur-sm focus:outline-none p-2"
                       style={{
    borderBottom: `2px solid transparent`,
    backgroundImage:
      "linear-gradient(to right, rgba(255,255,255,0.3), rgba(255,255,255,0))",
    backgroundRepeat: "no-repeat",
     backgroundSize: "100% 2px",
    backgroundPosition: "left bottom",

  }}
            />

          <textarea
            name="message"
            placeholder="What can we help you with? "
            required
            value={formData.message}
            onChange={handleChange}
             className=" w-full text-white placeholder-white/40 bg-black/15 backdrop-blur-sm focus:outline-none p-4 min-h-[120px]"
                       style={{
    borderBottom: `2px solid transparent`,
    backgroundImage:
      "linear-gradient(to right, rgba(255,255,255,0.3), rgba(255,255,255,0))",
    backgroundRepeat: "no-repeat",
     backgroundSize: "100% 2px",
    backgroundPosition: "left bottom",

  }}
          />

          <button
            type="submit"
            className="bg-black text-white px-6 py-3 hover:bg-gray-800 transition hover:scale-105 cursor-pointer"
            style={{
                  background:
                    "linear-gradient(90deg, #5F69A8, #616FB4, #657AC9, #6E8EEE, #80B3F6, #8FCDFF)",
                }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
);

}
