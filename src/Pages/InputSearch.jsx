// Bibliotecas
import React, { Component } from 'react';

// Componentes
import Search from '../components/Search';
import Category from '../components/Category';

// Paginas

// Estilo
import '../styles/general.css';

// Funçôes
import { getProductsFromCategoryAndQuery } from '../services/api';

class InputSearch extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: '',
      products: [],
    };
  }

  handleChange = ({ target }) => {
    this.setState({
      searchInput: target.value,
    });
  }

  handleClick = async () => {
    const { searchInput } = this.state;
    const response = await getProductsFromCategoryAndQuery(undefined, searchInput);
    this.setState({
      products: response.results,
    });
  }

  render() {
    const {
      products,
    } = this.state;

    return (
      <div className="home-container">
        <Category />
        <div className="side-container">
          <input
            type="text"
            onChange={ this.handleChange }
            placeholder="Digite aqui"
            data-testid="query-input"
          />
          <button
            type="submit"
            data-testid="query-button"
            onClick={ this.handleClick }
          >
            Pesquisar
          </button>
          <Search
            products={ products }
          />
        </div>
      </div>
    );
  }
}

export default InputSearch;
