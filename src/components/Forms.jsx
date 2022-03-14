// Bibliotecas
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Serviços
import { addReview } from '../services/localStorage';

class Forms extends Component {
  constructor() {
    super();
    this.state = {
      reviews: {
        email: '',
        productRating: '',
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
    this.setState({
      reviews: {
        email: '',
        productRating: '',
        review: '',
        productId: '',
      },
    });
  }

  submitBtn = (event, review) => {
    const { reloadingReview } = this.props;
    event.preventDefault();
    addReview(review);
    this.cleanInputForms();
    reloadingReview();
  }

stateUpdate = ({ target }) => {
  const { name, value } = target;
  this.setState((prevState) => ({
    reviews: {
      ...prevState.reviews,
      [name]: value,
    },
  }));
}

createRadioButton = (arr, formState) => (
  <div>
    {arr.map((rating) => (
      <label htmlFor={ rating } key={ rating }>
        <input
          data-testid={ `${rating}-rating` }
          type="radio"
          name="productRating"
          id={ rating }
          checked={ formState.productRating === rating }
          onChange={ this.stateUpdate }
          value={ rating }
        />
        {rating}
      </label>
    ))}
  </div>
)

render() {
  const { reviews } = this.state;
  return (
    <form className="forms-review-container">
      <label htmlFor="email-input">
        E-mail:
        <input
          data-testid="product-detail-email"
          type="email"
          name="email"
          id="email-input"
          placeholder="digite seu e-mail"
          value={ reviews.email }
          required
          onChange={ this.stateUpdate }
        />
      </label>

      {this.createRadioButton(['1', '2', '3', '4', '5'], reviews)}

      <textarea
        data-testid="product-detail-evaluation"
        name="review"
        value={ reviews.review }
        onChange={ this.stateUpdate }
      />

      <button
        onClick={ (event) => this.submitBtn(event, reviews) }
        data-testid="submit-review-btn"
        type="submit"
      >
        Enviar sua avaliação

      </button>
    </form>
  );
}
}

export default Forms;

Forms.propTypes = {
  id: PropTypes.string,
  submitBtn: PropTypes.func,
}.isRequired;
