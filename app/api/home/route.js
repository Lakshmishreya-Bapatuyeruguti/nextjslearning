export async function GET(request) {
  return new Response("hello");
}

export async function POST(request) {
  const res = await request.text();
  console.log(res);
  return new Response(res);
}
