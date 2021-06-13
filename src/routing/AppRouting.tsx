import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { ROUTES } from './AppRouting.utils';

export const AppRouting: React.FC = (): JSX.Element => {
  return (
    <Switch>
      {Object.values(ROUTES).map(({ path, component }) => (
        <Route key={path} exact path={path} component={component} />
      ))}
      <Route path="*">
        <Redirect to={ROUTES.AUTH.path} />
      </Route>
    </Switch>
  );
};
