import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'AI Video Editor — Revolutionize Your Video Editing Experience',
  description: 'Streamline your video editing process with our AI-powered video editor',
};

interface LayoutProps {
  children: ReactNode;
}

export function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={inter.className} >
      <head />
      <body className="bg-zinc-50 antialiased">
        <div className="fixed top-0 z-50 bg-zinc-900 text-zinc-100 text-xs px-4 py-2 flex justify-between items-center w-full">
          ⚡ Demo Mode — AI Video Editor · Built with NEXUS OS
          <a href="/dashboard" className="text-zinc-100 hover:text-zinc-200">Open Dashboard →</a>
        </div>
        <div className="pt-9">{children}</div>
      </body>
    </html>
  );
}