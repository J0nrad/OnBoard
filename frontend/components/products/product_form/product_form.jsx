import React from 'react';
import {withRouter} from 'react-router-dom';
import NavBar from '../../nav_bar/nav_bar'

class ProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      price: 0,
      category: [
        'Surf', 'Skate', 'Snow'
      ],
      lat: 0.0,
      lng: 0.0,
      image_url: '',
      images: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  generatePreviewImgUrl(file, previewImageFile) {
    const reader = new FileReader()
    const url = reader.readAsDataURL(file)
    reader.onloadend = e => previewImageFile(reader.result)
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  handleChange(e) {
    const file = e.currentTarget.files[0]

    // User cancelled
    if (!file) {
      return
    }

    generatePreviewImgUrl(file, previewImgUrl => {
      // (assuming we use React)
      this.setState({previewImgUrl})
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState(e.currentTarget.value);
  }

  // renderErrors() {
  //   return(
  //     <ul>
  //       {this.props.errors.map((error, i) => (
  //         <li key={`error-${i}`}>
  //           {error}
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }

  render() {
    let categoryOptions = this.state.category.map((cate, idx) => {
      return <option key={idx} value={'cate'}>{cate}</option>
    });
    // {this.renderErrors()}
    return (
      <div className="full-display">
        <div className="pic-1"></div>
        <div className="pic-2"></div>
        <div className="pic-3"></div>
        <form onSubmit={this.handleSubmit} className="product-form-wrapper">

            <h2 className="product-form-title">ONBOARD YOUR BOARD!</h2>


            <label className="product-title-label">Title</label>
            <input type="text" placeholder="Title" value={this.state.title} onChange={this.update('title')} className="product-input"/>


            <label>Description</label>
            <input type="text" placeholder="Description" value={this.state.description} onChange={this.update('description')} className="product-input"/>

            <label className="product-price-label">Price</label>
            <input type="text" value={this.state.price} onChange={this.update('price')} className="price-input"/>

            <label className="sports-category-label">What type of Board</label>
            <select placeholder="Choose..." className="category-select-button">
              {categoryOptions}
            </select>
            <div className="product-bottom-buttons">
            <input type="file" id="image-file" value={this.state.image_url} onChange={this.update('image_url')} className="images-input"/>
              <label className="file-image-label" htmlFor="image-file">Add Product Image</label>
              <div className="product-seperator"> | </div>
              <input className="product-submit" type="submit" value="Post this product"/>
            </div>
    </form>
    </div>
  );
  }
}

//
export default withRouter(ProductForm);
