import React, { FC } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useStyles } from './useStyles';

import * as ROUTES from '../../constants/routes';
import { getUser, removeUserSession } from '../../utils/storage';

export const Navigation: FC = () => {
  const user = getUser();
  const history = useHistory();
  const handleLogin = () => {
    if (user) {
      removeUserSession();
      getUser();
      history.push('/signIn');
    }
  };
  //   useEffect(() => {
  //     getUser();
  //   }, [user]);
  const classes = useStyles();
  return (

    <header className={classes.header}>
      <p className={classes.phonebook}>Phonebook</p>
      <p className={classes.link}>
        <Link
          onClick={handleLogin}
          to={ROUTES.SIGN_IN}
        >
          {
                 !user ? 'Login' : 'Logout'
              }
        </Link>
      </p>
    </header>
  );
};

Navigation.displayName = 'Navigation';
