import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
  render() {
    const {
      productTitle,
      productImg,
      productPrice,
      id,
    } = this.props;

    return (
      <Link to={ `/productdetails/${id}` } data-testid="product-detail-link">
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
      </Link>
    );
  }
}

export default ProductCard;

ProductCard.propTypes = {
  productTitle: PropTypes.string,
  productImg: PropTypes.string,
  productPrice: PropTypes.number,
}.isRequired;
