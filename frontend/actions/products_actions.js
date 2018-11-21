import * as ProductApiUtil from '../util/product_api_util';

export const RECEIVE_ALL_PRODUCTS = 'RECEIVE_PRODUCTS';
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';
export const CREATE_PRODUCT = 'RECEIVE_PRODUCT';
export const REMOVE_PRODUCT = 'RECEIVE_PRODUCT';

export const recieveAllProducts = products => ({
  type: RECEIVE_ALL_PRODUCTS,
  products
});

export const recieveProduct = product => ({
  type: RECEIVE_PRODUCT,
  product
});

export const removeProduct = product => ({
  type: REMOVE_PRODUCT,
  productId
});



export const fetchProducts = () => {
  return ProductApiUtil.fetchProducts().then(products => {
    return dispatch(receiveAllProducts(products));
  });
};

export const fetchProduct = (id) => {
  return ProductApiUtil.fetchProduct(id).then(currentProduct => {
    return dispatch(receiveProduct(currentProduct));
  });
};

export const createProduct = product => dispatch => {
  return ProductApiUtil.createPost(product).then(currentProduct => {
    return dispatch(receivePost(currentProduct));
  });
};

export const deleteProduct = productId => dispatch => {
  return ProductApiUtil.deleteProduct(productId).then(product => {
    return dispatch(removeProduct(productId));
  });
};

export const updateProduct = (product) => dispatch => {
  return ProductApiUtil.updateProduct(product).then(currentProduct => {
    return dispatch(receiveProduct(currentProduct));
  });
};
