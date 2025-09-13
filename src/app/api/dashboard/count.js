

export async function GET(request) {
  try {
    const [totalWebitorials] = await db.query(`
      SELECT COUNT(*) AS total_webitorials
      FROM webitorials
      WHERE status = 1
    `);



    return new Response(
      JSON.stringify({
        total_blogs: totalBlogs[0].total_blogs,

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
