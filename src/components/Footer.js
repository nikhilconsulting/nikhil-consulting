"use client";
import { useState, useEffect } from "react";

export default function GlassFooter() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="px-6 py-12 text-center bg-[linear-gradient(90deg,#5F69A8,#616FB4,#657AC9,#6E8EEE,#80B3F6,#8FCDFF)] text-white backdrop-blur-[15px] gap-4 text-lg">
      {/* Brand Section */}
      <div>
        <h2 className="text-[1.8rem] font-bold mb-4">Brand</h2>
        <p className="max-w-5xl mx-auto leading-relaxed ">
          Sed perspiciatis unde omnis natus doloremque laudantium totae
          Sed perspiciatis unde omnis natus doloremque laudantium totae
          Sed perspiciatis unde omnis natus doloremque laudantium totae
          Sed perspiciatis unde omnis natus doloremque laudantium totae
          Sed perspiciatis unde omnis natus doloremque laudantium totae
        </p>
      </div>

      {/* Contact */}
      <div>
        <h3 className="font-semibold mb-4">Get In Touch</h3>
        <p className="mb-2 mt-2">📍 55 Main Street, 2nd block Malborne, Australia</p>
       <a href="mailto:info@example.com" className="mb-2 block hover:underline">
  ✉ info@example.com
</a>

<a href="tel:+00012345688" className="block hover:underline">
  📞 +000 (123) 456 88
</a>

      </div>

      {/* Footer Bottom */}
      <div className="col-span-full mt-10 border-t border-white/30 pt-5 flex flex-col sm:flex-row items-center justify-between text-sm">
        <div className="flex gap-6 mb-4 sm:mb-0">
          <a href="/privacy-policy" className="hover:underline text-xs">
            Privacy Policy
          </a> |
          <a href="/terms-of-services" className="hover:underline text-xs">
            Terms of Service
          </a>
        </div>
        <p className="text-base">© {new Date().getFullYear()} All Rights Reserved</p>
      </div>
    </footer>
  );
}
