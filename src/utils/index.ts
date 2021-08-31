import { intersection } from "lodash";

import { RouterConfig } from "../routes/types";

export function isArrayWithLength(arr: string[]) {
  return Array.isArray(arr) && arr.length;
}

export function getAllowedRoutes(routes: RouterConfig[]) {
  const role = localStorage.getItem("roles");
  let roles: string[];

  if (role) {
    roles = JSON.parse(role);
  }

  return routes.filter(({ permissions }) => {
    if (!permissions) return true;
    else if (!isArrayWithLength(permissions)) return true;
    else return intersection(permissions, roles).length;
  });
}
