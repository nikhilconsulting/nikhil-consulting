import { IncomingForm } from 'formidable';
import fs from 'fs';
import path from 'path';
import db from '../../../../../lib/db'; // adjust this import according to your db setup

export const config = {
  api: {
    bodyParser: false,  // disable default body parser
  },
};

function generateSlug(title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

// e.g. src/app/api/dashboard/updateblog/[id]/route.js
export async function GET(req, { params }) {
  const { id } = params;
  try {
    const [rows] = await db.query('SELECT * FROM blogs WHERE blog_id = ?', [id]);
    if (rows.length === 0) {
      return new Response(JSON.stringify({ message: 'Blog not found' }), { status: 404 });
    }
    return new Response(JSON.stringify(rows[0]), { status: 200 });
  } catch (error) {
    console.error('DB fetch error:', error);
    return new Response(JSON.stringify({ message: 'Database error' }), { status: 500 });
  }
}


export async function PUT(req, { params }) {
  const { id } = params;

  try {
    const formData = await req.formData();

    const blog_title = formData.get('blog_title');
    const blog_tag = formData.get('blog_tag');
    const blog_category_id = formData.get('blog_category_id');
    const blog_description = formData.get('blog_description');
    const blog_content = formData.get('blog_content');
    const blog_date = formData.get('blog_date');
    const blog_time = formData.get('blog_time');
    const blog_feature_image = formData.get('blog_feature_image');

    const blog_date_time = new Date(`${blog_date}T${blog_time}`);
    let uploadedImagePath = null;

    if (blog_feature_image && blog_feature_image.size > 0) {
      const buffer = Buffer.from(await blog_feature_image.arrayBuffer());

      const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
      if (!fs.existsSync(uploadsDir)) {
        fs.mkdirSync(uploadsDir, { recursive: true });
      }

      const fname = `blog_${Date.now()}_${blog_feature_image.name}`;
      const filePath = path.join(uploadsDir, fname);
      fs.writeFileSync(filePath, buffer);
      uploadedImagePath = `/uploads/${fname}`;
    }

    // Update blog in DB
    await db.query(
      `UPDATE blogs SET 
        blog_title = ?, 
        blog_tag = ?, 
        blog_category_id = ?, 
        blog_description = ?, 
        blog_content = ?, 
        blog_date_time = ?, 
        blog_feature_image = COALESCE(?, blog_feature_image)
      WHERE blog_id = ?`,
      [
        blog_title,
        blog_tag,
        blog_category_id,
        blog_description,
        blog_content,
        blog_date_time,
        uploadedImagePath,
        id
      ]
    );

    return new Response(JSON.stringify({
      success: true,
      message: 'Blog updated successfully',
      updatedImage: uploadedImagePath
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: 'Error updating blog', error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}



