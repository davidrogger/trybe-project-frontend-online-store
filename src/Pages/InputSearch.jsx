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
      categorySearched: [],
      cateogiryFilter: undefined,
    };
  }

  handleCategoryClick = async (id) => {
    const response = await getProductsFromCategoryAndQuery(id);
    this.setState({
      categorySearched: response.results,
      cateogiryFilter: id,
    });
  }

  handleChange = ({ target }) => {
    this.setState({
      searchInput: target.value,
    });
  }

  handleClick = async () => {
    const { searchInput, cateogiryFilter } = this.state;
    const response = await getProductsFromCategoryAndQuery(cateogiryFilter, searchInput);
    this.setState({
      products: response.results,
    });
  }

  render() {
    const {
      products,
      categorySearched,
    } = this.state;

    const displaySearch = products.length === 0;
    const selectedProducts = displaySearch ? categorySearched : products;

    return (
      <div className="home-container">
        <Category
          handleCategoryClick={ this.handleCategoryClick }
        />
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
            products={ selectedProducts }
          />
        </div>
      </div>
    );
  }
}

export default InputSearch;
