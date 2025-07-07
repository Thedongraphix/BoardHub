'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  mounted: boolean;
}

const defaultContextValue: ThemeContextType = {
  theme: 'dark',
  toggleTheme: () => {},
  setTheme: () => {},
  mounted: false,
};

const ThemeContext = createContext<ThemeContextType>(defaultContextValue);

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  // Handle hydration and localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('boardhub-theme') as Theme;
    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
      setThemeState(savedTheme);
    } else {
      // Default to user's system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setThemeState(prefersDark ? 'dark' : 'light');
    }
    setMounted(true);
  }, []);

  // Update document root class and localStorage when theme changes
  useEffect(() => {
    if (mounted) {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('boardhub-theme', theme);
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setThemeState(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  const contextValue: ThemeContextType = {
    theme,
    toggleTheme,
    setTheme,
    mounted,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}; 