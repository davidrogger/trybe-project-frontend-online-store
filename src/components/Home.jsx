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
    };
  }

  componentDidMount() {
    this.setState({ cartItems: readCartInStorage() });
  }

  cartCheck = (item) => {
    const cartHistory = readCartInStorage();

    const productIndex = cartHistory
      .findIndex(({ productData }) => productData.id === item.id);
    if (productIndex < 0) return [...cartHistory, { productData: item, qt: 1 }];
    const { qt } = cartHistory[productIndex];
    cartHistory[productIndex].qt = qt + 1;
    return cartHistory;
  }

  addToCart = (item) => {
    const product = this.cartCheck(item);
    addCartInStorage(product);
    this.setState({ cartItems: readCartInStorage() });
  }

  render() {
    const { cartItems } = this.state;
    return (
      <BrowserRouter>
        <Header /* cartSize={ cartItems.length } */ />
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
