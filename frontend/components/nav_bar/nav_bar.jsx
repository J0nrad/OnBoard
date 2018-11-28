import React from 'react';
import { withRouter, Link } from 'react-router-dom';

const NavBar = ({ currentUser, logout }) => {
  const noUser = () => (
    <div className="wrapper-navbar">
      <nav className="nav-left">
          <Link to="/" className="droplet-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round" className="feather-droplet">
              <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
            </svg>
          </Link>
        <Link to="/" className="link-to-home">
          <h1 className="home-link">onBoard</h1>
        </Link>
      </nav>
      <nav className="nav-right">
        <button className='login-link'>
          <Link to='/login'>Log in</Link>
        </button>
          <div className="seperator"> | </div>
        <button className='logout-link'>
          <Link className="log-out-text" to='/signup'>Sign Up</Link>
        </button>
      </nav>
    </div>
  )

  const isAUser = () => (
    <div className="wrapper-navbar">
      <nav className="nav-left">
        <Link to="/" className="droplet-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round" className="feather-droplet">
            <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
          </svg>
        </Link>
      </nav>
      <input className="search-bar"
        type="text"
        placeholder="Search onBoard"
      />
      <nav className="nav-right">
        <button className='login-link'>
          <Link to='/login'>Log in</Link>
        </button>
          <div className="seperator"> | </div>
        <button className='logout-link'>
          <Link className="log-out-text" to='/'>Log Out</Link>
        </button>
      </nav>
    </div>
  )

      return currentUser ? isAUser() : noUser();
  };

export default withRouter(NavBar);
