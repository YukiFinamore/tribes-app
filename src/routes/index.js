import React                       from 'react';
import { Switch, Route } from 'react-router-dom'

// Pages
import Login 	 from '../pages/Login'
import Profile from '../pages/Profile'
import Feed    from '../pages/Feed'

export default () => (
  <Switch>
    <Route exact path="/" component={Login}/>
    <Route exact path="/profile" component={Profile}/>
    <Route exact path="/feed" component={Feed}/>
  </Switch>
);
