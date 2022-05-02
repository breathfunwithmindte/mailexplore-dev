import { Button } from '@mui/material';
import React, { useMemo } from 'react';
import AddIcon from '@mui/icons-material/Add';

const Navigation = () => {

  const buttonStyle = {
    color: "inherit", 
    width: "100%", 
    justifyContent: "flex-start",
    borderBottomRightRadius: 14, 
    borderTopRightRadius: 14,
    paddingLeft: "var(--p)"
  }

  const primary_navigations = useMemo(() => {
    return [
      { label: "Inbox", path: "inbox" },
      { label: "Favorite", path: "faborite" },
      { label: "Trash", path: "trash" },
      { label: "Draft", path: "draft" },
    ]
  }, [])

  return (
    <nav className='navigation'>
      <div className="composer-button-wrapper">
        <Button style={{ borderRadius: 14, width: "92%", height: 46 }} color="primary" variant="contained" >
          <AddIcon />
          Compose
        </Button>
      </div>
      <strong className='muted'>Primary</strong>
      <ul>
        {
          primary_navigations.map((item , index) => {
            return (
              <li>
                <Button style={buttonStyle}>{item.label}</Button>
              </li>
            )
          })
        }
      </ul>
      <strong className='muted'>Hashtags</strong>
      <ul>
        {
          primary_navigations.map((item , index) => {
            return (
              <li>
                <Button style={buttonStyle}># {item.label}</Button>
              </li>
            )
          })
        }
      </ul>
    </nav>
  );
}

export default Navigation;
