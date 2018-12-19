import React from 'react';
import ProductFeedIndexItem from './product_feed_index_item';
import ProductFeedContainer from './product_feed_container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMountain, faWater, faRoad } from '@fortawesome/free-solid-svg-icons'

// library.add(faIgloo);

class ProductCategoryFeed extends React.Component {
constructor(props){
  super(props);

  this.filteredProducts = this.filteredProducts.bind(this);
}


filteredProducts(e) {
  console.log(this.state.what.filter(w => w.name === 'mike'))
}

 render() {
   return (
      <div className='category-icon-background'>
        <div className="category-icon-wrapper">
          <button onClick={this.filteredProducts} className="icon-button">
            <FontAwesomeIcon className="snow-icon" icon={faMountain} />
            <br/>
            Snow
          </button>
          <button className="icon-button">
            <FontAwesomeIcon className="surf-icon" icon={faWater} />
            <br/>
            Surf
          </button>
          <button className="icon-button">
            <FontAwesomeIcon className="skate-icon" icon={faRoad} />
            <br/>
            Skate
          </button>
        </div>
      </div>
   );
 }

}

export default ProductCategoryFeed;

// {this.props.products.filter(product => {
//   if (product.image_url === null) {
//     product.image_url = 'http://chittagongit.com//images/no-image-available-icon/no-image-available-icon-10.jpg'
//   }
//   switch (product_category_type) {
//     case "surf":
//      return (<ProductFeedIndexItem product={product} key={product.id}/>)
//
//
//       break;
//     default:
//      return "No products matching that category"
//
//   }

//   })
// }
