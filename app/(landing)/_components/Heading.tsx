'use_client';

import React, { FC } from 'react';
// icons
import { ArrowRight } from 'lucide-react';
// components
import { Button } from '@/components/ui/button';

export const Heading: FC = () => {
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
      <Button>
        Enter Notes <ArrowRight className="h-4 w-4 ml-2" />
      </Button>
    </div>
  );
};