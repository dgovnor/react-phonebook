import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useStyles } from './useStyles';

import * as ROUTES from '../../constants/routes';

export const Navigation: FC = () => {
  const classes = useStyles();
  return (
    <div>
      <header className={classes.header}>
        <h1 className={classes.phonebook}>Phonebook</h1>
        <p className={classes.link}><Link to={ROUTES.SIGN_IN}>Login</Link></p>
      </header>
    </div>
  );
};

Navigation.displayName = 'Navigation';
