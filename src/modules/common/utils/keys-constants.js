/* eslint-disable import/prefer-default-export */

export const transactionsQueryKeys = {
  base: ['transactions'],
  list: () => [...transactionsQueryKeys.base, 'list'],
  limit: (val) => [...transactionsQueryKeys.base, `limit-${val}`],
};

export const categoriesQueryKeys = {
  base: ['categories'],
  list: () => [...categoriesQueryKeys.base, 'list'],
};

export const subcategoriesQueryKeys = {
  base: ['subcategories'],
  findByCategory: (val) => [...subcategoriesQueryKeys.base, `findByCategory-${val}`],
};
