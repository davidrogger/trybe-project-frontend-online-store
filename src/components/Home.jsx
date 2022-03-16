import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import InputSearch from '../Pages/InputSearch';
import Header from './Header';
import Cart from '../Pages/Cart';
import ProductDetails from './ProductDetails';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartItems: [],
      cartSize: 0,
    };
  }

  componentDidMount() {
    this.getProductsFromCart();
  }

  getProductsFromCart = () => {
    const cartSize = JSON.parse(localStorage.getItem('cartSize'));
    if (cartSize !== null) {
      this.setState({
        cartSize: cartSize.length,
      });
    }
  }

  addToCart = (item) => {
    const { cartItems } = this.state;
    this.setState({
      cartItems: [...cartItems, item],
    }, () => {
      const size = JSON.stringify([...cartItems, item]);
      localStorage.setItem('cartSize', size);
      this.getProductsFromCart();
    });
  }

  render() {
    const { cartItems, cartSize } = this.state;
    return (
      <BrowserRouter>
        <Header cartSize={ cartSize } />
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
