import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class NavBar extends React.Component {

  constructor(props) {
    super(props);

    };

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="wrapper-navbar">
        <nav className="nav-left">
          <Link to="/" className="link-to-home">
            <h1 className="home-link">onBoard</h1>
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
            <Link className="log-out-text"to='/'>Log out</Link>
          </button>
        </nav>
      </div>
    );
  }
}

export default withRouter(NavBar);
