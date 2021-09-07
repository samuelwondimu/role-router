import React, { Fragment } from "react";
import { Redirect, useRouteMatch } from "react-router-dom";
import { getAllowedRoutes, isLoggedIn } from "../utils";
import routes from "../config/PrivateRoutesConfig";

import MapAllowedRoutes from "./MapAllowedRoutes";
import NavBar from "../components/common/NavBar";

const PrivateRoutes: React.FC = () => {
  const match = useRouteMatch("/app");
  let allowedRoutes = [];

  if (isLoggedIn()) {
    allowedRoutes = getAllowedRoutes(routes);
  } else {
    return <Redirect to="/" />;
  }

  return (
    <Fragment>
      <NavBar routes={allowedRoutes} prefix={match?.path} />
      <MapAllowedRoutes routes={allowedRoutes} basePath="/app" isAddNotFound />
    </Fragment>
  );
};

export default PrivateRoutes;
