import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faPlus,
  faPlay,
  faStop,
  faPause,
} from '@fortawesome/free-solid-svg-icons';
import store from './store';

// Views
import ClientView from './Views/Clients/ClientsView';
import CurrentClientView from './Views/Clients/CurrentClientView';

// Components
import Aside from './Components/Aside';

import './App.scss';
import '../node_modules/uikit/dist/css/uikit.min.css';
import '../node_modules/uikit/dist/js/uikit';
import '../node_modules/uikit/dist/js/uikit-icons';

window.store = store;

library.add(faPlus, faPlay, faStop, faPause);

const asideId = 'aside';

class App extends Component {
  render() {
    return (
      <Router>
        <Aside id={asideId}>
          <div>
            <div id="app"></div>
            <Route exact path="/" component={ClientView} />
            <Route path="/clients/:clientId" component={CurrentClientView} />
          </div>
        </Aside>
      </Router>
    );
  }
}

export default App;
