import { Button } from '@mui/material';
import React, { useMemo } from 'react';
import { useNavigate, useLocation } from "react-router";

const NavigationSetting = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const buttonStyle = {
    color: "inherit", 
    width: "100%", 
    justifyContent: "flex-start",
    borderBottomRightRadius: 14, 
    borderTopRightRadius: 14,
    paddingLeft: "var(--p)",
    textTransform: "none"
  }

  function handleNavigate () {
    navigate("/settings/" + this.path)
  }

  const primary_navigations = useMemo(() => {
    return [
      { label: "Categories", path: "primary/categories" },
      { label: "Rules-Search", path: "primary/rules-search" },
    ]
  }, [])
  const authetication_navigations = useMemo(() => {
    return [
      { label: "Users", path: "authetication/users" },
      { label: "Roles", path: "authetication/roles" },
      { label: "New User", path: "authetication/users/new" },
    ]
  }, [])
  const auctions_navigations = useMemo(() => {
    return [
      { label: "GET STARTED", path: "actions/get-started" },
      { label: "Actions", path: "actions/list" },
      { label: "Action/Item", path: "actions/per-item" },
    ]
  }, [])

  return (
    <nav className='navigation' style={{paddingTop: 14}}>
      <strong className='muted'>Primary</strong>
      <ul>
        {
          primary_navigations.map((item , index) => {
            return (
              <li key={index}>
                <Button style={buttonStyle} onClick={handleNavigate.bind({path: item.path})}>{item.label}</Button>
              </li>
            )
          })
        }
      </ul>
      <strong className='muted'>Actions</strong>
      <ul>
        {
          auctions_navigations.map((item , index) => {
            return (
              <li key={index}>
                <Button style={buttonStyle} onClick={handleNavigate.bind({path: item.path})}>{item.label}</Button>
              </li>
            )
          })
        }
      </ul>
      <strong className='muted'>Authetication</strong>
      <ul>
        {
          authetication_navigations.map((item , index) => {
            return (
              <li key={index}>
                <Button style={buttonStyle} onClick={handleNavigate.bind({path: item.path})}>{item.label}</Button>
              </li>
            )
          })
        }
      </ul>
    </nav>
  );
}

export default NavigationSetting;
