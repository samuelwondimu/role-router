import { intersection } from "lodash";
import Roles from "../config/Roles";

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
    else
      return intersection(permissions, [Roles.ADMIN, Roles.SUPER_ADMIN]).length;
  });
}

// TODO: replace with api
export function isLoggedIn() {
  return true;
}
