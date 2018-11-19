import * as APIUtil from '../util/product_feed_util';
export const RECEIVE_FEED_PRODUCTS = "RECEIVE_FEED_PRODUCTS";
export const REMOVE_FEED = "REMOVE_FEED";

export const receiveFeedProducts = (products) => {
  return ({
    type: RECEIVE_FEED_PRODUCTS,
    products: products,
  });
};

export const removeFeed = () => {
  return ({
    type: REMOVE_FEED
  });
};

export const fetchFeedProducts = () => (dispatch) => {
  return APIUtil.fetchFeedProducts()
    .then( (products) => { return dispatch(receiveFeedProductss(products)); });
};
