"use client";

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import axios from 'axios';
import DashboardLayout from '@/components/DashboardLayout';
import { baseUrl } from '@/lib/config';

const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false });

const editorConfig = {
  readonly: false,
  toolbar: true,
  spellcheck: true,
  language: 'en',
  toolbarButtonSize: 'medium',
  showCharsCounter: true,
  showWordsCounter: true,
  showXPathInStatusbar: false,
  askBeforePasteHTML: true,
  askBeforePasteFromWord: true,
  uploader: {
    insertImageAsBase64URI: true,
  },
  width: '100%',
  minHeight: 500,
};

export default function UpdateBlog() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id;

  const [values, setValues] = useState({
    title: '',
    tag: '',
    date: '',
    time: '',
    category: '',
    description: '',
    content: '',
  });

  const [categories, setCategories] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [existingImage, setExistingImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (!id) return;

    async function fetchBlog() {
      try {
        const res = await axios.get(`${baseUrl}/api/dashboard/updateblog/${id}`);
        const data = res.data;

        let datePart = '';
        let timePart = '';
        if (data.blog_date_time) {
          const dt = new Date(data.blog_date_time);
          datePart = dt.toISOString().split('T')[0]; // YYYY-MM-DD
          timePart = dt.toTimeString().slice(0, 5);  // HH:MM
        }

        setValues({
          title: data.blog_title ?? '',
          tag: data.blog_tag ?? '',
          date: datePart,
          time: timePart,
          category: data.blog_category_id != null ? String(data.blog_category_id) : '',
          description: data.blog_description ?? '',
          content: data.blog_content ?? '',
        });
        setExistingImage(data.blog_feature_image ?? '');
      } catch (err) {
        console.error('Failed to fetch blog:', err);
        setErrorMessage('Could not load blog data.');
      }
    }

    async function fetchCategories() {
      try {
        const res = await axios.get(`${baseUrl}/api/category/fetch`);
        setCategories(res.data);
      } catch (err) {
        console.error('Failed to fetch categories:', err);
      }
    }

    fetchBlog();
    fetchCategories();
  }, [id]);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 500 * 1024) {
      setErrorMessage('File size exceeds 500KB.');
      return;
    }
    setErrorMessage('');
    setSelectedImage(file);
  };

 const handleUpdate = async (e) => {
  e.preventDefault();
  setErrorMessage('');
  setLoading(true);

  try {
    const formData = new FormData();
    formData.append('blog_title', values.title);
    formData.append('blog_tag', values.tag);
    formData.append('blog_date', values.date);
    formData.append('blog_time', values.time);
    formData.append('blog_category_id', values.category);
    formData.append('blog_description', values.description);
    formData.append('blog_content', values.content);

    if (selectedImage) {
      formData.append('blog_feature_image', selectedImage);
    }

    const res = await fetch(`${baseUrl}/api/dashboard/updateblog/${id}`, {
      method: 'PUT',
      body: formData,
    });

    const data = await res.json();

    if (res.ok && data.success) {
      if (data.updatedImage) {
        setExistingImage(data.updatedImage); // Update state with new image url
      }
      alert('Blog updated successfully!');
      router.push('/dashboard');
    } else {
      setErrorMessage(data.message || 'Update failed');
      alert('Error: ' + (data.message || 'Update failed'));
    }
  } catch (error) {
    console.error('Error during update:', error);
    setErrorMessage('An unexpected error occurred.');
    alert('An unexpected error occurred.');
  } finally {
    setLoading(false);
  }
};


  return (
    <DashboardLayout>
      <Head>
        <title>Update Blog</title>
        <meta name="description" content="Update a blog post" />
      </Head>

      <div className="flex flex-col gap-9 p-4">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">Update Blog</h3>
          </div>

          <form onSubmit={handleUpdate} encType="multipart/form-data">
            <div className="p-6.5">
              {/* Title and Tag */}
              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">Blog Title</label>
                  <input
                    type="text"
                    name="blog_title"
                    value={values.title}
                    onChange={(e) => setValues({ ...values, title: e.target.value })}
                    placeholder="Enter Title"
                    className="w-full rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input"
                    required
                  />
                </div>
                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">Tags</label>
                  <input
                    type="text"
                    name="blog_tag"
                    value={values.tag}
                    onChange={(e) => setValues({ ...values, tag: e.target.value })}
                    placeholder="Enter Tags"
                    className="w-full rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input"
                  />
                </div>
              </div>

              {/* Image, Date & Time */}
              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">Feature Image</label>
                  <input
                    type="file"
                    name="blog_feature_image"
                    onChange={handleImageChange}
                    accept="image/*"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary dark:border-form-input"
                  />
                  {errorMessage && <p className="text-sm text-red-500 mt-2">{errorMessage}</p>}

                  {selectedImage && (
                    <img
                      src={URL.createObjectURL(selectedImage)}
                      alt="Selected Preview"
                      className="h-20 mt-2 rounded border"
                    />
                  )}

                 {!selectedImage && existingImage && (
  <img
    src={
      (existingImage.startsWith('http') ? existingImage : `${baseUrl}${existingImage}`) +
      `?t=${Date.now()}`
    }
    alt="Current Blog Feature"
    className="h-20 mt-2 rounded border"
  />
)}

                </div>

                <div className="w-full xl:w-1/2 flex gap-4">
                  <div className="w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">Date</label>
                    <input
                      type="date"
                      name="blog_date"
                      value={values.date}
                      onChange={(e) => setValues({ ...values, date: e.target.value })}
                      className="w-full rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary dark:border-form-input"
                      required
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">Time</label>
                    <input
                      type="time"
                      name="blog_time"
                      value={values.time}
                      onChange={(e) => setValues({ ...values, time: e.target.value })}
                      className="w-full rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary dark:border-form-input"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Category & Description */}
              <div className="mb-4.5 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="mb-2.5 block text-black dark:text-white">Category</label>
                  <select
                    name="blog_category_id"
                    value={values.category}
                    onChange={(e) => setValues({ ...values, category: e.target.value })}
                    className="w-full rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary dark:border-form-input"
                    required
                  >
                    <option value="">Choose Category</option>
                    {categories.map((cate) => (
                      <option key={cate.category_id} value={String(cate.category_id)}>
                        {cate.category_name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-2.5 block text-black dark:text-white">Description</label>
                  <textarea
                    name="blog_description"
                    value={values.description}
                    onChange={(e) => setValues({ ...values, description: e.target.value })}
                    className="w-full h-32 rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary dark:border-form-input"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="mb-6">
                <label className="mb-2.5 block text-black dark:text-white">Content</label>
                <JoditEditor
                  config={editorConfig}
                  value={values.content}
                  onChange={(content) => setValues({ ...values, content })}
                />
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-4.5">
                <button
                  type="button"
                  onClick={() => router.back()}
                  className="rounded border border-stroke py-2 px-6 font-medium text-black hover:bg-gray-200"
                  disabled={loading}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="rounded bg-red py-2 px-6 font-medium text-black"
                >
                  {loading ? 'Updating...' : 'Update'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
}
