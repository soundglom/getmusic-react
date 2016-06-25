import './stylesheets/main.scss';
// import 'semantic-ui/dist/semantic.css';
import React, { Component } from 'react';
import $ from 'jquery';
import foundation from 'foundation-sites';
import 'foundation-sites/js/foundation.core';
import 'foundation-sites/js/foundation.util.mediaQuery.js';
import 'foundation-sites/js/foundation.util.triggers.js';
import 'foundation-sites/js/foundation.util.motion.js';
// import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { INITIAL_STATE, FETCH_EVENTS } from './actions/action-types';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { store } from './store/store';
import routes from './routes';

const initialState = {
  allEvents: [],
  renderedEvents: []
};

store.dispatch({ type: INITIAL_STATE, payload: initialState });

export default class App extends Component {
  componentWillMount() {
    $(document).foundation();
  }
  componentDidMount() {
    $('#offCanvas').foundation();
  }
  render () {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          {routes()}
        </Router>
      </Provider>
    );
  }
}
