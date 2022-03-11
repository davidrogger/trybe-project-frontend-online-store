// Bibliotecas
import React, { Component } from 'react';

// Componentes
import Search from '../components/Search';
import Header from '../components/Header';
import Category from '../components/Category';

// Paginas

// Estilo
import '../styles/general.css';

// Funçôes
import { getProductsFromCategoryAndQuery } from '../services/api';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: '',
      products: [],
    };
  }

  handleChange = ({ target }) => {
    this.setState({
      searchInput: target.value,
    });
  }

  handleClick = async () => {
    const { searchInput } = this.state;
    const response = await getProductsFromCategoryAndQuery(undefined, searchInput);
    this.setState({
      products: response.results,
    });
  }

  render() {
    const {
      products,
    } = this.state;

    return (
      <div className="home-container">
        <Category />
        <div className="side-container">
          <Header
            handleChange={ this.handleChange }
            handleClick={ this.handleClick }
          />
          <Search
            products={ products }
          />
        </div>
      </div>
    );
  }
}

export default Home;
