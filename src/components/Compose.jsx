import { Alert, AlertTitle, Button, IconButton, TextField } from '@mui/material';
import React from 'react';
import useMain from '../MainContext';

const Compose = () => {
  const {setOpencompose} = useMain()
  return (
    <div className='Compose'>
      <div className='Compose-item' >
        <Alert  severity='info'>
          <p> <span style={{fontWeight: 900, marginRight: 14, textTransform: "none"}}>New Email</span> 
          --Create an action to fetch multiple emails from an api automatically.</p>
        </Alert>
        <IconButton onClick={()=>setOpencompose(false)}>X</IconButton>
      </div>
      <div className='Compose-item' >
        <TextField label="Users" placeholder='email@example.com, email2@example.com' style={{width: "100%"}} variant="standard" color="secondary" />
      </div>
      <div className='Compose-item' >
        <TextField label="Title" placeholder='Aa...' style={{width: "100%"}} variant="standard" color="secondary" />
      </div>
      <div className='Compose-item'>
      <TextField 
        label="Body" 
        placeholder='Aa...' 
        style={{width: "100%", height: "100%"}} 
        rows={14} color="secondary"
        multiline="true"
        variant="standard" 
      />
      </div>
      <div className='Compose-item'>
        <Button variant="outlined" color="secondary">Save as draft</Button>
        <Button variant="contained" >SAVE</Button>
      </div>
    </div>
  );
}

export default Compose;
