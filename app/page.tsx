import { IEvent } from '@/database';
import ExploreButton from '../components/ExploreButton';
import EventCard from '@/components/EventCard';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
const page = async () => {
  const resposnse = await fetch(`${BASE_URL}/api/events`, {
    cache: 'no-store',
  });
  const data = await resposnse.json();
  const events = data.events;

  return (
    <section>
      <h1 className="text-center">
        The Hub for Every Dev <br /> Event You Can't Miss
      </h1>
      <p className="text-center mt-5">
        Hackathons, Meetups, and Conferences, All in One Place
      </p>

      <ExploreButton />

      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>
        <ul className="events">
          {events.map((event: IEvent) => (
            <EventCard key={event.slug} {...event} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default page;
