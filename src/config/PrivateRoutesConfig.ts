import { routerTypes } from "../config/routerTypes";
import Roles from "../config/Roles";
import Landing from "../components/Landing";
import Login from "../components/Login";
import Blog from "../components/Blog";
import Dashboard from "../components/Dashboard";
import AdminDashboard from "../components/AdminDashboard";
import CreateCompany from "../components/CreateCompany";
import Profile from "../components/Profile";

// TODO:
/*
 * 1. Make title optional
 * 2. Make title multi type support ie: (string, node, react element)
 * 3. Add child route support
 * */

/*
 * Route config object supports all react-router's route component props with some additional props ie: (title, permission, children)
 * you can add or remove props from config object it's means it is super customizable and support upto N nesting, child routes must follow the same parent shape,
 * it means the config object is same for both there is no additional key for child nor for parent.
 * you can find route props from here https://reactrouter.com/web/api/Route let's take a look at some additional props
 * 1. permission: permission is an optional prop and it's type is an array of roles, permission is used for allowing certain users/roles
 *  	to have access of that route and if you skip/omit the permission or it's an empty array that means every authenticated user/role have access to that route.
 * 2. title: title is an optional prop and it's type is a string|node it is used for mapping route link into a navigation
 * 3. children: children is also an optional prop and it's type is an array of route config objects, children are used for nested routes
 * */

const routes: routerTypes[] = [
  // PUBLIC Routes
  {
    title: "Landing Page",
    path: "/",
    Component: Landing,
    exact: true,
  },
  {
    title: "Login Page",
    path: "/login",
    Component: Login,
    exact: true,
  },
  {
    title: "Blog",
    path: "/blog",
    Component: Blog,
    exact: true,
  },

  // ADMIN routes
  {
    title: "DASHBOARD",
    path: "/admin",
    Component: Dashboard,
    // permissions: [Roles.ADMIN, Roles.SUPER_ADMIN],
    children: [
      {
        title: "ADD NEW COMPANY",
        path: "/addcompany",
        Component: AdminDashboard,
        permission: [Roles.SUPER_ADMIN],
      },
      {
        title: "Create Report",
        path: "/addcompany",
        Component: CreateCompany,
        permission: [Roles.SUPER_ADMIN, Roles.ADMIN],
      },
    ],
  },

  // PROFILE Routes
  {
    title: "Profile",
    path: "/profile",
    Component: Profile,
    permission: [Roles.ADMIN, Roles.CLERK, Roles.SUPER_ADMIN],
  },
];

export default routes;
