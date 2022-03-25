import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import InputSearch from '../Pages/InputSearch';
import Header from './Header';
import Cart from '../Pages/Cart';
import ProductDetails from './ProductDetails';
import { addCartInStorage, readCartInStorage } from '../services/localStorage';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartItems: [],
      productCartQt: 0,
    };
  }

  componentDidMount() {
    this.setState({ cartItems: readCartInStorage() });
    this.cartWeight();
  }

  handleQuantity = (index, operator) => {
    const cartHistory = readCartInStorage();
    const { productQt } = cartHistory[index];
    if (operator === 'increase') {
      cartHistory[index].productQt = productQt + 1;
    }
    if (operator === 'decrease') {
      cartHistory[index].productQt = productQt - 1;
    }
    addCartInStorage(cartHistory);
    this.setState({ cartItems: readCartInStorage() });
    this.cartWeight();
  }

  cartWeight = () => {
    const cartHistory = readCartInStorage();
    const productCartQt = cartHistory
      .map(({ productQt }) => productQt)
      .reduce((total, quantity) => total + quantity, 0);
    this.setState({ productCartQt });
  }

  cartCheck = (item) => {
    const cartHistory = readCartInStorage();

    const productIndex = cartHistory
      .findIndex(({ productData }) => productData.id === item.id);
    if (productIndex < 0) return [...cartHistory, { productData: item, productQt: 1 }];
    const { productQt } = cartHistory[productIndex];
    cartHistory[productIndex].productQt = productQt + 1;
    return cartHistory;
  }

  addToCart = (item) => {
    const product = this.cartCheck(item);
    addCartInStorage(product);
    this.setState({ cartItems: readCartInStorage() });
    this.cartWeight();
  }

  render() {
    const { cartItems, productCartQt } = this.state;
    return (
      <BrowserRouter>
        <Header productCartQt={ productCartQt } />
        <Switch>
          <Route
            path="/productdetails/:id"
            render={ (props) => (<ProductDetails
              { ...props }
              addToCart={ this.addToCart }
            />) }
          />
          <Route
            path="/cart"
            render={ (props) => (<Cart
              { ...props }
              cartItems={ cartItems }
              handleQuantity={ this.handleQuantity }
            />) }
          />
          <Route
            exact
            path="/"
            render={ (props) => (<InputSearch
              { ...props }
              addToCart={ this.addToCart }
            />) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Home;
