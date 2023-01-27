import React, { Component } from 'react';
import { Star } from 'phosphor-react';
import PropTypes from 'prop-types';

class StarFavorite extends Component {
  render() {
    const { rating } = this.props;
    // eslint-disable-next-line no-magic-numbers
    const starRates = [1, 2, 3, 4, 5];
    return (
      <div>
        { starRates.map((star) => (
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
}.isRequired;

export default StarFavorite;
