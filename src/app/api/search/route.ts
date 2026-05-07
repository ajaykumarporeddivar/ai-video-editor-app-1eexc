import { VIDEOS } from '@/lib/data';
import {SearchParams} from 'next/navigation';
import { URLSearchParams } from 'url';

export async function GET(request: Request): Promise<Response> {
  const query = new URLSearchParams(request.url.split('?')[1]);
  const q = query.get('q');
  const type = query.get('type');

  let results = [];

  if (q) {
    const searchQuery = q.toLowerCase();
    results = VIDEOS.filter(video => video.title.toLowerCase().includes(searchQuery) || video.description.toLowerCase().includes(searchQuery));
  } else {
    results = VIDEOS.slice(0, 5);
  }

  if (type) {
    results = results.filter(video => video.title.toLowerCase().includes(type.toLowerCase()));
  }

  return Response.json({
    ok: true,
    data: {
      results: results.slice(0, 20),
      total: results.length,
      query: q,
    },
  });
}