import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './containers/Home/Home';
import ItemList from './containers/ItemList/ItemList';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/itemList" component={ItemList} />
        </div>
      </Router>
    );
  }
}

export default App;
