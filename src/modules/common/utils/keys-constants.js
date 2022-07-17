/* eslint-disable import/prefer-default-export */

export const transactionsQueryKeys = {
  base: ['transactions'],
  list: () => [...transactionsQueryKeys.base, 'list'],
  limit: () => [...transactionsQueryKeys.base, 'limit'],
  create: () => [...transactionsQueryKeys.base, 'create'],
  delete: () => [...transactionsQueryKeys.base, 'delete'],
  fuelList: () => [...transactionsQueryKeys.base, 'fuelList'],
};

export const categoriesQueryKeys = {
  base: ['categories'],
  list: () => [...categoriesQueryKeys.base, 'list'],
};

export const subcategoriesQueryKeys = {
  base: ['subcategories'],
  findByCategory: (val) => [...subcategoriesQueryKeys.base, `findByCategory-${val}`],
};

export const vehiclesQueryKeys = {
  base: ['vehicles'],
  list: () => [...vehiclesQueryKeys.base, 'list'],
  create: () => [...vehiclesQueryKeys.base, 'create'],
  delete: () => [...vehiclesQueryKeys.base, 'delete'],
};

export const fuelQueryKeys = {
  base: ['fuel'],
  list: () => [...fuelQueryKeys.base, 'list'],
};
