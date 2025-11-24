import ExploreButton from '../components/ExploreButton';
import EventCard from '@/components/EventCard';

const events = [
  {
    title: 'Tech Conference 2024',
    image: '/images/event1.png',
    slug: 'tech-conference-2024',
    location: 'San Francisco, CA',
    date: 'March 15, 2024',
    time: '10:00 AM - 5:00 PM',
  },
  {
    title: 'JavaScript Meetup',
    image: '/images/event2.png',
    slug: 'javascript-meetup',
    location: 'New York, NY',
    date: 'April 10, 2024',
    time: '6:00 PM - 9:00 PM',
  },
  {
    title: 'AI & ML Summit',
    image: '/images/event3.png',
    slug: 'ai-ml-summit',
    location: 'Boston, MA',
    date: 'May 20, 2024',
    time: '9:00 AM - 4:00 PM',
  },
  {
    title: 'Web Development Bootcamp',
    image: '/images/event4.png',
    slug: 'web-development-bootcamp',
    location: 'Chicago, IL',
    date: 'June 5, 2024',
    time: '11:00 AM - 6:00 PM',
  },
  {
    title: 'Cloud Computing Workshop',
    image: '/images/event5.png',
    slug: 'cloud-computing-workshop',
    location: 'Seattle, WA',
    date: 'July 12, 2024',
    time: '1:00 PM - 5:00 PM',
  },
  {
    title: 'Cybersecurity Conference',
    image: '/images/event6.png',
    slug: 'cybersecurity-conference',
    location: 'Austin, TX',
    date: 'August 22, 2024',
    time: '10:00 AM - 4:00 PM',
  },
];
const page = () => {
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
          {events.map((event) => (
            <EventCard key={event.slug} {...event} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default page;
