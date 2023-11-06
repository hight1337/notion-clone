'use client';

import React, { FC } from 'react';
import Link from 'next/link';
// libs
import { useConvexAuth } from 'convex/react';
import { SignInButton, UserButton, SignUpButton } from '@clerk/clerk-react';
// hooks
import { useScrollTop } from '@/hooks/useScrollTop';
// components
import { Logo } from './Logo';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Spinner } from '@/components/Spinner';

import { Button } from '@/components/ui/button';
// constants
import { routes } from '@/constants/routes';
// utils
import { cn } from '@/lib/utils';

export const Navbar: FC = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
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
        {isLoading && <Spinner />}
        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode="modal">
              <Button variant="ghost" size="sm">
                Log in
              </Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button size="sm">Get Notes free</Button>
            </SignUpButton>
          </>
        )}
        {isAuthenticated && !isLoading && (
          <>
            <Button variant="ghost" size="sm" asChild>
              <Link href={routes.documents}>Enter Notes</Link>
            </Button>
            <UserButton afterSignOutUrl={routes.landingPage} />
          </>
        )}
        <ThemeToggle />
      </div>
    </div>
  );
};
