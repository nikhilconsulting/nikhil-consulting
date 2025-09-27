"use client";

import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import "react-phone-input-2/lib/style.css";

export default function ConsultingFormModal({ showForm, setShowForm }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);
      const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);
  const options = ["No", "Yes"];
  const [website, setWebsite] = useState("");
  const [lastCountry, setLastCountry] = useState("in"); // default

const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");

  if (name.trim() === "") {
    setError("Please enter your name.");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.trim() === "" || !emailRegex.test(email)) {
    setError("Please enter a valid email address.");
    return;
  }

  // ✅ Phone validation with libphonenumber-js
  const phoneNumber = parsePhoneNumberFromString("+" + phone);

  if (!phoneNumber || !phoneNumber.isValid()) {
    setError("Please enter a valid phone number.");
    return;
  }

  if (selected === "Yes" && website.trim() === "") {
    setError("Please enter your website name.");
    return;
  }

  console.log("Form submitted successfully ✅", {
    name,
    email,
    phone: phoneNumber.formatInternational(), // nicely formatted number
    website,
    message,
  });

  try {
    const res = await fetch("/api/consulting", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        phone: phoneNumber.formatInternational(),
        website,
        message,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      console.log("✅ Email sent:", data);
      setShowThankYou(true);
    } else {
      console.error("❌ API error:", data);
      setError(data.error || "Something went wrong. Please try again.");
    }
  } catch (err) {
    console.error("❌ Network error:", err);
    setError("Failed to send message. Please try again later.");
  }
};




  if (!showForm) return null;

  return (
  
    <section  id="contact-us" className="fixed inset-0 bg-black/65 backdrop-blur-sm flex items-center justify-center z-[999]"onClick={() => setShowForm(false)} >
      <div className=" p-6 w-[600px] shadow-lg relative"
             style={{
    backgroundImage:
      "linear-gradient( rgba(255,255,255,0.2), rgba(255,255,255,0))",
    backgroundRepeat: "no-repeat",

  }}  onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
       <button
  onClick={() => setShowForm(false)}
  className="    absolute top-2 right-3 
    rounded-3xl
    transition-transform transform
    hover:scale-115
    cursor-pointer
    flex items-center justify-center"
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


        {/* Thank You State */}
        {showThankYou ? (
          <div className="flex flex-col items-center justify-center h-[300px] text-center gap-4" >
            <h2 className="text-5xl mb-4 font-bold text-[#D3E9FD]">🎉 Thank You! 🎉</h2>
            <p className="text-white">
              Your message has been sent successfully. <br /> We will contact you soon.
            </p>
            <button
              onClick={() => {
                setShowForm(false);
                window.location.reload();
              }}
              className="px-6 py-3 mt-4 text-white rounded-lg cursor-pointer"
              style={{
                background:
                  "linear-gradient(90deg, #5F69A8, #616FB4, #657AC9, #6E8EEE, #80B3F6, #8FCDFF)",
              }}
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-2xl text-center font-bold mb-4 text-[#D3E9FD]  ">Book Consulting</h2>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name  (Example: XYZ)"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className=" text-white placeholder-white/40 bg-black/15 backdrop-blur-sm focus:outline-none p-2"
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
                type="email"
                placeholder="Your Email  (Example: xyz@gmail.com)"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-white placeholder-white/40 bg-black/15 backdrop-blur-sm focus:outline-none p-2"
                       style={{
    borderBottom: `2px solid transparent`,
    backgroundImage:
      "linear-gradient(to right, rgba(255,255,255,0.3), rgba(255,255,255,0))",
    backgroundRepeat: "no-repeat",
     backgroundSize: "100% 2px",
    backgroundPosition: "left bottom",

  }}
              />
<PhoneInput
        country={lastCountry}
        value={phone}
        onChange={(value, country) => {
          // ✅ agar user ne country change ki
          if (country?.countryCode !== lastCountry) {
            setLastCountry(country.countryCode); // naya country save karo
            setPhone(""); // number reset karo
          } else {
            setPhone(value); // normal typing pe number set karo
          }
        }}
        inputProps={{
          required: true,
          name: "phone",
          autoComplete: "tel",
          placeholder: "Your Phone Number",
        }}
        containerClass="w-full"
        inputClass="!w-full !bg-black/15 !text-white !pl-14 !h-11 
          !focus:outline-none placeholder-white/40 backdrop-blur-sm 
          !rounded-none !border-0"
        buttonClass="!bg-transparent !border-none !flex !items-center
          !h-11 w-10 justify-center hover:!bg-transparent focus:!bg-transparent active:!bg-transparent"
        dropdownClass="!bg-black/90 !text-white !mt-65 !rounded-sm !shadow-lg max-h-60 !w-138 overflow-y-auto
          [&_li]:!px-3 [&_li]:!py-2
          [&_li:hover]:!bg-white/80 [&_li:hover]:!text-black 
          [&_li[aria-selected='true']]:!bg-white/20 [&_li[aria-selected='true']]:!text-white
          !absolute !left-0"
      />

{/* ✅ Error message */}
{error && (
  <p className="text-red-400 text-sm mt-1">{error}</p>
)}













              <div>
                <label className="block mb-3 text-[#D3E9FD]">
                  Do you have a website?
                </label>
                <div className="relative w-full">
      {/* Selected Box */}
      <div
        onClick={() => setOpen(!open)}
        className="text-white placeholder-white/40 bg-black/15 backdrop-blur-sm focus:outline-none p-2 w-full cursor-pointer"
        style={{
          borderBottom: `2px solid transparent`,
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.3), rgba(255,255,255,0))",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 2px",
          backgroundPosition: "left bottom",
        }}
      >
        {selected || "Select an option"}
      </div>

      {/* Dropdown List */}
      {open && (
        <ul className="absolute left-0 w-full bg-black/50 backdrop-blur-sm mt-1 rounded-md overflow-hidden z-10">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => {
                setSelected(option);
                setOpen(false);
              }}
              className="p-2 text-white hover:bg-white/20 cursor-pointer"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
              </div>

             {selected === "Yes" && (
        <input
          type="text"
          placeholder="Enter website name  (Example: www.xyz.com)"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          required={selected === "Yes"}
          className="text-white placeholder-white/40 bg-black/15 backdrop-blur-sm focus:outline-none p-2 w-full"
          style={{
            borderBottom: `2px solid transparent`,
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.3), rgba(255,255,255,0))",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 2px",
            backgroundPosition: "left bottom",
          }}
        />
      )}

              <textarea
                placeholder="Your Message"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="text-white placeholder-white/40 bg-black/15 backdrop-blur-sm focus:outline-none p-2"
                       style={{
    borderBottom: `2px solid transparent`,
    backgroundImage:
      "linear-gradient(to right, rgba(255,255,255,0.3), rgba(255,255,255,0))",
    backgroundRepeat: "no-repeat",
     backgroundSize: "100% 2px",
    backgroundPosition: "left bottom",

  }}
              ></textarea>

              <button
                type="submit"
                className="px-4 py-2 text-white cursor-pointer transition hover:scale-105"
                style={{
                  background:
                    "linear-gradient(90deg, #5F69A8, #616FB4, #657AC9, #6E8EEE, #80B3F6, #8FCDFF)",
                }}
              >
                Send Message
              </button>
            </form>
          </>
        )}
      </div>
    </section>
    
  );
}
