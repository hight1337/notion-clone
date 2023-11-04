'use client';

import React, { FC } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
// libs
import { useUser } from '@clerk/clerk-react';
import { useMutation } from 'convex/react';
import { toast } from 'sonner';
// api
import { api } from '@/convex/_generated/api';
// components
import { Button } from '@/components/ui/button';
// icons
import { PlusCircle } from 'lucide-react';
// constants
import { routes } from '@/constants/routes';

const DocumentsPage: FC = () => {
  const router = useRouter();
  const { user } = useUser();
  const create = useMutation(api.documents.create);

  const onCreate = () => {
    const promise = create({ title: 'Untitled' }).then((documentId) =>
      router.push(`${routes.documents}/${documentId}`),
    );
    toast.promise(promise, {
      loading: 'Creating a new note...',
      success: 'New note created!',
      error: 'Failed to create a new note.',
    });
  };

  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src="/empty.png"
        height="300"
        width="300"
        alt="Empty"
        className="dark:hidden"
        sizes="(max-width: 640px) 100vw, 300px"
      />
      <Image
        src="/empty-dark.png"
        height="300"
        width="300"
        alt="Empty"
        className="hidden dark:block"
        sizes="(max-width: 640px) 100vw, 300px"
      />
      <h2 className="text-lg font-medium">
        Welcome to {user?.firstName}&apos;s Notes
      </h2>
      <Button onClick={onCreate}>
        <PlusCircle className="h-4 w-4 mr-2" />
        Create a note
      </Button>
    </div>
  );
};

export default DocumentsPage;
