import { Button } from '@mui/material';
import React, { useMemo } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate, useLocation } from "react-router";
import useMain from "../MainContext";

const Navigation = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { setOpencompose } = useMain()

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

  function handleNavigate () {
    navigate("/email/" + this.path + location.search + "11")
  }
  

  return (
    <nav className='navigation'>
      <div className="composer-button-wrapper">
        <Button style={{ borderRadius: 14, width: "92%", height: 46 }} color="primary" variant="contained" onClick={()=>setOpencompose(true)} >
          <AddIcon />
          Compose
        </Button>
      </div>
      <strong className='muted'>Primary</strong>
      <ul>
        {
          primary_navigations.map((item , index) => {
            return (
              <li key={index}>
                <Button style={buttonStyle} onClick={handleNavigate.bind({ path: item.path })}>
                  {item.label}
                </Button>
              </li>
            )
          })
        }
      </ul>
      <strong className='muted'>Categories</strong>
      <ul>
        {
          primary_navigations.map((item , index) => {
            return (
              <li key={index}>
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
