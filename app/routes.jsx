import React from 'react';
import { Route } from 'react-router';
import Landing from './containers/landing';
import Events from './containers/events';

const routes = () => (
  <Route>
    <Route path='/' component={Landing} />
    <Route path='/events' component={Events} />
  </Route>
);

export default routes;
