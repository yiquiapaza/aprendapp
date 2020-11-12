import React from 'react';
import { Button } from '@material-ui/core';

const App = () => {
  return (
    <div>
      <Button variant='contained' color='primary'>
        {' '}
        Hello world
      </Button>
      <header>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
