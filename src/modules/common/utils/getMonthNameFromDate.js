const getMonthNameFromDate = () => {
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

export default getMonthNameFromDate;
