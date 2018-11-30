import * as ProductApiUtil from '../util/product_api_util';

export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';
export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const ADD_IMAGE = 'ADD_IMAGE';
export const REMOVE_FEED = 'REMOVE_FEED';

export const receiveProducts = products => ({
  type: RECEIVE_PRODUCTS,
  products
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const receiveProduct = product => ({
  type: RECEIVE_PRODUCT,
  product
});

export const removeProduct = product => ({
  type: REMOVE_PRODUCT,
  productId
});

export const addImage = image => ({
  type: ADD_IMAGE,
  product
});

export const removeFeed = () => {
  return ({
    type: REMOVE_FEED
  });
};

export const fetchProducts = () => dispatch => {
  return ProductApiUtil.fetchProducts().then(products => {
    return dispatch(receiveProducts(products))
  }, err => {
      return dispatch(receiveErrors(err.responseJSON));
  });
};

export const fetchProduct = (id) => dispatch => {
  return ProductApiUtil.fetchProduct(id).then(currentProduct => {
    return dispatch(receiveProduct(currentProduct))
  }, err => {
      return dispatch(receiveErrors(err.responseJSON));
  });
};

export const createProduct = product => dispatch => {
  return ProductApiUtil.createProduct(product).then(currentProduct => {
    return dispatch(receiveProduct(currentProduct))
  }, err => {
      return dispatch(receiveErrors(err.responseJSON));
  });
};

export const deleteProduct = productId => dispatch => {
  return ProductApiUtil.deleteProduct(productId).then(product => {
    return dispatch(removeProduct(productId))
  }, err => {
      return dispatch(receiveErrors(err.responseJSON));
  });
};

export const updateProduct = (product) => dispatch => {
  return ProductApiUtil.updateProduct(product).then(currentProduct => {
    return dispatch(receiveProduct(currentProduct))
  }, err => {
      return dispatch(receiveErrors(err.responseJSON));
  });
};
