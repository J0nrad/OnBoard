import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import SearchBar from './search_bar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchTerm: '',
      products: []
    }

    this.noUser = this.noUser.bind(this);
    this.isAUser = this.isAUser.bind(this);
  }

  noUser() {
    return (
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
      <SearchBar />
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
  )}

  isAUser(currentUser, logout) {
    return (
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
      <SearchBar />
      <nav className="nav-right">
        <Link className="sell-link" to={`/product`}>
          Sell your board
          <FontAwesomeIcon className="sell-your-stuff-icon" icon={faCamera} />
        </Link>
        <div className="seperator"> | </div>
        <Link className="log-out-text" to='/login'>
          <button onClick={this.props.logout} className='logout-link'>Log Out</button>
        </Link>
      </nav>
    </div>
  )}

render() {
    const { currentUser, logout } = this.props
    return (
      <div>
        { currentUser ? this.isAUser(currentUser, logout) : this.noUser() }
      </div>
    );
  };
};

export default withRouter(NavBar);
