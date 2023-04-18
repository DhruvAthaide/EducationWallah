import React, { useState } from "react";
import "./auth.css";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
// import { useHistory } from "react-router-dom";
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
  const { password, email, confirmPassword, displayName } = signUpFields;
  const { signInEmail, signInPassword } = signInFields;
  // const history = useHistory();

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
        window.location.assign('/')
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
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-5">
            <div className="card shadow p-5 animated zoomIn slow">
              <h3 className="text-center font-weight-bold text-uppercase mb-3">
                SIGN UP
              </h3>
              <form onSubmit={handleSignUpSubmit}>
                <div className="form-group">
                  <label>Enter Full Name</label>
                  <input
                    type="text"
                    value={displayName}
                    onChange={handleSignUpChange}
                    name="displayName"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Enter Email</label>
                  <input
                    type="email"
                    onChange={handleSignUpChange}
                    name="email"
                    value={email}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Enter Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={handleSignUpChange}
                    name="password"
                    minLength={7}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={handleSignUpChange}
                    name="confirmPassword"
                    minLength={7}
                    className="form-control"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-outline-dark btn-block rounded-pill"
                >
                  Register
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-6 mb-5">
            <div className="card shadow animated zoomIn slow p-5">
              <h3 className="text-center font-weight-bold text-uppercase mb-3">
                Login Here
              </h3>

              <form onSubmit={handleSignInSubmit}>
                <div className="form-group">
                  <label>Enter Email</label>
                  <input
                    type="text"
                    value={signInEmail}
                    onChange={handleSignInChange}
                    name="signInEmail"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Enter Password</label>
                  <input
                    type="password"
                    value={signInPassword}
                    name="signInPassword"
                    minLength={7}
                    onChange={handleSignInChange}
                    className="form-control"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-outline-dark btn-block rounded-pill"
                >
                  Login
                </button>
              </form>
              <h6 className="mt-3">
                Don't have an account? <a href="#"> Create Account Here</a>
              </h6>
              <p className="text-center mt-3"> or Login with</p>
              <p></p>
              <div className="text-center">
                <i className="fab fa-facebook mx-2 fa-2x"></i>
                <i className="fab fa-twitter  mx-2 fa-2x"></i>
                <i className="fab fa-instagram  mx-2 fa-2x"></i>
                <i className="fab fa-google  mx-2 fa-2x"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}