import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util'
import NavBarContainer from './nav_bar/nav_bar_container'
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import ProductFormContainer from './product_form/product_form_container';


const App = () => (
  <div>
  <NavBarContainer />
    <Switch>
      <AuthRoute path="/login" component={LogInFormContainer}/>
      <AuthRoute path="/signup" component={SignUpFormContainer}/>
      <ProtectedRoute path="/product" component={ProductFormContainer}/>
      <Route path="/" component={GreetingContainer} />
    </Switch>
  </div>
);

export default App;
//
// <h4 className="header-logo">onboard</h4>
// <GreetingContainer/>
