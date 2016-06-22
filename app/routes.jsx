import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Landing from './containers/landing';
import ResultsView from './containers/results';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import SideBarTwo from './containers/sidebar2';

const routes = () => (
  <Route>
    <Route path='/' component={Landing} />
    <Route path='/results' component={MuiThemeProvider}>
      <IndexRoute component={ResultsView} />
    </Route>
  </Route>
);

export default routes;
