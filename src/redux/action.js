import { ADD_TO_CART, EMPTY_FROM_CART, REMOVE_FROM_CART } from './actionType';

export const addToCart = (data) => {
  return {
    type: ADD_TO_CART,
    data,
  };
};

export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    payload: id,
  };
};

export const emptyFromCart = () => {
  return {
    type: EMPTY_FROM_CART,
  };
};
