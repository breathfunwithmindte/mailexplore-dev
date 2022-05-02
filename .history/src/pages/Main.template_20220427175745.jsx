import React from 'react';
import Navigation from "../components/Navigation";

const MainTemplate = ({children}) => {
  return (
      <div>
        <Navigation />
        {children}
      </div>
  );
}

export default MainTemplate;
