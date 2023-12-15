import images from './images';

const wines = [
  {
    title: 'Long Beach Iced Tea',
    price: '$10',
    tags: 'AU | Bottle',
  },
  {
    title: 'Pinarita',
    price: '$5',
    tags: 'AU | Bottle',
  },
  {
    title: 'Whisky Tikki',
    price: '$4',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Sin Gin Sin',
    price: '$4',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Jager Bomb',
    price: '$2',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Green Apple Martini',
    price: '$15',
    tags: 'Gin | Green Apple Syrup | Raspberry | 30 ml',
  },
  {
    title: "Bloody Mary",
    price: '$16',
    tags: 'Vodka | Tequila | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };
