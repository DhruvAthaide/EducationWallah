import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Head from "./Head";
import "./header.css";
import { UserContext } from "../../../contexts/user.context";
import { signOutUser } from "../../../utils/firebase/firebase.utils";
const Header = () => {
  const [click, setClick] = useState(false);
  const {currentUser} = useContext(UserContext)

  return (
    <>
      <Head />
      <header>
        <nav className="flexSB">
          <ul
            className={click ? "mobile-nav" : "flexSB "}
            onClick={() => setClick(false)}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/courses">All Courses</Link>
            </li>

            <li>
              <a
                href="https://www.youtube.com/@pragyapti/videos"
                target="_blank"
                rel="noreferrer"
              >
                Deaf?
              </a>
            </li>
            <li>
              <a
                href="https://script.google.com/macros/s/AKfycbxDUK6bsxzF13bxMClsm23XNZjgsxH1RtfuXR4Df1DJepW2yfY8nCla1jK8OV0oLXWS/exec"
                target="_blank"
                rel="noreferrer"
              >
                Submission
              </a>
            </li>
            <li>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://blog.byjus.com/tag/the-learning-tree/"
              >
                Learning Tree
              </a>
            </li>
            <li>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://deadsimplechat.com/Pv0g68xdf"
              >
                Chatroom
              </a>
            </li>
            <li>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://todo-sammy.netlify.app/"
              >
                Planner
              </a>
            </li>
            <li>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://talk.brave.com/ElQFR6Umnp9Bmlp2lspomyHfj8HlVzvGu04gROV4Ux4"
              >
                Live event
              </a>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          
          {/* <Link to="/auth" >
          <div color="red" className="start">
            <div className="button">LOG IN</div>
          </div>
          </Link> */}

        {currentUser ? (<div onClick={()=>{signOutUser(); window.location.assign('/auth') }} color="red" className="start">
          <div className="button">LOG OUT</div>
        </div>) : (<Link to="/auth" >
          <div  className="start">
            <div className="button">LOG IN</div>
          </div>
          </Link>)
      }
          <button className="toggle" onClick={() => setClick(!click)}>
            {click ? (
              <i className="fa fa-times"> </i>
            ) : (
              <i className="fa fa-bars"></i>
            )}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;