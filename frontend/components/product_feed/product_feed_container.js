import React from 'react';
import { connect } from 'react-redux';
import ProductFeed from './product_feed';
import { fetchFeedProducts } from '../../actions/product_feed_actions';

const mapStateToProps = (state) => {
  return ({
    productFeed: state.productFeed,
    currentUser: state.session.currentUser,
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchFeedProducts: () => dispatch(fetchFeedProducts())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductFeed);
