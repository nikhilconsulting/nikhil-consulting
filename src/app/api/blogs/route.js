// app/api/blogs/route.js
import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

export async function GET() {
  try {
    const db = await mysql.createConnection({
      host: "127.0.0.1", // update if remote
      user: "root",
      password: "",
      database: "rankinventiv",
    });

    const [rows] = await db.execute(`
      SELECT 
        blog_id AS id,
        blog_title AS title,
        blog_description AS description,
        blog_feature_image AS image,
        blog_date_time AS date,
        blog_tag AS category,
        blog_slug AS slug
      FROM blogs 
      WHERE blog_status = '1'
      ORDER BY blog_date_time DESC
    `);

    return NextResponse.json(rows);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 });
  }
}
