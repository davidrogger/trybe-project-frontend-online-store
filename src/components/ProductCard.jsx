import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductCard extends Component {
  render() {
    const {
      productTitle,
      productImg,
      productPrice,
    } = this.props;

    return (
      <li
        data-testid="product"
        className="product-item"
      >
        <img
          src={ productImg }
          alt={ productTitle }
        />
        <p>{ productTitle }</p>
        <p>{ productPrice }</p>
      </li>
    );
  }
}

export default ProductCard;

ProductCard.propTypes = {
  productTitle: PropTypes.string,
  productImg: PropTypes.string,
  productPrice: PropTypes.number,
}.isRequired;
