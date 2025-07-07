type FAQItem = {
  question: string;
  answer: string;
};

export const desktopHeaderPhrase = ['Frequently Asked', 'Questions'];
export const mobileHeaderPhrase = ['Frequently', 'Asked', 'Questions'];
export const animate = {
  initial: {
    y: '100%',
    opacity: 0,
  },
  open: (i: number) => ({
    y: '0%',
    opacity: 1,
    transition: { duration: 1, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] },
  }),
};

export const faqData: FAQItem[] = [
  {
    question: 'What is BoardHub?',
    answer:
      'BoardHub is a secure digital platform designed to make board meetings more effective. It provides an easy-to-use interface for communication, strategic planning, policy management, and performance measurement for boards and their members.',
  },
  {
    question: 'Is my data secure on BoardHub?',
    answer:
      'Yes, security is at the heart of BoardHub. We implement military-grade encryption and other advanced security controls to protect your data and ensure your privacy while using the platform.',
  },
  {
    question: 'Who can benefit from using BoardHub?',
    answer:
      'BoardHub is designed for a wide range of users involved in board activities, including Board Directors, Executives, Committee Members, Company Secretaries, and Meeting Organizers.',
  },
  {
    question: 'Can I use BoardHub on my mobile device?',
    answer:
      'Absolutely. BoardHub is designed to be accessible anywhere, anytime, on any device. You can view, update, and sign documents in real-time on your phone or tablet without needing to print.',
  },
];
