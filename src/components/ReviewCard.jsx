// Bibliotecas
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Componentes
import StarFavorite from './StarFavorite';

class ReviewCard extends Component {
  render() {
    const { review: { email, productRating, review }, ratingValues } = this.props;
    return (
      <div className="product-review default-shadown-card">
        <div className="review-left-side">
          <p>{email}</p>
        </div>
        <div className="review-right-side">
          <div className="rating-container">
            <StarFavorite
              rating={ productRating }
              ratingValues={ ratingValues }
            />
          </div>
          <p>
            {review}
          </p>
        </div>
      </div>
    );
  }
}

ReviewCard.propTypes = {
  review: PropTypes.shape({
    email: PropTypes.string,
    productRating: PropTypes.string,
    review: PropTypes.string,
  }),
  ratingValues: PropTypes.arrayOf(PropTypes.number),
}.isRequired;

export default ReviewCard;
