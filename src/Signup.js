import React, { useState } from "react";
import axios from "axios";
import bcrypt from "bcryptjs";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Alert,
} from "@mui/material";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }

    setPasswordError("");

    try {
      // Hash the password before sending
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const requestBody = {
        email,
        password: hashedPassword,
      };
      //local signup endpoint
      const response = await axios.post(
        "http://localhost:5000/signup",
        requestBody
      );

      console.log("Signup successful:", response.data);
    } catch (error) {
      console.error(
        "Signup failed:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Signup
        </Typography>
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {password && (
          <TextField
            label="Confirm Password"
            type="password"
            fullWidth
            margin="normal"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={!!passwordError}
            helperText={passwordError}
          />
        )}
        {passwordError && (
          <Alert severity="error" sx={{ width: "100%", mt: 2 }}>
            {passwordError}
          </Alert>
        )}
        <Button
          variant="contained"
          color="primary"
          onClick={handleSignup}
          fullWidth
          sx={{ mt: 3 }}
          disabled={!email || !password || !confirmPassword || !!passwordError}
        >
          Signup
        </Button>
      </Box>
    </Container>
  );
};

export default Signup;
