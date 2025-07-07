'use client';
import Link from 'next/link';
import { styled } from 'styled-components';

export const Wrapper = styled.section`
  padding: 0.5rem 0;

  @media (max-width: 768px) {
    padding: 0.5rem 0;
  }
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
`;

export const LogoContainer = styled.div`
  img {
    width: 12rem;
    height: auto;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    
    img {
      width: 9rem;
      height: auto;
    }
  }
`;

export const BurgerMenu = styled.div`
  display: none;
  position: relative;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1001;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 24px;
    height: 24px;

    span {
      width: 24px;
      height: 2px;
      background: var(--green);
      border-radius: 2px;
      transition: all 0.3s ease;
      transform-origin: center;
    }
  }
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  gap: 3.75rem;
  position: relative;
  margin-right: -6.3rem;

  a {
    color: var(--link-color);
    font-size: 1.75rem;
    font-weight: 400;
    text-decoration: none;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: var(--green);
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const CallToActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  div {
    span {
      color: var(--white);
      font-size: 1rem;
      font-weight: 600;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

// Modern Mobile Menu Styles
export const MobileMenuOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(7, 6, 6, 0.98);
  backdrop-filter: blur(20px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const MobileMenuContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 2rem;
  position: relative;
`;

export const MobileMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4rem;

  img {
    width: 8rem;
    height: auto;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 40px;
  height: 40px;

  span {
    position: absolute;
    width: 24px;
    height: 2px;
    background: var(--white);
    border-radius: 2px;
  }
`;

export const MobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  gap: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
`;

export const MobileNavLink = styled.a`
  color: var(--white);
  font-size: 2.5rem;
  font-weight: 300;
  font-family: 'SF Pro Display', sans-serif;
  text-decoration: none;
  letter-spacing: -0.02em;
  transition: all 0.3s ease;
  position: relative;
  cursor: pointer;

  &:hover {
    color: var(--green);
    transform: translateX(10px);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 50%;
    transform: translateX(-50%) scaleX(0);
    width: 60%;
    height: 2px;
    background: var(--green);
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: translateX(-50%) scaleX(1);
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const MobileGetStarted = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 2rem;

  div {
    span {
      font-size: 1.1rem;
      font-weight: 600;
    }
  }
`;

export const AbsoluteLinks = styled(Link)`
  position: absolute;
  top: 40px;
  color: var(--link-color);
  font-size: 1rem;
  font-weight: 400;
`;
