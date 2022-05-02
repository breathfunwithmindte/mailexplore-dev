import { Avatar, Chip } from '@mui/material';
import React from 'react';

const EmailcardTemplate = ({ email, styles }) => {
  return (
    <div className={styles['email-card']}>
      <div className={styles['email-card-users']}>
        <Avatar style={{ width: 34, height: 34 }}>MK</Avatar>
        <strong>Some name</strong>
      </div>
      <div style={{ width: "calc(100% - 256px)", display: "flex", flexWrap: "wrap" }}>
        <strong>{email.title}</strong> <Chip label="Chip Outlined" variant="outlined" />
      </div>
      <div style={{ width: "156px", display: "flex" }}> 
        <div style={{width: "100px"}}></div>
        1day
      </div>
    </div>
  );
}

export default EmailcardTemplate;
