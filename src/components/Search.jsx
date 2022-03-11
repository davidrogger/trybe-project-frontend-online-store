import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

// teste PR
class Search extends Component {
  render() {
    const {
      products,
    } = this.props;

    const defaultMsg = (
      <p
        className="search-container"
      >
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>
    );

    if (products.length === 0) return defaultMsg;

    return (
      <div
        data-testid="home-initial-message"
        className="search-container"
      >

        <ul
          className="product-container"
        >
          {products.map(({ price, thumbnail, title, id }) => (
            <ProductCard
              key={ id }
              productTitle={ title }
              productImg={ thumbnail }
              productPrice={ price }
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Search;

Search.propTypes = {
  products: PropTypes.shape({}),
}.isRequired;
