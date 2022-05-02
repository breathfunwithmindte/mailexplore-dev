import { Button } from '@mui/material';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';

const Navigation = () => {

  const buttonStyle = {
    color: "inherit", 
    width: "100%", 
    justifyContent: "flex-start",
    borderBottomRightRadius: 14, 
    borderTopRightRadius: 14,
    height: 46,
    background: "red"
  }

  return (
    <nav className='navigation'>
      <div className="composer-button-wrapper">
        <Button style={{ borderRadius: 14, width: "92%", height: 46 }} color="primary" variant="contained" >
          <AddIcon />
          Compose
        </Button>
      </div>
      <em className='muted' style={{padding: "var(--p2)"}}>Primary</em>
      <ul>
        <li>
          <Button style={buttonStyle}>inbox</Button>
        </li>
        <li>favorite</li>
        <li>inbox</li>
      </ul>
    </nav>
  );
}

export default Navigation;
