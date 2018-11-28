import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container'
import { FrontPage } from '../front_page/front_page'

const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <div>
      <FrontPage />
    </div>
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
