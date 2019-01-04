import React from 'react';
import { withRouter, Redirect, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: '' }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();
    this.props.history.push(`search/${this.state.searchTerm}`);
  }

  update(e){
    this.setState({
      searchTerm: e.currentTarget.value
    });
  }
  render() {
    return (
      <form className="search-bar-form">
        <input onChange={this.update}
          type="text"
          placeholder="Search onBoard"
        />
        <input className="search-submit"
          type="submit"
          onClick={this.handleSubmit}
        />
      </form>
    );
  }
};

export default withRouter(SearchBar);
