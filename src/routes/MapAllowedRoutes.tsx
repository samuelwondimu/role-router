import React, { memo } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { routerTypes } from "../config/routerTypes";
import NotFound from "../components/common/NotFound";
/*
  This is the route utility component used for generating
  routes and child routes it only requires routes array and basePath
*/
interface MapAllowedRoutesProps {
  basePath: string;
  routes: routerTypes[];
  isAddNotFound: boolean;
}

const MapAllowedRoutes: React.FC<MapAllowedRoutesProps> = ({
  basePath,
  routes,
  isAddNotFound,
}: MapAllowedRoutesProps) => {
  const match = useRouteMatch(basePath);
  return (
    <Switch>
      {routes &&
        routes.map((route) => {
          const { path, Component, children, title, permission, ...rest } =
            route;

          return (
            <Route {...rest} key={path} path={`${match?.path}${path}`}>
              {/* TODO: */}
              <Component children={children} />
            </Route>
          );
        })}
      {isAddNotFound && (
        <Route>
          <NotFound />
        </Route>
      )}
    </Switch>
  );
};

export default memo(MapAllowedRoutes);
