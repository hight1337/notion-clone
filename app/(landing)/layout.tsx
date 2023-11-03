import React, { FC } from 'react';
import { Navbar } from './_components';

interface IProps {
  children: React.ReactNode;
}

const LandingLayout: FC<IProps> = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="h-full dark:bg-[#1F1F1F]">
      <Navbar />
      <main className="h-full pt-40">{children}</main>
    </div>
  );
};

export default LandingLayout;
