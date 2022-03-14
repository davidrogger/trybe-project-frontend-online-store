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
  // const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
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
          type="radio"
          name="productRating"
          id={ rating }
          data-testid={ `${rating}-rating` }
          required
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
          type="email"
          name="email"
          id="email-input"
          data-testid="product-detail-email"
          placeholder="digite seu e-mail"
          value={ reviews.email }
          required
          onChange={ this.stateUpdate }
        />
      </label>
      {this.createRadioButton(['1', '2', '3', '4', '5'], reviews)}
      <label htmlFor="user-review">
        <textarea
          name="review"
          id="user-review"
          cols="30"
          rows="10"
          data-testid="product-detail-evaluation"
          placeholder="Escreva sua avaliação aqui"
          value={ reviews.review }
          onChange={ this.stateUpdate }
        />
      </label>
      <button
        onClick={ (event) => this.submitBtn(event, reviews) }
        data-testid="submit-review-btn"
        type="button"
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
