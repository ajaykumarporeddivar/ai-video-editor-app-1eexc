import { DemoUser, Video, Project, Plan } from './types';

export const DEMO_USER: DemoUser = {
  id: '12345',
  name: 'Emily Chen',
  email: 'emily.chen@example.com',
  role: 'Admin',
  plan: 'Pro',
  avatar: 'https://example.com-avatar.jpg',
  joinedAt: '2023-01-01T12:00:00.000Z',
};

export const VIDEOS: Video[] = [
  {
    id: '1',
    title: 'Introduction to Video Editing',
    description: 'Learn the basics of video editing',
    createdAt: '2023-01-01T12:00:00.000Z',
    updatedAt: '2023-01-01T12:00:00.000Z',
    status: 'published',
    duration: 3600,
    views: 1000,
    likes: 50,
    comments: 20,
  },
  {
    id: '2',
    title: 'Advanced Video Editing Techniques',
    description: 'Take your video editing skills to the next level',
    createdAt: '2023-01-15T12:00:00.000Z',
    updatedAt: '2023-01-15T12:00:00.000Z',
    status: 'published',
    duration: 7200,
    views: 500,
    likes: 20,
    comments: 10,
  },
  {
    id: '3',
    title: 'Video Editing for Beginners',
    description: 'Get started with video editing',
    createdAt: '2023-02-01T12:00:00.000Z',
    updatedAt: '2023-02-01T12:00:00.000Z',
    status: 'draft',
    duration: 3600,
    views: 0,
    likes: 0,
    comments: 0,
  },
  // More videos...
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Video Editing Project',
    description: 'A video editing project',
    createdAt: '2023-01-01T12:00:00.000Z',
    updatedAt: '2023-01-01T12:00:00.000Z',
    status: 'in_progress',
    videos: [VIDEOS[0], VIDEOS[1]],
  },
  {
    id: '2',
    title: 'Advanced Video Editing Project',
    description: 'An advanced video editing project',
    createdAt: '2023-02-01T12:00:00.000Z',
    updatedAt: '2023-02-01T12:00:00.000Z',
    status: 'completed',
    videos: [VIDEOS[1], VIDEOS[2]],
  },
  {
    id: '3',
    title: 'Video Editing for Beginners Project',
    description: 'A project for video editing beginners',
    createdAt: '2023-03-01T12:00:00.000Z',
    updatedAt: '2023-03-01T12:00:00.000Z',
    status: 'in_progress',
    videos: [VIDEOS[0], VIDEOS[2]],
  },
  // More projects...
];

export const PLANS: Plan[] = [
  {
    id: '1',
    name: 'Free',
    description: 'A free plan',
    price: 0,
    features: ['video editing', 'basic effects'],
  },
  {
    id: '2',
    name: 'Pro',
    description: 'A professional plan',
    price: 99,
    features: ['video editing', 'advanced effects', 'color correction'],
  },
  {
    id: '3',
    name: 'Business',
    description: 'A business plan',
    price: 199,
    features: ['video editing', 'advanced effects', 'color correction', 'team collaboration'],
  },
  // More plans...
];

export const STATS = {
  totalRevenue: '$284,520',
  revenueGrowth: '+18.4%',
  activeUsers: 1847,
  userGrowth: '+12.1%',
};

export const CHART_DATA = {
  weekly: [42, 58, 51, 73, 88, 65, 79, 94, 71, 103, 89, 112],
  labels: ['Jan W1', 'Jan W2', 'Jan W3', 'Jan W4', 'Feb W1', 'Feb W2', 'Feb W3', 'Feb W4', 'Mar W1', 'Mar W2', 'Mar W3', 'Mar W4'],
  revenue: [18200, 22400, 19800, 31200, 27500, 32500, 28500, 39500, 29200, 37500, 34500, 42000],
};

export const SPARKLINE_DATA = {
  revenue: [78, 82, 79, 91, 88, 94, 103],
  users: [142, 158, 151, 173, 188, 165, 179],
};

export const RECENT_ACTIVITY = [
  {
    id: '1',
    action: 'Created new project',
    user: 'Emily Chen',
    avatar: 'https://example.com-avatar.jpg',
    time: '2 minutes ago',
    type: 'create',
  },
  {
    id: '2',
    action: 'Edited video',
    user: 'David Lee',
    avatar: 'https://example.com-avatar2.jpg',
    time: '5 minutes ago',
    type: 'edit',
  },
  {
    id: '3',
    action: 'Published video',
    user: 'Emily Chen',
    avatar: 'https://example.com-avatar.jpg',
    time: '10 minutes ago',
    type: 'publish',
  },
  // More recent activity...
];

export function getById<T extends { id: string }>(arr: T[], id: string): T | undefined {
  return arr.find(x => x.id === id);
}

export function formatCurrency(n: number): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(n);
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}