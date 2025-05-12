import { Box, Button, TextField, Typography } from "@mui/material";
import "./EditProfile.css";
import { useState } from "react";
const EditProfile = () => {
  const [email, setEmail] = useState("rachel@gmail.com");
  const [password, setPassword] = useState("Rachel@123");
  const handleEdit = () =>{
    console.log("Edit")
  }
  return (
    <>
      <Box className="edit-profile-container-outer">
        <Box className="edit-profile-container-inner">
          <Typography variant="h3">Edit Profile</Typography>
          <Box className="edit-profile-container">
            <TextField
              className="login-email"
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              className="login-password"
              label="Password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button variant="contained" onClick={handleEdit}>
              Edit
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default EditProfile;
