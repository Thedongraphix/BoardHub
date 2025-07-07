'use client';
import { useState } from 'react';
import Image from 'next/image';
import {
  Wrapper,
  Inner,
  Header,
  HeaderMainText,
  CardsContainer,
  ModernCard,
  CardHeader,
  CardContent,
} from './styles';
import { MaskText } from '@/components';
import { useIsMobile } from '../../../../libs/useIsMobile';
import {
  desktopHeaderPhrase,
  desktopParagraphPhrase,
  edges,
  mobileHeaderPhrase,
  mobileParagraphPhrase,
} from './constants';

const IntroSection = () => {
  const isMobile = useIsMobile();
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleCardClick = () => {
    if (isMobile) {
      setIsActive(!isActive);
    }
  };

  return (
    <Wrapper id="why-choose-us">
      <Inner>
        <Header>
          <h3>Introducing</h3>
          <HeaderMainText>
            {isMobile ? (
              <>
                <MaskText phrases={mobileHeaderPhrase} tag="h1" />
                <MaskText phrases={mobileParagraphPhrase} tag="p" />
              </>
            ) : (
              <>
                <MaskText phrases={desktopHeaderPhrase} tag="h1" />
                <MaskText phrases={desktopParagraphPhrase} tag="p" />
              </>
            )}
          </HeaderMainText>
        </Header>
        <CardsContainer
          onMouseEnter={() => !isMobile && setIsHovered(true)}
          onMouseLeave={() => !isMobile && setIsHovered(false)}
          onClick={handleCardClick}
        >
          <ModernCard
            className={(isMobile ? isActive : isHovered) ? 'active' : ''}
            position="left"
          >
            <CardHeader>
              <h3>{edges[0].point}</h3>
            </CardHeader>
            <CardContent>
              <p>{edges[0].details}</p>
            </CardContent>
          </ModernCard>
          
          <ModernCard
            className={(isMobile ? isActive : isHovered) ? 'active' : ''}
            position="center"
          >
            <CardHeader>
              <h3>{edges[1].point}</h3>
            </CardHeader>
            <CardContent>
              <p>{edges[1].details}</p>
            </CardContent>
          </ModernCard>
          
          <ModernCard
            className={(isMobile ? isActive : isHovered) ? 'active' : ''}
            position="right"
          >
            <CardHeader>
              <h3>{edges[2].point}</h3>
            </CardHeader>
            <CardContent>
              <p>{edges[2].details}</p>
            </CardContent>
          </ModernCard>
        </CardsContainer>
      </Inner>
    </Wrapper>
  );
};

export default IntroSection;
