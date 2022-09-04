import { PRODUCT_LIST, SEARCH_PRODUCT_LIST } from './actionType';

export const productList = () => {
  return {
    type: PRODUCT_LIST,
  };
};

export const searchProductList = (query) => {
  return {
    type: SEARCH_PRODUCT_LIST,
    query,
  };
};
