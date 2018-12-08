import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util'
import NavBarContainer from './nav_bar/nav_bar_container'
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import ProductFormContainer from './products/product_form/product_form_container';
import ProductShowContainer from './products/product_show/product_show_container';
import ProductFeedContainer from './products/product_feed/product_feed_container';

const App = () => (
  <div>
  <NavBarContainer />
    <Switch>
      <AuthRoute path="/login" component={LogInFormContainer}/>
      <Route path="/signup" component={SignUpFormContainer}/>
      <Route exact path="/products" component={ProductFeedContainer}/>
      <ProtectedRoute path="/product" component={ProductFormContainer}/>
      <ProtectedRoute path="/products/:productId" component={ProductShowContainer}/>
      <Route path="/" component={GreetingContainer} />
    </Switch>
  </div>
);

export default App;
//
// <h4 className="header-logo">onboard</h4>
// <GreetingContainer/>
