'use client';
import Image from 'next/image';
import {
  Wrapper,
  Inner,
  Header,
  Content,
  CardsColumn,
  Card,
  TextCtn,
  SVGCtn,
  StatsColumn,
  Stat,
} from './styles';
import MaskText from '@/components/Common/MaskText';
import { useIsMobile } from '../../../../libs/useIsMobile';
import {
  cardsInfo,
  desktopHeaderPhrase,
  desktopParagraphPhrase,
  mobileHeaderPhrase,
  mobileParagraphPhrase,
  stats,
} from './constants';

const FinancialFuture = () => {
  const isMobile = useIsMobile();

  return (
    <Wrapper>
      <Inner>
        <Header>
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
        </Header>
        <Content>
          <CardsColumn>
            {cardsInfo.map((info, i) => (
              <Card key={i}>
                <SVGCtn>
                  <Image src={info.icon} alt="icon" />
                </SVGCtn>
                <TextCtn>
                  <MaskText phrases={new Array(info.title)} tag="h3" />
                  <MaskText phrases={new Array(info.details)} tag="p" />
                </TextCtn>
              </Card>
            ))}
          </CardsColumn>
          <StatsColumn>
            {stats.map((stat, i) => (
              <Stat key={i}>
                <MaskText phrases={new Array(stat.number)} tag="h1" />
                <MaskText phrases={new Array(stat.subtitle)} tag="p" />
              </Stat>
            ))}
          </StatsColumn>
        </Content>
      </Inner>
    </Wrapper>
  );
};

export default FinancialFuture;
