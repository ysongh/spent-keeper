import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './containers/Home/Home';
import ItemList from './containers/ItemList/ItemList';
import Success from './components/Success/Success';
import SignUp from './containers/SignUp/SignUp';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/itemList" component={ItemList} />
          <Route exact path="/success" component={Success} />
          <Route exact path="/signUp" component={SignUp} />
        </div>
      </Router>
    );
  }
}

export default App;
