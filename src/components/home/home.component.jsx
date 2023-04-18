import React, { useEffect, useContext } from "react";
import "./home.styles.css";
import { UserContext } from "../../contexts/user.context";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!currentUser) {
      navigate("/");
    }
  }, []);
  return <div>Home</div>;
}
