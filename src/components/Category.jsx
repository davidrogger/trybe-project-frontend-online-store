import React, { Component } from 'react';
import { getCategories } from '../services/api';

class Category extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    getCategories().then((categories) => this.setState({ categories }));
  }

  render() {
    const { categories } = this.state;
    return (
      <div className="category-container">
        {
          categories.map((category) => (
            <button
              type="button"
              key={ category.id }
              data-testid="category"
            >
              {category.name}
            </button>
          ))
        }
      </div>
    );
  }
}

export default Category;
