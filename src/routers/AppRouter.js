import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import Home from '../components/Home/Home';
import Single from '../components/Single/Single';
import Error404 from '../components/Errors/404';

const AppRouter = () => (
  <Router>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/view/1">Single</NavLink>

    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/view/:id">
        <Single />
      </Route>
      <Route path="*">
        <Error404 />
      </Route>
    </Switch>
  </Router>
);

export default AppRouter;