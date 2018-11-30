import React from 'react';
import { Link } from 'react-router-dom';

const ProductFeedIndexItem = ({ product }) => {
  return (
    <ul>
      <Link to={`/products/${product.id}`}>
        <img src={ product.image_url } />
      </Link>&nbsp;
      <div>
        {product.title}
        {product.price}
      </div>
    </ul>
  );
};

export default ProductFeedIndexItem;
