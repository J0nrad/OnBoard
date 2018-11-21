import React from 'react';
import { withRouter } from 'react-router-dom';

class ProductForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      price: 0,
      lat: 0.0,
      lng: 0.0,
      images: [];
    };
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="wrapper-product">
        <div className="product-form-container">
          <form onSubmit={this.handleSubmit} className="product-form-box">
            <div className="form-type-product">
              Let's sell some stuff!
              {this.renderErrors()}
            </div>
            <div className="product-form">
                <input type="text"
                  placeholder="Title"
                  value={this.state.title}
                  onChange={this.update('title')}
                  className="title-input"
                />
                <input type="text"
                  placeholder="Description"
                  value={this.state.description}
                  onChange={this.update('description')}
                  className="description-input"
                />
              <input type="text"
                  placeholder="Price"
                  value={this.state.price}
                  onChange={this.update('price')}
                  className="price-input"
                />
              <input type="file"
                  placeholder="Share Image"
                  value={this.state.images}
                  onChange={this.update('')}
                  className="images-input"
                />
              <input className="product-submit" type="submit" value="Sell this product" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(ProductForm);
