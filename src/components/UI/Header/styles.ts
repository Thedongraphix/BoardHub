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

  @media (max-width: 768px) {
    display: block;
    padding: 0.5rem;

    div {
      position: absolute;
      background: var(--green);
      width: 250px;
      height: 300px;
      border-radius: 25px;
      z-index: 1;
      top: 50px;
    }

    img {
      position: relative;
      z-index: 2;
      object-fit: cover;
      width: 24px;
      height: 24px;
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
    position: absolute;
    top: 80px;
    flex-direction: column;
    gap: 1.5rem;
    align-items: flex-start;
    right: 80px;
    z-index: 3;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

    &.active {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }

    a {
      color: var(--white);
      font-size: 1.2rem;
      font-weight: 500;
      padding: 0.5rem 0;
      
      &:hover {
        color: var(--white);
        opacity: 0.8;
      }
    }
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

export const AbsoluteLinks = styled(Link)`
  position: absolute;
  top: 40px;
  color: var(--link-color);
  font-size: 1rem;
  font-weight: 400;
`;
