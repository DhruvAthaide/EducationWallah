import React, { useEffect, useState } from "react";
import "./authentication.styles.css";

export default function Authentication() {
  // This state is used to toggle between sign-in and sign-up page.
  const [content, setContent] = useState(undefined);

  const toggle = () => {
    setContent((value) => (value === "sign-in" ? "sign-up" : "sign-in"));
  };

  useEffect(() => {
    setTimeout(() => {
      setContent("sign-in");
    }, 200);
  }, []);

  return (
    <>
      <div id="container" className={`container ${content}`}>
        <div className="row">
          <div className="col align-items-center flex-col sign-up">
            <div className="form-wrapper align-items-center">
              <div className="form sign-up">
                <div className="input-group">
                  <i className="bx bxs-user"></i>
                  <input type="text" placeholder="Full Name" />
                </div>
                <div className="input-group">
                  <i className="bx bx-mail-send"></i>
                  <input type="email" placeholder="Email" />
                </div>
                <div className="input-group">
                  <i className="bx bxs-lock-alt"></i>
                  <input type="password" placeholder="Password" />
                </div>
                <div className="input-group">
                  <i className="bx bxs-lock-alt"></i>
                  <input type="password" placeholder="Confirm password" />
                </div>
                <button>Sign up</button>

                <p>
                  <span> Already have an account? </span>
                  <b onClick={toggle} className="pointer">
                    Sign in here
                  </b>
                </p>
              </div>
            </div>
          </div>
          <div className="col align-items-center flex-col sign-in">
            <div className="form-wrapper align-items-center">
              <div className="form sign-in">
                <div className="input-group">
                  <i className="bx bxs-user"></i>
                  <input type="email" placeholder="Email" />
                </div>
                <div className="input-group">
                  <i className="bx bxs-lock-alt"></i>
                  <input type="password" placeholder="Password" />
                </div>
                <button id="main-signin">Sign in</button>
                <button id="main-google-signin">Google Sign In</button>
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
