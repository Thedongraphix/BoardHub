'use client';

import Image from 'next/image';
import {
  Wrapper,
  Inner,
  LogoContainer,
  Nav,
  CallToActions,
  AbsoluteLinks,
  BurgerMenu,
} from './styles';
import raft_logo from '../../../../public/images/boardhublogo.png';
import ic_bars from '../../../../public/svgs/ic_bars.svg';
import { GetStartedButton } from '@/components';
import AnimatedLink from '@/components/Common/AnimatedLink';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { links, menu } from './constants';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Wrapper>
      <Inner>
        <LogoContainer>
          <Image src={raft_logo} alt="raft_logo" priority />
          <BurgerMenu onClick={() => setIsOpen(!isOpen)}>
            <motion.div
              variants={menu}
              animate={isOpen ? 'open' : 'closed'}
              initial="closed"
            ></motion.div>
            <Image src={ic_bars} alt="bars" />
          </BurgerMenu>
        </LogoContainer>
        <Nav className={isOpen ? 'active' : ''}>
          {links.map((link, i) => (
            <a 
              key={i} 
              href={link.url}
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector(link.url);
                element?.scrollIntoView({ behavior: 'smooth' });
                setIsOpen(false);
              }}
            >
              <AnimatedLink title={link.linkTo} />
            </a>
          ))}
        </Nav>
        <CallToActions className={isOpen ? 'active' : ''}>
          <GetStartedButton padding="0.5rem 0.75rem" />
        </CallToActions>
      </Inner>
    </Wrapper>
  );
};

export default Header;
