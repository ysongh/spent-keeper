import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './containers/Home/Home';
import ItemList from './containers/ItemList/ItemList';
import Success from './components/Success/Success';
import SignUp from './containers/SignUp/SignUp';
import LogIn from './containers/LogIn/LogIn';
import Logout from './containers/LogIn/LogOut/LogOut';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/itemList" component={ItemList} />
          <Route exact path="/success" component={Success} />
          <Route exact path="/signUp" component={SignUp} />
          <Route exact path="/logIn" component={LogIn} />
          <Route exact path="/logOut" component={Logout} />
        </div>
      </Router>
    );
  }
}

export default App;
