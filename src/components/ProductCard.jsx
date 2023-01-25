import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { getProductsDetails } from '../services/api';

// Estilo
import '../styles/productCard.css';

class ProductCard extends Component {
  render() {
    const { productDetails, addToCart } = this.props;
    const { thumbnail: productImg, title: productTitle,
      price: productPrice, id,
      shipping: { free_shipping: freeShipping } } = productDetails;

    return (
      <li
        data-testid="product"
        className="product-item"
      >
        <img
          src={ productImg }
          alt={ productTitle }
        />

        { freeShipping
              && (
                <span
                  className="free-shipping-container"
                  data-testid="free-shipping"
                >
                  Frete Grátis
                </span>
              )}
        <div className="product-card-info">
          <h3>{ productTitle }</h3>
          <Link to={ `/productdetails/${id}` } data-testid="product-detail-link">
            <p>Detalhes</p>
          </Link>
        </div>

        <span>{`R$ ${productPrice}`}</span>

        <button
          data-testid="product-add-to-cart"
          type="button"
          onClick={ () => addToCart(productDetails) }
        >
          Adicionar ao Carrinho
        </button>
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
