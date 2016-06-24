import './stylesheets/main.scss';
import React, { Component } from 'react';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
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
