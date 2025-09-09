"use client";
import Image from "next/image";
import Link from "next/link";

const stories = [
  {
    id: 1,
    title: "Los Angeles food & drinks guide: 10 things to try in LA",
    description:
      "From hidden gems in downtown LA to iconic food trucks and rooftop bars, this guide covers it  a traveler looking guide covers authentic bite, weve rounded up our top picks for your next flavor adventure all. Whether youre a local foodie or a traveler looking for an authentic bite, weve rounded up our top picks for your next flavor adventure ...",
    category: "Food and Drink",
    image: "/assets/demon-slayer-giyu-tomioka-cool-desktop-wallpaper-4k.jpg",
    date: "2025-08-20",
    readingTime: "5 min read",
    featured: true,
  },
  {
    id: 2,
    title: "12 Events London Markets You’ll Love",
    category: "Travel",
    image: "/assets/demon-slayer-mitsuri-cherry-blossom-desktop-wallpaper.jpg",
    date: "2025-08-18",
    readingTime: "4 min read",
  },
  {
    id: 3,
    title: "10 Incredible hotels around the world you can book",
    category: "Hotels",
    image: "/assets/demon-slayer-tanjiro-with-katana-epic-desktop-wallpaper.jpg",
    date: "2025-08-15",
    readingTime: "6 min read",
  },
  {
    id: 4,
    title: "Visiting Chicago on a Budget: Affordable Eats and Attractions",
    category: "Travel Budget",
    image: "/assets/kimetsu-no-yaiba-rengoku-with-katana-desktop-wallpaper.jpg",
    date: "2025-08-12",
    readingTime: "3 min read",
  },
];

function formatDate(dateStr) {
  const options = { year: "numeric", month: "short", day: "numeric" };
  return new Date(dateStr).toLocaleDateString("en-US", options);
}

export default function HomeBlogSection() {
  const featured = stories.find((s) => s.featured);
  const others = stories.filter((s) => !s.featured);

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
              <Image src={featured?.image || ""} alt={featured?.title || ""} fill className="object-cover" />
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
  <p className="text-gray-100 line-clamp-3 text-base text-justify ">{featured.description}</p>
  <button className="text-gray-100  text-lg md:text-base font-medium underline cursor-pointer mt-2">
    Read more →
  </button>
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
                <Link href="/blogs/blog-details-page" className="relative w-30 h-30 sm:w-28 sm:h-28 rounded-lg overflow-hidden flex-shrink-0">
                  <Image src={story.image} alt={story.title} fill className="object-cover" />
                </Link>

                {/* Text content */}
                <div className="flex flex-col justify-between flex-1">
                  <div>
                    <p className="text-sm md:text-sm text-gray-100">{story.category}</p>
                    <h4 className="text-sm sm:text-base font-semibold text-white leading-tight">{story.title}</h4>
                    <p className="text-sm sm:text-sm text-gray-100 mt-1">
                      {formatDate(story.date)} · {story.readingTime}
                    </p>
                  </div>

                  {/* Read More Button */}
                  <button className="mt-1 text-gray-100 text-md sm:text-base underline cursor-pointer w-fit">Read more →</button>
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
