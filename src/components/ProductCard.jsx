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
        <Link to={ `/productdetails/${id}` } data-testid="product-detail-link">
          <p>Detalhes</p>
        </Link>
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
