'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../../contexts/ThemeContext';
import {
  ToggleWrapper,
  ToggleButton,
  ToggleTrack,
  ToggleThumb,
  IconWrapper,
  SunIcon,
  MoonIcon,
} from './styles';

const ThemeToggle = () => {
  const { theme, toggleTheme, mounted } = useTheme();
  
  // Don't render until theme is mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <ToggleWrapper>
        <ToggleButton
          aria-label="Loading theme toggle"
          style={{ opacity: 0.5, pointerEvents: 'none' }}
        >
          <ToggleTrack $isDark={true}>
            <ToggleThumb $isDark={true}>
              <IconWrapper $isDark={true}>
                <MoonIcon />
              </IconWrapper>
            </ToggleThumb>
          </ToggleTrack>
        </ToggleButton>
      </ToggleWrapper>
    );
  }

  const isDark = theme === 'dark';

  return (
    <ToggleWrapper>
      <ToggleButton
        onClick={toggleTheme}
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
        whileTap={{ scale: 0.95 }}
      >
        <ToggleTrack $isDark={isDark}>
          <ToggleThumb
            as={motion.div}
            layout
            transition={{
              type: 'spring',
              stiffness: 400,
              damping: 30,
            }}
            $isDark={isDark}
          >
            <IconWrapper $isDark={isDark}>
              {isDark ? <MoonIcon /> : <SunIcon />}
            </IconWrapper>
          </ToggleThumb>
        </ToggleTrack>
      </ToggleButton>
    </ToggleWrapper>
  );
};

export default ThemeToggle; 