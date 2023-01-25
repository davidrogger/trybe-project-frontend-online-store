// Bibliotecas
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Componentes
import SearchInput from '../components/SearchInput';
import Category from '../components/Category';
import Loading from '../components/Loading';

// Paginas

// Estilo
import '../styles/general.css';

// Funçôes
import { getProductsFromCategoryAndQuery } from '../services/api';

class InputSearch extends Component {
  constructor() {
    super();
    this.state = {
      loadingSearch: false,
      searchInput: '',
      products: [],
      categorySearched: [],
      cateogiryFilter: undefined,
    };
  }

  pageLoading = (state) => {
    this.setState({
      loadingSearch: state,
    });
  }

  handleCategoryClick = async (id) => {
    this.pageLoading(true);
    const response = await getProductsFromCategoryAndQuery(id);
    this.setState({
      categorySearched: response.results,
      cateogiryFilter: id,
    });
    this.pageLoading(false);
  }

  handleChange = ({ target }) => {
    this.setState({
      searchInput: target.value,
    });
  }

  handleClick = async () => {
    const { searchInput, cateogiryFilter } = this.state;
    this.pageLoading(true);
    const response = await getProductsFromCategoryAndQuery(cateogiryFilter, searchInput);
    this.setState({
      products: response.results,
    });
    this.pageLoading(false);
  }

  render() {
    const {
      loadingSearch,
      products,
      categorySearched,
    } = this.state;
    const { addToCart } = this.props;
    const displaySearch = products.length === 0;
    const selectedProducts = displaySearch ? categorySearched : products;

    return loadingSearch ? <Loading /> : (
      <div className="home-container">
        <Category
          handleCategoryClick={ this.handleCategoryClick }
          cateogiryFilter={ this.cateogiryFilter }
        />
        <div className="side-container">
          <div className="search-input-container">
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
          </div>

          <SearchInput
            products={ selectedProducts }
            addToCart={ addToCart }
          />
        </div>
      </div>
    );
  }
}

InputSearch.propTypes = {
  addToCart: PropTypes.func,
}.isRequired;

export default InputSearch;
