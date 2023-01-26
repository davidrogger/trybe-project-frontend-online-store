import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCartItems from '../components/ProductCartItems';

import {
  addCartInStorage, readCartInStorage, cleanCartInStorage,
} from '../services/localStorage';

// Estilo
import '../styles/productCart.css';
import Loading from '../components/Loading';

class Cart extends Component {
  constructor() {
    super();

    this.state = {
      cartItems: [],
      reloadCart: false,
    };
  }

  componentDidMount() {
    const cartItems = readCartInStorage();

    this.setState({
      cartItems,
    });
  }

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

  cartItensList = (items) => (
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
            handleQuantity={ this.handleQuantity }
            removeProduct={ this.removeProduct }
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

  loading = (state) => {
    this.setState({
      reloadCart: state,
    });
  }

  removeProduct = (removeIndex) => {
    const { cartWeight } = this.props;
    const productsCart = readCartInStorage();
    const updateCart = productsCart.filter((_, index) => index !== removeIndex);
    addCartInStorage(updateCart);
    this.setState({
      cartItems: updateCart,
    });
    cartWeight();
  }

  saveNewOrder = (orders, newOrder) => {
    localStorage.setItem('orders', JSON.stringify([...orders, newOrder]));
  }

  checkout = (items) => {
    const { history, cartWeight } = this.props;
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
    cleanCartInStorage();
    cartWeight();

    history.push(`/order/${id}`);
  }

  handleQuantity = (index, operator) => {
    const { cartItems } = this.state;
    const { cartWeight } = this.props;

    const { productQt } = cartItems[index];
    if (operator === 'increase') {
      cartItems[index].productQt = productQt + 1;
    }
    if (operator === 'decrease') {
      cartItems[index].productQt = productQt - 1;
    }
    console.log(cartItems);
    addCartInStorage(cartItems);
    this.setState({ cartItems });
    cartWeight();
  }

  render() {
    const { reloadCart, cartItems } = this.state;

    const emptyCart = (
      <p data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </p>);

    const cartDisplay = cartItems.length === 0;

    return reloadCart ? <Loading /> : (
      <div className="cart-itens-container">
        {cartDisplay
          ? emptyCart
          : (this.cartItensList(cartItems))}
      </div>
    );
  }
}

Cart.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  cartWeight: PropTypes.func,
}.isRequired;

export default Cart;
