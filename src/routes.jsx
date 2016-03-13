import React from 'react';
import {
  Route,
  IndexRoute
} from 'react-router';

// Here we define all our material-ui ReactComponents.
import Master from './components/master';
import Home from './components/pages/home';
import Profile from './components/pages/profile';

const AppRoutes = (
  <Route path="/" component={Master}>
    <IndexRoute component={Home} />
    <Route path="home" component={Home} />
    <Route path="profile" component={Profile} />
  </Route>
);

export default AppRoutes;
