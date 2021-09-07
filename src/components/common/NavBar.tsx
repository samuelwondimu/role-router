import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { routerTypes } from "../../config/routerTypes";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

interface NavBarProps {
  routes: routerTypes[];
  prefix: string | undefined;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  })
);

const NavBar: React.FC<NavBarProps> = ({ routes, prefix }: NavBarProps) => {
  const classes = useStyles();

  let history = useHistory();

  const handleLogOut = () => {
    localStorage.removeItem("roles");
    history.push("/");
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            ROLE-BASED
          </Typography>
          {routes.map(({ path, title }) => (
            <Link key={path} to={`${prefix}${path}`}>
              <Button color="inherit">{title}</Button>
            </Link>
          ))}
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
