import React from 'react';
import Navigation from "../components/Navigation";

const MainTemplate = ({children}) => {
  return (
      <div className='App-page-wrapper'>
        <Navigation />
        <div className='default-page'>
          {children}
          <nav style={{height: "100%", width: 56, background: "var(--bg1)", borderLeft: "1px solid var(--bclr)"}}>
            asdasd
          </nav>
        </div>
      </div>
  );
}

export default MainTemplate;
