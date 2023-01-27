// Bibliotecas
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Serviços
import { readProductReview } from '../services/localStorage';

// Componentes
import ReviewCard from './ReviewCard';

class DisplayReviews extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reviewsList: [],
    };
  }

  componentDidMount() {
    this.storageReviews();
  }

  storageReviews = () => {
    const reviewsList = readProductReview();
    this.setState({
      reviewsList,
    });
  }

  // Index como key provisório, criar uma lógica de key depois.
  allReviews = (reviewsList) => {
    reviewsList.map((review, index) => (<ReviewCard key={ index } review={ review } />));
  }

  render() {
    const { reviewsList } = this.state;
    const { productId, ratingValues } = this.props;

    return (
      <div className="review-history-container">
        {reviewsList
          .filter((reviewInfo) => reviewInfo.productId === productId)
          .map((review, index) => (
            <ReviewCard
              key={ index }
              review={ review }
              ratingValues={ ratingValues }
            />
          ))}
      </div>
    );
  }
}

DisplayReviews.propTypes = {
  productId: PropTypes.string,
  ratingValues: PropTypes.arrayOf(PropTypes.number),
}.isRequirepd;

export default DisplayReviews;
