import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

// Estilos
import '../styles/searchInput.css';

class Search extends Component {
  render() {
    const { products, addToCart } = this.props;
    const searchDisplay = products.length === 0;
    const emptySearch = (
      <p
        data-testid="home-initial-message"
      >
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>);

    const productsFound = (items) => (
      <ul>
        {items.map((item) => (

          <ProductCard
            addToCart={ addToCart }
            key={ item.id }
            productDetails={ item }
          />

        ))}
      </ul>
    );
    return (

      <div className="search-container">
        { searchDisplay
          ? emptySearch
          : productsFound(products) }
      </div>
    );
  }
}
export default Search;

Search.propTypes = {
  products: PropTypes.shape({}),
}.isRequired;
