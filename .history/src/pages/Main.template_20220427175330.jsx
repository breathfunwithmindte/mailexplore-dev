import React from 'react';
import Header from '../components/Header';
import Navigation from "../components/Navigation";

const MainTemplate = () => {
  return (
    <div>
      <Header />
      <div>
        <Navigation />
      </div>
    </div>
  );
}

export default MainTemplate;
