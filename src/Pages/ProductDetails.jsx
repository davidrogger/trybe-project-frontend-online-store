// Bibliotecas
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Serviços
import { getProductsDetails, getProductDescription } from '../services/api';

// Componentes
import ReviewForms from '../components/ReviewForms';
import DisplayReviews from '../components/DisplayReviews';
import Loading from '../components/Loading';
import ProductDetailCard from '../components/ProductDetailCard';

// Estilos
import '../styles/productDetails.css';
import '../styles/reviewForms.css';

class ProductDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productDetail: {},
      productDetailLoading: true,
      productId: '',
      // eslint-disable-next-line no-magic-numbers
      ratingValues: [1, 2, 3, 4, 5],
    };
  }

  componentDidMount() {
    this.renderProductDetails();
  }

  renderProductDetails = async () => {
    const { match: { params: { id } } } = this.props;
    const [productDetail, description] = await Promise.all([
      await getProductsDetails(id),
      await getProductDescription(id),
    ]);

    this.setState({
      productDetail: { ...productDetail, description },
      productDetailLoading: false,
      productId: id,
      reloadReviewDisplay: true,
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
    const { productDetail, productDetailLoading, productId,
      reloadReviewDisplay, ratingValues,
    } = this.state;
    const { addToCart } = this.props;

    return productDetailLoading
      ? <Loading /> : (
        <>
          <div className="product-detail-container">
            <ProductDetailCard
              product={ productDetail }
              addItem={ addToCart }
            />
          </div>
          <div className="review-container">
            <ReviewForms
              id={ productId }
              reloadingReview={ this.reloadingReview }
              ratingValues={ ratingValues }
            />
            {!reloadReviewDisplay
              ? <p>Carregando</p>
              : (
                <DisplayReviews
                  productId={ productId }
                  ratingValues={ ratingValues }
                />)}
          </div>
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
