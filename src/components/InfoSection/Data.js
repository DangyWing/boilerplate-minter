const img1 = require('../../images/svg-1.svg');
const img2 = require('../../images/svg-2.svg');
const img3 = require('../../images/svg-3.svg');

export const homeObjOne = {
  id: 'about',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Your Project',
  headline: 'Is the BEST project',
  description:
    'over 2000 years old. Richard McClintock, a Latin professor at '
    + 'Hampden-Sydney College in',

  buttonLabel: 'Get Started',
  imgStart: false,
  img: img1.default,
  alt: 'Car',
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjTwo = {
  id: 'story',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "What we're doing",
  headline: 'The main idea of our project!',
  description:
    'Revolutionizing the NFT space with our knowledge of web3 principles and '
    + 'passion for the future of finance',

  buttonLabel: 'Learn More',
  imgStart: true,
  img: img2.default,
  alt: 'ETH Balloon',
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjThree = {
  id: 'team',
  lightBg: false,
  lightText: true,
  lightTextDesc: false,
  topLine: 'Your Team',
  headline: 'Is the BEST team',
  description:
    'George is the best dev in the world, Alice is the best artist in the '
    + 'world and you are the best community manager',

  buttonLabel: 'Start Now',
  imgStart: true,
  img: img3.default,
  alt: 'Paper',
  dark: true,
  primary: true,
  darkText: false,
};
