import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import classes from "./style.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { showToastMessage } from "../../utils/ShowToastMessage";
import Loader from "../../helper/Loader";
import axios from "axios";
import SignUp from "./SignUp";
import { useDispatch, useSelector } from "react-redux";
import { authDetails, saveAuth } from "../../reducer/authSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated, userRole } = useSelector(state => state.authDetails);
  console.log("login",{ isAuthenticated, userRole })
  const [loginDetails, SetLoginDetails] = useState({
    userName: "",
    password: "",
  });
  const [userNameError, setUserNameError] = useState({
    status: true,
    message: "Enter valid Username",
  });
  const handleOnchange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "username") {
      SetLoginDetails((pre) => ({
        ...pre,
        userName: value,
      }));
    } else {
      SetLoginDetails((pre) => ({
        ...pre,
        password: value,
      }));
    }
  };
  const [loading, setLoading] = useState(false);
  const getLogin = async () => {
    try {
      setLoading(true);
      const loginstatus = await axios.post(
        "https://ecommerceserver-ten.vercel.app/api/auth/login",
        loginDetails
      );
   
      await dispatch(
        saveAuth({
          isAuthenticated : true,
          userRole : loginstatus.data.userType,
          token : loginstatus.data.token
        })
      );

    sessionStorage.setItem("userName", loginDetails.userName)
      // navigate("/base/home")
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const handleLogin = async () => {
    if (userNameError.status) {
      getLogin();
    } else {
      showToastMessage("error", "Please provide valid credential");
    }
  };
  
  return (
    <>
      <div className={classes["main"]}>
        {loading ? <Loader /> : (isAuthenticated === true) ? navigate("/base/home") : <>
        
        
        
        <div className={classes["conteiner"]}></div>
          <div className={classes["loginContainer"]}>
            <div className={classes["title"]}>Welcome to OneLand Store</div>
            <TextField
              id="standard-basic"
              label="UserName"
              variant="standard"
              name="username"
              color="success"
              helperText={userNameError.status ? userNameError.message : ""}
              error={userNameError.status}
              onChange={handleOnchange}
            />
            <TextField
              id="standard-basic"
              label="Password"
              variant="standard"
              name="password"
              type="password"
              onChange={handleOnchange}
            />
            <Button variant="contained" onClick={handleLogin}>
              Login
            </Button>
            <div>
              <Link to="/signup"
                className={classes["register"]}
              >
                Register
              </Link>
            </div>
            <div>
              <Link to="/reset-password"
                className={classes["register"]}
              >
                ForgotPassword
              </Link>
            </div>
          </div>
          </>
}
      </div>
    </>
  );
};

export default Login;
