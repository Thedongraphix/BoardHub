import Image from 'next/image';
import boardhub_logo from '../../../../public/images/boardhublogo.png';
import ic_chevron_down from '../../../../public/svgs/ic_chevron_down.svg';
import ic_copyright from '../../../../public/svgs/ic_copyright.svg';

const linksArr = [
  {
    title: 'About Us',
    links: ['About BoardHub', 'Careers', 'Media'],
  },
  {
    title: 'Legal',
    links: ['Terms of Service', 'Privacy Policy', 'Security'],
  },
  {
    title: 'Support',
    links: ['Contact Us', 'FAQ', 'Help Center'],
  },
];

import {
  Wrapper,
  Inner,
  FooterLogo,
  FooterMainContent,
  FooterMiddle,
  FooterNavigation,
  GridColumn,
  LinksContainer,
  FooterBottom,
  Translator,
  CopyRight,
} from './styles';

const Footer = () => {
  return (
    <Wrapper>
      <Inner>
        <FooterLogo>
          <Image src={boardhub_logo} alt="boardhub_logo" />
        </FooterLogo>
        <FooterMainContent>
          <FooterMiddle>
            <FooterNavigation>
              {linksArr.map((l, i) => (
                <GridColumn key={i}>
                  <h3>{l.title}</h3>
                  <LinksContainer>
                    {l.links.map((link, i) => (
                      <li key={i}>{link}</li>
                    ))}
                  </LinksContainer>
                </GridColumn>
              ))}
            </FooterNavigation>
          </FooterMiddle>
          <FooterBottom>
            <Translator>
              <h3>English (United Kingdom)</h3>
              <Image src={ic_chevron_down} alt="chevron down" />
            </Translator>
            <CopyRight>
              <Image src={ic_copyright} alt="copyright svg" />
              BoardHub Corp, LLC.
            </CopyRight>
          </FooterBottom>
        </FooterMainContent>
      </Inner>
    </Wrapper>
  );
};

export default Footer;
