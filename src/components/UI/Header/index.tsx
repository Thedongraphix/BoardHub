'use client';

import Image from 'next/image';
import {
  Wrapper,
  Inner,
  LogoContainer,
  Nav,
  CallToActions,
  BurgerMenu,
  MobileMenuOverlay,
  MobileMenuContent,
  MobileNavLinks,
  MobileNavLink,
  CloseButton,
  MobileMenuHeader,
  MobileGetStarted,
} from './styles';
import raft_logo from '../../../../public/images/boardhublogo.png';
import { GetStartedButton } from '@/components';
import AnimatedLink from '@/components/Common/AnimatedLink';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { links, mobileMenuVariants, mobileNavLinkVariants } from './constants';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when clicking outside or pressing escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleLinkClick = (url: string) => {
    const element = document.querySelector(url);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper>
      <Inner>
        <LogoContainer>
          <Image src={raft_logo} alt="raft_logo" priority />
          <BurgerMenu onClick={toggleMenu}>
            <motion.span
              animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </BurgerMenu>
        </LogoContainer>

        {/* Desktop Navigation */}
        <Nav>
          {links.map((link, i) => (
            <a 
              key={i} 
              href={link.url}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.url);
              }}
            >
              <AnimatedLink title={link.linkTo} />
            </a>
          ))}
        </Nav>

        <CallToActions>
          <GetStartedButton padding="0.5rem 0.75rem" />
        </CallToActions>

        {/* Modern Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <MobileMenuOverlay
              as={motion.div}
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
              onClick={(e) => {
                if (e.target === e.currentTarget) setIsOpen(false);
              }}
            >
              <MobileMenuContent
                as={motion.div}
                variants={mobileMenuVariants}
              >
                <MobileMenuHeader>
                  <Image src={raft_logo} alt="raft_logo" priority />
                  <CloseButton onClick={() => setIsOpen(false)}>
                    <motion.span
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 45 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.span
                      initial={{ rotate: 0 }}
                      animate={{ rotate: -45 }}
                      transition={{ duration: 0.3 }}
                    />
                  </CloseButton>
                </MobileMenuHeader>

                <MobileNavLinks>
                  {links.map((link, i) => (
                    <MobileNavLink
                      key={i}
                      as={motion.a}
                      href={link.url}
                      variants={mobileNavLinkVariants}
                      initial="closed"
                      animate="open"
                      transition={{ delay: i * 0.1 }}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(link.url);
                      }}
                    >
                      {link.linkTo}
                    </MobileNavLink>
                  ))}
                </MobileNavLinks>

                <MobileGetStarted
                  as={motion.div}
                  variants={mobileNavLinkVariants}
                  initial="closed"
                  animate="open"
                  transition={{ delay: links.length * 0.1 }}
                >
                  <GetStartedButton padding="1rem 2rem" />
                </MobileGetStarted>
              </MobileMenuContent>
            </MobileMenuOverlay>
          )}
        </AnimatePresence>
      </Inner>
    </Wrapper>
  );
};

export default Header;
