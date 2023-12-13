import type { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  const requestBody = await new Response(req.body).text();
  const data = JSON.parse(requestBody);

  const { lastOilChangeKm } = data as { lastOilChangeKm: number };

  const nextOilChangeKm = lastOilChangeKm + 5000;

  return new Response(JSON.stringify({ nextOilChangeKm }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
