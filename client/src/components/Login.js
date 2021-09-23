import React, { useState, useContext } from "react";
import Logopic2 from "../images/logo_1.png";
import { useHistory } from "react-router-dom";

import {UserContext} from "../App";

const Login = () => {

  const {state, dispatch} = useContext(UserContext);
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async(e)=>{
    e.preventDefault();

    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password
      })
    });

    const data = res.json();

    if (res.status === 400 || !data) {
      window.alert("Invalid Credentials");
    } else {
      dispatch({type:"USER",payload:true})
      // window.alert("logged In Successfull!");
      history.push("/about");
    }

  }

  return (
    <div>
      <div className="register-form">
        <form method="POST" className="custom-login-form" id="registerform">
          <div>
            <img src={Logopic2} alt="RAMM" className="centerImage"></img>
          </div>
          <div className="form-group row">
            <label htmlFor="inputPassword" className="regis-col-form-label">
              Email Id
            </label>
            <div className="col-sm-12">
              <input
                type="email"
                className="regis-form-control"
                id="email"
                name="email"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputPassword" className="regis-col-form-label">
              Password
            </label>
            <div className="col-sm-12">
              <input
                type="password"
                className="regis-form-control"
                id="password"
                name="password"
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
              />
            </div>
          </div>
          <div className="form-group">
            <button type="submit" name="signin" id="signin" className="btn btn-block" onClick={loginUser}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
