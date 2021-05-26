import { Input } from '@material-ui/core';
import axios from 'axios';
import React, { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { setUserSession } from '../../utils/storage';
import { useStyles } from './useStyles';

export const SignIn: FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: string) => {
    setEmail(e);
  };
  const handlePasswordChange = (e: string) => {
    setPassword(e);
  };
  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_LOGIN_URL}`,
        { email, password },
      );
      setUserSession(response.data.token.accessToken, response.data.user);
      history.push('contacts');
    } catch (error) {
      throw new Error(error);
    }
  };
  return (
    <div className={classes.signIn}>
      <p className={classes.title}>Welcome to Phonebook!</p>
      <div className={classes.inputContainer}>
        <div>
          <span
            className={classes.label}
          >
            Email address
          </span>
          <Input
            value={email}
            disableUnderline
            className={classes.input}
            onChange={(e) => handleEmailChange(e.target.value)}
            autoComplete=""
            inputProps={{
              style: { color: '#00955C' },
            }}
            placeholder="Enter email address"
          />

        </div>
        <div className={classes.password}>
          <span
            className={classes.label}
          >
            Password
          </span>
          <Input
            placeholder="Enter password"
            disableUnderline
            className={classes.input}
            type="password"
            onChange={(e) => handlePasswordChange(e.target.value)}
            inputProps={{
              style: { color: '#00955C' },
            }}
            autoComplete=""
          />

        </div>
        <button
          className={
          classes.inputButton
}
          onClick={(e) => handleSubmit(e)}
          type="submit"
        >
          Login
        </button>
      </div>

    </div>
  );
};
SignIn.displayName = 'SignIn';
