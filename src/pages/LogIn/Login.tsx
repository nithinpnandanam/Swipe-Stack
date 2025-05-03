import { Box, Button, TextField, Typography } from "@mui/material";
import "./Login.css";
const Login = () => {
  return (
    <>
      <Box className="login-container-outer">
        <Box className="login-container-inner">
          <Typography variant="h3">Login</Typography>
          <Box className="email-pass-container">
            <TextField
              className="login-email"
              label="Email"
              variant="outlined"
            />
            <TextField
              className="login-password"
              label="Password"
              variant="outlined"
            />
            <Button variant="contained">Log In</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Login;
