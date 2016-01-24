import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router';
import { createHashHistory } from 'history';

import Layout from './Components/Layout';
import HelloWorld from './Components/HelloWorld';

// setup routing
const history = createHashHistory({
  queryKey: false
});

render((
  <Router history={history}>
    <Route component={Layout}>
      <Route
        path="/"
        component={HelloWorld}
      />
    </Route>
  </Router>
), document.getElementById('main'));
