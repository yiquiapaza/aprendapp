import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import StoreContext from '../../Context/StoreContext';
import PropTypes from 'prop-types';

const RoutesPrivate = ({ component: Component, ...rest }) => {
  const { token } = useContext(StoreContext);
  return (
    <Route
      {...rest}
      render={() =>
        token ? <Component {...rest} /> : <Redirect to='/login' />
      }
    />
  );
};
RoutesPrivate.propTypes = {
  component: PropTypes.any
};
export default RoutesPrivate;
