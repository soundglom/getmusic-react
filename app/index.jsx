import 'script!jquery'
import foundation from 'foundation-sites';
import './stylesheets/main.scss';

import React, { Component } from 'react';

// React router
import { Router, Route, IndexRoute, browserHistory, hashHistory } from'react-router';

// Redux dependencies
import { Provider } from 'react-redux';

import Landing from './containers/landing';
import Events from './containers/events';




export default class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Landing} />
        <Route path='/events' component={Events} />

      </Router>
    )
  }
  componentDidMount() {
    $(document).foundation();
  }
}




