import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

export default function useRoutes(isAuth) {
  if (isAuth) {
    return (
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Redirect to="/dashboard" />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}
