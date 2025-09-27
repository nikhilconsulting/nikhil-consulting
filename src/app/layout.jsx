"use client";

import React, { useEffect } from "react";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export default function RootLayout({ children }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const disableContextMenu = (e) => e.preventDefault();
      const disableKeys = (e) => {
        if (e.keyCode === 123) return false; // F12
        if (e.ctrlKey && e.shiftKey && e.key === "I") return false;
        if (e.ctrlKey && e.shiftKey && e.key === "J") return false;
        if (e.ctrlKey && e.key === "U") return false;
      };

      document.addEventListener("contextmenu", disableContextMenu);
      document.addEventListener("keydown", disableKeys);

      return () => {
        document.removeEventListener("contextmenu", disableContextMenu);
        document.removeEventListener("keydown", disableKeys);
      };
    }
  }, []);

  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
