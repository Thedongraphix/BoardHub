'use client';

import { styled } from 'styled-components';
import { motion } from 'framer-motion';

export const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ToggleButton = styled(motion.button)`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(52, 152, 219, 0.1);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--green);
  }
`;

export const ToggleTrack = styled.div<{ $isDark: boolean }>`
  width: 3.5rem;
  height: 1.75rem;
  background: ${props => props.$isDark 
    ? 'linear-gradient(135deg, #1a1a1a, #2d2d2d)' 
    : 'linear-gradient(135deg, #e3f2fd, #bbdefb)'};
  border: 2px solid ${props => props.$isDark ? '#3d3d3d' : '#90caf9'};
  border-radius: 2rem;
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.125rem;
  box-shadow: ${props => props.$isDark 
    ? 'inset 0 2px 4px rgba(0,0,0,0.3)' 
    : 'inset 0 1px 3px rgba(0,0,0,0.1)'};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`;

export const ToggleThumb = styled.div<{ $isDark: boolean }>`
  width: 1.25rem;
  height: 1.25rem;
  background: ${props => props.$isDark 
    ? 'linear-gradient(135deg, #64b5f6, #42a5f5)' 
    : 'linear-gradient(135deg, #ffd54f, #ffb300)'};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${props => props.$isDark 
    ? '0 2px 8px rgba(100, 181, 246, 0.4)' 
    : '0 2px 8px rgba(255, 179, 0, 0.4)'};
  transform: translateX(${props => props.$isDark ? '0' : '1.5rem'});
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`;

export const IconWrapper = styled.div<{ $isDark: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.$isDark ? '#1a1a1a' : '#fff'};
  font-size: 0.75rem;
  transition: all 0.3s ease;
`;

export const SunIcon = styled.div`
  &::before {
    content: '☀️';
    font-size: 0.75rem;
  }
`;

export const MoonIcon = styled.div`
  &::before {
    content: '🌙';
    font-size: 0.75rem;
  }
`; 