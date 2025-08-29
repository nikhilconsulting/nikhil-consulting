"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import ContactFormModal from "./ContactFormModal";

export default function GlassNavbar2() {
  const [open, setOpen] = useState(false); // Mobile nav
  const [showForm, setShowForm] = useState(false); // Modal
  const [showContactForm, setShowContactForm] = useState(false); // 👈 New state
  // ✅ Define handler function FIRST
  const handleContactClick = () => {
    setShowContactForm(true);
    setOpen(false); // Close mobile nav if open
  };

  // ✅ Now define navItems
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/why-choose-us", label: "Why Choose Us" },
    {
      label: "Services",
      children: [
        {
          href: "/social-media-marketing-page",
          label: "Social Media Marketing ",
        },
        {
          href: "/search-engine-optimisation-page",
          label: "Search Engine Optimisation (SEO)",
        },
        { href: "/local-seo-page", label: "Local SEO" },
        {
          href: "/google-&-meta-ads-page",
          label: "Google & Meta Ads",
        },
        {
          href: "/website-development-page",
          label: "Website Development",
        },
      ],
    },
    { href: "/digital-marketing-consultant", label: "Consultancy" },
    { href: "/contact-us", label: "Contact Us" },
  ];

  // 👇 Auto-open form after 3 seconds on first visit
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 3000); // 3 sec delay

    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const footer = document.getElementById("book-consulting");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full">
        <nav
          className="relative flex items-center text-[16px] w-full gap-4 text-white bg-[linear-gradient(90deg,#5F69A8,#616FB4,#657AC9,#6E8EEE,#80B3F6,#8FCDFF)] backdrop-blur-[15px] shadow-lg px-8 py-4"
          aria-label="Main navigation"
        >
          {/* Left side (can be logo later) */}
          {/* <div className="flex-1"></div> */}

          <ul className="hidden lg:flex flex-1 justify-end xl:mr-20 gap-10 list-none text-base p-[10px] tracking-[1.0px]">
            {navItems.map((item) => (
              <li key={item.label} className="relative group">
                {!item.children ? (
                  <Link
                    href={item.href}
                    className="relative block py-2 text-white no-underline transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-white after:to-transparent after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <>
                    <button className="flex items-center gap-1 py-2 text-white transition-colors duration-200 cursor-pointer">
                      {item.label}
                      <ChevronDown
                        size={16}
                        className="transition-transform duration-300 group-hover:rotate-180 "
                      />
                    </button>
                    <ul className="absolute -left-25 opacity-0 cursor-pointer invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 flex-col gap-2 text-white bg-[linear-gradient(90deg,#5F69A8,#616FB4,#657AC9,#6E8EEE,#80B3F6,#8FCDFF)] backdrop-blur-[15px] rounded-sm mt-7 p-2 shadow-lg z-50 min-w-[330px]">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block px-4 py-2 hover:bg-white/30 hover:text-white rounded transition"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </li>
            ))}
          </ul>

          {/* Book Consulting Us Button (only desktop >= md) */}

          {/* Hamburger Icon (only < md ~ below 768px) */}
          <div className="flex lg:hidden ml-auto">
            <button
              className="text-white transition hover:scale-105"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown (only < md) */}
        {open && (
          <div className="lg:hidden w-full bg-white/5 backdrop-blur-[20px] shadow-lg border-b border-white/20 px-8 py-4">
            <ul className="list-none m-0 p-0 flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.label}>
                  {!item.children ? (
                    <Link
                      href={item.href}
                      className="text-white hover:text-gray-300"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <div>
                      <span className="text-white font-medium">
                        {item.label}
                      </span>
                      <ul className="ml-4 mt-2 flex flex-col gap-2">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className="text-white hover:text-gray-300 text-sm"
                              onClick={() => setOpen(false)}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      {/* Popup Form Component */}

      <ContactFormModal
        showForm={showContactForm}
        setShowForm={setShowContactForm}
      />
    </>
  );
}
