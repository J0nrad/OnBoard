import * as APIUtil from '../util/product_feed_util';
export const RECEIVE_PRODUCTS_FEED = "RECEIVE_PRODUCTS_FEED";
export const REMOVE_FEED = "REMOVE_FEED";

export const receiveFeedProducts = (products) => {
  return ({
    type: RECEIVE_PRODUCTS_FEED,
    products
  });
};

export const removeFeed = () => {
  return ({
    type: REMOVE_FEED
  });
};

export const fetchFeedProducts = () => (dispatch) => {
  return APIUtil.fetchProductsFeed()
    .then( (products) => { return dispatch(receiveProductsFeed(products)); });
};
