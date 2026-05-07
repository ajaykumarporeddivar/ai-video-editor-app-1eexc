'use client';

import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Lucide } from 'lucide-react';
import AppSidebar from '@/components/layout/AppSidebar';
import AppHeader from '@/components/layout/AppHeader';
import DemoBanner from '@/components/layout/DemoBanner';
import { FORGE_FEATURES } from '@/lib/data';

export function Layout({ children }: { children: React.ReactNode }) {
  const navItems = FORGE_FEATURES.map((feature) => ({
    icon: <Lucide.File size={16} />,
    label: feature.name,
    href: `/dashboard/${feature.slug}`,
  }));

  return (
    <div className="flex min-h-screen bg-zinc-50 pt-9">
      <AppSidebar items={navItems} projectName="AI Video Editor" />
      <div className="flex-1 ml-64 flex flex-col min-h-full">
        <DemoBanner />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}