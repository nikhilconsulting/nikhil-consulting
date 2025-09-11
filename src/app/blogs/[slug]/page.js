"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FaPinterestP, FaYoutube, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import GlassNavbar2 from "@/components/Navbar2";
import GlassFooter2 from "@/components/Footer2";

export default function BlogDetails() {
  const { slug } = useParams();

  // 1️⃣ State declarations
  const [blog, setBlog] = useState(null);
  const [allBlogs, setAllBlogs] = useState([]);
  const [latestPosts, setLatestPosts] = useState([]);

  // 2️⃣ Reading time utility
  const getReadingTime = (html) => {
    if (!html) return "0 min read";
    const plainText = html.replace(/<[^>]+>/g, '');
    const words = plainText.trim().split(/\s+/).length;
    const time = Math.ceil(words / 200);
    return `${time} min read`;
  };

  // 3️⃣ Fetch current blog
  useEffect(() => {
    if (!slug) return;
    fetch(`/api/blogs/${slug}`)
      .then((res) => res.json())
      .then((data) => setBlog(data))
      .catch((err) => console.error(err));
  }, [slug]);

  // 4️⃣ Fetch all blogs
  useEffect(() => {
    fetch(`/api/blogs`)
      .then((res) => res.json())
      .then((data) => setAllBlogs(data))
      .catch((err) => console.error(err));
  }, []);

  // 5️⃣ Calculate latest posts
  useEffect(() => {
    if (!blog || allBlogs.length === 0) return;

    const currentDate = new Date(blog.date);
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    const blogsThisMonth = allBlogs.filter((b) => {
      const bDate = new Date(b.date);
      return (
        b.slug !== blog.slug &&
        bDate.getMonth() === currentMonth &&
        bDate.getFullYear() === currentYear
      );
    });

    const blogsAfter = blogsThisMonth
      .filter((b) => new Date(b.date) > currentDate)
      .sort((a, b) => new Date(a.date) - new Date(b.date)); // ascending

    let latest = blogsAfter.slice(0, 3);

    if (latest.length < 3) {
      const oneWeekBefore = new Date(currentDate);
      oneWeekBefore.setDate(currentDate.getDate() - 7);

      const blogsBefore = blogsThisMonth
        .filter((b) => {
          const bDate = new Date(b.date);
          return bDate < currentDate && bDate >= oneWeekBefore;
        })
        .sort((a, b) => new Date(b.date) - new Date(a.date)); // descending

      latest = [...latest, ...blogsBefore.slice(0, 3 - latest.length)];
    }

    // 🔁 Sort final list by date descending
    latest.sort((a, b) => new Date(b.date) - new Date(a.date));

    setLatestPosts(latest);
  }, [blog, allBlogs]);

  // 6️⃣ Show loading state
  if (!blog) {
    return <p className="text-center text-white py-20">Loading...</p>;
  }
  return (
    <>
    <GlassNavbar2 />
    <section className="bg-gray-100">
    <div className="max-w-7xl mx-auto p-6 flex flex-col lg:flex-row gap-12 py-32">
      {/* Main Content */}
      <main className="flex-1">
        <div className="mb-6">
          <Image
            src={blog.image}
            alt={blog.title}
            width={800}
            height={450}
            className="rounded-lg object-cover w-full h-[450px]"
          />
        </div>

        <div className="mb-8">
         <div className="flex justify-between items-center text-sm font-semibold text-gray-600 mb-2 w-full">
  <span>
    {new Date(blog.date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })}
  </span>
  <span className="text-gray-600">
    {getReadingTime(blog.content)}
  </span>
</div>

          <h1 className="text-3xl font-bold mb-4">
            {blog.title} 
            </h1>
          <article
              className="text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
        </div>


        
 {/* Tags - inside a card */}
<div className="mt-8 bg-white shadow-md rounded-md p-5">
  <h3 className="text-lg font-semibold mb-4 text-gray-800">Tags</h3>
  <div className="flex flex-wrap gap-3">
    {blog.tags
      ?.split(",") // comma ke hisaab se tod do
      .map((tag) => tag.trim()) // whitespace hatao
      .map((tag) => (
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
 


   <section>
            <h4 className="text-xl font-semibold mb-4">Latest Posts</h4>
            {latestPosts.length === 0 && (
              <p className="text-gray-500">No posts available.</p>
            )}
      <div className="space-y-4">
  {latestPosts.map((post) => (
    <Link
      key={post.slug}
      href={`/blogs/${post.slug}`}
      className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 hover:bg-red-50 transition group shadow-sm"
    >
      <Image
        src={post.image || "/latest-post.jpg"}
        alt={post.title}
        width={120}
        height={90}
        className="rounded-md object-cover flex-shrink-0"
      />
      <div className="flex flex-col justify-between">
        <div>
          <h5 className="text-gray-800 font-semibold text-sm leading-snug group-hover:text-red-600 line-clamp-2">
            {post.title}
          </h5>
          <p className="text-gray-400 text-xs mt-1">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
        <span className="text-red-600 text-xs mt-2 font-medium hover:underline">
          Read more →
        </span>
      </div>
    </Link>
  ))}
</div>

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
  <Link href="/blogs">
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
  </Link>
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

    </div>
    </section>
    <GlassFooter2 />
    </>
  );
}
