import React, { lazy, Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import PrivateRoute from "./Utils/PrivatRoute";
import PublicRoute from "./Utils/PublicRoute";

import Topbar from './Components/Topbar';
const Dashboard = lazy(() => import('./Pages/Dashboard'));
const Login = lazy(() => import('./Pages/Login'));
const Jokes = lazy(() => import('./Pages/Jokes'));

function App() {

  //loading content
  const loading = () => {
    return (
      <div class="d-flex justify-content-center">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }

  return (
    <>
      <BrowserRouter>
        <Topbar />
        <Suspense fallback={loading}>
          <Switch>
            <Route path="/" exact render={() => <Redirect to="/dashboard" />} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <PublicRoute path="/login" component={Login} />
            <PrivateRoute path="/jokes" component={Jokes} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
