import { lazy } from "react";
import { RouterConfig } from "./types/index";
import Roles from "../config/Roles";

const routes: RouterConfig[] = [
  // PUBLIC Routes
  {
    title: "Landing Page",
    path: "/",
    // component: lazy(() => import("../components/Landing")),
    exact: true,
  },
  {
    title: "Login Page",
    path: "/login",
    // component: lazy(() => import("../components/Login")),
    exact: true,
  },
  {
    title: "Blog",
    path: "/blog",
    // component: lazy(() => import("../components/Blog")),
    exact: true,
  },

  // ADMIN routes
  {
    title: "DASHBOARD",
    path: "/admin",
    // component: lazy(() => import("../components/AdminDashboard")),
    permissions: [Roles.ADMIN, Roles.SUPER_ADMIN],
    children: [
      {
        title: "ADD NEW COMPANY",
        path: "/addcompany",
        // component: lazy(() => import("../components/AdminDashboard")),
        permissions: [Roles.SUPER_ADMIN],
      },
      {
        title: "Create Report",
        path: "/addcompany",
        // component: lazy(() => import("../components/CreateCompany")),
        permissions: [Roles.SUPER_ADMIN, Roles.ADMIN],
      },
    ],
  },
  // Profile Routes
  {
    title: "Profile",
    path: "/profile",
    // component: lazy(() => import("../components/Profile")),
    permissions: [Roles.ADMIN, Roles.CLERK, Roles.SUPER_ADMIN],
  },
];

export default routes;
