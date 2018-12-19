
// this.state = {
//   end: 5
// };

// this.parseProducts = this.parseProducts.bind(this);
// this.infiniteScroll = this.infiniteScroll.bind(this);
// }

// componentDidMount() {
//   window.bottom = false;
//   window.addEventListener("scroll", this.infiniteScroll);
//   this.props.fetchProducts();
// }
//
// componentWillUnmount() {
//   window.removeEventListener("scroll", this.infiniteScroll);
// }

//   parseProducts() {
//     const { products } = this.props;
//
//     let productsList = Object.keys(products).map((id) => {
//       return (
//         <ProductFeedContainer
//           key={ id }
//           product={ products[id] } />
//       );
//     });
//     return productsList;
//   }
//
//   infiniteScroll() {
//     $(window).scroll(function() {
//       if ($(window).scrollTop() <= $(document).height() - $(window).height() && $(window).scrollTop() >= $(document).height() - $(window).height() - 200) {
//         window.bottom = true;
//       }
//     });
//
//     if (window.bottom) {
//       this.setState({ end: this.state.end + 5 });
//       window.bottom = false;
//     }
//   }
//
// render() {
//   let productsList;
//
//   if (this.props.products.length !== 0) {
//     productsList = this.parseProducts().reverse().slice(0, this.state.end);
//   }
//
//   if(productsList.length === 0) {
//     return (
//      <div className="rainbow-progress-bar"></div>
//    );
//   }
//
//     return (
//       <div>
//         <ul className='product-feed'>
//           { productsList }
//         </ul>
//       </div>
//     );
// }
