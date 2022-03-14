// Bibliotecas
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ReviewCard extends Component {
  render() {
    const { review: { email, productRating, review } } = this.props;
    return (
      <div className="reviewcard-container">
        <p>
          Email:
          {' '}
          {email}
        </p>
        <p>
          Nota:
          {' '}
          {productRating}
        </p>
        {review && (
          <p>
            {review}
          </p>
        )}
      </div>
    );
  }
}

ReviewCard.propTypes = {
  review: PropTypes.shape({
    email: PropTypes.string,
    productRating: PropTypes.string,
    review: PropTypes.string,
  }).isRequired,
};

export default ReviewCard;
