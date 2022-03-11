import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import InputSearch from '../Pages/InputSearch';
import Header from './Header';

class Home extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={ InputSearch } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Home;
