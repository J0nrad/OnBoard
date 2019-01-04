import React from 'react';
import { connect } from 'react-redux';
import ProductFeed from './product_feed';
import { fetchProducts, fetchProduct, removeFeed } from '../../../actions/products_actions';

import { allProducts, categorizedProducts } from '../../../reducers/selectors';

const mapStateToProps = (state) => {
  return ({
    products: allProducts(state.entities.products),
    surfProducts: categorizedProducts('surf', state.entities.products),
    skateProducts: categorizedProducts('skate', state.entities.products),
    snowProducts: categorizedProducts('snow', state.entities.products),
    currentUser: state.session.currentUser,
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchProducts: (searchTerm) => dispatch(fetchProducts(searchTerm)),
    removeFeed: () => dispatch(removeFeed())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductFeed);
