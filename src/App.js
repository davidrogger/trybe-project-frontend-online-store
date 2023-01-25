import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchPage from './Pages/Search';
import Header from './components/Header';
import CartPage from './Pages/Cart';
import ProductDetailsPage from './Pages/ProductDetails';
import { addCartInStorage, readCartInStorage } from './services/localStorage';

// Estilo
import './styles/general.css';

class App extends Component {
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
      <Router basename="trybe-project-frontend-online-store">
        <Header productCartQt={ productCartQt } />
        <Switch>
          <Route
            exact
            path="/productdetails/:id"
            render={ (props) => (<ProductDetailsPage
              { ...props }
              addToCart={ this.addToCart }
            />) }
          />

          <Route
            exact
            path="/cart"
            render={ (props) => (<CartPage
              { ...props }
              cartItems={ cartItems }
              handleQuantity={ this.handleQuantity }
            />) }
          />

          <Route
            exact
            path="/"
            render={ (props) => (<SearchPage
              { ...props }
              addToCart={ this.addToCart }
            />) }
          />

        </Switch>
      </Router>
    );
  }
}

export default App;
