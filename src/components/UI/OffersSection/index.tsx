'use client';
import Image from 'next/image';
import {
  Wrapper,
  Inner,
  Header,
  ContentWrapper,
  ContentText,
  ContentIcon,
  SliderNavigation,
  NavigationButtons,
  SlideIndicators,
  Indicator,
  NavButton,
} from './styles';
import MaskText from '@/components/Common/MaskText';
import { useIsMobile } from '../../../../libs/useIsMobile';
import {
  desktopHeaderPhrases,
  desktopParagraphPhrase,
  mobileParagraphPhrase,
  offers,
} from './constants';
import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import ic_arrow_left from '../../../../public/svgs/ic_arrow_left.svg';
import ic_arrow_right from '../../../../public/svgs/ic_arrow_right.svg';

const OffersSection = () => {
  const isMobile = useIsMobile();
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);
  const activeOffer = offers[activeSlide];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const next = () => {
    setActiveSlide((prev) => (prev === offers.length - 1 ? 0 : prev + 1));
  };

  const previous = () => {
    setActiveSlide((prev) => (prev === 0 ? offers.length - 1 : prev - 1));
  };

  // Auto-scroll functionality
  useEffect(() => {
    if (isInView && !isAutoScrolling) {
      setIsAutoScrolling(true);
      const interval = setInterval(() => {
        setActiveSlide((prev) => (prev === offers.length - 1 ? 0 : prev + 1));
      }, 4000); // Change slide every 4 seconds

      return () => clearInterval(interval);
    }
  }, [isInView, isAutoScrolling, offers.length]);

  // Pause auto-scroll on manual interaction
  const handleManualNavigation = (direction: 'next' | 'prev') => {
    setIsAutoScrolling(false);
    if (direction === 'next') {
      next();
    } else {
      previous();
    }
  };

  // Handle indicator click
  const handleIndicatorClick = (index: number) => {
    setIsAutoScrolling(false);
    setActiveSlide(index);
  };

  return (
    <Wrapper id="features" ref={ref}>
      <Inner>
        <Header>
          <MaskText phrases={desktopHeaderPhrases} tag="h1" />

          {isMobile ? (
            <MaskText phrases={mobileParagraphPhrase} tag="p" />
          ) : (
            <MaskText phrases={desktopParagraphPhrase} tag="p" />
          )}
        </Header>

        <AnimatePresence mode="wait">
          <ContentWrapper
            key={activeSlide}
            as={motion.div}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <ContentText>
              <MaskText phrases={[activeOffer.title]} tag="h2" />
              <p>{activeOffer.details}</p>
            </ContentText>
            <ContentIcon>
              <Image src={activeOffer.illustration} alt={activeOffer.title} />
            </ContentIcon>
          </ContentWrapper>
        </AnimatePresence>

        <SliderNavigation>
          <SlideIndicators>
            {offers.map((_, index) => (
              <Indicator
                key={index}
                active={index === activeSlide}
                onClick={() => handleIndicatorClick(index)}
              />
            ))}
          </SlideIndicators>
          <NavigationButtons>
            <NavButton onClick={() => handleManualNavigation('prev')}>
              <Image src={ic_arrow_left} alt="Previous" />
            </NavButton>
            <NavButton onClick={() => handleManualNavigation('next')}>
              <Image src={ic_arrow_right} alt="Next" />
            </NavButton>
          </NavigationButtons>
        </SliderNavigation>
      </Inner>
    </Wrapper>
  );
};

export default OffersSection;
