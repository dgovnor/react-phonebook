import React, { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navigation } from '../../components/Navigation';
import * as ROUTES from '../../constants/routes';
import { Contacts } from '../Contacts';
import { SignIn } from '../../components/SignIn';
import { useStyles } from './useStyles';
import PublicRoute from '../../utils/publicRoute';
import PrivateRoute from '../../utils/privateRoute';

interface AppProps {
  onSubmit?: () => void
}

export const App: FC<AppProps> = () => {
  const classes = useStyles();
  return (

    <Router>
      <Navigation />
      <div className={classes.parentContainer}>
        <PublicRoute path={ROUTES.SIGN_IN} component={SignIn} />
        <PrivateRoute path={ROUTES.CONTACTS} component={Contacts} />
      </div>
    </Router>
  );
};

App.displayName = 'App';
