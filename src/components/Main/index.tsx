import React from 'react';
import Header from '../Header';
import LeftBar from '../LeftBar';

const Main = () => {
  return (
    <div className='main-wrapper'>
      <Header />
      <div className="left">
        <LeftBar />
      </div>
    </div>
  )
}

export default Main;