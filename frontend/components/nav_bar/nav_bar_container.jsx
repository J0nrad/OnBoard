import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import NavBar from './nav_bar';

const msp = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mdp = dispatch => {
  return {
    processFrom: (user) => dispatch(login(user))
  };
};

export default connect(
  msp,
  mdp
)(NavBar);
