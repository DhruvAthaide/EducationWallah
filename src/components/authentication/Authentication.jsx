import React, { useState } from "react";
import "./authentication.css";

const defaultSignUpFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const defaultSignInFields = {
  signInEmail: "",
  signInPassword: "",
};

export default function Authentication() {
  const [signUpFields, setSignUpFields] = useState(defaultSignUpFields);
  const [signInFields, setSignInFields] = useState(defaultSignInFields);

  const handleSignUpChange = (event) => {
    const { name, value } = event.target;

    setSignUpFields({ ...signUpFields, [name]: value });
  };

  const handleSignInChange = (event) => {
    const { name, value } = event.target;

    setSignInFields({ ...signInFields, [name]: value });
  };

  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-md-6 mb-5">
            <div class="card shadow p-5 animated zoomIn slow">
              <h3 class="text-center font-weight-bold text-uppercase mb-3">
                SIGN UP
              </h3>

              <form>
                <div class="form-group">
                  <label>Enter Username</label>
                  <input type="text" name="displayName" class="form-control" />
                </div>
                <div class="form-group">
                  <label>Enter Email</label>
                  <input
                    type="email"
                    onChange={handleSignUpChange}
                    name="email"
                    class="form-control"
                  />
                </div>
                <div class="form-group">
                  <label>Enter Password</label>
                  <input
                    type="password"
                    onChange={handleSignUpChange}
                    name="password"
                    class="form-control"
                  />
                </div>
                <div class="form-group">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    onChange={handleSignUpChange}
                    name="confirmPassword"
                    class="form-control"
                  />
                </div>
                <button
                  type="submit"
                  class="btn btn-outline-dark btn-block rounded-pill"
                >
                  Register
                </button>
              </form>
            </div>
          </div>
          <div class="col-md-6 mb-5">
            <div class="card shadow animated zoomIn slow p-5">
              <h3 class="text-center font-weight-bold text-uppercase mb-3">
                Login Here
              </h3>

              <form>
                <div class="form-group">
                  <label>Enter Email</label>
                  <input
                    type="text"
                    onChange={handleSignInChange}
                    name="signInEmail"
                    class="form-control"
                  />
                </div>
                <div class="form-group">
                  <label>Enter Password</label>
                  <input
                    type="password"
                    name="signInPassword"
                    onChange={handleSignInChange}
                    class="form-control"
                  />
                </div>
                <button
                  type="submit"
                  class="btn btn-outline-dark btn-block rounded-pill"
                >
                  Login
                </button>
              </form>
              <h6 class="mt-3">
                 <a href="#">Admin Login</a>
              </h6>
              <p class="text-center mt-3"> or Login with</p>
              <p></p>
              <div class="text-center">
                <i class="fab fa-facebook mx-2 fa-2x"></i>
                <i class="fab fa-twitter  mx-2 fa-2x"></i>
                <i class="fab fa-instagram  mx-2 fa-2x"></i>
                <i class="fab fa-google  mx-2 fa-2x"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
