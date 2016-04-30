import foundation from 'foundation-sites';
import './stylesheets/main.scss';
import axios from 'axios';
import React, { Component } from 'react';
import { INITIAL_STATE, FETCH_EVENTS } from './actions/action_types'
import { Router, Route, IndexRoute, browserHistory, hashHistory } from'react-router';
import { Provider } from 'react-redux';
import Landing from './containers/landing';
import Events from './containers/events';
import { connector, store, url } from './store/store';


// store.dispatch({ type: INITIAL_STATE, payload: initialState })
// console.log(store)
// axios.get('/api/data')
//   .then(res => {
//     console.log(res)
//     store.dispatch({type: FETCH_EVENTS, payload: res})
//   })

const routes = () => (
  <Route>
    <Route path='/' component={Landing} />
    <Route path='/events' component={Events} />
  </Route>
)

export default class App extends Component {
  componentWillMount() {
    store.dispatch({ type: INITIAL_STATE })
  }
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
    console.log('Get state: ', store.getState())
    axios.get('/api/data')
      .then(res => {
        console.log(res)
        store.dispatch({type: FETCH_EVENTS, payload: res})
      })
  }
}