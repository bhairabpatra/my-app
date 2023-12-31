//https://www.pluralsight.com/guides/how-to-router-redirect-after-login
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

let apiUrl = "http://localhost:3000/loginInfo";
const Login = () => {
  const navigate = useNavigate();
  const [loginDetails, setloginDetails] = useState({
    email: "",
    pwd: "",
  });
  const [authenticated, setauthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || false)
  );

  const handelInput = (e) => {
    e.preventDefault();
    setloginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };

  const handelLogin = (e) => {
    e.preventDefault();
    axios
      .get(apiUrl)
      .then((response) => {
        if (
          loginDetails.email === response.data[0].email &&
          loginDetails.pwd === response.data[0].pwd
        ) {
          console.log("Login sucess");
          setauthenticated(true);
          localStorage.setItem("authenticated", true);
          console.log("authenticated", authenticated);
          navigate("/");

          setloginDetails({ email: "", pwd: "" });
        } else {
          console.log("Login failed");
        }
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  return (
    // email: "test@gmail.com",
    // pwd: "12345"
    <div className="login-form">
      <form>
        <div class="mb-3 mt-3">
          <label for="email" class="form-label">
            Email:
          </label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="Enter email"
            name="email"
            value={loginDetails.email}
            onChange={handelInput}
          />
        </div>
        <div class="mb-3">
          <label for="pwd" class="form-label">
            Password:
          </label>
          <input
            type="password"
            class="form-control"
            id="pwd"
            placeholder="Enter password"
            name="pwd"
            value={loginDetails.pwd}
            onChange={handelInput}
          />
        </div>

        <button type="submit" onClick={handelLogin} class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
