import React from 'react';
import Context from './StoreContext';
import useStorage from '../Util/useStorage';
import PropTypes from 'prop-types';

const StoreProvider = (props) => {
  const [token, setToken] = useStorage('token');
  return (
    <Context.Provider value={{ token, setToken }}>
      {props.children}
    </Context.Provider>
  );
};

StoreProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default StoreProvider;
