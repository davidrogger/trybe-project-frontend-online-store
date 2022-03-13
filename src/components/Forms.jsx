import React, { Component } from 'react';

class Forms extends Component {
  constructor() {
    super();
    this.state = {
      reviews: {
        email: '',
        'product-rating': '',
        review: '',
      },
    };
  }

stateUpdate = ({ target }) => {
  const { name, value } = target;
  // const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
  console.log(value, name);
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
          name="product-rating"
          id={ rating }
          data-testid={ `${rating}-rating` }
          required
          checked={ formState.rating === rating }
        />
        {rating}
      </label>
    ))}
  </div>
)

render() {
  const { reviews } = this.state;
  return (
    <form>
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
          value={ reviews.review }
          onChange={ this.stateUpdate }
        />
      </label>
      <button data-testid="submit-review-btn" type="submit">Enviar sua avaliação</button>
    </form>
  );
}
}

export default Forms;
