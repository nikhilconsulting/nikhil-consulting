// app/api/db-test/route.js
import db from '../../../libs/db';

export async function GET() {
  try {
    const [rows] = await db.query('SELECT 1 as test');
    return new Response(JSON.stringify({ success: true, rows }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, message: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
