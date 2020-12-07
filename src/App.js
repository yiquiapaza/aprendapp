import React from 'react';
import { HeaderComponent, FooterComponent, CardComponent } from './components';
import RouterManager from './RouterManager';
import { BrowserRouter as Router } from 'react-router-dom';
import StoreProvider from './Context/StoreProvider';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
const App = () => {
  return (
    <StoreProvider>
      <Router>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <HeaderComponent />
          </Grid>
          <Grid item xs={12}>
            <Container>
              <CardComponent
                date='September 14, 2016'
                image='nuevo'
                title='nuevo'
                title_image='nuevo'
              />
            </Container>
          </Grid>
          <Grid item xs={12}>
            <FooterComponent />
          </Grid>
          <RouterManager />
        </Grid>
      </Router>
    </StoreProvider>
  );
};

export default App;
