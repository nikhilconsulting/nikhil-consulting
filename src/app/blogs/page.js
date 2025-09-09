"use client";

import { FaSearch, FaPlay, FaArrowRight } from 'react-icons/fa';
import React, { useState } from 'react';
import Image from 'next/image';
import GlassNavbar2 from '@/components/Navbar2';
import GlassFooter2 from '@/components/Footer2';


export default function Home() {
  const navItems = [
  "SEO",
  "Google Ads",
  "Business",
  "Meta Ads",
  "Website",
  "Traffic",
  "Digital Marketing"
];

const [showAllNav, setShowAllNav] = useState(false);

const visibleNavItems = showAllNav ? navItems : navItems.slice(0, 5);

    const blogs = [
    { title: 'The Flash (2023) latest adventures in the multiverse and unexpected challenges', category: 'Fantasy', image: '/assets/kimetsu-no-yaiba-rengoku-with-katana-desktop-wallpaper.jpg', date: '2025-09-09' },
    { title: 'Manifest: Mystery unfolds with secrets of the past and present intertwined', category: 'Mystery', image: '/assets/demon-slayer-giyu-tomioka-cool-desktop-wallpaper-4k.jpg' , date: '2025-09-09' },
    { title: 'Elemental: Animation that brings the elements to life in a magical story', category: 'Animation', image: '/assets/demon-slayer-mitsuri-cherry-blossom-desktop-wallpaper.jpg' , date: '2025-09-09' },
    { title: 'Interstellar journeys through space and time with stunning visual effects', category: 'Sci-fi', image: '/assets/demon-slayer-tanjiro-with-katana-epic-desktop-wallpaper.jpg' , date: '2025-09-09' },
    // add more blogs here so total > 10 for pagination to make sense
    { title: 'Blog 5 Title Example', category: 'Category 5', image: '/assets/kimetsu-no-yaiba-rengoku-with-katana-desktop-wallpaper.jpg' },
    { title: 'Blog 6 Title Example', category: 'Category 6', image: '/assets/kimetsu-no-yaiba-rengoku-with-katana-desktop-wallpaper.jpg' },
    { title: 'Blog 7 Title Example', category: 'Category 7', image: '/assets/kimetsu-no-yaiba-rengoku-with-katana-desktop-wallpaper.jpg' },
    { title: 'Blog 8 Title Example', category: 'Category 8', image: '/assets/kimetsu-no-yaiba-rengoku-with-katana-desktop-wallpaper.jpg' },
    { title: 'Blog 9 Title Example', category: 'Category 9', image: '/assets/kimetsu-no-yaiba-rengoku-with-katana-desktop-wallpaper.jpg' },
    { title: 'Blog 10 Title Example', category: 'Category 10', image: '/assets/kimetsu-no-yaiba-rengoku-with-katana-desktop-wallpaper.jpg' },
    { title: 'Blog 11 Title Example', category: 'Category 11', image: '/assets/kimetsu-no-yaiba-rengoku-with-katana-desktop-wallpaper.jpg' },
    { title: 'Blog 12 Title Example', category: 'Category 12', image: '/assets/kimetsu-no-yaiba-rengoku-with-katana-desktop-wallpaper.jpg' },
  ];
const [filterDay, setFilterDay] = useState('Today');

const today = new Date();
const yesterday = new Date();
yesterday.setDate(today.getDate() + 1);

function formatDate(date) {
  return date.toISOString().split('T')[0]; // 'YYYY-MM-DD'
}

const filteredTrailers = blogs.filter((blog) => {
  if (filterDay === 'Today') {
    return blog.date === formatDate(today);
  }
  if (filterDay === 'Tomorrow') {
    return blog.date === formatDate(yesterday);
  }
  return false;
});

  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 10;

  // Calculate blogs to show on current page
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const truncateTitle = (title) => {
    const words = title.split(' ');
    return words.length > 12 ? words.slice(0, 12).join(' ') + '...' : title;
  };
  return (
<>
<GlassNavbar2 />
    <section className="bg-[#1c1c1c] text-white min-h-screen font-sans py-23">
      {/* Top Navigation */}
  <header className="flex justify-between items-center px-6 py-4 bg-[#2c2c2c]">
  {/* Search Bar Left Aligned */}
  <div className="flex items-center gap-4">
    <div className="flex items-center bg-[#3b3b3b] px-3 py-1 rounded-lg w-80">
      <FaSearch className="text-gray-400 mr-2" />
      <input
        type="text"
        placeholder="Search Categories"
        className="bg-transparent outline-none text-sm text-white placeholder-gray-400"
      />
    </div>
  </div>

  {/* Nav Items Right Aligned */}
  <nav className="flex gap-3 items-center flex-wrap">
    {visibleNavItems.map((item, index) => (
      <button
        key={index}
        className="bg-[#3b3b3b] text-gray-300 hover:bg-blue-600 hover:text-white px-4 py-1.5 rounded-full text-sm transition duration-200"
      >
        {item}
      </button>
    ))}

    {navItems.length > 5 && (
      <button
        onClick={() => setShowAllNav(!showAllNav)}
        className="bg-[#3b3b3b] text-blue-400 hover:bg-blue-700 hover:text-white px-4 py-1.5 rounded-full text-sm font-medium transition duration-200"
      >
        {showAllNav ? 'Less' : 'More'}
      </button>
    )}
  </nav>
</header>




      {/* Main Section */}
      <div className="flex px-6 py-6 space-x-6">
        {/* Left Sidebar */}
        <aside className="w-1/4 space-y-6 hidden lg:block">
         
          {/* New Posts Section */}
<div className="bg-[#2c2c2c] rounded-xl p-4">
  {/* Header with Tabs */}
  <div className="flex justify-between items-center mb-4">
    <h3 className="text-sm font-semibold text-white">🔥 New Posts</h3>
    <div className="flex gap-2 text-sm">
      {['Today', 'Yesterday'].map((day) => (
        <button
          key={day}
          onClick={() => setFilterDay(day)}
          className={`px-3 py-1 rounded-full ${
            filterDay === day
              ? 'bg-blue-600 text-white'
              : 'bg-gray-700 text-gray-400'
          }`}
        >
          {day}
        </button>
      ))}
    </div>
  </div>

  {/* Trailer Cards */}
  <div
  className="space-y-4 max-h-[400px] overflow-y-auto pr-1"
  style={{
    scrollbarWidth: 'none', // Firefox
    msOverflowStyle: 'none', // IE & Edge
  }}
  onScroll={(e) => e.target.style.setProperty('scrollbar-width', 'none')}
>
    {filteredTrailers.length === 0 ? (
      <p className="text-sm text-gray-400">No trailers for {filterDay}.</p>
    ) : (
      filteredTrailers.map((item, i) => (
    <div key={i} className="relative w-full h-40 rounded-xl overflow-hidden ">
  <Image
    src={item.image}
    alt={item.title}
    layout="fill"
    objectFit="cover"
    className="rounded-xl"
  />

  {/* Full-width black background at bottom with full title */}
  <div className="absolute bottom-0 left-0 right-0 bg-black/60 px-4 py-2">
    <p className="text-white text-sm font-semibold leading-snug">
      {item.title}
    </p>
  </div>
</div>


      ))
    )}
  </div>
    <style jsx>{`
    div::-webkit-scrollbar {
      display: none;
    }
  `}</style>

</div>


          {/* Continue Watching */}
            {/* Blog Categories with Total Counts */}
<div className="bg-[#2c2c2c] rounded-xl p-4">
  <h3 className="text-sm font-semibold mb-2">📚 Blog Categories</h3>
  <div className="space-y-3">
    {Object.entries(
      blogs.reduce((acc, blog) => {
        acc[blog.category] = (acc[blog.category] || 0) + 1;
        return acc;
      }, {})
    ).map(([category, count]) => (
      <div key={category} className="flex justify-between items-center text-sm text-gray-300">
        <span>{category}</span>
        <span className="text-blue-400">{count}</span>
      </div>
    ))}
  </div>
</div>
        

        </aside>

        {/* Main Content */}
        <main className="flex-1 space-y-8">
          {/* Featured Banner */}
        <div className="relative bg-[#333] rounded-3xl overflow-hidden p-6 md:p-10 flex flex-col md:flex-row gap-6 items-stretch">
  <div className="md:w-1/2 flex flex-col justify-center">
              <h4 className="text-sm text-blue-400 uppercase mb-1">🔥 Now Trending</h4>
               <div className="flex flex-wrap gap-2 text-sm text-gray-300 mt-2">
  <span className="bg-gray-700 px-2 py-1 rounded">🗓️ 09 Sept 2025</span>
  <span className="bg-gray-700 px-2 py-1 rounded">⏰ 07:30 PM</span>
  <span className="bg-gray-700 px-2 py-1 rounded">📅 Tuesday</span>
</div>
              <h2 className="text-3xl md:text-4xl font-bold">Spider-Man: Across the Spider-Verse the Spider-Verse the Spider-Verse </h2>
         


              <p className="text-gray-400 mt-4 text-base">Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People  Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People...
  <span className="inline-flex items-center text-gray-200 px-4 text-base font-medium cursor-pointer hover:text-white">
     Read More <FaArrowRight className="ml-2 text-sm" />
  </span>
</p>


             <div className="mt-6 flex flex-wrap items-center gap-4">
 
 <span className="text-base text-gray-300 bg-gray-700 px-4 py-2 rounded-full">
    🏷️ Category: Technology
  </span>
  <span className="text-base text-gray-300 bg-gray-700 px-4 py-2 rounded-full">
    ⏱️ 5 min read
  </span>

 
   
</div>

            </div>
            <div className="md:w-1/2 relative rounded-2xl overflow-hidden" style={{ minHeight: '300px' }}>
    <Image
      src="/assets/inosuke-demon-slayer-epic-anime-desktop-wallpaper-4k.jpg"
      alt="Spider-Man"
      layout="fill"
      objectFit="cover"
      className="rounded-2xl"
    />
  </div>
          </div>

          {/* You Might Like */}
      <section>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">You might like</h2>
        <button className="text-sm text-gray-400 hover:text-white">See all</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
       {currentBlogs.map((item, i) => (
  <div key={i} className="bg-[#2c2c2c] rounded-xl overflow-hidden shadow-lg flex flex-col">
    {/* Image */}
    <div className="relative h-40 w-full">
      <Image
        src={item.image}
        alt={item.title}
        layout="fill"
        objectFit="cover"
        className="rounded-t-xl"
      />
    </div>

    {/* Content */}
    <div className="p-4 flex flex-col flex-grow">
      <div className="flex justify-between text-base text-gray-400 mb-2">
        <span>{item.category}</span>
        <span>⏱️ 5 min read</span> {/* Replace 5 min with dynamic value if you want */}
      </div>
      <h3 className="text-sm font-semibold mt-1 mb-4">{truncateTitle(item.title)}</h3>
      <button
        className="mt-auto self-start bg-blue-600 hover:bg-blue-700 text-white text-base cursor-pointer  font-medium py-1.5 px-4 rounded"
        onClick={() => alert(`Read more about ${item.title}`)}
      >
        Read More
      </button>
    </div>
  </div>
))}

      </div>

      {/* Pagination Buttons */}
      <div className="flex justify-center items-center mt-6 space-x-4">
        <button
          className={`px-4 py-2 cursor-pointer rounded bg-gray-700 text-white disabled:opacity-50`}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <span className="text-gray-400">
          Page {currentPage} of {totalPages}
        </span>

        <button
          className={`px-4 py-2 rounded bg-gray-700 cursor-pointer text-white disabled:opacity-50`}
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </section>


        </main>
      </div>
    </section>
    <GlassFooter2 />
</>
  );
}
