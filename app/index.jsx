import './stylesheets/main.scss';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import foundation, { core } from 'foundation-sites';
import $ from 'jquery';
import axios from 'axios';
import React, { Component } from 'react';
import { INITIAL_STATE, FETCH_EVENTS } from './actions/action_types';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { store } from './store/store';
import routes from './routes';

console.log($(document).foundation());

export default class App extends Component {
  componentWillMount () {
    store.dispatch({ type: INITIAL_STATE });
    $(document).foundation();
  }
  componentDidMount () {
    axios.get('/api/data')
      .then(res => {
        console.log('API resolved! :', res);
        store.dispatch({type: FETCH_EVENTS, payload: res});
      });
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
