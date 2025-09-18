// app/api/blogs/route.js

import { NextResponse } from 'next/server';
import pool from '../../../../../../lib/db'; // ✅ Your MySQL connection pool

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);

    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "15", 10);
    const offset = (page - 1) * limit;

    // ✅ Fetch paginated blogs
    const [blogs] = await pool.query(
      `
      SELECT 
        blog_id,
        blog_slug,
        blog_title,
        blog_feature_image,
        DATE_FORMAT(blog_date_time, '%d %M %Y') AS formatted_blog_date
      FROM blogs
      WHERE status = '1' AND blog_status = '1'
      ORDER BY blog_date_time DESC
      LIMIT ? OFFSET ?
    `,
      [limit, offset]
    );

    // ✅ Get total count
    const [countResult] = await pool.query(`
      SELECT COUNT(*) AS total_blogs 
      FROM blogs 
      WHERE status = '1' AND blog_status = '1'
    `);

    return NextResponse.json({
      blogs,
      total_blogs: countResult[0].total_blogs,
      page,
      limit,
    });

  } catch (error) {
    console.error("❌ Error fetching blogs:", error.message);
    return NextResponse.json(
      { message: "Failed to fetch blogs", error: error.message },
      { status: 500 }
    );
  }
}
