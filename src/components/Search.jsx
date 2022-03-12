import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class Search extends Component {
  render() {
    const { products } = this.props;
    const searchDisplay = products.length === 0;
    const emptySearch = (
      <p
        data-testid="home-initial-message"
      >
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>);

    const productsFound = (items) => (
      <ul>
        {items.map(({ price, thumbnail, title, id }) => (

          <ProductCard
            key={ id }
            id={ id }
            productTitle={ title }
            productImg={ thumbnail }
            productPrice={ price }
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
