import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Picker from '../pages/Picker';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/picker" exact component={Picker} />
    </Switch>
  );
};

export default Routes;
