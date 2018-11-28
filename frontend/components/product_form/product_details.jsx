import React from 'react';
import { Link } from 'react-router';

const ProductDetail = ({ product }) => {
  return (
    <div>
      <ul className="product-list">
        <img className="index-image" src={product.image_url}/>
        <li>title: {product.title}</li>
        <li>Description: {product.description}</li>
        <li>price: {product.price}</li>
        <li>Latitude: {product.lat}</li>
        <li>Longitude: {product.lng}</li>
      </ul>
      <br/>
    </div>
  );
};

export default ProductDetail;
