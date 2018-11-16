import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route } from 'react-router-dom';

import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';

const App = () => (
  <div>
    <header className="main-header">
      <h4 className="header-logo">onboard</h4>
      <GreetingContainer/>
  </header>

    <div>
      <img className="banner-image" src="https://www.monsterchildren.com/wp-content/uploads/2018/03/monster-children-ari-browne-20-of-1-1256x840.jpg"></img>
      <h1 className="login-banner-messages">Buy and sell secondhand stuff!</h1>
    </div>

    <Route path="/login" component={LogInFormContainer} />
    <Route path="/signup" component={SignUpFormContainer} />
  </div>
);

export default App;
