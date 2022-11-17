import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const Signup = () => {
  const history = useHistory();
  const MySwal = withReactContent(Swal);
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { name, email, phone, work, password, cpassword } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      }),
    });
    const data = await res.json();

    if (res.status === 422 || !data) {
      MySwal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        timer: 3000
      });
    } else {
      MySwal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Registration Successfull!",
      });
      history.push("/login");
    }
  };

  return (
    <div>
      <div className="register-form">
        <form method="POST" className="custom-login-form" id="registerform">
          <div className="form-icon">
            <label>Registration</label>
          </div>
          <div className="form-group row">
            <label htmlFor="inputPassword" className="regis-col-form-label">
              Name
            </label>
            <div className="col-sm-12">
              <input
                type="text"
                className="regis-form-control"
                id="name"
                name="name"
                value={user.name}
                onChange={handleInputs}
                placeholder="Enter your name"
              />
            </div>
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
                value={user.email}
                onChange={handleInputs}
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputPassword" className="regis-col-form-label">
              Phone Number
            </label>
            <div className="col-sm-12">
              <input
                type="number"
                className="regis-form-control"
                id="phone"
                name="phone"
                autoComplete="off"
                value={user.phone}
                onChange={handleInputs}
                placeholder="Enter your phone number"
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputwork" className="regis-col-form-label">
              Profession
            </label>
            <div className="col-sm-12">
              <input
                type="text"
                className="regis-form-control"
                id="work"
                name="work"
                autoComplete="off"
                value={user.work}
                onChange={handleInputs}
                placeholder="Enter Profession"
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
                value={user.password}
                onChange={handleInputs}
                placeholder="Enter password"
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputcpassword" className="regis-col-form-label">
              Confirm Again
            </label>
            <div className="col-sm-12">
              <input
                type="password"
                className="regis-form-control"
                id="cpassword"
                name="cpassword"
                autoComplete="off"
                value={user.cpassword}
                onChange={handleInputs}
                placeholder="Confirm password"
              />
            </div>
          </div>
          <div className="form-group">
            <button
              type="submit"
              name="signup"
              id="signup"
              className="btn btn-block create-account"
              onClick={PostData}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
