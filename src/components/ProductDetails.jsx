import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductsDetails } from '../services/api';
import Forms from './Forms';
// import DisplayReviews from './DisplayReviews';

class ProductDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productDetail: {},
      productDetailLoading: true,
      productId: '',
    };
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const productDetail = await getProductsDetails(id);
    this.setState({
      productDetail,
      productDetailLoading: false,
      productId: id,
    });
  }

  render() {
    const { productDetail, productDetail: { title, thumbnail,
      price }, productDetailLoading, productId } = this.state;
    const { addToCart } = this.props;
    return productDetailLoading
      ? <p>Carregando</p> : (
        <div className="productdetail-container">
          <h3 data-testid="product-detail-name">{title}</h3>
          <img src={ thumbnail } alt={ title } />
          <p>{price}</p>
          <button
            data-testid="product-detail-add-to-cart"
            type="button"
            onClick={ () => addToCart(productDetail) }
          >
            Adicionar ao Carrinho

          </button>
          <Forms id={ productId } />
          {/* <DisplayReviews /> */}
        </div>
      );
  }
}

ProductDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
}.isRequired;

export default ProductDetail;
