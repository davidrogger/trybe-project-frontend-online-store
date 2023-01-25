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
      categoryFilter: undefined,
    };
  }

  pageLoading = (state) => {
    this.setState({
      loadingSearch: state,
    });
  }

  applyCategoryFilter = (categoryFilter, id) => {
    if (!categoryFilter) {
      this.setState({
        categoryFilter: id,
      });
      return true;
    }

    this.setState({
      categoryFilter: undefined,
    });
    return false;
  }

  searchHandler = async (id) => {
    const { categoryFilter } = this.state;
    // eslint-disable-next-line no-magic-numbers
    let minTimeWait = 500;
    this.pageLoading(true);

    if (this.applyCategoryFilter(categoryFilter, id)) {
      minTimeWait = 0;
      const response = await getProductsFromCategoryAndQuery(id);
      this.setState({
        categorySearched: response.results,
      });
    } else {
      this.setState({
        categorySearched: [],
      });
    }
    setTimeout(() => this.pageLoading(false), minTimeWait);
  }

  handleChange = ({ target }) => {
    this.setState({
      searchInput: target.value,
    });
  }

  handleClick = async () => {
    const { searchInput, categoryFilter } = this.state;
    this.pageLoading(true);
    const response = await getProductsFromCategoryAndQuery(categoryFilter, searchInput);
    this.setState({
      products: response.results,
    });
    this.pageLoading(false);
  }

  render() {
    const {
      loadingSearch,
      products,
      categoryFilter,
      categorySearched,
    } = this.state;
    const { addToCart } = this.props;
    const displaySearch = products.length === 0;
    const selectedProducts = displaySearch ? categorySearched : products;

    return loadingSearch ? <Loading /> : (
      <div className="home-container">
        <Category
          handleCategoryClick={ this.searchHandler }
          categoryFilter={ categoryFilter }
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
