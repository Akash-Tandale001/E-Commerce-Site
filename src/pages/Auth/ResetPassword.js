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

const ResetPassword = () => {
  const [loading, setLoading] = useState(false);
  const [passwordDetails, setPasswordDetails] = useState({
    email:"",
    password:"",
    confirmPassword:""
  });
  const navigate = useNavigate();
  const handleLogin=async()=>{
    try {
      if(passwordDetails.email !== "" && passwordDetails.password !== "" && passwordDetails.confirmPassword !== ""){
        setLoading(true);
        const loginstatus = await axios.put(
          "https://ecommerceserver-ten.vercel.app/api/auth/forgotPassword",
          passwordDetails
        );
        showToastMessage("success","Password changed Successfully")
        navigate("/")
      setLoading(false);
      }
     
    } catch (error) {
      setLoading(false);
    }
  }
  const handleOnchange=(e)=>{
    const name = e.target.name;
    const value = e.target.value;
    if (name === "email") {
      setPasswordDetails((pre) => ({
        ...pre,
        email: value,
      }));
    } else if(name === 'password') {
      setPasswordDetails((pre) => ({
        ...pre,
        password: value,
      }));
    }else{
      setPasswordDetails((pre) => ({
        ...pre,
        confirmPassword: value,
      }));
    }
  }
  return (
    <>
      <div className={classes["main"]}>
        {loading ? <Loader /> : null}
        <div className={classes["conteiner"]}></div>
          <div className={classes["loginContainer"]}>
            <div className={classes["title"]}>Welcome to OneLand Store</div>
            <div className={classes["title"]}>Reset Password</div>
            <TextField
              id="standard-basic"
              label="Email"
              variant="standard"
              name="email"
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
             <TextField
              id="standard-basic"
              label="Confirm Password"
              variant="standard"
              name="confirmPassword"
              type="password"
              onChange={handleOnchange}
            />
            <Button variant="contained" onClick={handleLogin}>
              Submit
            </Button>
            <div>
              <Link to="/"
                className={classes["register"]}
              >
                Login
              </Link>
            </div>
          </div>
      </div>
    </>
  );
}

export default ResetPassword
