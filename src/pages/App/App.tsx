import React, { FC } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Navigation } from '../../components/Navigation';
import * as ROUTES from '../../constants/routes';
import { Contacts } from '../Contacts';
import { SignIn } from '../../components/SignIn';

interface AppProps {
  onSubmit?: () => void
}

export const App: FC<AppProps> = () => (
  <Router>
    <Navigation />
    <div>
      <Route exact path={ROUTES.SIGN_IN} component={SignIn} />
      <Route path={ROUTES.CONTACTS} component={Contacts} />
    </div>
  </Router>
);

App.displayName = 'App';
