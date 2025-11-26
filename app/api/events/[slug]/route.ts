import { Event } from '@/database';
import connectToDatabase from '@/lib/mongodb';
import { NextRequest, NextResponse } from 'next/server';

interface RouteParams {
  params: {
    slug: string;
  };
}

export async function GET(_req: NextRequest, { params }: RouteParams) {
  try {
    const { slug } = await params;

    if (!slug || typeof slug !== 'string' || !slug.trim()) {
      return NextResponse.json(
        { message: 'A valid event slug is required.' },
        { status: 400 }
      );
    }

    await connectToDatabase();

    const event = await Event.findOne({
      slug: slug.toLowerCase().trim(),
    }).lean();

    if (!event) {
      return NextResponse.json(
        { message: 'Event not found.' },
        { status: 404 }
      );
    }

    // wrap response
    return NextResponse.json({ event }, { status: 200 });
  } catch (error) {
    console.error('GET /api/events/[slug] error:', error);
    return NextResponse.json(
      {
        message: 'Failed to fetch event.',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
