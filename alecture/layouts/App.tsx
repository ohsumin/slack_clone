import React from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import loadable from '@loadable/component';

const LogIn = loadable(() => import('@pages/LogIn'));
const SignUp = loadable(() => import('@pages/SignUp'));

const App = () => {
  return <BrowserRouter>
    <Switch>
      <Redirect exact path="/" to="/login" />
      <Route exact path="/login" component={LogIn} />
      <Route exact path="/signup" component={SignUp} />
    </Switch>
  </BrowserRouter>;
};

export default App;
