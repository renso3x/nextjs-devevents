import { Event } from '@/database';
import connectToDatabase from '@/lib/mongodb';
import { NextRequest, NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();

    const formData = await req.formData();

    let event;

    try {
      event = Object.fromEntries(formData.entries());
    } catch (error) {
      return NextResponse.json(
        { message: 'Failed to parse form data', error },
        { status: 400 }
      );
    }

    const file = formData.get('image') as File | null;

    if (!file) {
      return NextResponse.json(
        { message: 'Image file is required' },
        { status: 400 }
      );
    }

    // Handle both File objects and string paths
    let buffer: Buffer;
    if (typeof file === 'string') {
      // If it's a string path, we can't upload it - this shouldn't happen in production
      return NextResponse.json(
        { message: 'Invalid file format' },
        { status: 400 }
      );
    } else {
      const bytes = await file.arrayBuffer();
      buffer = Buffer.from(bytes);
    }

    const uploadResult = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          { resource_type: 'image', folder: 'DevEvent' },
          (error, result) => {
            if (error) return reject(error);
            resolve(result);
          }
        )
        .end(buffer);
    });

    event.image = (uploadResult as { secure_url: string }).secure_url;

    const newEvent = await Event.create(event);
    const response = {
      message: 'Event created successfully',
      event: newEvent,
    };

    return NextResponse.json(response, { status: 201 });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      {
        message: 'Failed to create event',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectToDatabase();
    const events = await Event.find().sort({ createdAt: -1 });
    return NextResponse.json({ events }, { status: 200 });
  } catch {
    return NextResponse.json(
      { message: 'Failed to fetch events' },
      { status: 500 }
    );
  }
}
