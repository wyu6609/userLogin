import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Signup from "./Signup";
import ChangePassword from "./ChangePassword";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const App = () => {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            User Auth App
          </Typography>
          <Button color="inherit" component={Link} to="/login">
            Login
          </Button>
          <Button color="inherit" component={Link} to="/signup">
            Signup
          </Button>
          <Button color="inherit" component={Link} to="/change-password">
            Change Password
          </Button>
        </Toolbar>
      </AppBar>
      <Routes basename="/user-auth-frontend">
        <Route path="/user-auth-frontend/" element={<Home />} />
        <Route path="/user-auth-frontend/login" element={<Login />} />
        <Route path="/user-auth-frontend/signup" element={<Signup />} />
        <Route
          path="/user-auth-frontend/change-password"
          element={<ChangePassword />}
        />
      </Routes>
    </Router>
  );
};

export default App;
