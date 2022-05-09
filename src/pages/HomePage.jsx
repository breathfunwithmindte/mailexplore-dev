import React from 'react';
import styles from "../styles/components/Homepage.module.css";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Button } from '@mui/material';

const HomePage = () => {


  return (
    <div className={styles["homepage"]}>
      <h1>Applications</h1>
      <ul>
        <li>
          <h1>Email Explore</h1>
          <Button style={{width: "100%"}} variant="outlined"> Open <KeyboardArrowRightIcon /></Button>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
