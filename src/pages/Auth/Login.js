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
  const demologin = async () => {
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

      sessionStorage.setItem("userName", "demo");
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
              {/* <Button variant="contained" onClick={handleLogin}>
                Login
              </Button>
              <Button variant="contained" onClick={demologin}>
                demo login
              </Button> */}
              <div className="flex">
                <div className="w-full">
                  <div className="flex-1 h-full w-56 mx-auto cursor-pointer" onClick={handleLogin}>
                    <div className="flex w-full bg-blue-500 text-white shadow rounded-lg py-2 px-8">
                      <p className="m-auto inset-0 text-xl font-semibold leading-7 text-center text-white-800">Login</p>
                    </div>
                  </div>
                </div>

                <div className="w-3/4">
                  <div className="flex-1 h-full w-56 mx-auto cursor-pointer" onClick={demologin}>
                    <div className="flex w-full bg-blue-500 text-white shadow rounded-lg py-2 px-8">
                      <p className="m-auto inset-0 text-xl font-semibold leading-7 text-center text-white-800">Demo Login</p>
                    </div>
                  </div>
                </div>

              </div>


              <div>

                <div className="w-full">
                  <div className="flex-1 h-full w-96 mx-auto cursor-pointer">
                    <Link to="/signup" className={classes["register"]} >
                      <div className="flex w-full bg-blue-500 text-white shadow rounded-lg py-2 px-8">
                        <p className="m-auto inset-0 text-xl font-semibold leading-7 text-center text-white-800">Register</p>
                      </div>
                      {/* <Button variant="contained" className="w-30">Register</Button> */}
                    </Link>

                    <Link to="/reset-password" className={classes["register"]}>
                      <div className="flex w-full bg-blue-500 text-white shadow rounded-lg py-2 px-8 mt-4">
                        <p className="m-auto inset-0 text-xl font-semibold leading-7 text-center text-white-800">ForgotPassword</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div>

                {/* <Button variant="contained" className="w-30">ForgotPassword</Button> */}


              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Login;
