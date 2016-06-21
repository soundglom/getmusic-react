import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Landing from './containers/landing';
import ResultsView from './containers/results';
import SideBar from './containers/sidebar';

const routes = () => (
  <Route>
    <Route path='/' component={Landing} />
    <Route path='/results' component={ResultsView} />
  </Route>
);

export default routes;
