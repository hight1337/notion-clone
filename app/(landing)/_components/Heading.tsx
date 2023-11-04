'use client';

import React, { FC } from 'react';
import Link from 'next/link';
// libs
import { SignUpButton } from '@clerk/clerk-react';
import { useConvexAuth } from 'convex/react';
// icons
import { ArrowRight } from 'lucide-react';
// components
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/Spinner';
// constants
import { routes } from '@/constants/routes';

export const Heading: FC = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your Ideas, Documents, & Plans. Unified. Welcome to{' '}
        <span className="underline">Notes</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Notes is the connected workspace where <br />
        better, faster work happens.
      </h3>
      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href={routes.documents}>
            Enter Notes
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignUpButton mode="modal">
          <Button>
            Get Notes free
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </SignUpButton>
      )}
    </div>
  );
};
