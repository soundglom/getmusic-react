import foundation from 'foundation-sites';
import ReduxPromise from 'redux-promise'
import './stylesheets/main.scss';
import axios from 'axios';

import React, { Component } from 'react';

// React router
import { Router, Route, IndexRoute, browserHistory, hashHistory } from'react-router';

// Redux dependencies
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const key = process.env.EVENTBRITE

import Landing from './containers/landing';
import Events from './containers/events';
import { connector, store, url } from './store/store';

axios.get('/api/data')
  .then(res => {
    console.log(res)
    store.dispatch({type: 'FETCH_EVENTS', payload: res})
  })

const routes = () => (
  <Route>
    <Route path='/' component={Landing} />
    <Route path='/events' component={Events} />
  </Route>
)



export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          {routes()}
        </Router>
      </Provider>
    )
  }
  componentDidMount() {
    $(document).foundation();

  }
}

// ----------------------------------------
      //<Router history={hashHistory}>
      //</Router>



