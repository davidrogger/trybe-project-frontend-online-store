import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Componentes
import ImageDisplay from './ImageDisplay';

class ProductDetailCard extends Component {
  render() {
    const { product, addItem } = this.props;
    return (
      <div className="product-detail-card">

        <div className="top-container">
          <ImageDisplay pictures={ product.pictures } />

          <div className="info-container">

            <h2>{product.title}</h2>

            <div className="product-delivery-info">
              { `Envio: Frete ${product.shipping.free_shipping ? 'Grátis' : 'Pago'}` }
            </div>

            <div className="product-price">
              { `R$: ${product.price}` }
            </div>

            <button
              type="button"
              onClick={ () => addItem(product) }
            >
              Adicionar ao carrinho
            </button>

          </div>
        </div>
        <div className="product-description">
          <h3>Descrição:</h3>
          <p>
            {
              product.description.length > 0
                ? product.description
                : 'Produto sem descrição'
            }
          </p>
        </div>
      </div>
    );
  }
}

ProductDetailCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool,
    }),
    picture: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      url: PropTypes.string,
    })),
  }),
}.isRequired;

export default ProductDetailCard;
