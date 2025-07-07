import ic_circle_stack from '../../../../public/svgs/ic_circle_stack.svg';
import ic_identification from '../../../../public/svgs/ic_identification.svg';
import ic_lock_closed from '../../../../public/svgs/ic_lock_closed.svg';

// For desktop
export const desktopHeaderPhrase = ['Why Choose BoardHub?'];
export const desktopParagraphPhrase = [
  'BoardHub is the smart choice for organizations looking to improve board',
  'governance, streamline meetings, and enhance collaboration.',
];

// For mobile
export const mobileHeaderPhrase = ['Why Choose', 'BoardHub?'];
export const mobileParagraphPhrase = [
  'BoardHub is the smart choice for organizations looking to improve',
  'board governance, streamline meetings, and enhance collaboration.',
];

export const edges = [
  {
    point: 'Enterprise-Grade Security',
    details:
      'Bank-level encryption and advanced security protocols ensure your sensitive board data remains protected. SOC 2 compliant with comprehensive audit trails.',
    icon: ic_lock_closed,
  },
  {
    point: 'Intelligent Automation',
    details:
      'AI-powered insights and automated workflows streamline meeting preparation, decision tracking, and governance reporting for maximum efficiency.',
    icon: ic_circle_stack,
  },
  {
    point: 'Global Accessibility',
    details:
      'Access your board materials anywhere, anytime. Multi-device synchronization with offline capabilities ensures uninterrupted productivity.',
    icon: ic_identification,
  },
];
