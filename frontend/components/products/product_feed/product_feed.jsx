import React from 'react';
import ProductFeedContainer from './product_feed_container';
import ProductFeedIndexItem from './product_feed_index_item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMountain, faWater, faRoad, faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

class ProductFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {products: []};
    this.handleSurfClick = this.handleSurfClick.bind(this);
    this.handleSkateClick = this.handleSkateClick.bind(this);
    this.handleSnowClick = this.handleSnowClick.bind(this);
    this.handleAllClick = this.handleAllClick.bind(this);
  }

 componentDidMount() {
   this.props.fetchProducts(this.props.searchTerm)
    .then(() => this.setState({products: this.props.products}));
 }

 handleAllClick() {
   this.setState({products: this.props.products})
 }

 handleSurfClick() {
   this.setState({products: this.props.surfProducts})
 }
 handleSkateClick() {
   this.setState({products: this.props.skateProducts})
 }
 handleSnowClick() {
   this.setState({products: this.props.snowProducts})
 }


 render() {
   return (
     <div>
       <div className='category-icon-background'>
         <div className="category-icon-wrapper">
           <button className="icon-button" onClick={this.handleAllClick}>
             <FontAwesomeIcon className="all-icon" icon={faAngleDoubleDown} />
             <br/>
             All!
           </button>
           <button className="icon-button" onClick={this.handleSurfClick}>
             <FontAwesomeIcon className="surf-icon" icon={faWater} />
             <br/>
             Surf
           </button>
           <button className="icon-button" onClick={this.handleSnowClick}>
             <FontAwesomeIcon className="snow-icon" icon={faMountain} />
             <br/>
             Snow
           </button>
           <button className="icon-button" onClick={this.handleSkateClick}>
             <FontAwesomeIcon className="skate-icon" icon={faRoad} />
             <br/>
             Skate
           </button>
         </div>
       </div>
       <div className = 'product-wrapper'>
         {this.state.products.map(product => {
           if (product.image_url === null) {
             product.image_url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo3o4rpC9SY5StUfhMRFzN-GRjv8-frXVNoBQwk6B0osulN4sOkA'
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
