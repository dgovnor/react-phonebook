/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getToken } from './storage';

interface Props {
    path: string
    component: any // a class or function component which requires no props
  }
// handle the public routes
function PublicRoute({ component: Component, ...rest }:Props) {
  return (
    <Route
      {...rest}
      render={(props) => (!getToken()
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/contacts' }} />)}
    />
  );
}

export default PublicRoute;
