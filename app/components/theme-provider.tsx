'use client';

import { useState, useEffect, ReactNode } from 'react';
import { ThemeProvider as NextThemesProvider, ThemeProviderProps } from 'next-themes';

type Props = {
  children: ReactNode;
} & Omit<ThemeProviderProps, 'children'>;

export function ThemeProvider({ children, ...props }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}