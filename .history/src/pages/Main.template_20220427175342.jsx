import React from 'react';
import Header from '../components/Header';
import Navigation from "../components/Navigation";

const MainTemplate = ({children}) => {
  return (
    <div>
      <Header />
      <div>
        <Navigation />
        {children}
      </div>
    </div>
  );
}

export default MainTemplate;
