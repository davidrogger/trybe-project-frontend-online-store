import React, { Component } from 'react';

class Forms extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

createRadioButton = (arr) => (
  <div>
    {arr.map((rating) => (
      <label htmlFor={ rating } key={ rating }>
        <input
          type="radio"
          name="product-rating"
          id={ rating }
          data-testid={ `${rating}-rating` }
        />
        {rating}
      </label>
    ))}
  </div>
)

render() {
  return (
    <form>
      <label htmlFor="email-input">
        <input
          type="email"
          name=""
          id="email-input"
          data-testid="product-detail-email"
          required
        />
        E-mail:
      </label>
      {this.createRadioButton(['1', '2', '3', '4', '5'])}
    </form>
  );
}
}

export default Forms;
