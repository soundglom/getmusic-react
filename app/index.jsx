import 'script!jquery'
import foundation from 'foundation-sites';
import './stylesheets/main.scss';

import React, { Component } from 'react';

// React router
import { Router, Route, IndexRoute, browserHistory, hashHistory } from'react-router';

// Redux dependencies
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const createStoreWithMiddleware = applyMiddleware()(createStore);


import Landing from './containers/landing';
import Events from './containers/events';
import { connector, store } from './reducers/store';

// let store = createStore(rootReducer)
// const myRoutes = () => (
//   <Route path='/' component={Layout}>
//     <IndexRoute component={Landing} />
//     <Route path='/search' component={Search} />
//     <Route path='/details/:id' component={Details} />
//   </Route>
// )

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path='/' component={Landing} />
          <Route path='/events' component={Events} />
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



