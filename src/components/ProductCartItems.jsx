import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductCartItems extends Component {
  render() {
    const { title, price, thumbnail } = this.props;

    return (
      <li>
        <img src={ thumbnail } alt={ title } />
        <p className="cartItem-title" data-testid="shopping-cart-product-name">{title}</p>
        <p className="cartItem-qt">
          Qt:
          <span data-testid="shopping-cart-product-quantity">1</span>
        </p>
        <span className="cartItem-price">{price}</span>
      </li>
    );
  }
}

ProductCartItems.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
}.isRequired;

export default ProductCartItems;
