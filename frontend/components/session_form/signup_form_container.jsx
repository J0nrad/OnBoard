import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SignUpForm from './signup_form';

const msp = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Sign Up!',
    navLink: <Link to="/login">Login Instead</Link>
  };
};

const mdp = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user))
  }
};

export default connect(
  msp,
  mdp
)(SignUpForm);
