'use client'; // if using Next.js App Router

import { useState } from 'react';
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";


const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about-us', label: 'About Us' },
  {
    href: '/services',
    label: 'Services',
    children: [
      { href: '/services/search-engine-optimisation-page', label: 'Search Engine Optimisation (SEO)' },
      { href: '/services/local-seo-page', label: 'Local SEO' },
      { href: '/services/google-ads-page', label: 'Google Ads' },
      { href: '/services/meta-ads-page', label: 'Meta Ads' },
      { href: '/services/website-development-page', label: 'Website Development' },
      { href: '/services/social-media-marketing-page', label: 'Social Media Marketing' },
    ],
  },
  { href: '/digital-marketing-consultant', label: 'Consultancy' },
  { href: '/contact-us', label: 'Contact Us' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // for desktop
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState(null); // for mobile
  const router = useRouter();

  const handleNavigation = (href) => {
    router.push(href);
    setIsMobileMenuOpen(false); // Close menu on mobile after navigation
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-4 shadow-md sticky top-0 z-50">
      <div className="xl:container mx-auto flex items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <img
              src="/assets/images/logo/logo-2.png"
              alt="rankinventiv Logo"
              className="h-12 hover:scale-105 transition-transform"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-6 font-sans text-md">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative group"
              onMouseEnter={() => setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                onClick={() => handleNavigation(item.href)}
                className="hover:text-primary transition-all uppercase tracking-wide"
              >
                {item.label}
              </button>

              {/* Dropdown (only if children) */}
              {item.children && openDropdown === item.label && (
                <div className="absolute left-0 mt-2 bg-gray-800 shadow-lg rounded-md w-64 z-50">
                  <ul className="py-2">
                    {item.children.map((subItem) => (
                      <li key={subItem.label}>
                        <button
                          onClick={() => handleNavigation(subItem.href)}
                          className="w-full text-left px-4 py-2 hover:bg-gray-700 text-sm"
                        >
                          {subItem.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden bg-gradient-to-b from-gray-800 via-gray-900 to-black text-white">
          <ul className="flex flex-col space-y-2 py-4 px-6">
            {navItems.map((item) => (
              <li key={item.label}>
                <div>
                  <button
                    onClick={() => {
                      if (item.children) {
                        setOpenMobileSubmenu(openMobileSubmenu === item.label ? null : item.label);
                      } else {
                        handleNavigation(item.href);
                      }
                    }}
                    className="w-full text-left text-lg font-semibold hover:text-primary transition-all"
                  >
                    {item.label}
                  </button>

                  {/* Submenu on mobile */}
                  {item.children && openMobileSubmenu === item.label && (
                    <ul className="ml-4 mt-2 space-y-1">
                      {item.children.map((subItem) => (
                        <li key={subItem.label}>
                          <button
                            onClick={() => handleNavigation(subItem.href)}
                            className="block text-sm text-left w-full hover:text-primary"
                          >
                            {subItem.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
