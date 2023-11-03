'use client';

import React, { FC } from 'react';
// hooks
import { useScrollTop } from '@/hooks/useScrollTop';
// components
import { Logo } from './Logo';
import { ThemeToggle } from '@/components/ThemeToggle';

import { Button } from '@/components/ui/button';
// utils
import { cn } from '@/lib/utils';

export const Navbar: FC = () => {
  const scrolled = useScrollTop();
  return (
    <div
      className={cn(
        'z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6',
        scrolled && 'border-b shadow-sm',
      )}
    >
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        <Button variant="ghost" size="sm">
          Log in
        </Button>
        <Button size="sm">Get Notes free</Button>
        <ThemeToggle />
      </div>
    </div>
  );
};
