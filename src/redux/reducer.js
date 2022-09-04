import { ADD_TO_CART, EMPTY_FROM_CART, REMOVE_FROM_CART } from './actionType';

// const initilizeState = {
//   addToCart: 0,
// };
export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      data = [action.data, ...data];
      break;
    case REMOVE_FROM_CART:
      console.log(data, action.payload);
      const filterData = data.filter((item) => item?.id !== action.payload);
      data = filterData;
      break;
    case EMPTY_FROM_CART:
      data = [];
      break;
    default:
  }
  return data;
};
