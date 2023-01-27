import React, { Component } from 'react';
import { Star } from 'phosphor-react';
import PropTypes from 'prop-types';

class StarFavorite extends Component {
  render() {
    const { rating, ratingValues } = this.props;
    return (
      <div>
        { ratingValues.map((star) => (
          <Star
            key={ star }
            weight={ star <= rating ? 'fill' : 'regular' }
          />)) }
      </div>
    );
  }
}

StarFavorite.propTypes = {
  rating: PropTypes.number,
  ratingValues: PropTypes.arrayOf(PropTypes.number),
}.isRequired;

export default StarFavorite;
