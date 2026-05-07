'use client';

import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Lucide } from 'lucide-react';
import { useState } from 'react';
import { STATS, MOCK_VIDEOS, RECENT_ACTIVITY, DEMO_USER, CHART_DATA, SPARKLINE_DATA, formatDate, formatCurrency } from '@/lib/data';
import StatCard from '@/components/ui/StatCard';
import Card from '@/components/ui/Card';
import CardHeader from '@/components/ui/CardHeader';
import CardTitle from '@/components/ui/CardTitle';
import CardContent from '@/components/ui/CardContent';
import Badge from '@/components/ui/Badge';
import Avatar from '@/components/ui/Avatar';
import Table from '@/components/ui/Table';
import Button from '@/components/ui/Button';
import BarChart from '@/components/charts/BarChart';
import Sparkline from '@/components/charts/Sparkline';
import AppHeader from '@/components/layout/AppHeader';

export function DashboardPage() {
  const [selectedRow, setSelectedRow] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [toastMsg, setToastMsg] = useState(null);

  const handleRowClick = (row) => {
    setSelectedRow(row);
  };

  const handleToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => {
      setToastMsg(null);
    }, 2000);
  };

  return (
    <div>
      <AppHeader
        title="Dashboard"
        subtitle={`Good morning, ${DEMO_USER.name}`}
        actions={<Button size="sm">+ New Video</Button>}
      />

      <div className="grid grid-cols-4 gap-4">
        {STATS.map((stat, index) => (
          <StatCard key={index} title={stat.title} value={stat.value} sparkline={SPARKLINE_DATA[index]} />
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Video Overview</CardTitle>
            <CardContent>Last 12 weeks</CardContent>
          </CardHeader>
          <BarChart data={CHART_DATA.weekly} labels={CHART_DATA.labels} />
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            {RECENT_ACTIVITY.map((activity, index) => (
              <div key={index} className="flex items-center gap-3 py-2 border-b border-zinc-50 last:border-0">
                <Avatar src={activity.user.avatar} />
                <div>
                  <div>{activity.action}</div>
                  <div className="text-zinc-400 text-sm">{formatDate(activity.createdAt)}</div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Videos</CardTitle>
          <input type="search" placeholder="Search videos" className="ml-4" />
          <Button size="sm" className="ml-2">
            Export
          </Button>
        </CardHeader>
        <CardContent>
          <Table
            columns={[
              { name: 'Title', selector: 'title' },
              { name: 'Status', selector: 'status' },
              { name: 'Views', selector: 'views' },
              { name: 'Likes', selector: 'likes' },
            ]}
            data={MOCK_VIDEOS}
            onRowClick={handleRowClick}
          />
        </CardContent>
        <div className="p-4">
          Showing {MOCK_VIDEOS.length} of {MOCK_VIDEOS.length} results
        </div>
      </Card>

      <div className="flex gap-2">
        <Button size="sm" onClick={() => handleToast('New contract created!')}>
          New Contract
        </Button>
        <Button size="sm" onClick={() => handleToast('Invoice sent!')}>
          Send Invoice
        </Button>
        <Button size="sm" onClick={() => handleToast('Report generated!')}>
          Run Report
        </Button>
      </div>

      {toastMsg && (
        <div className="fixed bottom-4 right-4 bg-zinc-900 text-white px-4 py-2 rounded-lg text-sm">
          {toastMsg}
        </div>
      )}
    </div>
  );
}