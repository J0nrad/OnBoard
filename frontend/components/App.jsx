import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route, Switch } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container'
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';

const App = () => (
  <div>
  <NavBarContainer/>
    <Switch>
      <Route path="/login" component={LogInFormContainer}/>
      <Route path="/signup" component={SignUpFormContainer}/>
    </Switch>
  </div>
);

export default App;
//
// <h4 className="header-logo">onboard</h4>
// <GreetingContainer/>
