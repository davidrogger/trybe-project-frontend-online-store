import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import InputSearch from '../Pages/InputSearch';
import Header from './Header';
import Cart from '../Pages/Cart';
import ProductDetails from './ProductDetails';

class Home extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/productdetails/:id" component={ ProductDetails } />
          <Route path="/cart" component={ Cart } />
          <Route exact path="/" component={ InputSearch } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Home;
