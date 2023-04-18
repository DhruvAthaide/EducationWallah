import React, { useEffect, useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { useNavigate } from "react-router-dom";
import "./home.styles.css";

export default function Home() {
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!currentUser) {
      navigate("/");
    }
  }, []);

  return <div className="home-container">Home</div>;
}
