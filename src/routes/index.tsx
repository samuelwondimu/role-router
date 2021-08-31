import React, { memo } from "react";
import { Router, Route, Switch } from "react-router-dom";
import histroy from "../utils/histroy";
import PrivateRoutes from "./PrivateRoutes";
import Auth from "./Auth";

function Routes() {
  return (
    <Router history={histroy}>
      <Switch>
        <Route path="/app">
          <PrivateRoutes />
        </Route>
        <Route path="">
          <Auth />
        </Route>
      </Switch>
    </Router>
  );
}

export default memo(Routes);
