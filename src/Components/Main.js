import React from 'react';
import Api from '../Api';
import Sidebar from './Sidebar';


function Main () {
  return (
    <div className='mainContainer'>
      <div className="main">
        <Sidebar />
        <div className="main__right">
          <Api />
        </div>
      </div>
    </div>
  );
}



export default Main;