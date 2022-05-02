import React from 'react';
import Navigation from "../components/Navigation";

const SoloContentTemplate = ({children}) => {
  return (
      <div>
        <Navigation />
        {children}
      </div>
  );
}

export default SoloContentTemplate;