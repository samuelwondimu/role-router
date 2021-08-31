import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../components/Login";
import Landing from "../components/Landing";
import Blog from "../components/Blog";

const PublicROutes: React.FC = () => {
  return (
    <Fragment>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="">
          <Landing />
        </Route>
      </Switch>
    </Fragment>
  );
};

export default PublicROutes;
