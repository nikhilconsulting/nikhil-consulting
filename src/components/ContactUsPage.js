"use client";
import React from 'react';
import Image from 'next/image';
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
// import { parsePhoneNumberFromString } from "libphonenumber-js";
import "react-phone-input-2/lib/style.css";

export default function ContactUsPage() {
      const [errors, setErrors] = useState({});
    
      const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        website: "",
        message: "",
      });
    
      const [selected, setSelected] = useState("");
      const [open, setOpen] = useState(false);
      const [lastCountry, setLastCountry] = useState("in");
      const [error, setError] = useState("");
      const [showThankYou, setShowThankYou] = useState(false);
    
      const options = ["Yes", "No"];
    
     const handleSubmit = async (e) => {
     e.preventDefault();
    
      if (!form.name.trim()) {
        alert("Please fill out your name.");
        return;
      }
    
      if (!form.email.trim()) {
        alert("Please fill out your email.");
        return;
      }
    
      if (!form.phone.trim()) {
        alert("Please fill out your phone.");
        return;
      }
    
    
      setErrors({}); // Clear previous errors
    
      // Submit data
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...form,
            phone: phoneNumber.formatInternational(),
            hasWebsite: selected,
          }),
        });
    
        const data = await res.json();
    
        if (res.ok) {
          setShowThankYou(true);
          setForm({ name: "", email: "", phone: "", website: "", message: "" });
          setSelected("");
        } else {
          setError(data.error || "Something went wrong.");
        }
      } catch (err) {
        setError("Network error. Try again later.");
      }
    };
  return (
    <>
   <section className="relative min-h-screen bg-[linear-gradient(125deg,_#382933,_#372935,_#372831)] text-white flex items-center justify-center px-6 py-16 pt-30">
  
  {/* 🔷 Diagonal Background Element - Further Right */}
  {/* <div className="absolute inset-0 flex items-end justify-end z-[1] pointer-events-none translate-x-[12vw] sm:translate-x-[14vw] md:translate-x-[18vw] lg:translate-x-[22vw]">
    <div className="w-[60vw] h-[60vw] mt-[120px] bg-[linear-gradient(15deg,_#5F69A8,_#000000,_#5F69A8)] rotate-45 origin-center"></div>
  </div> */}

      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-start z-2">
        {/* LEFT COLUMN (heading + text) */}
        <div className="space-y-6 text-center md:text-left max-w-full md:max-w-[600px] flex-shrink-0">

          <h1 className="text-4xl font-bold leading-snug mt-6">
    Let's Get Connected !
  </h1>
  <p className="text-gray-100 text-xl">Get In Touch with us</p>
<Image
  src="/assets/images/contact-page-image/Contact Us.png"
  alt="Contact Us"
  width={800}
  height={800}
  priority
  quality={100}
  className="w-full h-auto shadow-xl object-cover"
/>
</div>


        {/* RIGHT COLUMN (the form) */}
        <div className="w-full max-w-full md:max-w-[600px]">
          <div className="space-y-6">
             <div className="space-y-6 p-6 rounded-lg bg-[#5F69A8]">
 
            {showThankYou ? (
              <div className="text-center space-y-4 ">
                <h2 className="text-4xl font-bold text-[#D3E9FD]">🎉 Thank You!</h2>
                <p>Your message has been sent successfully. We’ll be in touch soon.</p>
                <button
                  className="mt-4 px-6 py-3 text-white rounded-lg"
                  style={{
                    background:
                      "linear-gradient(90deg, #5F69A8, #616FB4, #657AC9, #6E8EEE, #80B3F6, #8FCDFF)",
                  }}
                  onClick={() => setShowThankYou(false)}
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 ">
                <input
                  type="text"
                  required
                  placeholder="Your Name (Example: XYZ)"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full p-3 bg-white/10 text-white placeholder-white/50 focus:outline-none backdrop-blur-sm rounded-md"
                />

                <input
                  type="email"
                  required
                  placeholder="Your Email (Example: xyz@gmail.com)"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full p-3 bg-white/10 text-white placeholder-white/50 focus:outline-none backdrop-blur-sm rounded-md"
                />

                <PhoneInput
                required
                  country={lastCountry}
                  value={form.phone}
                  onChange={(value, country) => {
                    if (country?.countryCode !== lastCountry) {
                      setLastCountry(country.countryCode);
                      setForm({ ...form, phone: "" });
                    } else {
                      setForm({ ...form, phone: value });
                    }
                  }}
                  inputProps={{
                    name: "phone",
                    required: true,
                    placeholder: "Your Phone Number",
                  }}
                  containerClass="w-full"
                  inputClass="!w-full !bg-white/10 !text-white !pl-14 !h-11 placeholder-white/50 !focus:outline-none !rounded-md !border-0 backdrop-blur-sm"
                  buttonClass="!bg-transparent !border-none !h-11"
                  dropdownClass="!bg-black/90 !text-white"
                />

                <div>
                  <label className="block text-white mb-1 rounded-md">Do you have a website?</label>
                  <div
                    onClick={() => setOpen(!open)}
                    className="p-3 bg-white/10 text-white backdrop-blur-sm cursor-pointer rounded-md"
                  >
                    {selected || "Select an option"}
                  </div>
                  {open && (
                    <ul className="bg-black/70 mt-1 rounded-md text-white ">
                      {options.map((opt) => (
                        <li
                          key={opt}
                          onClick={() => {
                            setSelected(opt);
                            setOpen(false);
                          }}
                          className="p-2 hover:bg-white/20 cursor-pointer"
                        >
                          {opt}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {selected === "Yes" && (
                  <input
                    type="text"
                    placeholder="Website URL (e.g. www.example.com)"
                    value={form.website}
                    onChange={(e) => setForm({ ...form, website: e.target.value })}
                    className="w-full p-3 bg-white/10 text-white placeholder-white/50 focus:outline-none backdrop-blur-sm rounded-md"
                  />
                )}

                <textarea
                  placeholder="Your Message"
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full p-3 bg-white/10 text-white placeholder-white/50 focus:outline-none backdrop-blur-sm rounded-md"
                ></textarea>

                

               <div className="relative w-full  flex items-center justify-center">
  <button
    type="submit"
    className="relative z-10 py-3 px-10 text-white group font-medium transition-all duration-500 ease-out overflow-hidden border-3 border-[#372935] cursor-pointer"
    style={{
      background:
        "linear-gradient(90deg, #5F69A8, #616FB4, #657AC9, #6E8EEE, #80B3F6, #8FCDFF)",
    }}
  >
    <span className="relative z-10">Send Message</span>
    {/* Gradient background on hover */}
    <span
      className="absolute inset-0 bg-gradient-to-r from-[#372935] via-black to-[#372935] scale-x-0 group-hover:scale-x-100  origin-center transition-transform duration-500 ease-out z-0 cursor-pointer"
      aria-hidden="true"
    ></span>
  </button>
</div>


              </form>
            )}
          </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
