"use client";

import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import "react-phone-input-2/lib/style.css";

export default function SidebarForm({ onClose }) {
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
  const [lastCountry, setLastCountry] = useState("in");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (name.trim() === "") return setError("Please enter your name.");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() === "" || !emailRegex.test(email)) {
      return setError("Please enter a valid email address.");
    }

    const phoneNumber = parsePhoneNumberFromString("+" + phone);
    if (!phoneNumber || !phoneNumber.isValid()) {
      return setError("Please enter a valid phone number.");
    }

    if (selected === "Yes" && website.trim() === "") {
      return setError("Please enter your website name.");
    }

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
        setShowThankYou(true);
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Failed to send message. Please try again later.");
    }
  };

  if (showThankYou) {
    return (
      <div className="space-y-4 text-center">
        <h3 className="text-2xl font-bold">🎉 Thank You! 🎉</h3>
        <p>Your message has been sent. We will contact you soon.</p>
        <button
          onClick={onClose}
          className="px-4 py-2 rounded text-white"
          style={{
            background:
              "linear-gradient(90deg, #5F69A8, #616FB4, #657AC9, #6E8EEE, #80B3F6, #8FCDFF)",
          }}
        >
          Close
        </button>
      </div>
    );
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your Name (e.g. John Doe)"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="p-2 bg-black/20 text-white placeholder-white/40"
      />
      <input
        type="email"
        placeholder="Your Email (e.g. john@example.com)"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="p-2 bg-black/20 text-white placeholder-white/40"
      />

      <PhoneInput
        country={lastCountry}
        value={phone}
        onChange={(value, country) => {
          if (country?.countryCode !== lastCountry) {
            setLastCountry(country.countryCode);
            setPhone("");
          } else {
            setPhone(value);
          }
        }}
        inputProps={{
          required: true,
          name: "phone",
          autoComplete: "tel",
          placeholder: "Your Phone Number",
        }}
        containerClass="w-full"
        inputClass="!w-full !bg-black/20 !text-white !pl-14 !h-11 placeholder-white/40"
        buttonClass="!bg-transparent"
      />

      <div>
        <label className="block mb-2 text-white">Do you have a website?</label>
        <div className="relative">
          <div
            onClick={() => setOpen(!open)}
            className="bg-black/20 text-white p-2 cursor-pointer"
          >
            {selected || "Select an option"}
          </div>
          {open && (
            <ul className="absolute left-0 right-0 bg-black/70 mt-1 rounded-md z-10">
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
          placeholder="Enter your website (e.g. www.example.com)"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          className="p-2 bg-black/20 text-white placeholder-white/40"
        />
      )}

      <textarea
        rows="3"
        placeholder="Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="p-2 bg-black/20 text-white placeholder-white/40"
      ></textarea>

      {error && <p className="text-red-400 text-sm">{error}</p>}

      <button
        type="submit"
        className="px-4 py-2 rounded text-white transition hover:scale-105"
        style={{
          background:
            "linear-gradient(90deg, #5F69A8, #616FB4, #657AC9, #6E8EEE, #80B3F6, #8FCDFF)",
        }}
      >
        Send Message
      </button>
    </form>
  );
}
