import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

export const Navigation: FC = () => (
  <div>
    <ul>
      <li>
        <Link to={ROUTES.SIGN_IN}>Login</Link>
      </li>
      <li>
        <Link to={ROUTES.CONTACTS}>Contacts</Link>
      </li>
    </ul>
  </div>
);

Navigation.displayName = 'Navigation';
