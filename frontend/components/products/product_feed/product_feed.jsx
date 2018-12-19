import React from 'react';
import ProductCategoryFeed from './product_category_feed';
import ProductFeedContainer from './product_feed_container';
import ProductFeedIndexItem from './product_feed_index_item';

class ProductFeed extends React.Component {

 componentDidMount() {
   this.props.fetchProducts()
 }

 render() {
   return (
     <div>
       <ProductCategoryFeed />
       <div className = 'product-wrapper'>
         {this.props.products.map(product => {
           if (product.image_url === null) {
             product.image_url = 'http://chittagongit.com//images/no-image-available-icon/no-image-available-icon-10.jpg'
           }
           return (<ProductFeedIndexItem product={product} key={product.id}/>)
         })
       }
       </div>
    </div>
   );
 }

}

export default ProductFeed;
