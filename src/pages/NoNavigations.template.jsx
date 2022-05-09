import React from 'react';
import Navigation from "../components/Navigation";
import RightNavigation from '../components/RightNavigation';


const NonavigationsTemplate = ({children}) => {
  
  return (
      <div className='App-page-wrapper'>
        <div className='default-page-nonavigations'>
          {children}
           <RightNavigation />
        </div>
      </div>
  );
}

export default NonavigationsTemplate;
