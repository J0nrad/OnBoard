import { connect } from 'react-redux';
import React from 'react';
import { fetchProducts } from '../../actions/products_actions';
import SearchShow from './search_show';

import { allProducts } from '../../reducers/selectors';

const msp = (state) => {
  return {
    products: allProducts(state.entities.products),
  };
};

const mdp = (dispatch) => {
  return ({
    fetchProducts: (searchTerm) => dispatch(fetchProducts(searchTerm))
  });
};

export default connect(
  msp,
  mdp
)(SearchShow);
