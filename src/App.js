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
          <Button color="inherit" component={Link} to="/userLogin/login">
            Login
          </Button>
          <Button color="inherit" component={Link} to="/userLogin/signup">
            Signup
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/userLogin/change-password"
          >
            Change Password
          </Button>
        </Toolbar>
      </AppBar>
      <Routes baseName="/userLogin">
        <Route path="/userLogin/" element={<Home />} />
        <Route path="/userLogin/login" element={<Login />} />
        <Route path="/userLogin/signup" element={<Signup />} />
        <Route path="/userLogin/change-password" element={<ChangePassword />} />
      </Routes>
    </Router>
  );
};

export default App;
