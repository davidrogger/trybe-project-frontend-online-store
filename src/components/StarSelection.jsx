import React, { Component } from 'react';
import { Star } from 'phosphor-react';
import PropTypes from 'prop-types';

class StarSelection extends Component {
  render() {
    const { ratingValues, productRating, reviewUpdated } = this.props;
    return (
      <div>
        { ratingValues.map((star) => (
          <Star
            key={ star }
            data-testid={ `${star}-rating` }
            weight={ star <= productRating ? 'fill' : 'regular' }
            onClick={ () => reviewUpdated(
              { target: { name: 'productRating', value: star } },
            ) }
          />)) }
      </div>
    );
  }
}

StarSelection.propTypes = {
  ratingValues: PropTypes.arrayOf(PropTypes.number),
  productRating: PropTypes.number,
  reviewUpdated: PropTypes.func,
}.isRequired;

export default StarSelection;
