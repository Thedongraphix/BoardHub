'use client';

import { ReactLenis } from '@studio-freight/react-lenis';
import StyledComponentsRegistry from '../../../libs/registry';
import { GlobalStyles } from './GlobalStyles';
import { Footer, Header, Preloader } from '..';
import { useState } from 'react';
import { ThemeProvider } from '../../contexts/ThemeContext';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [complete, setComplete] = useState(false);
  return (
    <StyledComponentsRegistry>
      <ThemeProvider>
        <ReactLenis
          root
          easing={(t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))}
        >
          <GlobalStyles />
          <Preloader setComplete={setComplete} />
          <div className={complete ? 'complete' : 'not_complete'}>
            <Header />
            {children}
            <Footer />
          </div>
        </ReactLenis>
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default Layout;
