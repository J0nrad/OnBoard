import merge from 'lodash/merge';
import { RECEIVE_ALL_PRODUCTS,
         RECEIVE_PRODUCT,
         REMOVE_PRODUCT } from '../actions/products_actions';

const _defaultState = {
  products: {}
};
//REMEMBER YOU ARE CREATING A NEW PRODUCT DETAIL PAGE

const ProductReducer = (state = _defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_PRODUCTS:
      return merge({}, _defaultState, { products: action.products });
    case RECEIVE_PRODUCT:
      return merge({}, _defaultState, { [action.product.id]: action.product });
    case REMOVE_PRODUCT:
      let newState = merge({}, _defaultState);
      delete newState[action.productId];
      return newState;

    default:
      return state;
  };
};

export default ProductReducer;
