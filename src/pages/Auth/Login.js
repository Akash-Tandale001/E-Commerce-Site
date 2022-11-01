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
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated, userRole } = useSelector(
    (state) => state.authDetails
  );
  console.log("login", { isAuthenticated, userRole });
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
          isAuthenticated: true,
          userRole: loginstatus.data.userType,
          token: loginstatus.data.token,
        })
      );
      showToastMessage("success", "Login Successfully");

      sessionStorage.setItem("userName", loginDetails.userName);
      // navigate("/base/home")
      setLoading(false);
    } catch (error) {
      setLoading(false);
      alert("Invalid Cridential");
      showToastMessage("error", "Invalid Cridential");
    }
  };
  const handleLogin = async () => {
    if (userNameError.status) {
      getLogin();
    } else {
      showToastMessage("error", "Please provide valid credential");
    }
  };
  const demologin=async()=>{
    try {
      setLoading(true);
      const loginstatus = await axios.post(
        "https://ecommerceserver-ten.vercel.app/api/auth/login",
        {
          userName: "demo",
          password: "demo",
        }
      );

      await dispatch(
        saveAuth({
          isAuthenticated: true,
          userRole: loginstatus.data.userType,
          token: loginstatus.data.token,
        })
      );
      showToastMessage("success", "Login Successfully");

      sessionStorage.setItem("userName","demo");
      // navigate("/base/home")
      setLoading(false);
    } catch (error) {
      setLoading(false);
      alert("Invalid Cridential");
      showToastMessage("error", "Invalid Cridential");
    }
  }

  return (
    <>
      <div className={classes["main"]}>
        {loading ? (
          <Loader />
        ) : isAuthenticated === true ? (
          navigate("/base/home")
        ) : (
          <>
            <div className={classes["conteiner"]}></div>
            <div className={classes["loginContainer"]}>
              <div className={classes["title"]}>Welcome to MobiSale Store</div>
              <TextField
                id="standard-basic"
                label="UserName"
                variant="standard"
                name="username"
                color="success"
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
              <Button variant="contained" onClick={demologin}>
                demo login
              </Button>
              <div>
                <Link to="/signup" className={classes["register"]} >
                  <Button variant="contained" className="w-30">Register</Button>
                </Link>
              </div>
              <div>
                <Link to="/reset-password" className={classes["register"]}>
                <Button variant="contained" className="w-30">ForgotPassword</Button>
                  
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Login;
