import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './Components/Home/Home';
import Welcome from './Components/Welcome/Welcome';
import RoutesPrivate from './components/Routes/RoutesPrivate';
const RouterManager = () => {
  return (
    <div>
      <Switch>
        <Route path='/login' exact component={Login} />
        <RoutesPrivate path='/' exact component={Home} />
        <RoutesPrivate path='/welcome' exact component={Welcome} />
      </Switch>
    </div>
  );
};
export default RouterManager;
