import React from 'react';
import { connect } from 'react-redux';
import { fetchChat } from '../../../actions/chats_actions';

import ChatShow from './chat_show';

const msp = (state, ownProps) => {
  const productChat = state.entities.chats[ownProps.match.params.chatId];
  const product = state.entities.products[ownProps.match.params.product_id]
  return {
    chat: productChat,
    product,
    currentUser: state.session.currentUser,
  };
};

const mdp = dispatch => ({
  fetchChat: (id) => dispatch(fetchChat(id)),
  logout: () => dispatch(logout())
});

export default connect(
  msp,
  mdp
)(ChatShow);
const mapStateToProps = (state) => {
  return ({
    products: allProducts(state.entities.products),
    currentUser: state.session.currentUser,
  });
};
