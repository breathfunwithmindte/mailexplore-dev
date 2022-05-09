import React from "react";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AppsIcon from '@mui/icons-material/Apps';
import { useNavigate, useLocation } from "react-router";
import { IconButton } from '@mui/material';

const RightNavigation = () => {
  const navigate = useNavigate()
  function handleNavigate () {
    navigate("/" + this.path)
  }

  return (
    <nav
      style={{
        height: "100%",
        width: 56,
        background: "var(--bg1)",
        borderLeft: "1px solid var(--bclr)",
        display: "flex", paddingTop: 24, alignItems: "center", flexDirection: "column"
      }}
    >
      <IconButton onClick={handleNavigate.bind({ path: "" })}>
        <AppsIcon />
      </IconButton>
      <IconButton onClick={handleNavigate.bind({ path: "email/inbox" })}>
        <MailOutlineIcon />
      </IconButton>
    </nav>
  );
};

export default RightNavigation;
