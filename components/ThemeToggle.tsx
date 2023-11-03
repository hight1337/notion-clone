'use client';

import React, { FC, useCallback } from 'react';
// hooks
import { useTheme } from 'next-themes';
// icons
import { Moon, Sun } from 'lucide-react';
// components
import { Button } from '@/components/ui/button';

export const ThemeToggle: FC = () => {
  const { setTheme, theme } = useTheme();
  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
      return;
    }
    setTheme('dark');
  };

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme}>
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
};
