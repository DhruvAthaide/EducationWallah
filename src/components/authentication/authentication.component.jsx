import React, { useEffect, useState, useContext } from "react";
import "./authentication.styles.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

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
  const { currentUser } = useContext(UserContext);
  // This state is used to toggle between sign-in and sign-up page.
  const [content, setContent] = useState(undefined);
  const [signUpFields, setSignUpFields] = useState(defaultSignUpFields);
  const [signInFields, setSignInFields] = useState(defaultSignInFields);

  const { password, email, confirmPassword, displayName } = signUpFields;
  const { signInEmail, signInPassword } = signInFields;

  const navigate = useNavigate();

  function handleSignUpFieldsChange(event) {
    const { name, value } = event.target;

    setSignUpFields({ ...signUpFields, [name]: value });
  }

  const resetSignUpFields = () => {
    console.log("Clear initiated");
    setSignUpFields(defaultSignUpFields);
  };

  function handleSignInFieldsChange(event) {
    const { name, value } = event.target;

    setSignInFields({ ...signInFields, [name]: value });
  }

  const toggle = () => {
    setContent((value) => (value === "sign-in" ? "sign-up" : "sign-in"));
  };

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
      resetSignUpFields();
      setContent("sign-in");
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

      // resetFields();
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

  useEffect(() => {
    setTimeout(() => {
      setContent("sign-in");
    }, 200);
    if (currentUser) {
      navigate("/home");
    }
  }, []);

  return (
    <>
      <div id="container" className={`container ${content}`}>
        <div className="row">
          <div className="col align-items-center flex-col sign-up">
            <div className="form-wrapper align-items-center">
              <form onSubmit={handleSignUpSubmit}>
                <div className="form sign-up">
                  <div className="input-group">
                    <i className="bx bxs-user"></i>
                    <input
                      type="text"
                      name="displayName"
                      placeholder="Full Name"
                      onChange={handleSignUpFieldsChange}
                    />
                  </div>
                  <div className="input-group">
                    <i className="bx bx-mail-send"></i>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      onChange={handleSignUpFieldsChange}
                    />
                  </div>
                  <div className="input-group">
                    <i className="bx bxs-lock-alt"></i>
                    <input
                      type="password"
                      name="password"
                      minLength={7}
                      placeholder="Password"
                      onChange={handleSignUpFieldsChange}
                    />
                  </div>
                  <div className="input-group">
                    <i className="bx bxs-lock-alt"></i>
                    <input
                      type="password"
                      minLength={7}
                      name="confirmPassword"
                      placeholder="Confirm password"
                      onChange={handleSignUpFieldsChange}
                    />
                  </div>
                  <button>Sign up</button>

                  <p>
                    <span> Already have an account? </span>
                    <b onClick={toggle} className="pointer">
                      Sign in here
                    </b>
                  </p>
                </div>
              </form>
            </div>
          </div>
          <div className="col align-items-center flex-col sign-in">
            <div className="form-wrapper align-items-center">
              <form onSubmit={handleSignInSubmit}>
                <div className="form sign-in">
                  <div className="input-group">
                    <i className="bx bxs-user"></i>
                    <input
                      type="email"
                      name="signInEmail"
                      onChange={handleSignInFieldsChange}
                      placeholder="Email"
                    />
                  </div>
                  <div className="input-group">
                    <i className="bx bxs-lock-alt"></i>
                    <input
                      type="password"
                      name="signInPassword"
                      onChange={handleSignInFieldsChange}
                      placeholder="Password"
                    />
                  </div>
                  <button id="main-signin">Sign in</button>

                  <p>
                    <b onClick={null} className="pointer">
                      Forgot password?
                    </b>
                  </p>
                  <p>
                    <span> Don't have an account? </span>
                    <b onClick={toggle} className="pointer">
                      Sign up here
                    </b>
                  </p>
                </div>
              </form>
            </div>
            <div className="form-wrapper"></div>
          </div>
        </div>
        <div className="row content-row">
          <div className="col align-items-center flex-col">
            <div className="text sign-in">
              <h2>Welcome</h2>
            </div>
            <div className="img sign-in"></div>
          </div>
          <div className="col align-items-center flex-col">
            <div className="img sign-up"></div>
            <div className="text sign-up">
              <h2>Join with us</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
