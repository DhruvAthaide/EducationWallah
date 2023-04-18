import React from "react";
import "./navbar.styles.css";
import { Link, Outlet } from "react-router-dom";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const navigate = useNavigate();

  return (
    <>
      <nav className="navbar">
        <div className="navbar-overlay"></div>

        <button type="button" className="navbar-burger">
          <span className="material-icons">menu</span>
        </button>

        <Link className="navbar-link" to={"/home"}>
          <h1 className="navbar-title">Education Walah</h1>
        </Link>
        <nav className="navbar-menu">
          <Link className="navbar-link">
            <button type="button" className="active">
              Home
            </button>
          </Link>
          <Link className="navbar-link">
            <button type="button" className="active">
              Courses
            </button>
          </Link>
          <Link className="navbar-link">
            <button type="button" className="active">
              Submission
            </button>
          </Link>
          <Link className="navbar-link">
            <button type="button" className="active">
              Contact
            </button>
          </Link>

          <button
            style={{ color: "red" }}
            onClick={() => {
              signOutUser();
              navigate("/");
            }}
            type="button"
            className="navbar-link"
          >
            Log Out
          </button>
        </nav>
      </nav>
      <Outlet />
    </>
  );
}
