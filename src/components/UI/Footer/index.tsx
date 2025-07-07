'use client';

import Image from 'next/image';
import boardhub_logo from '../../../../public/images/boardhublogo.png';
import ic_chevron_down from '../../../../public/svgs/ic_chevron_down.svg';
import ic_copyright from '../../../../public/svgs/ic_copyright.svg';
import { useState } from 'react';

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
  NewsletterSection,
  NewsletterForm,
  NewsletterInput,
  SubscribeButton,
  FooterBottom,
  Translator,
  CopyRight,
} from './styles';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      // Here you would typically call an API to subscribe the user
      console.log('Newsletter subscription:', email);
      setIsSubscribed(true);
      setEmail('');
      
      // Reset the success message after 3 seconds
      setTimeout(() => {
        setIsSubscribed(false);
      }, 3000);
    }
  };

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
            <NewsletterSection>
              <h3>Stay Updated</h3>
              <p>Subscribe to our newsletter for the latest updates and insights about board governance.</p>
              <NewsletterForm onSubmit={handleNewsletterSubmit}>
                <NewsletterInput
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <SubscribeButton type="submit">
                  {isSubscribed ? 'Subscribed!' : 'Subscribe'}
                </SubscribeButton>
              </NewsletterForm>
              {isSubscribed && (
                <p style={{ color: 'var(--green)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                  Thank you for subscribing! 🎉
                </p>
              )}
            </NewsletterSection>
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
