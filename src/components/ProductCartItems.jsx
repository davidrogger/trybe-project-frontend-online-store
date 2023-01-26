import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Trash } from 'phosphor-react';

class ProductCartItems extends Component {
  render() {
    const { title, price, thumbnail, productQt, index,
      handleQuantity, availableQt, order = false, cart = false } = this.props;

    return (
      <li className="cartProductList-container">
        <div className="cartProduct-img-title-container">
          <img src={ thumbnail } alt={ title } />
          <p data-testid="shopping-cart-product-name">{title}</p>
        </div>
        <div className="quantity-container">
          { order
            ? <span>{ productQt }</span>
            : (
              <>
                <button
                  type="button"
                  data-testid="product-decrease-quantity"
                  onClick={ () => handleQuantity(index, 'decrease', availableQt) }
                  disabled={ productQt === 1 }
                >
                  -
                </button>
                <span data-testid="shopping-cart-product-quantity">{productQt}</span>
                <button
                  type="button"
                  data-testid="product-increase-quantity"
                  onClick={ () => handleQuantity(index, 'increase') }
                  disabled={ productQt === availableQt }
                >
                  +
                </button>
              </>)}

        </div>
        <span className="product-price">{`R$: ${(price * productQt).toFixed(2)}`}</span>

        {cart
          && (
            <Trash
              className="cart-remove-btn"
              size={ 25 }
              color="red"
              onClick={ () => console.log('removeu') }
            />
          )}
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
