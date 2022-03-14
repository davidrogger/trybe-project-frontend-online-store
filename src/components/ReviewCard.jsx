// Bibliotecas
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ReviewCard extends Component {
  render() {
    const { review: { email, productRating, review } } = this.props;
    return (
      <div className="reviewcard-container">
        <p>{email}</p>
        <p>{productRating}</p>
        {review}
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
