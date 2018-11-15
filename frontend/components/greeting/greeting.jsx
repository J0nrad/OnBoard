import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav>
      <Link to="/login">Log In</Link>
        &nbsp;or&nbsp;
      <Link to="/signup">Sign Up!</Link>
    </nav>
  )

  const personalGreet = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Welcome, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  )

  return currentUser ? personalGreet() : sessionLinks();
};

// const authbuttons = () => (
//   // check out https://www.youtube.com/watch?v=ea9KyE78qKI
//   // && https://gist.github.com/bradtraversy/815369774ece6ede28a564e2a1e7153a
// )

export default Greeting;
