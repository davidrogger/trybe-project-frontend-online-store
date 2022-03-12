import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductsDetails } from '../services/api';

class ProductDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productDetail: {},
      productDetailLoading: true,
    };
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const productDetail = await getProductsDetails(id);
    this.setState({
      productDetail,
      productDetailLoading: false,
    });
  }

  render() {
    const { productDetail: { title, thumbnail,
      price }, productDetailLoading } = this.state;
    return productDetailLoading
      ? <p>Carregando</p> : (
        <div className="productdetail-container">
          <h3 data-testid="product-detail-name">{title}</h3>
          <img src={ thumbnail } alt={ title } />
          <p>{price}</p>
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
