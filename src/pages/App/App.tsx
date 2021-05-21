import React, { FC } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Navigation } from '../../components/Navigation';
import * as ROUTES from '../../constants/routes';
import { Contacts } from '../Contacts';
import { SignInPage } from '../SignInPage';

interface AppProps {
  onSubmit?: () => void
}

export const App: FC<AppProps> = () => (
  <Router>
    <Navigation />
    <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
    <Route path={ROUTES.CONTACTS} component={Contacts} />
  </Router>
);

App.displayName = 'App';
