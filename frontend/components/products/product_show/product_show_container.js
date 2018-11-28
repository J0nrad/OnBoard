import { connect } from 'react-redux';
import React from 'react';
import { fetchProduct } from '../../../actions/products_actions';
import ProductShow from './product_show';

const msp = (state, ownProps) => {
  return {
    product: state.products[ownProps.match.params.productId]
  }
}
const mdp = dispatch => {
  return {
    fetchProduct: id => dispatch(fetchProduct(id))
  };
};

export default connect(
  msp,
  mdp
)(ProductShow);
