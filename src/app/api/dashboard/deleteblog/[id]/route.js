import db from '../../../../../lib/db';
import { NextResponse } from 'next/server';

export async function PUT(request, { params }) {
  try {
    const blogId = params.id;

    if (!blogId) {
      return NextResponse.json({ message: 'Blog ID is required' }, { status: 400 });
    }

    const query = 'UPDATE blogs SET status = ? WHERE blog_id = ?';
    const [results] = await db.execute(query, ['0', blogId]);

    if (results.affectedRows === 0) {
      return NextResponse.json({ message: 'Blog not found or already marked as deleted' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Blog deleted successfully' }, { status: 200 });

  } catch (error) {
    console.error('Error processing the request:', error);
    return NextResponse.json({ message: 'Internal server error', error: error.message }, { status: 500 });
  }
}
