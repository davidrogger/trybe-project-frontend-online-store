import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import carshopIco from '../img/carshop2.png';
import searchIco from '../img/search2.png';

class Header extends Component {
  render() {
    const { cartItems } = this.props;
    const cartItemsSize = cartItems.length;
    return (
      <header className="header-container">
        <h1>Project Frontend Online Storage</h1>
        <div className="header-nav">
          <Link to="/">
            <img src={ searchIco } alt="img-search" />
          </Link>
          <Link to="/cart" data-testid="shopping-cart-button">
            <img src={ carshopIco } alt="img-carshop" />
          </Link>
          <div data-testid="shopping-cart-size">{ cartItemsSize }</div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  cartItems: PropTypes.array,
}.isRequired;

export default Header;
