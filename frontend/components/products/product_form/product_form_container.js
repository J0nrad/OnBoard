import { connect } from 'react-redux';
import React from 'react';
import { createProduct } from '../../../actions/products_actions';
import ProductForm from './product_form';

const msp = (state) => {
  return {
    errors: state.errors
  }
}
const mdp = dispatch => {
  return {
    createProduct: product => dispatch(createProduct(product))
  };
};

export default connect(
  null,
  mdp
)(ProductForm);
