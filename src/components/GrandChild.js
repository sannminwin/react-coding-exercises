import React, { useContext } from 'react';
import AppNameContext from '../contexts/AppNameContext';


const GrandChild = () => {
  // one way to get context value.
  // const appName = useContext(AppNameContext);

  return (
    <AppNameContext.Consumer>
      {(value) => value}
    </AppNameContext.Consumer>
  )
}

export default GrandChild;