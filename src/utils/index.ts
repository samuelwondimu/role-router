import { intersection } from "lodash";
import { routerTypes } from "../config/routerTypes";

export function isLoggedIn() {
  /*
   * Note:
   *  This app assume if local storage have roles it means
   *  user is authenticated you can update this logic as per your app.
   */
  return !!localStorage.getItem("roles");
}

export function isArrayWithLength(arr: string[]) {
  return Array.isArray(arr) && arr.length;
}

export function getAllowedRoutes(routes: routerTypes[]) {
  localStorage.setItem("roles", JSON.stringify("ADMIN"));
  const role = localStorage.getItem("roles");
  let roles: string[];

  if (role) {
    roles = JSON.parse(role);
  }

  return routes.filter(({ permission }) => {
    if (!permission) return true;
    else if (!isArrayWithLength(permission)) return true;
    else return intersection(permission, roles).length;
  });
}
