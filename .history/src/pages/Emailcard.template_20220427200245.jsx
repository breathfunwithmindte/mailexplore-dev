import { Avatar } from '@mui/material';
import React from 'react';

const EmailcardTemplate = ({ email }) => {
  return (
    <div className='email-card'>
      <div>
        <Avatar>MK</Avatar>
        <strong>Some name</strong>
      </div>
      <div>

      </div>
    </div>
  );
}

export default EmailcardTemplate;
