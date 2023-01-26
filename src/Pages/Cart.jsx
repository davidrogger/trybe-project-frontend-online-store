import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCartItems from '../components/ProductCartItems';

// Estilo
import '../styles/productCart.css';

class Cart extends Component {
  cartItensList = (items, handleQuantity) => (
    <div className="cartList-container">
      <ol className="">
        {items.map(({ productData, productQt }, index) => (
          <ProductCartItems
            key={ productData.id }
            title={ productData.title }
            thumbnail={ productData.thumbnail }
            price={ productData.price }
            availableQt={ productData.available_quantity }
            productQt={ productQt }
            index={ index }
            handleQuantity={ handleQuantity }
          />
        ))}
      </ol>
      <button
        className="checkout-btn default-button-hover default-click-button-effect"
        type="button"
      >
        Finalizar Compra
      </button>
    </div>)

  render() {
    const { cartItems, handleQuantity } = this.props;

    const emptyCart = (
      <p data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </p>);

    const cartDisplay = cartItems.length === 0;

    return (
      <div className="cart-itens-container">
        {cartDisplay
          ? emptyCart
          : (this.cartItensList(cartItems, handleQuantity))}
      </div>
    );
  }
}

Cart.propTypes = {
  cartItems: PropTypes.array,
}.isRequired;

export default Cart;
