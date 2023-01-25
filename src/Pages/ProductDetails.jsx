// Bibliotecas
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Serviços
import { getProductsDetails, getProductDescription } from '../services/api';

// Componentes
import Forms from '../components/Forms';
import DisplayReviews from '../components/DisplayReviews';
import Loading from '../components/Loading';
import ProductDetailCard from '../components/ProductDetailCard';

// Estilos
import '../styles/productDetails.css';
import '../styles/review.css';

class ProductDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productDetail: {},
      productDetailLoading: true,
      productId: '',
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
      reloadReviewDisplay } = this.state;
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
