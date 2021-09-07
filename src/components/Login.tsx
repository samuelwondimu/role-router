import React, { useState } from "react";
import {
  makeStyles,
  createStyles,
  Theme,
  Typography,
  Box,
  Button,
  Card,
  TextField,
  Grid,
  Container,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: "#fff",
      backgroundColor: "#1c1a1d",
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
    userCard: {
      backgroundColor: "#1c242e",
      textAlign: "left",
      paddingTop: theme.spacing(3),
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      paddingBottom: theme.spacing(3),
      color: "#fff",
    },
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
  })
);

const users = [
  {
    name: "samuel@gmail.com",
    password: 123456,
    role: "ADMIN",
  },
  {
    name: "johnDoe@gmail.com",
    password: 123456,
    role: "SUPER_ADMIN",
  },
  {
    name: "clerkUser@gmail.com",
    password: 123456,
    role: "CLERK",
  },
];

const Login: React.FC = () => {
  const { paper, userCard, form } = useStyles();
  const [user, setUser] = useState({ role: "GUEST" });

  const handleSubmit = () => {
    localStorage.setItem("roles", JSON.stringify(user.role));
  };

  return (
    <Container component="main" maxWidth="lg">
      <Box className={paper}>
        <Typography>
          <Box fontFamily="sans" p={5} fontSize={40} fontWeight={800}>
            Role-Router
          </Box>
        </Typography>
        <Grid container>
          <Grid item xs={1} />
          <Grid
            item
            xs={10}
            container
            spacing={2}
            justify="center"
            justifyContent="space-around"
          >
            {users.map((user) => (
              <Grid item xs={4}>
                <Card className={userCard}>
                  <code>
                    email: {user.name}; <br />
                    passqord: {user.password} <br />
                    role: {user.role}
                  </code>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={3} />
          <Grid item container xs={6}>
            <form className={form} noValidate onSubmit={handleSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Link to="/login">
                <Button
                  variant="contained"
                  type="submit"
                  fullWidth
                  color="primary"
                >
                  Login
                </Button>
              </Link>
            </form>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Login;
