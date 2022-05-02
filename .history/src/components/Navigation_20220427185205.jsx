import { Button } from '@mui/material';
import React from 'react';

const Navigation = () => {
  return (
    <nav className='navigation'>
      <div className="composer-button-wrapper">
        <Button style={{borderRadius: 14}} color="primary" variant="contained" >Compose</Button>
      </div>
      <ul>
        <li>inbox</li>
        <li>inbox</li>
        <li>inbox</li>
        <li>inbox</li>
        <li>inbox</li>
        <li>inbox</li>
        <li>inbox</li>
        <li>inbox</li>
        <li>inbox</li>
        <li>inbox</li>
        <li>inbox</li>
        <li>inbox</li>
        <li>inbox</li>
        <li>inbox</li>
        <li>inbox</li>
        <li>inbox</li>
      </ul>
    </nav>
  );
}

export default Navigation;
