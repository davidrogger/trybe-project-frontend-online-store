import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCartItems from '../components/ProductCartItems';

class Cart extends Component {
  cartItensList = (items) => (
    <ol>
      {items.map((item) => (
        <ProductCartItems
          key={ item.id }
          title={ item.title }
          thumbnail={ item.thumbnail }
          price={ item.price }
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
