import React, { Component } from 'react';
import PropTypes from 'prop-types';
import carshop from '../img/carshop2.png';

class Header extends Component {
  render() {
    const {
      handleChange,
      handleClick,
    } = this.props;
    return (
      <header className="header-container">
        <input
          type="text"
          onChange={ handleChange }
          placeholder="Digite aqui"
          data-testid="query-input"
        />
        <button
          type="submit"
          data-testid="query-button"
          onClick={ handleClick }
        >
          Pesquisar
        </button>
        <img src={ carshop } alt="img-carshop" />
      </header>
    );
  }
}

export default Header;

Header.propTypes = {
  handleChange: PropTypes.func,
  handleClick: PropTypes.func,
}.isRequired;
