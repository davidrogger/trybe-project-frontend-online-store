// Bibliotecas
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Serviços
import { addReview } from '../services/localStorage';

// Componentes
import StarSelection from './StarSelection';

class ReviewForms extends Component {
  constructor() {
    super();
    this.state = {
      reviews: {
        email: '',
        productRating: 0,
        review: '',
        productId: '',
      },
    };
  }

  componentDidMount() {
    const { id } = this.props;
    this.setState((prevState) => ({
      reviews: {
        ...prevState.reviews,
        productId: id,
      },
    }));
  }

  cleanInputForms = () => {
    this.setState(({ reviews: { productId } }) => ({
      reviews: {
        email: '',
        productRating: 0,
        review: '',
        productId,
      },
    }));
  }

  submitBtn = (event, review) => {
    const { reloadingReview } = this.props;
    event.preventDefault();
    addReview(review);
    this.cleanInputForms();
    reloadingReview();
  }

reviewUpdated = ({ target }) => {
  const { name, value } = target;
  console.log({ ...target });
  this.setState((prevState) => ({
    reviews: {
      ...prevState.reviews,
      [name]: value,
    },
  }));
}

render() {
  const { reviews } = this.state;
  const { ratingValues } = this.props;

  return (
    <div className="forms-review-container default-shadown-card">
      <h3>Deixe sua avaliação!</h3>
      <form>
        <label
          className="email-input"
          htmlFor="email-input"
        >
          E-mail:
          <input
            data-testid="product-detail-email"
            type="email"
            name="email"
            id="email-input"
            placeholder="digite seu e-mail"
            value={ reviews.email }
            required
            onChange={ this.reviewUpdated }
          />
        </label>

        <StarSelection
          ratingValues={ ratingValues }
          productRating={ reviews.productRating }
          reviewUpdated={ this.reviewUpdated }
        />

        <div className="form-review-msg">
          <textarea
            data-testid="product-detail-evaluation"
            name="review"
            value={ reviews.review }
            onChange={ this.reviewUpdated }
          />

          <button
            className="default-button-hover default-click-button-effect"
            onClick={ (event) => this.submitBtn(event, reviews) }
            data-testid="submit-review-btn"
            type="submit"
          >
            Enviar sua avaliação

          </button>
        </div>
      </form>
    </div>
  );
}
}

export default ReviewForms;

ReviewForms.propTypes = {
  id: PropTypes.string,
  submitBtn: PropTypes.func,
  ratingValues: PropTypes.arrayOf(PropTypes.number),
}.isRequired;
