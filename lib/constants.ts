export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  category: string;
  attendees?: number;
  isVirtual?: boolean;
}

export const events: Event[] = [
  {
    id: '1',
    title: 'React Summit 2025',
    date: '2025-06-12',
    location: 'Amsterdam, Netherlands',
    description:
      'The biggest React conference in Europe featuring the latest updates, best practices, and insights from React core team members and industry leaders.',
    image: '/images/react-summit.jpg',
    category: 'Conference',
    attendees: 2500,
    isVirtual: false,
  },
  {
    id: '2',
    title: 'AI Hackathon: Build the Future',
    date: '2025-12-05',
    location: 'San Francisco, CA',
    description:
      '48-hour intensive hackathon focused on building AI-powered applications. Win prizes worth $50K and connect with top AI engineers and investors.',
    image: '/images/ai-hackathon.jpg',
    category: 'Hackathon',
    attendees: 500,
    isVirtual: false,
  },
  {
    id: '3',
    title: 'Web3 Developer Summit',
    date: '2025-12-15',
    location: 'Virtual Event',
    description:
      'Learn about blockchain development, smart contracts, and decentralized applications from leading Web3 developers and founders.',
    image: '/images/web3-summit.jpg',
    category: 'Conference',
    attendees: 5000,
    isVirtual: true,
  },
  {
    id: '4',
    title: 'Next.js Conf',
    date: '2025-10-24',
    location: 'San Francisco, CA',
    description:
      'Join the official Next.js conference to discover the latest features, performance optimizations, and real-world case studies from companies using Next.js at scale.',
    image: '/images/nextjs-conf.jpg',
    category: 'Conference',
    attendees: 3000,
    isVirtual: false,
  },
  {
    id: '5',
    title: 'Local Tech Meetup: Cloud Architecture',
    date: '2025-11-28',
    location: 'Austin, TX',
    description:
      "Monthly meetup for cloud engineers and architects. This month's topic: Designing scalable microservices with AWS and Kubernetes. Free pizza and networking!",
    image: '/images/cloud-meetup.jpg',
    category: 'Meetup',
    attendees: 80,
    isVirtual: false,
  },
  {
    id: '6',
    title: 'DevOps Days 2025',
    date: '2025-12-20',
    location: 'London, UK',
    description:
      'Two-day conference covering DevOps culture, CI/CD pipelines, infrastructure as code, and site reliability engineering practices.',
    image: '/images/devops-days.jpg',
    category: 'Conference',
    attendees: 1200,
    isVirtual: false,
  },
  {
    id: '7',
    title: 'Mobile Dev Hackathon',
    date: '2025-11-30',
    location: 'Virtual Event',
    description:
      'Build innovative mobile apps using React Native or Flutter. Compete for prizes and get mentorship from mobile development experts.',
    image: '/images/mobile-hackathon.jpg',
    category: 'Hackathon',
    attendees: 800,
    isVirtual: true,
  },
  {
    id: '8',
    title: 'Python Data Science Workshop',
    date: '2025-12-10',
    location: 'New York, NY',
    description:
      'Hands-on workshop covering data analysis, visualization, and machine learning with Python. Bring your laptop and dive into real datasets!',
    image: '/images/python-workshop.jpg',
    category: 'Meetup',
    attendees: 150,
    isVirtual: false,
  },
];
