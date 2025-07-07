export const menu = {
  open: {
    width: '250px',
    height: '300px',
    top: '-25px',
    right: '-25px',
    transition: { duration: 0.5, type: 'tween', ease: [0.25, 0.46, 0.45, 0.94] },
  },

  closed: {
    width: '55px',
    height: '40px',
    top: '0px',
    right: '-4px',
    transition: {
      duration: 0.4,
      type: 'tween',
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
