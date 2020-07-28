import React, { useState } from "react";
//connect function form redux
import { connect } from "react-redux";
//Link from react router
import { Link as RouterLink } from "react-router-dom";
import { useHistory } from "react-router-dom"
// all material UI style dependcies and images
import {
  Typography,
  Paper,
  TextField,
  Link,
  Grid,
  Button,
  CircularProgress,
  FormHelperText,
} from "@material-ui/core";
import { useStyles } from '../theme/componentStyles/loginStyles'

//components
// import { LogIn_CampaignSuccess } from './LogIn_CampaignSuccess'
// import Login from '../components/Login'

//Actions 

import Login from './Login'
import { registerUser } from "../actions/"
import Login from "./Login";

const SignUp = (props) => {
  //Allows to uses the styling from component styles directory
  const classes = useStyles();

  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
    email:"",
  });
  

  console.log("%c SignUP", "color:red", newUser)

  //lets us use history api from react-router
const history = useHistory();
  
//Form Handle Change
const HandleChange = e => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault()
        console.log(newUser);
        props.registerUser(newUser);
      };


  //This is the login form made with Material UI
  return (
    <>
    <Grid item style={{ margin: "auto" }}>
        <Grid
          container
          alignItems="center"
          justify="center"
          style={{ height: "30em" }}
        >
          {/* This is the image  */}
          <div className={classes.mainImage} />
        </Grid>
      </Grid>
      {
        props.signUpSuccess
        ? <>      
        <Login />
      </>
        :
      <div style={{ padding: "15px", margin: "3em auto", maxWidth: "400px" }}>
        {/* This is the form  */}
        <form onSubmit={handleSubmit}>
          <Paper style={{ padding: "15px" }}>
            <Grid
              container
              alignItems="flex-start"
              justify="center"
              spacing={2}
            >
              <Typography
                variant="h4"
                align="center"
                gutterBottom
                color="secondary"
              >
                Sign Up!
                {props.userExistError && <FormHelperText style={{color:"red"}}>{props.userExistErrorMessage}</FormHelperText>}
              </Typography>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  name="username"
                  type="test"
                  label="User Name"
                  variant="outlined"
                  onChange={handleChange}
                  value={newUser.username}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  name="password"
                  type="password"
                  label="Password"
                  variant="outlined"
                  onChange={handleChange}
                  value={newUser.password}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  name="email"
                  type="email"
                  label="Email"
                  variant="outlined"
                  onChange={handleChange}
                  value={newUser.email}
                />
              </Grid>
              <Grid item style={{ width: "100%" }}>
                {/* The ternary will change the type of button, a submit or a loading state */}
                {props.signUpLoading ? (
                  <Button
                  variant="contained"
                  color="secondary"
                  type="submit"
                  style={{ width: "100%" }}>
                    {<CircularProgress style={{color:"white", height:"20px"}} />}
                  </Button>
                  
                ) : (
                  <Button
                    variant="contained"
                    type="submit"
                    color="secondary"
                    style={{ width: "100%" }}
                  >
                    <span style={{color:"white"}}>Sign Up!</span>
                  </Button>
                )}
              </Grid>
              <Grid item>
                <Typography>
                  Already A member? 
                  <Link
                    color="secondary"
                    component={RouterLink}
                    to="Login"
                  >
                    {" "}
                    Click Here{" "}
                  </Link>
                  to Log In.
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </form>
      </div>
      }
      
    </>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { registerUser })(SignUp);