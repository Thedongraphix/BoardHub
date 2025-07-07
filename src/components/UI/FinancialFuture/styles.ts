'use client';
import { styled } from 'styled-components';
import card_grid from '../../../../public/images/card_grid.png';
import hero_background from '../../../../public/images/grid_background.png';

export const Wrapper = styled.section`
  margin-top: 10.5rem;
  padding-bottom: 3.5rem;

  @media (max-width: 768px) {
    margin-top: 6.25rem;
  }
`;

export const Inner = styled.div`
  max-width: 1440px;
  width: 90%;
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

export const Content = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const CardsColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem;
  border-radius: 1.5rem;
  background: #111;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 1.5rem;
  }
`;

export const SVGCtn = styled.div`
  min-width: 3.5rem;
  img {
    width: 3.5rem;
    height: 3.5rem;
    object-fit: contain;
    filter: brightness(0) invert(1);
  }
`;

export const TextCtn = styled.div`
  h3 {
    font-size: 1.75rem;
    font-weight: 500;
    margin-bottom: 0.75rem;
  }

  p {
    color: var(--link-color);
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 1.5rem;
      font-weight: 500;
    }
  }
`;

export const StatsColumn = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  align-self: center;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    max-width: 100%;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const Stat = styled.div`
  text-align: center;

  h1 {
    font-size: 4rem;
    font-weight: 700;
    color: var(--green);
    margin-bottom: 0.5rem;
    line-height: 1;
  }

  p {
    font-size: 1.125rem;
    color: var(--link-color);
    line-height: 1.4;
    font-weight: 400;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 3rem;
      font-weight: 700;
    }
    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 2.5rem;
    }
    p {
      font-size: 0.875rem;
    }
  }
`;

export const Banner = styled.div`
  height: 45rem;
  width: 100%;
  position: relative;

  img {
    object-fit: cover;
  }

  @media (max-width: 768px) {
    height: 31.25rem;
    img {
      object-fit: contain;
    }
  }
`;
