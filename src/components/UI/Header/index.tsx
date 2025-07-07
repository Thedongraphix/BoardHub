'use client';

import Image from 'next/image';
import {
  Wrapper,
  Inner,
  LogoContainer,
  Nav,
  CallToActions,
  BurgerMenu,
} from './styles';
import raft_logo from '../../../../public/images/boardhublogo.png';
import ic_bars from '../../../../public/svgs/ic_bars.svg';
import { GetStartedButton } from '@/components';
import AnimatedLink from '@/components/Common/AnimatedLink';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { links, menu } from './constants';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isOpen && !target.closest('.mobile-menu-container')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  const handleLinkClick = (url: string) => {
    const element = document.querySelector(url);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <Wrapper>
      <Inner>
        <LogoContainer>
          <Image src={raft_logo} alt="raft_logo" priority />
          <BurgerMenu 
            className="mobile-menu-container"
            onClick={() => setIsOpen(!isOpen)}
          >
            <motion.div
              variants={menu}
              animate={isOpen ? 'open' : 'closed'}
              initial="closed"
            ></motion.div>
            <Image src={ic_bars} alt="bars" />
          </BurgerMenu>
        </LogoContainer>
        <Nav className={`${isOpen ? 'active' : ''} mobile-menu-container`}>
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
      </Inner>
    </Wrapper>
  );
};

export default Header;
