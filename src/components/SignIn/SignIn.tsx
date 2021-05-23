import React, { FC, useState } from 'react';
import { InputField } from '../InputFiled';
import { useStyles } from './useStyles';

export const SignIn: FC = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleEmailChange = (value: string) => {
    setEmail(value);
    console.log(value);
  };
  const handlePasswordChange = (value: string) => {
    setPassword(value);
    console.log(value);
  };
  return (
    <div className={classes.signIn}>
      <h1>Welcome to Phonebook!</h1>
      <div>
        <InputField
          inputLabel="Email address"
          value={email}
          placeholder="Enter email address"
          onChange={handleEmailChange}
        />
        <InputField
          inputLabel="Password"
          value={password}
          placeholder="Enter password"
          onChange={handlePasswordChange}
        />
        <button type="submit">
          Login
        </button>
      </div>

    </div>
  );
};
SignIn.displayName = 'SignIn';
