import React, { Component } from 'react';

// teste PR
class Search extends Component {
  render() {
    return (
      <div
        data-testid="home-initial-message"
        className="search-container"
      >
        <p>
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

export default Search;
