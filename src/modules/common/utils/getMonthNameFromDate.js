export const getMonthNameFromDate = () => {
  const monthNames = [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre',
  ];

  const date = new Date();
  return monthNames[date.getMonth()];
};

export const months = [
  {
    name: 'Janvier',
    value: 1,
  },
  {
    name: 'Février',
    value: 2,
  },
  {
    name: 'Mars',
    value: 3,
  },
  {
    name: 'Avril',
    value: 4,
  },
  {
    name: 'Mai',
    value: 5,
  },
  {
    name: 'Juin',
    value: 6,
  },
  {
    name: 'Juillet',
    value: 7,
  },
  {
    name: 'Août',
    value: 8,
  },
  {
    name: 'Septembre',
    value: 9,
  },
  {
    name: 'Octobre',
    value: 10,
  },
  {
    name: 'Novembre',
    value: 11,
  },
  {
    name: 'Décembre',
    value: 12,
  },
];

export const monthToString = (int) => months[int - 1];
