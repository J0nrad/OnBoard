import React from 'react';
import ProductFeedContainer from '../products/product_feed/product_feed_container'

class SearchShow extends React.Component {
  render() {
    return (
      <div>
        <ProductFeedContainer searchTerm={this.props.match.params.searchTerm}/>
      </div>
    );
  }
}

export default SearchShow
