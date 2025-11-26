'use server';

import Event from '@/database/event.model';
import connectToDatabase from '../mongodb';

export const getSimilarEventsBySlug = async (slug: string) => {
  try {
    await connectToDatabase();
    const events = await Event.findOne({ slug });
    const similarEvents = await Event.find({
      tags: { $in: events?.tags || [] },
      slug: { $ne: slug },
    })
      .limit(3)
      .lean();
    return similarEvents;
  } catch (error) {
    console.error('Error fetching similar events:', error);
    return [];
  }
};
