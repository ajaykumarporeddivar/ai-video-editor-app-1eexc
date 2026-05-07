'use client'
import { } from 'next';
import { clsx } from 'x';
import { twMerge } from 'wind-merge';
 { 
  Video, 
  Project, 
  Plan,  DEMO_USER, 
  VIDEOS as MOCK_VIDEOS, 
  PROJECTS as MOCK_PROJECTS 
  PLANS as MOCK_PL 
} from '@/lib/data';
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardContent, 
  Badge, 
  Button, 
  Input, 
  Modal, 
  Avatar, 
  StatCard 
} from '@/components/ui';
import { 
  VideoCameraIcon, 
  FilmIcon, 
  PuzzlePieceIcon 
} from 'lucide-react';

const params = useParams()
const slug = (params.feature as string) ?? ''

const renderFeatureView = () => {
  switch (slug) {
    case 'videos':
      return renderVideoView();
    case 'projects':
      return renderProjectView();
    case 'plans':
      return renderPlanView();
    default:
      return renderFeatureIndex();
  }
}

const renderVideoView = () => {
  const [search, setSearch] = React.useState('');
  const [filter, setFilter] = React.useState('');

  const filteredVideos = MOCK_VIDEOS.filter((video) => {
    const videoTitle = video.title.toLowerCase();
    const searchQuery = search.toLowerCase();
    const filterQuery = filter.toLowerCase();

    return videoTitle.includes(searchQuery) && video.status.includes(filterQuery);
  });

  return (
    <div className="p-4">
      <Card>
        <CardHeader>
          <CardTitle>Video Management</CardTitle>
          <div className="flex items-center space-x-4">
            <Button variant="primary" onClick={() => console.log('Create new video')}>Create New Video</Button>
            <Button variant="secondary" onClick={() => console.log('Export videos')}>Export Videos</Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4 mb-4">
            <Input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search videos"
              className={clsx('py-2 pl-10 text-sm text-zinc-600', twMerge('border border-zinc-200 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-900'))}
            />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className={clsx('py-2 pl-3 text-sm text-zinc-600', twMerge('border border-zinc-200 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-900'))}
            >
              <option value="">All Videos</option>
              <option value="published">Published</option>
              <option value="draft">Draft</option>
            </select>
          </div>
          <table className="w-full text-left table-auto">
            <thead>
              <tr className="bg-zinc-200 text-zinc-600">
                <th className="py-3 pl-4 pr-3 text-sm font-bold">Title</th>
                <th className="py-3 pl-4 pr-3 text-sm font-bold">Status</th>
                <th className="py-3 pl-4 pr-3 text-sm font-bold">Created At</th>
              </tr>
            </thead>
            <tbody>
              {filteredVideos.map((video) => (
                <tr key={video.id} className="bg-white hover:bg-zinc-100">
                  <td className="py-3 pl-4 pr-3 text-sm">{video.title}</td>
                  <td className="py-3 pl-4 pr-3 text-sm">
                    <Badge variant="primary" className={clsx('py-1 px-2 text-sm', twMerge('text-white bg-zinc-900'))}>{video.status}</Badge>
                  </td>
                  <td className="py-3 pl-4 pr-3 text-sm">{video.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
};

const renderProjectView = () => {
  const [search, setSearch] = React.useState('');
  const [filter, setFilter] = React.useState('');

  const filteredProjects = MOCK_PROJECTS.filter((project) => {
    const projectName = project.name.toLowerCase();
    const searchQuery = search.toLowerCase();
    const filterQuery = filter.toLowerCase();

    return projectName.includes(searchQuery) && project.status.includes(filterQuery);
  });

  return (
    <div className="p-4">
      <Card>
        <CardHeader>
          <CardTitle>Project Management</CardTitle>
          <div className="flex items-center space-x-4">
            <Button variant="primary" onClick={() => console.log('Create new project')}>Create New Project</Button>
            <Button variant="secondary" onClick={() => console.log('Export projects')}>Export Projects</Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4 mb-4">
            <Input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search projects"
              className={clsx('py-2 pl-10 text-sm text-zinc-600', twMerge('border border-zinc-200 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-900'))}
            />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className={clsx('py-2 pl-3 text-sm text-zinc-600', twMerge('border border-zinc-200 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-900'))}
            >
              <option value="">All Projects</option>
              <option value="published">Published</option>
              <option value="draft">Draft</option>
            </select>
          </div>
          <table className="w-full text-left table-auto">
            <thead>
              <tr className="bg-zinc-200 text-zinc-600">
                <th className="py-3 pl-4 pr-3 text-sm font-bold">Name</th>
                <th className="py-3 pl-4 pr-3 text-sm font-bold">Status</th>
                <th className="py-3 pl-4 pr-3 text-sm font-bold">Created At</th>
              </tr>
            </thead>
            <tbody>
              {filteredProjects.map((project) => (
                <tr key={project.id} className="bg-white hover:bg-zinc-100">
                  <td className="py-3 pl-4 pr-3 text-sm">{project.name}</td>
                  <td className="py-3 pl-4 pr-3 text-sm">
                    <Badge variant="primary" className={clsx('py-1 px-2 text-sm', twMerge('text-white bg-zinc-900'))}>{project.status}</Badge>
                  </td>
                  <td className="py-3 pl-4 pr-3 text-sm">{project.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
};

const renderPlanView = () => {
  const [search, setSearch] = React.useState('');
  const [filter, setFilter] = React.useState('');

  const filteredPlans = MOCK_PLANS.filter((plan) => {
    const planName = plan.name.toLowerCase();
    const searchQuery = search.toLowerCase();
    const filterQuery = filter.toLowerCase();

    return planName.includes(searchQuery) && plan.status.includes(filterQuery);
  });

  return (
    <div className="p-4">
      <Card>
        <CardHeader>
          <CardTitle>Plan Management</CardTitle>
          <div className="flex items-center space-x-4">
            <Button variant="primary" onClick={() => console.log('Create new plan')}>Create New Plan</Button>
            <Button variant="secondary" onClick={() => console.log('Export plans')}>Export Plans</Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4 mb-4">
            <Input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search plans"
              className={clsx('py-2 pl-10 text-sm text-zinc-600', twMerge('border border-zinc-200 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-900'))}
            />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className={clsx('py-2 pl-3 text-sm text-zinc-600', twMerge('border border-zinc-200 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-900'))}
            >
              <option value="">All Plans</option>
              <option value="published">Published</option>
              <option value="draft">Draft</option>
            </select>
          </div>
          <table className="w-full text-left table-auto">
            <thead>
              <tr className="bg-zinc-200 text-zinc-600">
                <th className="py-3 pl-4 pr-3 text-sm font-bold">Name</th>
                <th className="py-3 pl-4 pr-3 text-sm font-bold">Status</th>
                <th className="py-3 pl-4 pr-3 text-sm font-bold">Created At</th>
              </tr>
            </thead>
            <tbody>
              {filteredPlans.map((plan) => (
                <tr key={plan.id} className="bg-white hover:bg-zinc-100">
                  <td className="py-3 pl-4 pr-3 text-sm">{plan.name}</td>
                  <td className="py-3 pl-4 pr-3 text-sm">
                    <Badge variant="primary" className={clsx('py-1 px-2 text-sm', twMerge('text-white bg-zinc-900'))}>{plan.status}</Badge>
                  </td>
                  <td className="py-3 pl-4 pr-3 text-sm">{plan.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
};

const renderFeatureIndex = () => {
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="bg-white hover:bg-zinc-100">
        <CardHeader>
          <CardTitle>Videos</CardTitle>
          <Button variant="primary" href="/dashboard/videos">Open →</Button>
        </CardHeader>
        <CardContent>
          <p className="text-zinc-600 text-sm">Manage your videos</p>
        </CardContent>
      </Card>
      <Card className="bg-white hover:bg-zinc-100">
        <CardHeader>
          <CardTitle>Projects</CardTitle>
          <Button variant="primary" href="/dashboard/projects">Open →</Button>
        </CardHeader>
        <CardContent>
          <p className="text-zinc-600 text-sm">Manage your projects</p>
        </CardContent>
      </Card>
      <Card className="bg-white hover:bg-zinc-100">
        <CardHeader>
          <CardTitle>Plans</CardTitle>
          <Button variant="primary" href="/dashboard/plans">Open →</Button>
        </CardHeader>
        <CardContent>
          <p className="text-zinc-600 text-sm">Manage your plans</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default function Page() {
  return (
    <div className="p-4">
      {renderFeatureView()}
    </div>
  );
}