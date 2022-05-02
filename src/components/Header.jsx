import { Avatar, styled } from '@mui/material';
import { Autocomplete, IconButton, InputBase } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search"
import React from 'react';
import HelpIcon from '@mui/icons-material/Help';
import useMain from '../MainContext';
import SettingsIcon from '@mui/icons-material/Settings';
import { useNavigate } from 'react-router';


const Search = styled('div')(({ theme }) => ({
    border: "1px solid var(--h)",
    display: "flex",
    alignItems: "center",
    padding: "calc(var(--p2) - 0.14rem) ",
    paddingLeft: "var(--p2)",
    '&:hover': {
      backgroundColor: "var(--h)"
    }
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'var(--clr)',
  marginLeft: "var(--m)",
  width: "100%"
}));



const Header = () => {
  const navigate = useNavigate();
  const main = useMain();


  function handleNavigate () {
    navigate("/" + this.path)
  }

  return (
    <header className='header'>
      <div className="logo">
        <Avatar src="https://cdn.iconscout.com/icon/premium/png-256-thumb/emails-2414509-2031031.png" alt="" className="logo-img" />
        <h1 className="logo-h1">MailExplore</h1>
      </div>
      <Autocomplete
        {...{ options: main.emails || [], getOptionLabel: (i) => i.title  }}
        style={{width: "50%"}}
        id="custom-input-demo"
        renderInput={(params) => (
          <div ref={params.InputProps.ref}>
            <Search>
              <IconButton>
                <SearchIcon />
              </IconButton>
              <StyledInputBase
                inputProps = {{...params.inputProps}}
                placeholder="Search…"
              />
            </Search>
          </div>
        )}
      />
      <section className="user-section">
        <IconButton>
          <HelpIcon />
        </IconButton>
        <IconButton onClick={handleNavigate.bind({path: "settings/primary/categories"})}>
          <SettingsIcon />
        </IconButton>
        <IconButton>
          <Avatar size="small" style={{background: "orange", fontSize: "1rem", width: 28, height: 28}}>MK</Avatar>
        </IconButton>
      </section>
    </header>
  );
}

export default Header;