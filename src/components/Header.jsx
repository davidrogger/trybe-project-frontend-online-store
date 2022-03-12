import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import carshopIco from '../img/carshop2.png';
import searchIco from '../img/search2.png';

class Header extends Component {
  render() {
    return (
      <header className="header-container">
        <h1>Project Frontend Online Storage</h1>
        <div className="header-nav">
          <Link to="/" data-testid="shopping-cart-button">
            <img src={ searchIco } alt="img-search" />
          </Link>
          <Link to="/cart" data-testid="shopping-cart-button">
            <img src={ carshopIco } alt="img-carshop" />
          </Link>

        </div>
      </header>
    );
  }
}

export default Header;
