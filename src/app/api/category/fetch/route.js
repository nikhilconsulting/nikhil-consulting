import { NextResponse } from "next/server";
import db from "../../../../../lib/db"; // path adjust karo agar alag ho

// GET /api/blog_category
export async function GET() {
  const sql = "SELECT * FROM `blog_category`";

  try {
    const [data] = await db.query(sql);
    return NextResponse.json(data, { status: 200 });
  } catch (err) {
    console.error("Database error:", err);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
