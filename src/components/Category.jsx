import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    const { handleCategoryClick, cateogiryFilter } = this.props;
    const { categories } = this.state;
    return (
      <div className="category-container">
        <span>Categorias</span>
        <div className="category-options">
          {
            categories.map((category) => (
              <button
                className={
                  cateogiryFilter === category.id
                    ? 'selected-category-btn' : 'default-category-btn'
                }
                type="button"
                key={ category.id }
                data-testid="category"
                onClick={ () => handleCategoryClick(category.id) }
              >
                {category.name}
              </button>
            ))
          }
        </div>
      </div>
    );
  }
}

export default Category;

Category.propTypes = {
  handleCategoryClick: PropTypes.func,
}.isRequired;
