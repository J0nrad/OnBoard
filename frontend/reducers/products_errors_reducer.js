import {
  RECEIVE_ERRORS,
  RECEIVE_PRODUCTS,
  RECEIVE_PRODUCT,
  CREATE_PRODUCT,
  REMOVE_PRODUCT
} from '../actions/products_actions';

const ProductsErrorsReducer = (state = [], action) => {
  switch(action.type) {
    // case RECEIVE_ERRORS:
    //   return action.errors;
    case RECEIVE_PRODUCTS:
      return [];
    case RECEIVE_PRODUCT:
      return [];
    case CREATE_PRODUCT:
      return [];
    case REMOVE_PRODUCT:
      return [];

    default:
      return state;
  }
};

export default ProductsErrorsReducer;
