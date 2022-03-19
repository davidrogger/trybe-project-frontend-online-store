import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCartItems from '../components/ProductCartItems';

class Cart extends Component {
  cartItensList = (items) => (
    <ol>
      {items.map(({ productData, productQt }) => (
        <ProductCartItems
          key={ productData.id }
          title={ productData.title }
          thumbnail={ productData.thumbnail }
          price={ productData.price }
          productQt={ productQt }
        />
      ))}
    </ol>);

  render() {
    const { cartItems } = this.props;

    const emptyCart = (
      <p data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </p>);

    const cartDisplay = cartItems.length === 0;

    return (
      <div className="cartItens-container">
        {cartDisplay
          ? emptyCart
          : (this.cartItensList(cartItems))}
      </div>
    );
  }
}

Cart.propTypes = {
  cartItems: PropTypes.array,
}.isRequired;

export default Cart;
