import React from 'react';
import { connect } from 'react-redux';
import { fetchChats } from '../../../actions/chats_actions';

import ChatsIndex from './chat_show';

const mapStateToProps = (state) => {

  return ({
    products: allProducts(state.entities.products),
    currentUser: state.session.currentUser,
  });
};

const mdp = dispatch => ({
  : () => dispatch(logout())
});

export default connect(
  msp,
  mdp
)(ChatsIndex);

const msp = (state, ownProps) => {
  const productChats = state.entities.chats[ownProps.match.params.chatId];
  // const theProduct = state.entities.products[ownProps.match.params.product_id]
  return {
    chat: productChats
    // product:
    currentUser: state.session.currentUser,
  };
};
