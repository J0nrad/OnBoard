import React from 'react';
import { Link } from 'react-router-dom';

class ProductShow extends React.Component {
  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.productId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.post.id != this.props.match.params.productId) {
      this.props.fetchProduct(this.props.match.params.productId);
    }
  }

  render() {
    const { product } = this.props;
    if (!product) {
      return (
        <div>
          Loading...
        </div>
      )
    }

    return (
      <div className="product-show_wrapper">
        <label>Price</label>
        <h3>{product.price}</h3>
        <img className="index-image" src={product.image_url}/>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <Link to="/products">Back to Index</Link>
      </div>
    );
  }
}

export default ProductShow;
