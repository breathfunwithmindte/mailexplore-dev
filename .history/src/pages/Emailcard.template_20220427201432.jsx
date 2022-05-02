import { Avatar } from '@mui/material';
import React from 'react';

const EmailcardTemplate = ({ email, styles }) => {
  return (
    <div className={styles['email-card']}>
      <div className={styles['email-card-users']}>
        <Avatar style={{width: 34, height: 34}}>MK</Avatar>
        <strong>Some name</strong>
      </div>
      <div style={{ width: "calc(100% - 256px)" }}>
        <p>{email.title}</p>
      </div>
      <div style={{ width: "156px" }}> 
        some actions
      </div>
    </div>
  );
}

export default EmailcardTemplate;
