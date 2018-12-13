import merge from 'lodash/merge';
import { RECEIVE_PRODUCTS,
         RECEIVE_PRODUCT,
         REMOVE_PRODUCT,
         RECEIVE_SELLER,
         REMOVE_FEED } from '../actions/products_actions';

const _defaultState = {};
//REMEMBER YOU ARE CREATING A NEW PRODUCT DETAIL PAGE

const ProductsReducer = (state = _defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return merge({}, action.products);
    case RECEIVE_PRODUCT:
      return merge({}, _defaultState, { [action.product.id]: action.product });
    case REMOVE_PRODUCT:
      let newState = merge({}, _defaultState);
      delete newState[action.productId];
      return newState;
    case REMOVE_FEED:
      return _defaultState;

    default:
      return state;
  };
};

export default ProductsReducer;
