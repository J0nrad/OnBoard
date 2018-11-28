import { connect } from 'react-redux';
import React from 'react';
import { fetchProduct } from '../../actions/products_actions';
import ProductForm from './product_form';

const msp = (state) => {
  return {
    errors: state.errors
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
)(ProductForm);
