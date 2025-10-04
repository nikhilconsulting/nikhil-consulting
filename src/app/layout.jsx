"use client";

import React, { useEffect } from "react";
import { Roboto } from "next/font/google";
import { usePathname } from "next/navigation";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const GA_MEASUREMENT_ID = "G-PTYV5WXGR7";

function sendPageView(pathname) {
  if (typeof window.gtag === "function") {
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: pathname,
    });
  }
}

export default function RootLayout({ children }) {
  const pathname = usePathname();

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

  // Track page views on route change
  useEffect(() => {
    sendPageView(pathname);
  }, [pathname]);

  return (
    <html lang="en">
      <head>
        {/* Google Analytics Script */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
            `,
          }}
        />
      </head>
      <body className={`${roboto.variable} antialiased`}>{children}</body>
    </html>
  );
}
