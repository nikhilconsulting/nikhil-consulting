import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

export async function GET(req, { params }) {
  try {
    const db = await mysql.createConnection({
      host: "sql12.freesqldatabase.com",
      user: "sql12798187",
      password: "aZLl7UNLgk",
      database: "sql12798187",
    });

    const [rows] = await db.execute(
      `SELECT 
        blog_id AS id,
        blog_title AS title,
        blog_description AS description,
        blog_feature_image AS image,
        blog_date_time AS date,
        blog_tag AS tags,
        blog_category AS category,
        blog_slug AS slug,
        blog_content AS content
      FROM blogs 
      WHERE blog_status = '1' AND blog_slug = ?
      LIMIT 1`,
      [params.slug]
    );

    if (rows.length === 0) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(rows[0]);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch blog" }, { status: 500 });
  }
}
