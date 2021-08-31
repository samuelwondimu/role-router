import { RouterConfig } from "./types/index";
import Roles from "../config/Roles";
import Landing from "../components/Landing";
import Login from "../components/Login";
import Blog from "../components/Blog";
import Dashboard from "../components/Dashboard";
import AdminDashboard from "../components/AdminDashboard";
import CreateCompany from "../components/CreateCompany";
import Profile from "../components/Profile";

const routes: RouterConfig[] = [
  // PUBLIC Routes
  {
    title: "Landing Page",
    path: "/",
    component: Landing,
    exact: true,
  },
  {
    title: "Login Page",
    path: "/login",
    component: Login,
    exact: true,
  },
  {
    title: "Blog",
    path: "/blog",
    component: Blog,
    exact: true,
  },

  // ADMIN routes
  {
    title: "DASHBOARD",
    path: "/admin",
    component: Dashboard,
    // permissions: [Roles.ADMIN, Roles.SUPER_ADMIN],
    children: [
      {
        title: "ADD NEW COMPANY",
        path: "/addcompany",
        component: AdminDashboard,
        permissions: [Roles.SUPER_ADMIN],
      },
      {
        title: "Create Report",
        path: "/addcompany",
        component: CreateCompany,
        permissions: [Roles.SUPER_ADMIN, Roles.ADMIN],
      },
    ],
  },

  // PROFILE Routes
  {
    title: "Profile",
    path: "/profile",
    component: Profile,
    permissions: [Roles.ADMIN, Roles.CLERK, Roles.SUPER_ADMIN],
  },
];

export default routes;
