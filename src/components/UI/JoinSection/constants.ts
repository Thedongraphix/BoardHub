import { StaticImageData } from 'next/image';
import robert_fox from '../../../../public/images/robert_fox.png';
import cameron_williamson from '../../../../public/images/cameron_williamson.png';
import esther_howard from '../../../../public/images/esther_howard.png';

export type Props = {
  testimony: string;
  person: string;
  avatar: StaticImageData;
  role: string;
};

export const testimonials: Props[] = [
  {
    testimony:
      'BoardHub has revolutionized how our board operates. The platform is intuitive, secure, and has made our meetings significantly more efficient. The ability to access all materials in one place is a game-changer.',
    person: 'Jane Doe',
    avatar: robert_fox,
    role: 'Board Director',
  },
  {
    testimony:
      'As a company secretary, BoardHub has saved me countless hours. Scheduling meetings, distributing materials, and managing minutes has never been easier. The platform is robust and reliable.',
    person: 'John Smith',
    avatar: cameron_williamson,
    role: 'Company Secretary',
  },
  {
    testimony:
      "The insights we gain from BoardHub are invaluable. The dashboards provide a clear overview of our board's performance, helping us to make more strategic, data-driven decisions. Highly recommended!",
    person: 'Sam Wilson',
    avatar: esther_howard,
    role: 'Executive',
  },
];

export const desktopHeaderPhrase = ['Trusted by Boards and', 'Administrators'];
