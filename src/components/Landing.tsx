import {
  makeStyles,
  createStyles,
  Theme,
  Typography,
  Box,
  Button,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      width: "100vw",
      textAlign: "center",
      [theme.breakpoints.up("sm")]: {
        width: "100vw",
        height: "100vh",
        minHeight: 500,
        maxHeight: 1300,
      },
    },
  })
);
const Landing: React.FC = () => {
  const { root } = useStyles();
  return (
    <section className={root}>
      <Box textAlign="center" style={{ width: "100vw" }}>
        <Typography align="center">Role Router</Typography>
        <Link to="/login">
          <Button>Login</Button>
        </Link>
      </Box>
    </section>
  );
};

export default Landing;
