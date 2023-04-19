import { useState, createContext, useEffect } from "react";
import {
  createAdminDocumentFromAuth,
  onAuthStateChangedListener
} from "../firebase.utils"

import { useNavigate } from "react-router";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => {},
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  const navigate = useNavigate()

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createAdminDocumentFromAuth(user);
        setCurrentUser(user);
        navigate('/dashboard')
      }
      console.log(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};