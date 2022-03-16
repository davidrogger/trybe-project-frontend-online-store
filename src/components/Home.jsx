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

  addToCart = (item) => {
    const { cartItems } = this.state;
    this.setState({
      cartItems: [...cartItems, item],
    }, () => {
      addCartInStorage(item);
    });
  }

  render() {
    const { cartItems } = this.state;
    return (
      <BrowserRouter>
        <Header cartItems={ cartItems } />
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
