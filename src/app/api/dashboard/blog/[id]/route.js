import { NextResponse } from 'next/server';
import db from '../../../../../lib/db';

export async function GET(request, { params }) {
  const { id } = params;

  const sql = `
    SELECT
      b.*,
      DATE_FORMAT(b.blog_date_time, '%Y-%m-%d') AS formatted_date,
      DATE_FORMAT(b.blog_date_time, '%H:%i:%s') AS formatted_time,
      c.category_name
    FROM
      blogs AS b
    LEFT JOIN
      blog_category AS c ON b.blog_category_id = c.category_id
    WHERE
      b.blog_id = ?`;

  try {
    const [data] = await db.query(sql, [id]);

    if (data.length === 0) {
      return NextResponse.json({ error: 'Blog not found or inactive' }, { status: 404 });
    }

    return NextResponse.json(data[0]);
  } catch (err) {
    console.error('DB Error:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
