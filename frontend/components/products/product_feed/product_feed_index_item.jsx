import React from 'react';
import { Link } from 'react-router-dom';

const ProductFeedIndexItem = ({ product }) => {
  return (
    <div className="check-wrap">
      <div className="product-list">
        <div className='product-box'>
          <div className="price-product">
            ${product.price}
          </div>
          <Link className="img-link" to={`/products/${product.id}`}>
            <img className="product-image" src={ product.image_url } />
          </Link>
          <div>
            {product.title}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFeedIndexItem;
