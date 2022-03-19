import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductCartItems extends Component {
  render() {
    const { title, price, thumbnail, productQt, index, handleQuantity } = this.props;

    return (
      <li className="cartProductList-container">
        <div className="cartProduct-img-title-container">
          <img src={ thumbnail } alt={ title } />
          <p data-testid="shopping-cart-product-name">{title}</p>
        </div>
        <div className="quantity-container">

          <button
            type="button"
            data-testid="product-decrease-quantity"
            onClick={ () => handleQuantity(index, 'decrease') }
            disabled={ productQt === 1 }
          >
            -
          </button>
          <span data-testid="shopping-cart-product-quantity">{productQt}</span>
          <button
            type="button"
            data-testid="product-increase-quantity"
            onClick={ () => handleQuantity(index, 'increase') }
          >
            +
          </button>

        </div>
        <span>{`R$: ${(price * productQt).toFixed(2)}`}</span>
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
