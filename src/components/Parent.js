import React from 'react';
import AppNameContext from '../contexts/AppNameContext';
import Child from './Child';


function Parent () {


  let appName = 'Phyo Bookstore';
  return (
    <>
    <AppNameContext.Provider value='Sann Bookstore'>
      <div> Parent</div>
      <Child appName={appName}/>
    </AppNameContext.Provider>
    </>
  )
}

export default Parent;