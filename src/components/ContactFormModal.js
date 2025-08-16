"use client";

import { useState } from "react";

export default function ContactFormModal({ showForm, setShowForm }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [hasWebsite, setHasWebsite] = useState("No");
  const [websiteName, setWebsiteName] = useState("");
  const [error, setError] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);
      const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);
  const options = ["No", "Yes"];
  const [website, setWebsite] = useState("");

  const handleSubmit = (e) => {
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
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }
    if (hasWebsite === "Yes" && websiteName.trim() === "") {
      setError("Please enter your website name.");
      return;
    }
    if (message.trim() === "") {
      setError("Please enter your message.");
      return;
    }

    console.log("Form submitted successfully", {
      name,
      email,
      phone,
      hasWebsite,
      websiteName,
      message,
    });

    setShowThankYou(true);
  };

  if (!showForm) return null;

  return (
    <div className="fixed inset-0 bg-black/65 backdrop-blur-sm flex items-center justify-center z-[999]"onClick={() => setShowForm(false)} >
      <div className=" rounded-lg p-6 w-[600px] shadow-lg relative"
             style={{
    backgroundImage:
      "linear-gradient( rgba(255,255,255,0.2), rgba(255,255,255,0))",
    backgroundRepeat: "no-repeat",

  }}  onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          onClick={() => setShowForm(false)}
          className="absolute top-2 right-3 text-[#D3E9FD] px-3 py-1 rounded-lg cursor-pointer"
        >
          ✕
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
            <h2 className="text-2xl text-center font-bold mb-4 text-[#D3E9FD] ">Contact Us</h2>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
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
                placeholder="Your Email"
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

              <input
                type="tel"
                placeholder="Your Phone Number"
                required
                value={phone}
                onChange={(e) =>
                  setPhone(e.target.value.replace(/[^0-9]/g, ""))
                }
                className="text-white placeholder-white/40 bg-black/15 backdrop-blur-sm focus:outline-none p-2"
                maxLength="10"
                       style={{
    borderBottom: `2px solid transparent`,
    backgroundImage:
      "linear-gradient(to right, rgba(255,255,255,0.3), rgba(255,255,255,0))",
    backgroundRepeat: "no-repeat",
     backgroundSize: "100% 2px",
    backgroundPosition: "left bottom",

  }}
              />

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
          placeholder="Enter website name"
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

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <button
                type="submit"
                className="px-4 py-2 text-white rounded-lg cursor-pointer"
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
    </div>
  );
}
