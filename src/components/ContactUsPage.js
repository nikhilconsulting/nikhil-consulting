"use client";
import React from 'react';
import Image from 'next/image';
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import { parsePhoneNumberFromString } from "libphonenumber-js";
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
       <section className="min-h-screen bg-gradient-to-b from-[#382933] via-[#372935] to-[#372831] text-white flex items-center justify-center px-6 py-16 pt-30">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT COLUMN (heading + text) */}
       <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl font-bold leading-snug mt-6">
    Let's Get Connected!
  </h1>
  <p className="text-white/70 text-xl">Get In Touch with us</p>
<Image
  src="/assets/images/contact-page-image/Contact Us.png"
  alt="Contact Us"
  width={800}
  height={800}
  className="w-full h-auto rounded-xl shadow-xl object-cover"
/>
</div>


        {/* RIGHT COLUMN (the form) */}
        <div className="w-full">
          <div className="space-y-6">
             <div className="space-y-6 p-6 rounded-lg bg-gradient-to-b from-[#8FCDFF]/40 via-[#5F69A8]/25 to-transparent">
 
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

                

                <button
                  type="submit"
                  className="w-full py-3 text-white font-medium rounded-md transition hover:scale-105 cursor-pointer"
                  style={{
                    background:
                      "linear-gradient(90deg, #5F69A8, #616FB4, #657AC9, #6E8EEE, #80B3F6, #8FCDFF)",
                  }}
                >
                  Send Message
                </button>
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
