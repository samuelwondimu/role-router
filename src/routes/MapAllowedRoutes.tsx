import React, { memo } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { RouterConfig } from "./types";
import NotFound from "../components/common/NotFound";
/*
  This is the route utility component used for generating
  routes and child routes it only requires routes array and basePath
*/
interface AllowedRoutesProps {
  basePath: string;
  routes: RouterConfig[];
  isAddNotFound: boolean;
}

const MapAllowedRoutes: React.FC<AllowedRoutesProps> = ({
  basePath,
  routes,
  isAddNotFound,
}: AllowedRoutesProps) => {
  const match = useRouteMatch(basePath);
  return (
    <Switch>
      {routes &&
        routes.map((route: any) => {
          const {
            path,
            component: Componenet,
            children,
            title,
            permissions,
            ...rest
          } = route;

          return (
            <Route {...rest} key={path} path={`${match?.path}${path}`}>
              <Componenet children={children} />
              {/* {console.log(`${match?.path}${path}`)} */}
              {/* {console.log(<Componenet children={children} />)} */}
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
