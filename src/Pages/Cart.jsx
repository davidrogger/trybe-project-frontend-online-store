import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCartItems from '../components/ProductCartItems';

// Estilo
import '../styles/productCart.css';

class Cart extends Component {
  getTotalCart(items) {
    return items
      .reduce((total, { productData }) => total + Number(productData.price), 0)
      .toFixed(2);
  }

  getNewId() {
    const radix = 36;
    return Date.now().toString(radix).toUpperCase();
  }

  getOrderHistory() {
    return JSON.parse(localStorage.getItem('orders') || '[]');
  }

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
            cart
          />
        ))}
      </ol>
      <div className="checkout-container">
        <div className="total-container">
          <h2>Total:</h2>
          <span>
            {`R$: ${this.getTotalCart(items)}`}
          </span>
        </div>
        <button
          className="checkout-btn default-button-hover default-click-button-effect"
          type="button"
          onClick={ () => this.checkout(items) }
        >
          Finalizar Compra
        </button>
      </div>
    </div>)

  saveNewOrder(orders, newOrder) {
    localStorage.setItem('orders', JSON.stringify([...orders, newOrder]));
  }

  checkout(items) {
    const { history } = this.props;
    const total = this.getTotalCart(items);
    const id = this.getNewId();
    const newOrder = {
      id,
      products: items,
      total,
    };

    const orders = this.getOrderHistory();

    if (orders.length === 0) {
      localStorage.setItem('orders', '[]');
    }

    this.saveNewOrder(orders, newOrder);

    history.push(`/order/${id}`);
  }

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
