import merge from 'lodash/merge';
import { RECEIVE_FEED_PRODUCTS, REMOVE_FEED } from '../actions/product_feed_actions';

const _defaultState = {
  products: {}
};

const ProductFeedReducer = (state = _defaultState, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_FEED_PRODUCTS:
      return merge({}, _defaultState, { products: action.products });

    case REMOVE_FEED:
      return _defaultState;

    default:
      return state;
  };
};

export default ProductFeedReducer;
