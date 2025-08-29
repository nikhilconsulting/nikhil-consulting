"use client"; // client component hona chahiye, tabhi browser events kaam karenge

import { useEffect } from "react";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export default function RootLayout({ children }) {
  useEffect(() => {
    // Right click disable
    const disableContextMenu = (e) => e.preventDefault();
    document.addEventListener("contextmenu", disableContextMenu);

    // Keyboard shortcuts disable
    const disableKeys = (e) => {
      if (e.keyCode === 123) return false; // F12
      if (e.ctrlKey && e.shiftKey && e.key === "I") return false; // Ctrl+Shift+I
      if (e.ctrlKey && e.shiftKey && e.key === "J") return false; // Ctrl+Shift+J
      if (e.ctrlKey && e.key === "U") return false; // Ctrl+U
    };
    document.addEventListener("keydown", disableKeys);

    // Cleanup function jab component unmount ho
    return () => {
      document.removeEventListener("contextmenu", disableContextMenu);
      document.removeEventListener("keydown", disableKeys);
    };
  }, []);

  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
