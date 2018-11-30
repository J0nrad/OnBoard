import { connect } from 'react-redux';
import React from 'react';
import { fetchProduct } from '../../../actions/products_actions';
import ProductShow from './product_show';

const msp = (state, ownProps) => {
  const productLookUp = state.entities.products[ownProps.match.params.productId];
  // const seller = state.entities.users[ownProps.match.params.seller_id];
  return {
    product: productLookUp
    // how do I grab the user selling this product?
  };
};
const mdp = dispatch => {
  return {
    fetchProduct: id => dispatch(fetchProduct(id))
  };
};

export default connect(
  msp,
  mdp
)(ProductShow);
