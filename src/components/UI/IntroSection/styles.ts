'use client';
import Image from 'next/image';
import { styled } from 'styled-components';
import hero_background from '../../../../public/images/grid_background.png';

export const Wrapper = styled.section`
  padding-top: 7.5rem;

  @media (max-width: 768px) {
    padding-top: 6rem;
  }
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 56rem;
  margin: 0 auto 7.38rem;

  h3 {
    color: var(--emerald);
    font-size: 1.125rem;
    font-weight: 500;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 4.75rem;
    font-weight: 400;
  }

  p {
    max-width: 41.75rem;
    color: var(--link-color);
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.75rem;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.25rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;

export const HeaderMainText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 7.77rem;
  width: 100%;
  height: 600px;
  cursor: pointer;
  background: url(${hero_background.src}) no-repeat;
  background-position: center center;
  background-size: contain;
  
  @media (max-width: 768px) {
    height: 450px;
    padding: 2rem 0;
    touch-action: manipulation;
  }

  @media (max-width: 480px) {
    height: 400px;
    padding: 1.5rem 0;
  }
`;





export const ModernCard = styled.div<{ position?: string }>`
  padding: 2.5rem;
  border-radius: 1.5rem;
  background: var(--green);
  border: 1px solid rgba(52, 152, 219, 0.3);
  transition: all 0.6s cubic-bezier(0.39, 0.575, 0.565, 1);
  position: absolute;
  overflow: hidden;
  width: 340px;
  height: 280px;
  z-index: 5;

  ${props => {
    switch (props.position) {
      case 'left':
        return `
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(0deg);
          &.active {
            transform: translate(-120%, -50%) rotate(-8deg);
          }
        `;
      case 'center':
        return `
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(0deg);
          z-index: 7;
          &.active {
            transform: translate(-50%, -15%) rotate(0deg);
          }
        `;
      case 'right':
        return `
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(0deg);
          &.active {
            transform: translate(20%, -50%) rotate(8deg);
          }
        `;
      default:
        return '';
    }
  }}

  @media (max-width: 768px) {
    padding: 1.5rem;
    width: 260px;
    height: 220px;
    border: 1px solid rgba(52, 152, 219, 0.4);
    background: rgba(52, 152, 219, 0.95);
    
    ${props => {
      switch (props.position) {
        case 'left':
          return `
            &.active {
              transform: translate(-110%, -50%) rotate(-6deg);
            }
          `;
        case 'center':
          return `
            &.active {
              transform: translate(-50%, -10%) rotate(0deg);
            }
          `;
        case 'right':
          return `
            &.active {
              transform: translate(10%, -50%) rotate(6deg);
            }
          `;
        default:
          return '';
      }
    }}
  }

  @media (max-width: 480px) {
    padding: 1.25rem;
    width: 240px;
    height: 200px;
    
    ${props => {
      switch (props.position) {
        case 'left':
          return `
            &.active {
              transform: translate(-105%, -50%) rotate(-5deg);
            }
          `;
        case 'center':
          return `
            &.active {
              transform: translate(-50%, -8%) rotate(0deg);
            }
          `;
        case 'right':
          return `
            &.active {
              transform: translate(5%, -50%) rotate(5deg);
            }
          `;
        default:
          return '';
      }
    }}
  }
`;

export const CardHeader = styled.div`
  margin-bottom: 2rem;
  position: relative;
  z-index: 2;

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #ffffff;
    line-height: 1.3;
    text-align: center;
    margin-bottom: 1rem;
  }

  @media (max-width: 768px) {
    margin-bottom: 1.25rem;

    h3 {
      font-size: 1.2rem;
      margin-bottom: 0.625rem;
      line-height: 1.2;
    }
  }

  @media (max-width: 480px) {
    margin-bottom: 1rem;
    
    h3 {
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
      line-height: 1.2;
    }
  }
`;

export const CardContent = styled.div`
  position: relative;
  z-index: 2;
  margin-bottom: 2rem;

  p {
    color: rgba(255, 255, 255, 0.85);
    font-size: 1rem;
    line-height: 1.6;
    font-weight: 400;
    text-align: center;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 768px) {
    margin-bottom: 1.25rem;
    
    p {
      font-size: 0.875rem;
      line-height: 1.4;
      margin-bottom: 0.875rem;
    }
  }

  @media (max-width: 480px) {
    margin-bottom: 1rem;
    
    p {
      font-size: 0.8rem;
      line-height: 1.3;
      margin-bottom: 0.75rem;
    }
  }
`;
