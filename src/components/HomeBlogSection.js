"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

function formatDate(dateStr) {
  const options = { year: "numeric", month: "short", day: "numeric" };
  return new Date(dateStr).toLocaleDateString("en-US", options);
}

export default function HomeBlogSection() {
  const [stories, setStories] = useState([]);

useEffect(() => {
  fetch("/api/blogs")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      console.log("Fetched data:", data);
      setStories(Array.isArray(data) ? data : []);
    })
    .catch((err) => console.error(err));
}, []);


  if (stories.length === 0) {
    return <p className="text-white">Loading blogs...</p>;
  }

  const featured = stories[0]; // pick first blog as featured
  const others = stories.slice(1, 4); // only next 3 blogs


  return (
    <section className="relative min-h-screen bg-[linear-gradient(to_bottom,_#382933,_#372935,_#372831)] px-4 sm:px-6 md:px-12 py-8 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
       <div className="flex justify-between items-center mb-6">
      <h2 className="text-3xl font-bold text-white">Latest Stories</h2>
      {/* Button visible only on md+ */}
      <Link
        href="/blogs"
        className="hidden md:inline-block text-base bg-[linear-gradient(90deg,#5F69A8,#616FB4,#657AC9,#6E8EEE,#80B3F6,#8FCDFF)] backdrop-blur-[15px] px-6 py-3 text-gray-100 cursor-pointer transition hover:scale-105 rounded"
      >
        See all posts
      </Link>
    </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 h-full">
          {/* Featured Blog */}
          <div className="md:col-span-2 flex flex-col">
            <div className="relative w-full h-64 sm:h-80 md:h-[450px] lg:h-[330px] rounded-xl overflow-hidden">
              {featured?.image && (
  <Image src={featured.image} alt={featured?.title || ""} fill className="object-cover" />
)}
 </div>

            <div className="mt-4">
              {/* Category + Date/Time */}
              <div className="flex justify-between items-center text-sm sm:text-base text-gray-300">
                <p>{featured?.category}</p>
                <p>
                  {formatDate(featured?.date || "")} · {featured?.readingTime}
                </p>
              </div>

              {/* Title */}
              <p className="text-2xl sm:text-3xl font-semibold text-white mt-4 sm:mt-6 leading-tight">{featured?.title}</p>

              {/* Description */}
              <div className="mt-3">
  <p className="text-gray-100 line-clamp-3 text-base text-justify ">{featured?.description}</p>
  <Link href={`/blogs/${featured?.slug}`} className="text-gray-100  text-lg md:text-base font-medium underline cursor-pointer mt-2">
    Read more →
  </Link>
</div>

            </div>
          </div>

          {/* Other Blogs */}
          <div className="flex flex-col justify-between space-y-4">
            {others.map((story) => (
              <div
                key={story.id}
                className="flex gap-4 items-start bg-[linear-gradient(90deg,#5F69A8,#616FB4,#657AC9,#6E8EEE,#80B3F6,#8FCDFF)] backdrop-blur-[15px] rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Image */}
                <Link href={`/blogs/${story.slug}` } className="relative w-30 h-30 sm:w-28 sm:h-28 rounded-lg overflow-hidden flex-shrink-0">
              {story.image && (
  <Image src={story.image} alt={story.title} fill className="object-cover" />
)}
   </Link>

                {/* Text content */}
                <div className="flex flex-col justify-between flex-1">
                  <div>
                    <p className="text-sm md:text-sm text-gray-100">{story.category}</p>
                    <span className="text-sm sm:text-lg font-semibold  text-white leading-tight">{story.title}</span>
                    <p className="text-sm sm:text-sm text-gray-100 mt-1">
                      {formatDate(story.date)} · {story.readingTime}
                    </p>
                  </div>

                  {/* Read More Button */}
                  <Link href={`/blogs/${story.slug}`} className="mt-1 text-gray-100 text-md sm:text-base underline cursor-pointer w-fit">Read more →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
         {/* Button visible only on small screens, at the bottom of the section */}
 <div className="mt-8 max-w-xs mx-auto px-4 sm:px-6 md:px-12 block md:hidden">
  <Link
    href="/blogs"
    className="w-full text-center text-lg block text-base bg-[linear-gradient(90deg,#5F69A8,#616FB4,#657AC9,#6E8EEE,#80B3F6,#8FCDFF)] backdrop-blur-[15px] py-3 text-gray-100 cursor-pointer transition hover:scale-105 rounded"
  >
    See all posts
  </Link>
</div>

      </div>
       {/* Divider */}
        <div className="absolute bottom-0 left-0 w-full z-20">
          <div
            className="h-[2px] w-full max-w-[1000px] mx-auto"
            style={{
              background:
                "linear-gradient(to right, rgba(211,233,253,0.3), rgba(211,233,253,0))",
            }}
          ></div>
        </div>
    </section>
  );
}
