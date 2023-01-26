// Bibliotecas
import React, { Component } from 'react';

// Serviços
import { readProductReview } from '../services/localStorage';

// Componentes
import ReviewCard from './ReviewCard';

class DisplayReviews extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reviewsList: [],
    };
  }

  componentDidMount() {
    this.storageReviews();
  }

  storageReviews = () => {
    const reviewsList = readProductReview();
    this.setState({
      reviewsList,
    });
  }

  // Index como key provisório, criar uma lógica de key depois.
  allReviews = (reviewsList) => {
    reviewsList.map((review, index) => (<ReviewCard key={ index } review={ review } />));
  }

  render() {
    const { reviewsList } = this.state;

    return (
      <div className="review-history-container">
        {reviewsList.map((review, index) => (
          <ReviewCard key={ index } review={ review } />
        ))}
      </div>
    );
  }
}
export default DisplayReviews;
