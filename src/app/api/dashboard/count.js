

export async function GET(request) {
  try {
    const [totalWebitorials] = await db.query(`
      SELECT COUNT(*) AS total_webitorials
      FROM webitorials
      WHERE status = 1
    `);

    const [totalBlogs] = await db.query(`
      SELECT COUNT(*) AS total_blogs
      FROM blogs
      WHERE status = '1'
    `);

    const [totalMagazines] = await db.query(`
      SELECT COUNT(*) AS total_magazines
      FROM magazines
      WHERE status = '1'
    `);

    return new Response(
      JSON.stringify({
        total_webitorials: totalWebitorials[0].total_webitorials,
        total_blogs: totalBlogs[0].total_blogs,
        total_magazines: totalMagazines[0].total_magazines,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error fetching counts:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch counts" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
