import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import carshop from '../img/carshop2.png';

class Header extends Component {
  render() {
    return (
      <header className="header-container">
        <input type="text" />
        <Link to="/cart" data-testid="shopping-cart-button">
          <img src={ carshop } alt="img-carshop" />
        </Link>
      </header>
    );
  }
}

export default Header;
