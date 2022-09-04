import { SET_PRODUCT_LIST } from './actionType';

export const productData = (data = [], action) => {
  switch (action.type) {
    case SET_PRODUCT_LIST:
      data = action.data;
      break;
    default:
      break;
  }
  return data;
};
