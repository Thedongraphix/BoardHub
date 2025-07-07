'use client';
import { styled } from 'styled-components';
import hero_background from '../../../../public/images/grid_background.png';

export const Wrapper = styled.section`
  margin-top: 10.5rem;
  padding-bottom: 3.5rem;

  @media (max-width: 768px) {
    margin-top: 6.25rem;
  }
`;

export const Inner = styled.div`
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
`;

export const Header = styled.header`
  max-width: 52rem;
  margin: 0 auto 4.5rem;
  text-align: center;
  background: url(${hero_background.src}) no-repeat;
  background-position: top center;
  background-size: contain;
  padding-top: 2rem;

  h1 {
    font-size: 5.5rem;
    font-weight: 500;
    margin-bottom: 1.5rem;
  }
  p {
    font-size: 1.25rem;
    line-height: 1.6;
    color: var(--link-color);
  }
  @media (max-width: 768px) {
    margin-bottom: 2.5rem;
    padding-top: 1rem;
    h1 {
      font-size: 3rem;
      font-weight: 500;
    }
    p {
      font-size: 1rem;
    }
  }
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 4rem;
  padding: 3rem;
  border-radius: 1.5rem;
  background: var(--card-bg);
  min-height: 22rem;

  h3 {
    font-size: 1.75rem;
    font-weight: 500;
    margin-bottom: 0.75rem;
    color: var(--text-primary);
  }

  p {
    color: var(--text-secondary);
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    padding: 2rem;
    text-align: center;
    h3 {
      font-size: 1.5rem;
    }
  }
`;

export const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;
  z-index: 2;

  h2 {
    font-size: 3rem;
    font-weight: 600;
  }

  p {
    font-size: 1.125rem;
    line-height: 1.6;
    color: var(--link-color);
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 2rem;
      font-weight: 600;
    }
    p {
      font-size: 1rem;
    }
  }
`;

export const ContentIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;

  img {
    width: 8rem;
    height: 8rem;
    object-fit: contain;
    filter: brightness(0) invert(1);
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    order: -1;
    img {
      width: 5rem;
      height: 5rem;
    }
  }
`;

export const SliderNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2.5rem;

  @media (max-width: 768px) {
    justify-content: center;
    margin-top: 2rem;
    gap: 1rem;
  }
`;

export const NavigationButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

export const SlideIndicators = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Indicator = styled.div<{ $active?: boolean }>`
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  background: ${props => props.$active ? 'var(--green)' : 'rgba(189, 189, 189, 0.3)'};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.$active ? 'var(--green)' : 'rgba(189, 189, 189, 0.6)'};
    transform: scale(1.2);
  }
`;

export const NavButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;

  img {
    object-fit: contain;
  }

  @media (max-width: 768px) {
    width: 2.5rem;
    height: 2.5rem;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 2.5rem;
  align-items: flex-start;
  gap: 2rem;
  flex: 1 0 0;
  border-radius: 1.5rem;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;

  &:hover {
    transform: translateY(-0.5rem);
    box-shadow: 0 1.5rem 3rem rgba(52, 152, 219, 0.15);
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    gap: 1.5rem;
  }
`;
