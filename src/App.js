import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import store from './store';

import ClientView from './Views/Clients/ClientsView';

import './App.scss';
import '../node_modules/uikit/dist/css/uikit.min.css';
import '../node_modules/uikit/dist/js/uikit';
import '../node_modules/uikit/dist/js/uikit-icons';

window.store = store;

library.add(faPlus);

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div id="app"></div>
          <Route exact path="/" component={ClientView} />
        </div>
      </Router>
    );
  }
}

export default App;
