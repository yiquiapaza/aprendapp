import { createContext } from 'react';

const StoreContext = createContext({
  token: null,
  setToKen: () => {}
});
export default StoreContext;
