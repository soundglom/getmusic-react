import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from'react-router';

import 'script!jquery'
import foundation from 'foundation-sites';

import './stylesheets/main.scss';

import TopBar from './components/topbar';
import Event from './components/event';
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




