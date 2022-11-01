import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import classes from "./style.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { showToastMessage } from "../../utils/ShowToastMessage";
import Loader from "../../helper/Loader";
import axios from "axios";

const SignUp = () => {
  const [signupDetails, SetSignupDetails] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    matchingPassword: "",
  });
  const [userNameError, setUserNameError] = useState({
    status: true,
    message: "Enter valid Username",
  });
  const [emailError, setEmailError] = useState({
    status: true,
    message: "Enter valid Email",
  });
showToastMessage("error","hellow")
const navigate = useNavigate();
  const handleOnchange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "username") {
      SetSignupDetails((pre) => ({
        ...pre,
        userName: value,
      }));
    } else if(name === "email") {
      SetSignupDetails((pre) => ({
        ...pre,
        email: value,
      }));      
    }
    else if(name === "firstName") {
      SetSignupDetails((pre) => ({
        ...pre,
        firstName: value,
      }));      
    }
    else if(name === "lastName") {
      SetSignupDetails((pre) => ({
        ...pre,
        lastName: value,
      }));      
    }
    else if(name === "password") {
      SetSignupDetails((pre) => ({
        ...pre,
        password: value,
      }));      
    }
    else if(name === "matchingPassword") {
      SetSignupDetails((pre) => ({
        ...pre,
        matchingPassword: value,
      }));      
    }
  };
  const [loading, setLoading] = useState(false);
  const getSignup = async () => {
    try {
      setLoading(true);
      const loginstatus = await axios.post(
        "https://ecommerceserver-ten.vercel.app/api/auth/createStartupUser",
        signupDetails
      );
    console.log(loginstatus.data.status)
      if(loginstatus.data.status === "success"){
        showToastMessage("success",loginstatus.data.message)
        setLoading(false);
        navigate("/")

      }else{
        showToastMessage("error","failed to signup")
      }

      setLoading(false);
    } catch (error) {
      console.log(error.response.data.error);      
      alert("User already exist")
        showToastMessage("error", error.response.data.error);
        setLoading(false);
    }
  };

  const handleSignup = async () => {
    if (userNameError.status && emailError.status) {
      getSignup();
    } else {
      showToastMessage("error", "Please provide valid credential");
    }
  };
  return (
    <>
      <div className={classes["main"]}>
        {loading ? <Loader /> : null}
        <div className={classes["conteiner"]}></div>
        <div className={classes["loginContainer"]}>
          <div className={classes["title"]}>Welcome to OneLand Store</div>
          <div className={classes["title"]}>Registration</div>
          <div className={classes["inlineField"]}>
            <TextField
              id="standard-basic"
              label="FirstName"
              variant="standard"
              name="firstName"
              color="success"
              onChange={handleOnchange}
            />
            <TextField
              id="standard-basic"
              label="LastName"
              variant="standard"
              name="lastName"
              color="success"
              onChange={handleOnchange}
            />
          </div>
          <div className={classes["inlineField"]}>
            <TextField
              id="standard-basic"
              label="UserName"
              variant="standard"
              name="username"
              color="success"
              // helperText={userNameError.status ? userNameError.message : ""}
              // error={userNameError.status}
              onChange={handleOnchange}
            />
            <TextField
              id="standard-basic"
              label="Email"
              variant="standard"
              name="email"
              color="success"
              // helperText={emailError.status ? emailError.message : ""}
              // error={emailError.status}
              onChange={handleOnchange}
            />
          </div>

          <div className={classes["inlineField"]}>
            <TextField
              id="standard-basic"
              label="Password"
              variant="standard"
              name="password"
              type="password"
              onChange={handleOnchange}
            />
            <TextField
              id="standard-basic"
              label="Confirm Password"
              variant="standard"
              name="matchingPassword"
              type="password"
              onChange={handleOnchange}
            />
          </div>
          <div className={classes["btnContainer"]}>
            <Button
              className={classes["btn"]}
              variant="contained"
              onClick={handleSignup}
            >
              Signup
            </Button>
          </div>
          <div>
            <Link to="/" className={classes["register"]}>
            <Button variant="contained">Login</Button>              
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
