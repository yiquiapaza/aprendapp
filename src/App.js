import React from 'react';
import { HeaderComponent, FooterComponent } from './components';
import RouterManager from './RouterManager';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <HeaderComponent />
        <RouterManager />
        <FooterComponent />
      </div>
    </Router>
  );
};

export default App;
