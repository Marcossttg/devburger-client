import React from "react";

import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import {
  Cart,
  Home,
  Login,
  Products,
  Register,
  Admin
} from "../containers";

import PrivateRoute from "./private-route";
import paths from "../constants/paths";

function Routes() {

  return (
    <Router>
      <Switch>
        <Route component={Login} path="/login"></Route>
        <Route component={Register} path="/cadastro"></Route>

        <PrivateRoute exact component={Home} path="/"></PrivateRoute>
        <PrivateRoute component={Products} path="/produtos"></PrivateRoute>
        <PrivateRoute component={Cart} path="/carrinho"></PrivateRoute>

        <PrivateRoute component={Admin} path={paths.Order} isAdmin={true}></PrivateRoute>
        <PrivateRoute component={Admin} path={paths.Products} isAdmin={true}></PrivateRoute>
        <PrivateRoute component={Admin} path={paths.NewProduct} isAdmin={true}></PrivateRoute>
      </Switch>
    </Router>
  )
}

export default Routes
