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
  const [loading, setLoading] = useState(false); // loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (name.trim() === "") {
      setError("Please enter your name.");
      setLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() === "" || !emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    const phoneNumber = parsePhoneNumberFromString("+" + phone);
    if (!phoneNumber || !phoneNumber.isValid()) {
      setError("Please enter a valid phone number.");
      setLoading(false);
      return;
    }

    if (selected === "Yes" && website.trim() === "") {
      setError("Please enter your website name.");
      setLoading(false);
      return;
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
    setLoading(false);
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
    <form className="flex flex-col gap-3 w-[80%] max-w-md mx-auto" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your Name (e.g. John Doe)"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="p-2 bg-black/20 text-white placeholder-white/40"
        disabled={loading}
      />
      <input
        type="email"
        placeholder="Your Email (e.g. john@example.com)"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="p-2 bg-black/20 text-white placeholder-white/40"
        disabled={loading}
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
          disabled: loading,
        }}
        containerClass="w-full"
        inputClass="!w-full !bg-black/20 !text-white !pl-14 !h-11 placeholder-white/40"
        buttonClass="!bg-transparent"
      />

      <div>
        <label className="block mb-2 text-white">Do you have a website?</label>
        <div className="relative">
          <div
            onClick={() => !loading && setOpen(!open)}
            className={`bg-black/20 text-white p-2 cursor-pointer ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            {selected || "Select an option"}
          </div>
          {open && !loading && (
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
          disabled={loading}
        />
      )}

      <textarea
        rows="3"
        placeholder="Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="p-2 bg-black/20 text-white placeholder-white/40"
        disabled={loading}
      ></textarea>

      {error && <p className="text-red-400 text-sm">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="relative inline-flex items-center cursor-pointer mt-4 overflow-hidden group px-6 py-2 font-semibold text-white text-lg z-0 mx-auto disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span className="relative z-10 flex items-center gap-2">
          {loading ? "Loading..." : "Send Message"}
        </span>

        <span
          className="absolute inset-0 bg-gradient-to-r from-[#372935] via-black to-[#372935] scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-500 ease-out z-0"
          aria-hidden="true"
        ></span>

        <span
          className="absolute inset-0 bg-gradient-to-r from-[#5F69A8] via-[#6E8EEE] to-[#8DCBFD] z-[-1]"
          aria-hidden="true"
        ></span>
      </button>
    </form>
  );
}
