import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleChangePassword = () => {
    console.log("Changing password:", oldPassword, newPassword);
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
          Change Password
        </Typography>
        <TextField
          label="Old Password"
          type="password"
          fullWidth
          margin="normal"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
        />
        <TextField
          label="New Password"
          type="password"
          fullWidth
          margin="normal"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleChangePassword}
          fullWidth
          sx={{ mt: 3 }}
        >
          Change Password
        </Button>
      </Box>
    </Container>
  );
};

export default ChangePassword;
