import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Landing from './containers/landing';
import ResultsView from './containers/results';
import OffCanvas from './containers/off-canvas';

const routes = () => (
  <Route>
    <Route path='/' component={Landing} />
    <Route path='/results' component={OffCanvas} />
  </Route>
);

export default routes;
