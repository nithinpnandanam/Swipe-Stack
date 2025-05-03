import { Box, Button, TextField, Typography } from "@mui/material";
import "./Login.css";
import { useState } from "react";
import { userLogin } from "@/api/login.api";
import { useNavigate } from "react-router";
import paths from "@/router/routes";
import { useUserContext } from "@/context/UserContext/UserContext";
const Login = () => {
  const [email, setEmail] = useState("rachel@gmail.com");
  const [password, setPassword] = useState("Rachel@123");
  const {setLoggedInUser} = useUserContext()
  const navigate = useNavigate()

  const handleLogIn = async () => {
    try {
      const response = await userLogin({ emailId: email, password });
      console.log('Login successful:', response.data);
      setLoggedInUser(response.data.data)
      navigate(paths.ROOT_PATH)

    } catch (err) {
      console.error('Login failed:', err);
    }
  };
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
            <Button variant="contained" onClick={handleLogIn}>
              Log In
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Login;
