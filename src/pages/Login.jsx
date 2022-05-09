import { Button, TextField } from '@mui/material';
import React from 'react';
import styles from "../styles/components/Login.module.css";

const Login = () => {
  return (
    <div className={styles["login-container"]}>
      <div className={styles["login-bg"]} />
      <form className={styles["login-form"]}>
        <div>
          <h1 style={{width: "100%", textAlign: "center", marginBottom: 23}}>Email Explore {"(EE)"}</h1>
          <em style={{color: "#bdbdbd"}}>Enter the credentials that you recieved in an email. 
            If you dont recieved this email, contact with your company.</em>
        </div>
        <TextField label={"Email"} style={{width: "100%", marginTop: 69}} />
        <TextField label={"Password"} type="password" style={{width: "100%", marginTop: 34}} />
        <br />
        <em>Forget password. Click <span style={{color: "lightblue", cursor: "pointer"}}>here</span></em>
        <Button variant="contained" style={{marginTop: 69}}>Login</Button>
      </form>
    </div>
  );
}

export default Login;
