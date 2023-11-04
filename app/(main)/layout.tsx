'use client';
import React, { FC } from 'react';
import { redirect } from 'next/navigation';
// libs
import { useConvexAuth } from 'convex/react';
// components
import { Spinner } from '@/components/Spinner';
import { Navigation } from './_components/Navigation';
import { SearchCommand } from '@/components/SearchCommand';

interface IProps {
  children: React.ReactNode;
}
const MainLayout: FC<IProps> = ({ children }) => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  if (isLoading) {
    return (
      <div className="h-full flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return redirect('/');
  }
  return (
    <div className="h-full flex dark:bg-[#1F1F1F]">
      <Navigation />
      <main className="flex-1 h-full overflow-y-auto">
        <SearchCommand />
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
