import React from 'react';
import { Link } from 'react-router-dom';

class ProductShow extends React.Component {
  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.productId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.productId != this.props.match.params.productId) {
      this.props.fetchProduct(this.props.match.params.productId);
    }
  }

  render() {
    const { product } = this.props;
    // const { sellingUser } = this.state.entities.users[seller_id]
    if (!product) {
      return (
        <div>
          Loading...
        </div>
      )
    }

    return (
      <div className="product-show_wrapper">
        <h3 className="product-price-show">{product.price}</h3>
        <img className="product-show-image" src={product.image_url}/>
        <h3 className="product-title-show">{product.title}</h3>
        <p className="product-description-show">{product.description}</p>
        <Link className="back-to-index" to="/products">Back to Index</Link>
        <Link className="to-chats-show" to="/:seller_id/chats">Is it still available?</Link>
        <Link className="product-negotiable-show" to="/:seller_id/chats">Price negotiable?</Link>
    </div>
    );
  }
}

export default ProductShow;
