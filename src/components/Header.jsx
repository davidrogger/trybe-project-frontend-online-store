import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import carshop from '../img/carshop2.png';

class Header extends Component {
  render() {
    // const {
    //   handleChange,
    //   handleClick,
    // } = this.props;
    return (
      <header className="header-container">
        <Link to="/cart" data-testid="shopping-cart-button">
          <img src={ carshop } alt="img-carshop" />
        </Link>
      </header>
    );
  }
}

export default Header;

// Header.propTypes = {
//   handleChange: PropTypes.func,
//   handleClick: PropTypes.func,
// }.isRequired;
