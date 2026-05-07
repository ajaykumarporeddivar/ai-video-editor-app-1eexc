import { VIDEOS, STATS } from '@/lib/data';

export async function GET(): Promise<Response> {
  return new Response(JSON.stringify({
    ok: true,
    data: {
      videos: VIDEOS,
      stats: STATS,
      total: VIDEOS.length,
    },
  }), {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  });
}

export async function POST(request: Request): Promise<Response> {
  try {
    const body = await request.json();
    return Response.json({
      ok: true,
      message: 'Demo mode — data not persisted',
      received: body,
    });
  } catch (error) {
    return Response.json({
      ok: false,
      message: 'Invalid JSON payload',
    }, { status: 400 });
  }
}

export async function OPTIONS(): Promise<Response> {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
    status: 200,
  });
}