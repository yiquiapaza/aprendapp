import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import RouterManager from './RouterManager';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <RouterManager />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
