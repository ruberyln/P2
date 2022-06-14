import { useState ,useContext} from "react";
//import {Formik , Form} from 'formik';
import commonApi from "../api/common";
import { Context } from "../userContext/Context"
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import * as Yup from "yup";
//import FormControlLabel from "@mui/material/FormControlLabel";
//import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" className="btn btn-link" to={`/signup}`}>
        Sign up
      </Link>{" "}
      |{new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
  const { dispatch } = useContext(Context);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [isError, setIsError] = useState(false);
  // const [userData, setUserData] = useState({
  //   email: "",
  //   password: "",
  // });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },

    validationSchema: Yup.object({
      password: Yup.string().required("Required"),
      email: Yup.string().required("Required")
    }),

    onSubmit: async (values) => {
      setError("");
      setIsError(false);
      await commonApi({
        action: "login",
        data: values,
      })
       .then((res) => {
      dispatch({ type: "LOGIN_SUCCESS", payload: res });
    
      navigate("/");
    })
        .catch((error) => {
          dispatch({ type: "LOGIN_FAILURE" });
          const message = error.response.data.error;
          setIsError(true);
          setError(message);
        });

    }
  // const handleChange = (event) => {
  //   setUserData({ ...userData, [event.target.name]: event.target.value });
  // };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   setError("");
  //   setIsError(false);
  //   await commonApi({
  //     action: "login",
  //     data: userData,
  //   })
 
  //     .catch((error) => {
  //       dispatch({ type: "LOGIN_FAILURE" });
  //       const message = error.response.data.error;
  //       setIsError(true);
  //       setError(message);
  //     });
  // }
});










// const validateUserData=()=>{
//   return (userData.email!=="") && (userData.password!=="")
// }
// const handleChange = (event) => {
//   setUserData({ ...userData, [event.target.name]: event.target.value });
// };

// const handleSubmit = async (event) => {
//   event.preventDefault();
//   setError("");
//   setIsError(false);
//   await commonApi({
//     action: "login",
//     data: userData,
//   })
//     .then((res) => {
//       dispatch({ type: "LOGIN_SUCCESS", payload: res });
//       setUserData({
//         email: "",
//         password: "",
//       });
//       navigate("/");
//     })
//     .catch((error) => {
//       dispatch({ type: "LOGIN_FAILURE" });
//       const message = error.response.data.error;
//       setIsError(true);
//       setError(message);
//     });
// };



  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          {isError && <div style={{ color: "red" }}>{error}</div>}
          <Box
            component="form"
            
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
             
              error={(formik.touched.email && formik.errors.email) }
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
            
              label="Password"
              type="password"
              id="password"
              error={
                (formik.touched.password && formik.errors.password)
              }
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              autoComplete="current-password"
            />
           
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color="secondary"
              //component ={Link}
              // href = {"/drawer "}
              onClick={formik.handleSubmit}
              disabled={!(formik.isValid && formik.dirty)}
            >
              Sign In
            </Button>
            <Grid container>
             
              <Grid item>
                <Link href="http://localhost:3000/signup " variant="body2">
                  "Don't have an account? Sign Up"
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
      <ToastContainer />
    </ThemeProvider>
  );
}
