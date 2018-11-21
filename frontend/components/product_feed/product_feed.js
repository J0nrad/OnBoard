import React from 'react';
import ProductFeedIndexItemContainer from './product_feed_index_item_container';

class ProductFeed extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      end: 5
    };

    this.parseproducts = this.parseProducts.bind(this);
    this.infiniteScroll = this.infiniteScroll.bind(this);
  }

  componentDidMount() {
    window.bottom = false;
    window.addEventListener("scroll", this.infiniteScroll);
    this.props.fetchFeedProducts();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.infiniteScroll);
  }

  parseProducts() {
    const { products } = this.props.productFeed;

    let productsList = Object.keys(products).map( (id) => {
      return (
        <ProductFeedIndexItemContainer product={ products[id] } key={ id } />
      );
    });
    return productsList;
  }

  infiniteScroll() {
    $(window).scroll(function() {
      if ($(window).scrollTop() <= $(document).height() - $(window).height() && $(window).scrollTop() >= $(document).height() - $(window).height() - 200) {
        window.bottom = true;
      }
    });

    if (window.bottom) {
      this.setState({ end: this.state.end + 5 });
      window.bottom = false;
    }
  }

  render() {
     const { currentUser } = this.props;
     let productsList;

     if (this.props.productFeed.products.length !== 0) {
       productsList = this.parseProducts().reverse().slice(0, this.state.end);
     }

     if(productsList.length === 0) {
       return(
        <div className="rainbow-progress-bar"></div>
      );
     }

    return (
      <div>
        <ul className='product-feed'>
          { productsList }
        </ul>
      </div>
    );
  }
}



export default ProductFeed;
