import React from 'react';
import { HeaderComponent, FooterComponent } from './components';
import RouterManager from './RouterManager';
import { BrowserRouter as Router } from 'react-router-dom';
import StoreProvider from './Context/StoreProvider';
const App = () => {
  return (
    <StoreProvider>
      <Router>
        <div>
          <HeaderComponent />
          <RouterManager />
          <FooterComponent />
        </div>
      </Router>
    </StoreProvider>
  );
};

export default App;
