// // app/api/blogs/route.js
// import { NextResponse } from "next/server";
// import mysql from "mysql2/promise";

// // helper function to calculate reading time
// function calculateReadingTime(text) {
//   const wordsPerMinute = 200; // average reading speed
//   const words = text?.replace(/<[^>]+>/g, "") // HTML tags hatao agar hain
//                      .trim()
//                      .split(/\s+/).length || 0;
//   const minutes = Math.ceil(words / wordsPerMinute);
//   return `${minutes} min read`;
// }

// export async function GET() {
//   try {
//     const db = await mysql.createConnection({
//       host: "127.0.0.1",
//       user: "root",
//       password: "",
//       database: "rankinventiv",
//     });

//     //     const db = await mysql.createConnection({
//     //   host: "sql12.freesqldatabase.com",
//     //   user: "sql12798187",
//     //   password: "aZLl7UNLgk",
//     //   database: "sql12798187",
//     // });

//     const [rows] = await db.execute(`
//       SELECT 
//         blog_id AS id,
//         blog_title AS title,
//         blog_description AS description,
//         blog_feature_image AS image,
//         blog_date_time AS date,
//         blog_tag AS tag,
//         blog_category AS category,
//         blog_slug AS slug,
//         blog_content AS content
//       FROM blogs 
//       WHERE blog_status = '1'
//       ORDER BY blog_date_time DESC
//     `);

//     // Add dynamic reading time based on full content
//     const withReadingTime = rows.map((row) => ({
//       ...row,
//       readingTime: calculateReadingTime(row.content || row.description),
//     }));

//     return NextResponse.json(withReadingTime);
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 });
//   }
// }




// app/api/blogs/route.js
import { NextResponse } from "next/server";
import db from "../../../../public/db"; // Ensure your alias is setup correctly, else use relative path

function calculateReadingTime(text) {
  const wordsPerMinute = 200;
  const words = text?.replace(/<[^>]+>/g, "").trim().split(/\s+/).length || 0;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

export async function GET() {
  try {
    const [rows] = await db.query(`
      SELECT 
        blog_id AS id,
        blog_title AS title,
        blog_description AS description,
        blog_feature_image AS image,
        blog_date_time AS date,
        blog_tag AS tag,
        blog_category AS category,
        blog_slug AS slug,
        blog_content AS content
      FROM blogs 
      WHERE blog_status = '1'
      ORDER BY blog_date_time DESC
    `);

    const withReadingTime = rows.map((row) => ({
      ...row,
      readingTime: calculateReadingTime(row.content || row.description),
    }));

    return NextResponse.json(withReadingTime);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 });
  }
}
