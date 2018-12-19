import React from 'react';
import { connect } from 'react-redux';
import ProductCategoryFeed from './product_category_feed';
import { fetchProducts, fetchProduct, removeFeed } from '../../../actions/products_actions';

import { allProducts } from '../../../reducers/selectors';

const mapStateToProps = (state) => {
  return ({
    products: allProducts(state.entities.products),
    currentUser: state.session.currentUser,
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchProducts: () => dispatch(fetchProducts()),
    removeFeed: () => dispatch(removeFeed())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductCategoryFeed);
