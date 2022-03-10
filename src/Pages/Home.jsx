// Bibliotecas
import React, { Component } from 'react';

// Componentes
import Search from '../components/Search';
import Header from '../components/Header';
import Category from '../components/Category';

// Paginas

// Estilo
import '../styles/general.css';

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <Category />
        <div className="side-container">
          <Header />
          <Search />
        </div>
      </div>
    );
  }
}

export default Home;
