'use client'
import { useParams } from 'next/navigation';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { 
  Video, 
  DEMO_USER, 
  VIDEOS as MOCK_VIDEOS 
} from '@/lib/data';
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardContent, 
  Badge, 
  Button, 
  Input 
} from '@/components/ui';
import { 
  VideoCameraIcon 
} from 'lucide-react';

const params = useParams()
const slug = (params.feature as string) ?? ''

const [search, setSearch] = React.useState('');
const [filter, setFilter] = React.useState('');

const filteredVideos = MOCK_VIDEOS.filter((video) => {
  const videoTitle = video.title.toLowerCase();
  const searchQuery = search.toLowerCase();
  const filterQuery = filter.toLowerCase();

  return videoTitle.includes(searchQuery) && video.status.includes(filterQuery);
});

export default function Page() {
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
}