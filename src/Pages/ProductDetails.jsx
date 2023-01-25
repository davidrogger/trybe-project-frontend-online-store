// Bibliotecas
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Serviços
import { getProductsDetails } from '../services/api';

// Componentes
import Forms from '../components/Forms';
import DisplayReviews from '../components/DisplayReviews';
import Loading from '../components/Loading';

class ProductDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productDetail: {},
      productDetailLoading: true,
      productId: '',
      freeShipping: false,
    };
  }

  componentDidMount() {
    this.renderProductDetails();
  }

  renderProductDetails = async () => {
    const { match: { params: { id } } } = this.props;
    const productDetail = await getProductsDetails(id);
    this.setState({
      productDetail,
      productDetailLoading: false,
      productId: id,
      reloadReviewDisplay: true,
      freeShipping: productDetail.shipping.free_shipping,

    });
  }

  reloadingReview = () => {
    this.setState({
      reloadReviewDisplay: false,
    }, () => this.setState({
      reloadReviewDisplay: true,
    }));
  }

  render() {
    const { productDetail, productDetail: { title, thumbnail,
      price }, productDetailLoading, productId,
    reloadReviewDisplay, freeShipping } = this.state;
    const { addToCart } = this.props;
    return productDetailLoading
      ? <Loading /> : (
        <>
          <div className="productdetail-container">
            <h3 data-testid="product-detail-name">{title}</h3>
            <img src={ thumbnail } alt={ title } />
            <p>
              Preço:
              {price}
            </p>
            { freeShipping
              && (<span data-testid="free-shipping">Frete Grátis</span>)}
            <button
              data-testid="product-detail-add-to-cart"
              type="button"
              onClick={ () => addToCart(productDetail) }
            >
              Adicionar ao Carrinho

            </button>
          </div>
          <Forms id={ productId } reloadingReview={ this.reloadingReview } />
          {!reloadReviewDisplay
            ? <p>Carregando</p>
            : <DisplayReviews />}
        </>
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
