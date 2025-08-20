export async function GET() {
  return new Response(
    JSON.stringify({ message: "✅ Test API is working fine!" }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}

export async function POST(request) {
  const body = await request.json();
  return new Response(
    JSON.stringify({
      message: "✅ You sent a POST request",
      data: body,
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}
