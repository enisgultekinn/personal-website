import redis from '@/lib/redis';

export async function GET(_, { params }) {
  const { slug } = await params;
  const views = await redis.incr(`views:${slug}`);
  return Response.json({ views });
}
