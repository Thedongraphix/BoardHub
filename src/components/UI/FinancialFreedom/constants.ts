import ic_money_send from '../../../../public/svgs/ic_money_send.svg';
import ic_arrows_right_left from '../../../../public/svgs/ic_arrows_right_left.svg';
import ic_identification from '../../../../public/svgs/ic_identification.svg';

// For desktop
export const desktopHeaderPhrase = ['Enhanced Board Performance'];
export const desktopParagraphPhrase = [
  'BoardHub is designed to improve board performance by providing powerful tools',
  'for collaboration and data-driven insights.',
];
export const desktopBriefNotePhrase = [
  'Empowering boards with the',
  'tools they need to succeed.',
];

// For mobile
export const mobileHeaderPhrase = ['Enhanced Board', 'Performance'];
export const mobileParagraphPhrase = [
  'BoardHub is designed to improve board performance by providing',
  'powerful tools for collaboration and data-driven insights.',
];

export const mobileBriefNotePhrase = [
  'Empowering boards',
  'with the tools they',
  'need to succeed.',
];

export const edges = [
  {
    point: '98%',
    details: 'Meeting Efficiency Rate',
    icon: ic_arrows_right_left,
  },

  {
    point: '500+',
    details: 'Active Board Members',
    icon: ic_identification,
  },

  {
    point: '24/7',
    details: 'Platform Availability',
    icon: ic_money_send,
  },
];
