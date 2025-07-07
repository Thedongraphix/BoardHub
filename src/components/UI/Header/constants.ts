// Modern mobile menu animations
export const mobileMenuVariants = {
  open: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94],
      staggerChildren: 0.1,
    },
  },
  closed: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94],
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

export const mobileNavLinkVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export const links = [
  {
    url: '#features',
    linkTo: 'Features',
  },
  {
    url: '#why-choose-us',
    linkTo: 'Why Choose Us',
  },
  {
    url: '#testimonials',
    linkTo: 'Testimonials',
  },
  {
    url: '#faq',
    linkTo: 'FAQ',
  },
];
