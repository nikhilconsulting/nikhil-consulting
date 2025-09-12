import mysql from "mysql2/promise";

export async function GET(req, res) {
  try {
    const db = await mysql.createConnection({
      host: "sql12.freesqldatabase.com",
      user: "sql12798187",
      password: "aZLl7UNLgk",
      database: "sql12798187",
    });

    const [blogCountResult] = await db.query(`
      SELECT COUNT(*) AS total_blogs
      FROM blogs WHERE status = '1' AND blog_status ='1'`);

   

    const [recentBlogs] = await db.query(`
      SELECT 
        blog_id AS id,
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
      LIMIT 10`);

    return new Response(JSON.stringify({
      total_blogs: blogCountResult[0].total_blogs,
      blogs: recentBlogs
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Error fetching data:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch data', details: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
