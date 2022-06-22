import React from 'react';
import GrandChild from './GrandChild';

const Child = ({ appName }) => {
  return (
    <>
      <div> Child </div>
      <GrandChild appName={appName}/>
    </>
  )
}

export default Child;