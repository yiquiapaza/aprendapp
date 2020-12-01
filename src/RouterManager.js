import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './Components/Home/Home';
const RouterManager = () => {
  return (
    <div>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/login' exact component={Login} />
      </Switch>
    </div>
  );
};
export default RouterManager;
