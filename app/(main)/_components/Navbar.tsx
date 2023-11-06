'use client';

import { useQuery } from 'convex/react';
import { useParams } from 'next/navigation';
import { useMediaQuery } from 'usehooks-ts';

import { MenuIcon } from 'lucide-react';

import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel';

import { Title } from './Title';
import { Banner } from './Banner';
import { Menu } from './Menu';
import { Publish } from './Publish';

interface NavbarProps {
  isCollapsed: boolean;
  onResetWidth: () => void;
}

export const Navbar = ({ isCollapsed, onResetWidth }: NavbarProps) => {
  const params = useParams();
  const isMobile = useMediaQuery('(max-width: 768px)');

  const document = useQuery(api.documents.getById, {
    documentId: params.documentId as Id<'documents'>,
  });

  if (document === undefined) {
    return (
      <nav className="bg-background dark:bg-[#1F1F1F] px-3 py-2 w-full flex items-center justify-between">
        <Title.Skeleton />
        <div className="flex items-center gap-x-2">
          <Menu.Skeleton />
        </div>
      </nav>
    );
  }

  if (document === null) {
    return null;
  }

  const mobile = isMobile && isCollapsed;
  const desktop = !isMobile;

  return (
    <>
      <nav className="bg-background dark:bg-[#1F1F1F] px-3 py-2 w-full flex items-center gap-x-4">
        {isCollapsed && (
          <MenuIcon
            role="button"
            onClick={onResetWidth}
            className="h-6 w-6 text-muted-foreground"
          />
        )}
        {mobile || desktop ? (
          <div className="flex items-center justify-between w-full">
            <Title initialData={document} />
            <div className="flex items-center gap-x-2">
              <Publish initialData={document} />
              <Menu documentId={document._id} />
            </div>
          </div>
        ) : null}
      </nav>
      {document.isArchived && <Banner documentId={document._id} />}
    </>
  );
};
