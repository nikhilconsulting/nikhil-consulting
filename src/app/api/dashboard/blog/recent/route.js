// app/api/dashboard/blog/recent/route.js

import pool from '../../../../../lib/db'; // ✅ use the exported pool

export async function GET() {
  try {
    const [blogCountResult] = await pool.query(`
      SELECT COUNT(*) AS total_blogs
      FROM blogs
      WHERE status = '1' AND blog_status = '1'
    `);

    const [recentBlogs] = await pool.query(`
      SELECT 
        blog_id,
        blog_slug,
        blog_title,
        blog_description,
        blog_tag,
        blog_category_id,
        status,
        blog_feature_image,
        blog_content,
        blog_publisher_id,
        DATE_FORMAT(blog_date_time, '%d %M %Y') AS formatted_blog_date
      FROM blogs
      WHERE status = '1' AND blog_status = '1'
      ORDER BY blog_date_time DESC
      LIMIT 10
    `);

    return Response.json({
      total_blogs: blogCountResult[0].total_blogs,
      blogs: recentBlogs,
    });

  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    return Response.json({
      error: "Failed to fetch data",
      details: error.message
    }, {
      status: 500,
    });
  }
}
