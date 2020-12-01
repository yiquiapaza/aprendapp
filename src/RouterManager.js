import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Components/Home/Home';
const RouterManager = () => {
  return (
    <div>
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
    </div>
  );
};
export default RouterManager;
