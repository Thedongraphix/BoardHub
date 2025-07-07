'use client';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.div`
  padding: 8.25rem 0 10rem;
`;

export const Inner = styled.div`
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 6.25rem;

  h1 {
    max-width: 56rem;
    font-size: 6rem;
    font-weight: 400;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 3.75rem;
    }
  }
`;

export const HeaderText = styled.h1`
  max-width: 56rem;
  font-size: 6rem;
  font-weight: 400;
`;

export const Accordion = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const AccordionItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
  border-bottom: 0.0625rem solid var(--border-color);
  overflow: hidden;
`;

export const Question = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 1rem 0;

  h3 {
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--text-primary);
  }

  svg {
    min-width: 1.5rem;
    height: 1.5rem;
    transition: transform 0.3s ease;
    color: var(--green);
  }
`;

export const Answer = styled(motion.div)`
  color: var(--text-secondary);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
`;
