import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cart from './Pages/Cart';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/cart" component={ Cart } />
          <Route exact path="/" component={ Home } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
