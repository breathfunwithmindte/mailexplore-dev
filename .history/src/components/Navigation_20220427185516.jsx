import { Button } from '@mui/material';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';

const Navigation = () => {
  return (
    <nav className='navigation'>
      <div className="composer-button-wrapper">
        <Button style={{borderRadius: 14, width: "92%", height: 46 }} color="primary" variant="contained" >
          <AddIcon />
          Compose
        </Button>
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
