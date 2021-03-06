import React from 'react';
import Navigation from "../components/Navigation";
import RightNavigation from '../components/RightNavigation';


const MainTemplate = ({children}) => {
  
  return (
      <div className='App-page-wrapper'>
        <Navigation />
        <div className='default-page'>
          {children}
           <RightNavigation />
        </div>
      </div>
  );
}

export default MainTemplate;
