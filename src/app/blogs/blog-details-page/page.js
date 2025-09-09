"use client";
import React from 'react';


import Image from 'next/image';
import { FaPinterestP, FaYoutube, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import GlassNavbar2 from '@/components/Navbar2';
import GlassFooter2 from '@/components/Footer2';

export default function BlogDetails() {
  return (
    <>
    <GlassNavbar2 />
    <section className="max-w-7xl mx-auto p-6 flex flex-col lg:flex-row gap-12 py-32">
      {/* Main Content */}
      <main className="flex-1">
        <div className="mb-6">
          <Image
            src="/assets/demon-slayer-giyu-tomioka-cool-desktop-wallpaper-4k.jpg" // Replace with your image path
            alt="Blog main"
            width={800}
            height={450}
            className="rounded-lg object-cover w-full h-[450px]"
          />
        </div>

        <div className="mb-8">
          <p className="text-red-600 text-sm font-semibold mb-2">December 6, 2020</p>
          <h1 className="text-3xl font-bold mb-4">
            Lorem ipsum dolor sit amet, consectetur.
          </h1>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Sed utha lacus egestas purus, eu sodales magna venenatis est. Lorem ipsum dolor sit amet,
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Sed utha lacus egestas purus, eu sodales magna venenatis est. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <div className="bg-gray-100 border-l-4 border-red-600 p-4 my-8">
            <p className="text-gray-900 font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua, sed diam
            </p>
          </div>

          <p className="text-gray-700 mb-4 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Sed utha lacus egestas purus, eu sodales magna venenatis est. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Sed utha lacus egestas purus, eu sodales magna venenatis est. Lorem ipsum dolor sit amet,
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
            Sed utha lacus egestas purus, eu sodales magna venenatis est. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>


        
 {/* Tags - inside a card */}
<div className="mt-8 bg-white shadow-md rounded-md p-5">
  <h3 className="text-lg font-semibold mb-4 text-gray-800">Tags</h3>
  <div className="flex flex-wrap gap-3">
    {['Latest Posts', 'Travel', 'Lifestyle', 'Photography', 'Food', 'Inspiration', 'Health'].map((tag) => (
      <span
        key={tag}
        className="bg-red-100 text-red-600 text-xs font-semibold px-4 py-2 rounded-full cursor-pointer hover:bg-red-200 transition"
      >
        {tag}
      </span>
    ))}
  </div>
</div>

 {/* Author section with social media */}
  <div className="flex flex-col sm:flex-row items-center gap-6 border-t border-gray-300 pt-6 mt-10">
    <Image
      src="/author.jpg" // Replace with your author image
      alt="Author"
      width={60}
      height={60}
      className="rounded-full object-cover"
    />
    <div className="flex-1">
      <h3 className="font-semibold text-lg">By Admin</h3>
      <p className="text-gray-600 text-sm max-w-md">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      {/* Social media icons */}
      <div className="flex items-center gap-4 mt-4 text-gray-600">
        <a href="#" aria-label="Pinterest" className="hover:text-red-600 transition">
          <FaPinterestP size={20} />
        </a>
        <a href="#" aria-label="YouTube" className="hover:text-red-600 transition">
          <FaYoutube size={20} />
        </a>
        <a href="#" aria-label="Facebook" className="hover:text-blue-600 transition">
          <FaFacebookF size={20} />
        </a>
        <a href="#" aria-label="Twitter" className="hover:text-blue-400 transition">
          <FaTwitter size={20} />
        </a>
        <a href="#" aria-label="LinkedIn" className="hover:text-blue-700 transition">
          <FaLinkedinIn size={20} />
        </a>
      </div>
    </div>
  </div>
      </main>
      

      {/* Sidebar */}
    <aside className="w-full lg:w-[350px] space-y-10">
 

  {/* Search */}
  <div className="relative">
    <input
      type="search"
      placeholder="Search"
      className="w-full border border-gray-300 rounded-md py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-red-600"
    />
    <svg
      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  </div>

  {/* Latest Posts */}
  <section>
    <h4 className="text-xl font-semibold mb-4">Latest Post</h4>
    {[1, 2, 3].map((item) => (
      <div key={item} className="flex items-center gap-3 mb-4">
        <Image
          src="/latest-post.jpg" // Replace with your thumbnail image
          alt="Latest Post"
          width={60}
          height={60}
          className="rounded-md object-cover"
        />
        <div>
          <p className="text-gray-700 text-sm font-semibold">
            Lorem ipsum dolor sit amet, consectetur.
          </p>
          <p className="text-gray-400 text-xs">March 25, 2021</p>
        </div>
      </div>
    ))}
  </section>

  {/* Categories */}
  <section>
    <h4 className="text-xl font-semibold mb-4">Categories</h4>
    <ul className="space-y-3">
      {['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet'].map((cat, idx) => (
        <li key={idx} className="flex items-center gap-3 text-gray-600 cursor-pointer hover:text-red-600">
          <div className="w-3 h-3 bg-red-600 rounded-full"></div>
          {cat}
        </li>
      ))}
    </ul>
  </section>

  {/* View All Blogs Card */}
  <section>
    <div className="flex items-center justify-between bg-gray-100 hover:bg-red-100 cursor-pointer rounded-md px-5 py-4">
      <h4 className="text-lg font-semibold text-gray-700">View All Blogs</h4>
      <svg
        className="w-6 h-6 text-red-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  </section>
   {/* Share This Blog */}
  <section className="border border-gray-300 rounded-md p-5">
    <h4 className="text-xl font-semibold mb-4">Share this Blog</h4>
    <div className="flex items-center gap-5 text-gray-600">
      <button aria-label="Share on Pinterest" className="hover:text-red-600">
        <FaPinterestP size={24} />
      </button>
      <button aria-label="Share on YouTube" className="hover:text-red-600">
        <FaYoutube size={24} />
      </button>
      <button aria-label="Share on Facebook" className="hover:text-blue-600">
        <FaFacebookF size={24} />
      </button>
      <button aria-label="Share on Twitter" className="hover:text-blue-400">
        <FaTwitter size={24} />
      </button>
      <button aria-label="Share on LinkedIn" className="hover:text-blue-700">
        <FaLinkedinIn size={24} />
      </button>
    </div>
  </section>
</aside>

    </section>
    <GlassFooter2 />
    </>
  );
}
