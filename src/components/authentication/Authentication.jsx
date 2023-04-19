import React, { useState,   } from "react";
import "./authentication.css";

import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils"

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
  const { email,password,confirmPassword, displayName } = signUpFields;
  const {signInEmail,signInPassword} = signInFields

  const handleSignUpSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) return;

    try {
      const response = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      const { user } = response;
      createUserDocumentFromAuth(user, displayName);
      //   resetSignUpFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already in use!");
      }
    }
  };

  const handleSignInSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        signInEmail,
        signInPassword
      );
      if (user) {
        // history.push("/");
      }
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Wrong password or email");
          break;
        case "auth/user-not-found":
          alert("No user found with associated email");
          break;

        default:
          console.log(error.code);
          break;
      }

      console.log(error);
    }
  };
  

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

              <form onSubmit={handleSignUpSubmit} >
                <div class="form-group">
                  <label>Enter Username</label>
                  <input type="text" name="displayName" onChange={handleSignUpChange} class="form-control" />
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

              <form onChange={handleSignInSubmit} >
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
              <h6>
                 <a href="#"></a>
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
