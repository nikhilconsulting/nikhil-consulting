

"use client";

import React, { useState, useEffect } from 'react';
import { Eye, Pencil, Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation'; 
import DashboardLayout from '@/components/DashboardLayout';
import { baseUrl } from '@/lib/config';
import Link from 'next/link';

export default function page() {
  const [blogs, setBlogs] = useState([]);
  const [totalBlogs, setTotalBlogs] = useState(0);


  const router = useRouter();

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/dashboard/blog/recent`, {
          method: 'GET',
          credentials: 'include',
        });

        if (res.ok) {
          const data = await res.json();
          setBlogs(data.blogs || []);
          setTotalBlogs(data.total_blogs || 0);
        } else {
          console.error('Failed to fetch data. Status code:', res.status);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDashboardData();
  }, []);

  const deleteBlog = async (blogId) => {
    try {
      const response = await fetch(`${baseUrl}/api/dashboard/deleteblog/${blogId}`, {
        method: 'PUT',
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert(errorData.message || 'Failed to delete the blog.');
        return;
      }

      const result = await response.json();
      alert(result.message || 'Blog deleted successfully.');
      setBlogs(blogs.filter((blog) => blog.blog_id !== blogId));
    } catch (error) {
      console.error('Error deleting blog:', error);
      alert('Failed to delete the blog.');
    }
  };

  return (
    <DashboardLayout>
      <div className="text-2xl font-bold mb-4">Dashboard</div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 mt-3">
        {[{ label: 'Total Blogs', count: totalBlogs }].map((item) => (
  <div key={item.label} className="bg-[linear-gradient(to_bottom,_#382933,_#372935,_#372831)] text-white shadow-xl rounded-2xl p-6 flex flex-col justify-between transition hover:scale-[1.02]">
            <div className="text-base font-medium text-blue-400 mb-2">{item.label}</div>
            <div className="flex justify-between items-center mt-auto">
              <span className="text-2xl font-semibold">{item.count}</span>
              <button className="text-base cursor-pointer text-gray-100 hover:text-blue-400 hover:underline">View All</button>
            </div>
          </div>
        ))}
      </div>

      {/* Latest Blogs Table */}
      <div className="bg-white shadow-xl rounded-2xl p-4 sm:p-6">
        <div className="text-lg sm:text-xl font-bold mb-4 text-gray-800">Latest Blogs</div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left text-gray-600 whitespace-nowrap">
            <thead>
              <tr className="text-xs text-gray-500 uppercase border-b hidden md:table-row">
                <th className="py-3">S.no</th>
                <th>Image</th>
                <th>Title</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.length === 0 ? (
                <tr>
                  <td colSpan="5" className="py-3 text-center text-gray-500">
                    No blogs available
                  </td>
                </tr>
              ) : (
                blogs.map((blog, index) => (
  <tr
    key={blog.blog_id || `blog-${index}`}
    className="border-b hover:bg-gray-50 transition md:table-row flex flex-col md:flex-row mb-4 md:mb-0"
  >

                    <td className="py-3 font-medium">{index + 1}</td>
                    <td className="py-3">
                      <img
                        src={blog.blog_feature_image}
                        alt="Blog"
                        className="h-12 w-20 object-cover rounded-md shadow-sm"
                      />
                    </td>
                    <td className="py-2 px-2">{blog.blog_title}</td>
                    <td className="py-2 px-2">
                      <span className="bg-gradient-to-r from-[#5F69A8] via-[#6E8EEE] to-[#8DCBFD] text-white px-3 py-1 rounded-full text-sm font-medium">
                        {blog.formatted_blog_date}
                      </span>
                    </td>
                    <td className="py-2 px-2">
                      <div className="flex space-x-3">
                        <Link href={`${baseUrl}/blogs/${blog.blog_slug}`}>
                          <Eye className="w-4 h-4 text-slate-500 hover:text-blue-600 cursor-pointer" />
                        </Link>
                        <button onClick={() => router.push(`/dashboard/update-blog/${blog.blog_id}`)}>
                          <Pencil className="w-4 h-4 text-slate-500 hover:text-yellow-500 cursor-pointer" />
                        </button>
                        <button onClick={() => deleteBlog(blog.blog_id)}>
                          <Trash2 className="w-4 h-4 text-slate-500 hover:text-red-600 cursor-pointer" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="mt-6 text-center">
          <Link href="/dashboard/blog-table" className="w-full sm:w-auto bg-[linear-gradient(to_bottom,_#382933,_#372935,_#372831)] hover:from-red-600 hover:to-red-700 text-white px-6 py-2 rounded-full shadow-md transition">
            View All Blogs
          </Link>
        </div>
      </div>
    </DashboardLayout>
  );
}
